const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
  
})

app.get('/:path', (req, res) => {
  const path = req.path
  if (path === '/home') {
    res.render('index')
  } else if ( path === '/about') {
    res.render('about')
  } else if ( path === '/portfolio') {
    res.render('portfolio')
  } else if (path === '/content') {
    res.render('content')
  }
})


app.listen(port, () => {
  console.log(`express is running on http://localhost:${port}`)
})