(function(window,document/*,undefined*/){
  function randomStr(len){
    var sb="";var dict="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
    for(var i=0;i<len;++i)sb+=dict.charAt(Math.random()*dict.length|0);return sb;
  }
  function hrTime(x){
    var date=new Date(x*1000),it;
    var MM=(it=date.getMonth()+1)<10?'0'+it:it;
    var dd=(it=date.getDay())<10?'0'+it:it;
    var HH=(it=date.getHours())<10?'0'+it:it;
    var mm=(it=date.getMinutes())<10?'0'+it:it;
    var ss=(it=date.getSeconds())<10?'0'+it:it;
    return date.getFullYear()+'-'+MM+'-'+dd+' '+HH+':'+mm+':'+ss;
  }

  function newXHR(stack){
    var xhr=new XMLHttpRequest();if(!window.TINGYUN||!TINGYUN.createEvent)return xhr;
    var event=TINGYUN.createEvent({name:stack.join('_'),key:"b3d532c8-f6e2-4978-8b7f-31e7255c46e9"});
    xhr.addEventListener("error",function(){event.fail();});
    xhr.addEventListener("load",function(){event.end();});
    return xhr;
  }

  function action(action,sceneID,itemPfx,itemID,context){
    var url=host+"/action/api/log?requestID="+requestID+"&clientToken="+clientToken,ref={
      "requestID":requestID,"actionTime":Date.now(),"action":action,"sceneId":sceneID,
      "userId":userID,"itemId":itemID,"context":context,"itemSetId":""+itemPfx,
    };var xhr=newXHR(["p4sdk","log",sceneID,itemPfx]);
    xhr.open("POST",url);xhr.setRequestHeader("Content-Type","application/json");
    xhr.send(JSON.stringify({"date":hrTime(ref.actionTime),"actions":[ref]}));
  }

  if(window["p4sdk_singleton_main"])return;window["p4sdk_singleton_main"]=true;

  var host="https://nbrecsys.4paradigm.com";var clientToken="1f9d3d10b0ab404e86c2e61a935d3888";
  var k="paradigmLocalStorageUserIdKey";var userID=localStorage[k]||(localStorage[k]=randomStr(10));
  var requestID=randomStr(8);var seedItemID=(location.href.match(/\/article\/details\/(\d+)/)||[])[1];
  var req={itemID:seedItemID,uuid_tt_dd:(document.cookie.match(/\buuid_tt_dd=([^;]+)/)||[])[1]};
  var url=host+"/api/v0/recom/recall?requestID="+requestID+"&userID="+userID+"&sceneID=";

  action("detailPageShow",34,42,seedItemID);var dedup={};

  if(window["p4sdk_enable_recommendBox"])(function(){
    var xhr=newXHR(["p4sdk","recall",34]);xhr.open("POST",url+34);xhr.addEventListener("load",function(){
      var raw=xhr.responseText;var json=JSON.parse(raw);var item=json[0];if(!item)throw raw;
      if(dedup[item["item_id"]])item=json[1];if(!item)throw raw;dedup[item["item_id"]]=1;
      var timer=setInterval(function renderInit(){
        if(!document.querySelectorAll("div.recommend-item-box")[1])return;clearInterval(timer);
        var div=document.createElement("div");div.className="recommend-item-box";div.style.cursor="pointer";
        div.innerHTML="<img src='' class='p4pfx_img'><h4 class='p4pfx_title text-truncate'></h4><p class='content'><a class='p4pfx_abs'></a></p><div class='p4pfx_extra info-box'></div>";
        var ex=[];if(item["category_id"])ex.push(item["category_id"]);if(item["publisher_id"])ex.push(item["publisher_id"]);ex=ex.join(" | ");
        var eTitle;(eTitle=div.querySelector(".p4pfx_title")).innerText=item.title;eTitle.style.display="inline-block";
        var eAbs;(eAbs=div.querySelector(".p4pfx_abs"))/*.innerText=item.content*/;eAbs.style.display="inline-block";
        var eExtra;(eExtra=div.querySelector(".p4pfx_extra")).innerText=ex;eExtra.style.display="inline-block";
        var eImg;(eImg=div.querySelector(".p4pfx_img")).src=item["cover_url"];eImg.style.float="right";
        eImg.style.width="124px";eImg.style.height="94px";

        setTimeout(resize);window.addEventListener("resize",resize);function resize(){
          eTitle.style.width=(div.clientWidth-60-eImg.offsetWidth)+"px";
        }
        setTimeout(scroll);window.addEventListener("scroll",scroll);function scroll(){
          var rect=div.getBoundingClientRect();var x=(rect.left+rect.right)/2,y=(rect.top+rect.bottom)/2;
          if(x>=0&&x<=document.documentElement.clientWidth&&y>=0&&y<=document.documentElement.clientHeight){
            action("show",34,39,item["item_id"],item["context"]);window.removeEventListener("scroll",scroll);
          }
        }
        function reinsert(){document.querySelectorAll("div.recommend-item-box")[1].insertAdjacentElement("afterend",div);}
        reinsert();setInterval(reinsert,180);div.addEventListener("click",function(){
          action("detailPageShow",34,39,item["item_id"],item["context"]);
          var sep=item.url.indexOf('?')<0?'?':'&'; // TODO add before hash(#)
          window.open(item.url+sep+"utm_source=blogre1","_blank");
        });
      });
    });xhr.send(JSON.stringify(req));
  })();

  if(window["p4sdk_enable_courseBox"])(function(){
    var xhr=newXHR(["p4sdk","recall",420]);xhr.open("POST",url+420);xhr.addEventListener("load",function(){
      var raw=xhr.responseText;var json=JSON.parse(raw);var item=json[0];if(!item)throw raw;
      if(dedup[item["item_id"]])item=json[1];if(!item)throw raw;dedup[item["item_id"]]=1;
      var div=document.querySelector("div.p4course_target");
      div.style.cursor="pointer";div.style.padding="18px";
      div.style.marginTop="8px";div.style.background="#fff";div.style.boxShadow="0 2px 4px 0 rgba(0,0,0,0.05)"; // div.edu-promotion compat
      div.innerHTML="<img src='' class='p4pfx_img'><h4 class='p4pfx_title'></h4><div class='p4pfx_abs'></div><div class='p4pfx_extra'></div>";
      var ex=[];if(item["category_id"])ex.push(item["category_id"]);if(item["publisher_id"])ex.push(item["publisher_id"]);ex=ex.join(" | ");
      var eTitle;(eTitle=div.querySelector(".p4pfx_title")).innerText=item.title;eTitle.style.display="inline-block";
      eTitle.style.fontSize="20px";eTitle.style.height="30px";eTitle.style.overflow="hidden"; // FIXME crappy code
      var eAbs;(eAbs=div.querySelector(".p4pfx_abs")).innerText=item.content;eAbs.style.display="inline-block";
      eAbs.style.height="66px";eAbs.style.overflow="hidden";eAbs.style.color="#888";
      var eExtra;(eExtra=div.querySelector(".p4pfx_extra")).innerText=ex;eExtra.style.display="inline-block";
      var eImg;(eImg=div.querySelector(".p4pfx_img")).src=item["cover_url"];eImg.style.float="left";
      eImg.style.width="231px";eImg.style.height="130px";eImg.style.marginRight="18px";
      var click=document.createElement("a");click.innerText="马上了解 >>";eExtra.appendChild(click);
      click.style.color="#4093c6";click.style.fontWeight="bold";click.style.float="right";

      setTimeout(resize);window.addEventListener("resize",resize);function resize(){
        eTitle.style.width=eAbs.style.width=eExtra.style.width=(div.clientWidth-60-eImg.offsetWidth)+"px";
      }
      setTimeout(scroll);window.addEventListener("scroll",scroll);function scroll(){
        var rect=div.getBoundingClientRect();var x=(rect.left+rect.right)/2,y=(rect.top+rect.bottom)/2;
        if(x>=0&&x<=document.documentElement.clientWidth&&y>=0&&y<=document.documentElement.clientHeight){
          action("show",420,39,item["item_id"],item["context"]);window.removeEventListener("scroll",scroll);
        }
      }
      div.addEventListener("click",function(){
        action("detailPageShow",420,39,item["item_id"],item["context"]);
        var sep=item.url.indexOf('?')<0?'?':'&'; // TODO add before hash(#)
        window.open(item.url+sep+"utm_source=blogt0","_blank");
      });
    });xhr.send(JSON.stringify(req));
  })();
})(window,document);