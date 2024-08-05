function login(){
    document.getElementById("insc_btn").style="display: none";
    document.getElementById("login_pagina").style="display: flex; position: fixed;";

    setTimeout(() => {
        document.getElementById("home").style="filter: blur(10px)";
        document.getElementById("footer").style="filter: blur(10px)";
        document.getElementById("login_pagina").style="transform: translate(0, 0); display: flex; transition: .5s";
        document.getElementById("loginbtn").style="display: none;";
        document.getElementById("voltarbtn").style="display: block;";
    }, 100);

    setTimeout(() => {
        document.getElementById("header").style="background: transparent;";
    }, 200);
}

function voltar(){
    document.getElementById("insc_btn").style="display: block";
    document.getElementById("login_pagina").style="transform: translate(0, -100%); transition: .5s; display: flex";
    document.getElementById("home").style="filter: blur(0px)";
    document.getElementById("loginbtn").style="display: block;";
    document.getElementById("voltarbtn").style="display: none;";
    document.getElementById("footer").style="display: block";

    setTimeout(() => {
        document.getElementById("labeluser").innerHTML = "USUÁRIO";
        document.getElementById("labelsenha").innerHTML = "SENHA";

        document.getElementById("labeluser").style = "color: black;";
        document.getElementById("labelsenha").style = "color: black;";
        document.getElementById("header").style="background: linear-gradient(#828c63bf, #828c63bf, #828c63bf, #828c63bf, #828c63bf, transparent)";
        
        document.getElementById("user").value = null;
        document.getElementById("senha").value = null;
    }, 200)
}

function novo() {
    document.getElementById("loginbtn").style="display: none";
    document.getElementById("insc_pagina").style="display: flex; position: fixed;";

    setTimeout(() => {
        document.getElementById("home").style="filter: blur(10px)";
        document.getElementById("footer").style="filter: blur(10px)";
        document.getElementById("insc_pagina").style="transform: translate(0, 0); display: flex; transition: .5s";
        document.getElementById("insc_btn").style="display: none;";
        document.getElementById("voltar_insc_btn").style="display: block;";
    }, 100);

    setTimeout(() => {
        document.getElementById("header").style="background: transparent;";
    }, 200);
}

function voltar_novo(){
    document.getElementById("loginbtn").style="display: block";
    document.getElementById("insc_pagina").style="transform: translate(0, -100%); transition: .5s; display: flex";
    document.getElementById("home").style="filter: blur(0px)";
    document.getElementById("insc_btn").style="display: block;";
    document.getElementById("voltar_insc_btn").style="display: none;";
    document.getElementById("footer").style="display: block";

    setTimeout(() => {
        document.getElementById("criar_user_label").innerHTML = "USUÁRIO";
        document.getElementById("criar_senha_label").innerHTML = "SENHA";
        document.getElementById("criar_email_label").innerHTML = "E-MAIL";

        document.getElementById("criar_user_label").style = "color: black";
        document.getElementById("criar_senha_label").style = "color: black";
        document.getElementById("criar_email_label").style = "color: black";
        document.getElementById("header").style="background: linear-gradient(#828c63bf, #828c63bf, #828c63bf, #828c63bf, #828c63bf, transparent)";

        document.getElementById("criar_user").value = null;
        document.getElementById("criar_senha").value = null;
        document.getElementById("criar_email").value = null;

    }, 200);
};

function criar(){
    var email = document.getElementById("criar_email").value;
    var user = document.getElementById("criar_user").value;
    var senha = document.getElementById("criar_senha").value;

    if(email == ""){
        document.getElementById("criar_email_label").innerHTML = "E-MAIL *campo vazio";
        document.getElementById("criar_email_label").style = "color: red;";
    } else{
        if(email.length < 13){
            document.getElementById("criar_email_label").innerHTML = "E-MAIL *inválido";
            document.getElementById("criar_email_label").style = "color: red;";
        } else{
            document.getElementById("criar_email_label").innerHTML = "E-MAIL";
            document.getElementById("criar_email_label").style = "color: #1f1;";
        }
    };

    if(user == ""){
        document.getElementById("criar_user_label").innerHTML = "USUÁRIO *campo vazio";
        document.getElementById("criar_user_label").style = "color: red;";
    } else{
        if(user.length < 6){
            document.getElementById("criar_user_label").innerHTML = "USUÁRIO *mínimo 6 caracteres";
            document.getElementById("criar_user_label").style = "color: red;";
        } else{
            document.getElementById("criar_user_label").innerHTML = "USUÁRIO";
            document.getElementById("criar_user_label").style = "color: #1f1;";
        }
    };

    if(senha.length < 4){
        document.getElementById("criar_senha_label").innerHTML = "SENHA *mínimo 4 caracteres";
        document.getElementById("criar_senha_label").style = "color: red;";
    } else{
        document.getElementById("criar_senha_label").innerHTML = "SENHA";
        document.getElementById("criar_senha_label").style = "color: #1f1;";
    };

    if(email.length >= 13 && senha.length >= 4 && user.length >= 6){
        localStorage.setItem("cademail", email);
        localStorage.setItem("caduser", user);
        localStorage.setItem("cadsenha", senha);

        alert("Informações Salvas.");
        voltar_novo();
        login();
    };
};

function acessar(){
    var usercadastrado = localStorage.getItem("caduser");
    var senhacadastrada = localStorage.getItem("cadsenha");

    if(usercadastrado == document.getElementById("user").value && senhacadastrada == document.getElementById("senha").value){
        alert("Sessão Iniciada.");
        voltar();
        
        document.getElementById('loginbtn').style = "display: none";
        document.getElementById('insc_btn').style = "display: none";
        document.getElementById('nome_user').style = "display: flex";
        document.getElementById('nome_user').innerHTML = "Usuário:  " + usercadastrado;
    } else {
        if(usercadastrado !== document.getElementById("user").value){
            alert("Usuário não encontrado.");
            document.getElementById("labeluser").style = "color: red";
            document.getElementById("labelsenha").style = "color: red";
        }
        if(usercadastrado == document.getElementById("user").value && senhacadastrada !== document.getElementById("senha").value){
            alert("Senha Incorreta.")
            document.getElementById("labelsenha").style = "color: red";
        };
    };
};