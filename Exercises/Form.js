let express = require('express');
let app = express()
const bodyParser = require('body-parser')
const url = require('url')
const cookieParser = require('cookie-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())


app.get('/', (req, res) => {
    if (req.cookies) {
        if (req.cookies) {
          let user = req.cookies['user']
          if(!user.password)
          {
            res.render('template',{invalid : true})
          }
        } else {
          res.render('template')
        }
      } else {
        res.render('template')
      }
    })

  app.post('/formsubmit', (req, res) => {
  console.log('TCL: req', req.cookies)
  const {password,name} = req.body
  const userObj = {password,name}

  res.cookie('user',userObj)
  res.redirect(303,'/')
})  
app.listen(9000, () => console.log('Listening on port 9000!'))