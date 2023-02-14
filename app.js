const express = require('express')
const app = express()

app.use(express.json())


app.get('/hello', (req, res) => {
    res.status(200).send('hello whats up')
})


// Use this as body in postman:
// {
//     "theVariable": "hello how are you"
// }
app.post('/yo', (req, res) => {
    const {theVariable} = req.body
    res.status(201).json({ msg: 'thankyou', data: theVariable })
})





const port = 5000
app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})