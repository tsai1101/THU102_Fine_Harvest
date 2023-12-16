// 切換密碼
function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    const icon = passwordInput.nextElementSibling; // Assuming the icon is the next sibling

    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // 切換眼睛圖示
    icon.className = type === 'password' ? 'fas fa-eye-slash' : 'fas fa-eye';
}

// 忘記密碼popup
$(function(){

    // 點按popup裡的叉叉就可以關掉
      $('button').click(function(){
        $('.mask').css('display', 'block');
      })
    
      $('.fa-xmark').click(function(){
        $('.mask').hide();
      })
    
    // 點外面的空白處可以關閉popup   
      $('.mask').click(function(event){
        $(this).removeAttr('style');
      })
    
    // 阻止冒泡事件，點擊popup裡的空白處不會被關閉
      $('.popup').click(function(event){
        event.stopPropagation();  
      })
    
    })