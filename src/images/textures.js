import {
  dirtImg,
  glassImg,
  grassImg,
  logImg,
  woodImg
} from './images.js'

import { NearestFilter, RepeatWrapping, TextureLoader } from 'three'
//cargar imagenes de texturas

const grassTexture = new TextureLoader().load(grassImg)
const dirtTexture = new TextureLoader().load(dirtImg)
const logTexture = new TextureLoader().load(logImg)
const glassTexture = new TextureLoader().load(glassImg)
const woodTexture = new TextureLoader().load(woodImg)
const groundTexture = new TextureLoader().load(grassImg)

//ajustar texturas para que se repitan en el suelo y no estirar la imagen

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping
//ajustar texturas para que sean mas pixeladas y no tengan aliasing al reducir el tamaño de la imagen
groundTexture.magFilter = NearestFilter
grassTexture.magFilter = NearestFilter
dirtTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter

export {
  dirtTexture, glassTexture, grassTexture, groundTexture, logTexture, woodTexture
}

