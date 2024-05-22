var btns = document.getElementsByClassName("btns");
var text = document.getElementById("text");
var
 font_option = document.getElementById("font_family");
var font_size = document.getElementById("font_size");
console.log(font_option);

font_option.addEventListener('change', function(){
  if(this.value === 'fantasy'){
    text.style.fontFamily = 'fantasy'
  }

  if(this.value === 'sans-sarif'){
    text.style.fontFamily = 'sans-sarif'
  }

  if(this.value === 'cursive'){
    text.style.fontFamily = 'cursive'
  }
})


font_size.addEventListener('change', function(){
  if(this.value === 'heading'){
    text.style.fontSize = '41px'
  }

  if(this.value === 'sub heading'){
    text.style.fontSize = '22px'
  }

  if(this.value === 'normal'){
    text.style.fontSize = '16px'
  }
})

for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    switch (this.innerText) {
      case "bold":
        if (text.style.fontWeight == "bold") {
          text.style.fontWeight = "normal";
        } else {
          text.style.fontWeight = "bold";
        }
        break;
      case "underLine":
        if (text.style.textDecorationLine == "underLine") {
          text.style.textDecorationLine = "normal";
        } else {
          text.style.textDecorationLine = "underLine";
        }
        break;

      case "italic":
        if (text.style.fontStyle == "italic") {
          text.style.fontStyle = "normal";
        } else {
          text.style.fontStyle = "italic";
        }
        break;

      case "left":
        if (text.style.textAlign == "left") {
          text.style.textAlign = "normal";
        } else {
          text.style.textAlign = "left";
        }

        break;

      case "right":
        if (text.style.textAlign == "right") {
          text.style.textAlign = "normal";
        } else {
          text.style.textAlign = "right";
        }

        break;

      case "center":
        if (text.style.textAlign == "center") {
          text.style.textAlign = "normal";
        } else {
          text.style.textAlign = "center";
        }
        break;

      default:
        break;
    }
  });
}
