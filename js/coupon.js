
$(function(){

    $('.header-frame').load('header.html');
  
    $('.footer-frame').load('footer.html');
  
  })

/* 控制Tabs */
function openTab(event, tab_name) {
    // 宣告變數
    let i, tab_content, tab_link;

    // 拿到全部的標簽内容
    tab_content = document.getElementsByClassName("tab-content");
    // 且全部隱藏
    for (i = 0; i < tab_content.length; i++) {
        tab_content[i].style.display = "none";
    }

    // 拿到全部的標簽按鈕
    tab_link = document.getElementsByClassName("tab-link");
    // 且全部變成未觸發(都沒按)
    for (i = 0; i < tab_link.length; i++) {
        tab_link[i].className = tab_link[i].className.replace(" active", "");
    }

    // 將帶入參數(配對的標簽内容id)設定顯示
    document.getElementById(tab_name).style.display = "block";
    // 將按下的標簽按鈕增加觸發樣式
    event.currentTarget.className += " active";
}

// 顯示複製成功
function copyCode() {
    const alertC = document.getElementById("alert-copied");
    alertC.classList.add("show");

    // 先清除定時器避免bug
    clearTimeout(alertC.timer);
    // 不按關閉3秒後也會自動關閉
    alertC.timer = setTimeout(() => {
        alertC.classList.remove("show");
    }, 2000);
}

function closeAlert() {
    const alertC = document.getElementById("alert-copied");
    alertC.classList.remove("show");
}

function openRule(ruleId) {
    const ruleInfo = document.getElementById(ruleId);

    ruleInfo.classList.toggle("open");
}
