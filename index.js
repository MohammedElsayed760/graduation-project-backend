const express = require('express')
const app = express()
const cors = require('cors')

const port = 3000

app.use(express.json())
app.use(cors())

const db = {
  /*
  1:{long:60,lat:50,image:hfjdhfdhgdh}
  5:{}
  */
};

app.post('/update', function(req, res) {
  const {long, lat, id, image} = req.body;
  if(db[id]){
    db[id]['long'] = long
    db[id]['lat'] = lat
  }else{
    db[id] = {
      long,
      lat,
    }
  }

  if(image){
    db[id]['image'] = image
  }
  console.log(db)
  res.send("success")
})
app.post('/pull', (req, res) => {
  const id = req.body.id
  const data = db[id]
  return res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
