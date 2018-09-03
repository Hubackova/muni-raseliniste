import React from 'react'
import Gallery from 'react-grid-gallery'

import Layout from '../components/layout'
import MainContainer from '../components/MainContainer'
import H2 from '../components/atoms/h2'
import StyledLink from '../components/atoms/styledLink'

const PhotoGallery = () => {
  return (
    <Layout>
      <MainContainer>
        <H2>
          {' '}
          <StyledLink to="/gallery/">
            <i className="fa fa-arrow-left" />
          </StyledLink>{' '}
          Terény
        </H2>
        <Gallery images={PHOTO_SET} />
      </MainContainer>
    </Layout>
  )
}

const PHOTO_SET = [
  {
    src: 'http://www.casopis.ochranaprirody.cz/res/archive/033/004158.jpg?seek=1371627507',
    thumbnail: 'http://www.casopis.ochranaprirody.cz/res/archive/033/004158.jpg?seek=1371627507',
    thumbnailWidth: 531,
    thumbnailHeight: 354
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
    thumbnailHeight: 246
  }
]

export default PhotoGallery
