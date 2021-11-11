import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {

  const [FactData, setFactData] = useState('')

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
      <Main />
      <p>{FactData}</p>
      {/* {(typeof FactData === 'undefined') ? (
        <p>Loading...</p>
      ): (
        FactData.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )} */}
      <Footer />
    </div>
  )
}

export default App
