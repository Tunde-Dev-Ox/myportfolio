import DashboardLayout from "../../components/DashboardLayout";
import "./index.scss";
import { Link } from "react-router-dom";
import BlogCard from "../../components/blogCard";
import SubscribeCard from "../../components/subscribeCard";
import useFetchBlogs from '../../hooks/useFetchBlogs'
import {Helmet} from 'react-helmet-async';
import ContactCard from "../../components/contactCard";
import { useEffect, useState } from "react";
import { stringify, parse } from "flatted";


const Blog = () => {
    const [cachedBlogs, setCachedBlogs] = useState(() => {
        const storedBlogs = localStorage.getItem("blogsPreview");
        return storedBlogs ? JSON.parse(storedBlogs) : null;
    });
    const {blogsPreview, loading, error} = useFetchBlogs({ contentType: "blogPage" });
    useEffect(() => {
        if (blogsPreview.length > 0) {
            localStorage.setItem("blogsPreview", stringify(blogsPreview));
            setCachedBlogs(blogsPreview);
        }
    }, [blogsPreview]);
    
    useEffect(() => {
        const storedBlogs = localStorage.getItem("blogsPreview");
        if (storedBlogs) {
            setCachedBlogs(parse(storedBlogs));
        }
    }, []);
    const blogs = cachedBlogs || blogsPreview;
    <DashboardLayout>
        if (loading) return <p>Loading</p>
        if (error) return <p>Error occured...</p>
    </DashboardLayout>
    return (
        <DashboardLayout>
        <Helmet>
            <title>
                Joseph Tunde - Blog
            </title>
        </Helmet>
            <div className="blog">
            <div className="home__top">
                    <h1 className='home-title'>
                        My writings📝
                    </h1>
                    <div className="availability">
                        <div className="available">
                            <div className="green_blink"></div>
                            <span>
                                Available for work
                            </span>
                        </div>
                        <div className="contact-btn">
                            <Link to="/contact">
                                <span>
                                    Contact Me
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <p className='home-about'>
                    I write about tech, programming, products, and life in general. I share my thoughts, experiences, and knowledge on these topics. I hope you find them helpful and interesting. Enjoy!🚀
                </p>
                {
                    blogsPreview.length > 0 ? (
                        <>
                            <div className="blog__top-card-wrapper">
                                <Link 
                                to={`/blog/${blogs[0].fields.slug}`}
                                className="blog__top-card">
                                    <img 
                                    src={`${blogs[0].fields.image.fields.file.url}?q=35`}
                                    alt={blogs[0].fields.image.fields.title || ""}
                                    />
                                    <div className="blog__top-card-content">
                                        <span>
                                            {blogs[0].fields.date}
                                        </span>
                                        <h3>
                                            {blogs[0].fields.title}
                                        </h3>
                                    </div>
                                </Link>
                            </div>
                            <h2 className="all_blogs__header">
                                All Articles
                            </h2>
                            <div className="all_blogs__wrapper">
                                {
                                    blogsPreview.slice(1).map((blog) => (
                                        <BlogCard
                                        key={blog.sys.id}
                                        title={blog.fields.title}
                                        date={blog.fields.date}
                                        tag={blog.fields.tag}
                                        img={`${blog.fields.image.fields.file.url}?q=35`}
                                        link={`/blog/${blog.fields.slug}`}
                                        alt={blog.fields.image.fields.title}
                                        />
                                    ))
                                }
                            </div>
                        </>
                    ) : (
                        <div className="blog__loading">
                            Loading...
                        </div>
                    )
                }
                {/* <div className="blog__pagination">
                    <button className="blog__pagination-button">1</button>
                    <button className="blog__pagination-button">2</button>
                    <button className="blog__pagination-button">3</button>
                    <button className="blog__pagination-button">4</button>
                    <button className="blog__pagination-button">5</button>
                    <button className="blog__pagination-button">6</button>
                    <button className="blog__pagination-button">7</button>
                    <button className="blog__pagination-button">8</button>
                    <button className="blog__pagination-button">9</button>
                    <button className="blog__pagination-button">10</button>
                </div> */}
                {/* <SubscribeCard /> */}
                <ContactCard />
            </div>
        </DashboardLayout>
    );
}

export default Blog;