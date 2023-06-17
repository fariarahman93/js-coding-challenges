
const findDuplicates=(arr)=>{
    return arr.filter((item,index)=>{
        return arr.indexOf(item)!==index;
    })
}
const findDuplicatesCount=(array)=>{
    let count=0;
    for (let i = 0; i < array.length; i++) {
        const iElement = array[i];
        for (let j = i+1; j < array.length; j++) {
            const jElement = array[j];
            if(iElement===jElement)
            count++;    
        }
    }
    return count;
}
const findDuplicatesCountUsingReducer=(arr)=>{
   return arr.reduce((object,item)=>{
        if(object[item]){
             object[item]++;
             return object
        }
        else{
            object[item]=1;
            return object;
        }
    },{})
}
const findDuplicatesCountUsingForEach=(arr)=>{
    let count={}
    arr.forEach((num)=>{
        if(count[num])
        count[num]++;
        else
        count[num]=1;
    })
    let duplicate=0;
    for (const key in count) {
        if ( count[key]>1) {
         duplicate++;
        }
    }
    return duplicate;
}

const arr= [1,2,3,1,2,3,4,5,6]
console.log(findDuplicatesCountUsingForEach(arr));