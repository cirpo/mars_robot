import { createRobot, availableCommands } from './Robots'
import coordinates from './Coordinates'

const MAX_POSITION = 50
const MAX_COMMAND_LENGTH = 100
const Earth = {
  robots : [],
/**
 * It position the robot on Mars, checking if the given position are valid
 *
 *  @param {Object} position - the robot position object (x, y and orientation)
 *  @returns {Object|null}  robot or null
 */
  positionRobot: function(mars, position) {
    let robot = null

    if(this.isAValidPosition(position) && coordinates.areValid(position, mars)) {
      robot = createRobot(position.x, position.y, position.orientation)
    }

    return robot
  },
/**
 * It checks the validity of a robot position.
 * The position.x value must be a positiive integere and not bigger
 * The position.y value must be a positiive integere and not bigger
 * The position.orientation value must be one of the cardinal points
 *
 * @param {Object} position - the robot position to check (x, y and orientation)
 * @returns {Boolean} isValid - true if position values is valid
 */
  isAValidPosition: function(position){
    return Number.isInteger(position.x) && position.x > -1 && position.x <= MAX_POSITION &&
      Number.isInteger(position.y) && position.y > -1 && position.y <= MAX_POSITION &&
      coordinates.orientations.indexOf(position.orientation) > -1
  },
  /**
   * Given a string of commands, it executes a robot command one by one
   * After trying executing all the command, the final robot object with its
   * poistion and orientation is pushed to the robot colletion
   *
   * @param {Object} robot
   * @param {Object} mars
   * @param {String} commands
   */
  sendCommand: function(robot, mars, commands) {
    if(commands.length > MAX_COMMAND_LENGTH) {
      console.log(`Cannot process commands, too many commands: ${commands.length}`)
      return robot
    }

    commands.split('').forEach((ins) => {
      if (availableCommands[ins]) {
        robot = availableCommands[ins](robot, mars)
      }
    })

    if(robot){
      this.robots.push(robot)
    }
  },
  /**
   *  Print in the console the robots status
   */
  printRobotsReport: function(){
    this.robots.forEach((robot) => {
      robot.status = robot.status ? robot.status : ''
      console.log(`${robot.x} ${robot.y} ${robot.orientation} ${robot.status}` )
    })
  }

}

export default Earth
