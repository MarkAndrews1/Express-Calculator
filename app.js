const express = require('express')
const ExpressError = require('./expressError')
const { mean, median, mode } = require('./math')


const app = express()

app.get('/mean', function(req, res){
    if(!req.query.nums) {
        throw new ExpressError('Numbers are required.', 400)
    }

    let numsString = req.query.nums.split(',')

    let nums = [];

    for (let number of numsString){

        num = Number(number)

        if(!num){
            throw new ExpressError('Invalid number', 400)
        }else{
            nums.push(num)
        }
    }

    let result = {
        operation: 'mean',
        result: mean(nums)
    }

    return res.send(result)

})

app.get('/median', function(req, res){
    if(!req.query.nums) {
        throw new ExpressError('Numbers are required.', 400)
    }

    let numsString = req.query.nums.split(',')

    let nums = [];

    for (let number of numsString){

        num = Number(number)

        if(!num){
            throw new ExpressError('Invalid number', 400)
        }else{
            nums.push(num)
        }
    }

    let result = {
        operation: 'median',
        result: median(nums)
    }

    return res.send(result)

})

app.get('/mode', function(req, res){
    if(!req.query.nums) {
        throw new ExpressError('Numbers are required.', 400)
    }

    let numsString = req.query.nums.split(',')

    let nums = [];

    for (let number of numsString){

        num = Number(number)

        if(!num){
            throw new ExpressError('Invalid number', 400)
        }else{
            nums.push(num)
        }
    }

    let result = {
        operation: 'mode',
        result: mode(nums)
    }

    return res.send(result)

})

app.get('/all', function(req, res){
    if(!req.query.nums) {
        throw new ExpressError('Numbers are required.', 400)
    }

    let numsString = req.query.nums.split(',')

    let nums = [];

    for (let number of numsString){

        num = Number(number)

        if(!num){
            throw new ExpressError('Invalid number', 400)
        }else{
            nums.push(num)
        }
    }

    let result = {
        operation: 'all',
        mean: mean(nums),
        median: median(nums),
        mode: mode(nums)
    }

    return res.send(result)

})

app.use(function (req, res, next){
    const e = new ExpressError('Not Found', 404)
    return next(e)
})

app.use(function(err, req, res, next){
    res.status(err.status || 500)

    return res.json({
        error: err.status,
        msg: err.message
    })
})

app.listen(3000, function () {
    console.log('App on port 3000');
  })