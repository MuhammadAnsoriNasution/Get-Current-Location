import React, { useEffect, useState } from 'react'

export default function App() {
  const [success, setSuccess] = useState('')
  const [errorState, setErrorState] = useState('')

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      setSuccess("Geolocation is not supported by this browser.")
    }
  }

  function showPosition(position: GeolocationPosition) {
    setSuccess("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude)
  }

  function showError(error: GeolocationPositionError) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setErrorState("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        setErrorState("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        setErrorState("The request to get user location timed out.")
        break;
      default:
        setErrorState("An unknown error occurred.")
        break;
    }
  }

  useEffect(() => {
    getLocation()
  }, [])
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Success</td>
            <td>{success}</td>
          </tr>
          <tr>
            <td>Error</td>
            <td>{errorState}</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}
