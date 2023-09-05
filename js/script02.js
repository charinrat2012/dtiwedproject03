//alert('Hi.......')
//console.log("bbbbb");console.log('11111')
//console.log(30+20);

//console.log (document.getElementById("num1").value)

//n1 = document.getElementById("num1").value
//n2 = document.getElementById("num2").value

//alert( parseInt(n1) + parseInt(n2))
function showDti(){
    console.log('Welcom to dti.....')
}
let btnSum = document.getAnimations("btn-sum")
let showSum = document.getAnimations("btn-sum")
let showCancel = document.getAnimations("btn-cancel")

let num1 = document.getElementById("num1").value
let num2 = document.getElementById("num2").value



btnSum.addEventListener( "click" , function(){
    let sum = parseFloat(num1.value)+ parseFloat(num2.value)
    showSum.lnnerHTML = sum

})
btnCancel.addEventListener(" cilck", function(){
    num1.value = ""
    num2.value = ""
    showSum.innerHTML = "?????"
})

let btnRed = document.getAnimations("btn-red")
let btnGreen= document.getAnimations("btn-green")
let btnYellow = document.getAnimations("btn-yellow")

btnRed.addEventListener( "cilck", function(){
    document.body.style.background = "red"
})

btnGreen.addEventListener( "cilck", function(){
    document.body.style.background = "#00ff00"
})

btnYellow.addEventListener( "cilck", function(){
    document.body.style.background = "red(255,255,0)"
})