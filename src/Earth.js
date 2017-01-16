import { createRobot, availableCommands } from './Robots'
import coordinates from './Coordinates'

const Earth = {
  robots : [],
/**
 * It position the robot on Mars, checking if the given position are valid
 *
 *  @param {Object} position - the robot position object (x, y and orientation)
 *  @returns {Object|null}  robot or null
 */
  positionRobot(mars, position) {
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
  isAValidPosition(position){
    return Number.isInteger(position.x) && position.x > -1 && position.x <= 50 &&
      Number.isInteger(position.y) && position.y > -1 && position.y <= 50 &&
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
  sendCommand(robot, mars, commands) {
    commands.split('').forEach((ins) => {
      robot = availableCommands[ins](robot, mars)
    })

    this.robots.push(robot)
  },
  /**
   * @returns {Array} robots
   */
  getRobotsReport(){
    return this.robots
  }

}

export default Earth
