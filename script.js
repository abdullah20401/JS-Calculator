// bt = document.getElementsByTagName('button')

function clearOutput() {
    document.getElementsByClassName("output-text")[0].innerText = "";
}
function deleteOutput() {
    let text = document.getElementsByClassName("output-text")[0].innerText
    document.getElementsByClassName("output-text")[0].innerText = text.slice(0, -1);
    for (let index = 0; index < text.length; index++) {
        if (text[text.length - 1] in [' ', '+', '-', 'X', '÷']) {
            document.getElementsByClassName("output-text")[0].innerText = text.slice(0, -1);
        }
    }
    // document.getElementsByClassName("output-text")[0].innerText = 
}

let calculate = 0
function numbers(num) {
    calculate += num
    if (document.getElementsByClassName("output-text")[0].innerText.length <= 16)
        document.getElementsByClassName("output-text")[0].innerText += num;
}
