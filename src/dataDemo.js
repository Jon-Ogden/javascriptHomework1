const { user1, user2, user3, user4, user5, user6 } = require("./data");

// add friends
function addFriends(){
user1.friends.push(user2, user3, user4);
user2.friends.push(user1, user3);
user3.friends.push(user1, user2);
user4.friends.push(user1);
console.log(user1.friends.length);
}

// user1: {
//     id: number;
//     dateJoined: Date;
//     name: string;
//     friends: any[];
//     posts: {
//         text: string;
//         likes: number;
//         comments: string[];
//     }[];
// }

function userInfo(user){
    let userName = user.name 
    let postCount = user.posts.length
    return {name:userName, numOfPosts:postCount}
}
function getNames(array){
    let names = array.map(user=>{
        return user.name
    }) 
    return names
}
//to use .map
//array.map(variable =>{
// write function here
//})
// tha variable is the item in the array that the finction is currently on

function manyPosts(list){
    return list.filter((current)=>{
        return current.posts.length >= 2
    })
}
//for .filter
//write a function that evaluates to true or false
//if true that item is returned in the final array
//if false that item is omited from final array
//returns empty array if no matches are found

// find is like filter but returns the first thing it finds true
//returns undefined if no matches are found
function firstManyPosts(list){
    return list.find((current)=>{
        return current.posts.length >= 2
    })
}

function sortPosts(list){
    return list.sort((a,b) =>{
        return a.posts.length - b.posts.length
    })
}

module.exports = {
    userInfo,
    getNames,
    manyPosts,
    firstManyPosts,
    sortPosts
}