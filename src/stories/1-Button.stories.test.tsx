import  AbountMe  from './1-Button.stories';

test('adds name + number to equal String', () => {
    const hellotest = () => new AbountMe ("vasya",15);
    
    expect(hellotest.render()).toBe(String)
})

