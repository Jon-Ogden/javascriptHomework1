//function it(string, callbackFunction){
//    console.log(type string) //string
//}
//it('here is the string', () => {
//    write test here
//})

it('test equality', () => {
    let num = 1
    expect(num).toBe(1)
    expect(num).not.toBe(14)

    let nums = [1,2,3,4]
    //expect(nums).toBe([1,2,3,4]) // fails
    expect(nums).not.toBe([1,2,3,4]) // passes
    expect(nums).toEqual([1,2,3,4]) // passes
    //toBe checks with ===
    //toEqual uses == (two cans of coke. they are the same but still different objects)
})

it('test mutations', () => {
    let nums = [10,20,30]

    nums.push(40)
    expect(nums).toEqual([10,20,30,40])
    //console.log(nums.push(50)) push returns length of new array
    //console.log(nums.push(60)) logging like this is the same as nums.length
})

it('test equality objects', () => {
    let person1 = {name:'chuck norris', age:40}
    let person2 = {name:'chuck norris', age:40}
    let person3 = {name:'jimmy bob', age:19}
    let person4 = {name:'jon odin', dob:'11/08/00'}

    expect(person1).not.toBe(person2);
    expect(person1).toEqual(person2);
    expect(person1).not.toEqual(person3);

    let aKeys = Object.keys(person3).sort();
    let bkeys = Object.keys(person4).sort();
    

})