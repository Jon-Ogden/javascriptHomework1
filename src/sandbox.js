function compareKeys(object1, object2){
    // Object.keys() returns an array of strings where each entry is a key from the object
    // .sort() sorts an array by alphabetical order with default params
    var aKeys = Object.keys(object1).sort();
    var bKeys = Object.keys(object2).sort()
    return JSON.stringify(aKeys) === JSON.stringify(bKeys)
}

let person1 = {name:'chuck norris', age:40}
let person2 = {name:'chuck norris', age:40}
let person3 = {name:'jimmy bob', age:19}
let person4 = {name:'jon odin', dob:'10/14/03'}

//console.log(compareKeys(person1, person3))
//console.log(compareKeys(person1, person4))

let arr = [1,2,3,{name:'sam', home:'shire'}]
//convert to string
 let arrString = JSON.stringify(arr)
//JSON.parse(arr) can be used to reverse stringify

console.log(person4)
//adds key:value pair and mutates object
person4.eyeColor = 'blue' 
console.log(person4)
//update value with mutating
person4.name = 'henry odin'
console.log(person4)


//to avoid mutating, make a copy
let pers3Copy = {...person3}
//you can also add a key:value pair while copying
let pers2Copy = {...person2, eyeColor:'blue'}

//BEHOLD! ME BEING A DUMB DUMB: (hw4 reduce #3)
/*function totalEyeColors(list){
    return list.reduce((previous, current) =>{
        let color = current.eye_color
        if(previous[color] == undefined){
            previous[color] = 1
            console.log(previous[color])
        } else if (previous[color] !== 0){
            previous[color] = previous[color] + 1
            console.log('yeet')
        }
        return previous
    },{})}
*/