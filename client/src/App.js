import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {

  const [factData, setFactData] = useState('')

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/api",
    }).then(
      res => {
        setFactData(res.data)
      }
    )
  }, [])

  return (
    <div>
      <Header />
      <Main factData={factData}/>
      <p>{factData}</p>
      {/* {(typeof factData === 'undefined') ? (
        <p>Loading...</p>
      ): (
        factData.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )} */}
      <Footer />
    </div>
  )
}

export default App
