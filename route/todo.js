const route=require('express').Router()

//app.use(express.urlencoded({extended:true}))

 let todos1=[]
let todos2=[]
 route.get('/',function(req,res){
     res.send(todos1)
 })


 route.get('/2',function(req,res){
    res.send(todos2)
})


route.post('/2',function(req,res){
todos2.push({
    newtask2:req.body.newtask2
})
res.send(todos2)
 })


 route.post('/',function(req,res){
     todos1.push({
         newtask1:req.body.newtask1
     })
     res.send(todos1)
 })

 module.exports=route