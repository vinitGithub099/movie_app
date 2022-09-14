import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
} from 'react-router-dom'
import Home from './Components/Pages/Home';


// http://www.omdbapi.com/?i=tt3896198&apikey=182921fd
// 1559x

function App() {

  const [data, setData] = useState({});
  const [movie, setMovie] = useState('')

  useEffect(() => {

    // axios.get(`http://www.omdbapi.com/?t=${movie}&apikey=182921fd`)
    axios.get(`http://www.omdbapi.com/?t=Avengers&apikey=182921fd`)
      .then(response => response)
      .then(result => {
        setData(result.data)
        console.log(result.data)
      })
      .catch(e => console.log("error msg: ", e))

  }, [movie])

  return (
    <>
      <BrowserRouter>
      <Link to='/'></Link>
      <Routes>
        <Route exact path='/' element={<Home data={data}/>}></Route>
      </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
