

function twoDigit(n) {
    var num = n;
    num.toFixed(2);
    return num;
}
function addCorrectDayToInput(w) {
    var date = new Date();
    var string = date.toString();
    var splitDate = string.split(" ");
    var newDate = splitDate[1] + " " + splitDate[2] + ", " + splitDate[3];
    document.getElementById(w).value = newDate;
}
function foramtDate(d) {
    var string = d.toString();
    var splitDate = string.split(" ");
    var newDate = splitDate[2] + " " + splitDate[1] + ", " + splitDate[3];
    var month = splitDate[1];
    var day = splitDate[2];
    var year = splitDate[3];
    var num = Date.parse(newDate);

    return date = {
        newDate: newDate,
        month: month,
        day: day,
        year: year,
        num: num
    }
}
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
function convertFlow(x) {
    return num = x / 30;
}


export { twoDigit, addCorrectDayToInput, foramtDate, formatNumber, convertFlow };