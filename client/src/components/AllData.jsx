import axios from 'axios'
import React from 'react'

const AllData = () => {
    const [data, setdata] = React.useState([])
    //6316ee5e6be6967b68cec2ee
    React.useEffect(() => {
        // axios.get("https://api.duffel.com/air/offers?offer_request_id=orq_0000ANHY09aqKDD2mGgiJ6",
        //     {
        //         'Content-Type':'application/json',
        //         "Accept-Encoding": "gzip",
        //         'Duffel-Version': 'beta',
        //         "Authorization": 'Bearer duffel_test_67NQAzfDGAv5cz_EteFREgJPpg9jOLxLsdswPwTU2Zd',
        //     })
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))

        

        

    }, [])
    const handleClick = () =>{
        const obj = {
            "data": {
                "slices": [
                    {
                        "origin": "LHR",
                        "destination": "JFK",
                        "departure_time": {
                            "to": "17:00",
                            "from": "09:45"
                        },
                        "departure_date": "2022-09-24",
                        "arrival_time": {
                            "to": "17:00",
                            "from": "09:45"
                        }
                    }
                ],
                "private_fares": {
                    "QF": [
                        {
                            "tracking_reference": "ABN:2345678",
                            "corporate_code": "FLX53"
                        }
                    ]
                },
                "passengers": [
                    {
                        "family_name": "Earhart",
                        "given_name": "Amelia",
                        "loyalty_programme_accounts": [
                            {
                                "account_number": "12901014",
                                "airline_iata_code": "BA"
                            }
                        ],
                        "type": "adult"
                    },
                    {
                        "age": 14
                    }
                ],
                "max_connections": 0,
                "cabin_class": "economy"
            }
        }

        const instance = axios.create({
            baseURL: 'https://api.duffel.com/air',
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json',
                //"Accept-Encoding": "gzip",'
                'Accept':'application/json',
                'Duffel-Version': 'beta',
                "Authorization": 'Bearer duffel_test_67NQAzfDGAv5cz_EteFREgJPpg9jOLxLsdswPwTU2Zd',
            },
        })

        instance.post('/offer_requests', obj).then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <button onClick={handleClick}>click here</button>
        </div>
    )
}

export default AllData