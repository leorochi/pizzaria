/* eslint-disable react/prop-types */

const MapLink = ({address}) => {
  return (
    <a href={`https://www.google.com/maps/place/${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer">
    Google Maps </a>
  )
}

export default MapLink