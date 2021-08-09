//页面加载后执行
window.onload=function() {
    //移除首次加载的视频回答
    var _removes=[];
    var _divs=Array.from(document.getElementsByClassName('Feed'));
    _divs.forEach(item=>{
        if(JSON.parse(item.getAttribute('data-za-extra-module')).card.has_video){
            item.style.display='none';
        }
    });
    //增加每次追加的元素，选择移除
    document.getElementsByClassName('Topstory-recommend')[0].children[0].addEventListener("DOMNodeInserted", function(e){
        if(e.relatedNode.className=='RichContent-cover-inner'){
            //class里面有ZVideoItem
            if(e.relatedNode.parentNode.parentNode.parentNode.className.indexOf('ZVideoItem')!=-1){
                e.relatedNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display='none';
            }
        }
    });
};