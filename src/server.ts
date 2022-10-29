import express from 'express'

const app = express()

app.get('/', (request, response) => {
    return response.json({ hello : 'world'})
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`running on port : ${port}`))