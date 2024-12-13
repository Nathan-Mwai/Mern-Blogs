import { IKImage } from 'imagekitio-react'
import React from 'react'

const Image = ({path, className, w, h, alt}) => {
  return (
    <IKImage
    urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
    path={path}
    className={className}
    loading='lazy'
    // This is for low quality images
    lqip={{ active: true, quality: 20 }}
    width={w}
    height={h}
    alt={alt} />
  )
}

export default Image