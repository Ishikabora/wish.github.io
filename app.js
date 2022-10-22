var students = [];
var num = 0;

function get(x){
    return document.getElementById(x);
}

function addmarks(){
    if(get("wish").value==""){
get("info").innerText = "Pls. Enter the wish.";
    }
    else{
        if(get("wish").value=="1,2,3,4,5,6,7,8,9,0"){
            get("info").innerText = "Pls. Enter number in words."; 
        }
        else{
            window['student'+num] = {
                name: (get("name").value).toLowerCase(),
                wish: get("wish").value,

            }
            students.push(window['student'+num]);
            num++;
            get("info").innerText = `Wish sent successfully`;
            get("wish").value ="";
            
        }
    }
}

function result(){
    var input = get("stuname").value.toLowerCase();
    var output = get("output");

    for (var i = 0; i<students.length; i++){
        if (students[i].name===input){
           
            output.innerHTML = `<h4>Ho! Ho! Ho! I recieved your wish.</h4><br>`;
            break;
        }
        else{
            output.innerHTML = "Name not found";
        }
    }
}