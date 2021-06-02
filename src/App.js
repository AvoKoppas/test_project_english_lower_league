import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [responseData, setResponseData] = useState(['']);
    const [endDate, setEndDate] = useState(['']);
    const [leagueData, setLeagueData] = useState(['']);
    const options = {
        method: 'GET',
        url: 'https://sportscore1.p.rapidapi.com/leagues/26',
        headers: {
            'x-rapidapi-key': '457a49cbd2msh587809b267ee184p1965ffjsn4b06828b27cb',
            'x-rapidapi-host': 'sportscore1.p.rapidapi.com'
        },
    };
    const fetchData = useCallback(() => {
        axios(options)

            .then((response) => {
                console.log(response.data)
                setResponseData(response.data.data);
                setEndDate(response.data.data.end_date);
                setLeagueData(response.data.data.facts[0]);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [options]);
    console.log(responseData);
    console.log(responseData.end_date);
    console.log(responseData.facts);
    return (
        <div className="container-fluid p-3">
            <button type='button' onClick={fetchData}> click for football data
            </button>
            <p>
                The facts: {leagueData && leagueData.facts}
            </p>
            <p>The end: {endDate}
            </p>
        </div>
    );
}

export default App;