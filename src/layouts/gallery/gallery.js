import React from 'react'
import Picture from '../picture/picture'
import { images } from '../../images/imagesCol'
import './gallery.css'

const Gallery = () => {
  return (
    <div className="gallery-container">
      {images.map(image => <Picture key={Math.random()} {...image} />)}
    </div>
  )
}

export default Gallery
