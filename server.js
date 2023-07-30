const bodyParser = require('body-parser')
const { log } = require('console')
const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

const items = ['Jogging', 'Cycle Riding', 'Exploring World']

app.get('/', (req, res, next) => {
    res.status(200).render(path.join(__dirname, 'views', 'index.ejs'), { header: "To Do List App", title: "List_app_Ejs", items: items })
})

app.post("/", (req, res) => {
    items.push(req.body.nameItem)
    res.redirect('/')
})
app.get('/contact', (req, res, next) => {
    res.status(200).render(path.join(__dirname, 'views', 'contact.ejs'), { header: " contact pages", title: "List_app_Ejs" })
})
app.listen(PORT, () => {
    console.log(`This is running in the port of ${PORT}`);
})