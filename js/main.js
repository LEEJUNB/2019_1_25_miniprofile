// var arr = [0,1,2,3,4,5,6,7,8,9];
// var result = ""
// var len = arr.length;
// for(var i=0; i<len; i++){
//     for(var j=0; j<len; j++){
//         result += arr[i] + " x " + j + " = " + (arr[i]*j) + "<br>"
//     }
// }
// document.write(result);

// var time = 0; // 타이머를 나타낼 변수 선언
// var isTime = false; // 타이머가 시작됐는지 체크할 변수 선언
// var timer = null; // 타이머 객체를 담을 변수 선언
// var button = document.getElementById("starttimer"); // 타이머(버튼)을 가리킬 변수 선언

// //타이머 함수 선언
// function myTimer(){
//     document.getElementById("test").innerHTML = time++;
// }

// //타이머 실행
// document.getElementById("starttimer").addEventListener("click", function(e){
//     //타이머가 실행 중이 아닐 경우 실행할 코드
//     if(!isTime){
//         isTime = true;
//         //타이머 시작
//         timer = setInterval("myTimer()",1000);
//         button.innerHTML = "타이머 중지";
//     //타이머가 실행 중일 경우 실행할 코드
//     }else{
//         isTime = false;
//         //타이머 초기화
//         clearInterval(timer);
//         button.innerHTML = "타이머 시작";
//     }
// }, false)

var x = 0;
function interval(){
    test.innerHTML = ++x;
}

window.setInterval("interval()",1000);

var str = "Have a 'good' Time";
console.log(str.length);
console.log(str.indexOf("'good'"));
console.log(str.substring(0,4));
console.log(Math.round(1.5));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

