import React, { useEffect } from 'react'

export default function App() {
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      var innerHTML = "Geolocation is not supported by this browser.";
      console.log(innerHTML)
    }
  }

  function showPosition(position: GeolocationPosition) {
    var location = "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude;
    console.log(location)
  }
  useEffect(() => {
    getLocation()
  }, [])
  return (
    <div>App</div>
  )
}
