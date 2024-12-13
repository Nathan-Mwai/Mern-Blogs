import { IKImage } from 'imagekitio-react'
import React from 'react'

const Image = () => {
  return (
    <IKImage urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT} path="/logo.png" className="w-8 h-8" alt="logo" />
  )
}

export default Image