/*Desenvolva aqui abaixo*/
let renderBttn = document.getElementById('render-bttn')
let containerCards = document.getElementById('container-cards')
let spanCounter = document.getElementById('span-counter')

function renderPeople() {    
renderBttn.addEventListener('click', ()=>{
    containerCards.innerHTML = ''
    pessoas.map((pessoa, index) =>{
        containerCards.insertAdjacentHTML('beforeend', `
            <div class="card">
                <h2>${pessoa.nome} ${pessoa.sobrenome}</h2>
                <p>${pessoa.idade} anos</p>
            </div>     
        `)
    })
    let pessoasMaiores25 = pessoas.filter((pessoa) => pessoa.idade > 25)
    spanCounter.innerText = pessoasMaiores25.length
})
}

renderPeople() 

