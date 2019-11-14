import React from "react"
import styled from "@emotion/styled"
import GoogleMapReact from "google-map-react"
import { IoIosPin } from "react-icons/io"

const MarkerContainer = styled.div({
  position: "relative",
  width: 0,
  height: 0,
})

const MarkerPin = styled(IoIosPin)({
  position: "absolute",
  bottom: 0,
  left: 0,
  transform: `translateX(-50%)`,
})

const Marker = ({ ...props }) => (
  <MarkerContainer {...props}>
    <MarkerPin size={40} fill="#fff" stroke="#fff" strokeWidth="50px" />
    <MarkerPin size={40} fill="#ED1C24" />
  </MarkerContainer>
)

const GoogleMap = ({ lat, lng, zoom = 10, hasMarker = true }) => (
  <GoogleMapReact
    bootstrapURLKeys={{ key: `AIzaSyA14912OTdw58MSUWr2kOTMmR_t2K_XE0w` }}
    defaultCenter={{
      lat,
      lng,
    }}
    defaultZoom={zoom}
  >
    {hasMarker && <Marker lat={lat} lng={lng} />}
  </GoogleMapReact>
)

export default GoogleMap
