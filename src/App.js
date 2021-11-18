import logo from './logo.svg';
import './App.css';
import { isArrayEmpty } from './Utils';
import BlogCard from './BlogCard';
import React, {Component} from 'react';

class App extends Component {
  state = {
    showBlogs: true
  }





  // const firstName = 'Kirit';
  // const lastName = 'Pendyala';
  // const age = 27;
  // const getFullName = (firstName, lastName) => {
  //   return `${firstName} ${lastName}`
  // }
  // const Biodata = {
  //   firstName:  'Kirit',
  //   lastName: 'Pendyala',
  //   Hobby: 'Cooking, Software',
  //   age: 27 
  // }

    biodata = [
    {
      id: 1,
      firstName:  'Kirit',
      lastName: 'Pendyala',
      Hobby: 'Cooking, Software',
      age: 27 ,
      likeCount: 30
    },
    {
      id: 2,
      firstName:  'Kirit',
      lastName: 'Pendyala',
      Hobby: 'Cooking, Software',
      age: 27,
      likeCount: 10
    },
    {
      id: 3,
      firstName:  'Kirit',
      lastName: 'Pendyala',
      Hobby: 'Cooking, Software',
      age: 27,
      likeCount: 20
    }
  ]



  onLikeBtnClick = (pos) => {
    alert('Like Button Clicked at pos =>' + pos);
  }
  
  // showBlogs = true;

   blogCards = isArrayEmpty(this.biodata) ? [] : this.biodata.map((item, pos) => { 
    // console.log(item);
     
    return (

      <BlogCard key={pos} firstName={item.firstName} lastName={item.lastName} 
                          Hobby={item.Hobby} likeCount={item.likeCount} id={item.id}
                          onLikeBtnClick={() => this.onLikeBtnClick(pos)}
                          /> 
      // <div className="BlogCard" key={item.id}>
      //   <h3>{item.firstName}</h3>
      //   <p>{item.lastName}</p>
      //   <p>{item.age}</p>
      //   <p>{item.Hobby}</p>
      // </div>
    )
  })

   onHideBtnClick =() =>{
    // this.showBlogs = false;
    // this.setState({showBlogs:false});
    let updatedState = !this.state.showBlogs;
    // this.setState({showBlogs: updatedState});
    this.setState((prevState, prevProps) => {
      return {showBlogs: !prevState.showBlogs}
    });
    console.log(this.showBlogs);
  }


  render(){
    console.log('Render Called');
    return(
      <div className="App">
      <button onClick={this.onHideBtnClick}>  {this.state.showBlogs ? 'Hide List' : 'Show List'} </button>
      <br></br>
      {
        this.state.showBlogs ? this.blogCards : null
      }
    </div>
    )
  }


}

export default App;
