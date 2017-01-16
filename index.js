import Mars from './src/Mars'
import Earth from './src/Earth'

const instructions = [
  {"x":1, "y": 1, "orientation": "E", "commands": "RFRFRFRF"},
  {"x":3, "y": 2, "orientation": "N", "commands": "FRRFLLFFRRFLL"},
  {"x":0, "y": 3, "orientation": "W", "commands": "LLFFFLFLFL"},
]

const mars = new Mars(5, 3)

instructions.forEach((ins) => {
  let robot = Earth.positionRobot(mars, ins)
  Earth.sendCommand(robot, mars, ins.commands)
})

Earth.printRobotsReport()
