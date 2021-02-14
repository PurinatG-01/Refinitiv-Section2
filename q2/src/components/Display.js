import React from 'react'
import './css/Display.css'

export default function Display(props) {

    const { data } = props

    return (
        <div className="Container-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e) =>
                    (<tr key={e}>
                        <td>{e}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}
