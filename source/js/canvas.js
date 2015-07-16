/**
 * Created by airing on 15/7/15.
 */


function mainView(cxt){

    //屏幕
    cxt.beginPath();
    cxt.rect(0, 0, 375, 667);
    cxt.fillStyle = "rgb(236, 236, 236)";
    cxt.fill();

    //状态栏
    cxt.beginPath();
    cxt.rect(0, 0, 375, 20);
    cxt.fillStyle = "rgb(44, 44, 44)";
    cxt.fill();
    cxt.beginPath();
    var statusBar = new Image();
    statusBar.src = "./images/bar.png";
    statusBar.onload = function(){
        cxt.drawImage(statusBar, 5, 2);
    };

    //导航栏
    cxt.beginPath();
    cxt.rect(0, 20, 375, 43);
    cxt.fillStyle = "rgb(44, 44, 44)";
    cxt.fill();
    cxt.beginPath();
    var back = new Image();
    back.src = "./images/back.png";
    back.onload = function(){
        cxt.drawImage(back, 0, 16);
    };
    cxt.beginPath();
    var person = new Image();
    person.src = "./images/person.png";
    person.onload = function(){
        cxt.drawImage(person, 336, 16);
    };
    cxt.beginPath();
    cxt.font ="lighter 16px Heiti SC";
    cxt.fillStyle = "white";
    cxt.textAlign = "left";
    cxt.textBaseline = "top";
    cxt.fillText("微信", 24, 32);

    cxt.beginPath();
    cxt.font ="lighter 18px STHeitiSC-Light";
    cxt.fillStyle = "white";
    cxt.textAlign = "center";
    cxt.textBaseline = "top";
    cxt.fillText(getHisName(), 187, 32);

    //聊天框
    cxt.beginPath();
    cxt.rect(0, 63, 375, 556);
    cxt.fillStyle = "rgb(236, 236, 236)";
    cxt.fill();

    //输入栏
    cxt.beginPath();
    cxt.rect(0, 619, 375, 48);
    cxt.fillStyle = "rgb(219, 219, 219)";
    cxt.fill();
    cxt.beginPath();
    var inputBar = new Image();
    inputBar.src = "./images/inputbar.png";
    inputBar.onload = function(){
        cxt.drawImage(inputBar, 5, 621);
    }
}


function drawLeftMsg(cxt, x, y, w, h){
    cxt.beginPath();
    cxt.moveTo(x + 5, y);
    cxt.lineTo(x + w, y);
    cxt.arcTo(x + w + 5, y, x + w + 5, y + 5, 5);
    cxt.lineTo(x + w + 5, y + h);
    cxt.arcTo(x + w + 5, y + h + 5, x + w, y + h + 5, 5);
    cxt.lineTo(x + 5, y + h + 5);
    cxt.arcTo(x, y + h + 5, x, y + h, 5);
    cxt.lineTo(x, y + 5);
    cxt.arcTo(x, y, x + 5, y, 5);
}

function drawRightMsg(cxt, x, y, w, h){
    cxt.beginPath();
    cxt.moveTo(x, y + 5);
    cxt.lineTo(x, y + h);
    cxt.arcTo(x, y + h + 5, x - 5, y + h + 5, 5);
    cxt.lineTo(x - w, y + h + 5);
    cxt.arcTo(x - w - 5, y + h + 5, x - w - 5, y + h, 5);
    cxt.lineTo(x - w - 5, y + 5);
    cxt.arcTo(x - w - 5, y, x - w, y, 5);
    cxt.lineTo(x - 5, y);
    cxt.arcTo(x, y, x, y + 5 , 5);
}

function drawMyMsg(cxt, x, y, w, h){
    cxt.beginPath();
    cxt.moveTo(x, y + 12);
    cxt.lineTo(x - 6, y + 12 +5);
    cxt.lineTo(x, y + 12 + 5 + 5);
    cxt.fillStyle = "rgb(255, 255, 255)";
    cxt.fill();
    drawLeftMsg(cxt, x, y, w, h);
    cxt.fillStyle = "rgb(255, 255, 255)";
    cxt.fill();
}

function drawHeMsg(cxt, x, y, w, h){
    cxt.beginPath();
    cxt.moveTo(x, y + 12);
    cxt.lineTo(x + 6, y + 12 +5);
    cxt.lineTo(x, y + 12 + 5 + 5);
    cxt.fillStyle = "rgb(162, 230, 91)";
    cxt.fill();
    drawRightMsg(cxt, x, y, w, h);
    cxt.fillStyle = "rgb(162, 230, 91)";
    cxt.fill();
}

function drawMyHead(cxt, head_y){
    cxt.beginPath();
    cxt.rect(10, head_y, 40, 40);
    cxt.fillStyle = "#ff6666";
    cxt.fill();
    context.beginPath();
    var face1 = new Image();
    face1.src = "./images/face1.png";
    face1.onload = function(){
        context.drawImage(face1, 10, head_y);
    }
}

function drawHeHead(cxt, head_y){
    cxt.beginPath();
    cxt.rect(375 - 50, head_y, 40, 40);
    cxt.fillStyle = "#ff6666";
    cxt.fill();
    context.beginPath();
    var face2 = new Image();
    face2.src = "./images/face2.png";
    face2.onload = function(){
        context.drawImage(face2, 375 - 50, head_y);
    }
}

function drawLeftTxt(cxt, y, str) {
    cxt.beginPath();
    cxt.fillStyle = "black";
    cxt.textAlign = "left";
    cxt.textBaseline = "top";
    cxt.font = "16px STHeitiSC-Light";
    if (str.length > 13) {
        drawLongText(cxt, 61 + 12, y + 12, 0, str);
    } else {
        cxt.fillText(str, 61 + 12, y + 12);
    }
}

function drawRightTxt(cxt, y, str){
    cxt.beginPath();
    cxt.fillStyle = "black";
    cxt.textAlign = "right";
    cxt.textBaseline = "top";
    cxt.font = "16px STHeitiSC-Light";
    if (str.length > 13){
        drawLongText(cxt, 375 - 61 - 4, y + 12, 1, str);
    }else {
        cxt.fillText(str, 375 - 61 - 9, y + 12);
    }
}

function drawLeft(cxt, y, str){
    cxt.beginPath();
    var h = 40;
    cxt.font = "16px STHeitiSC-Light";
    var w = cxt.measureText(str).width + 15;
    if (str.length > 13 && str.length <= 26){
        w = 230;
        h = h + 20;
    } else if (str.length > 26){
        w = 230;
        h = h + 40;
    }
    drawMyMsg(cxt, 61, y, w, h - 5);
    drawMyHead(cxt, y);
    drawLeftTxt(cxt, y, str);
}

function drawRight(cxt, y, str){
    cxt.beginPath();
    var h = 40;
    cxt.font = "16px STHeitiSC-Light";
    var w = cxt.measureText(str).width + 15;
    if (str.length > 13){
        w = 230;
        h = h + 20;
    }else if (str.length > 26){
        w = 230;
        h = h + 40;
    }
    drawHeMsg(cxt, 375 - 61, y, w, h - 5);
    drawHeHead(cxt, y);
    drawRightTxt(cxt, y, str);
}

function drawLongText(cxt, begin_x, begin_y, lr, longtext){
    var text = "";
    var count = 0;
    if (lr != 0) {
        //对话框在左边
        begin_x = begin_x - 220;
    }
    var stringLength = longtext.length;
    var newText = longtext.split("");
    var context = cxt;
    context.textAlign = "left";
    for (var i = 0; i <= stringLength; i++)
    {
        if (count == 13)
        {
            context.fillText(text, begin_x, begin_y);
            begin_y = begin_y + 20;
            text = "";
            count = 0;
        }
        if(i == stringLength)
        {
            context.fillText(text, begin_x, begin_y);
        }
        text = text + newText[0];
        count ++;
        newText.shift();
    }
}

function drawTimeMsg(cxt, y, str){
    cxt.beginPath();
    var w = cxt.measureText(str).width - 15;
    var x = 187 - w / 2;
    drawLeftMsg(cxt, x, y, w, 15);
    cxt.fillStyle = "rgb(206,206,206)";
    cxt.fill();
    cxt.beginPath();
    cxt.textAlign = "center";
    cxt.textBaseline = "top";
    cxt.font = "12px STHeitiSC-Light";
    cxt.fillStyle = "rgb(248,248,248)";
    cxt.fillText(str, 188, y + 4);
}

function drawSignal(cxt, num){
    cxt.beginPath();
    cxt.strokeStyle = "white";
    cxt.fillStyle = "white";
    if (num == 4){
        cxt.arc(29, 8.6, 2, 0, 2 * Math.PI);
        cxt.stroke();
        cxt.fill();
    }else if(num == 5){
        cxt.arc(29, 8.6, 2, 0, 2 * Math.PI);
        cxt.arc(36, 8.6, 2, 0, 2 * Math.PI);
        cxt.stroke();
        cxt.fill();
    }
}

function drawBarTime(cxt, time){
    cxt.beginPath();
}

function drawEle(cxt, num){
    cxt.beginPath();
    cxt.rect(350, 8, 20, 10);
    cxt.fillStyle = "red";
    cxt.fill();

}

function drawStatusBar(){

}



/**
 *  按钮部分
 */
function getHisName(){
    return document.getElementById("hisName").value;
}

function putMainView(cxt){

    mainView(cxt);
    //信息框
    //   drawSignal(context, 5);
    //   drawEle(context, 50);
    drawLeft(context, 80, "你好");
    drawRight(context, 140, "我很好，谢谢！");
    drawLeft(context, 200, "我正好十三个字你不要再数了");
    drawRight(context, 260, "我超过十三个字貌似可以自动换行了");
    drawLeft(context, 340, "我超过二十六个字了啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊");
    drawTimeMsg(context, 450, "星期六  17:59");
    drawRight(context, 480, "再见");
    drawLeft(context, 540, "再见");
}