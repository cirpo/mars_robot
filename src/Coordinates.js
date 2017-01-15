const Coordinates = {
  orientations: ['N', 'E', 'S', 'W'],
  /**
   * It checks if a robot coordinates are valid given on Mars coordinates
   *
   *  @param {Object} mars - the mars object (x, y coordinatinates)
   *  @param {Object} robot - the robot object (x, y and orientation)
   *  @returns {Object|null}  robot or null
   */
  areValid(mars, robot){
    return robot.x <= mars.x && robot.y <= mars.y && this.orientations.indexOf(robot.orientation) > -1
  }
}

export default Coordinates
