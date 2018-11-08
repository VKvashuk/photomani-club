(function () {
	var menuBtn = document.querySelector('.header__menu-btn');
	var sidebar = document.querySelector('.sidebar');
	var headerUserLink = document.querySelector('.header__user-link');
	var headerUserOption = document.querySelector('.header__options');

	// открытие, закрытие menu
	menuBtn.addEventListener('click', function(){
	    menuBtn.classList.toggle('js-open');
	    sidebar.classList.toggle('js-open');
	});

	// открытие, закрытие окошка User
	headerUserLink.addEventListener('click', function(e){
	    e.preventDefault();
	    headerUserOption.classList.toggle('js-open');
	});

	document.addEventListener('mouseup', function(e){
	    if (!e.target.closest('.header__options')){
	        headerUserOption.classList.remove('js-open');
	    }
	}, false);
}
)();



