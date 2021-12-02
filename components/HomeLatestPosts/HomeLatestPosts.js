import React, { useEffect, useState } from "react"
import PostPreview from "../PostPreview/PostPreview";

import Row from "react-bootstrap/Row"

export default function HomeLatestPosts({ posts }) {
    const [latestPosts, setLatestPosts] = useState([]);

    useEffect(() => {
        setLatestPosts(posts.slice(0, 5));
    }, [posts])

    const previews = latestPosts.map((post) => <PostPreview post={post} key={post.id} />);

    return (
        <section className="featuredPosts">
            <Row xs={1} md={2} className="g-4">
                {previews}
            </Row>
        </section>
    )
}