console.log("Hello world");
let todos = [
    {id: 1 , name:"Chơi game", isDone: true},
    {id: 2 , name:"Nghe nhạc", isDone: false},
    {id: 3 , name:"Xem phim", isDone: true},
];

//CRUD

//Read : đổ dữ liệu tên công việc ra giao diện HTML

const renderData  = () =>{
    // Lấy Element thẻ cha chứa dữ liệu 
    let listElement = document.getElementsByClassName("listMenu")[0];
    
    //clear dữ liệu cũ
    listElement.innerText=``;
    todos.forEach((todo)=>{
        
    //createElement : Tạo ra thẻ mới trong HTML
    let itemElement = document.createElement("li");

    // Thêm nội dung
    itemElement.innerText = todo.name;
    
    itemElement.innerHTML = `<div style = "padding : 20px">
                            ${todo.name}
                            
                            <button onclick= "handleGetDataUpdateTodo(${todo.id})">Chỉnh sửa</button>
                            <button onclick = "handleDeleteTodo(${todo.id})">delete</button>
                            </div>`;
    // appendChild : Thêm vào Dom
    listElement.appendChild(itemElement);
    })
};
renderData();   

//Create : Thêm công việc 
const handleAddTodo = () =>{
    let inputElement = document.getElementById("input_Todo");
    let newName = inputElement.value.trim();
    console.log(newName);
    
    let newTodo = {
        id: Date.now(), 
        name: newName,
        isDone : false,
    };
    todos.push(newTodo);
    renderData();
    inputElement.value = "";
};

// Event Sự kiện
let buttonAddElement = document.getElementById("add");
let buttonUpdateElement = document.getElementById("update");

// Cách nhận click
buttonAddElement.addEventListener("click", handleAddTodo);

let inputElement = document.getElementById("input_Todo");
inputElement.addEventListener("keydown",(e)=>{
    console.log(e);
    if(e.key == "Enter"){
        handleAddTodo();
    }
});

//Update

const handleGetDataUpdateTodo = (idTodo) =>{
    console.log(idTodo);
    let todo = todos.find((todo)=>{
        return todo.id === idTodo;
    });
    inputElement.value = todo.name;
    buttonAddElement.style.display = "none";
    buttonUpdateElement.style.display = "inline";
    // . focus() (tăng thêm trải nghiệm người dùng);
    inputElement.focus();
    idUpdate = idTodo;
};

const handleChangeDataUpdate = ()=>{
    let newNameTodo = inputElement.value;
    let indexTodo = todos.findIndex((todo)=>{
        return todo.id === idUpdate
    });
    todos[indexTodo].name = newNameTodo;
    console.log(todos);
    inputElement.value = "";
    buttonAddElement.style.display = "inline";
    buttonUpdateElement.style.display = "none";
    
};

buttonUpdateElement.addEventListener("click",handleChangeDataUpdate);

//Delete
const handleDeleteTodo = (idTodo) =>{
    let  indexTodo = todos.findIndex((todo)=>{
        return todo.id === idTodo;
    });

    todos.splice(indexTodo,1);
    renderData();
};


