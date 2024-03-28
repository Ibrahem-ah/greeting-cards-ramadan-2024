var canvas = document.getElementById("canvas");

let captcha;

function generate() {
  // Clear old input
  document.getElementById("submit").value = "";

  // Access the element to store
  // the generated captcha
  captcha = document.getElementById("image");
  let uniquechar = "";

  const randomchar =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  // Generate captcha for length of
  // 5 with random character of 4 c
  for (let i = 1; i < 5; i++) {
    uniquechar += randomchar.charAt(Math.random() * randomchar.length);
  }

  // Store generated input
  captcha.innerHTML = uniquechar;
}

var ctx = canvas.getContext("2d");
var image1 = new Image();
image1.src = "eid1.png";
var image2 = new Image();
image2.src = "eid2.png";

var username = document.getElementById("username");
var position = document.getElementById("position");
var downloadBtn = document.getElementById("download");

downloadBtn.addEventListener("click", function (e) {
  function isArabic(str) {
    // Arabic characters fall in the Unicode range 0600 - 06FF
    var arabicCharUnicodeRange = /[\u0600-\u06FF]/;
    return arabicCharUnicodeRange.test(str);
  }

  // Get the input fields
  var usernameInput = document.getElementById("username");

  // Check if the user entered Arabic in the username field
  if (isArabic(usernameInput.value)) {
    e.preventDefault();
    let validatinMsg = document.getElementById("key");
    validatinMsg.innerHTML = "";

    const usr_input = document.getElementById("submit").value;

    // Check whether the input is equal
    // to generated captcha or not
    if (usr_input == captcha.innerHTML) {
      var image;
      var height;

      image = image2;
      height = 424;
      font = "bold 26px GESSTwoMedium";
      var add = 27;

      canvas.width = image.width;
      canvas.height = image.height;
      var text = username.value;
      var text2 = position.value;
      ctx.drawImage(image, 0, 0);
      ctx.fillStyle = "#052652";
      ctx.font = font;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, 880, height);

      font = "17px GESSTwoMedium";

      ctx.font = font;
      ctx.fillText(text2, 880, height + add);
      var dataURL = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.href = dataURL;
      link.download = text + ".png";
      link.click();
      const element = document.getElementById("canvas");
      // let validatinMsg = document.getElementById("key");
      if (element) {
        element.remove();
      }
      // validatinMsg.innerHTML = '';
      console.log("test");
      generate();
    } else {
      let s = (document.getElementById("key").innerHTML = "not Matched");
      generate();
    }
  } else {
    e.preventDefault();
    let validatinMsg = document.getElementById("key");
    validatinMsg.innerHTML = "";

    const usr_input = document.getElementById("submit").value;

    // Check whether the input is equal
    // to generated captcha or not
    if (usr_input == captcha.innerHTML) {
      var image;
      var height;

      image = image2;
      height = 424;
      font = "bold 26px PTSans";
      var add = 27;

      canvas.width = image.width;
      canvas.height = image.height;
      var text = username.value;
      var text2 = position.value;
      ctx.drawImage(image, 0, 0);
      ctx.fillStyle = "#052652";
      ctx.font = font;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, 880, height);
      // ctx.fillText(text, canvas.width / 2, height);

      font = "17px PTSans";

      ctx.font = font;
      ctx.fillText(text2, 880, height + add);
      var dataURL = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.href = dataURL;
      link.download = text + ".png";
      link.click();
      const element = document.getElementById("canvas");
      // let validatinMsg = document.getElementById("key");
      if (element) {
        element.remove();
      }
      // validatinMsg.innerHTML = '';
      console.log("test");
      generate();
    } else {
      let s = (document.getElementById("key").innerHTML = "not Matched");
      generate();
    }
  }
});
