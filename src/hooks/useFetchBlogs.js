import client from "../contentful";
import { useEffect, useState } from "react";

const useFetchBlogs = ({ contentType = "blogPage", limit = 100, order = "-fields.date" }) => {
    const [blogsPreview, setBlogsPreview] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        const fetchPreview = async () => {
            try {
                const response = await client.getEntries({
                    content_type: contentType,
                    limit,
                    order
                });
                setBlogsPreview(response.items || [])
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchPreview();
    }, [contentType, limit, order])

    return {blogsPreview, loading, error}
}

export default useFetchBlogs;