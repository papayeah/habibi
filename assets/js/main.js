// blur top text
window.addEventListener('scroll', (e) => {
    let wTop   = this.scrollY;
    let mTop   = document.querySelector('main').offsetTop;
    let open   = document.querySelector('.open');
    let delta  = (wTop / mTop) * 39;

    if(wTop === mTop) return;

    open.style.filter = "blur(" + Math.trunc(delta) + "px)";
});