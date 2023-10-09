console.log("Pass");

const input = document.getElementById('input');

const topic = document.getElementById('topic1');
const com1 = document.getElementById('comment1');
const com2 = document.getElementById('comment2');

var counter = 0;

function postFunction(){
    var input = document.getElementById('input');

    console.log(counter);

    if(counter == 0){  
        topic.value = input.value;
        input.value = "";  
        counter += 1;
    }
    else if(counter == 1){
        com1.value = input.value;
        input.value = "";
        counter += 1;   
    }
    else if(counter == 2){
        com2.value = input.value;
        input.value = "";
        counter += 1; 
    }
}

function clearFunction(){
    topic.value = "";
    com1.value = "";
    com2.value = "";
    input.value = "";
}