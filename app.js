// ---- To do list v1.3 ---- Style melhorado
//Próximo Passo: não sei ainda

// nomeando acionadores do html
let submitButton = document.getElementById('submit');
let orderedList = document.getElementById('olist');


// função para adicionar um novo task com botão de remover
function addTask() {
    let task = document.getElementById('task').value
    if (task) {
        let listConteiner = document.createElement('li');
        let listItem = document.createElement('p');
        let doneButton = document.createElement('span');
        let removeButton = document.createElement('span');
        //let breakSpace = document.createElement('br');

        listConteiner.id = 'listConteiner';
        listItem.id = 'listItem';
        doneButton.id = 'done';
        removeButton.id = 'remove';   
        //breakSpace.id = 'espaco';

        listItem.innerHTML = task;

        listConteiner.appendChild(listItem);
        listConteiner.appendChild(doneButton);
        listConteiner.appendChild(removeButton);
        document.getElementById('olist').appendChild(listConteiner);
        //document.getElementById('olist').appendChild(breakSpace);

        // Botão de check e uncheck da task
        let isClicked = '';
        doneButton.onclick = function() {
            if (isClicked) {
                doneButton.style.backgroundImage = "url('images/task_icon.png')";
                doneButton.style.backgroundSize = "17px";
                doneButton.style.height = "19px";
                doneButton.style.width = "19px";
                doneButton.style.marginLeft = "20px";
                isClicked = false;
            } else {
                doneButton.style.backgroundImage = "url('images/check_icon.png')";
                doneButton.style.backgroundSize = "20px";
                doneButton.style.height = "20px";
                doneButton.style.width = "20px";
                doneButton.style.marginLeft = "19px";
                isClicked = true;
            }
        }

        removeButton.onclick = function() {
            orderedList.removeChild(listConteiner);
            //orderedList.removeChild(breakSpace);
        }
    } else {alert('No item to add')}
}


// acionadores das funções
submitButton.onclick = addTask;


