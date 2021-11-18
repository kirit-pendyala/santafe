// import React, {Component} from 'react';
import React from 'react';
import { dumpLogs } from './Utils'; 

import classes from './BlogCard.module.css';
// const BlogCard = (properties) => {
//     class BlogCard extends Component {
//     render() {
//         dumpLogs(this.properties);
//         // console.log(dumpLogs);
//         return (
//             <div className={classes.NewBlogCard}>
//                 <h3> {this.properties.firstName}</h3>
//                 <p>{this.properties.lastName}</p>
//                 <p>{this.properties.Hobby}</p>
//             </div>
//         )
//     }
// }

//  class BlogCard extends Component {
//      state = {
//          likeCount: 0
//      }

//      onLikeBtnClick = () => {
//          this.setState((prevState, prevProp) => {
//              return {likeCount : prevState.likeCount + 1}
//             });
//      }
//      render(){
//          dumpLogs(this.props);
//          return(
//              <div className={classes.NewBlogCard}>
//                 <h3>{this.props.firstName}</h3>
//                 <h3>{this.props.lastName}</h3>
//                 <h3>{this.props.Hobby}</h3>
//                 <p> Like Count: <span className={classes.likeCount}>{this.state.likeCount}</span></p>
//                 <button onClick={this.onLikeBtnClick}>Like</button>
//              </div>
//          )
//      }
//  }


const BlogCard = (props) => {
    dumpLogs(props);

    return(
        <div className={classes.NewBlogCard}>
            <h3>{props.firstName}</h3>
            <p>{props.lastName}</p>
            <p>{props.age}</p>
            <p>{props.Hobby}</p>

            <p> Like Count: <span className={classes.LikeCount}> {props.likeCount} </span></p>
            <button onClick={() =>props.onLikeBtnClick(props.position)}>Like </button>
        </div>
    )
}


export default BlogCard;