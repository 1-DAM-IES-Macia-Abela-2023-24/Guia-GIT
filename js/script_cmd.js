const menu_btn = document.querySelector('.m_text');
const menu = document.querySelector('.m_desp');
const options = document.querySelectorAll('.menu_element');
const images = document.querySelectorAll('.img');


function cerrar_menu(){
    console.log('Cerrar Menú');
    menu.style.visibility = "Collapse";
    menu_btn.style.backgroundColor = "Whitesmoke";
    menu_btn.style.color = "Black";
}

function desplegar_menu(){
    if(window.getComputedStyle(menu).visibility === "collapse"){
        menu.style.visibility = "Visible";
        menu_btn.style.backgroundColor = "#D79C39";
        menu_btn.style.color = "White";
    } else {
        cerrar_menu();
    }
}

function ampliar_img(img){
    console.log('ampliar imagen',img.style.display)
}

menu_btn.addEventListener('click',desplegar_menu);

options.forEach((element)=>element.addEventListener('click',cerrar_menu));

images.forEach((element)=>element.addEventListener('click',ampliar_img(element)));
