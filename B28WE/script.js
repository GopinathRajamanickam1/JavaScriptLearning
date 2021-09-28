var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all' , true);
req.send();
req.onload = function () {
    let result = JSON.parse(req.response);
    //Iterated using the Forin, For of , For loop
   for(let i in result){
        console.log(result[i].name+"--->"+result[i].capital);
    }
    for(let i=0; i<result.length ;i++){
        console.log(result[i].name+"--->"+result[i].capital);
    } 
    for(let value of result){
        console.log(value);
    }
    result.forEach(element => {
        console.log(element.capital);
    });
}

