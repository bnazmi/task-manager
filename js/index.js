// Selector function
const select = (selctor) => {
    return document.querySelector(selctor);
}

// select the add card elment 
const addCardButtom = select('#add--card');
// add event to add Card elment 
addCardButtom.addEventListener('click', () => {

    //create input elment
    const cardInputTitle = document.createElement('input');
    // set elment attribute 
    cardInputTitle.setAttribute('id', 'new-card-title');
    //select the add card contaiber 
    const addCardContainer = select('.add--card')
    // append chiled new input to our page
    addCardContainer.appendChild(cardInputTitle);

    //create input button elment
    const cardInputButton = document.createElement('button');
    // set elment attribute 
    cardInputButton.setAttribute('id', 'new-card-button');
    cardInputButton.textContent = 'Add Card';
    // append chiled new input to our page
    addCardContainer.appendChild(cardInputButton);
    //
    cardInputButton.addEventListener('click', () => {
        const mainContainer = select('.main--container');
        const card = document.createElement('section');
        card.setAttribute('class', 'card');
        const cardHeader = document.createElement('div');
        cardHeader.setAttribute('class', 'card--header');
        const cardContiner = document.createElement('div');
        cardContiner.setAttribute('class', 'card--continer');
        cardContiner.setAttribute('ondragenter','allowDrop(this)');
        const cardFooter = document.createElement('div');
        cardFooter.setAttribute('class', 'card--footer');
        mainContainer.appendChild(card);
        card.appendChild(cardHeader);
        card.appendChild(cardContiner);
        card.appendChild(cardFooter);
        const headerTitle = document.createElement('h2');
        headerTitle.textContent = cardInputTitle.value;
        cardHeader.appendChild(headerTitle);
        cardInputTitle.value = "";
        const addTask = document.createElement('a');
        addTask.setAttribute('href', '#');
        addTask.setAttribute('id', 'add-task');
        addTask.textContent = "Add Task";
        cardFooter.appendChild(addTask);
        // 
        addTask.addEventListener('click', () => {
            const taskTitle = document.createElement('textarea');
            cardContiner.appendChild(taskTitle);
            taskTitle.addEventListener('keypress', (e) => {
                if (e.keyCode == 13) {
                    const task=document.createElement('div');
                    task.setAttribute('class','task');
                    task.setAttribute('draggable','true');
                    task.setAttribute('ondragstart','saveNode(this)');
                    task.setAttribute('ondragend','release(this)');
                    taskPargraph = document.createElement('p');
                    taskPargraph.textContent=taskTitle.value;
                    task.appendChild(taskPargraph);
                    cardContiner.appendChild(task);
                    cardContiner.removeChild(taskTitle);
                }
            })

        })
    })
})
// 

//dragdrop script

let saveNodeElment;
let parent;
let allowDropElment = false;

const saveNode =(elment)=>{
    saveNodeElment=elment;
}

const allowDrop =(elment)=>{
    parent = elment;
    allowDropElment = true;
}

const release=(elment)=>{
    if(allowDropElment){
        parent.appendChild(saveNodeElment);
    }
}