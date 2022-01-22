// ---- To do list v1.2 ---- com remove e done button BIRLL
//Próximo Passo: arrumar style?

// nomeando acionadores do html
let submitButton = document.getElementById('submit');
let orderedList = document.getElementById('olist');


// função para adicionar um novo task com botão de remover
function addTask() {
    let task = document.getElementById('task').value
    if (task) {
        let listItem = document.createElement('li');
        let doneButton = document.createElement('span');
        let removeButton = document.createElement('span');
        let breakSpace = document.createElement('br');

        doneButton.id = 'done';
        removeButton.id = 'remove';
        listItem.id = 'listItem';
        breakSpace.id = 'espaco';

        listItem.innerHTML = task;

        listItem.appendChild(doneButton);
        listItem.appendChild(removeButton);
        document.getElementById('olist').appendChild(listItem);
        document.getElementById('olist').appendChild(breakSpace);

        // Botão de check e unchuck da task
        let isClicked = '';
        doneButton.onclick = function() {
            if (isClicked) {
                doneButton.style.backgroundImage = "url('images/task_icon.png')";
                doneButton.style.backgroundSize = "17px";
                doneButton.style.marginTop = "1px";
                doneButton.style.marginLeft = "20px";
                isClicked = false;
            } else {
                doneButton.style.backgroundImage = "url('images/check_icon.png')";
                doneButton.style.backgroundSize = "20px";
                doneButton.style.marginTop = "0px";
                doneButton.style.marginLeft = "19px";
                isClicked = true;
            }
        }

        removeButton.onclick = function() {
            orderedList.removeChild(listItem);
            orderedList.removeChild(breakSpace);
        }
    } else {alert('No item to add')}
}


// acionadores das funções
submitButton.onclick = addTask;


