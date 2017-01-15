/**
 * Mars constructor
 *
 *  @param {integer} x
 *  @param {integer} y
 *  @returns {Object} Mars
 */
function Mars (x, y) {
  if (!Number.isInteger(x) || !Number.isInteger(y)) {
    throw new Error(`Invalid argument(s), x and y shoyld be both interges. x: ${x} and y: ${y} given`)
  }

  this.x = x
  this.y = y
}

export default Mars
