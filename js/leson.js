(function(){
    
     // переключение табов 
    var aboutOverview = document.querySelector('.about__tab button');
    var aboutCoursers = document.querySelector('.about__btn-course');

    function onAboutTab () {
        if(!this.classList.contains('js-active')){
            aboutOverview.classList.toggle('js-active');
            aboutCoursers.classList.toggle('js-active');
            document.querySelector('.about__course').classList.toggle('js-active');
            document.querySelector('.about__content').classList.toggle('js-active');
        }   
    };

    aboutOverview.addEventListener('click', onAboutTab);
    aboutCoursers.addEventListener('click', onAboutTab);

})();