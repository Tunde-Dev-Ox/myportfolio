import DashboardLayout from "../../components/DashboardLayout";
import "./index.scss";
// import styles from './module.index.scss'
import { Link } from "react-router-dom";
import BlogCard from "../../components/blogCard";
import SubscribeCard from "../../components/subscribeCard";
import useFetchBlogs from '../../hooks/useFetchBlogs'
import {Helmet} from 'react-helmet-async';


const Blog = () => {
    const {blogsPreview, loading, error} = useFetchBlogs({ contentType: "blogPage" });
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
                <h1 className="blog__header">Blog</h1>
                <p className="blog__subtitle">
                    Every wednesdays and sundays, I post articles on product management, project management, software development, startup, my journey and more.
                </p>
                {
                    blogsPreview.length > 0 ? (
                        <>
                            <div className="blog__top-card-wrapper">
                                <Link 
                                to={`/blog/${blogsPreview[0].fields.slug}`}
                                className="blog__top-card">
                                    <img 
                                    src={`${blogsPreview[0].fields.image.fields.file.url}?q=35`}
                                    alt={blogsPreview[0].fields.image.fields.title || ""}
                                    />
                                    <div className="blog__top-card-content">
                                        <span>
                                            {blogsPreview[0].fields.date}
                                        </span>
                                        <h3>
                                            {blogsPreview[0].fields.title}
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
                <SubscribeCard />
            </div>
        </DashboardLayout>
    );
}

export default Blog;