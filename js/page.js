$(function(){ 
    document.onselectstart = function(){return false;};
    let box = $('.containerBox')
    let arr = [];
    $('.pageul li').on('mousedown',function(e){
            let arrIs = $.inArray($(this).attr("data-cp"),arr)
            if(arrIs!=-1){
                return false;
            }
            var img_width = parseInt($(this).css('width'))/2
            var img_height = parseInt($(this).css('height'))/2
            $(this).on('mousemove',function(e){
                $(this).css('left',e.pageX-img_width-box.offset().left+'px')
                $(this).css('top',e.pageY-img_height-box.offset().top+'px')
                $('.pageul li').find('p').removeClass("on")
                $(this).find('p').addClass("on")
            })
            $(this).on('mouseup', (e) => {//鼠标抬起
                $(this).unbind('mousemove')//移除鼠标移动
                let cp = $(this).attr("data-cp")
                let cpLeft= $(".list"+cp).attr("data-left")
                let cpRight= $(".list"+cp).attr("data-top")
                let boxLeft = box.offset().left
                let boxTop = box.offset().top
                if(parseInt(e.pageX-boxLeft)<parseInt(cpLeft)+80&&parseInt(e.pageX-boxLeft)>parseInt(cpLeft)-80){
                    if(parseInt(e.pageY-boxTop)<parseInt(cpRight)+80&&parseInt(e.pageY-boxTop)>parseInt(cpRight)-80){
                        $(this).find('p').hide()
                        $(".list"+cp).find('p').hide()
                        $(".list"+cp).find('div').show()
                        if($.inArray($(this).attr("data-cp"),arr)==-1){
                            arr.push($(this).attr("data-cp"))
                        }
                        if($.inArray($(".list"+cp).attr("data-cp"),arr)==-1){
                            arr.push($(".list"+cp).attr("data-cp"))
                        }
                        
                        if(arr.length>=10){
                            window.location = "browse-by-words.html"
                        }
                    }else{
                        $(this).css("left",$(this).attr("data-left")+'px')
                        $(this).css("top",$(this).attr("data-top")+'px')
                        $(this).unbind('mousemove')//移除鼠标移动
                    }
                }else{
                    $(this).css("left",$(this).attr("data-left")+'px')
                    $(this).css("top",$(this).attr("data-top")+'px')
                    $(this).unbind('mousemove')//移除鼠标移动
                }
                $(this).find('p').removeClass("on")
            })
            $(this).on('mouseout',function(e){
                $(this).unbind('mousemove')//移除鼠标移动
                $(this).find('p').removeClass("on")
            })
    })
})

let arr = [
    [
        {x:759,y:83},{x:525,y:162},{x:407,y:485},{x:809,y:140},{x:966,y:200},{x:275,y:440},{x:302,y:91},{x:617,y:525},{x:205,y:175},{x:134,y:113},
    ],
    [
        {x:1050,y:434},{x:130,y:249},{x:610,y:530},{x:764,y:94},{x:268,y:580},{x:605,y:21},{x:832,y:466},{x:357,y:68},{x:106,y:528},{x:948,y:164},
    ],
    [
        {x:681,y:98},{x:792,y:606},{x:219,y:338},{x:1007,y:213},{x:529,y:136},{x:637,y:601},{x:1036,y:286},{x:1047,y:154},{x:349,y:465},{x:475,y:541},
    ],
    [
        {x:597,y:106},{x:394,y:120},{x:827,y:525},{x:938,y:474},{x:673,y:596},{x:909,y:67},{x:495,y:458},{x:113,y:310},{x:1099,y:285},{x:120,y:546},
    ],
]
createRand()
function createRand(){
    let num = Math.floor(1+Math.random()*(5-1))
    // let num = 2
    switch(num){
        case 1 : 
            createPosition(0)
        break;
        case 2 : 
            createPosition(1)
        break;
        case 3 : 
            createPosition(2)
        break;
        case 4 : 
            createPosition(3)
        break;
    }
        
}
function createPosition(e){
    for(var i=0;i<10;i++){
        $(".list"+(i+1)).css({"left":arr[e][i].x+'px',"top":arr[e][i].y+'px'}).attr("data-left",arr[e][i].x).attr("data-top",arr[e][i].y)
    }
}