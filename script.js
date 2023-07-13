const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");

const addTask = () => {
    if(inputBox.value === ''){
        alert("No Text Entered");
    }else{
        const newCard = document.createElement('div');
        newCard.classList.add('card-body');

        const arrowIcon = document.createElement('span');
        arrowIcon.innerHTML = '<i class="bi bi-arrow-right-square-fill"></i>';
        newCard.appendChild(arrowIcon);

        const taskText = document.createElement('span');
        taskText.classList.add('task');
        taskText.textContent = inputBox.value;
        newCard.appendChild(taskText);

        const doneButton = document.createElement('a');
        doneButton.href = '#';
        doneButton.classList.add('btn', 'btn-dark', 'btn-sm', 'done');
        doneButton.textContent = 'Completed';
        doneButton.addEventListener('click', () => {
            taskText.style.textDecoration = 'line-through';
        });
        newCard.appendChild(doneButton);

        taskList.appendChild(newCard);
        inputBox.value = '';
    }

}