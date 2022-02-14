//این دستور باعث میشود به محض بارگذاری صفحه مربع های مختصاتی تشکیل شوند


var q=50;
let box=document.getElementsByClassName('B')[0];
var ch=["" , "" , ""];
let n=64;
let targets=["nav.jpg" , "kamyon.jpg" , "pahpad.jpg" , "paygah.jpg"];



    for(let i=64; i>0; i--){
        
        let elem=document.createElement("div");
        elem.setAttribute("id" , "div"+n);
        elem.setAttribute("data-number" ,n );
        elem.setAttribute("class" , "math");
        box.appendChild(elem);
        n--;
    }

    // انتخاب رندوم 4 خانه
    let d1=Math.floor(Math.random()*15);
    let d2=Math.floor(Math.random()*10) + d1;
    let d3=d2 + Math.floor(Math.random()*20);
    let d4=d3+Math.floor(Math.random()*19);
    
    // گرفتن خانه های انتخاب شده
    let di0=document.getElementById('div'+d1);
    let di1=document.getElementById('div'+d2);
    let di2=document.getElementById('div'+d3);
    let di3=document.getElementById('div'+d4);

    let img=document.createElement("img");
    img.setAttribute("class" , "target");
    img.setAttribute("id" , "img"+d1);
    img.setAttribute("src" , targets[0]);
    img.style.display="none";
    di0.appendChild(img);


    let img2=document.createElement("img");
    img2.setAttribute("class" , "target");
    img2.setAttribute("id" , "img"+d2);
    img2.setAttribute("src" , targets[1]);
     img2.style.display="none";
    if(d2==d1){

    }else{
    di1.appendChild(img2);
    }

    let img3=document.createElement("img");
    img3.setAttribute("class" , "target");
    img3.setAttribute("id" , "img"+d3);
    img3.setAttribute("src" , targets[2]);
    img3.style.display="none";
    
    if(d3==d2){

    }else{
    di2.appendChild(img3);
    }

    
    let img4=document.createElement("img");
    img4.setAttribute("class" , "target");
    img4.setAttribute("id" , "img"+d4);
    img4.style.display="none";
    img4.setAttribute("src" , targets[3]);
     
    if(d4==d3){

    }else{
    di3.appendChild(img4);
    }



setTimeout(point,5000);
function point(){
    document.getElementById('point').innerHTML=0;
}


//قطع موزیک پس زمینه 

 document.getElementsByClassName('b_music')[0].addEventListener("click" , function(){
     document.getElementById('bmusic').removeAttribute("autoplay");
 });

//اجرای بازی هنگام کلیک دکمه شلیک

let btn=document.getElementById('fire');
let x=document.getElementById('X');
let y=document.getElementById('Y');
let check=document.getElementsByName('check');



///استارت بازی

btn.addEventListener("click" , fire);

function fire(){
    
    //اعتبار سنجی اعداد وارد شده و چک باکس

    if(y.value=="" || x.value==""){
        alert("لطفا مختصات را وارد کنید");
    }
    else{

        
           //گرفتن مقدار رادیو باتن مورد نظر از طریق بررسی انتخاب شدن یا نشدن
           for(var i=0; i<3; i++){
            
              ch[i] =check[i].checked;
           }

           //حرکت سلاح ها در عرض کمتر از 890

           if(screen.availWidth>=890){

            let coor=((Number(y.value-1))*8)+Number(x.value);

            //حرکت جنگنده
        var q=0;
        var v=0;
           if(ch[0]==true){
               let jet=document.getElementById('Jet');
               let move=setInterval(move_jet , 100);
               function move_jet(){
                var snd=new Audio("big_explosion_sfx_2.mp3");
                snd.play();
                   jet.style.marginTop=q+"px";
                   jet.style.marginRight=v+"px";
                   v+=10;
                  q=q+5;
                  if(q==440 || v==440){
                    clearInterval(move);
                    if(coor==d1 || coor==d2 || coor==d3 || coor==d4){
                        jet.style.marginTop="0px";
                        jet.style.marginRight="0px"; 
                        alert("تبریک!!!!! هدف با موفقیت منهدم شد ");
                        document.getElementById('img'+coor).removeAttribute("style");
                        var point=Number(document.getElementById('point').innerHTML)+1;
                        document.getElementById('point').innerHTML=point;
                    }
                    else{
                        document.getElementById('div'+coor).style.backgroundColor="gray";
                        jet.style.marginTop="0px";
                        jet.style.marginRight="0px"; 
                        alert("نگران نباش !!! یبار دیگه شانست رو امتحان کن");

                    }          
                    
                }
               }
           }
           //حرکت تانک 
           var c=0;
           if(ch[1]==true){
            let tank=document.getElementById('Tank');
            let move=setInterval(move_tank , 100);
            function move_tank(){
                tank.style.marginRight=c+"px";
                c+=10;
               if(c==400){
                 clearInterval(move);
                 if(coor==d1 || coor==d2 || coor==d3 || coor==d4){
                    tank.style.marginRight="0px";
                    alert("تبریک!!!!! هدف با موفقیت منهدم شد ");
                    document.getElementById('img'+coor).removeAttribute("style");
                }
                else{
                    document.getElementById('div'+coor).style.backgroundColor="gray";
                    tank.style.marginRight="0px";
                    alert("نگران نباش !!! یبار دیگه شانست رو امتحان کن");
                } 
                
           }
        }
    }

    //حرکت موشک 
           var a=0;
           var b=0;
           if(ch[2]==true){
            let rocket=document.getElementById('Rocket');
            let move=setInterval(move_roc , 100);
            function move_roc(){
                rocket.style.marginTop=a+"px";
                 rocket.style.marginRight=b+"px";
                a-=20;
                b+=30;
                if(a==200 || b==840){
                 clearInterval(move);
                 if(coor==d1 || coor==d2 || coor==d3 || coor==d4){
                    rocket.style.marginTop="0px";
                    rocket.style.marginRight="0px";
                    alert("تبریک!!!!! هدف با موفقیت منهدم شد ");
                    document.getElementById('img'+coor).removeAttribute("style");
                }
                else{
                    document.getElementById('div'+coor).style.backgroundColor="gray";
                    rocket.style.marginTop="0px";
                    rocket.style.marginRight="0px";
                    alert("نگران نباش !!! یبار دیگه شانست رو امتحان کن");
                }
                
             }
            }
         
        }

    }


    if(screen.availWidth<890){
        let coor=((Number(y.value-1))*8)+Number(x.value);

        var q=0;
           if(ch[0]==true){
               let jet=document.getElementById('Jet');
               let move=setInterval(move_jet , 100);
               function move_jet(){
                   jet.style.marginBottom=q+"px";
                   q+=50;
                  if(q==2400 ){
                    clearInterval(move);
                    if(coor==d1 || coor==d2 || coor==d3 || coor==d4){
                        jet.style.marginBottom="0px";
                        alert("تبریک!!!!! هدف با موفقیت منهدم شد ");
                        document.getElementById('img'+coor).removeAttribute("style");
                    }
                    else{
                        document.getElementById('div'+coor).style.backgroundColor="gray";
                        jet.style.marginBottom="0px";
                        alert("نگران نباش !!! یبار دیگه شانست رو امتحان کن");
                    }
                   
                }
               }
            
           }
           var c=0;
           if(ch[1]==true){
            let tank=document.getElementById('Tank');
            let move=setInterval(move_tank , 100);
            function move_tank(){
                tank.style.marginTop=c+"px";
                c-=50;
               if(c==-2000){
                 clearInterval(move);
                 if(coor==d1 || coor==d2 || coor==d3 || coor==d4){
                    tank.style.marginTop="0px";
                    alert("تبریک!!!!! هدف با موفقیت منهدم شد ");
                    document.getElementById('img'+coor).removeAttribute("style");
                }
                else{
                    document.getElementById('div'+coor).style.backgroundColor="gray";
                    tank.style.marginTop="0px";
                    alert("نگران نباش !!! یبار دیگه شانست رو امتحان کن");
                }
                
                
             }
            }
           }

           var a=0;
           if(ch[2]==true){
            let rocket=document.getElementById('Rocket');
            let move=setInterval(move_roc , 100);
            function move_roc(){
                rocket.style.marginTop=a+"px";
                a-=100;
                if(a==-2200){
                 clearInterval(move);
                 if(coor==d1 || coor==d2 || coor==d3 || coor==d4){
                    rocket.style.marginTop="0px";
                    alert("تبریک!!!!! هدف با موفقیت منهدم شد ");
                    document.getElementById('img'+coor).removeAttribute("style");
                }
                else{
                    document.getElementById('div'+coor).style.backgroundColor="gray";
                    rocket.style.marginTop="0px";
                    alert("نگران نباش !!! یبار دیگه شانست رو امتحان کن");
                }
                
                
             }
            }
         
        }

    }
}
}





