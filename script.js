// const navTab = document.getElementById('nav-collapsed')
// const mainNav = document.getElementById('main-nav')
// const hamButton = document.getElementById('ham-menu')
// const contactMenu = document.getElementById('contact-collapsed')
// const mainLogo = document.getElementById('main-logo')
//
// window.addEventListener('load', function (){
//     if(innerWidth<992){
//         mainNav.removeChild(navTab)
//         navTab.classList.add('collapsed')
//         mainLogo.classList.toggle('logo-mobile')
//         mainNav.appendChild(hamButton)
//         hamButton.classList.add('visible')
//     }else {
//         navTab.classList.toggle('visible')
//         contactMenu.classList.toggle('visible')
//
//         mainLogo.classList.toggle('logo')
//     }
// }
//     );
// window.addEventListener('load', function (e){
//         if(innerWidth>=992){
//             console.log(innerWidth)
//             mainNav.appendChild(navTab)
//             hamButton.classList.toggle('collapsed')
//         }else {
//
//             hamButton.classList.toggle('visible')
//         }
//     }
// );
//
// window.addEventListener('resize', function (){
//     if(innerWidth<982){
//         navTab.classList.toggle('collapsed')
//         contactMenu.classList.toggle('collapsed')
//         mainNav.appendChild(hamButton)
//         mainLogo.classList.toggle('logo-mobile')
//     }else {
//         navTab.classList.toggle('visible')
//         contactMenu.classList.toggle('visible')
//         mainNav.appendChild(hamButton)
//         mainLogo.classList.toggle('logo')
//     }}
// );
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}