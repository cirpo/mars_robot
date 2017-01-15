import Mars from './src/Mars'
import Earth from './src/Earth'

const instructions = [
  {"x":1, "y": 1, "orientation": "E", "instructions": "RFRFRFRF"},
  {"x":3, "y": 2, "orientation": "N", "instructions": "FRRFLLFFRRFLL"},
  {"x":0, "y": 3, "orientation": "W", "instructions": "LLFFFLFLFL"},
]

const mars = new Mars(5, 3)

instructions.forEach((ins) => {
  let robot = Earth.positionRobot(mars, ins)
})
