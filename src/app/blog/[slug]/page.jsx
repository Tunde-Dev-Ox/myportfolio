// // Updated /blog/[slug]/page.js
// "use client";
// export const dynamic = 'force-dynamic';
// import React from 'react';
// import DashboardLayout from '../../../components/DashboardLayout';
// import './index.scss';
// import { useParams } from 'next/navigation';
// import client from '../../../contentful';
// import { useEffect, useState } from 'react';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import BlogCard from '../../../components/blogCard';
// import { BLOCKS } from '@contentful/rich-text-types';
// import Link from 'next/link';
// import ContactCard from '../../../components/contactCard';
// // Remove Head import - we'll handle metadata differently

// const BlogPage = () => {
//     const params = useParams();
//     const slug = params.slug;
    
//     const [blog, setBlog] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [metaDescription, setMetaDescription] = useState('');
    
//     // Add a mounted state to prevent hydration mismatch
//     const [isMounted, setIsMounted] = useState(false);
    
//     const options = {
//         renderText: (text) =>
//             text.split('\n').map((segment, index) => (
//                 <React.Fragment key={index}>
//                     {segment}
//                     {index < text.split('\n').length - 1 && <br />}
//                 </React.Fragment>
//             )),
//         renderNode: {
//             [BLOCKS.PARAGRAPH]: (node, children) => (
//                 <p style={{ fontSize: '15px', lineHeight: '1.6', marginBottom: '18px', color: 'rgb(77, 77, 77)'}}>{children}</p>
//             ),
//             [BLOCKS.HEADING_1]: (node, children) => (
//                 <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '25px', color: '#000'}}>{children}</h1>
//             ),
//             [BLOCKS.HEADING_2]: (node, children) => (
//                 <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '22px', color: '#000'}}>{children}</h2>
//             ),
//             [BLOCKS.HEADING_3]: (node, children) => (
//                 <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '22px', color: '#000'}}>{children}</h3>
//             ),
//             [BLOCKS.HEADING_4]: (node, children) => (
//                 <h4 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '22px', color: '#000'}}>{children}</h4>
//             ),
//             [BLOCKS.HEADING_5]: (node, children) => (
//                 <h5 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '22px', color: '#000'}}>{children}</h5>
//             ),
//             [BLOCKS.HEADING_6]: (node, children) => (
//                 <h6 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '22px', color: '#000'}}>{children}</h6>
//             ),
//         }
//     };

//     // Set mounted state to true after initial render
//     useEffect(() => {
//         setIsMounted(true);
//     }, []);

//     useEffect(() => {
//         const fetchBlog = async () => {
//             if (!slug) return;
            
//             setLoading(true);
//             try {
//                 console.log(`Fetching blog with slug: ${slug}`);
//                 const response = await client.getEntries({
//                     content_type: 'blogPage',
//                     'fields.slug': slug,
//                     include: 3
//                 });
                
//                 console.log(`API response received, items: ${response.items.length}`);
                
//                 if (response.items.length > 0) {
//                     setBlog(response.items[0]);
                    
//                     // Extract first paragraph for meta description
//                     if (response.items[0].fields.body) {
//                         const content = response.items[0].fields.body.content;
//                         const firstParagraph = content.find(item => 
//                             item.nodeType === 'paragraph' && 
//                             item.content && 
//                             item.content.length > 0 &&
//                             item.content[0].value
//                         );
                        
//                         if (firstParagraph) {
//                             // Limit to ~160 characters for meta description
//                             const description = firstParagraph.content[0].value;
//                             setMetaDescription(description.length > 160 
//                                 ? description.substring(0, 157) + '...' 
//                                 : description);
//                         }
//                     }
                    
//                     console.log('Blog fetched successfully');
//                 } else {
//                     setError('Blog not found');
//                     console.log('No blog found with slug:', slug);
//                 }
//             } catch (error) {
//                 setError('Error fetching blog');
//                 console.error('Error fetching blog post:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };
        
//         if (isMounted) {
//             fetchBlog();
//         }
//     }, [slug, isMounted]);

//     // Function is defined but never used directly in JSX - we'll remove this
//     // const getFullImageUrl = (url) => url ? `https:${url}` : '';

//     // Don't render anything during initial render to prevent hydration mismatch
//     if (!isMounted) {
//         return null;
//     }

//     if (loading) {
//         return (
//             <DashboardLayout>
//                 <div className="blog-page">
//                     <h4 className='blog-page-title'>
//                         Loading...
//                     </h4>
//                 </div>
//             </DashboardLayout>
//         );
//     }

//     if (error || !blog) {
//         return (
//             <DashboardLayout>
//                 <div className="blog-page">
//                     <h4 className='blog-page-title'>
//                         {error || 'Blog not found'}
//                     </h4>
//                     <Link href="/blog">
//                         <span className="back-to-blogs">Back to all blogs</span>
//                     </Link>
//                 </div>
//             </DashboardLayout>
//         );
//     }

//     const imageUrl = blog.fields.image?.fields?.file?.url || '';
//     // The line below was causing the TypeScript error - we'll remove it since it's not used
//     // const fullImageUrl = getFullImageUrl(imageUrl);

//     return (
//         <DashboardLayout>
//             <div className="blog_page">
//                 <h1 className='blog_page__title'>
//                     {blog.fields.title}
//                 </h1>
//                 <div className="blog-page__details">
//                     <span className='blog_page__date'>
//                         {blog.fields.date}
//                     </span>
//                     <span className='blog_page__tag'>
//                         {blog.fields.tag}
//                     </span>
//                 </div>
//                 <div className="blog_page__image">
//                     {imageUrl && (
//                         <img
//                             src={`${imageUrl}?q=35`}
//                             alt={blog.fields.image?.fields?.title || ''}
//                         />
//                     )}
//                 </div>
//                 <div className="author__details">
//                     <Link href="/contact" className="author__name">
//                         {blog.fields.avatar?.fields?.file?.url && (
//                             <img 
//                                 src={`${blog.fields.avatar.fields.file.url}?q=35`} 
//                                 alt="" 
//                             />
//                         )}
//                         <span className='author__name_text'>
//                             {blog.fields.authorName}
//                         </span>
//                     </Link>
//                     <span className='blog_page__tag'>
//                         {blog.fields.tag}
//                     </span>
//                 </div>
//                 <div className="blog_empty__div"></div>
//                 <div className="blog_page__content">
//                     {blog.fields.body && documentToReactComponents(blog.fields.body, options)}
//                 </div>
//                 {blog.fields.recommendedPosts && blog.fields.recommendedPosts.length > 0 && (
//                     <div className="recommended__posts">
//                         <h2 className="recommended__posts_title">
//                             Related Posts
//                         </h2>
//                         <div className="recommended__posts_wrapper">
//                             {blog.fields.recommendedPosts.map((post) => (
//                                 <BlogCard
//                                     key={post.sys.id}
//                                     title={post.fields.title}
//                                     date={post.fields.date}
//                                     tag={post.fields.tag}
//                                     img={post.fields.image?.fields?.file?.url ? `${post.fields.image.fields.file.url}?q=35` : ''}
//                                     link={`/blog/${post.fields.slug}`}
//                                     alt={post.fields.image?.fields?.title || ''}
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                 )}
//                 <ContactCard />
//             </div>
//         </DashboardLayout>
//     );
// };

// export default BlogPage;




































// app/blog/[slug]/page.js (Server Component - No "use client")
// import React from 'react';
// import { notFound } from 'next/navigation';
// import DashboardLayout from '../../../components/DashboardLayout';
// import './index.scss';
// import client from '../../../contentful';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import { BLOCKS } from '@contentful/rich-text-types';
// import Link from 'next/link';
// import ContactCard from '../../../components/contactCard';
// import BlogCard from '../../../components/blogCard';

// app/blog/[slug]/page.js - Add metadata export to the same file
import React from 'react';
import { notFound } from 'next/navigation';
import DashboardLayout from '../../../components/DashboardLayout';
import './index.scss';
import client from '../../../contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Link from 'next/link';
import ContactCard from '../../../components/contactCard';
import BlogCard from '../../../components/blogCard';

// Add this metadata function to the same file as your page component
export async function generateMetadata({ params }) {
  const { slug } = params;
  
  // Fetch the blog post
  try {
    const response = await client.getEntries({
      content_type: 'blogPage',
      'fields.slug': slug,
      include: 1
    });
    
    if (response.items.length === 0) {
      return {
        title: 'Blog Post Not Found',
        description: 'The requested blog post could not be found.'
      };
    }
    
    const blog = response.items[0];
    
    // Extract first paragraph for description
    let description = '';
    if (blog.fields.body) {
      const content = blog.fields.body.content;
      const firstParagraph = content.find(item => 
        item.nodeType === 'paragraph' && 
        item.content && 
        item.content.length > 0 &&
        item.content[0].value
      );
      
      if (firstParagraph) {
        description = firstParagraph.content[0].value;
        description = description.length > 160 
          ? description.substring(0, 157) + '...' 
          : description;
      }
    }
    
    // Make sure the image URL is absolute and includes https:
    const imageUrl = blog.fields.image?.fields?.file?.url 
      ? `https:${blog.fields.image.fields.file.url}` 
      : '';
    
    return {
      title: blog.fields.title,
      description: description,
      openGraph: {
        title: `${blog.fields.title} | Joseph Tunde`,
        description: description,
        url: `https://www.josephtunde.me/blog/${slug}`,
        siteName: 'Joseph Tunde',
        images: imageUrl ? [{ url: imageUrl, secure_url: imageUrl }] : [],
        locale: 'en_US',
        type: 'article',
        article: {
          publishedTime: blog.fields.date,
          tags: [blog.fields.tag]
        }
      },
      twitter: {
        card: 'summary_large_image',
        title: blog.fields.title,
        description: description,
        images: imageUrl ? [{ url: imageUrl }] : [],
        site: '@__jot',
        creator: '@__jot',
      },
      linkedin: {
        title: blog.fields.title,
        description: description,
        images: imageUrl ? [{ url: imageUrl }] : [],
        sites: '@josephtunde',
        handle: '@josephtunde',
        author: 'Joseph Tunde',
        type: 'article',
      },
      alternates: {
        canonical: `https://www.josephtunde.me/blog/${slug}`
      }
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Blog',
      description: 'Read my blog posts on product management, leadership, and more.'
    };
  }
}


// 1. Fetch data from Contentful on the server
// export async function generateStaticParams() {
//   const response = await client.getEntries({ content_type: 'blogPage' });
//   return response.items.map((item) => ({ slug: item.fields.slug }));
// }

export default async function BlogPage({ params }) {
  const { slug } = params;

  // 1. Fetch data from Contentful on the server
  let blog;
  try {
    console.log(`Fetching blog with slug: ${slug}`);
    const response = await client.getEntries({
      content_type: 'blogPage',
      'fields.slug': slug,
      include: 3,
    });

    if (!response?.items?.length) {
      // If no blog found, render a 404 page
      console.log(`No blog found for slug: ${slug}`);
      return notFound();
    }

    blog = response.items[0];
  } catch (error) {
    console.error('Error fetching blog post:', error);
    // Render a 404 if something goes wrong
    return notFound();
  }

  // 2. Set up rendering options for Rich Text
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
        <p
          style={{
            fontSize: '15px',
            lineHeight: '1.6',
            marginBottom: '18px',
            color: 'rgb(77, 77, 77)',
          }}
        >
          {children}
        </p>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '25px',
            color: '#000',
          }}
        >
          {children}
        </h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2
          style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '22px',
            color: '#000',
          }}
        >
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3
          style={{
            fontSize: '22px',
            fontWeight: 'bold',
            marginBottom: '22px',
            color: '#000',
          }}
        >
          {children}
        </h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '22px',
            color: '#000',
          }}
        >
          {children}
        </h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '22px',
            color: '#000',
          }}
        >
          {children}
        </h5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6
          style={{
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '22px',
            color: '#000',
          }}
        >
          {children}
        </h6>
      ),
    },
  };

  // 3. Render your blog post with DashboardLayout
  const imageUrl = blog.fields.image?.fields?.file?.url || '';
  const recommendedPosts = blog.fields.recommendedPosts || [];

  return (
    <DashboardLayout>
      <div className="blog_page">
        <h1 className="blog_page__title">{blog.fields.title}</h1>

        <div className="blog-page__details">
          <span className="blog_page__date">{blog.fields.date}</span>
          <span className="blog_page__tag">{blog.fields.tag}</span>
        </div>

        <div className="blog_page__image">
          {imageUrl && (
            <img
              src={`${imageUrl}?q=35`}
              alt={blog.fields.image?.fields?.title || ''}
            />
          )}
        </div>

        <div className="author__details">
          <Link href="/contact" className="author__name">
            {blog.fields.avatar?.fields?.file?.url && (
              <img
                src={`${blog.fields.avatar.fields.file.url}?q=35`}
                alt=""
              />
            )}
            <span className="author__name_text">{blog.fields.authorName}</span>
          </Link>
          <span className="blog_page__tag">{blog.fields.tag}</span>
        </div>

        <div className="blog_empty__div"></div>

        <div className="blog_page__content">
          {blog.fields.body && documentToReactComponents(blog.fields.body, options)}
        </div>

        {recommendedPosts.length > 0 && (
          <div className="recommended__posts">
            <h2 className="recommended__posts_title">Related Posts</h2>
            <div className="recommended__posts_wrapper">
              {recommendedPosts.map((post) => (
                <BlogCard
                  key={post.sys.id}
                  title={post.fields.title}
                  date={post.fields.date}
                  tag={post.fields.tag}
                  img={
                    post.fields.image?.fields?.file?.url
                      ? `${post.fields.image.fields.file.url}?q=35`
                      : ''
                  }
                  link={`/blog/${post.fields.slug}`}
                  alt={post.fields.image?.fields?.title || ''}
                />
              ))}
            </div>
          </div>
        )}
        <ContactCard />
      </div>
    </DashboardLayout>
  );
}