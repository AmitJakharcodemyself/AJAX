const express=require('express')
const app=express()
const TodoRoute=require('./route/todo')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/hello',function(req,res){
    res.send("this is server 4999")
})

app.use('/public',express.static(__dirname+'/public'))

app.use('/todo',TodoRoute)

app.listen(4999,function(){
    console.log("Server is started")
})