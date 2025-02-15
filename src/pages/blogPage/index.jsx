import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import './index.scss'
import { useParams } from 'react-router-dom';
import client from '../../contentful';
import { useEffect, useState } from 'react';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import BlogCard from '../../components/blogCard';
import SubscribeCard from '../../components/subscribeCard';
import {BLOCKS} from '@contentful/rich-text-types';
import {Helmet} from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ContactCard from '../../components/contactCard';

const BlogPage = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
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
            <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '18px', color: 'rgb(77, 77, 77)' }}>{children}</p>
        ),
        [BLOCKS.HEADING_1]: (node, children) => (
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '25px', color: '#000' }}>{children}</h1>
        ),
        [BLOCKS.HEADING_2]: (node, children) => (
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '22px', color: '#000' }}>{children}</h2>
        ),
        [BLOCKS.HEADING_3]: (node, children) => (
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '22px', color: '#000' }}>{children}</h3>
        ),
        [BLOCKS.HEADING_4]: (node, children) => (
            <h4 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '22px', color: '#000' }}>{children}</h4>
        ),
        [BLOCKS.HEADING_5]: (node, children) => (
            <h5 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '22px', color: '#000' }}>{children}</h5>
        ),
        [BLOCKS.HEADING_6]: (node, children) => (
            <h6 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '22px', color: '#000' }}>{children}</h6>
        ),
        }
    }
    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await client.getEntries({
                    content_type: 'blogPage',
                    'fields.slug': slug,
                    include: 3
                });
                setBlog(response.items[0]);
                console.log('Available blogs:', response.items);
            } catch (error) {
                console.log('Error fetching blog post:', error);
            }
        }
        fetchBlog();
    }, [slug]);


    if (!blog) {
        return (
            <DashboardLayout>
                <div className="blog-page">
                    <h4 className='blog-page-title'>
                        Loading...
                    </h4>
                </div>
            </DashboardLayout>
        );
    }
    return (
        <DashboardLayout>
            <Helmet>
                <title>{blog.fields.title}</title>
                <meta name="description" content={blog.fields.description} />
                <meta name="keywords" content={blog.fields.keywords} />
                <meta property="og:title" content={blog.fields.title} />
                <meta property="og:description" content={blog.fields.description} />
                <meta property="og:image" content={blog.fields.image.fields.file.url} />
                <meta property="og:url" content={`https://yourwebsite.com/blog/${blog.fields.slug}`} />
                <meta property="og:type" content="article" />
                <meta property="og:locale" content="en_US" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@yourwebsite" />
                <meta name="twitter:creator" content="@yourwebsite" />
            </Helmet>
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
                    <Link to="/contact" className="author__name">
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
                {/* <SubscribeCard /> */}
                <ContactCard />
            </div>
        </DashboardLayout>
    );
}

export default BlogPage;