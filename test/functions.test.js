const test1 = require('./functions')

//check for truthy and falsy values
//tobenull matches only null
//toBeUndefined matches only undefined
//toBeDefined is the opposite of toBeUndefined
//toBeTruthy matches anything that an if statements treats as true
//toBeFalsy matches anything that an if statement treats as falsy
test('Adds 2 + 2 to eqaul 4', () => {
    expect(test1.add(2,2)).toBe(4)
})
test('adds 2 +2 to not equal 5', () => {
    expect(test1.add(2,2)).not.toBe(5)
})
test('should be null', () => {
    expect(test1.isNull()).toBeNull()
})
test('should be falsy', () => {
    expect(test1.checkValue(undefined)).toBeFalsy()
})
//toEqual matches other stuff aprt from pritime variables
test('User should be antonio myracho object', () => {
    expect(test1.createUser()).toEqual({firstname: 'antonio', lastname: 'myracho'})
})
test("should be under 1000", ()=> {
    const load1 =500
    const load2 = 400
    expect(load1 +load2).toBeLessThan(1000)
})
//regex 
test('There is no I in team', () =>{
    expect('team').not.toMatch(/I/i)
})
//Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin']
    expect(usernames).toContain('admin')
})
//working with async code
// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1)
//     return test1.fetchUser().then(data => {
//         expect(data.name).toEqual('Leanne Graham')
//     })
// })
//async await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1)
    const data = await test1.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
})