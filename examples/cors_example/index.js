const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/hello1', (req, res) => {
    res.json({ msg: '😞 no CORS, no party!' });
});

// app.options('/hello', cors(), (req, res) => {
//     res.send();
// })

app.get('/hello', (req, res, next) => {
    res.json({ msg: ' Hooray' });
})

const server = app.listen(3000, () => {
    console.log('Listening on port %s', server.address().port)
})