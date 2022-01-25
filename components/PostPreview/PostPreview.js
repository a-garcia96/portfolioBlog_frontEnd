import React from "react";
import Link from "next/link";

import Card from "react-bootstrap/Card";
import CardGroup from 'react-bootstrap/CardGroup';

export default function PostPreview({ post }) {
    return (
        <Link href={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
            <h3>{post.id}</h3>
            <p>{post.description}</p>
        </Link>
    )
}