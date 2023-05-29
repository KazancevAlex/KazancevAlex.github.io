app();

function app() 
{
    let name = prompt("Введите свое имя");  
    let ok = confirm("Введенное имя правильное?");
    if (ok) { 
    alert("Здравствуйте, " + name);
    }   

    /*userName = parseInt(document.getElementById("userName").value);
    
    let message = 'Привет,' + userName;
    alert(message);

    document.getElementById("result").innerText = "Приветствуем Вас на нашем сайте," + userName;*/

}
