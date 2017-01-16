import scents from './Scents'

const Coordinates = {
  orientations: ['N', 'E', 'S', 'W'],
  /**
   * It checks if a robot coordinates are valid given on Mars coordinates
   *
   *  @param {Object} mars - the mars object (x, y coordinatinates)
   *  @param {Object} robot - the robot object (x, y and orientation)
   *  @returns {Object|null}  robot or null
   */
  areValid: function(robot, mars){
    if (this.orientations.indexOf(robot.orientation) == -1) {
      return false
    }

    if (robot.x < 0 || robot.x > mars.x || robot.y < 0 || robot.y > mars.y) {
      scents.add(this.getPosition(robot))
      return false
    }

    return true
  },
  /**
   * It returns the robot serialization (e.g. '11E')
   *
   *  @param {Object} robot - the mars object (x, y coordinatinates)
   *  @returns {String}  robot serialization (e.g. '11E')
   */
  getPosition: function(robot) { return '' + robot.x + robot.y + robot.orientation },
  /**
   * It determines if the robot can move to coordinates, checking if a scent is not present
   *
   *  @param {Object} robot - the mars object (x, y coordinatinates)
   *  @returns {Boolean}
   */
  canMove: function(robot) {
    return !scents.contains(this.getPosition(robot))
  }

}


export default Coordinates
