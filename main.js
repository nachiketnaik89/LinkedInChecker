function start(){
  console.log("started");
  var list = document.getElementsByClassName("job-title-link")  ;
  if(list!==undefined) applyList(list);
  var joblist = document.getElementsByClassName("job-title")  ;
  if(joblist!==undefined) applyList(joblist);
  var viewJob = document.getElementsByClassName("view-job")  ;
  if(viewJob!==undefined) applyList(viewJob);
  var allLink = document.getElementsByTagName("a");
  if(allLink!==undefined) specialPrint(allLink);
}

function applyList(list){
  chrome.storage.local.get('jobLinksApplied',function(items){
    if(items.jobLinksApplied!=undefined){
      var length = list.length;
      var saveArr = items.jobLinksApplied;
        for(var i=0;i<length;i++){
            if(list[i]["href"]!==undefined){
              var currentUrl = list[i]["href"];
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
            if(list[i]["href"]!==undefined){
              var currentUrl = list[i]["href"];
              var currentProcessedUrl = currentUrl.substring(0,currentUrl.indexOf("?"));
              if(saveArr.indexOf(currentProcessedUrl)!=-1){
                list[i].style.color = '#000066';
                list[i].style.textDecoration='line-through';
              }
            }
        }
    }
  });

}

function specialPrint(list){
  var length = list.length;
  console.log(length);
  for(var i=0;i<length;i++){
    if(list[i]["href"]!==undefined){
      var currentUrl = list[i]["href"];
      if(currentUrl.indexOf('jobs2')>-1){
        console.log(list[i]["href"]);
        list[i].style.color = '#006600';
        list[i].style.textDecoration='line-through';
      }
    }
  }

}


function print(list){
  console.log(list);
  var length = list.length;
  console.log("current Length: "+length);
  for(var i=0;i<length;i++){
    if(list[i]["href"]!==undefined){
    list[i].style.color = '#808080';
    list[i].style.textDecoration='line-through';
    console.log("i : "+i);
    console.log(list[i]);
    console.log(list[i]["href"]);

    var current = list[i]["href"].indexOf("?");
    //console.log(list[i]["href"].substring(0,current));
  }
  }
}

start();
