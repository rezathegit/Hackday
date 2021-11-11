import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [backendData, setBackendData] = useState('')

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/api",
    }).then(
      res => {
        setBackendData(res.data)
      }
    )
  }, [])

  return (
    <div>
      <p>{backendData}</p>
      {/* {(typeof backendData === 'undefined') ? (
        <p>Loading...</p>
      ): (
        backendData.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )} */}

    </div>
  )
}

export default App
