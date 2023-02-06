function findingBadData(age){
    let count = 0;
    for(let i = 0; i<age.length; i++){
        const element = age[i];
        if(element < 0){
            count++;
        }
    }
    console.log(count)
}

const arr = [-4, -9, -5, -33, -55 ]
findingBadData(arr)