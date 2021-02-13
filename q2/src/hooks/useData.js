import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function useData() {

    const [data, setData] = useState()
    
    useEffect(() => {

        async function getData(){
            const response = await axios.get('https://api.publicapis.org/categories')
            setData(response.data)
        }
        getData()
        

    }, [])

    return data
}