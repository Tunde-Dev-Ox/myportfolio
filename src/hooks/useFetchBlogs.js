// import client from "../contentful";
// import { useEffect, useState } from "react";

// const useFetchBlogs = ({ contentType = "blogPage", limit = 100, order = "-fields.date" }) => {
//     const [blogsPreview, setBlogsPreview] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect (() => {
//         const fetchPreview = async () => {
//             try {
//                 const response = await client.getEntries({
//                     content_type: contentType,
//                     limit,
//                     order
//                 });
//                 setBlogsPreview(response.items || [])
//             } catch (err) {
//                 setError(err)
//             } finally {
//                 setLoading(false)
//             }
//         }
//         fetchPreview();
//     }, [contentType, limit, order])

//     return {blogsPreview, loading, error}
// }

// export default useFetchBlogs;



// hooks/useFetchBlogs.js
import { useState, useEffect } from 'react';
import { createClient } from 'contentful';

// Environment variables should be prefixed with NEXT_PUBLIC_ to be accessible in client components
const useFetchBlogs = ({ contentType }) => {
  const [blogsPreview, setBlogsPreview] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Use environment variables with NEXT_PUBLIC_ prefix
        const client = createClient({
          space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
          accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY || '',
          // Add fallback/error handling for missing credentials
        });

        // If credentials are missing, handle gracefully
        if (!process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) {
          console.warn('Contentful access token is missing');
          setBlogsPreview([]);
          setLoading(false);
          return;
        }

        const response = await client.getEntries({
          content_type: contentType,
          order: '-sys.createdAt'
        });

        setBlogsPreview(response.items);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching from Contentful:', err);
        setError(err);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [contentType]);

  return { blogsPreview, loading, error };
};

export default useFetchBlogs;