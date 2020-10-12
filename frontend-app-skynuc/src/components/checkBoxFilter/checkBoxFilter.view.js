import React,  { useEffect, useState } from 'react';
import styles from './checkBoxFilter.module.css';
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';
import useFetch from 'hooks/useFetch';


const CheckBoxFilter = () => {

    // const [data, setData]= useState ([]);
    const [airlineChecked, setAirlineChecked] = useState([]);

    function onChange(event) {
        
    
        if (event.target.checked === true) {
            airlineChecked.push(event.target.value);
            setAirlineChecked(airlineChecked);
        } else {
            const index = airlineChecked.indexOf(event.target.value);
            if (index !== -1) {
                airlineChecked.splice(index, 1);
                setAirlineChecked(airlineChecked);
            }
        }

        console.log('checked = ', airlineChecked);
      }
      
      const { data, error, isLoading, hasEverLoadedData, resetFetch } = useFetch('airlines', 'GET');



    return (
        <div className={styles.__container}>
            <div>
                <p className={styles.__title}>Airlines</p>
                <div className={styles.__inputBox}>
                        {data &&
                            data.map((item)=> {
                              
                                return (
                                    <div className={styles.__check}>
                                        <Checkbox onChange={onChange} value={item.two_letter_code}>{item.name}</Checkbox>
                                    </div>
                                );
                            })
                        }
                
                </div>
            </div>
        </div>

    );
}

export default CheckBoxFilter;