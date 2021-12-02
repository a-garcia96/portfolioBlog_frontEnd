import React from "react";
import Link from "next/link";

import Card from "react-bootstrap/Card";
import CardGroup from 'react-bootstrap/CardGroup';

export default function PostPreview({ post }) {
    return (
        <Link href={`/posts/${post.id}`}>
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Subtitle>{post.id}</Card.Subtitle>
                        <Card.Text>
                            {post.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Link>
    )
}