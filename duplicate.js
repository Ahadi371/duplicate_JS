const names = [1, 2, 3, 1,1, 4,1,51,]
function removDuplicate(names) {

    const uniqe =[];
    // for (let i = 0; i <names.length; i++) {

    //     const element = names[i]
    //     console.log(element);
    // }
    for (const element of names) {
        console.log(element);
        if (uniqe.indexOf(element) == -1){
            uniqe.push(element)
        }
    }
    return uniqe;
}
const uniqueNames = removDuplicate(names);
console.log(uniqueNames);