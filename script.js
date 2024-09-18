let vidBtn = document.querySelectorAll(".vid-btn");
vidBtn.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        document.querySelector(".slider .active").classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector(".back-video").src = src;
    });
});

