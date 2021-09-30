const animationTargetElements = document.querySelectorAll(".textAnimation1");

for (let i = 0; i < animationTargetElements.length; i++)
{
  const targetElement = animationTargetElements[i],
  texts = targetElement.textContent,
  textsArray = [];
  
  targetElement.textContent = "";
  
  for (let j = 0; j < texts.split("").length; j++)
  {
    const t = texts.split("")[j]; //置き換え
    if (t === " ") {
      textsArray.push(" ");
    } else {
      textsArray.push('<span style="animation-delay: ' + (j * 0.1) + 's;">' + t + '</span>')
    }
  }
  
  for (let k = 0; k < textsArray.length; k++)
  {
    targetElement.innerHTML += textsArray[k];
  }
}



const animationTargetElements2 = document.querySelectorAll(".textAnimation2");

for (let i2 = 0; i2 < animationTargetElements2.length; i2++)
{
  const targetElement2 = animationTargetElements2[i2],
        texts2 = targetElement2.textContent,
        textsArray2 = []; //空の配列を用意

  targetElement2.textContent = "";

  //spanタグを付けて配列に入れる
  for (let j2 = 0; j2 < texts2.split("").length; j2++)
  {
    const t2 = texts2.split("")[j2]; //置き換え
    if (t2 === " ") {
      textsArray2.push(" ");
    } else {
      textsArray2.push('<span style="animation-delay: ' + (j2 * 0.2) + 's;">' + t2 + '</span>')
    }
  }

  for (let k2 = 0; k2 < textsArray2.length; k2++)
  {
    targetElement2.innerHTML += textsArray2[k2];
  }
}