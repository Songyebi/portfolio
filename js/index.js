window.onload = function(){
    // 스크롤 내리면 header에 active추가
    let header = document.querySelector(".header")
    window.addEventListener("scroll",function(){
        if(window.scrollY >= 100){
            header.classList.add("active")
        }else{
            header.classList.remove("active")
        }
    })



    let homeTyped = new Typed(".home-text", {
        strings:["안녕하세요","영상제작자<br>송예빈입니다"],
        typeSpeed:100,
        cursorChar:"",
        loop:true,
        fadeOut: true
    })
    // portfolio data
    let workData = {
        item_count: 3,
        item_1:{
            videoid:"1tgDEmCkVx4", 
            tit : "TYPOGRAPHY", 
            des : "IU_LILAC TYPHOGRAPHY 입니다.",
            period : "2023.11.01 ~ 2023.12.01", 
            tools : `<div class="ic-ae"></div><div class="ic-pro"></div><div class="ic-photo"></div><div class="ic-illust"></div>`
        },
        item_2:{
            videoid:"u9eehcAHhi8", 
            tit : "Motion Graphic", 
            des : "IU_LILAC MOTION GRAPHIC 입니다.",
            period : "2023.11.01 ~ 2023.12.01", 
            tools : "After Effect"
        },
        item_3:{
            videoid:"Yu2uuyRJ2l4", 
            tit : "LIVE 2D", 
            des : "IU_LILAC LIVE 2D 입니다.",
            period : "2023.11.01 ~ 2023.12.01", 
            tools : "After Effect, Photoshop"
        },
    }
    /* 포트폴리오 리스트 html 추가 */
    let pfWrap= document.querySelector(".sw-portfolio ul")
    let pfListhtml = ``;
    for( let i= 0; i<workData.item_count; i++){
        let obj = workData[`item_${i+1}`]
        let temp = `
            <li class="swiper-slide">
                <div class="pf-thumb">
                    <img src="https://img.youtube.com/vi/${obj.videoid}/maxresdefault.jpg" alt="">
                </div>
                <div class="pf-text">
                    <h2>${obj.tit}</h2>
                    <p>${obj.des} 입니다.</p>
                    <p>작업기간 : ${obj.period}</p>
                    <div class="tool">
                        <p>사용툴 : </p>
                        ${obj.tools}
                    </div>
                    <span class="view-btn">VIEW</span>
                </div>
            </li>
        `
        pfListhtml += temp
    }
    pfWrap.innerHTML = pfListhtml
  // 포트폴리오 스와이퍼 적용
    let swPortfolio = new Swiper(".sw-portfolio",{
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          prevEl: ".portfolio-prev",
          nextEl: ".portfolio-next",
        },
    })
    // 포트폴리오 영상 모달창
    let pfItem = document.querySelectorAll(".sw-portfolio ul li")
    let modal = document.querySelector(".modal")
    let modalCont = document.querySelector(".modal-cont")
    let closeBtn = document.querySelector(".modal .close-btn")
    let body = document.querySelector("body")

    pfItem.forEach(function(item, index){
        item.addEventListener("click",function(){
            let obj = workData[`item_${index+1}`]
            modal.classList.add("active")
            body.classList.add("scrollfix")
            modalCont.innerHTML = `<iframe src="https://www.youtube.com/embed/${obj.videoid}?autoplay=1&mute=1" allowfullscreen></iframe>`
        })
    })
    closeBtn.addEventListener("click",function(){
        modal.classList.remove("active")
        body.classList.remove("scrollfix")
    })
    modal.addEventListener("click",function(){
        modal.classList.remove("active")
        body.classList.remove("scrollfix")
    })

    // skill
    function progressBar(selector, gauge, color){
        var bar = new ProgressBar.Line(selector, {
            strokeWidth: 5,
            easing: 'easeInOut',
            duration: 1400,
            color: color,
            trailColor: '#eee',
            trailWidth: 3,
            step : function(state, circle){
                circle.setText(Math.round(circle.value() *100)+"%")
            }
        });
        bar.animate(gauge);
        return bar; // Return the progress bar instance
    }

    let observe = new IntersectionObserver(function(entries){
        entries.forEach(function(item){
            if(item.isIntersecting){                  
                proPr.animate(0.6)
                proAe.animate(0.7)
                proAi.animate(0.9)
                proPs.animate(0.7)
                proHtml.animate(0.5)
                proCss.animate(0.6)
                proJs.animate(0.5)
                proGit.animate(0.5)
            }else{
                proPr.animate(0)
                proAe.animate(0)
                proAi.animate(0)
                proPs.animate(0)
                proHtml.animate(0)
                proCss.animate(0)
                proJs.animate(0)
                proGit.animate(0)
            }
        })
    }) 



    let skillSection = document.querySelector(".skill")
    // Start the progress bars with initial values
    let proPr = progressBar(".pro_pr", 0,"#ea77ff");
    let proAi = progressBar(".pro_ai",0, "#ff7c00");
    let proAe = progressBar(".pro_ae",0, "#d291ff");
    let proPs = progressBar(".pro_ps",0, "#00c8ff");
    let proHtml = progressBar(".pro_html",0, "#e44d26");
    let proCss = progressBar(".pro_css",0,  "#2f9dd9");
    let proJs = progressBar(".pro_js",0, "#f7df1e");
    let proGit = progressBar(".pro_git",0, "#f34f29");
    observe.observe(skillSection)
}









