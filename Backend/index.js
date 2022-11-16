const express = require('express')
const connectToDB = require('./DB')
const app = express()
const port = 5000
connectToDB();
const cors  = require('cors');

app.use(cors())
app.use(express.json())
app.use('/api/book', require('./Routes/Book') )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})