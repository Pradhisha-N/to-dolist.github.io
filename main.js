let i = 1;

// Function to handle text input validation
function filterText(text) {
    if (text) {
        if (text.length > 1) {
            return text;
        } else {
            return false;
        }
    }
    return false;
}

// Function to display the task list with delete and checkbox
function showList(input, listId) {
    const taskId = `list${i}`;
    listId.innerHTML += 
        `<div class="tasks" id="${taskId}">
            <input type="checkbox" id="t${i}">
            <label for="t${i}">${input}</label>
            <div id="action">
                <i class="delete" onclick="deleteList('${taskId}')">
                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </i>
            </div>
        </div>`;
    i++;
}

// Function to add a task to Daily List
function addDailyList() {
    let inputText = document.querySelector('#input').value;

    if (filterText(inputText)) {
        showList(inputText, document.querySelector('#daily-lists'));
        document.querySelector('#input').value = '';
        document.querySelector('#error-text').innerHTML = '';
    }
}

// Function to add a task to Weekly List
function addWeeklyList() {
    let inputWeeklyText = document.querySelector('#input-weekly').value;

    if (filterText(inputWeeklyText)) {
        showList(inputWeeklyText, document.querySelector('#weekly-lists'));
        document.querySelector('#input-weekly').value = '';
        document.querySelector('#error-weekly').innerHTML = '';
    }
}

// Function to add a task to Monthly List
function addMonthlyList() {
    let inputMonthlyText = document.querySelector('#input-monthly').value;

    if (filterText(inputMonthlyText)) {
        showList(inputMonthlyText, document.querySelector('#monthly-lists'));
        document.querySelector('#input-monthly').value = '';
        document.querySelector('#error-monthly').innerHTML = '';
    }
}

// Function to delete a task by its ID
function deleteList(taskId) {
    const task = document.getElementById(taskId);
    task.remove();  // This removes the task element from the DOM
}
