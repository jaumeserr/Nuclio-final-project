import React from 'react';

const GetLogo = async () => {

    try{
const resLogo = await axios (`https://localhost/api/logo`)



    }catch (error){
        console.log(error);
    }



}
export default GetLogo;
