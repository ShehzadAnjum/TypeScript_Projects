var unitCount = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'forteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'ninteen'];
var tensCount = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninty'];
var units = ['', 'hundred', 'thousand', 'hundred', 'million'];
var num1_2 = '';
var num3 = '';
var num4_5 = '';
var num6 = '';
var num7_8 = '';
var num2word;
var ui = '';
//ui = "24698432"
ui = prompt("Input number : ");
var uil = ui.length;
var cntr;
var outcome;
if (uil == 1)
    num1_2 = getunit(ui.slice(0, 1));
if (uil > 1) {
    num1_2 = getunit(ui.slice(uil - 2, uil));
    num1_2 = num1_2 ? num1_2 : '';
}
if (uil >= 3) {
    num3 = getunit(ui.slice(uil - 3, uil - 2));
    num3 = num3 ? num3 + ' ' + units[1] : '';
}
if (uil == 4) {
    num4_5 = getunit(ui.slice(0, 1));
    num4_5 = num4_5 ? num4_5 + ' ' + units[2] : '';
}
if (uil > 4) {
    num4_5 = getunit(ui.slice(uil - 5, uil - 3));
    num4_5 = num4_5 ? num4_5 + ' ' + units[2] : '';
}
if (uil >= 6) {
    num6 = getunit(ui.slice(uil - 6, uil - 5));
    num6 = num6 ? num6 + ' ' + units[3] : '';
}
if (uil == 7) {
    num7_8 = getunit(ui.slice(0, 1));
    num7_8 = num7_8 ? num7_8 + ' ' + units[4] : '';
}
if (uil == 8) {
    num7_8 = getunit(ui.slice(0, 2));
    num7_8 = num7_8 ? num7_8 + ' ' + units[4] : '';
}
num2word = num7_8 + " " + num6 + " " + num4_5 + " " + num3 + " " + num1_2;
document.write("<h2>" + ui + "</h2>");
document.write("<br><h3>" + num2word + "</h3>");
document.write("<br>complete code run till end .....<br><br>");
console.log("\n\n" + ui + " : " + num2word + "\n\n");
function getunit(num) {
    var u;
    var t;
    if (Number(num) < 20)
        return (unitCount[num]);
    else {
        u = num[1];
        t = num[0];
        return (tensCount[t] + " " + unitCount[u]);
    }
}
