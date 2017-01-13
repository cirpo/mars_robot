import Mars from '../src/Mars'

test('It creates a new Mars instance', () => {
  expect(new Mars(5, 3)).toBeInstanceOf(Mars);
});
