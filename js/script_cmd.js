const menu_btn = document.querySelector('.m_text');
const menu = document.querySelector('.m_desp');

function desplegar_menu(){
    if(window.getComputedStyle(menu).visibility === "collapse"){
        menu.style.visibility = "Visible"
        menu_btn.style.backgroundColor = "#D79C39"
        menu_btn.style.color = "White"
    } else {
        menu.style.visibility = "Collapse"
        menu_btn.style.backgroundColor = "Whitesmoke"
        menu_btn.style.color = "Black"
    }
}

menu_btn.addEventListener('click',desplegar_menu);