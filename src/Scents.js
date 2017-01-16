const Scents = {
  coordinates: [],
  /**
   * It adds a scent coordinate
   *
   *  @param {String} robot serialization
   */
  add: function(robotPosition) {
    if(this.coordinates.indexOf(robotPosition) == -1) {
      this.coordinates.push(robotPosition)
    }
  },
  /**
   * It determines if a scent coordinate exists
   *
   *  @param {String} robot serialization
   *  @returns {Boolean}
   */
  contains: function(robotPosition){
    return this.coordinates.indexOf(robotPosition) > -1
  }
}

export default Scents
