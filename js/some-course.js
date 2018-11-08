// акардион уроков, переключение между уроками, открытие/закрытие текущего
(function(){
    var listLesson = document.querySelector('.task__list');
    var firstLesor = document.querySelector('.task__item');
    var nameCurrentLesson = document.querySelector('.task__video-name');
    var videoWrp = document.querySelector('.task__video--ratio');
    var videoIframe = document.querySelector('.task__video--content');
    var linkBuyLesson = document.querySelector('.task__buy');

    var selectedLesson;

    addEventListener('click', function(e) {
        var target = e.target;
        var item = target.closest('.task__item')

        if(!item) return;

        if(item.classList.contains('js-open')) return;

        if(!target.classList.contains('task__item-name')) return;

        if(!listLesson.contains(listLesson)) return;
        targetActiveLesson(item);

    })

    function targetActiveLesson (node) {
        if(selectedLesson == node){
            selectedLesson.classList.toggle('js-open');
            return;
        }

        if(selectedLesson) {
            selectedLesson.classList.remove('js-open');
        }

        selectedLesson = node;
        selectedLesson.classList.add('js-open');
        onChangeContent(node);
       
    } 

    function onChangeContent(elem){
        var nameLesson = elem.querySelector('.task__item-name');

        nameCurrentLesson.innerHTML = nameLesson.textContent;

        videoIframe.setAttribute('src', elem.getAttribute('data-src'));


        if (elem.getAttribute('data-src')) {
            videoWrp.style.display = 'block';
            linkBuyLesson.style.display = 'none';
        } else {
            videoWrp.style.display = 'none';
            linkBuyLesson.style.display = 'block';
        }    

    }

    targetActiveLesson(firstLesor);
})();

// ставим отметку урок пройден
(function(){    
    var onCheckBtn = document.querySelector('.task__check');

    onCheckBtn.addEventListener('click', function(){
       onCheckBtn.classList.toggle('js-check');
    })

})();