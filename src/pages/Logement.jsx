import ImageSlider from '../components/ImageSlider'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Logement() {
  const { id } = useParams()
  const [logementImages, setlogementImages] = useState([])

  const getData = () => {
    fetch('../datas/logementList.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (logements) {
        for (let logement of logements) {
          if (logement.id === id) {
            setlogementImages(logement.pictures)
          }
        }
      })
  }

  useEffect(() => {
    getData()
  }, [])
  // return (
  //   <div className="Logement">
  //     <h1 className="Logement__title">Logement</h1>
  //     <div className="Logement__container">
  //       <ImageSlider slides={logementImages} />
  //     </div>
  //   </div>
  // )
  const containerStyles = {
    width: '500px',
    height: '280px',
    margin: '0 auto',
  }
  return (
    <div className="Logement">
      <h1 className="Logement__title">Logement</h1>
      <div className="Logement__slider--container" style={{ containerStyles }}>
        <ImageSlider slides={logementImages} />
      </div>
    </div>
  )
}

export default Logement
