function GetNum(num){
    // console.log(num);
    var result = document.getElementById("result");
    result.value += num; 
}
function clearResult(){
    // console.log(num);
    var result = document.getElementById("result");
    result.value = ""; 
}
function getResult(){
    // console.log(num);
    var result = document.getElementById("result");
    result.value = eval(result.value); 
}
