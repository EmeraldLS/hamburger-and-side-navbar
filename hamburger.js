(function(){
    function _(element){
        return document.querySelector(element)
    }
    let hamburgerCheckbox = _("#hamburgerCheckbox")
    let hamburger = _("[hamburger]")
    let sideNav = _("[side-nav]")
    let isChecked = false
        hamburgerCheckbox.onclick = function(){
            if(hamburgerCheckbox.checked){
                isChecked = true;
                hamburger.classList.add("hasChecked")
                sideNav.classList.add("show")
            }else{
                isChecked = false;
                hamburger.classList.remove("hasChecked")
                sideNav.classList.remove("show")
            }
        }
    
})()