/*
// Modify the code below to set the variables appropriately.

// Get the form by ID from the forms collection.
const form = document.forms.todo;

// Get the todo pane (the 'ul' element).
const todoPane = document.getElementById('todo-pane');
// Get the text input for the title.
const titleInput = form.elements.title;
// Get the priority select element.
const prioritySelect = form.elements.priority;
// Get a list of all elements with the 'todo' class.
const allTodos = document.getElementsByClassName('todo');

console.log('form:', form);
console.log('todoPane:', todoPane);
console.log('titleInput:', titleInput);
console.log('prioritySelect:', prioritySelect);
console.log('allTodos:', allTodos);

*/

/*
const todoPane = document.getElementById('todo-pane');

function createElement(title) {
  // Create the text node with the variable 'title'.
    const textNode = document.createTextNode(title); 

  // Create a new list item element to contain the text node.
    const list_item = document.createElement('li');

  // Add the text node to the list item element.
  list_item.appendChild(textNode);

  // Return the new element.
  return list_item;
}

const newElement = createElement('This is the title');
todoPane.appendChild(newElement);
// Insert newElement into the unordered list with id 'todo-pane'.
*/

// Remove the list item element that says 'Do the washing'.
// Use Element.remove().
// See https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
/*
function removeElement() {
    const todoPane = document.getElementById('todo-pane');
    todoPane.remove(todoPane);
}

removeElement();

*/
/*
const form = document.forms.todo;

// Add a submit handler to the form that displays an alert.
// Can you find different ways to trigger the alert?

function sayHi (event) {
    alert('Hi!')
}

form.addEventListener ('click', sayHi);
form.addEventListener ('submit', sayHi);

*/

/*
// Get the form by ID from the forms collection.
const form = document.forms.todo;

// 1. Add a submit listener to the form that prevents default.
// 2. Fill out the title and submit 
// 3. It shouldn't submit and you shouldn't see 'Not Found'.
// 4. Add a click listener to the list item. When clicked it should remove the element from the DOM.

form.addEventListener('submit', function (event){
event.preventDefault()
});




function removeElement () {
    const todoPane = document.getElementById('todo-pane');
    todoPane.remove(todoPane);
}

form.addEventListener ('click', removeElement);

*/




    // Store the URL of an image for each priority level.
    const priorityImages = {
        low: 'https://cdn1.iconfinder.com/data/icons/prettyoffice8/256/Flag-green.png',
        medium: 'https://cdn1.iconfinder.com/data/icons/prettyoffice8/256/Flag-yellow.png',
        high: 'https://cdn1.iconfinder.com/data/icons/prettyoffice8/256/Flag-red.png',
    };
  



    // Get the form by ID from the forms collection.
    const form = document.forms.todo;
    // Get the todo pane (the 'ul' element).
    const todoPane = document.getElementById('todo-pane');
    // Get the text input for the title.
    const titleInput = form.elements.title;
    // Get the priority select element.
    const prioritySelect = form.elements.priority;
    // Get a list of all elements with the 'todo' class.
    const allTodos = document.getElementsByClassName('todo');
     
    // Add a submit listener to the form that adds a todo everytime a user submits one, and prevents default 
    form.addEventListener('submit', function (event){
    //don't submit the form to the server
    event.preventDefault();
    //Clear the title input ready to create a new todo note.
    //first remove the "just-created" class from all existing todos. (Remember that
    //allTodos is a live collection that keeps itself automatically updated)
    for (const todo of allTodos) {
        todo.classList.remove ('just-created');
    }

    // Create the new todo using the values from the form elements
    const newTodo = createTodo(titleInput.value, prioritySelect.value); 
    //Add the latest form elements to the todo list
    todoPane.appendChild(newTodo);
    //Clear the text input ready for the next one. We could also call reset() ontextInput
    //the form, and that would also affect the priority select.
    titleInput.value = '';
    });


    function createTodo(title, priority) {
        // Create the text node with the variable 'title'.
        const textNode = document.createTextNode(title); 
      
        //create a div to contain the title text
        const textDiv = document.createElement('div');

        //add the title text to its div container
        textDiv.appendChild(textNode);

        // Create a new list item element to contain the text node.
        const todo = document.createElement('li');
        
        //create the new image for the todo flag
        const image = document.createElement('img');

        //set the src of the image to the appropriate flag
        image.src = priorityImages[priority];


        // Add the image and the text dive to the 1st and 2nd child of the new todo respectively
        todo.appendChild(image);
        todo.appendChild(textDiv);

        //Add the standard 'todo' class and also a 'just created' class that will be removed later. 
        todo.classList.add('todo', 'just-created');

        //Add a click handler to the todo, so you can remove it by clicking it
        todo.addEventListener('click', function(event)
        {
            event.currentTarget.remove();
        })


        // Return the new element.
        return todo;
      }