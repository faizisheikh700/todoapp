let addBtn = document.getElementById("addBtn");
let saveBtn = document.getElementById("saveBtn");
let todoList = document.getElementById("todoList");
let deleteAllBtn = document.getElementById("deleteAllBtn");
let editedLI = null;


saveBtn.style.display = "none";
deleteAllBtn.style.display = "none";


function addTodo(){

    //  Take value from input
    let todoInput = document.getElementById("todoInput");
    let todoInputValue = todoInput.value;

    // console.log(createLi)
    if (todoInputValue.trim()) {

    // create Li tag
    let createLi =  document.createElement("li");
    createLi.innerText = todoInputValue;

    // edit button add in Li
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    createLi.appendChild(editBtn);
    editBtn.setAttribute("class", "ed");

    // delete button add in Li
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    createLi.appendChild(deleteBtn);
    deleteBtn.setAttribute("class", "del");

    //   append LI in OL list
    todoList.appendChild(createLi);
    deleteAllBtn.style.display = "inline-block";

    //  delete Li 
    deleteBtn.addEventListener("click", function(){
        createLi.remove();
        if(todoList.children.length === 0){
            deleteAllBtn.style.display = "none";
        }
    });

        //   Edit LI
        editBtn.addEventListener("click", function () {
            let forEditText = createLi.childNodes[0].nodeValue;
            todoInput.value = forEditText;
            saveBtn.style.display = "inline-block";
            addBtn.style.display = "none";
            editedLI = createLi;
          });
      
          //   Save Edited Todo
          saveBtn.addEventListener("click", function () {
            saveBtn.style.display = "none";
            addBtn.style.display = "inline-block";
            editedLI.childNodes[0].nodeValue = todoInput.value;
            todoInput.value = "";

          });
      
} else {
    alert("Please Input Todo");

}
    todoInput.value = "";
}

function deleteAll(){
    console.log(todoList.children.length);
      if (todoList.children.length > 0) {
    todoList.innerHTML = null;
  }
  deleteAllBtn.style.display = "none";
}
