// // import React from 'react';
// import { Helmet } from 'react-helmet-async';

// const Seo = ({ title, description, image, article = false, slug = '', publishedTime, twitterHandle = '@__jot'}) => {
//   const baseUrl = 'https://josephtunde.me';
//   const url = `${baseUrl}${slug ? `/${slug}` : ''}`;
//   const imageUrl = image?.startsWith('https') ? image : `${baseUrl}${image}`;


//   return (
//     <Helmet prioritizeSeoTags>
//       {/* Basic Meta Tags */}
//       <title>{title}</title>
//       <meta name="description" content={description} />
//       <link rel="canonical" href={url} />

//       {/* Open Graph */}
//       <meta property="og:site_name" content="Joseph Tunde" />
//       <meta property="og:url" content={url} />
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={description} />
//       <meta property="og:type" content={article ? 'article' : 'website'} />
//       {image && <meta property="og:image" content={imageUrl} />}
      
//       {/* Additional article tags */}
//       {article && (
//         <>
//           <meta property="article:author" content="https://www.linkedin.com/in/josephtunde/" />
//           {publishedTime && <meta property="article:published_time" content={publishedTime} />}
//         </>
//       )}

//       {/* Twitter Card */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:site" content={twitterHandle} />
//       <meta name="twitter:creator" content={twitterHandle} />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={description} />
//       {image && <meta name="twitter:image" content={imageUrl} />}
//     </Helmet>
//   );
// };

// export default Seo;