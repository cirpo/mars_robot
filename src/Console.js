import path from 'path'
import fs from 'fs'

const Console = {
   getInstructions: function() {
    let instructions = {}
    const inputFileName = process.argv[process.argv.length - 1]
    let file
    let lines
    let marsCoordinates
    let robotCoordinates

    try {
      file = fs.readFileSync(path.join(__dirname, inputFileName), 'utf8')
      lines = file.split('\n').filter((line) => line !== '')
      marsCoordinates = lines.shift()
      instructions.mars = this.getMarsCoordinates(marsCoordinates)
      instructions.robots = this.getRobotsIntsruction(lines)

    } catch (err) {
      console.log(`ERROR reading the input file: ${inputFileName}`)
      throw err
    }

    return instructions
},
/**
 * Get Mars coordinates from input file
 *
 * @param {String}  - the robot position to check (x, y and orientation)
 * @returns {Object} mars coordinates
 */
  getMarsCoordinates: function(marsCoordinates) {
      marsCoordinates = marsCoordinates.replace(/\s/g,'')
      let marsCoordinateX = parseInt(marsCoordinates[0])
      let marsCoordinateY = parseInt(marsCoordinates[1])

      if (!Number.isInteger(marsCoordinateX) || marsCoordinateX < 0) {
        throw new Error(`${marsCoordinateX} should be a positive integer`)
      }

      if (!Number.isInteger(marsCoordinateY) || marsCoordinateY < 0) {
        throw new Error(`${marsCoordinateY} should be a positive integer`)
      }

      return { x: marsCoordinateX, y: marsCoordinateY }
  },
  /**
   * Get Robot instructions from input file
   *
   * @param {Array} lines - the robot position to check (x, y and orientation)
   * @returns {Array} robot instructions
   */
  getRobotsIntsruction: function(lines) {
    if (lines.length % 2 != 0) {
      throw new Error(`instructions should be a pair of robots position and robots commands on separate lines`)
    }

    let robots = lines.reduce((robots, line, i) => {
        if (i % 2 == 0) {
          let robotCoordinates = line.split(' ')
          let robot = {}
          robot.x = parseInt(robotCoordinates[0])
          robot.y = parseInt(robotCoordinates[1])
          robot.orientation = robotCoordinates[2]
          robots.push(robot)
        } else {
          robots[parseInt(i/2)].commands = line
        }

        return robots
    }, [])

    return robots
  }

}
export default Console
