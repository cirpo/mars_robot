import coordinates from './Coordinates'

export const commands = {
  L: rotateLeft,
  R: rotateRigh,
  F: moveForward
}

/**
 * It creates a robot
 *
 *  @param {Integer} x
 *  @param {Integer} y
 *  @param {String} orientation
 *  @returns {Object}
 */
export function createRobot(x, y, orientation) {
  return {x: x, y: y, orientation: orientation}
}

/**
 * It rotates a robot on the left and it returns a new robot instance
 * with the new orientation
 *
 * @param  {Object} robot
 * @return {Object} robot
 */
function rotateLeft(robot) {
  let orientationIndex = ((coordinates.orientations.indexOf(robot.orientation) -1 + coordinates.orientations.length ) % coordinates.orientations.length)

  if (orientationIndex > -1 && coordinates.orientations[orientationIndex]) {
    return Object.assign({}, robot, { orientation: coordinates.orientations[orientationIndex] })
  }

  return robot
}

/**
 * It rotates a robot on the right and it returns a new robot instance
 * with the new orientation
 *
 * @param  {Object} robot
 * @return {Object} robot
 */
function rotateRigh(robot) {
  let orientationIndex = ((coordinates.orientations.indexOf(robot.orientation) +1 + coordinates.orientations.length ) % coordinates.orientations.length)

  if (orientationIndex > -1 && coordinates.orientations[orientationIndex]) {
    return Object.assign({}, robot, { orientation: coordinates.orientations[orientationIndex]})
  }

  return robot
}

/**
 * It moves a robot forward  returns a new robot instance
 * with the new position
 *
 * @param  {Object} robot
 * @param  {Object} mars
 * @return {Object} newRobot
 */
function moveForward(robot, mars){
  let newRobot = robot

  switch(robot.orientation){
    case 'N':
      newRobot = Object.assign({}, robot, { y: robot.y + 1 })
      break
    case 'E':
      newRobot = Object.assign({}, robot, { x: robot.x + 1})
      break
    case 'S':
      newRobot = Object.assign({}, robot, { y: robot.y - 1})
      break
    case 'W':
      newRobot = Object.assign({}, robot, { x: robot.x  - 1})
      break
    default:
      newRobot = null
  }

  if (!coordinates.canMove(newRobot)){
    return robot
  }

  if (!coordinates.areValid(newRobot, mars)) {
    return Object.assign({}, robot, { status: 'LOST' })
  }

  return newRobot
}
