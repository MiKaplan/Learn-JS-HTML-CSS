  
function mail() {
    a=document.getElementById("name").value;
    b=document.getElementById("email").value;
    c=document.getElementById("phone").value; 
        window.open('mailto:lototron@gmail.com?subject='+'Заява.'+'%20'+'ФИО:'+'%20'+a+'%20'+'Тел.'+'%20'+c+'%20');
}

