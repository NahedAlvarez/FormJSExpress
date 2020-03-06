let express = require('express');
let app = express()
const bodyParser = require('body-parser')
const url = require('url')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    if (req.query) {
        if (req.query.pw === '0') {
          res.render('template', { invalid: true })
        } else {
          res.render('template')
        }
      } else {
        res.render('template')
      }
    })
  app.post('/formsubmit', (req, res) => {
    console.log('TCL: req', req.body)
    const { password } = req.body
    // Revisar si password viene vacio
    if (!password) {
      res.redirect(
        303,
        url.format({
          pathname: '/',
          query: {
            pw: 0
          }
        })
      )
    } else {
      res.render('template', { sent: "true" })
    }
})  
app.listen(9000, () => console.log('Listening on port 9000!'))