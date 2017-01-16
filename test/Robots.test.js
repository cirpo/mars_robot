import { createRobot, commands } from '../src/Robots'
const mars = {x: 5, y: 3 }

test('It should return a new robot', () => {
  const robot = createRobot( 1, 1, 'N')

  expect(robot.x).toBe(1)
  expect(robot.y).toBe(1)
  expect(robot.orientation).toBe('N')
})

test('It should rotate a robot to the left, from North orientation to West orientation', () => {
  const robot = createRobot( 1, 1, 'N')
  const newRobot = commands['L'](robot)
  expect(newRobot.orientation).toBe('W')
})

test('It should rotate a robot to the left, from West orientation to South orientation', () => {
  const robot = createRobot( 1, 1, 'W')
  const newRobot = commands['L'](robot)
  expect(newRobot.orientation).toBe('S')
})

test('It should rotate a robot to the left, from South orientation to East orientation', () => {
  const robot = createRobot( 1, 1, 'S')
  const newRobot = commands['L'](robot)
  expect(newRobot.orientation).toBe('E')
})

test('It should rotate a robot to the left, from South orientation to East orientation', () => {
  const robot = createRobot( 1, 1, 'E')
  const newRobot = commands['L'](robot)
  expect(newRobot.orientation).toBe('N')
})

test('It should rotate a robot to the right, from North orientation to East orientation', () => {
  const robot = createRobot( 1, 1, 'N')
  const newRobot = commands['R'](robot)
  expect(newRobot.orientation).toBe('E')
})

test('It should rotate a robot to the right, from East orientation to South orientation', () => {
  const robot = createRobot( 1, 1, 'E')
  const newRobot = commands['R'](robot)
  expect(newRobot.orientation).toBe('S')
})

test('It should rotate a robot to the right, from North orientation to East orientation', () => {
  const robot = createRobot( 1, 1, 'S')
  const newRobot = commands['R'](robot)
  expect(newRobot.orientation).toBe('W')
})

test('It should rotate a robot to the right, from North orientation to East orientation', () => {
  const robot = createRobot( 1, 1, 'W')
  const newRobot = commands['R'](robot)
  expect(newRobot.orientation).toBe('N')
})

test('It should move a robot forward, from 11W to 01W', () => {
  const robot = createRobot( 1, 1, 'W')
  const newRobot = commands['F'](robot, mars)
  expect(newRobot.orientation).toBe('W')
  expect(newRobot.x).toBe(0)
  expect(newRobot.y).toBe(1)
})

test('It should move a robot forward, from 11N to 12N ', () => {
  const robot = createRobot( 1, 1, 'N')
  const newRobot = commands['F'](robot, mars)
  expect(newRobot.orientation).toBe('N')
  expect(newRobot.x).toBe(1)
  expect(newRobot.y).toBe(2)
})

test('It should move a robot forward, from 11S to 10S ', () => {
  const robot = createRobot( 1, 1, 'S')
  const newRobot = commands['F'](robot, mars)
  expect(newRobot.orientation).toBe('S')
  expect(newRobot.x).toBe(1)
  expect(newRobot.y).toBe(0)
})

test('It should move a robot forward, from 11W to 01W ', () => {
  const robot = createRobot( 1, 1, 'W')
  const newRobot = commands['F'](robot, mars)
  expect(newRobot.orientation).toBe('W')
  expect(newRobot.x).toBe(0)
  expect(newRobot.y).toBe(1)
})

test('It should not move a robot forward, when a scent is blocking', () => {
  const robot1 = createRobot( 0, 0, 'W')
  const newRobot1 = commands['F'](robot1, mars)
  expect(newRobot1.orientation).toBe('W')
  expect(newRobot1.x).toBe(0)
  expect(newRobot1.y).toBe(0)
  expect(newRobot1.status).toBe('LOST')

  const robot2 = createRobot( 0, 0, 'W')
  const newRobot2 = commands['F'](robot2, mars)
  expect(newRobot2.orientation).toBe('W')
  expect(newRobot2.x).toBe(0)
  expect(newRobot2.y).toBe(0)
  expect(newRobot2.status).toBe(undefined)
})

test('It should return a lost robot if it moves outside mars', () => {
  const robot = createRobot(5, 3, 'E')
  const newRobot = commands['F'](robot, mars)

  expect(newRobot.orientation).toBe('E')
  expect(newRobot.x).toBe(5)
  expect(newRobot.y).toBe(3)
  expect(newRobot.status).toBe('LOST')
})
