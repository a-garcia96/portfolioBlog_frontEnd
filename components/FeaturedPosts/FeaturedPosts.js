import React, { useEffect, useState } from "react"
import PostPreview from "../PostPreview/PostPreview";

export default function FeaturedPosts({ posts }) {
    const [latestPosts, setLatestPosts] = useState([]);

    useEffect(() => {
        setLatestPosts(posts.slice(0, 5));
    }, [posts])

    const previews = latestPosts.map((post) => <PostPreview post={post} key={post.id} />);

    return (
        <section className="featuredPosts">
            {previews}
        </section>
    )
}