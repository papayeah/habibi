// blur top text, library
window.addEventListener('scroll', (e) => {
    let wTop   = this.scrollY;
    let mTop   = document.querySelector('main').offsetTop;
    let open   = document.querySelector('.archDesc');
    let delta  = (wTop / mTop) * 30;

    if(wTop === mTop) return;

    open.style.filter = "blur(" + Math.trunc(delta) + "px)";
});