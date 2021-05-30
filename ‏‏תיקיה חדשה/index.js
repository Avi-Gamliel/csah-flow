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
var yearly = document.getElementById("yearly");
var monthly = document.getElementById("monthly");
var daily = document.getElementById("daily");
const table_week = document.getElementById("table_week");
const tableWeek = document.getElementById("tableWeek");
var selectIncoming = document.getElementById("selectIncoming");

var totalYear = document.getElementById("totalYear");
var CashLoan = document.getElementById("CashLoan");
var infoLoan = document.getElementById("infoLoan");
var bankType = document.getElementById("bankType");
var startLoan = document.getElementById("startLoan");
var addNewLoanBtn = document.getElementById("addNewLoanBtn");

const loanForm = document.getElementById("loanForm");
const containerLoan = document.getElementById("containerLoan");

function addCorrectDayToInput(w) {
    var date = new Date();
    var string = date.toString();
    var splitDate = string.split(" ");
    var newDate = splitDate[1] + " " + splitDate[2] + ", " + splitDate[3];

    document.getElementById(w).value = newDate;
}


//***************** Model Dom Materialz  **************//

document.addEventListener('DOMContentLoaded', function () {

    var elems = document.querySelectorAll('.modal');
    var elemselect = document.querySelectorAll('select');
    var elemsdatepicker = document.querySelectorAll('.datepicker');
    var elemssidenav = document.querySelectorAll('.sidenav');
    var elemsdate = document.querySelectorAll('.date');
    var el = document.querySelectorAll('.tab');
    var elemss = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elemss);
    M.Tabs.init(el);

    M.Datepicker.init(elemsdatepicker);
    M.Datepicker.init(elemsdate);
    M.Sidenav.init(elemssidenav);
    M.FormSelect.init(elemselect);
    M.Modal.init(elems);

});

function formatNumber(num) {

    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

}

function convertFlow(x) {
    return num = x / 30;
}
auth.onAuthStateChanged(user => {
    if (user) {
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

        //***************** function help  **************//

        function aotucomplete() {
            var textOut = {};
            var textIn = {};
            database.ref('/setting/text/').on('value', function (snapshot) {


                let postArray = snapshot.val();
                let keys = Object.keys(postArray);

                for (var i = 0; i < keys.length; i++) {
                    var id = keys[i];
                    if (id == 'in') {
                        database.ref('/setting/text/in').on('value', function (snapshot) {
                            let postArrayin = snapshot.val();
                            let keysin = Object.keys(postArrayin);

                            for (var j = 0; j < keysin.length; j++) {
                                var x = postArrayin[keysin[j]].word;
                                textIn[x] = null;

                            }

                        });

                    } else if (id == 'out') {
                        database.ref('/setting/text/out').on('value', function (snapshot) {
                            let postArrayout = snapshot.val();
                            let keysout = Object.keys(postArrayout);
                            for (var j = 0; j < keysout.length; j++) {
                                var y = postArrayout[keysout[j]].word;
                                textOut[y] = null;
                            }
                        });

                    }
                }




            });

            var autocomplete = document.getElementById('typeIncoimg');
            M.Autocomplete.init(autocomplete, { data: textIn });
            var autocompleteout = document.getElementById('typeOut');
            M.Autocomplete.init(autocompleteout, { data: textOut });
        }

        aotucomplete();


        //*************** add keyword  ****************//

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




        //**************** setting  ***************//

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
            var contain = startnPoint.includes("-");
            var currectCash = 0;
            if (contain == true) {

                let postdata = {
                    title: "התחלה",
                    date: startDate,
                    totalCash: Number(startnPoint),
                    after: Number(startnPoint),
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
                    totalCash: Number(startnPoint),
                    after: Number(startnPoint),
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



        var mainArray = [];

        // couple time in the code cheeck to make afunction out
        var correctday = new Date().toString();
        var split = correctday.split(" ");
        var dayCorrect = split[2];
        var monthCorrect = split[1];
        var corectYear = split[3];
        var new_Date = split[1] + " " + split[2] + ", " + split[3];
        var num_newdate = Date.parse(new_Date);



        //**************** add income / outcome ***************//

        function addDb(Type, i, t, d, c, P, W) {
            console.log(Type, i, t, d, c, P, W);

            var corMonth = d.split(" ");
            var correctMonth = corMonth[0];
            var correctDay = corMonth[1];
            var correctYear = corMonth[2];
            var numMonth = month[correctMonth];
            var key = P.toString();

            function addToDataBase(date, s) {

                var TypeCash = t;
                var totalCash = c;
                var time = new Date();
                var dateCashNum = Date.parse(date);
                var timeNum = Date.parse(time);
                var numDataCorrect = '';
                let numExpends = 0;
                var newArrayCash = {};

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

                    database.ref('/cashflow/').child(dateCashNum).child('chashFlow').on('value', function (snapshot) {

                        let postArray = snapshot.val();
                        let keys = Object.keys(postArray);
                        numExpends = keys.length;
                        console.log(numExpends);

                    });
                    if (numExpends == 0) {

                        database.ref('/cashflow/').child(dateCashNum).on('value', function (snapshot) {

                            let postArray = snapshot.val();
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
                }

                totalcash.value = '';
                dateIncome.value = '';
                typeIncoming.value = '';
                incomingForm.value = '';
                totalOut.value = '';
                dateOut.value = '';
                typeOut.value = '';
                infoOut.value = '';
                mainTable.innerHTML = "";

            }

            function createDates(m, d, y) {
                var newdate = m + " " + d + " " + y;
                var newdataString = newdate.toString();
                return newdataString;
            }

            if (key == 'onceIn' || key == 'once') {

                addToDataBase(d, "חד פעמי");

            } else if (key == 'dusIn' || key == 'dus') {

                var i = numMonth - 2;

                while (i < 11) {

                    for (x in month) {

                        if (month[x] == i + 2) {
                            var status = "דו חודשי";
                            var newDate = createDates(x, correctDay, correctYear)
                            addToDataBase(newDate, status);

                        }
                    }
                    i += 2;
                }

            } else if (key == 'yearlyIn' || key == 'yearly') {

                for (x in month) {
                    var status = "שנתי";
                    var newDate = createDates(x, correctDay, correctYear);
                    addToDataBase(newDate, status);

                }

            } else if (key == 'flowIn' || key == 'flow') {
                var numpay = 0;
                if (key == 'flowIn') {
                    numpay = document.getElementById("flowin").value;
                } else if (key == 'flow') {
                    numpay = document.getElementById("flowOut").value;
                }
                var status = '+ ' + numpay + ' שוטף';
                addToDataBase(d, status);


            } else if (key == 'paymentIn' || key == 'payment') {

                var numpay = "";

                if (key == 'paymentIn') {
                    var newnumpay = document.getElementById("creditinput").value;
                    numpay = newnumpay;
                } else if (key == 'payment') {
                    var newnumpay = document.getElementById("creditinputOut").value;
                    numpay = newnumpay;
                }

                var i = numMonth;
                var j = 0;

                while (j < numpay) {
                    for (x in month) {
                        if (month[x] == i) {
                            var m = j + 1;
                            var status = numpay + " תשלום " + m + " מתוך ";
                            var newDate = createDates(x, correctDay, correctYear);
                            addToDataBase(newDate, status);
                        }
                    }
                    i++;
                    j += 1;
                }

            }
        }

        loanForm.addEventListener('submit', (e) => {
            e.preventDefault();
            var infoLoanVal = infoLoan.value;
            var bankTypeVal = bankType.value;
            var CashLoanVal = "-" + CashLoan.value;
            var totalYearVal = totalYear.value;
            var startLoanVal = startLoan.value;


            console.log(infoLoanVal, bankTypeVal, CashLoanVal, totalYearVal, startLoanVal);
            var splitDate = startLoanVal.toString().split(" ");
            var monthb = splitDate[0];
            var day = splitDate[1];
            var year = splitDate[2];

            console.log(month, year, "<>", monthCorrect, corectYear);

            console.log();

            // calculate per month 

            // num of month 
            var sumPay = 0;
            var countMOnth = totalYearVal * 12;
            var monthPay = 0
            console.log(countMOnth);

            // how much to pay 

            var sum = CashLoanVal / countMOnth;
            var fixSum = sum.toFixed(0);

            // how much the pay 

            if (year < corectYear) {

                monthPay = 12 - month[monthb];
                sumPay = monthPay * fixSum;
                left = CashLoanVal - sumPay;

            }

            var correctYearcash = 12 * fixSum;
            var totalleft = CashLoanVal - sumPay - correctYearcash;

            var leftyear = totalleft / fixSum / 12;
            var correctleftYear = leftyear.toFixed(1);

            let newP = firebase.database().ref().child('loan').push().key;
            let newu = {};
            let pos = {

                title: bankTypeVal,
                info: infoLoanVal,
                numYear: totalYearVal,
                startdate: startLoanVal,
                totalCash: CashLoanVal,
                monthlyPay: fixSum

            }

            newu['/loan/' + newP] = pos;
            firebase.database().ref().update(newu);

            for (var x in month) {
                var loandate = x + " " + day + " " + corectYear;
                var TypeCashLoan = 'הלוואה';
                var typePaymentloan = "הוראת קבע";
                var type_Way_Pay_laon = infoLoanVal + " הלוואה ";
                var title = bankTypeVal + " בנק ";
                console.log("out", infoLoanVal, title, loandate, fixSum, 'yearly', type_Way_Pay_laon);



                addDb("out", infoLoanVal, title, loandate, fixSum, 'yearly', type_Way_Pay_laon);
                // send to database
            }








        })

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
            var totalCashOUT = '-' + totalOut.value;

            addDb("out", infoCashOUT, TypeCashOUT, dateCashOUT, totalCashOUT, typePaymentout, type_Way_Pay);
        });


        //**************** Load Data and make the Tables ***************//

        function laodUpData(I, doc, S, A, pr) {

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
                TotalCash.textContent = formatNumber(totalCash) + ' ש"ח ';
            } else if (type == 'out') {
                icon.setAttribute('id', 'downArrow');
                icon.textContent = 'arrow_downward';
                TotalCash.style.color = '#ff3d67';
                TotalCash.textContent = formatNumber(totalCash) + ' ש"ח ';
            }
            console.log(I);

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
            TotalCashAfter.textContent = formatNumber(pr) + ' ש"ח ';
            if (I == num_newdate) {
                rowtable.style.backgroundColor = "  rgba(255, 206, 86, 0.2)";
            }
            var newLine = 0 - A;
            var sumNum = A + pr;

            if (pr < newLine) {
                let spanTitle = document.createElement('span');
                spanTitle.setAttribute('id', 'spanTitle');
                spanTitle.textContent = formatNumber(sumNum) + " " + "חריגה";
                TotalCashAfter.appendChild(spanTitle);
                TotalCashAfter.style.color = '#ff3d67';
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
                        var way = currentObject.wayPay;
                        var st = currentObject.status;

                        date = dateToday;
                        title = titlecash;
                        totalCash = cuurectcashDay;
                        type = typeDay;

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
                            TotalCash.textContent = totalCash + ' ש"ח ';
                            TotalCash.style.color = '##50dd50';

                        } else if (type == 'out') {
                            icon.setAttribute('id', 'downArrow');
                            icon.textContent = 'arrow_downward';
                            TotalCash.style.color = '#ff3d67';
                            TotalCash.textContent = totalCash + ' ש"ח ';
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
                        console.log(S);

                        if (S < newLine) {
                            let spanTitle = document.createElement('span');
                            spanTitle.setAttribute('id', 'spanTitle');
                            spanTitle.textContent = sumNum + " " + "חריגה";
                            TotalCashAfter.appendChild(spanTitle);
                            TotalCashAfter.style.color = '#ff3d67';
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
                            newNum = Number(newNum) + Number(array[i]);
                        }

                        icondelete.addEventListener('click', (e) => {

                            var idrow = e.target.id;
                            var splitRow = idrow.split("/");
                            var row_Id = splitRow[3];
                            var mainRow = splitRow[0];

                            database.ref('/cashflow/' + mainRow + '/chashFlow/' + row_Id).remove().then(function () {

                            }).catch(function (err) {
                            });


                            database.ref('/cashflow/').child(mainRow).child('/chashFlow/').on('value', function (snapshot) {

                                let postArray = snapshot.val();
                                let keys = Object.keys(postArray);
                                let length = keys.length;

                                for (var i = 0; i < length; i++) {

                                    var id = keys[i];
                                    var newArrayCashB = {};

                                    if (length == 1) {

                                        database.ref('/cashflow/').child(mainRow).child('/chashFlow/').child(id).on('value', function (snapshot) {

                                            let postArray = snapshot.val();
                                            let keys = Object.keys(postArray);
                                            let length = keys.length;
                                            newArrayCashB = postArray;

                                        });

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


                                    }

                                }

                            });

                        });

                    }

                    var getRow = document.getElementById("newRow-" + I).getElementsByTagName('td')[1];
                    getRow.innerText = newNum + ' ש"ח ';

                    if (newNum < 0) {
                        database.ref('/cashflow/').child(I).update({
                            totalCash: newNum,
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

        }




        function laodUpWeekData(I, doc, S, A, pr) {

            var date = doc.date;
            var splitedate = date.split(" ");
            var cornum = splitedate[1].split(",");
            var numd = cornum[0];
            var totalCash = doc.totalCash;
            var type = doc.type;
            var title = doc.title;
            var check = doc.chashFlow;
            var wayPay = doc.wayPay;
            var limit = Number(dayCorrect) + 7;

            if (numd > dayCorrect && numd < limit && splitedate[0] == monthCorrect) {

                if (check) {

                    var id = Object.keys(check);
                    var length = id.length;

                    for (var i = 0; i < length; i++) {
                        var uid = id[i];
                        var val = doc.chashFlow[uid];
                        var subdate = val.date;
                        var tototalcash = val.totalCash;
                        var subtitle = val.title;
                        var subtype = val.type;
                        var subwayPay = val.wayPay;
                        mainArray.push([subdate, subtitle, subtype, subwayPay, tototalcash]);
                    }

                }

                if (!check) {
                    mainArray.push([date, title, type, wayPay, totalCash]);
                }

                tableWeek.innerHTML = "";

                for (var i = 0; i < mainArray.length; i++) {

                    let row = document.createElement('tr'); // row
                    let colDate = document.createElement('td'); // column
                    let colTitle = document.createElement('td'); // column
                    let colWay = document.createElement('td'); // column
                    let colCash = document.createElement('td'); // column
                    let statusbox = document.createElement('td'); // column
                    let status_i = document.createElement('i'); // column

                    status_i.setAttribute('class', 'material-icons center');
                    row.setAttribute("id", "row_" + I);
                    colDate.setAttribute("class", "center");
                    colTitle.setAttribute("class", "center");
                    colWay.setAttribute("class", "center");
                    colCash.setAttribute("class", "center");

                    let date = mainArray[i][0];
                    let title = mainArray[i][1];
                    let type = mainArray[i][2];
                    let way = mainArray[i][3];
                    let cash = mainArray[i][4];

                    if (type == 'out') {

                        status_i.setAttribute('id', 'arrow_downward');
                        status_i.textContent = 'arrow_downward';
                        colCash.style.color = '#ff3d67';

                    } else if (type == "in") {
                        status_i.setAttribute('id', 'arrow_upward');
                        status_i.textContent = 'arrow_upward';
                        colCash.style.color = '#50dd50';

                    }

                    colDate.textContent = date;
                    colTitle.textContent = title;
                    colWay.textContent = way;
                    colCash.textContent = cash + ' ש"ח';

                    statusbox.appendChild(status_i);
                    row.appendChild(colCash);
                    row.appendChild(statusbox);
                    row.appendChild(colWay);
                    row.appendChild(colTitle);
                    row.appendChild(colDate);
                    tableWeek.appendChild(row);

                }

            }


            // mainTable.innerHTML = "";

        }
        function loadIncomingOut(m) {

            let ils = document.createElement("span");
            ils.setAttribute("id", "ils");

            var I = 0;
            var O = 0;

            for (var i = 0; i < m.length; i++) {
                O += m[i][1];
                I += m[i][2];
            }

            incoming.textContent = formatNumber(I) + ' ש"ח ';
            outcoming.textContent = formatNumber(O) + ' ש"ח ';

            var balnaceSum = I - O;

            balance.textContent = formatNumber(balnaceSum) + ' ש"ח ';

            if (balnaceSum < 0) {
                balance.style.color = "#ff3d67";
            } else {
                balance.style.color = "#50dd50";
            }

        }

        var currectLimit = '';


        //**************** Load setting value and return limit ***************//

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

        //**************** Load from data base and load the Tables ***************//

        database.ref('/cashflow/').orderByChild('number').on('value', function (snapshot) {

            mainTable.innerHTML = "";

            let postArray = snapshot.val();
            let keys = Object.keys(postArray);
            let array = [];
            var newDate = new Date();
            let spanOver = document.createElement('span');

            overmas.appendChild(spanOver);

            var arrayafter = 0;
            var StatusCash = 0;

            for (var i = 1; i < keys.length + 1; i++) {

                let totalIncome = 0;
                let totalOut = 0;
                var id = keys[i];
                var currentObject = postArray[id];
                var currectnum = currentObject.totalCash;
                arrayafter += currectnum;
                let totalin = 0;
                let totalout = 0;
                var cashF = currentObject.chashFlow;
                var type = currentObject.type;
                var date = currentObject.date;
                var splitDate = date.split(" ");
                var newdateParse = Date.parse(date);
                var subdate = Date.parse(newDate);

                if (subdate > newdateParse) {

                    Status.textContent = formatNumber(arrayafter) + ' ש"ח ';
                    currectCash.textContent = formatNumber(arrayafter) + ' ש"ח ';
                    var newBalance = Number(arrayafter);

                    if (newBalance < 0) {

                        var sum = Number(currectLimit) + newBalance;
                        LiquidCash.style.color = '#ff3d67';
                        LiquidCash.textContent = formatNumber(sum) + ' ש"ח ';
                        currectCash.style.color = '#ff3d67';
                        statusIcons.textContent = ' arrow_downward';
                        statusIcons.style.color = '#ff3d67';
                        statusIconsLiq.textContent = 'arrow_downward';
                        statusIconsLiq.style.color = '#ff3d67';
                        var new_num = "-" + currectLimit;

                        if (newBalance < Number(new_num)) {

                            spanOver.setAttribute("id", "over");
                            spanOver.textContent = "  חריגה ";
                            massage.textContent = '!שים לב אתה בחריגה בחשבון';
                            massage.style.color = '#ff3d67';

                        }

                    } else {

                        var sum = Number(currectLimit) + newBalance;
                        LiquidCash.style.color = '#4ac0c0';
                        LiquidCash.textContent = formatNumber(sum) + ' ';
                        currectCash.style.color = '#4ac0c0';
                        statusIcons.textContent = ' arrow_upward';
                        statusIcons.style.color = '#4ac0c0';
                        statusIconsLiq.textContent = 'arrow_upward';
                        statusIconsLiq.style.color = '#4ac0c0';
                        massage.textContent = '!עבודה מעולה';
                        massage.style.color = '#4ac0c0';

                    }

                } else {
                }

                var newnum = Status.innerText;
                var splitnum = newnum.split(' ');

                if (splitnum[0] >= 0) {
                    Status.style.color = '#4ac0c0';
                    box.style.background = "#E6E6E6";
                } else {
                    Status.style.color = 'red';
                    box.style.background = "#E6E6E6";
                }


                if (i > 0 && type == 'out') {

                    totalOut -= currectnum;

                } else if (i > 0 && type == 'in') {

                    totalIncome += currectnum;

                }

                var titledate = date.split(" ");

                totalOut += totalout;
                totalIncome += totalin;

                laodUpData(id, currentObject, StatusCash, currectLimit, arrayafter);
                laodUpWeekData(id, currentObject, StatusCash, currectLimit, arrayafter);

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

        let MainArray = [[]];

        database.ref('/loan/').on('value', function (snap) {


            var new_Date = new Date();
            var stringB = new_Date.toString();
            var split__Date = stringB.split(" ");
            // var new_Date = split_Date[1] + " " + split_Date[2] + ", " + split_Date[3];
            var month_Today = split__Date[1];
            var year_Today = split__Date[3];
            console.log(year_Today);

            let postArr = snap.val();
            let keysArr = Object.keys(postArr);
            var arr = [];
            var title = "";

            for (var i = 0; i < keysArr.length; i++) {
                var uid = keysArr[i];
                var monthPay = postArr[uid].monthlyPay;
                var dateStart = postArr[uid].startdate;
                var cashloan = postArr[uid].monthlyPay;
                var totalLoan = postArr[uid].totalCash;

                var infoloan = postArr[uid].info;

                var numYear = postArr[uid].numYear;
                //duplicate
                var splitD = dateStart.split(" ");
                var splittotal = totalLoan.split("-");

                var monthlypay = cashloan.split("-");
                var monthly_pay = monthlypay[1];
                var total_cash = splittotal[1];
                var m = splitD[0];
                var d = splitD[1];
                var y = splitD[2];
                console.log(m, d, y);
                var totalMonth = numYear * 12;
                console.log(totalMonth);
                console.log(y);

                var sumyear = year_Today - y - 1;
                var sum_year = sumyear * 12;

                var firstYear = 12 - month[m];

                var monththisYear = month[month_Today];

                var totalmonth = monththisYear + firstYear + sum_year;

                console.log("strat = ", totalMonth - totalmonth, "end = ", totalmonth);
                arr.push([infoloan, totalMonth - totalmonth, totalmonth, monthly_pay, total_cash]);

            }
            // console.log(arr[0][0]);

            arr.forEach(snap => {
                console.log(snap);

                // until today pay 

                var payuntilToday = snap[2] * Number(snap[3]);
                console.log(payuntilToday);

                //precent

                var precentNum = payuntilToday / Number(totalLoan) * 100;

                var total_month = snap[1] + snap[2];
                // left to pay 

                var left_pay = Number(snap[4]) - payuntilToday;

                console.log("pay =", payuntilToday, "left = ", left_pay);

                let container = document.createElement('div');
                let title_loan = document.createElement('h6');
                let progress_box = document.createElement('div');
                let prograss_track = document.createElement('div');
                let prograss_fill = document.createElement('div');
                let precent = document.createElement('span');

                let boxText = document.createElement('div');

                let paybox = document.createElement('div');
                let title_paybox = document.createElement('h6');
                let p_paybox = document.createElement('p');

                let monthbox = document.createElement('div');
                let title_monthbox = document.createElement('h6');
                let p_monthbox = document.createElement('p');

                let leftPaybox = document.createElement('div');
                let title_leftPaybox = document.createElement('h6');
                let p_leftPaybox = document.createElement('p');


                container.setAttribute("id", "loan");
                title_loan.setAttribute("class", "right");
                progress_box.setAttribute("class", "progress-bar horizontal");
                prograss_track.setAttribute("class", "progress-track")
                prograss_fill.setAttribute("class", "progress-fill");

                boxText.setAttribute("class", "row col s12");

                paybox.setAttribute("class", "col s4");
                title_paybox.setAttribute("class", "center");
                title_paybox.setAttribute("id", "titleProgreesLeftcash");
                p_paybox.setAttribute("class", "center");
                p_paybox.setAttribute("id", "totalMonthLoan");


                monthbox.setAttribute("class", "col s4");
                title_monthbox.setAttribute("class", "center");
                title_monthbox.setAttribute("id", "monthleft");
                p_monthbox.setAttribute("class", "center");
                p_monthbox.setAttribute("id", "totalMonthLoan");


                leftPaybox.setAttribute("class", "col s4");
                title_leftPaybox.setAttribute("class", "center");
                title_leftPaybox.setAttribute("id", "titleProgreescash");
                p_leftPaybox.setAttribute("class", "center");
                p_leftPaybox.setAttribute("id", "totalCashLoan");

                //set value
                title_loan.textContent = " הלוואה " + snap[0];
                precent.textContent = Math.abs(precentNum) + "%";

                title_paybox.textContent = "נשאר לתשלום";
                p_paybox.textContent = left_pay;


                title_monthbox.textContent = snap[2];
                p_monthbox.textContent = "מתוך - " + total_month;

                title_leftPaybox.textContent = " שולם " + payuntilToday;

                p_leftPaybox.textContent = "מתוך - " + Number(snap[4]);




                progress_box.appendChild(prograss_track);
                prograss_track.appendChild(prograss_fill);
                prograss_fill.appendChild(precent);


                paybox.appendChild(title_paybox);
                paybox.appendChild(p_paybox);

                monthbox.appendChild(title_monthbox);
                monthbox.appendChild(p_monthbox);

                leftPaybox.appendChild(title_leftPaybox);
                leftPaybox.appendChild(p_leftPaybox);


                boxText.appendChild(paybox);
                boxText.appendChild(monthbox);
                boxText.appendChild(leftPaybox);



                container.appendChild(title_loan);
                container.appendChild(progress_box);
                container.appendChild(boxText);


                containerLoan.appendChild(container);


            });


        });

        var labelx = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var labely = [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]];
        var in_out = [];
        var obj = { arr: [] };
        // chart();
        charttype();
        chartTable();
        // chartThisMonth();
        // const database = firebase.database();
        async function charttype() {
            var ele = document.getElementById("btnchartCash");
            var MainArray = [];

            database.ref('/cashflow/').orderByChild('number').on('value', function (snapshot) {

                let postArray = snapshot.val();
                let keys = Object.keys(postArray);

                // let totalOut = [];
                function getMonth(x) {

                    var splitDate = x.split(" ");
                    var currectDate = splitDate[0];

                    return currectDate;
                }

                for (var i = 0; i < keys.length; i++) {

                    var id = keys[i];
                    var currentObject = postArray[id];
                    var new_date = currentObject.date;
                    var y = getMonth(new_date);
                    var title = currentObject.title;
                    var trimTitle = title.trim();
                    var typePay = currentObject.wayPay;
                    var in_out = currentObject.type;
                    var cash = currentObject.totalCash;

                    MainArray.push([y, trimTitle, in_out, typePay, cash, new_date]);

                    if (title == "פעילות מרובה") {

                        database.ref('/cashflow/').child(id).child('/chashFlow/').on('value', function (newsnapshot) {

                            let newpostArray = newsnapshot.val();
                            let newkeys = Object.keys(newpostArray);

                            for (var j = 0; j < newkeys.length; j++) {

                                var newid = newkeys[j];

                                database.ref('/cashflow/').child(id).child('/chashFlow/').child(newid).on('value', function (snap) {

                                    var val = snap.val();
                                    var date_new = val.date;
                                    var z = getMonth(date_new);
                                    var type = val.wayPay;
                                    var totalcash = val.totalCash;
                                    var inOrOut = val.type;
                                    var titleSub = val.title;

                                    MainArray.push([z, titleSub, inOrOut, type, totalcash, date_new]);

                                });

                            }

                        });

                    }

                }

                console.log(MainArray);

                var checkarray = [];
                var sumArray = [];
                var month_Array = [];

                var newDate = new Date();
                var string = newDate.toString();
                var split_Date = string.split(" ");
                var new_Date = split_Date[1] + " " + split_Date[2] + ", " + split_Date[3];
                var monthToday = split_Date[1];
                var yearToday = split_Date[3];
                console.log(yearToday);


                var numToday = Date.parse(new_Date);

                var today = [];
                var years = [];
                var months = [];

                for (var i = 1; i < MainArray.length; i++) {

                    var monthCorrect = MainArray[i][0].trim();
                    var title = MainArray[i][1].trim();
                    var correctday = MainArray[i][5].trim();
                    var dayNum = Date.parse(correctday);
                    var payWay = MainArray[i][3].trim();
                    var in_out_2 = MainArray[i][2].trim();
                    var cash = MainArray[i][4];
                    var sum = 0;
                    var sumMonth = 0;

                    var in__Out = "";
                    // console.log(MainArray);

                    if (in_out_2 == 'out') {

                        for (var j = 1; j < MainArray.length; j++) {

                            var title2 = MainArray[j][3].trim();
                            in__Out = MainArray[j][2].trim();

                            if (payWay == title2 && MainArray[j][2] == 'out' && MainArray[j][2] == MainArray[i][2]) {

                                sum += MainArray[j][4];

                            }

                            if (MainArray[j][0] == MainArray[i][0] && payWay == title2 && MainArray[j][2] == 'out' && MainArray[j][2] == MainArray[i][2]) {

                                sumMonth += MainArray[j][4];

                            }


                        }

                        if (checkarray.indexOf(payWay) == -1) {

                            checkarray.push(payWay);
                            sumArray.push([payWay, sum]);
                            if (monthToday == monthCorrect) {

                                // checkarray.push(payWay);
                                month_Array.push([payWay, sumMonth]);
                            }
                        }


                    }
                    // console.log(month_Array); // monthly 

                    // console.log(sumArray); // yearly 
                    // console.log(in_out, title2, sum, MainArray[i][4]);

                    var trueData = '';





                }

                console.log(sumArray);
                console.log(month_Array);



                var donutchart = document.getElementById('donutchart');
                var nameArray = [];
                var totalArray = [];
                month_Array.forEach(element => {
                    console.log(element)
                    if (element[0] !== "") {
                        nameArray.push(element[0]);
                        totalArray.push(element[1]);
                        console.log(element)
                    }
                });
                console.log(totalArray, nameArray);
                // Chart.defaults.global.maintainAspectRatio = false;
                var optionspei = {
                    responsive: true,
                    maintainAspectRatio: false,
                    padding: 2,
                    aspectRatio: 2,
                    layout: {
                        padding: {
                            left: 20,
                            right: 20,
                            top: 20,
                            bottom: 20
                        }
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            ticks: {
                                suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                // OR //
                                beginAtZero: true   // minimum value will be 0.
                            }
                        }]
                    },
                    "animation": {
                        "duration": 1,
                        "onComplete": function () {
                            var chartInstance = this.chart,
                                ctx = chartInstance.ctx;

                            ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'bottom';

                            this.data.datasets.forEach(function (dataset, i) {
                                var meta = chartInstance.controller.getDatasetMeta(i);
                                meta.data.forEach(function (bar, index) {
                                    var data = dataset.data[index];
                                    ctx.fillText(data, bar._model.x, bar._model.y - 5);
                                });
                            });
                        }
                    },


                }
                data = {
                    datasets: [{
                        data: totalArray,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }],

                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    labels: nameArray

                };
                var myDoughnutChart = new Chart(donutchart, {
                    type: 'horizontalBar',
                    data: data,
                    options: optionspei
                });

            });
            // var donutchat = document.getElementById('chartLoan_div');


        }
        async function chartTable() {

            database.ref('/monthly/').on('value', function (snapshot) {

                var dataMonth = [
                    ['Jan', 0],
                    ['Feb', 0],
                    ['Mar', 0],
                    ['Apr', 0],
                    ['May', 0],
                    ['Jun', 0],
                    ['Jul', 0],
                    ['Aug', 0],
                    ['Sep', 0],
                    ['Oct', 0],
                    ['Nov', 0],
                    ['Dec', 0]
                ];
                let postArray = snapshot.val();
                let keys = Object.keys(postArray);

                let chartmap = [];
                var newdate = new Date();
                var splitmonth = newdate.toString().split(" ");
                var month = splitmonth[1];
                // console.log(keys.length);

                for (var i = 0; i < keys.length; i++) {

                    var id = keys[i];
                    let incomingB = 0;
                    let outcomngB = 0;

                    database.ref('/monthly/').child(id).on('value', function (snapshot) {

                        let postArray = snapshot.val();
                        let newkeys = Object.keys(postArray);
                        console.log(newkeys.length);
                        let cIn = [];
                        let Cout = [];
                        var countin = 0;
                        var countout = 0;
                        let final = [];
                        for (var i = 0; i < newkeys.length; i++) {

                            var type = newkeys[i];

                            database.ref('/monthly/').child(id).child(type).on('value', function (snapshot) {
                                let postArray = snapshot.val();
                                let nkeys = Object.keys(postArray);

                                for (var i = 0; i < nkeys.length; i++) {

                                    var obg = postArray[nkeys[i]];
                                    // console.log(id, type, nkeys[i]);


                                    if (type == 'in') {
                                        if (month == id) {
                                            countin += obg.totalCash;
                                            IncomingCash.textContent = formatNumber(countin);
                                        }
                                        // console.log(obg.totalCash, countin);


                                        cIn.push(obg.totalCash);
                                    } else if (type == 'out') {
                                        if (month == id) {
                                            countout += obg.totalCash;
                                            outcomingCash.textContent = formatNumber(countout);
                                        }

                                        Cout.push(obg.totalCash);
                                    }
                                    final = [id, Cout, cIn];
                                    // console.log(final);
                                }
                            });

                        }


                        if (final[1].length !== "undefined") {
                            for (var j = 0; j < final[1].length; j++) {
                                incomingB += final[1][j];
                            }
                        }

                        if (final[2].length !== "undefined") {

                            for (var h = 0; h < final[2].length; h++) {
                                outcomngB += final[2][h];
                            }
                        }

                        chartmap.push([final[0], incomingB, outcomngB]);

                    });

                }
                // console.log(chartmap[0]);

                // montharr = chartmap;
                loadIncomingOut(chartmap);
                var finalArray = [];
                var finalIn = [];
                var finalOut = [];

                for (var i = 0; i < chartmap.length; i++) {

                    for (var j = 0; j < dataMonth.length; j++) {
                        // console.log(dataMonth[j][0], chartmap[i][0]);
                        // console.log(finalArray, chartmap[i][0], Math.abs(chartmap[i][1]), chartmap[i][2]);
                        if (dataMonth[j][0] == chartmap[i][0]) {
                            finalArray.push([chartmap[i][0], Math.abs(chartmap[i][1]), chartmap[i][2]]);
                            finalOut.push(Math.abs(chartmap[i][1]));
                            finalIn.push(chartmap[i][2]);
                        }
                    }
                }

                let newDate = new Date();
                var datestring = newDate.toString();
                var splitdate = datestring.split(" ");
                var Thismonth = splitdate[1];
                var correctdate = [];
                var yearlyArray = [
                    ['Jan', 0, 0],
                    ['Feb', 0, 0],
                    ['Mar', 0, 0],
                    ['Apr', 0, 0],
                    ['May', 0, 0],
                    ['Jun', 0, 0],
                    ['Jul', 0, 0],
                    ['Aug', 0, 0],
                    ['Sep', 0, 0],
                    ['Oct', 0, 0],
                    ['Nov', 0, 0],
                    ['Dec', 0, 0]
                ];
                var expendArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                var incomingArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

                for (var j = 0; j < finalArray.length; j++) {

                    if (Thismonth == finalArray[j][0]) {
                        correctdate.push(finalArray[j][0], finalArray[j][1], finalArray[j][2])
                    }

                }
                console.log(finalArray)
                for (var i = 0; i < finalArray.length; i++) {
                    for (var j = 0; j < yearlyArray.length; j++) {

                        if (finalArray[i][0] == yearlyArray[j][0]) {
                            yearlyArray[j][0] = finalArray[i][0];
                            yearlyArray[j][1] = finalArray[i][1];
                            yearlyArray[j][2] = finalArray[i][2];
                            expendArray[j] = finalArray[i][1];
                            incomingArray[j] = finalArray[i][2];
                        }
                    }

                }


                var ctxca = document.getElementById('chart_div');
                var ctxc = document.getElementById('dual_x_div');
                var ct = document.getElementById('barchart_material');

                // mmonth//

                var mycha = new Chart(ct, {
                    // responsive: false,
                    type: 'bar',
                    data: {
                        labels: [correctdate[0]],
                        datasets: [{
                            label: 'הכנסות',
                            data: [correctdate[2]],
                            backgroundColor: [

                                'rgba(75, 192, 192, 0.2)',
                            ],
                            borderColor: [
                                'rgba(75, 192, 192, 1)',

                            ],
                            borderWidth: 1

                        }, {


                            label: 'הוצאות',
                            data: [correctdate[1]],
                            backgroundColor: [

                                'rgba(255, 99, 132, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',

                            ],
                            borderWidth: 1



                        }],
                    }, options: {
                        "animation": {
                            "duration": 2,
                            "onComplete": function () {
                                var chartInstance = this.chart,
                                    ctx = chartInstance.ctx;

                                ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                                ctx.display = 'inline';
                                ctx.textBaseline = 'bottom';

                                this.data.datasets.forEach(function (dataset, i) {
                                    var meta = chartInstance.controller.getDatasetMeta(i);
                                    meta.data.forEach(function (bar, index) {
                                        var data = dataset.data[index];
                                        ctx.fillText(data, bar._model.x, bar._model.y - 5);
                                    });
                                });
                            }
                        }, scales: {
                            yAxes: [{
                                display: true,
                                ticks: {
                                    suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                                    // OR //
                                    beginAtZero: true   // minimum value will be 0.
                                }
                            }]
                        }
                    }

                });

                // YEARLS//

                var myChart2 = new Chart(ctxc, {
                    type: 'bar',
                    data: {
                        labels: labelx,
                        datasets: [{
                            label: 'הכנסות',
                            data: incomingArray,
                            backgroundColor: [

                                'rgba(75, 192, 192, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(75, 192, 192, 0.2)'

                            ],
                            borderColor: [
                                'rgba(75, 192, 192, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(75, 192, 192, 1)'



                            ],
                            borderWidth: 1

                        }, {


                            label: 'הוצאות',
                            data: expendArray,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)'

                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        "animation": {
                            "duration": 1,
                            "onComplete": function () {
                                var chartInstance = this.chart,
                                    ctx = chartInstance.ctx;

                                ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                                ctx.display = 'inline';
                                ctx.textBaseline = 'bottom';

                                this.data.datasets.forEach(function (dataset, i) {
                                    var meta = chartInstance.controller.getDatasetMeta(i);
                                    meta.data.forEach(function (bar, index) {
                                        var data = dataset.data[index];
                                        ctx.fillText(data, bar._model.x, bar._model.y - 5);
                                    });
                                });
                            }
                        },
                    }

                });

                var myChart = new Chart(ctxca, {
                    type: 'line',
                    data: {
                        labels: labelx,
                        datasets: [{
                            label: 'הכנסות',
                            data: incomingArray,
                            backgroundColor: [

                                'rgba(75, 192, 192, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(75, 192, 192, 0.2)'

                            ],
                            borderColor: [
                                'rgba(75, 192, 192, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(75, 192, 192, 1)'



                            ],
                            borderWidth: 1

                        }, {


                            label: 'הוצאות',
                            data: expendArray,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(255, 99, 132, 1)'

                            ],
                            borderWidth: 1
                        }]
                    },

                });

            });

            // console.log(finalOut, finalIn, correctdate, chartmap);

        }




    }
})
