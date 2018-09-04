import React from 'react'
import Gallery from 'react-grid-gallery'

import GalleryContainer from '../components/GalleryContainer'

const PhotoGallery = () => {
  return (
    <GalleryContainer heading="Rostliny a živočichové">
        <Gallery images={PHOTO_SET} />
    </GalleryContainer>
  )
}

const PHOTO_SET = [
  {
    src: 'http://www.casopis.ochranaprirody.cz/res/archive/033/004158.jpg?seek=1371627507',
    thumbnail: 'http://www.casopis.ochranaprirody.cz/res/archive/033/004158.jpg?seek=1371627507',
    thumbnailWidth: 531,
    thumbnailHeight: 354,
    caption: 'popis druhu'
  },
  {
    src: 'http://docplayer.cz/docs-images/57/40257613/images/23-0.jpg',
    thumbnail: 'http://docplayer.cz/docs-images/57/40257613/images/23-0.jpg',
    thumbnailWidth: 511,
    thumbnailHeight: 347
  },
  {
    src:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/NPR_Rolavsk%C3%A1_vrchovi%C5%A1t%C4%9B_%284%29.jpg/800px-NPR_Rolavsk%C3%A1_vrchovi%C5%A1t%C4%9B_%284%29.jpg',
    thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/NPR_Rolavsk%C3%A1_vrchovi%C5%A1t%C4%9B_%284%29.jpg/800px-NPR_Rolavsk%C3%A1_vrchovi%C5%A1t%C4%9B_%284%29.jpg',
    thumbnailWidth: 569,
    thumbnailHeight: 860
  },
  {
    src: 'http://kalendar.zivykraj.cz/administrace/foto_akce/70021_20_1494334802_822650_max.jpg',
    thumbnail: 'http://kalendar.zivykraj.cz/administrace/foto_akce/70021_20_1494334802_822650_max.jpg',
    thumbnailWidth: 368,
    thumbnailHeight: 246,
    caption: 'Drosophila'
  }
]

export default PhotoGallery
