function jamesToDaimond (a,b,c){
    const firstFrndDaimond = a * 21;
    const secondFrndDaimond = b * 32;
    const thiredFrndDaimond = c * 43;
    const total = firstFrndDaimond +secondFrndDaimond +thiredFrndDaimond;
    // console.log(total)
    if(total>2000){
        const rest = total - 2000;
        console.log(rest)
    }
    else{
        console.log(total)
    }

}

jamesToDaimond(100,5,1)