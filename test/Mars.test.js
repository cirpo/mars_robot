import Mars from '../src/Mars'

test('It creates a new Mars instance', () => {
  expect(new Mars(5, 3)).toBeInstanceOf(Mars)
})

test('Given non integers coordinates, it should not create a new Mars instance, it should throw an exception', () => {
  try{
    const mars = new Mars('foo', 3)
  } catch (e) {
    expect(e).toBeInstanceOf(Error)
  }
})
