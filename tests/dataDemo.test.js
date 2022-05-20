const { user1, user2, user3, user4, user5, user6 } = require("../src/data");
const {userInfo, getNames, manyPosts, firstManyPosts, sortPosts} = require("../src/dataDemo")
// let user1 = {
//     id: 1,
//     dateJoined: new Date(2010, 3, 21),
//     name: "Forged Fire",
//     friends: [],
//     posts: [
//       {
//         text: "it will Keal",
//         likes: 321,
//         comments: ["Sweet", "Yeah"],
//       },
//       {
//         text: "it will Cut",
//         likes: 121,
//         comments: ["Noice", "COol"],
//       },
//     ],
//   };

it('test user1', () => {
    expect(user1.id).toBe(1)
    expect(user1.posts[1].text).toBe("it will Cut");
    expect(user1.posts[0].comments[1]).toBe("Yeah");
})

it('test userInfo', ()=> {
    let u1Info = userInfo(user1)
    expect(u1Info).toEqual({name:"Forged Fire", numOfPosts:2 });
})
it('gets users names' ,()=>{
    let users = [user1, user2, user3]
    let cloneUsers = [...users]
    expect(getNames(users)).toEqual([user1.name, user2.name, user3.name])
    expect(users).toEqual(cloneUsers)
})

it('filter users with two or more posts', ()=>{
    let users = [user1, user2, user3, user4, user5, user6]
    let x = manyPosts(users)
    expect(x.length).toBe(4)
})

it('test find', ()=>{
    let users = [user1, user2, user3, user4, user5, user6]
    expect(firstManyPosts(users)).toBe(user1)
})

it('test advanced sort', ()=>{
    let users = [user1, user2, user3, user4, user5, user6]
    expect(sortPosts(users)).toEqual([user6, user4, user1, user2, user3, user5])
})

it("sorts users by id", () => {
    // sort alphabetically
    let usersYo = [user1, user2, user3, user5, user4, user6 ];
    usersYo.sort((a,b)=>{
       if(a.name > b.name){
           return 1
       }
       if(a.name < b.name){
           return -1
       }
       return 0
    })

    expect(usersYo[0].name).toBe('Doplhin')
    expect(usersYo[5].name).toBe('Willis')
  });