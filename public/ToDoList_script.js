window.onload=function(){
let in1=$('#inpbox1')
let in2=$('#inpbox2')
let ajax_bt=$('#ajax')
let tdl1=$('#tdl1')
let tdl2=$('#tdl2')

ajax_bt.click(function(){

let val1=in1.val()
let val2=in2.val()

$.post('/todo/',
{newtask1:val1},
function(data){

    tdl1.empty()
    for(obj of data){
        tdl1.append('<li>'+obj.newtask1+'</li>')
    }
}
)

$.post('/todo/2/',
{newtask2:val2},
function(data){

    tdl2.empty()
    for(obj of data){
        tdl2.append('<li>'+obj.newtask2+'</li>')
    }
}
)

}
)


}