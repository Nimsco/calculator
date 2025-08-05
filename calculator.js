const btn = document.querySelectorAll(".btn")
const field= document.getElementsByClassName("input-field")
const clear= document.getElementById("clear-btn")
const equals= document.getElementById("equals")

btn.forEach(button => {
    button.addEventListener("click",function(){
        const btnnumber=button.textContent;
        if (btnnumber==="clr" || btnnumber==="=") return
        const value = (btnnumber === "x") ? "*" : btnnumber;
        field[0].textContent += value;
    })
});

clear.addEventListener("click",function(){
    field[0].textContent=""
})

equals.addEventListener("click",function(){
    const operand = field[0].textContent
    try
    {
        result = eval(operand)
        field[0].textContent=result
    }
    catch(error)
    {
        console.log(error)
        field[0].textContent = "Invalid Input"
    }
})
