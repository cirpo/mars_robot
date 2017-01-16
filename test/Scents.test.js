import scents from '../src/Scents'

test('Add a scent', () => {
  scents.add('11E')
  expect(scents.contains('11E')).toBe(true)
  expect(scents.contains('1E')).toBe(false)
})
