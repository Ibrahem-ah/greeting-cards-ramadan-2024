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
    // 5 with random character
    for (let i = 1; i < 5; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }

    // Store generated input
    captcha.innerHTML = uniquechar;
}

// function printmsg() {
//     const usr_input = document
//         .getElementById("submit").value;

//     // Check whether the input is equal
//     // to generated captcha or not
//     if (usr_input == captcha.innerHTML) {
//         let s = document.getElementById("key")
//             .innerHTML = "Matched";
//         generate();
//     }
//     else {
//         let s = document.getElementById("key")
//             .innerHTML = "not Matched";
//         generate();
//     }
// }




var ctx = canvas.getContext("2d");
var image1 = new Image();
image1.src = "eid1.png";
var image2 = new Image();
image2.src = "eid2.png";
var radio1 = document.getElementById("image1");
var radio2 = document.getElementById("image2");
var username = document.getElementById("username");
var position = document.getElementById("position");
var downloadBtn = document.getElementById("download");



downloadBtn.addEventListener("click", function (e) {
    e.preventDefault()
    let validatinMsg = document.getElementById("key")
    validatinMsg.innerHTML = '';

    const usr_input = document
        .getElementById("submit").value;

    // Check whether the input is equal
    // to generated captcha or not
    if (usr_input == captcha.innerHTML) {
        var image
        var height
        if (radio1.checked) {
            image = image1;
            height = 2250
            font = "bold 80px PTSans"
            var add = 100
        } else {
            image = image2;
            height = 1800;
            font = "bold 110px PTSans"
            var add = 130
        }
        canvas.width = image.width;
        canvas.height = image.height;
        var text = username.value;
        var text2 = position.value;
        ctx.drawImage(image, 0, 0);
        ctx.fillStyle = "#404040";
        ctx.font = font
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(text, canvas.width / 2, height);
        if (radio1.checked) {
            font = "60px PTSans"
        } else {
            font = "90px PTSans"
        }
        ctx.font = font
        ctx.fillText(text2, canvas.width / 2, height + add);
        var dataURL = canvas.toDataURL("image/png");
        var link = document.createElement("a");
        link.href = dataURL;
        link.download = text + ".png";
        link.click();
        const element = document.getElementById("canvas");
        // let validatinMsg = document.getElementById("key")
        if (element) {

            element.remove();
        }
        // validatinMsg.innerHTML = '';
        console.log('test');
        generate();

    }
    else {
        let s = document.getElementById("key")
            .innerHTML = "not Matched";
        generate();
    }




    // e.preventDefault()
    // var image = radio1.checked ? image1 : image2;

});