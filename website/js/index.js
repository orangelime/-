window.onload = function(){
    /*share*/
    var oShare = document.getElementById('share');
    
    var timer = null;
    oShare.onmouseover = function(){
        startMove(0);
    }
    oShare.onmouseout = function(){
        startMove(-70);
    }
    function startMove(target){
        clearInterval(timer);
        var speed = 10;
        speed = oShare.offsetLeft<target?speed:-speed;
        timer = setInterval(function(){
            if(oShare.offsetLeft == target){
                clearInterval(timer);
            }else{
                oShare.style.left = oShare.offsetLeft + speed +'px';
            }
        },100)
    }
    window.onscroll = function(){
        var oShare = document.getElementById('share');
        var screenH = document.documentElement.clientHeight || document.body.clientHeight;
        var top = (screenH - oShare.offsetHeight) / 2;
        var offsetTop = document.body.offsetTop || document.documentElement.scrollTop;
        oShare.style.top = top + offsetTop + 'px';
    }
    
    
    
    
    var oImg = document.getElementById('img');
    var aPage = document.getElementsByTagName('i');
    var timer = null;
    var index = 0;
    var imgName = '';
    var currentPage = 0;

    startTimer();
    for(var i=0;i<aPage.length;i++){
        aPage[i].index = i;
        aPage[i].onclick = function(){
            stopTimer();
            index = this.index;
            changeView();
            startTimer();
        }
    }
    function startTimer(){
        if(timer == null){
            timer = setInterval(upDate,2000);
        }
    }
    function stopTimer(){
        clearInterval(timer);
        timer = null;
    }
    function upDate(){
        index++;
        changeView();
    }
    function changeView(){
        if(index > 3){
            index = 0;
        }
        imgName = "image/banner0"+(index+1)+".png";
        oImg.src = imgName;
        aPage[currentPage].className = '';
        currentPage = index;
        aPage[currentPage].className = 'active';
    }
    
    var oIndustry = document.getElementsByClassName('industry');
    var oShop1 = document.getElementsByClassName('shop1');
    oShop1[0].style.display = 'block';
    oIndustry[0].onmouseover = function(){
        
        this.className = 'active';
        oShop1[0].style.display = 'block';
        oShop1[0].src = 'image/service.png';
        
    }
    oIndustry[1].onmouseover = function(){
        this.className = 'active';
        oShop1[1].style.display = 'block';
        oShop1[1].src = 'image/education.png';
    }
    oIndustry[2].onmouseover = function(){
        this.className = 'active';
        oShop1[2].style.display = 'block';
        oShop1[2].src = 'image/house.png';
    }
    oIndustry[3].onmouseover = function(){
        this.className = 'active';
        oShop1[3].style.display = 'block';
        oShop1[3].src = 'image/gas.png';
    }
        
    for(var i=0;i<oIndustry.length;i++){
        oIndustry[i].onmouseout = function(){
            
            this.className = '';
            for(var k=0;k<oShop1.length;k++){
                
                oShop1[k].style.display = 'none';
            }
        }
        
    }
    
    
    


    


}