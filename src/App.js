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
import MoviePage from './Components/Pages/MoviePage';


const staticData = {
  Search: [
    {
      "Title": "",
      "Year": "",
      "imdbID": "",
      "Type": "",
      "Poster": ""
    }
  ]
  // "totalResults": "144",
  // "Response": "True"
}

// http://www.omdbapi.com/?i=tt3896198&apikey=182921fd
// 1559x

function App() {

  const [data, setData] = useState({});
  const [movie, setMovie] = useState('Avengers')
  const [page, setPage] = useState(1)


  useEffect(() => {

    // axios.get(`http://www.omdbapi.com/?t=${movie}&apikey=182921fd`)
    // axios.get(`http://www.omdbapi.com/?t=${movie}&page=3&apikey=182921fd`)
    //   .then(response => response)
    //   .then(result => {
    //     // setData(result.data)
    //     console.log(result.data)
    //   })
    //   .catch(e => console.log("error msg: ", e))

    axios.get(`http://www.omdbapi.com/?s=${movie}&page=${page}&apikey=182921fd`)
      .then(response => response)
      .then(result => {
        // setData(result.data)
        // console.log(result.data.Search)
        if (result.data.Search) {
          setData(result.data.Search)
        }
        else {
          setData(staticData.Search)
        }
      })
      .catch(e => console.log("error msg: ", e))

    console.log(movie)

  }, [movie, page])

  return (
    <>
      <BrowserRouter>
        <Link index='true' to='/*'></Link>
        <Routes>
          <Route exact index path='/*' element={<Home data={data} setMovie={setMovie} page={page} setPage={setPage} />}></Route>
          <Route index path='/movie/:movieId' element={<MoviePage/>}></Route>
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
