import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [responseData, setResponseData] = useState(['']);
    const [movieTitle, setMovieTitle] = useState(['']);
    const [yearOfRelease, setYearOfRelease] = useState(['']);
    const [stars, setStars] = useState(['']);
    const options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/auto-complete',
        params: {q: 'homeland'},
        headers: {
            'x-rapidapi-key': '457a49cbd2msh587809b267ee184p1965ffjsn4b06828b27cb',
            'x-rapidapi-host': 'imdb8.p.rapidapi.com'
        }
    };
    const fetchData = useCallback(() => {
        axios(options)

            .then((response) => {
                console.log(response)
                setResponseData(response.data.d[0]);
                setMovieTitle(response.data.d[0].l);
                setYearOfRelease(response.data.d[0].y);
                setStars(response.data.d[0].s);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [options]);
    console.log(responseData.l);
    return (
        <div>
            <input type={<textarea name="title" id="titleId" cols="30" rows="10"/>}/>
            <button type='button' onClick={fetchData}> click for movie data
            </button>
            <p>
                The movie: {movieTitle}<br/>
                The year of release: {yearOfRelease}<br/>
                The stars: {stars}<br/>
            </p>

        </div>
    );
}

export default App;