
const form = document.getElementById('formCadastro');
const tabela = document.getElementById('tabelaCadastro').getElementsByTagName('tbody')[0];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    const row = tabela.insertRow();
    row.insertCell(0).textContent = nome;
    row.insertCell(1).textContent = email;

});
document.addEventListener("DOMContentLoaded", function() {
    const tabela = document.getElementById('tabelaCadastro').getElementsByTagName('tbody')[0];
    const ordenarTabelaBtn = document.getElementById('ordenarTabela');
    let ordenadoAsc = true; 
    function ordenarTabela(indice) {
        let linhas = Array.from(tabela.rows);
        linhas.sort((a, b) => {
            const celulaA = a.cells[indice].textContent.trim();
            const celulaB = b.cells[indice].textContent.trim();
            if (ordenadoAsc) {
                return celulaA.localeCompare(celulaB);
            } else {
                return celulaB.localeCompare(celulaA);
            }
        });
        for (let i = 0; i < linhas.length; i++) {
            tabela.appendChild(linhas[i]);
        }
        ordenadoAsc = !ordenadoAsc;
    }
    ordenarTabelaBtn.addEventListener('click', function() {
        ordenarTabela(0);
    });
});
