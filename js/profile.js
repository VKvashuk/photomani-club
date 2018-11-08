(function(){
    
 // переключение табов 
    var settingProfile = document.querySelector('.settings__btn--profile');
    var settingAddress = document.querySelector('.settings__btn--address');

    function changeSettingTab () {
        if(!this.classList.contains('js-active')){
            settingProfile.classList.toggle('js-active');
            settingAddress.classList.toggle('js-active');
            document.querySelector('.settings__profile-wrp').classList.toggle('js-active');
            document.querySelector('.settings__address-wrp').classList.toggle('js-active');
        }   
    };

    settingProfile.addEventListener('click', changeSettingTab);
    settingAddress.addEventListener('click', changeSettingTab);

})();