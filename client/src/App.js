import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {

  const [factData, setFactData] = useState('')
  const [imageData, setImageData] = useState('')

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

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/image",
    }).then(
      res => {
        console.log(res)
        setImageData(res.data)
      }
      )
    }, [])
    // console.log(imageData)

  return (
    <div>
      <Header />
      <Main factData={factData} imageData={imageData}/>
      <p>{factData}</p>
      <p>{imageData.artist}</p>
      <img src={imageData.url} />
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
