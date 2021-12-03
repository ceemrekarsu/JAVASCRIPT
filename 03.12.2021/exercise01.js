function Multiply(){
    let s1=Number(document.getElementById( "number1").value)
    let s2=Number(document.getElementById( "number2").value)
    let result = s1*s2
    document.getElementById( "box").innerHTML= "THE RESULT IS: "+result
}
function Divide (){
    let s1=Number(document.getElementById( "number1").value)
    let s2=Number(document.getElementById( "number2").value)
    let result = s1/s2
    document.getElementById( "box").innerHTML= "THE RESULT IS: "+result
}