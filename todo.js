const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Initialize an empty to-do list
let todoList = [];

// Function to display the menu and handle user input
function displayMenu() {
    console.log("\n=== To-Do List Management ===");
    console.log("1. Add a task");
    console.log("2. Remove a task");
    console.log("3. View all tasks");
    console.log("4. Clear the list");
    console.log("5. Exit");
    rl.question("Choose an option (1-5): ", handleMenuChoice);
}

// Function to handle the menu choice
function handleMenuChoice(choice) {
    switch (choice) {
        case '1':
            addTask();
            break;
        case '2':
            removeTask();
            break;
        case '3':
            viewTasks();
            break;
        case '4':
            clearList();
            break;
        case '5':
            rl.close();
            break;
        default:
            console.log("Invalid choice! Please choose between 1 and 5.");
            displayMenu();
    }
}

// Function to add a new task
function addTask() {
    rl.question("Enter the task you want to add: ", (task) => {
        todoList.push(task);
        console.log(`Task added: "${task}"`);
        displayMenu();
    });
}

// Function to remove a task
function removeTask() {
    if (todoList.length === 0) {
        console.log("Your to-do list is empty.");
        displayMenu();
        return;
    }

    viewTasks(); // Display tasks to choose from
    rl.question("Enter the task number to remove: ", (index) => {
        index = parseInt(index) - 1;
        if (index >= 0 && index < todoList.length) {
            const removedTask = todoList.splice(index, 1);
            console.log(`Removed task: "${removedTask}"`);
        } else {
            console.log("Invalid task number.");
        }
        displayMenu();
    });
}

// Function to view all tasks
function viewTasks() {
    if (todoList.length === 0) {
        console.log("Your to-do list is empty.");
    } else {
        console.log("\n=== Your Tasks ===");
        todoList.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
    displayMenu();
}

// Function to clear the list
function clearList() {
    todoList = [];
    console.log("All tasks have been cleared.");
    displayMenu();
}

// Display the menu when the program starts
displayMenu();
