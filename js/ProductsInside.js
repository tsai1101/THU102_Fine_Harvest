window.onload = function(){
    changeIcon = function(icon){
        icon.classList.toggle("fa-solid");
    }
    


    let count = 1
    
    document.getElementById('decreaseBtn').onclick = function(){
        count-=1;
        document.getElementById("amount").innerHTML = count;
    }
    
    document.getElementById('increaseBtn').onclick = function(){
        count+=1;
        document.getElementById("amount").innerHTML = count;
    }


    
    const tabs = document.querySelectorAll('.tab-item');
    const all_content = document.querySelectorAll('.tab-content');

    tabs.forEach((tab, index)=>{
        tab.addEventListener("click", (e)=>{
            tabs.forEach(tab=>{tab.classList.remove('active')});
            tab.classList.add('active');

            all_content.forEach(content=>{content.classList.remove('active')});
            all_content[index].classList.add('active');
        })

    })
}
