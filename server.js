const express = require('express')

expressions = []

async function add_expression (sent, lang)  {

    url = `https://api.mymemory.translated.net/get?q=${sent}&langpair=en|${lang}`
    console.log(url)

   res= await axios.get(url)
   console.log(res.data.responseData.translateText)
   return res.data.responseData.translateText;
}

add_expression("happy", "de")


const app = express()

app.get('/expressions', function (req, res) {
  res.send(expressions)
})

app.get('/expressions/:id', function (req, res) {
    let id = req.params.id
    let express = expressions.find(exp => exp.id == id)
    console.log(express)

    res.send(express)
})

app.use(express.json())
app.post('/expressions', function (req, res) {

    console.log(req.body)
    let ans = add_expression(req.body.op1, req.body.op2, req.body.option)
    res.send({"ans":ans})
})

port = 3000
my_port = process.env.PORT || port
app.listen(my_port)
console.log("app is listening in port 3000")