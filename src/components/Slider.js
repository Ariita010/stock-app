import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Slider = () => {
    const [data, setData] = useState(null);
    const apiKey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://yfapi.net/v6/finance/quote/marketSummary',
                    headers: {
                        'x-api-key': apiKey
                    }
                };

                const response = await axios.request(options);
                setData(response.data.marketSummaryResponse.result);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [apiKey]);// Write your Slider component here
