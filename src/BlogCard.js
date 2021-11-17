import React from 'react'
const BlogCard = (properties) => {
    console.log(properties);
    return (
        <div className="BlogCard">
            <h3> { properties.firstName}</h3>
            <p>{properties.lastName}</p>
            <p>{properties.Hobby}</p>
        </div>

    )
}

export default BlogCard;