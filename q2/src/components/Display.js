import React from 'react'
import './css/Display.css'

export default function Display(props) {
    
    const { data } = props
    
    return (
        <div className="Container-wrapper">
            {data.map((e)=>
            (<div className="Data-item" key={e} >{e}</div>))}
        </div>
    )
}
