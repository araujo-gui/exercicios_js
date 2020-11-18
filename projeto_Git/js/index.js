//MODELS
class Modelos {
    constructor(login) {
        this._nome = "";
        this._log = login;
        this._avatar = "";
        this._rep = "";
    }

    buscaUsuario() {

        let login = this._log;
        let request = new XMLHttpRequest()

        request.addEventListener("load", () => {

            if (request.status == 200) {

                let dados = this._processaResponse(request.responseText);
                this._atualiza(dados);
            }

        })

        request.open("GET", `https://api.github.com/users/${login}/repos`, false);
        request.send();
    }

    _processaResponse(responseText) {

        let response = JSON.parse(responseText);
        return response;
    }

    _atualiza(dados) {

        this._nome = dados[0].owner.name;
        this._log = dados[0].owner.login;
        this._avatar = dados[0].owner.avatar_url;
        this._rep = dados.repos_url;

    }

    getNome() {
        return this._nome;
    }

    getLogin() {
        return this._log;
    }

    getAvatar() {
        return this._avatar;
    }

    getRepositorio() {
        return this._rep;
    }

}

//VIEWS
class Visualizacao {
    constructor() { }
    render(model) {

        let nomeUsuario = document.querySelector('#nomeUsuario');
        let loginUsuario = document.querySelector('#loginUsuario');
        let imagem = document.querySelector('#imagemUsuario');
        let repositorio = document.querySelector('#repositorio');

        nomeUsuario.innerText = `
            ${model.getNome()}
        `

        loginUsuario.innerText = `
                ${model.getLogin()}
            `

        repositorio.innerText = `
                ${model.getRepositorio()}
            `

        imagem.innerHTML = `
                <img src=${model.getAvatar()}>
            `

    }
}

//CONTROLLERS
class Controle {
    constructor() { }

    adicionaLogin() {

        let user = new Modelos(login.value);
        user.buscaUsuario();

        let view = new Visualizacao();
        view.render(user);
    }
}

let controller = new Controle();

document.getElementById("botao").addEventListener("click", controller.adicionaLogin);
var login = document.querySelector('#enviar')