import React from 'react'
import { dumpLogs } from './Utils'; 

import classes from './BlogCard.module.css';
const BlogCard = (properties) => {
    dumpLogs(properties);
    // console.log(dumpLogs);
    return (
        <div className={classes.NewBlogCard}>
            <h3> { properties.firstName}</h3>
            <p>{properties.lastName}</p>
            <p>{properties.Hobby}</p>
        </div>

    )
}

export default BlogCard;