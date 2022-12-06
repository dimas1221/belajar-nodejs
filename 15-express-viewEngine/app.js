
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const app = express()
const port = 3000

//gunakan ejs
app.set('view engine', 'ejs')

// third parti middlewqare
app.use(expressLayouts)

//built in middlewarre
app.use(express.static('public'))
app.use(morgan('dev'))

//aplication level middleware
app.use((req, res, next) =>{
  console.log('time : ', Date.now())
  next()
})

app.get('/', (req, res) => {
  const mahasiswa =[
    {
      nama: 'dimas',
      email: 'dim12@gmail.com'
    },
    {
      nama: 'dimas2',
      email: 'dim12@gmail.com'
    },
    {
      nama: 'dimas3',
      email: 'dim12@gmail.com'
    }
  ]
  res.render('index',{
    nama: 'dimas',
    title: 'home',
    mahasiswa,
    layout : 'layouts/main-layouts',
  })
})

app.get('/about', (req, res) => {
  res.render('about',{
    title: 'about',
    layout : 'layouts/main-layouts',
  })
  })

app.get('/contact', (req, res) => {
  res.render('contact',{
    title: 'contact',
    layout : 'layouts/main-layouts',
  })
  })

//mengangkap id
// app.get('/product/:id/categori/:idCat', (req, res) =>{
//   res.send(`produk Id :   ${req.params.id} \n Categori ID : ${req.params.idCat}`)
// })

app.get('/product/:id', (req, res) =>{
  res.send(`produk Id :   ${req.params.id} \n Categori ID : ${req.query.category}`)
})
//menjalankan midleware harus di simpen di paling bawah
app.use('/', (req, res) => {
    res.status(404)
    res.send('<h1>404</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

