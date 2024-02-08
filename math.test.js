const { mean, median, mode } = require('./math')

describe('#mean', function(){
    it("finds the mean of an array", function(){
        expect(mean([1,2,3,4])).toEqual(2.5)
    })

    it('finds the mean of a empty array', function(){
        expect(mean([])).toEqual(0)
    })
})


describe('#median', function(){
    it("finds the median of an even array", function(){
        expect(median([1,2,3,4])).toEqual(2.5)
    })

    it('finds the median of an odd array', function(){
        expect(median([1,2,3,4,5])).toEqual(3)
    })
})


describe('#mode', function(){
    it("finds the mode of an array", function(){
        expect(mode([1,1,2,3,4])).toEqual([1])
    })

    it('finds the mode of an array with multiple modes', function(){
        expect(mode([1,1,2,3,4,5,5])).toEqual([1,5])
    })
})

