const url="api/person";

let persons=[];

let xhrGetAll = new XMLHttpRequest();
xhrGetAll.open("GET", url, true);
xhrGetAll.send();

xhrGetAll.onload=()=>{
    console.log(xhrGetAll);
    persons = JSON.parse(xhrGetAll.response);
    if (xhrGetAll.readyState == 4 && xhrGetAll.status==200) {
        console.log(persons);
    } else{
        console.error("Error!")
    }
}

function renderPersons(){
    console.log("test")
    const personList = persons.map(element => {
        return (
            "<li>"+
            element.firstName + " " + element.lastName + "<br />" +
            "</li>"
        )});
            document.getElementById("results").innerHTML =
    "<ul>" + personList.join('\n') + "</ul>";
}

function addPerson(e){
    e.preventDefault();
    console.log("Submit clicked");
    
    let person = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value
    }
    console.log(person);

    let xhrPost = new window.XMLHttpRequest();
    xhrPost.open("POST", url);
    xhrPost.setRequestHeader("Content-Type", "application/json");
    xhrPost.send(JSON.stringify(person));
}