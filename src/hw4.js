const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
function getNames(list){
    list.map(current=>{
        return current.name
    })
}
//2. Get array of all heights
function getHeight(list){
    return list.map(current=>{
        return current.height
    })
}

//3. Get array of objects with just name and height properties
function getNameAndHeight(list){
    return list.map(current=>{
        return {name:current.name, height:current.height}
    })
}

//4. Get array of all first names
function getFirstName(list){
    return list.map(current =>{
        let space = current.name.indexOf(' ')
        return current.name.slice(0,space)
    })
}

//***REDUCE***
//1. Get total mass of all characters
function totalMass(list){
    return list.reduce((previous, current) =>{
            previous += current.mass
            return previous
    },0)
} 

//2. Get total height of all characters
function totalHeight(list){
    return list.reduce((previous, current) =>{
            previous += current.height
            return previous
    },0)
}

//3. Get total number of characters by eye color
function totalEyeColors(list){
    return list.reduce((previous, current) =>{
        let color = current.eye_color
       previous[color] = previous[color] +1 || 1
        return previous
    },{})
} 

//4. Get total number of characters in all the character names
function totalChars(list){
    return list.reduce((previous, current) =>{
        let name = current.name
        let nameArr = name.split('')
        let nameFilter = nameArr.filter(x =>{
            return x !== ' '
        })
        previous += nameFilter.length
        return previous
    },0)
} console.log(totalChars(characters))

//***FILTER***
//1. Get characters with mass greater than 100
function getHeavy(list){
    return list.filter(current =>{
        return current.mass > 100
    })
}

//2. Get characters with height less than 200
function getShort(list){
    return list.filter(current =>{
        return current.height < 200
    })
}

//3. Get all male characters
function getMen(list){
    return list.filter(current =>{
        return current.gender == 'male'
    })
}
//4. Get all female characters
function getWomen(list){
    return list.filter(current =>{
        return current.gender == 'female'
    })
}

//***SORT***
//1. Sort by mass
function sortMass(list){
    let copy = [...list]
    return copy.sort((a,b) =>{
        return a.mass - b.mass
    })
}

//2. Sort by height
function sortHeight(list){
    let copy = [...list]
    return copy.sort((a,b) =>{
        return a.height - b.height
    })
} 

//3. Sort by name
function sortName(list){
    let copy = [...list]
    return copy.sort((a,b) =>{
        if(a.name > b.name){
            return 1
        }
        if(a.name < b.name){
            return -1
        }
        return 0
    })
}
//4. Sort by gender
function sortGender(list){
    let copy = [...list]
    return copy.sort((a,b) =>{
        if(a.gender > b.gender){
            return 1
        }
        if(a.gender < b.gender){
            return -1
        }
        return 0
    })
}

//***EVERY***
//1. Does every character have blue eyes?
function blueEyes(list){
    return list.every(current =>{
        return current.eye_color == 'blue'
    })
}

//2. Does every character have mass more than 40?
function checkMass(list){
    return list.every(current =>{
        return current.mass > 40
    })
} 

//3. Is every character shorter than 200?
function checkHeight(list){
    return list.every(current =>{
        return current.height < 200
    })
}
//4. Is every character male?
function checkAllMen(list){
    return list.every(current =>{
        return current.gender == 'male'
    })
} 

//***SOME***
//1. Is there at least one male character?
function checkOneMan(list){
    return list.some(current =>{
        return current.gender == 'male'
    })
}

//2. Is there at least one character with blue eyes?
function checkBlueEyes(list){
    return list.some(current =>{
        return current.eye_color == 'blue'
    })
} 

//3. Is there at least one character taller than 210?
function checkTall(list){
    return list.some(current =>{
        return current.height > 210 
    })
}
//4. Is there at least one character that has mass less than 50?
function checkMass(list){
    return list.some(current =>{
        return current.mass < 50
    })
}

//***Bonus***/
// come up with your own