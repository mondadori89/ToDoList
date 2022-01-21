// ---- To do list v1.0 ---- com remove button funcionando \o/
//próximo passo: adicionar botão 'done'

// nomeando acionadores do html
let submit = document.getElementById('submit');
let olist = document.getElementById('olist');


// função para adicionar um novo task com botão de remover
function addTask() {
    let task = document.getElementById('task').value
    if (task) {
        let listItem = document.createElement('li');
        let remove = document.createElement('span');
        let espaco = document.createElement('br');

        remove.id = 'remove';
        listItem.id = 'listItem';
        espaco.id = 'espaco';

        listItem.innerHTML = task;

        listItem.appendChild(remove);
        document.getElementById('olist').appendChild(listItem);
        document.getElementById('olist').appendChild(espaco);

        remove.onclick = function() {
            olist.removeChild(listItem);
            olist.removeChild(espaco);
        }
    } else {alert('No item to add')}
}


// acionadores das funções
submit.onclick = addTask;


