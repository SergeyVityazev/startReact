import AbountMe from "./AboutMe"

test('adds name + number to equal String', () => {
  const hellotest = () => <AboutMe myname={'sergey'} old={33} />

  expect(hellotest.render()).toBe(String)
})
