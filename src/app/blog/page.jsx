"use client";
import DashboardLayout from "../../components/DashboardLayout";
import "./index.scss";
import Link from "next/link";
import BlogCard from "../../components/blogCard";
import useFetchBlogs from '../../hooks/useFetchBlogs'
import ContactCard from "../../components/contactCard";
import { useEffect, useState } from "react";
import { stringify, parse } from "flatted";

const Blog = () => {
    const [cachedBlogs, setCachedBlogs] = useState(null);
    const { blogsPreview, loading, error } = useFetchBlogs({ contentType: "blogPage" });

    // Ensure localStorage is accessed only in the browser
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedBlogs = localStorage.getItem("blogsPreview");
            if (storedBlogs) {
                setCachedBlogs(parse(storedBlogs));
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined" && blogsPreview.length > 0) {
            localStorage.setItem("blogsPreview", stringify(blogsPreview));
            setCachedBlogs(blogsPreview);
        }
    }, [blogsPreview]);

    const blogs = cachedBlogs || blogsPreview;

    if (loading) return (
        <DashboardLayout>
            <p>Loading...</p>
        </DashboardLayout>
    );

    if (error) return (
        <DashboardLayout>
            <p>Error occurred...</p>
        </DashboardLayout>
    );

    return (
        <DashboardLayout>
            <div className="blog">
                <div className="home__top">
                    <h1 className='home-title'>My writings📝</h1>
                    <div className="availability">
                        <div className="available">
                            <div className="green_blink"></div>
                            <span>Available for work</span>
                        </div>
                        <div className="contact-btn">
                            <Link href="/contact">
                                <span>Contact Me</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <p className='home-about'>
                    I write about products, product management, project management, software, leadership and life in general. I share my thoughts, experiences, and knowledge on these topics. I hope you find them helpful and interesting. Enjoy!🚀
                </p>
                {blogs && blogs.length > 0 ? (
                    <>
                        {blogs[0]?.fields?.image && (
                            <div className="blog__top-card-wrapper">
                                <Link href={`/blog/${blogs[0]?.fields?.slug}`} passHref className="blog__top-card">
                                    <img 
                                        src={`${blogs[0].fields.image.fields.file.url}?q=35`}
                                        alt={blogs[0].fields.image.fields.title || ""}
                                    />
                                    <div className="blog__top-card-content">
                                        <span>{blogs[0].fields.date}</span>
                                        <h3>{blogs[0].fields.title}</h3>
                                    </div>
                                </Link>
                            </div>
                        )}
                        <h2 className="all_blogs__header">All Articles</h2>
                        <div className="all_blogs__wrapper">
                            {blogs.slice(1).map((blog) => (
                                blog?.fields?.image && (
                                    <BlogCard
                                        key={blog.sys.id}
                                        title={blog.fields.title}
                                        date={blog.fields.date}
                                        tag={blog.fields.tag}
                                        img={`${blog.fields.image.fields.file.url}?q=35`}
                                        link={`/blog/${blog.fields.slug}`}
                                        alt={blog.fields.image.fields.title}
                                    />
                                )
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="blog__loading">Loading...</div>
                )}
                <ContactCard />
            </div>
        </DashboardLayout>
    );
}

export default Blog;
