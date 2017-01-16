import Earth from '../src/Earth'

const mars = {'x': 5, 'y': 3}

test('It should return a robot object', () => {
  const robot = Earth.positionRobot(mars, {'x': 1, 'y': 1, 'orientation': 'N'})
  expect(robot.x).toBe(1)
  expect(robot.y).toBe(1)
  expect(robot.orientation).toBe('N')
})

test('It should not return a robot object, given coordinates that do not fit on Mars', () => {
  const robot = Earth.positionRobot({'x': 6, 'y': 2, 'orientation': 'N'}, mars)
  expect(robot).toBe(null)
})

test('It should not return a robot object, given a non existing orientation', () => {
  const robot = Earth.positionRobot({'x': 6, 'y': 2, 'orientation': 'F'}, mars)
  expect(robot).toBe(null)
})

test('It should not return a robot object, given a not integer x or y position', () => {
  let robot = Earth.positionRobot({'x': 2.4, 'y': 2, 'orientation': 'W'}, mars)
  expect(robot).toBe(null)

  robot = Earth.positionRobot({'x': 2, 'y': {}, 'orientation': 'W'}, mars)
  expect(robot).toBe(null)
})

test('It should not return a robot object, given a x or y bigger than 50', () => {
  let robot = Earth.positionRobot({'x': 52, 'y': 2, 'orientation': 'F'}, mars)
  expect(robot).toBe(null)

  robot = Earth.positionRobot({'x': 2, 'y': 60, 'orientation': 'F'}, mars)
  expect(robot).toBe(null)
})
