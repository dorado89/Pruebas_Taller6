function randomPalette() {
    const digits = '0123456789abcdef';
    let code = '#';
    for (let i = 0; i < 6; i++) {
        code += digits.charAt(Math.floor(Math.random() * 16));
    }
    var arrayHSV = rgbToHsv(hexToRgb(code).r, hexToRgb(code).g, hexToRgb(code).b);
    var color1 = arrayHSV[0];
    var color2 = color1 - 0.2;
    var color3 = color2 - 0.2;
    var color4 = color3 - 0.2;
    var color5 = color4 - 0.2;
    if (color2 < 0)
    {
        color2 = 1 + color2;
    }
    if (color3 < 0)
    {
        color3 = 1 + color3;
    }
    if (color4 < 0)
    {
        color4 = 1 + color4;
    }
    if (color5 < 0)
    {
        color5 = 1 + color5;
    }
    var elements = document.getElementsByClassName('color-view');
    for (var i = 0; i < elements.length; i++) {
        if (i === 0) {
            var colorNew1 = hsvToRgb(color1, arrayHSV[1], arrayHSV[2]);
//            console.log(rgbToHex(Math.round(colorNew1[0]),Math.round(colorNew1[1]),Math.round(colorNew1[2])));
            elements[i].style.backgroundColor = rgbToHex(Math.round(colorNew1[0]),Math.round(colorNew1[1]),Math.round(colorNew1[2]));
        } else if (i === 1) {
            var colorNew2 = hsvToRgb(color2, arrayHSV[1], arrayHSV[2]);
//            console.log(rgbToHex(Math.round(colorNew2[0]),Math.round(colorNew2[1]),Math.round(colorNew2[2])));
            elements[i].style.backgroundColor = rgbToHex(Math.round(colorNew2[0]),Math.round(colorNew2[1]),Math.round(colorNew2[2]));
        } else if (i === 2) {
            var colorNew3 = hsvToRgb(color3, arrayHSV[1], arrayHSV[2]);
//            console.log(rgbToHex(Math.round(colorNew3[0]),Math.round(colorNew3[1]),Math.round(colorNew3[2])));
            elements[i].style.backgroundColor = rgbToHex(Math.round(colorNew3[0]),Math.round(colorNew3[1]),Math.round(colorNew3[2]));
        } else if (i === 3) {
            var colorNew4 = hsvToRgb(color4, arrayHSV[1], arrayHSV[2]);
//            console.log(rgbToHex(Math.round(colorNew4[0]),Math.round(colorNew4[1]),Math.round(colorNew4[2])));
            elements[i].style.backgroundColor = rgbToHex(Math.round(colorNew4[0]),Math.round(colorNew4[1]),Math.round(colorNew4[2]));
        } else if (i === 4) {
            var colorNew5 = hsvToRgb(color5, arrayHSV[1], arrayHSV[2]);
//            console.log(rgbToHex(Math.round(colorNew5[0]),Math.round(colorNew5[1]),Math.round(colorNew5[2])));
            elements[i].style.backgroundColor = rgbToHex(Math.round(colorNew5[0]),Math.round(colorNew5[1]),Math.round(colorNew5[2]));
        }
    }
    document.getElementById("css-rules").value = "\n.website-background{ color: "+rgbToHex(Math.round(colorNew1[0]),Math.round(colorNew1[1]),Math.round(colorNew1[2])).toUpperCase()+";}\n\n.element-text{ color: "+rgbToHex(Math.round(colorNew2[0]),Math.round(colorNew2[1]),Math.round(colorNew2[2])).toUpperCase()+";}\n\n.element-border{ border-color: "+rgbToHex(Math.round(colorNew3[0]),Math.round(colorNew3[1]),Math.round(colorNew3[2])).toUpperCase()+";}\n\n.element-background{ background-color: "+rgbToHex(Math.round(colorNew4[0]),Math.round(colorNew4[1]),Math.round(colorNew4[2])).toUpperCase()+";}\n\n.header{ color: "+rgbToHex(Math.round(colorNew5[0]),Math.round(colorNew5[1]),Math.round(colorNew5[2])).toUpperCase()+";}";
}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function rgbToHex(r, g, b) {
//  console.log("Red:"+r+" Green:"+g+" Blue:"+b);
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function reset() {
    var elements = document.getElementsByClassName('color-view');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "";
    }
    document.getElementById("css-rules").value = "\n.website-background{ color: #FFFFFF;}\n\n.element-text{ color: #FFFFFF;}\n\n.element-border{ border-color: #FFFFFF;}\n\n.element-background{ background-color: #FFFFFF;}\n\n.header{ color: #FFFFFF;}";
}

function generateRules() {

}