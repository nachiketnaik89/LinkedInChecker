function start(){
  //console.log("started");
  var allLink = document.getElementsByTagName("a");
  if(allLink!==undefined) applyList(allLink);
}

function applyList(list){
  chrome.storage.local.get('jobLinksApplied',function(items){
    if(items.jobLinksApplied!=undefined){
      var length = list.length;
      var saveArr = items.jobLinksApplied;
        for(var i=0;i<length;i++){
            var currentUrl = list[i]["href"];
            if(currentUrl!==undefined&&currentUrl.indexOf('jobs2')>-1){

              var currentProcessedUrl = currentUrl.substring(0,currentUrl.indexOf("?"));
              if(saveArr.indexOf(currentProcessedUrl)!=-1){
                list[i].style.color = '#006600';
                list[i].style.textDecoration='line-through';
              }
            }
        }
    }
  });

  chrome.storage.local.get('jobNotApplicable',function(items){
    if(items.jobNotApplicable!=undefined){
      var length = list.length;
      var saveArr = items.jobNotApplicable;
        for(var i=0;i<length;i++){
            var currentUrl = list[i]["href"];
            if(currentUrl!==undefined&&currentUrl.indexOf('jobs2')>-1){
              var currentProcessedUrl = currentUrl.substring(0,currentUrl.indexOf("?"));
              if(saveArr.indexOf(currentProcessedUrl)!=-1){
                list[i].style.color = '#808080';
                list[i].style.textDecoration='line-through';
              }
            }
        }
    }
  });

}


start();
