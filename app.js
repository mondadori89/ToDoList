// ---- To do list v1.1 ---- com remove button funcionando \o/
//próximo passo: adicionar botão 'done'

// nomeando acionadores do html
let submit = document.getElementById('submit');
let olist = document.getElementById('olist');


// função para adicionar um novo task com botão de remover
function addTask() {
    let task = document.getElementById('task').value
    if (task) {
        let listItem = document.createElement('li');
        let done = document.createElement('span');
        let remove = document.createElement('span');
        let espaco = document.createElement('br');

        done.id = 'done';
        remove.id = 'remove';
        listItem.id = 'listItem';
        espaco.id = 'espaco';

        listItem.innerHTML = task;

        listItem.appendChild(done);
        listItem.appendChild(remove);
        document.getElementById('olist').appendChild(listItem);
        document.getElementById('olist').appendChild(espaco);

        // Botão de check e unchuck da task
        let clicked = '';
        done.onclick = function() {
            if (clicked) {
                done.style.backgroundImage = "url('images/task_icon.png')";
                done.style.backgroundSize = "17px";
                done.style.marginTop = "1px";
                done.style.marginLeft = "20px";
                clicked = false;
            } else {
                done.style.backgroundImage = "url('images/check_icon.png')";
                done.style.backgroundSize = "20px";
                done.style.marginTop = "0px";
                done.style.marginLeft = "19px";
                clicked = true;
            }
        }

        remove.onclick = function() {
            olist.removeChild(listItem);
            olist.removeChild(espaco);
        }
    } else {alert('No item to add')}
}


// acionadores das funções
submit.onclick = addTask;


