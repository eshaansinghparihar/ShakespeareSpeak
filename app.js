var btnTranslate = document.querySelector("#translate-btn");
var englishInput = document.querySelector("#english-input");
var shakespeareOutput = document.querySelector("#output");

var url="https://api.funtranslations.com/translate/shakespeare.json";

function getTranslationData(input){
    return url + "?" + "text=" + input
}

function errorHandler(input){
    // console.log("error occured");
    // // alert("Error Occured !"+ error.message);
    // shakespeareOutput.innerText="Error : "+error;

    fetch(getTranslationData(input))
    .then(response=>response.json())
    .then(data=>{
        var errorMssg=data.error.message;
        shakespeareOutput.innerText="Error : "+errorMssg;
    })
}

function clickHandler(){
    var input=englishInput.value;
    
    fetch(getTranslationData(input))
    .then(response=>response.json())
    .then(data=>{
        var translatedText=data.contents.translated;
        shakespeareOutput.innerText=translatedText;
    })
    .catch(errorHandler(input))

}

btnTranslate.addEventListener("click", clickHandler);