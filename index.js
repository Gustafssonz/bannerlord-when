const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 5000

app.use(express.static('public'))

// Engine
app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main'
}))
app.set('view engine', '.hbs')
// App Use
app.use((request, response, next) => {
  next()
})

// app.use((request, response, next) => {
//   request.chance = Math.random()
//   next()
// })


// Get
// app.get('/', (request, response) => {
//   response.json({
//     chance: request.chance
//   })
// })

app.get('/', (request, response) => {
  response.render('home', timeStamp())
});

app.get('/', function(req, res){
  res.render("home");
});
const orignalDate = new Date(2010,07,01)



function timeStamp () {
  const time = new Date()

  let monthDiff = time.getMonth() - orignalDate.getMonth();
  monthDiff = monthDiff < 0 ? monthDiff * -1 : monthDiff;


  const timeObject = {
    year: time.getFullYear() - orignalDate.getFullYear(),
    month: 12 - monthDiff >= 12 ? 0 : 12 - monthDiff,
    day: time.getDate() - orignalDate.getDate(),
    hour: time.getHours() - orignalDate.getHours(),
    minute: time.getMinutes() - orignalDate.getMinutes(),
    second: time.getSeconds() - orignalDate.getSeconds()
  }
  return timeObject
}

// Hämta original date announcement
// Gör ny timestamp - original date



io.on('connection', function(socket){
  console.log('a user connected');
  const interval = setInterval(() => {
    io.emit("update", timeStamp())
  }, 1000);
  socket.on('disconnect', function(){
    clearInterval(interval)
    console.log('user disconnected');
  });
});
app.use((err, request, response, next) => {
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
})

http.listen(PORT,function () {
  console.log("server started")
})

/* express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main'
  }))
  .set('view engine', 'hbs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`)) */
