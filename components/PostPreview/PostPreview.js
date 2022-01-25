import React from "react";
import Link from "next/link";

export default function PostPreview({ post }) {
    return (
        <Link href={`/posts/${post.id}`}>
            <div>
                <h2>{post.title}</h2>
                <h3>{post.id}</h3>
                <p>{post.description}</p>
            </div>
        </Link>
    )
}