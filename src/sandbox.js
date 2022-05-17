var string1 = 'hello, my name is bobby'
function vowcount(voo){
    let arr1 = voo.split('')
    var count = 0
    for (let i = 0; i < arr1.length; i++) {
        if(arr1[i] == 'a'){
            count++
        } else if (arr1[i] == 'e'){
            count++
        } else if (arr1[i] == 'i'){
            count++
        } else if (arr1[i] == 'o'){
            count++
        } else if (arr1[i] == 'u'){
            count++
        }} return count
}
vowcount(string1)

        