import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = 'Kirit';
  const lastName = 'Pendyala';
  const age = 27;
  // const getFullName = (firstName, lastName) => {
  //   return `${firstName} ${lastName}`
  // }
  const Biodata = {
    firstName:  'Kirit',
    lastName: 'Pendyala',
    Hobby: 'Cooking, Software',
    age: 27 
  }

  
  return (
    <div className="App">
      {/* <h3> Full name : {firstName} {lastName}</h3>
      <h4> Full name: {`${firstName} ${lastName}`}</h4>
      <h5> {getFullName('Kirit', 'Pendyalaaa')}</h5>
      <p> Age : {age}</p> */}
      <div className="BlogCard">
        <h3>{Biodata.firstName}</h3>
        <p>{Biodata.lastName}</p>
        <hr></hr>
      </div>
      <div className="BlogCard">
        <h3>{Biodata.age}</h3>
        <p>{Biodata.age}</p>
        <hr></hr>
      </div>
      <div className="BlogCard">
        <h3>{Biodata.Hobby}</h3>
        <p>{Biodata.Hobby}</p>
        <hr></hr>
      </div>
    </div>
  );
}

export default App;
