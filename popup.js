$(function(){
  $("input:radio[name=action]").click(function(){
    //console.log($(this).val());
    var action = $(this).val();
   if(action == "Applied" ){
      addAppliedList();
    }else if(action="NotApplicable"){
      addNotApplicableList();
    }

});

function addAppliedList(){
  //console.log("applied function");
 chrome.storage.local.get('jobLinksApplied',function(items){
  chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        console.log(tabs[0].url);
        var url = tabs[0].url;
        var current = url.indexOf("?");
        url = url.substring(0,current);
        console.log(url);
        if(items.jobLinksApplied!=undefined){
          var currentArr = items.jobLinksApplied;
          console.log(currentArr);
          if(currentArr.indexOf(url)==-1){
            currentArr.push(url);
            console.log(currentArr);
            chrome.storage.local.set({"jobLinksApplied":currentArr});
          }

        }else{
          var newArr =[];
          newArr.push(url);
          chrome.storage.local.set({"jobLinksApplied":newArr});
        }
    });
  });
}

function addNotApplicableList(){
//  console.log("not applied function");
  chrome.storage.local.get('jobNotApplicable',function(items){
   chrome.tabs.query({active:true,currentWindow:true},function(tabs){
         //console.log(tabs[0].url);
         var url = tabs[0].url;
         var current = url.indexOf("?");
         url = url.substring(0,current);
         //console.log(url);
         if(items.jobNotApplicable!=undefined){
           var currentArr = items.jobNotApplicable;
        //   console.log(currentArr);
           if(currentArr.indexOf(url)==-1){
             currentArr.push(url);
             //console.log(currentArr);
             chrome.storage.local.set({"jobNotApplicable":currentArr});
           }

         }else{
           var newArr =[];
           newArr.push(url);
           chrome.storage.local.set({"jobNotApplicable":newArr});
         }
     });
   });

}

});
