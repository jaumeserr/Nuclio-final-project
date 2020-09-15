import React,  { useEffect, useState } from 'react';
import styles from './filterAirlines.module.css';

const FilterAirlines = () => {

    const [data, setData]= useState ([]);

    useEffect(() => {
        const url = 'http://localhost/api/airlines';
        const options = {
            method: 'GET',
            header: new Headers(),
            mode: 'cors',
        };

        fetch(url, options)
            .then((response) => {
                if (response.status >= 200 || response.status < 300) {
                    console.log(`Status: ${response.status}`);
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then((payload) => {
                console.log(payload);
                setData(payload);
                
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={styles.__container}>
            <div>
                <div classnema={styles.__label}>Airlines</div>
                <div className={styles.__inputBox}>
                    <select className={styles.__select} 
                    //  value={two_letter_code} 
                    //  onChange={(e)=>{setData.target.value}}
                    >
                        
                        <option value= ''>Airlines</option>

                        {data &&
                            data.map((item)=> {
                                //const {name} = name;
                                return (
                                    <option value={item.two_letter_code}>
                                        {item.name}
                                    </option>
                                );
                            })
                        }
                    </select>
                </div>
            </div>
        </div>

    );
}

export default FilterAirlines;