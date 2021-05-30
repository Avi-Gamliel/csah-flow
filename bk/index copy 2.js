const database = firebase.database();
var dateExpend = document.getElementById('dateexpend');
var outcomingForm = document.getElementById('outcomingForm');
var dateIncome = document.getElementById('dateIncoimg');
var typeIncoming = document.getElementById('typeIncoimg');
var totalcash = document.getElementById('totalIncoimg');
var infoOut = document.getElementById('infoOut');
var dateOut = document.getElementById('dateOut');
var typeOut = document.getElementById('typeOut');
var totalOut = document.getElementById('totalOut');
var settingForm = document.getElementById('settingForm');
var incomingForm = document.getElementById('incomingForm');
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
const mainTable = document.getElementById('mainTable');
var incoming = document.getElementById("incoming");
var outcoming = document.getElementById("outcoming");
var balance = document.getElementById("balance");
var Status = document.getElementById('Status');
var box = document.getElementById('BodyBoxSta');
var Tableview = document.getElementById('Tableview');
var home = document.getElementById('Home');
var currectCash = document.getElementById("titleCash");
var LiquidCash = document.getElementById("LiquidCash");
var massage = document.getElementById("massage");
var overmas = document.getElementById("overmas");
var statusIcons = document.getElementById("statusIcons");
var statusIconsLiq = document.getElementById("statusIconsLiq");
var outcomingCash = document.getElementById("outcomingCash");
var IncomingCash = document.getElementById("IncomingCash");


function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

document.addEventListener('click', (e) => {
    var page = e.target.id;
    console.log(e.target);

    if (page == 'HomeMenu') {
        Tableview.style.display = 'none';
        home.style.display = 'block';
    } else if (page == 'TableviewMenu') {
        home.style.display = 'none';
        Tableview.style.display = 'block';
    }

    // Tableview.style.display = 'none';
    // home.style.display = 'block';
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var elemselect = document.querySelectorAll('select');
    var elemsdatepicker = document.querySelectorAll('.datepicker');
    var elemssidenav = document.querySelectorAll('.sidenav');
    var elemsdate = document.querySelectorAll('.date');
    var el = document.querySelectorAll('.tab');
    M.Tabs.init(el);

    M.Datepicker.init(elemsdatepicker);
    M.Datepicker.init(elemsdate);
    M.Sidenav.init(elemssidenav);
    M.FormSelect.init(elemselect);
    M.Modal.init(elems);

});

function addDb(Type, i, t, d, c) {

    console.log(Type, i, t, d, c);

    var infoCash = i;
    var TypeCash = t;
    var dateCash = d;
    var totalCash = c;

    // let updates = {};
    var time = new Date();
    var dateCashNum = Date.parse(dateCash);
    var timeNum = Date.parse(time);
    var numDataCorrect = '';
    var numExpends = '';
    var newArrayCash = {};

    //CHECKING IF MONTH EXISTS AND RETURN THE MONTH 

    database.ref('/cashflow/').orderByChild('number').on('value', function (snapshot) {

        let postArray = snapshot.val();
        let keys = Object.keys(postArray);

        for (var i = 0; i < keys.length; i++) {
            var currentObject = postArray[keys[i]].date;
            var dataDate = Date.parse(currentObject);
            // check if the MONTH exists
            if (dataDate == dateCashNum) {
                //if exists update numDataCorrect = dataDate
                return numDataCorrect = dataDate;
            }
        }
    });


    database.ref('/cashflow/').child(dateCashNum).child('chashFlow').on('value', function (snapshot) {

        let postArray = snapshot.val();
        let keys = Object.keys(postArray);

        if (keys.length == 1) {
            console.log('1');
            return numExpends = 1;


        }

    });

    // if the MONTH exists create and push New action
    if (numDataCorrect == dateCashNum) {

        let newPostKey = firebase.database().ref().child('cashflow').child(dateCashNum).child('chashFlow').push().key;
        let updates = {};
        let postdata = {

            title: TypeCash,
            date: dateCash,
            totalCash: Number(totalCash),
            type: Type,
            after: "",
            time: time,
            numTime: timeNum
        }

        updates['/cashflow/' + dateCashNum + '/chashFlow/' + newPostKey] = postdata;
        //clean the FORM

        //update DB
        firebase.database().ref().update(updates);
        // add exists Value to Cash Flow
        if (numExpends == 1) {

            database.ref('/cashflow/').child(dateCashNum).on('value', function (snapshot) {

                let postArray = snapshot.val();
                let keys = Object.keys(postArray);
                newArrayCash = postArray;

            });

            let newPostKeyA = firebase.database().ref().child('cashflow').child(dateCashNum).child('chashFlow').push().key;
            let newupdate = {};
            let postdata = {

                title: newArrayCash.title,
                date: newArrayCash.date,
                totalCash: newArrayCash.totalCash,
                type: newArrayCash.type,
                after: newArrayCash.after,
                time: newArrayCash.time,
                numTime: newArrayCash.numTime
            }

            newupdate['/cashflow/' + dateCashNum + '/chashFlow/' + newPostKeyA] = postdata;
            firebase.database().ref().update(newupdate);
            firebase.database().ref().child('cashflow').child(dateCashNum).update({

                title: "פעילות מרובה",
                date: newArrayCash.date,
                totalCash: "",
                type: newArrayCash.type,
                after: newArrayCash.after,
                time: newArrayCash.time,
                numTime: newArrayCash.numTime

            });
        }
    } else {
        let updates = {};
        let postdata = {
            title: TypeCash,
            date: dateCash,
            totalCash: Number(totalCash),
            type: Type,
            after: "",
            time: time,
            numTime: timeNum
        }

        updates['/cashflow/' + dateCashNum] = postdata;

        firebase.database().ref().update(updates);

        mainTable.innerHTML = "";
    }
    totalcash.value = '';
    dateIncome.value = '';
    typeIncoming.value = '';
    incomingForm.value = '';
    mainTable.innerHTML = "";
}

incomingForm.addEventListener('submit', (e) => {

    e.preventDefault();
    var infoCashIN = incomingForm.value;
    var TypeCashIN = typeIncoming.value;
    var dateCashIN = dateIncome.value;
    var totalCashIN = totalcash.value;
    addDb("in", infoCashIN, TypeCashIN, dateCashIN, totalCashIN);

})

outcomingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    var infoCashOUT = infoOut.value;
    var TypeCashOUT = typeOut.value;
    var dateCashOUT = dateOut.value;
    var totalCashOUT = totalOut.value;
    addDb("out", infoCashOUT, TypeCashOUT, dateCashOUT, totalCashOUT);
});


settingForm.addEventListener('submit', (e) => {

    e.preventDefault();
    var startP = document.getElementById('statusStart');
    var creditL = document.getElementById('creditLine');
    var creditB = document.getElementById('creditBank');
    var startD = document.getElementById('startDate');

    var startnPoint = startP.value;
    var creditLine = creditL.value;
    var creditBank = creditB.value;
    var startDate = startD.value;

    let updatessetting = {};
    var time = new Date();

    let postdataSetting = {
        start: Number(startnPoint),
        creditLine: Number(creditLine),
        creditBank: Number(creditBank),
        startDate: startDate,
        cuurentCash: Number(startnPoint),
        time: time
    }
    var numDate = Date.parse(startDate);
    let newPostKey = firebase.database().ref().child('cashflow').child(numDate).push();
    let updates = {};
    var time = new Date();
    var split = startnPoint.split('-');
    var num = split[1];
    var contain = startnPoint.includes("-");

    var currectCash = 0;

    if (contain == true) {

        let postdata = {
            title: "התחלה",
            date: startDate,
            totalCash: Number(num),
            after: currectCash - num,
            time: time,
            type: 'out'
        }

        currectCash = currectCash - num;

        updates['/cashflow/' + numDate] = postdata;
        firebase.database().ref().update(updates);



    } else {
        let postdata = {

            title: "התחלה",
            date: startDate,
            totalCash: num,
            after: num,
            time: time,
            type: 'in'
        }
        updates['/cashflow/' + startDate] = postdata;
        firebase.database().ref().update(updates);

    }
    var startdate = "Jan 01, 2020";
    var start_Date = Date.parse(startdate);

    let postdata = {
        title: "תחילת שנה",
        date: "Jan 01, 2020",
        totalCash: 0,
        after: 0,
        time: time,
        type: ''
    }

    currectCash = currectCash - num;

    updates['/cashflow/' + start_Date] = postdata;
    firebase.database().ref().update(updates);



    updatessetting['/setting/' + 'firstSetting/'] = postdataSetting;
    firebase.database().ref().update(updatessetting);

    // db.collection('setting').add({
    //     start: startnPoint,
    //     creditLine: creditLine,
    //     creditBank: creditBank,
    //     startDate: startDate,
    //     cuurentCash: startnPoint

    // });
    startP.value = '';
    creditLine.value = '';
    creditBank.value = '';
    startD.value = '';
    mainTable.innerHTML = "";
});

function laodUpData(I, doc, S, A) {

    var date = doc.date;
    var totalCash = doc.totalCash;
    var type = doc.type;
    var title = doc.title;

    let rowtable = document.createElement('tr');
    let TotalCashAfter = document.createElement('td');
    let typeCash = document.createElement('td');
    let DateCash = document.createElement('td');
    let TotalCash = document.createElement('td');
    let icon = document.createElement('i');

    icon.setAttribute('class', 'material-icons center');

    if (type == 'in') {
        icon.setAttribute('id', 'upArrow');
        icon.textContent = 'arrow_upward';
        TotalCash.textContent = formatNumber(totalCash);
    } else if (type == 'out') {
        icon.setAttribute('id', 'downArrow');
        icon.textContent = 'arrow_downward';
        TotalCash.style.color = 'red';
        TotalCash.textContent = '-' + formatNumber(totalCash);
    }


    rowtable.setAttribute('id', 'newRow' + "-" + I);
    rowtable.setAttribute('class', 'newRow');
    typeCash.setAttribute('id', 'typeCash');
    TotalCashAfter.setAttribute('id', 'TotalCashAfter');
    DateCash.setAttribute('id', 'DateCash');
    TotalCash.setAttribute('id', 'TotalCash');

    DateCash.textContent = date;
    typeCash.textContent = title;
    TotalCashAfter.textContent = formatNumber(S);

    var newLine = 0 - A;
    var sumNum = S - newLine;

    if (S < newLine) {
        let spanTitle = document.createElement('span');

        spanTitle.setAttribute('id', 'spanTitle');

        spanTitle.textContent = formatNumber(sumNum) + " " + "חריגה";

        TotalCashAfter.appendChild(spanTitle);

        TotalCashAfter.style.color = 'red';
        TotalCashAfter.style.fontWeight = 'bold';
    }

    rowtable.appendChild(TotalCashAfter);
    rowtable.appendChild(TotalCash);
    rowtable.appendChild(icon);
    rowtable.appendChild(DateCash);
    rowtable.appendChild(typeCash);
    mainTable.appendChild(rowtable);

    if (doc.chashFlow) {

        var array = [];
        // console.log(i);

        database.ref('/cashflow/').child(I).child('/chashFlow/').on('value', function (snapshot) {

            let postArray = snapshot.val();
            let keys = Object.keys(postArray);
            let spanNum = document.createElement("span");

            spanNum.setAttribute("class", "spanNum");

            spanNum.textContent = keys.length;

            typeCash.appendChild(spanNum);

            var newNum = 0;

            for (var i = 0; i < keys.length; i++) {

                var id = keys[i];
                var currentObject = postArray[keys[i]];
                var typeDay = currentObject.type;
                var cuurectcashDay = currentObject.totalCash;
                var dateToday = currentObject.date;
                var titlecash = currentObject.title;
                var titlecafter = currentObject.after;

                date = dateToday;
                title = titlecash;
                totalCash = cuurectcashDay;
                type = typeDay;

                let rowtable = document.createElement('tr');
                let TotalCashAfter = document.createElement('td');
                let typeCash = document.createElement('td');
                let DateCash = document.createElement('td');
                let TotalCash = document.createElement('td');
                let icon = document.createElement('i');

                icon.setAttribute('class', 'material-icons center');

                if (type == 'in') {

                    icon.setAttribute('id', 'upArrow');
                    icon.textContent = 'arrow_upward';

                    TotalCash.textContent = totalCash;
                    TotalCash.style.color = '#00cc00';

                } else if (type == 'out') {

                    icon.setAttribute('id', 'downArrow');
                    icon.textContent = 'arrow_downward';

                    TotalCash.style.color = 'red';
                    TotalCash.textContent = '-' + totalCash;
                }

                rowtable.setAttribute('id', I + 'newRow' + i);
                rowtable.setAttribute('class', 'newSubRow');
                typeCash.setAttribute('id', 'typeCash');
                TotalCashAfter.setAttribute('id', 'TotalCashAfter');
                DateCash.setAttribute('id', 'DateCash');
                TotalCash.setAttribute('id', 'TotalCash');

                DateCash.textContent = date;
                typeCash.textContent = title;
                TotalCashAfter.textContent = S;

                var newLine = 0 - A;
                var sumNum = S - newLine;

                if (S < newLine) {
                    let spanTitle = document.createElement('span');
                    spanTitle.setAttribute('id', 'spanTitle');
                    spanTitle.textContent = sumNum + " " + "חריגה";
                    TotalCashAfter.appendChild(spanTitle);
                    TotalCashAfter.style.color = 'red';
                    TotalCashAfter.style.fontWeight = 'bold';
                }

                rowtable.appendChild(TotalCashAfter);
                rowtable.appendChild(TotalCash);
                rowtable.appendChild(icon);
                rowtable.appendChild(DateCash);
                rowtable.appendChild(typeCash);
                mainTable.appendChild(rowtable);
                rowtable.style.display = 'none';

                if (icon.textContent == 'arrow_downward') {
                    array.push(cuurectcashDay);
                } else if (icon.textContent == 'arrow_upward') {
                    array.push(cuurectcashDay);
                }

                if (type == 'in') {

                    newNum = Number(newNum) + Number(array[i]);

                } else if (type == 'out') {

                    newNum = Number(newNum) - Number(array[i]);
                }


            }

            var getRow = document.getElementById("newRow-" + I).getElementsByTagName('td')[1];
            var getRowValue = getRow.innerText;

            getRow.innerText = newNum;
            if (newNum < 0) {

                database.ref('/cashflow/').child(I).update({
                    totalCash: 0 - newNum,
                    type: 'out'
                });
            } else {
                database.ref('/cashflow/').child(I).update({
                    totalCash: newNum,
                    type: 'in'
                });
            }


            rowtable.addEventListener('click', (e) => {
                for (var i = 0; i < keys.length; i++) {
                    var row = document.getElementById(I + "newRow" + i);
                    var sts = row.style.display;
                    if (sts == 'none') {
                        row.style.display = 'table-row';
                    } else {
                        row.style.display = 'none';
                    }
                }
            });
        });

    }
}

function loadIncomingOut(m) {
    console.log(m);
    var I = 0;
    var O = 0;

    for (var i = 0; i < m.length; i++) {
        console.log(m[i]);
        O += m[i][1];
        I += m[i][2];

    }
    console.log();

    incoming.textContent = formatNumber(I);
    var formatNum = O.toString().split('-');
    //outcoming TITLE
    outcoming.textContent = formatNumber(O);
    console.log(formatNum[1], I);
    var balnaceSum = Number(I) - Number(formatNum[1]);
    balance.textContent = formatNumber(balnaceSum);
    console.log(balnaceSum);

    var foramtBalance = balnaceSum.toString().split(" ");
    if (foramtBalance[0] == "-") {
        balance.style.color = "red";
    } else {
        balance.style.color = "#00cc00";
    }

}

var currectLimit = '';

database.ref('/setting/firstSetting/').on('value', function (snapshot) {

    var currentval = snapshot.val().start;
    var after = snapshot.val().creditBank;
    var visa = snapshot.val().creditLine;

    var limitCash = document.getElementById('limitCash');
    var limitCard = document.getElementById('limitCard');
    var Status = document.getElementById('Status');
    currectLimit = after;
    return currectLimit;

});
let nArray = [];
database.ref('/cashflow/').orderByChild('number').on('value', function (snapshot) {

    let postArray = snapshot.val();
    let keys = Object.keys(postArray);

    let array = [];
    var newDate = new Date();

    let dataFinal = [[]];
    //////////////////////////////////  Looping thruogh al the date /////////////////////////////////////////

    for (var i = 1; i < keys.length + 1; i++) {
        let totalIncome = 0;
        let totalOut = 0;
        var id = keys[i];
        var currentObject = postArray[id];
        var currectnum = currentObject.totalCash;
        var cashF = currentObject.chashFlow;
        var previus = postArray[keys[i - 1]].after;
        var type = currentObject.type;
        var StatusCash = 0;
        var date = currentObject.date;
        var splitDate = date.split(" ");
        var newdateParse = Date.parse(date);
        var subdate = Date.parse(newDate);
        var value = '';

        console.log(cashF, date, currectnum);
        // console.log(id, currentObject, StatusCash, currectLimit);
        /////////////////////// update Currect date cash in Status and send Message /////////////////////

        if (subdate > newdateParse) {

            Status.textContent = formatNumber(postArray[keys[i]].after);
            currectCash.textContent = formatNumber(postArray[keys[i]].after);
            var newBalance = Number(postArray[keys[i]].after);
            if (newBalance < 0) {

                var sum = Number(currectLimit) + newBalance;
                LiquidCash.style.color = 'red';
                LiquidCash.textContent = formatNumber(sum);
                currectCash.style.color = 'red';
                statusIcons.textContent = ' arrow_downward';
                statusIcons.style.color = 'red';
                statusIconsLiq.textContent = 'arrow_downward';
                statusIconsLiq.style.color = 'red';
                if (newBalance < Number(-2000)) {

                    let spanOver = document.createElement('span');
                    spanOver.setAttribute("id", "over");
                    spanOver.textContent = "  חריגה ";
                    massage.textContent = '!שים לב אתה בחריגה בחשבון';
                    massage.style.color = 'red';
                    overmas.appendChild(spanOver);

                }

            } else {

                var sum = Number(currectLimit) + newBalance;
                LiquidCash.style.color = '#00cc00';
                LiquidCash.textContent = formatNumber(sum);
                currectCash.style.color = '#00cc00';
                statusIcons.textContent = ' arrow_upward';
                statusIcons.style.color = '#00cc00';
                statusIconsLiq.textContent = 'arrow_upward';
                statusIconsLiq.style.color = '#00cc00';
                massage.textContent = '!עבודה מעולה';
                massage.style.color = '#00cc00';


            }


        } else {
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////

        var newnum = Status.innerText;
        var splitnum = newnum.split(' ');

        ///////////////////////checking if the StatusCash is up or down//////////////////////////////////

        if (splitnum[0] >= 0) {
            Status.style.color = '#00cc00';
            box.style.background = "#E6E6E6";
        } else {
            Status.style.color = 'red';
            box.style.background = "#E6E6E6";
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////
        console.log(splitDate[0]);

        // console.log(i)
        let totalin = 0;
        let totalout = 0;
        if (i == 0) {

            StatusCash = Number(currectnum);
            firebase.database().ref().child('cashflow').child(id).update({
                after: StatusCash
            });




        } else if (i > 0 && cashF !== undefined) {

            // console.log(cashF);

            database.ref('/cashflow/').child(id).child('chashFlow').orderByChild('number').on('value', function (snapshot) {

                let postArray = snapshot.val();
                let keys = Object.keys(postArray);

                for (var j = 0; j < keys.length; j++) {


                    var uid = keys[j];

                    var currentObject = postArray[keys[j]];
                    var newtype = currentObject.type

                    if (newtype == 'in') {
                        totalin += Number(currentObject.totalCash);

                    } else if (newtype == 'out') {
                        totalout -= Number(currentObject.totalCash);

                        StatusCash = Number(previus) - Number(currectnum);
                    }


                }

            });

            console.log('multi', totalin, totalout);

            if (type == 'in') {

                StatusCash = Number(currectnum) + Number(previus);
            } else if (type == 'out') {

            }
            console.log("multi", StatusCash);
            firebase.database().ref().child('cashflow').child(id).update({
                after: StatusCash
            });
            // console.log(nArray);
            // console.log(date, totalOut, totalIncome);
        } else if (i > 0 && type == 'out' && cashF == undefined) {
            // console.log('out');

            totalOut -= currectnum;

            StatusCash = Number(previus) - Number(currectnum);
            // console.log("out", StatusCash);
            firebase.database().ref().child('cashflow').child(id).update({
                after: StatusCash
            });

        } else if (i > 0 && type == 'in' && cashF == undefined) {
            // console.log('in');
            // console.log("in", StatusCash);
            // console.log(currectnum, previus);

            totalIncome += currectnum;
            StatusCash = Number(currectnum) + Number(previus);
            // console.log("in", StatusCash);
            firebase.database().ref().child('cashflow').child(id).update({
                after: StatusCash
            });


        }

        var titledate = date.split(" ");

        // console.log(id, currentObject, StatusCash, currectLimit);
        totalOut += totalout;
        totalIncome += totalin;

        laodUpData(id, currentObject, StatusCash, currectLimit);

        // loadIncomingOut(totalOut, totalIncome);
        array.push([splitDate[0], totalOut, totalIncome]);

        let updatessettingB = {};

        let postdataSettingB = {
            totalCash: totalOut
        }
        updatessettingB['/monthly/' + titledate[0] + '/out/' + id] = postdataSettingB;
        firebase.database().ref().update(updatessettingB);
        let updatessetting = {};
        let postdataSetting = {
            totalCash: totalIncome
        }

        updatessetting['/monthly/' + titledate[0] + '/in/' + id] = postdataSetting;
        firebase.database().ref().update(updatessetting);



        nArray = array;
    }
    console.log(nArray);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////

});

database.ref('/monthly/').on('value', function (snapshot) {

    let postArray = snapshot.val();
    let keys = Object.keys(postArray);
    let final = [];
    let chartmap = [];
    var newdate = new Date();
    var splitmonth = newdate.toString().split(" ");
    // console.log(x[0], month[1]);
    var month = splitmonth[1];
    for (var i = 0; i < keys.length; i++) {
        var id = keys[i];
        var currentObject = postArray[keys[i]];
        var newDate = new Date();

        console.log(currentObject);

        database.ref('/monthly/').child(id).on('value', function (snapshot) {


            let postArray = snapshot.val();
            let keys = Object.keys(postArray);

            let cIn = [];
            let Cout = [];
            var countin = 0;
            var countout = 0;
            for (var i = 0; i < keys.length; i++) {

                var type = keys[i];
                var currentObject = postArray[keys[i]];


                console.log(currentObject, id);
                let masterarray = [];
                database.ref('/monthly/').child(id).child(type).on('value', function (snapshot) {
                    let postArray = snapshot.val();
                    let keys = Object.keys(postArray);



                    // console.log(postArray[keys[i]]);
                    for (var i = 0; i < keys.length; i++) {

                        var ctype = keys[i];
                        var obg = postArray[keys[i]];
                        console.log(id, type, obg.totalCash);

                        if (type == 'in') {
                            if (month == id) {
                                countin += obg.totalCash;

                            }
                            IncomingCash.textContent = formatNumber(countin);
                            cIn.push(obg.totalCash);
                        } else if (type == 'out') {
                            if (month == id) {
                                countout += obg.totalCash;


                            }
                            outcomingCash.textContent = formatNumber(countout);
                            Cout.push(obg.totalCash);

                        }


                        var ctype = keys[i];


                        final = [id, Cout, cIn];
                    }
                    console.log(final);


                });



            }
            let incomingB = 0;
            let outcomngB = 0;
            if (final[1].length !== undefined) {
                for (var j = 0; j < final[1].length; j++) {

                    incomingB += final[1][j];

                }
            }


            if (final[2].length !== undefined) {

                for (var h = 0; h < final[2].length; h++) {

                    outcomngB += final[2][h];


                }
            }
            chartmap.push([final[0], incomingB, outcomngB]);





        });

    }
    loadIncomingOut(chartmap);
    drawChart(chartmap); // top
    drawStuff(chartmap); // main
    drawVisualization(chartmap);
    console.log(chartmap);





});



google.charts.load('current', { 'packages': ['bar'] });
google.charts.load('current', { 'packages': ['bar'] });
google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawStuff);
google.charts.setOnLoadCallback(drawVisualization);
google.charts.setOnLoadCallback(drawChart);

function drawChart(m) {


    var data = google.visualization.arrayToDataTable([
        ['month', '', ''],
        ['Jun', 1000, 400]

    ]);

    m.forEach(function (x) {
        var newdate = new Date();
        var splitmonth = newdate.toString().split(" ");
        // console.log(x[0], month[1]);
        month = splitmonth[1];
        currectmonth = x[0];

        if (month == currectmonth) {

            data.hg.forEach(function (row) {

                row.c[0].v = x[0];
                row.c[1].v = x[1];
                row.c[2].v = x[2];
            })
        }

    })
    var options = {
        series: { 0: { color: 'red' }, 1: { color: '#00cc00' } },
        chart: {

        },
        bars: 'vertical' // Required for Material Bar Charts.
    };

    var chart = new google.charts.Bar(document.getElementById('barchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}

function drawStuff(m) {


    var data = new google.visualization.arrayToDataTable([

        ['Month', '', ''],
        ['Jan', 0, 0],
        ['Feb', 0, 0],
        ['Mer', 0, 0],
        ['Apr', 0, 0],
        ['May', 0, 0],
        ['Jun', 0, 0],
        ['Jul', 0, 0],
        ['Aug', 0, 0],
        ['Sep', 0, 0],
        ['Oct', 0, 0],
        ['Nov', 0, 0],
        ['Dec', 0, 0]
    ]);

    data.hg.forEach(function (x) {

        m.forEach(function (y) {
            var month = y[0];

            if (month == x.c[0].v) {

                x.c[1].v = y[1];
                x.c[2].v = y[2];

            }
        })



        // chart.update();



    });

    // console.log(arrayToDataTable[0]);


    var options = {
        width: 1270,
        vAxis: { viewWindow: { max: 1000 } },
        hAxis: { title: 'Month' },
        seriesType: 'bars',
        series: { 0: { color: 'red' }, 1: { color: '#00cc00' } }

    };

    var chart = new google.visualization.ComboChart(document.getElementById('dual_x_div'));
    chart.draw(data, options);


};

function drawVisualization(m) {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([

        ['Month', '', ''],
        ['Jan', 0, 0],
        ['Feb', 0, 0],
        ['Mer', 0, 0],
        ['Apr', 0, 0],
        ['May', 0, 0],
        ['Jun', 0, 0],
        ['Jul', 0, 0],
        ['Aug', 0, 0],
        ['Sep', 0, 0],
        ['Oct', 0, 0],
        ['Nov', 0, 0],
        ['Dec', 0, 0]
    ]);
    data.hg.forEach(function (x) {

        m.forEach(function (y) {
            var month = y[0];

            if (month == x.c[0].v) {

                x.c[1].v = y[1];
                x.c[2].v = y[2];

            }
        })



        // chart.update();
        // 


    });


    var options = {

        vAxis: { viewWindow: { max: 1000 } },
        hAxis: { title: 'Yearly' },
        seriesType: 'bars',
        series: { 0: { color: 'red' }, 1: { color: '#00cc00' } }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}