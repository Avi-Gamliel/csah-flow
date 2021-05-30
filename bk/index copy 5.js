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
var Setting = document.getElementById('Setting');
var home = document.getElementById('Home');
var currectCash = document.getElementById("titleCash");
var LiquidCash = document.getElementById("LiquidCash");
var massage = document.getElementById("massage");
var overmas = document.getElementById("overmas");
var statusIcons = document.getElementById("statusIcons");
var statusIconsLiq = document.getElementById("statusIconsLiq");
var outcomingCash = document.getElementById("outcomingCash");
var IncomingCash = document.getElementById("IncomingCash");
var outtype = document.getElementById("outtype");
var newExpend = document.getElementById("newExpend");
var iconaddSetting = document.getElementById("iconaddSetting");
var group1 = document.getElementsByName("group1");
var group2 = document.getElementsByName("group2");
var group3 = document.getElementsByName("group3");
var group4 = document.getElementsByName("group4");
var paymentin = document.getElementById("paymentIn");
var flowin = document.getElementById("flowIn");
var iconaddbtn = document.getElementById("iconaddbtn");
var iconminusbtn = document.getElementById("iconminusbtn");
var creditbox = document.getElementById("creditbox");
var FlowBox = document.getElementById("FlowBox");
var creditboxOut = document.getElementById("creditboxOut");
var FlowBoxOut = document.getElementById("FlowBoxOut");
var credit = document.getElementById("creditinput");
var flow = document.getElementById("flowin");
var selectIncoming = document.getElementById("selectIncoming");
let nArray = [];
const month = {
    "Jan": 1,
    "Feb": 2,
    "Mar": 3,
    "Apr": 4,
    "May": 5,
    "Jun": 6,
    "Jul": 7,
    "Aug": 8,
    "Sep": 9,
    "Oct": 10,
    "Nov": 11,
    "Dec": 12
}


document.addEventListener('click', (e) => {

    var page = e.target.id;
    // console.log(page);
    if (page == 'HomeMenu') {
        Tableview.style.display = 'none';
        home.style.display = 'block';
        // Setting.style.display = 'none';
    } else if (page == 'TableviewMenu') {
        home.style.display = 'none';
        Tableview.style.display = 'block';
    } else if (page == 'SettingMenu') {
        home.style.display = 'none';
        Tableview.style.display = 'none';
    }

    if (page == 'once') {
        creditboxOut.style.display = "none";
        FlowBoxOut.style.display = "none";
    } else if (page == 'dus') {
        creditboxOut.style.display = "none";
        FlowBoxOut.style.display = "none";
    } else if (page == "payment") {
        creditboxOut.style.display = "block";
        FlowBoxOut.style.display = "none";
    } else if (page == 'flow') {
        creditboxOut.style.display = "none";
        FlowBoxOut.style.display = "block";
    } else if (page == 'yearly') {
        creditboxOut.style.display = "none";
        FlowBoxOut.style.display = "none";
    } else if (page == 'onceIn') {
        creditbox.style.display = "none";
        FlowBox.style.display = "none";
    } else if (page == 'dusIn') {
        creditbox.style.display = "none";
        FlowBox.style.display = "none";
    } else if (page == "paymentIn") {
        creditbox.style.display = "block";
        FlowBox.style.display = "none";
    } else if (page == 'flowIn') {
        creditbox.style.display = "none";
        FlowBox.style.display = "block";
    } else if (page == 'yearlyIn') {
        creditbox.style.display = "none";
        FlowBox.style.display = "none";
    }

    if (page == 'iconminusbtn') {
        addCorrectDayToInput("dateOut");
    } else if (page == 'iconaddbtn') {
        addCorrectDayToInput("dateIncoimg");
    }

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
    // console.log(array.toString());


});




function addCorrectDayToInput(w) {
    var date = new Date();
    var string = date.toString();
    var splitDate = string.split(" ");
    var newDate = splitDate[1] + " " + splitDate[2] + ", " + splitDate[3];

    document.getElementById(w).value = newDate;
    console.log(newDate);
}

function formatNumber(num) {

    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

}

function convertFlow(x) {
    return num = x / 30;
}

function aotucomplete() {
    var textOut = {};
    var textIn = {};
    database.ref('/setting/text/').on('value', function (snapshot) {


        let postArray = snapshot.val();
        let keys = Object.keys(postArray);

        console.log(keys);
        for (var i = 0; i < keys.length; i++) {
            var id = keys[i];
            if (id == 'in') {
                database.ref('/setting/text/in').on('value', function (snapshot) {
                    let postArrayin = snapshot.val();
                    let keysin = Object.keys(postArrayin);

                    for (var j = 0; j < keysin.length; j++) {
                        console.log('in-', postArrayin[keysin[j]].word);
                        var x = postArrayin[keysin[j]].word;
                        textIn[x] = null;
                        // textIn.push(postArrayin[keysin[j]].word);
                    }

                });

            } else if (id == 'out') {
                database.ref('/setting/text/out').on('value', function (snapshot) {
                    let postArrayout = snapshot.val();
                    let keysout = Object.keys(postArrayout);
                    for (var j = 0; j < keysout.length; j++) {
                        console.log('out -', postArrayout[keysout[j]].word);
                        var y = postArrayout[keysout[j]].word;
                        textOut[y] = null;
                        // textOut.push(postArrayout[keysout[j]].word);
                    }
                });

            }
        }




    });
    console.log(textIn);
    console.log(textOut);
    var autocomplete = document.getElementById('typeIncoimg');
    M.Autocomplete.init(autocomplete, { data: textIn });
    var autocompleteout = document.getElementById('typeOut');
    M.Autocomplete.init(autocompleteout, { data: textOut });
}

aotucomplete();

function addKeyWord(t, Type) {

    var textTrim = t.trim();

    let textupdates = {};

    let textpostdata = {
        word: textTrim
    }

    if (Type == 'out') {

        let newPostKey = firebase.database().ref().child('setting').child('text').child('out').push().key;
        textupdates['/setting/text/out/' + newPostKey] = textpostdata;
        firebase.database().ref().update(textupdates);

    } else if (Type == 'in') {

        let newPostKey = firebase.database().ref().child('setting').child('text').child('in').push().key;
        textupdates['/setting/text/in/' + newPostKey] = textpostdata;
        firebase.database().ref().update(textupdates);

    }
}



iconaddSetting.addEventListener('click', (e) => {

    addKeyWord(typeIncoming.value, "in");

});

newExpend.addEventListener('click', (e) => {

    addKeyWord(typeOut.value, "out");

});


function addDb(Type, i, t, d, c, P, W) {

    var keys = month.keys
    var corMonth = d.split(" ");
    var correctMonth = corMonth[0];
    var correctDay = corMonth[1];
    var correctYear = corMonth[2];
    var numMonth = month[correctMonth];
    var typePayment = "";
    var key = P.toString();

    console.log(Type, i, t, d, c, P, W);



    function addToDataBase(date, s) {

        var infoCash = i;
        var TypeCash = t;
        var totalCash = c;
        var type_way_pay = W;
        var time = new Date();
        var dateCashNum = Date.parse(date);
        var timeNum = Date.parse(time);
        var numDataCorrect = '';
        let numExpends = 0;
        var newArrayCash = {};
        console.log(date);

        console.log(dateCashNum);


        database.ref('/cashflow/').orderByChild('number').once('value', function (snapshot) {

            let postArray = snapshot.val();
            let keys = Object.keys(postArray);

            for (var i = 0; i < keys.length; i++) {
                var currentObject = postArray[keys[i]].date;
                var dataDate = Date.parse(currentObject);
                if (dataDate == dateCashNum) {
                    return numDataCorrect = dataDate;
                }
            }

        });


        if (numDataCorrect == dateCashNum) {

            database.ref('/cashflow/').child(dateCashNum).child('chashFlow').once('value', function (snapshot) {

                let postArray = snapshot.val();
                let keys = Object.keys(postArray);
                numExpends = keys.length;
                console.log(numExpends);

            });
            console.log(numExpends);
            if (numExpends == 0) {

                database.ref('/cashflow/').child(dateCashNum).once('value', function (snapshot) {

                    let postArray = snapshot.val();
                    let keys = Object.keys(postArray);
                    newArrayCash = postArray;

                });

                let newPostKeyA = firebase.database().ref().child('cashflow').child(dateCashNum).child('chashFlow').push().key;
                let newupdate = {};
                let postdataD = {

                    title: newArrayCash.title,
                    date: newArrayCash.date,
                    totalCash: newArrayCash.totalCash,
                    type: newArrayCash.type,
                    after: newArrayCash.after,
                    time: newArrayCash.time,
                    numTime: newArrayCash.numTime,
                    wayPay: newArrayCash.wayPay,
                    status: newArrayCash.status
                }

                newupdate['/cashflow/' + dateCashNum + '/chashFlow/' + newPostKeyA] = postdataD;
                firebase.database().ref().update(newupdate);
                mainTable.innerHTML = "";
                firebase.database().ref().child('cashflow').child(dateCashNum).update({

                    title: "פעילות מרובה",
                    date: newArrayCash.date,
                    totalCash: "",
                    type: newArrayCash.type,
                    after: newArrayCash.after,
                    time: newArrayCash.time,
                    numTime: newArrayCash.numTime,
                    wayPay: newArrayCash.wayPay,
                    status: newArrayCash.status


                });
                mainTable.innerHTML = "";

            }

            let newPostKey = firebase.database().ref().child('cashflow').child(dateCashNum).child('chashFlow').push().key;
            let updates = {};
            let postdata = {

                title: TypeCash,
                date: date,
                totalCash: Number(totalCash),
                type: Type,
                after: "",
                time: time,
                numTime: timeNum,
                wayPay: W,
                status: s
            }

            updates['/cashflow/' + dateCashNum + '/chashFlow/' + newPostKey] = postdata;
            firebase.database().ref().update(updates);
            mainTable.innerHTML = "";

        } else {

            let updates = {};
            let postdata = {
                title: TypeCash,
                date: date,
                totalCash: Number(totalCash),
                type: Type,
                after: "",
                time: time,
                numTime: timeNum,
                wayPay: W,
                status: s
            }

            updates['/cashflow/' + dateCashNum] = postdata;
            firebase.database().ref().update(updates);
            mainTable.innerHTML = "";
        }

        totalcash.value = '';
        dateIncome.value = '';
        typeIncoming.value = '';
        incomingForm.value = '';
        totalOut.value = '';
        dateOut.value = '';
        typeOut.value = '';
        infoOut.value = '';
        // mainTable.innerHTML = "";

    }

    function createDates(m, d, y) {
        var newdate = m + " " + d + " " + y;
        var newdataString = newdate.toString();
        return newdataString;
    }

    if (key == 'onceIn' || key == 'once') {

        addToDataBase(d, "חד פעמי");
        // mainTable.innerHTML = "";



    } else if (key == 'dusIn' || key == 'dus') {

        var i = numMonth - 2;

        while (i < 11) {

            for (x in month) {

                if (month[x] == i + 2) {
                    var status = "דו חודשי";
                    var newDate = createDates(x, correctDay, correctYear)
                    console.log(newDate);
                    addToDataBase(newDate, status);

                }
            }
            i += 2;
        }

    } else if (key == 'yearlyIn' || key == 'yearly') {

        for (x in month) {
            var status = "שנתי";
            var newDate = createDates(x, correctDay, correctYear)
            console.log(newDate);

            addToDataBase(newDate, status);

        }

    } else if (key == 'flowIn' || key == 'flow') {
        var numpay = 0;
        if (key == 'flowIn') {
            numpay = document.getElementById("flowin").value;
        } else if (key == 'flow') {
            numpay = document.getElementById("flowOut").value;
        }
        console.log(numpay);


        var status = '+ ' + numpay + ' שוטף';
        addToDataBase(d, status);


    } else if (key == 'paymentIn' || key == 'payment') {
        var numpay = "";
        console.log('in');

        if (key == 'paymentIn') {
            var newnumpay = document.getElementById("creditinput").value;
            numpay = newnumpay;
        } else if (key == 'payment') {
            var newnumpay = document.getElementById("creditinputOut").value;
            numpay = newnumpay;
        }

        // var numpay = document.getElementById(P).value;
        console.log(numpay);

        var i = numMonth;
        var j = 0;

        while (j < numpay) {

            for (x in month) {

                if (month[x] == i) {
                    var m = j + 1;
                    var status = numpay + " תשלום " + m + " מתוך ";
                    var newDate = createDates(x, correctDay, correctYear);
                    console.log(newDate, status);

                    addToDataBase(newDate, status);

                }
            }
            i++;
            j += 1;
        }

    }
}


incomingForm.addEventListener('submit', (e) => {

    e.preventDefault();
    var typePayment = "";
    var type_Way_Pay = "";

    group3.forEach(function (y) {
        if (y.checked) {
            var W = y.id;
            if (W == "cashType") {
                type_Way_Pay = "מזומן";
            } else if (W == "cardType") {
                type_Way_Pay = "כרטיס אשראי";
            } else if (W == "cheqType") {
                type_Way_Pay = "צ'ק";
            } else if (W == "transeType") {
                type_Way_Pay = "העברה בנקאית";
            } else if (W == "directDebitType") {
                type_Way_Pay = "הוראת קבע";
            } else if (W == "bitType") {
                type_Way_Pay = "אפליקציית ביט";
            }
        }
        return type_Way_Pay;
    });

    group2.forEach(function (x) {
        if (x.checked) {
            return typePayment = x.id;
        }
    });

    var infoCashIN = incomingForm.value;
    var TypeCashIN = typeIncoming.value;
    var dateCashIN = dateIncome.value;
    var totalCashIN = totalcash.value;

    addDb("in", infoCashIN, TypeCashIN, dateCashIN, totalCashIN, typePayment, type_Way_Pay);

})

outcomingForm.addEventListener('submit', (e) => {

    e.preventDefault();
    var typePaymentout = "";
    var type_Way_Pay = "";

    group4.forEach(function (y) {
        if (y.checked) {
            var W = y.id;
            if (W == "cashTypeOut") {
                type_Way_Pay = "מזומן";
            } else if (W == "cardTypeOut") {
                type_Way_Pay = "כרטיס אשראי";
            } else if (W == "cheqTypeOut") {
                type_Way_Pay = "צ'ק";
            } else if (W == "transeTypeOut") {
                type_Way_Pay = "העברה בנקאית";
            } else if (W == "directDebitTypeOut") {
                type_Way_Pay = "הוראת קבע";
            } else if (W == "bitTypeOut") {
                type_Way_Pay = "אפליקציית ביט";
            }
        }
        return type_Way_Pay;
    });

    group1.forEach(function (x) {
        if (x.checked) {
            if (x.id) {
                return typePaymentout = x.id;
            }
        }

    });

    var infoCashOUT = infoOut.value;
    var TypeCashOUT = typeOut.value;
    var dateCashOUT = dateOut.value;
    var totalCashOUT = totalOut.value;

    addDb("out", infoCashOUT, TypeCashOUT, dateCashOUT, totalCashOUT, typePaymentout, type_Way_Pay);
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
            type: 'out',
            wayPay: "",
            status: ""
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
            type: 'in',
            wayPay: "",
            status: ""
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
        type: '',
        wayPay: "",
        status: ""
    }

    currectCash = currectCash - num;

    updates['/cashflow/' + start_Date] = postdata;
    firebase.database().ref().update(updates);

    updatessetting['/setting/' + 'firstSetting/'] = postdataSetting;
    firebase.database().ref().update(updatessetting);

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
    var check = doc.chashFlow;
    var status = doc.status;
    var wayPay = doc.wayPay;

    let delteboxtd = document.createElement('td');
    let icondelete = document.createElement('i');

    icondelete.setAttribute("class", "material-icons delteicons");
    icondelete.setAttribute("id", "detletrow_" + I);
    icondelete.textContent = "delete";
    let rowtable = document.createElement('tr');
    let TotalCashAfter = document.createElement('td');
    let typeCash = document.createElement('td');
    let DateCash = document.createElement('td');
    let TotalCash = document.createElement('td');
    let icontd = document.createElement('td');
    let typeOfPay = document.createElement('td');
    let conditionPay = document.createElement('td');
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
    icontd.setAttribute("id", 'icontd');
    typeOfPay.setAttribute('id', 'typeOfPay');
    conditionPay.setAttribute('id', 'conditionPay');
    TotalCashAfter.setAttribute('id', 'TotalCashAfter');
    DateCash.setAttribute('id', 'DateCash');
    TotalCash.setAttribute('id', 'TotalCash');

    typeOfPay.textContent = wayPay;
    conditionPay.textContent = status;
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


    icontd.appendChild(icon);
    delteboxtd.appendChild(icondelete);
    rowtable.appendChild(TotalCashAfter);
    rowtable.appendChild(TotalCash);
    rowtable.appendChild(icontd);
    rowtable.appendChild(DateCash);
    rowtable.appendChild(typeOfPay);
    rowtable.appendChild(conditionPay);
    rowtable.appendChild(typeCash);
    rowtable.appendChild(delteboxtd);
    mainTable.appendChild(rowtable);

    icondelete.addEventListener("click", (e) => {

        mainTable.removeChild(rowtable);
        // mainTable.innerHTML = "";
        var datesplit = date.split(" ");
        var newdate = datesplit[0];
        var IdRow = icondelete.getAttribute("id");
        var textSplit = IdRow.split("_");
        var id = textSplit[1];

        database.ref('/cashflow/' + id).remove().then(function () {


        }).catch(function (err) {
        });


        database.ref('/monthly/' + newdate + '/in/' + id).remove().then(function () {
        }).catch(function (err) {
        });

        database.ref('/monthly/' + newdate + '/out/' + id).remove().then(function () {
        }).catch(function (err) {
        });



    });
    if (doc.chashFlow) {

        var array = [];

        database.ref('/cashflow/').child(I).child('/chashFlow/').on('value', function (snapshot) {

            let postArray = snapshot.val();
            let keys = Object.keys(postArray);
            let spanNum = document.createElement("span");

            spanNum.setAttribute("class", "spanNum");
            spanNum.textContent = keys.length;
            typeCash.appendChild(spanNum);
            var newNum = 0;

            for (var i = 0; i < keys.length; i++) {
                var rowid = keys[i];
                var currentObject = postArray[keys[i]];
                var typeDay = currentObject.type;
                var cuurectcashDay = currentObject.totalCash;
                var dateToday = currentObject.date;
                var titlecash = currentObject.title;
                var titlecafter = currentObject.after;
                var way = currentObject.wayPay;
                var st = currentObject.status;

                date = dateToday;
                title = titlecash;
                totalCash = cuurectcashDay;
                type = typeDay;

                console.log(rowid);

                let typeOfPaySub = document.createElement('td');
                let conditionPaySub = document.createElement('td');
                let rowtable = document.createElement('tr');
                let TotalCashAfter = document.createElement('td');
                let typeCash = document.createElement('td');
                let DateCash = document.createElement('td');
                let TotalCash = document.createElement('td');
                let iconsubtd = document.createElement('td');

                let delteboxtd = document.createElement('td');
                let icondelete = document.createElement('i');
                let icon = document.createElement('i');

                icondelete.setAttribute("class", "material-icons delteicons");
                icondelete.setAttribute("id", I + "/detletrow/" + i + "/" + rowid);
                typeOfPaySub.setAttribute('id', 'typeOfPaySub');
                conditionPaySub.setAttribute('id', 'conditionPaySub');
                iconsubtd.setAttribute("id", "iconsubtd");
                icon.setAttribute('class', 'material-icons center');

                icondelete.textContent = "delete";

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

                rowtable.setAttribute('id', I + '_newRow_' + i);
                rowtable.setAttribute('class', 'newSubRow');
                typeCash.setAttribute('id', 'typeCash');
                TotalCashAfter.setAttribute('id', 'TotalCashAfter');
                DateCash.setAttribute('id', 'DateCash');
                TotalCash.setAttribute('id', 'TotalCash');

                DateCash.textContent = date;
                typeCash.textContent = title;
                typeOfPaySub.textContent = way;
                conditionPaySub.textContent = st;
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

                iconsubtd.appendChild(icon);
                delteboxtd.appendChild(icondelete);
                rowtable.appendChild(TotalCashAfter);
                rowtable.appendChild(TotalCash);
                rowtable.appendChild(iconsubtd);
                rowtable.appendChild(DateCash);
                rowtable.appendChild(typeOfPaySub);
                rowtable.appendChild(conditionPaySub);
                rowtable.appendChild(typeCash);
                rowtable.appendChild(delteboxtd);
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

                icondelete.addEventListener('click', (e) => {

                    var idrow = e.target.id;
                    var splitRow = idrow.split("/");
                    var row_Id = splitRow[3];
                    var mainRow = splitRow[0];

                    console.log(row_Id, mainRow);


                    database.ref('/cashflow/' + mainRow + '/chashFlow/' + row_Id).remove().then(function () {

                    }).catch(function (err) {
                    });

                    // go to data base and delete the row 
                    database.ref('/cashflow/').child(mainRow).child('/chashFlow/').on('value', function (snapshot) {

                        let postArray = snapshot.val();
                        let keys = Object.keys(postArray);
                        let length = keys.length;
                        console.log(length);


                        for (var i = 0; i < length; i++) {
                            var id = keys[i];
                            var newArrayCashB = {};
                            var currectObject = postArray[keys[i]];
                            console.log(length, currectObject);
                            console.log(splitRow[3], splitRow[0]);


                            if (length == 1) {

                                // move the other row to main 
                                console.log(id);

                                database.ref('/cashflow/').child(mainRow).child('/chashFlow/').child(id).on('value', function (snapshot) {

                                    let postArray = snapshot.val();
                                    let keys = Object.keys(postArray);
                                    let length = keys.length;
                                    newArrayCashB = postArray;
                                    console.log(newArrayCashB);


                                });

                                console.log(newArrayCashB);
                                firebase.database().ref().child('cashflow').child(mainRow).update({

                                    title: newArrayCashB.title,
                                    date: newArrayCashB.date,
                                    totalCash: newArrayCashB.totalCash,
                                    type: newArrayCashB.type,
                                    after: newArrayCashB.after,
                                    time: newArrayCashB.time,
                                    numTime: newArrayCashB.numTime,
                                    wayPay: newArrayCashB.wayPay,
                                    status: newArrayCashB.status


                                });

                                database.ref('/cashflow/' + mainRow + '/chashFlow/').remove().then(function () {

                                }).catch(function (err) {
                                });


                            } else if (length > 2) {

                                // monthly and sub the row 

                                // delete the row 

                            }

                        }




                    });
                    // if there is a 1 in length delete it and move to main 

                    // if there is 2 and more go to monyhtly and add or subscr to month 





                });



            }


            console.log(keys.length);

            var getRow = document.getElementById("newRow-" + I).getElementsByTagName('td')[1];
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

                    var row = document.getElementById(I + "_newRow_" + i);
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
    // mainTable.innerHTML = "";

}

function loadIncomingOut(m) {

    var I = 0;
    var O = 0;

    for (var i = 0; i < m.length; i++) {
        O += m[i][1];
        I += m[i][2];
    }

    incoming.textContent = formatNumber(I);
    var formatNum = O.toString().split('-');
    outcoming.textContent = formatNumber(O);

    var balnaceSum = Number(I) - Number(formatNum[1]);
    balance.textContent = formatNumber(balnaceSum);

    var foramtBalance = balnaceSum.toString().split(" ");
    if (foramtBalance[0] == "-") {
        balance.style.color = "red";
    } else {
        balance.style.color = "#00cc00";
    }

}

var currectLimit = '';


//render from Data Base//


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


database.ref('/cashflow/').orderByChild('number').on('value', function (snapshot) {

    let postArray = snapshot.val();
    let keys = Object.keys(postArray);

    let array = [];
    var newDate = new Date();

    let dataFinal = [[]];

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

        var newnum = Status.innerText;
        var splitnum = newnum.split(' ');

        if (splitnum[0] >= 0) {
            Status.style.color = '#00cc00';
            box.style.background = "#E6E6E6";
        } else {
            Status.style.color = 'red';
            box.style.background = "#E6E6E6";
        }

        let totalin = 0;
        let totalout = 0;

        if (i == 0) {

            StatusCash = Number(currectnum);
            firebase.database().ref().child('cashflow').child(id).update({
                after: StatusCash
            });

        } else if (i > 0 && cashF !== undefined) {

            database.ref('/cashflow/').child(id).child('chashFlow').orderByChild('number').on('value', function (snapshot) {

                let postArray = snapshot.val();
                let keys = Object.keys(postArray);

                for (var j = 0; j < keys.length; j++) {

                    var uid = keys[j];
                    var currentObject = postArray[keys[j]];
                    var newtype = currentObject.type;

                    if (newtype == 'in') {

                        totalin += Number(currentObject.totalCash);

                    } else if (newtype == 'out') {

                        totalout -= Number(currentObject.totalCash);
                        StatusCash = Number(previus) - Number(currectnum);

                    }

                }

            });

            if (type == 'in') {
                StatusCash = Number(currectnum) + Number(previus);
            } else if (type == 'out') {

            }

            firebase.database().ref().child('cashflow').child(id).update({
                after: StatusCash
            });

        } else if (i > 0 && type == 'out' && cashF == undefined) {

            totalOut -= currectnum;
            StatusCash = Number(previus) - Number(currectnum);
            firebase.database().ref().child('cashflow').child(id).update({
                after: StatusCash
            });

        } else if (i > 0 && type == 'in' && cashF == undefined) {

            totalIncome += currectnum;
            StatusCash = Number(currectnum) + Number(previus);

            firebase.database().ref().child('cashflow').child(id).update({
                after: StatusCash
            });

        }

        var titledate = date.split(" ");

        totalOut += totalout;
        totalIncome += totalin;

        laodUpData(id, currentObject, StatusCash, currectLimit);

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

});


database.ref('/monthly/').on('value', function (snapshot) {

    let postArray = snapshot.val();
    let keys = Object.keys(postArray);
    let final = [];
    let chartmap = [];
    var newdate = new Date();
    var splitmonth = newdate.toString().split(" ");
    var month = splitmonth[1];

    for (var i = 0; i < keys.length; i++) {

        var id = keys[i];

        database.ref('/monthly/').child(id).on('value', function (snapshot) {

            let postArray = snapshot.val();
            let keys = Object.keys(postArray);

            let cIn = [];
            let Cout = [];
            var countin = 0;
            var countout = 0;
            for (var i = 0; i < keys.length; i++) {

                var type = keys[i];

                database.ref('/monthly/').child(id).child(type).on('value', function (snapshot) {
                    let postArray = snapshot.val();
                    let keys = Object.keys(postArray);

                    for (var i = 0; i < keys.length; i++) {

                        var obg = postArray[keys[i]];

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
                        final = [id, Cout, cIn];
                    }
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

    google.charts.load('current', { 'packages': ['bar'] });
    google.charts.load('current', { 'packages': ['bar'] });
    google.charts.load('current', { 'packages': ['bar'] });

    google.charts.setOnLoadCallback(drawStuff(chartmap), drawVisualization(chartmap), drawChart(chartmap));
    // google.charts.setOnLoadCallback(drawVisualization(chartmap));
    google.charts.setOnLoadCallback();

});



function drawChart(m) {
    console.log(m);

    var data = google.visualization.arrayToDataTable([
        ['month', '', ''],
        ['Jun', 1000, 400]
    ]);

    var newdate = new Date();
    var splitmonth = newdate.toString().split(" ");
    var month = splitmonth[1];
    currectmonth = m[0];
    console.log(m);

    if (month == currectmonth) {

        data.hg.forEach(function (row) {
            row.c[0].v = x[0];
            row.c[1].v = x[1];
            row.c[2].v = x[2];
        });
    }
    console.log(data);


    var options = {
        width: 340,
        vAxis: { viewWindow: { max: 1000 } },
        hAxis: { title: 'Month' },
        seriesType: 'bars',
        series: { 0: { color: 'red' }, 1: { color: '#00cc00' } }
    };


    var chart = new google.visualization.ComboChart(document.getElementById('barchart_material'));
    chart.draw(data, options);
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
        });

    });

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