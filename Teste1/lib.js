let tarefas = [];

function adicionarTarefa() {
    const tituloInput = document.getElementById('tituloInput').value;
    const descricaoInput = document.getElementById('descricaoInput').value;
    const categoriaInput = document.getElementById('categoriaInput').value;
    const prioridadeInput = document.getElementById('prioridadeInput').value;
    const dataInput = document.getElementById('dataInput').value;

    const tarefa = {
        titulo: tituloInput,
        descricao: descricaoInput,
        categoria: categoriaInput,
        prioridade: prioridadeInput,
        data: dataInput
    };

    tarefas.push(tarefa);
    exibirTarefas();
}

function exibirTarefas() {
    const tarefasContainer = document.getElementById('tarefas');
    tarefasContainer.innerHTML = '';

    tarefas.forEach((tarefa, index) => {
        const tarefaElemento = document.createElement('div');
        tarefaElemento.classList.add('tarefa');
        tarefaElemento.innerHTML = `
            <h3>${tarefa.titulo}</h3>
            <p>${tarefa.descricao}</p>
            <p>Categoria: ${tarefa.categoria}</p>
            <p>Prioridade: ${tarefa.prioridade.charAt(0).toUpperCase() + tarefa.prioridade.slice(1)}</p>
            <p>Data: ${tarefa.data}</p>
            <button onclick="removerTarefa(${index})">Excluir</button>
        `;
        tarefasContainer.appendChild(tarefaElemento);
    });
}

function removerTarefa(index) {
    tarefas.splice(index, 1);
    exibirTarefas();
}

function filtrarTarefas(categoria) {
    const tarefasFiltradas = categoria === 'todos' ? tarefas : tarefas.filter(tarefa => tarefa.categoria === categoria);
    exibirTarefasFiltradas(tarefasFiltradas);
}

function exibirTarefasFiltradas(tarefasFiltradas) {
    const tarefasContainer = document.getElementById('tarefas');
    tarefasContainer.innerHTML = '';

    tarefasFiltradas.forEach((tarefa, index) => {
        const tarefaElemento = document.createElement('div');
        tarefaElemento.classList.add('tarefa');
        tarefaElemento.innerHTML = `
            <h3>${tarefa.titulo}</h3>
            <p>${tarefa.descricao}</p>
            <p>Categoria: ${tarefa.categoria}</p>
            <p>Prioridade: ${tarefa.prioridade.charAt(0).toUpperCase() + tarefa.prioridade.slice(1)}</p>
            <p>Data: ${tarefa.data}</p>
            <button onclick="removerTarefa(${index})">Excluir</button>
        `;
        tarefasContainer.appendChild(tarefaElemento);
    });
}
