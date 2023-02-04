/*
텍스트가 보여지는 기능
1. 몇 번째 사진에 마우스가 올라갔는지 확인(if 문)
2. 해당 사진을 찾아 hideText class를 지워주고, showText class를 추가한다.
*/
function showText(num) {
  if (num === 1) {
    document.querySelector("#desc1").classList.remove("hideText");
    document.querySelector("#desc1").classList.add("showText");
  } else if (num === 2) {
    document.querySelector("#desc2").classList.remove("hideText");
    document.querySelector("#desc2").classList.add("showText");
  } else {
    document.querySelector("#desc3").classList.remove("hideText");
    document.querySelector("#desc3").classList.add("hideText");
  }
}

/*
텍스트가 감춰지는 기능
1. 몇 번째 사진에 마우스가 벗어났는지 확인(if 문)
2. 해당 사진을 찾아 showText class를 지워주고, hideText class를 추가한다.
*/
function hideText(num) {
  if (num === 1) {
    document.querySelector("#desc1").classList.remove("showText");
    document.querySelector("#desc1").classList.add("hideText");
  } else if (num === 2) {
    document.querySelector("#desc2").classList.remove("showText");
    document.querySelector("#desc2").classList.add("hideText");
  } else {
    document.querySelector("#desc3").classList.remove("showText");
    document.querySelector("#desc3").classList.add("hideText");
  }
}

function alertText(num) {
  alert(`${num}번째 추억이에요!😁`);
}
