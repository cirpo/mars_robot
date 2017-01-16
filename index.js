import Console from './src/Console'
import Mars from './src/Mars'
import Earth from './src/Earth'

let instructions = {}

try {
  instructions = Console.getInstructions()
} catch(err){
  console.log(`Error while getting the instructions from the input file: ${err.message}`)
  process.exit(0)
}

const mars = new Mars(instructions.mars.x, instructions.mars.y)

instructions.robots.forEach((ins) => {
  let robot = Earth.positionRobot(mars, ins)

  if(!robot) {
    console.log('Cannot position robot: ', ins)
    return
  }

  Earth.sendCommand(robot, mars, ins.commands)
})

console.log('Final robots status:', '\n')
Earth.printRobotsReport()
