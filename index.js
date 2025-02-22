// let listArray = [];
// let inputValue;

// let ulTag = document.getElementById("list");

// let delBtn = document.createElement("button");
// delBtn.id = "delBtn";
// delBtn.innerHTML = "X";
// delBtn.classList.add("delBtn");
// document.getElementById("enter").addEventListener("click", () => {
//   inputValue = document.getElementById("userInput").value;
//   document.getElementById("list").innerHTML = " ";

//   listArray.push(inputValue);

//   listArray.forEach((tl) => {
//     let taskList = document.createElement("div");
//     taskList.id = "taskList";
//     taskList.innerHTML = tl;
//     listArray = []
//     taskList.classList.add("taskList");
//     taskList.appendChild(delBtn);
//     // document.getElementById("list").appendChild(taskList);
//     document.body.appendChild(taskList);

//     console.log(taskList, document.getElementById("list"));
//   });
//   document.getElementById("userInput").value = " ";
// });




let userInput = document.getElementById('userInput');
let ulTag = document.querySelector('ul');
let enterBtn = document.getElementById('enter');



function inputLength(){
    return userInput.value.length;
}
function addListItem(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    ulTag.appendChild(li);
    userInput.value = " "


    

    let delBtn = document.createElement("button");
    delBtn.appendChild(document.createTextNode("X"));
    li.appendChild(delBtn)
    delBtn.addEventListener("click",removeItem)
   
    function removeItem() {
        li.classList.add("delete");
    }
    
}


function addItemAfterClick(){
    if(inputLength() > 0 ){
        addListItem();
    }
}

function addItemAfterEnter(e){
    console.log(e.key);
    if(inputLength() > 0 &&  e.key === "Enter"){
        addListItem();
    }
}


enterBtn.addEventListener("click",addItemAfterClick)

userInput.addEventListener("keypress",addItemAfterEnter)








