let formulario = document.querySelector("form");

const objObrigratorio = `
    <div class="campo-obrigatrio">
        <img src="../img/warning.png">
        <small> * Campo Obrigatório </small>
    </div>
`;

const checkInputs = (nome, telefone, email, renda, residencia, opcaoResidencia, intencao) => {
    let control = true;

    if (nome.value.trim() == "") {
        nome.classList.add("erro");
        control = false;

        nome.parentElement.innerHTML += objObrigratorio;
    }

    if (telefone.value.trim() == "") {
        telefone.classList.add("erro");
        control = false;

        telefone.parentElement.innerHTML += objObrigratorio;
    }

    if (email.value.trim() == "") {
        email.classList.add("erro");
        control = false;

        email.parentElement.innerHTML += objObrigratorio;
    }

    if (renda == null) {
        console.log("é nulo");
        let divRenda = document.querySelector(".form-item-radio").parentElement;
        divRenda.classList.add("erro");
        control = false;

        divRenda.parentElement.innerHTML += objObrigratorio;
    }

    if (opcaoResidencia.value.trim() == "") {
        residencia.classList.add("erro");
        control = false;

        residencia.parentElement.innerHTML += objObrigratorio;
    }

    if (intencao.value.trim() == "") {
        intencao.classList.add("erro");
        control = false;

        intencao.parentElement.innerHTML += objObrigratorio;
    }

    return control;
};

formulario.addEventListener("submit", (event) => {

    //event.preventDefault();

    let nome = document.querySelector("#nome");
    let telefone = document.querySelector("#telefone");
    let email = document.querySelector("#email");
    let renda = document.querySelector("input[type='radio']:checked");
    let residencia = document.querySelector("#residencia");
    let opcaoResidencia = residencia.options[residencia.selectedIndex];
    let intencao = document.querySelector("#intencao");


    if (!checkInputs(nome, telefone, email, renda, residencia, opcaoResidencia, intencao)) {
        event.preventDefault();
    } else {
        const adotante = {
            id: 1,
            nome: nome.value,
            telefone: telefone.value,
            renda: renda.value,
            residencia: opcaoResidencia.value,
            intencao: intencao.value,
            animal: sessionStorage.getItem("idAnimal"),
        };

        event.preventDefault();

        const objetoJson = JSON.stringify(adotante);
        console.log(objetoJson);

        const objTeste = JSON.parse(objetoJson);
        console.log(objTeste);
    }
});

