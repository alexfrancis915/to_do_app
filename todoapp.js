const addForm = document.getElementById('addform');
const toDoUl = document.getElementById('todoul');
const newToDoLi = document.getElementsByClassName('newli');

const storeToDos = JSON.parse(localStorage.getItem(toDoUl)) || [];
    for (let i = 0; i < storeToDos.length; i++){
        let newToDoLi = document.createElement('li');
        newToDoLi.innerText = storeToDos[i].task;
        newToDoLi.clicked = storeToDos[i].clicked ? true : false;
        if (newToDoLi.clicked){
            newToDoLi.style.textDecoration = 'line-through';
        }
        else{
            newToDoLi.style.textDecoration = 'none';
        }
        let rmvBtn = document.createElement('button')
        rmvBtn.classList += 'rmvbtn';
        rmvBtn.innerText = 'erase';
         toDoUl.appendChild(newToDoLi);
         newToDoLi.appendChild(rmvBtn);
         rmvBtn.addEventListener('click', function(e){
             if (e.target.tagName === 'BUTTON') {
             e.target.parentElement.remove();  
             if (e.target.tagName === 'BUTTON'){
                for (i =0; i< newToDoLi.length; i++) {
                    JSON.parse(localStorage.getItem(storeToDos[i]));
                    storeToDos.splice(i, 1);
                    }
                    JSON.stringify(storeToDos)
                    localStorage.setItem(toDoUl, JSON.stringify(storeToDos));
            }
            }})};


addForm.addEventListener('submit',function(e){
    e.preventDefault();
    let newToDoLi = document.createElement('li');
    let taskInput = document.getElementById('taskinput');
    newToDoLi.innerText = taskInput.value;
    taskInput.value = '';
    taskInput.reset;
    let rmvBtn = document.createElement('button');
    rmvBtn.innerText = 'erase';
    rmvBtn.classList += 'rmvbtn';
    toDoUl.appendChild(newToDoLi);
    newToDoLi.appendChild(rmvBtn);
    storeToDos.push({task:newToDoLi.innerText.replace(rmvBtn.innerText, '')});
    localStorage.setItem(toDoUl, JSON.stringify(storeToDos));
    rmvBtn.addEventListener('click', function(e){
        if (e.target.tagName === 'BUTTON') {
            e.target.parentElement.remove(); 
            if (e.target.tagName === 'BUTTON'){
                for (i =0; i< newToDoLi.length; i++) {
                    JSON.parse(localStorage.getItem(storeToDos[i]));
                    storeToDos.splice(i, 1);
                    }
                    JSON.stringify(storeToDos)
                    localStorage.setItem(toDoUl, JSON.stringify(storeToDos));
            }
            }});
       
                
});

toDoUl.addEventListener('click', function(e){
    if(!e.target.clicked){
    e.target.style.textDecoration = "line-through";
    e.target.clicked = true;
    }
    else {
    e.target.style.textDecoration = "none";
    e.target.clicked = false;
    }
});














 






  /* rmvBtn.addEventListener ('click', function (e){
        if (e.target.tagName === 'BUTTON'){
            for (i =0; i< newToDoLi.length; i++) {
                JSON.parse(localStorage.getItem(storeToDos[i]));
                storeToDos.splice(i, 1);
                }
                localStorage.setItem(toDoUl, JSON.stringify(storeToDos));
        }
        }); */




/*

  /*  rmvBtn.addEventListener ('click', function (e){
        if (e.target.tagName === 'BUTTON'){
            for (i =0; i< newToDoLi.length; i++) {
                JSON.parse(localStorage.getItem(storeToDos[i]));
                storeToDos.splice(i, 1);
                }
        }
        }); */
