function mean(nums){
    if(nums.length === 0) return 0
    
    return nums.reduce(function(acc, cur) {
        return acc + cur;
    }) / nums.length
}

function median(nums){
    nums.sort((a,b) => a - b)

    const length = nums.length
    const midIdx = Math.floor(length/2)

    if(length % 2 === 0){
        return (nums[midIdx - 1] + nums[midIdx]) / 2
    }else {
        return nums[midIdx]
    }
}

function mode(nums){

    const counts = {}
    
    for(let num of nums){
        counts[num] = (counts[num] || 0) + 1
    }

    let maxCount = 0
    let mode = []

    for( let num in counts){
        const count = counts[num]
        if (count > maxCount){
            maxCount = count
            mode = [parseFloat(num)]
        }else if(count === maxCount){
            mode.push(parseFloat(num))
        }
    }

    if(mode.length === Object.keys(counts).length){
        return 0
    }

    return mode
}

module.exports = {
    mean,
    median,
    mode
}