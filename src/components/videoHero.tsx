import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import videoMP4 from '../assets/video/coffee.mp4'
import videoOGV from '../assets/video/coffee.ogv'
import videoWEBM from '../assets/video/coffee.webm'

const Container = styled.article`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

const Video = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`
interface VideoHeroProps {
  play: boolean
}

const VideoHero = ({ play }: VideoHeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      play ? videoRef.current.play() : videoRef.current.pause()
    }
  }, [videoRef, play])

  return (
    <Container>
      <Video autoPlay={true} muted={true} loop={true} ref={videoRef}>
        <source src={videoMP4} type="video/mp4" />
        <source src={videoOGV} type="video/ogv" />
        <source src={videoWEBM} type="video/webm" />
        Your browser does not support video
      </Video>
      /
    </Container>
  )
}

export default VideoHero
