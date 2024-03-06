import helloWorld from '../src/program.js'

describe('Tests', () => {
  test('should return Hello World', () => {
    expect(helloWorld()).toEqual("Hello World!")
  })
})
