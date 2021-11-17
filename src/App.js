import logo from './logo.svg';
import './App.css';
import BlogCard from './BlogCard';
function App() {
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

  const biodata = [
    {
      id: 1,
      firstName:  'Kirit',
      lastName: 'Pendyala',
      Hobby: 'Cooking, Software',
      age: 27 
    },
    {
      id: 2,
      firstName:  'Kirit',
      lastName: 'Pendyala',
      Hobby: 'Cooking, Software',
      age: 27 
    },
    {
      id: 3,
      firstName:  'Kirit',
      lastName: 'Pendyala',
      Hobby: 'Cooking, Software',
      age: 27 
    }
  ]

  const blogCards = biodata.map((item, pos) => { 
    // console.log(item);
     
    return (

      <BlogCard key={pos} firstName={item.firstName} lastName={item.lastName} Hobby={item.Hobby}/> 
      // <div className="BlogCard" key={item.id}>
      //   <h3>{item.firstName}</h3>
      //   <p>{item.lastName}</p>
      //   <p>{item.age}</p>
      //   <p>{item.Hobby}</p>
      // </div>
    )
  })
  
  return (
    <div className="App">

      {blogCards}
      
      
    </div>
  );
}

export default App;
