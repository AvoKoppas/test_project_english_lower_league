import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [responseData, setResponseData] = useState(['Here comes info']);
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
                console.log(response)
                setResponseData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <div className="container-fluid p-3">
            <button type='button' onClick={fetchData}> click for football data
            </button>
            <table border={2}>
                <li>
                    {JSON.stringify(responseData, null, 4)} <br/>
                </li>
            </table>
        </div>
    );
}

export default App;