import React, { useState, useEffect } from 'react'
import Display from './components/Display'
import useData from './hooks/useData'
import queryData from './utility/qeuryData'
import './App.css'

export default function App() {

  const [keyword, setKeyword] = useState("")
  const data = useData()
  const [displayData, setDisplayData] = useState([])

  useEffect(() => {
    setDisplayData(data)
  }, [data])

  return (
    <div className="App">
      <form onSubmit={(e) => {
        e.preventDefault()
        setDisplayData(queryData(keyword, data))
      }}>
        <input type="text" onChange={(e) => {
          setKeyword(e.target.value)
        }} />
        <Display data={displayData ?? []}/>
      </form>
    </div>

  )
}
