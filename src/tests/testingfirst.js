const add = (a,b)=>a+b;
const generateGreeting = (name='Anonim')=> `Hello ${name}!`;
test('should add two nambuers', ()=>{
    const result = add(3,4);
    expect(result).toBe(7);
});

test ('name should be Kris', () =>{
    const result=generateGreeting('Kris');
    expect(result).toBe("Hello Kris!");
})

test ('name should be Anonim', () =>{
    const result=generateGreeting();
    expect(result).toBe("Hello Anonim!");
})