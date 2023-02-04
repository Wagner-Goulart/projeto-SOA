const trailerBtn = document.querySelector(".trailer");
const modal = document.querySelector(".modal");
const fecharModalBtn = document.querySelector(".fechar-modal");
const video = document.querySelector('#video');
const linkVideo = video.src

trailerBtn.addEventListener('click', ()=>{
    modal.classList.toggle('aberto');
    video.setAttribute('src', linkVideo);
    
})

fecharModalBtn.addEventListener('click', ()=>{
    modal.classList.toggle('aberto');
    video.setAttribute("src", '');
})