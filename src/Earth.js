import robots from './Robots'
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

    if(this.isAValidPosition(position) && coordinates.areValid(mars, position)) {
      robot = robots.createRobot(position.x, position.y, position.orientation)
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
  }

}

export default Earth
