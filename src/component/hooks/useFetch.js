import React, { useState, useEffect } from "react";

// GET 
export default function useFetch (props) { 
    
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch(props)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setData(data) 
        })
    },[props]);

    return data
}