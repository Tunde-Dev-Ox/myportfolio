// 2. Create this file: /blog/[slug]/head.js (or use metadata.js in Next.js 13.2+)
import client from '../../../contentful';

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
    
    const imageUrl = blog.fields.image?.fields?.file?.url 
      ? `https:${blog.fields.image.fields.file.url}` 
      : '';
    
    return {
      title: blog.fields.title,
      description: description,
      openGraph: {
        title: blog.fields.title,
        description: description,
        url: `https://www.josephtunde.me/blog/${slug}`,
        siteName: 'Joseph Tunde',
        images: imageUrl ? [{ url: imageUrl }] : [],
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
        images: imageUrl ? [imageUrl] : []
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