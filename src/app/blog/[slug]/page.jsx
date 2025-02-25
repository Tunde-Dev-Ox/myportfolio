"use client";

import React from 'react';
import DashboardLayout from '../../../components/DashboardLayout';
import './index.scss';
import { useParams } from 'next/navigation';
import client from '../../../contentful';
import { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import BlogCard from '../../../components/blogCard';
import { BLOCKS } from '@contentful/rich-text-types';
import Link from 'next/link';
import ContactCard from '../../../components/contactCard';
import Head from 'next/head';

const BlogPage = () => {
    const params = useParams();
    const slug = params.slug;
    
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [metaDescription, setMetaDescription] = useState('');
    
    const options = {
        renderText: (text) =>
            text.split('\n').map((segment, index) => (
                <React.Fragment key={index}>
                    {segment}
                    {index < text.split('\n').length - 1 && <br />}
                </React.Fragment>
            )),
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => (
                <p style={{ fontSize: '15px', lineHeight: '1.6', marginBottom: '18px', color: 'rgb(77, 77, 77)', letterSpacing: '.7px' }}>{children}</p>
            ),
            [BLOCKS.HEADING_1]: (node, children) => (
                <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '25px', color: '#000', letterSpacing: '.7px' }}>{children}</h1>
            ),
            [BLOCKS.HEADING_2]: (node, children) => (
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '22px', color: '#000', letterSpacing: '.7px' }}>{children}</h2>
            ),
            [BLOCKS.HEADING_3]: (node, children) => (
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '22px', color: '#000', letterSpacing: '.7px' }}>{children}</h3>
            ),
            [BLOCKS.HEADING_4]: (node, children) => (
                <h4 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '22px', color: '#000', letterSpacing: '.7px' }}>{children}</h4>
            ),
            [BLOCKS.HEADING_5]: (node, children) => (
                <h5 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '22px', color: '#000', letterSpacing: '.7px' }}>{children}</h5>
            ),
            [BLOCKS.HEADING_6]: (node, children) => (
                <h6 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '22px', color: '#000', letterSpacing: '.7px' }}>{children}</h6>
            ),
        }
    };

    useEffect(() => {
        const fetchBlog = async () => {
            if (!slug) return;
            
            setLoading(true);
            try {
                const response = await client.getEntries({
                    content_type: 'blogPage',
                    'fields.slug': slug,
                    include: 3
                });
                
                if (response.items.length > 0) {
                    setBlog(response.items[0]);
                    
                    // Extract first paragraph for meta description
                    if (response.items[0].fields.body) {
                        const content = response.items[0].fields.body.content;
                        const firstParagraph = content.find(item => 
                            item.nodeType === 'paragraph' && 
                            item.content && 
                            item.content.length > 0 &&
                            item.content[0].value
                        );
                        
                        if (firstParagraph) {
                            // Limit to ~160 characters for meta description
                            const description = firstParagraph.content[0].value;
                            setMetaDescription(description.length > 160 
                                ? description.substring(0, 157) + '...' 
                                : description);
                        }
                    }
                    
                    console.log('Blog fetched:', response.items[0]);
                } else {
                    setError('Blog not found');
                    console.log('No blog found with slug:', slug);
                }
            } catch (error) {
                setError('Error fetching blog');
                console.log('Error fetching blog post:', error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchBlog();
    }, [slug]);

    const getFullImageUrl = (url) => url ? `https:${url}` : '';


    if (loading) {
        return (
            <DashboardLayout>
                <Head>
                    <title>Loading Blog...</title>
                </Head>
                <div className="blog-page">
                    <h4 className='blog-page-title'>
                        Loading...
                    </h4>
                </div>
            </DashboardLayout>
        );
    }

    if (error || !blog) {
        return (
            <DashboardLayout>
                <Head>
                    <title>Blog Not Found</title>
                </Head>
                <div className="blog-page">
                    <h4 className='blog-page-title'>
                        {error || 'Blog not found'}
                    </h4>
                    <Link href="/blog">
                        <span className="back-to-blogs">Back to all blogs</span>
                    </Link>
                </div>
            </DashboardLayout>
        );
    }

    const imageUrl = blog.fields.image?.fields?.file?.url || '';
    const fullImageUrl = getFullImageUrl(blog.fields.image?.fields?.file?.url);


    return (
        <DashboardLayout>
            <Head>
                <title>{blog.fields.title}</title>
                <meta name="description" content={metaDescription} />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://josephtunde.me/blog/${slug}`} />
                <meta property="og:title" content={blog.fields.title} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:image" content={fullImageUrl} />
                <meta property="article:published_time" content={blog.fields.date} />
                <meta property="article:tag" content={blog.fields.tag} />
                
                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={`https://josephtunde.me/blog/${slug}`} />
                <meta property="twitter:title" content={blog.fields.title} />
                <meta property="twitter:description" content={metaDescription} />
                <meta property="twitter:image" content={fullImageUrl} />
                
                {/* Optional: Add canonical URL */}
                <link rel="canonical" href={`https://josephtunde.me/blog/${slug}`} />
            </Head>
            
            <div className="blog_page">
                <h1 className='blog_page__title'>
                    {blog.fields.title}
                </h1>
                <div className="blog-page__details">
                    <span className='blog_page__date'>
                        {blog.fields.date}
                    </span>
                    <span className='blog_page__tag'>
                        {blog.fields.tag}
                    </span>
                </div>
                <div className="blog_page__image">
                    <img
                    src={`${blog.fields.image.fields.file.url}?q=35`}
                    alt={blog.fields.image.fields.title || ''}
                    />
                </div>
                <div className="author__details">
                    <Link href="/contact" className="author__name">
                        <img 
                        src={`${blog.fields.avatar.fields.file.url}?q=35`} 
                        alt="" />
                        <span className='author__name_text'>
                            {blog.fields.authorName}
                        </span>
                    </Link>
                    <span className='blog_page__tag'>
                        {blog.fields.tag}
                    </span>
                </div>
                <div className="blog_empty__div"></div>
                <div className="blog_page__content">
                    {documentToReactComponents(blog.fields.body, options)}
                </div>
                {blog.fields.recommendedPosts && blog.fields.recommendedPosts.length > 0 && (
                    <div className="recommended__posts">
                        <h2 className="recommended__posts_title">
                            Related Posts
                        </h2>
                        <div className="recommended__posts_wrapper">
                            {blog.fields.recommendedPosts.map((post) => (
                                <BlogCard
                                key={post.sys.id}
                                title={post.fields.title}
                                date={post.fields.date}
                                tag={post.fields.tag}
                                img={`${post.fields.image.fields.file.url}?q=35`}
                                link={`/blog/${post.fields.slug}`}
                                alt={post.fields.image.fields.title}
                                />
                            ))}
                        </div>
                    </div>
                )}
                <ContactCard />
            </div>
        </DashboardLayout>
    );
};

export default BlogPage;