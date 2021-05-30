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
var outtype = document.getElementById("outtype");
var newExpendWord = document.getElementById("newExpend");
var newIncomeWord = document.getElementById("iconaddSetting");
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
var img = document.getElementById("userUrl");
const loanForm = document.getElementById("loanForm");
const containerLoan = document.getElementById("containerLoan");
var boximg = document.getElementById("boximg");
// var textUser = document.getElementById("textUser");
// var menu = document.getElementById("menu");
// var userUrl = document.getElementById("userUrl");

var statusStart = document.getElementById('statusStart');
var creditLine = document.getElementById('creditLine');
var creditBank = document.getElementById('creditBank');
var startDate = document.getElementById('startDate');

var start_date = document.getElementById('start_date');
var end_date = document.getElementById('end_date');
var groupView = document.getElementsByName('groupView');
var checkid = document.getElementById('check');
var sidebar_btn = document.getElementById('sidebar_btn');

var groupChartHome = document.getElementsByName("goupChartHome");

var choosWeekly = document.getElementsByName('choosWeekly');
var chooseMonthly = document.getElementsByName('chooseMonthly');
var chooseYearly = document.getElementsByName('chooseYearly');
var chooseBitweenDates = document.getElementsByName('chooseBitweenDates');

var bitweenDates = document.getElementById('bitweenDates');
var btn_BitweenDates = document.getElementById('btn_BitweenDates');
var num_currectStatusCash = document.getElementById('num_currectStatusCash');
var num_incomingMonth = document.getElementById('num_incomingMonth');
var num_expendMonth = document.getElementById('num_expendMonth');
var balanceMonth = document.getElementById('num_balanceMonth');

var num_expnendYear = document.getElementById('num_expnendYear');
var num_incomingYear = document.getElementById('num_incomingYear');
var num_balanceYear = document.getElementById('num_balanceYear');

var nameUser = document.getElementById('nameUser');
var menuUserimg = document.getElementById('menuUserimg');

var show_hide_title = document.getElementById('show_hide_title');
var HomeMenu = document.getElementById('HomeMenu');
var TableviewMenu = document.getElementById('TableviewMenu');
var iSetting = document.getElementById('iSetting');

var HomeRow = document.getElementById('HomeRow');
var TableRow = document.getElementById('TableRaw');
var SettingRow = document.getElementById('SettingRow');
var mainLogOut = document.getElementById('mainLogOut');
var exportToExcele = document.getElementById('export');
var SearchForm = document.getElementById("SearchForm");

var tableData = document.getElementById("tableData");

var num_directDebit = document.getElementById("num_directDebit");
var num_cash = document.getElementById("num_cash");
var num_paper = document.getElementById("num_paper");
var num_credit = document.getElementById("num_credit");
var num_transferBank = document.getElementById("num_transferBank");
var num_bit = document.getElementById("num_bit");

var credit_box = document.getElementById("credit");
var cash_box = document.getElementById("cash");
var paper_box = document.getElementById("paper");
var directDebit_box = document.getElementById("directDebit");
var transferBank_box = document.getElementById("transferBank");
var bit_box = document.getElementById("bit");
var settingPage = document.getElementById("settingPage");
var settingBtn = document.getElementById("settingBtn");

var start_db = document.getElementById("start_db");
var line_bank_db = document.getElementById("line_bank_db");
var line_card_db = document.getElementById("line_card_db");
var day_db = document.getElementById("day_db");
var boxLoan = document.getElementById("boxLoan");
var flag = document.getElementById("flag");
var flagloan = document.getElementById("flagloan");
var flagOut = document.getElementById("flagOut");

var weeklyChart = document.getElementById("weeklyChart");
var monthlyChart = document.getElementById("monthlyChart");
var yearlyChart = document.getElementById("yearlyChart");
var chartYearly = document.getElementById("chartYearly");

var SaveForm = document.getElementById("SaveForm");
var nameSave = document.getElementById("nameSave");
var groupSave = document.getElementsByName("groupSave");
var sumSave = document.getElementById("sumSave");
var DesSum = document.getElementById("DesSum");
var flagSave = document.getElementById("flagSave");
var startSave = document.getElementById("startSave");





var myChart2;

// var ctx = document.getElementById("chart_div").getContext("2d");
// var



function twoDigit(n) {
    var num = n;
    num.toFixed(2);
    return num;
}
const weekDays = {
    "ראשון": 0,
    "שני": 1,
    "שלישי": 2,
    "רביעי": 3,
    "חמישי": 4,
    "שישי": 5,
    "שבת": 6
}

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

const montharr = ["Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"];

const daysArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

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

auth.onAuthStateChanged(user => {

    if (user) {
        var Limit = 0;
        database.ref('/Users/' + user.uid + '/setting/firstSetting/').once('value').then(snapshot => {
            // console.log(snapshot.val().cuurentCash);
            Limit = snapshot.val().cuurentCash;
        });
        // mainLogOut.stylelog
        // console.log('idan sign in');
        var mainArray = [];
        var corDate = createNewDate();
        var dayCorrect = corDate.day;
        var monthCorrect = corDate.month;
        var corectYear = corDate.year;
        var num_newdate = corDate.dateInNum;
        var currectLimit = '';
        var labelx = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var labely = [[0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]];
        var in_out = [];
        var obj = { arr: [] };
        const date = new Date();
        // console.log(location.href);
        const correctHref = returnCorrect_href();
        // console.log(correctHref);
        var chipsOut = document.getElementById("chipsOut");
        var chipsIn = document.getElementById("chipsIn");
        var chipsOutOption = document.getElementById("chipsOutOption");
        var chipsInOption = document.getElementById("chipsInOption");
        HOME_PAGE_GET_DATA_FOR_WEEKLY();


        var userInfoText = document.getElementById("userInfoText");
        // document.addEventListener("click", e => {
        //     // console.log(e.target.id);
        // })

        // /global function and Var//

        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ]

        const monthShort = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ]

        sidebar_btn.addEventListener('click', e => {
            console.log(checkid.type);
        })

        function returnCorrect_href() {
            var correct_href = location.href;
            var split_href = correct_href.split("/");
            var last_href = split_href[split_href.length - 1];
            return last_href
        }

        function addDb(Type, i, t, d, c, P, W, Temp) {

            var corMonth = d.split(" ");
            var correctMonth = corMonth[0];
            var correctDay = corMonth[1];
            var correctYear = corMonth[2];
            var numMonth = month[correctMonth];
            var key = P.toString();

            function addToDataBase(date, s) {
                console.log(date, s);
                mainTable.innerHTML = "";
                var TypeCash = t;
                var totalCash = c;
                var time = new Date();
                var dateCashNum = Date.parse(date);
                var timeNum = Date.parse(time);
                var numDataCorrect = '';
                let numExpends = 0;
                var newArrayCash = {};

                database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').once('value', function (snapshot) {

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
                    console.log(numDataCorrect == dateCashNum);
                    database.ref('/Users/' + user.uid + '/cashflow/').child(dateCashNum).child('chashFlow').on('value', function (snapshot) {

                        let postArray = snapshot.val();
                        let keys = Object.keys(postArray);
                        numExpends = keys.length;
                        console.log(numExpends);

                    });
                    if (numExpends == 0) {

                        database.ref('/Users/' + user.uid + '/cashflow/').child(dateCashNum).on('value', function (snapshot) {

                            let postArray = snapshot.val();
                            newArrayCash = postArray;

                        });

                        let newPostKeyA = firebase.database().ref().child('Users').child(user.uid).child('cashflow').child(dateCashNum).child('chashFlow').push().key;
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

                        newupdate['/Users/' + user.uid + '/cashflow/' + dateCashNum + '/chashFlow/' + newPostKeyA] = postdataD;
                        firebase.database().ref().update(newupdate);
                        firebase.database().ref().child('Users').child(user.uid).child('cashflow').child(dateCashNum).update({

                            title: "פעילות מרובה",
                            date: newArrayCash.date,
                            totalCash: newArrayCash.totalCash,
                            type: newArrayCash.type,
                            after: "",
                            time: newArrayCash.time,
                            numTime: newArrayCash.numTime,
                            wayPay: newArrayCash.wayPay,
                            status: 'כללי',


                        });

                    }

                    let newPostKey = firebase.database().ref().child('Users').child(user.uid).child('cashflow').child(dateCashNum).child('chashFlow').push().key;
                    let updates = {};
                    let postdata = {

                        title: TypeCash,
                        date: date,
                        totalCash: Number(totalCash),
                        type: Type,
                        after: Temp,
                        time: time,
                        numTime: timeNum,
                        wayPay: W,
                        status: s
                    }

                    updates['/Users/' + user.uid + '/cashflow/' + dateCashNum + '/chashFlow/' + newPostKey] = postdata;
                    firebase.database().ref().update(updates);

                } else {

                    let updates = {};
                    let postdata = {
                        title: TypeCash,
                        date: date,
                        totalCash: Number(totalCash),
                        type: Type,
                        after: Temp,
                        time: time,
                        numTime: timeNum,
                        wayPay: W,
                        status: s
                    }

                    updates['/Users/' + user.uid + '/cashflow/' + dateCashNum] = postdata;
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
                    console.log(newDate, status);
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
            TABLE_PAGE_GET_DATA();
        }

        //table functions
        function getBitweenDates() {
            var sDay = start_date.value;
            var eDay = end_date.value;
            var num_start = Date.parse(sDay);
            var num_end = Date.parse(eDay);

            return start_end_weekly = {
                sDay: num_start,
                eDay: num_end
            }
        }
        function loadYearly(d, n) {
            // console.log(d);
            // console.log(Limit);
            // if()
            const mon = Object.keys(month);
            // console.log(mon);
            let delteboxtd = document.createElement('td');
            let delteboxin = document.createElement('td');
            let delteboxout = document.createElement('td');

            let icondelete = document.createElement('i');
            let icondeletein = document.createElement('i');
            let icondeleteout = document.createElement('i');

            let rowtable = document.createElement('tr');
            let rowtablein = document.createElement('tr');
            let rowtableout = document.createElement('tr');

            let TotalCashAfter = document.createElement('td');
            let TotalCashAfterin = document.createElement('td');
            let TotalCashAfterout = document.createElement('td');

            let typeCash = document.createElement('td');
            let typeCashin = document.createElement('td');
            let typeCashout = document.createElement('td');

            let DateCash = document.createElement('td');
            let DateCashin = document.createElement('td');
            let DateCashout = document.createElement('td');

            let TotalCashin = document.createElement('td');
            let TotalCashout = document.createElement('td');
            let TotalCash = document.createElement('td');

            let icontd = document.createElement('td');
            let iconintd = document.createElement('td');
            let iconouttd = document.createElement('td');

            let typeOfPay = document.createElement('td');
            let typeOfPayin = document.createElement('td');
            let typeOfPayout = document.createElement('td');

            let conditionPay = document.createElement('td');
            let conditionPayin = document.createElement('td');
            let conditionPayout = document.createElement('td');

            let icon = document.createElement('i');
            let iconin = document.createElement('i');
            let iconout = document.createElement('i');

            icondelete.setAttribute("class", "material-icons delteicons");
            icon.setAttribute('class', 'material-icons center');
            iconin.setAttribute('class', 'material-icons center');
            iconout.setAttribute('class', 'material-icons center');

            rowtable.setAttribute('id', 'newRow' + d[0]);
            rowtablein.setAttribute('id', 'newRow_' + d[0] + "_in");
            rowtableout.setAttribute('id', 'newRow_' + d[0] + "_out");

            rowtablein.setAttribute('class', 'subrowYearlyin');
            rowtableout.setAttribute('class', 'subrowYearlyout');

            rowtable.setAttribute('class', 'newRow');
            typeCash.setAttribute('id', 'typeCash');
            icontd.setAttribute("id", 'icontd');
            typeOfPay.setAttribute('id', 'typeOfPay');
            conditionPay.setAttribute('id', 'conditionPay');

            TotalCashAfter.setAttribute('id', 'TotalCashAfter');
            DateCash.setAttribute('id', 'DateCash');
            TotalCash.setAttribute('id', 'TotalCash');
            typeOfPay.textContent = "מאזן חודשי";
            typeOfPayin.textContent = "סיכום חודשי";
            typeOfPayout.textContent = "סיכום חודשי";

            conditionPay.textContent = "מאזן";
            conditionPayin.textContent = "הכנסות";
            conditionPayout.textContent = "הוצאות";

            DateCash.textContent = d[0];
            typeCash.textContent = "סיכום חודשי";
            var sum = d[2] + d[1];

            // console.log(sum);
            TotalCashAfter.textContent = ' ' + n.toFixed(2);
            let imgin = document.createElement('img');
            imgin.setAttribute("src", "./img/greeb01-01.png");
            imgin.setAttribute("class", "imgIls");

            if (n < 0) {
                let imgafter = document.createElement('img');
                imgafter.setAttribute("class", "imgIls");
                imgafter.setAttribute("src", "./img/red-01.png");
                TotalCashAfter.style.color = " red";
                TotalCashAfter.prepend(imgafter);

            } else if (n > 0) {
                let imgafter = document.createElement('img');
                imgafter.setAttribute("class", "imgIls");
                imgafter.setAttribute("src", "./img/greeb01-01.png");
                TotalCashAfter.style.color = " #50dd50";

                TotalCashAfter.prepend(imgafter);
            }
            let imgout = document.createElement('img');
            imgout.setAttribute("src", "./img/red-01.png");
            imgout.setAttribute("class", "imgIls");
            TotalCashout.textContent = ' ' + d[2].toFixed(2);
            TotalCashin.textContent = ' ' + d[1].toFixed(2);


            TotalCash.textContent = ' ' + sum.toFixed(2);
            TotalCashin.prepend(imgin);
            TotalCashout.prepend(imgout);

            if (sum < 0) {
                let imgBalnce = document.createElement('img');
                imgBalnce.setAttribute("class", "imgIls");
                imgBalnce.setAttribute("src", "./img/red-01.png");

                icon.textContent = "arrow_downward";
                iconin.style.color = " red";
                TotalCash.style.color = 'red';
                TotalCash.prepend(imgBalnce);

            } else {

                let imgBalnce = document.createElement('img');
                imgBalnce.setAttribute("class", "imgIls");
                imgBalnce.setAttribute("src", "./img/greeb01-01.png");

                icon.textContent = "arrow_upward";
                iconin.style.color = " #50dd50";
                TotalCash.style.color = '#50dd50';
                TotalCash.prepend(imgBalnce);

            }

            iconin.textContent = "arrow_upward";
            iconout.textContent = "arrow_downward";
            iconout.style.color = "red";

            if (TotalCash.textContent > 0) {
                icon.style.color = "#50dd50";
            } else if (TotalCash.textContent < 0) {
                icon.style.color = "red";
            }

            icontd.appendChild(icon);
            iconintd.appendChild(iconin);
            iconouttd.appendChild(iconout);

            delteboxtd.appendChild(icondelete);
            delteboxout.appendChild(icondeleteout);
            delteboxin.appendChild(icondeletein);

            rowtableout.appendChild(TotalCashAfterout);
            rowtableout.appendChild(TotalCashout);
            rowtableout.appendChild(iconouttd);

            rowtableout.appendChild(typeOfPayout);
            rowtableout.appendChild(conditionPayout);
            rowtableout.appendChild(typeCashout);
            rowtableout.appendChild(DateCashout);
            rowtableout.appendChild(delteboxout);

            rowtablein.appendChild(TotalCashAfterin);
            rowtablein.appendChild(TotalCashin);
            rowtablein.appendChild(iconintd);

            rowtablein.appendChild(typeOfPayin);
            rowtablein.appendChild(conditionPayin);
            rowtablein.appendChild(typeCashin);
            rowtablein.appendChild(DateCashin);
            rowtablein.appendChild(delteboxin);

            rowtable.appendChild(TotalCashAfter);
            rowtable.appendChild(TotalCash);
            rowtable.appendChild(icontd);

            rowtable.appendChild(typeOfPay);
            rowtable.appendChild(conditionPay);
            rowtable.appendChild(typeCash);
            rowtable.appendChild(DateCash);
            rowtable.appendChild(delteboxtd);

            mainTable.appendChild(rowtable);
            mainTable.appendChild(rowtablein);
            mainTable.appendChild(rowtableout);
            rowtableout.style.display = "none"
            rowtablein.style.display = "none"

            rowtable.addEventListener('click', (e) => {

                var rowin = document.getElementById('newRow_' + d[0] + "_in");
                var rowout = document.getElementById('newRow_' + d[0] + "_out");


                var stsin = rowin.style.display;
                var stsout = rowout.style.display;


                if (stsin === 'none' || stsout === 'none') {
                    rowin.style.display = 'table-row';
                    rowout.style.display = 'table-row';
                } else {
                    rowin.style.display = 'none';
                    rowout.style.display = 'none';
                }
            });

        }
        function laodUpData(I, doc, S, A, pr, sum) {
            // console.log(I, doc, S, A, pr);
            var previewNum = 0;

            // console.log(sum, doc.totalCash, pr);

            // console.log(previewNum);

            var checktempView = changeToPlan.getAttribute("class");
            if (checktempView == "check") {
                addDataTable();
                if (doc.totalCash < 0) {
                    previewNum = pr + doc.totalCash;

                } else {
                    previewNum = pr - doc.totalCash;
                }
            } else if (checktempView == "uncheck") {
                if (doc.after !== true) {
                    addDataTable();
                    if (doc.totalCash < 0) {
                        previewNum = pr + doc.totalCash;

                    } else {
                        previewNum = pr - doc.totalCash;
                    }
                }
            }
            function addDataTable() {
                var date = doc.date;
                var totalCash = doc.totalCash;
                // console.log(totalCash);
                var type = doc.type;
                var title = doc.title;
                var status = doc.status;
                var wayPay = doc.wayPay;
                var t = totalCash;

                let delteboxtd = document.createElement('td');
                let icondelete = document.createElement('i');
                let rowtable = document.createElement('tr');
                let TotalCashAfter = document.createElement('td');
                let typeCash = document.createElement('td');
                let DateCash = document.createElement('td');
                let TotalCash = document.createElement('td');
                let icontd = document.createElement('td');
                let typeOfPay = document.createElement('td');
                let conditionPay = document.createElement('td');
                let icon = document.createElement('i');
                icondelete.setAttribute("class", "material-icons delteicons");
                icondelete.setAttribute("id", "detletrow_" + I);
                icondelete.textContent = "delete";
                icon.setAttribute('class', 'material-icons center');

                if (type == 'in') {
                    let img = document.createElement('img');
                    img.setAttribute("src", "./img/greeb01-01.png");
                    img.setAttribute("class", "imgIls");
                    icon.setAttribute('id', 'upArrow');
                    icon.textContent = 'arrow_upward';
                    TotalCash.textContent = ' ' + formatNumber(totalCash.toFixed(2));
                    TotalCash.style.color = '#50dd50';

                    TotalCash.prepend(img)

                } else if (type == 'out') {
                    let img = document.createElement('img');
                    img.setAttribute("src", "./img/red-01.png");
                    img.setAttribute("class", "imgIls");
                    icon.setAttribute('id', 'downArrow');
                    icon.textContent = 'arrow_downward';
                    TotalCash.style.color = '#ff3d67';
                    TotalCash.textContent = ' ' + formatNumber(totalCash.toFixed(2));
                    TotalCash.prepend(img)
                }
                if (doc.after == true) {
                    rowtable.setAttribute("class", "temporaryRow")
                    // rowtable.setAttribute('id', 'newRow' + "-" + I + "-Temp");
                    // rowtable.style.background = red;
                } else {
                    rowtable.setAttribute('class', 'newRow');

                }
                rowtable.setAttribute('id', 'newRow' + "-" + I);

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


                // console.log(pr);
                console.log(pr);
                if (pr > 0) {
                    let imgAfter = document.createElement("img");
                    imgAfter.setAttribute("class", "imgIls");
                    TotalCashAfter.style.color = '#50dd50';
                    imgAfter.setAttribute("src", "./img/greeb01-01.png");
                    TotalCashAfter.textContent = " " + formatNumber(Number(pr).toFixed(2));
                    TotalCashAfter.prepend(imgAfter);

                } else if (pr < 0) {
                    let imgAfter = document.createElement("img");
                    imgAfter.setAttribute("class", "imgIls");
                    imgAfter.setAttribute("src", "./img/red-01.png");
                    TotalCashAfter.style.color = '#ff3d67';
                    TotalCashAfter.textContent = " " + formatNumber(Number(pr).toFixed(2));

                    TotalCashAfter.prepend(imgAfter);
                }



                var newLine = 0 - A;
                var sumNum = A + pr;
                console.log(I, num_newdate);


                // var getparents = getEl.parentElement.nodeName;
                if (I < num_newdate) {
                    var getEl = document.querySelector("#spanTitle");
                    // var pernts = getEl.parentNode;
                    // console.log(getEl);

                    if (getEl) {

                        // TotalCashAfter.removeChild(spanTitle);
                        // document.removeChild(getEl)
                        var parents = getEl.parentElement;
                        var RowParents = parents.parentElement;
                        RowParents.style.borderBottom = "none";

                        console.log(parents);
                        parents.removeChild(getEl)
                    }

                    // TotalCashAfter.childNodes(getEl);
                    rowtable.style.borderBottom = "#ff3d67 5px solid";

                    let spanTitle = document.createElement('span');
                    spanTitle.setAttribute('id', 'spanTitle');
                    spanTitle.textContent = formatNumber(sumNum.toFixed(2)) + " " + "חריגה";
                    TotalCashAfter.appendChild(spanTitle);


                    TotalCashAfter.style.color = '#ff3d67';
                    // TotalCashAfter.style.fontWeight = 'bold';
                }


                if (pr < newLine) {
                    TotalCashAfter.style.color = '#ff3d67';
                    // TotalCashAfter.style.fontWeight = 'bold';
                }

                icontd.appendChild(icon);
                delteboxtd.appendChild(icondelete);
                rowtable.appendChild(TotalCashAfter);
                rowtable.appendChild(TotalCash);
                rowtable.appendChild(icontd);

                rowtable.appendChild(typeOfPay);
                rowtable.appendChild(conditionPay);
                rowtable.appendChild(typeCash);
                rowtable.appendChild(DateCash);
                rowtable.appendChild(delteboxtd);
                mainTable.appendChild(rowtable);

                icondelete.addEventListener("click", (e) => {

                    mainTable.removeChild(rowtable);
                    var datesplit = date.split(" ");
                    var newdate = datesplit[0];
                    var IdRow = icondelete.getAttribute("id");
                    var textSplit = IdRow.split("_");
                    var id = textSplit[1];

                    database.ref('/Users/' + user.uid + '/cashflow/' + id).remove().then(function () {

                    }).catch(function (err) {
                    });


                    database.ref('/Users/' + user.uid + '/monthly/' + newdate + '/in/' + id).remove().then(function () {
                    }).catch(function (err) {
                    });

                    database.ref('/Users/' + user.uid + '/monthly/' + newdate + '/out/' + id).remove().then(function () {
                    }).catch(function (err) {
                    });

                });

                if (doc.chashFlow) {
                    // console.log(S);
                    var array = [];

                    database.ref('/Users/' + user.uid + '/cashflow/').child(I).child('/chashFlow/').on('value', function (snapshot) {

                        let postArray = snapshot.val();
                        let keys = Object.keys(postArray);
                        let spanNum = document.createElement("span");

                        spanNum.setAttribute("class", "spanNum");
                        spanNum.textContent = keys.length;
                        typeCash.appendChild(spanNum);
                        var newNum = 0;
                        var suminsiderow = 0;
                        for (var i = 0; i < keys.length; i++) {

                            var rowid = keys[i];
                            var currentObject = postArray[keys[i]];
                            var typeDay = currentObject.type;
                            var cuurectcashDay = currentObject.totalCash;
                            var dateToday = currentObject.date;
                            var titlecash = currentObject.title;
                            var way = currentObject.wayPay;
                            var st = currentObject.status;
                            // console.log(cuurectcashDay.toFixed(2));
                            date = dateToday;
                            title = titlecash;
                            var subtotalCash = Number(cuurectcashDay).toFixed(2);
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
                                let img = document.createElement('img');
                                img.setAttribute("src", "./img/greeb01-01.png");
                                img.setAttribute("class", "imgIls");
                                icon.setAttribute('id', 'upArrow');
                                icon.textContent = 'arrow_upward';
                                TotalCash.style.color = '#50dd50';

                                TotalCash.textContent = " " + Number(subtotalCash).toFixed(2);
                                TotalCash.prepend(img);


                            } else if (type == 'out') {
                                let img = document.createElement('img');
                                img.setAttribute("src", "./img/red-01.png");
                                img.setAttribute("class", "imgIls");

                                icon.setAttribute('id', 'downArrow');

                                icon.textContent = 'arrow_downward';
                                TotalCash.style.color = '#ff3d67';
                                TotalCash.textContent = " " + Number(subtotalCash).toFixed(2);
                                TotalCash.prepend(img);
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
                            // var total = "";
                            var total = 0;
                            // console.log(total, i);
                            if (suminsiderow == 0) {
                                total = Number(previewNum) + Number(subtotalCash);
                                // suminsiderow += Number(total);
                                suminsiderow += Number(total);

                            } else {
                                // console.log(subtotalCash, suminsiderow);
                                // console.log(TotalCashAfter);
                                // suminsiderow += Number(total);
                                total = Number(suminsiderow) + Number(subtotalCash);
                                // total = Number(totalCash) + Number(suminsiderow);
                                suminsiderow += Number(subtotalCash);


                            }
                            TotalCashAfter.textContent = Number(suminsiderow).toFixed(2);
                            // console.log(i, suminsiderow, subtotalCash);

                            var newLine = 0 - A;
                            var sumNum = suminsiderow - newLine;
                            console.log(suminsiderow, S, newLine);
                            if (suminsiderow < newLine) {
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
                            rowtable.appendChild(typeCash);
                            rowtable.appendChild(conditionPaySub);

                            rowtable.appendChild(typeOfPaySub);
                            rowtable.appendChild(DateCash);

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

                                database.ref('/Users/' + user.uid + '/cashflow/' + mainRow + '/chashFlow/' + row_Id).remove().then(function () {

                                }).catch(function (err) {
                                });


                                database.ref('/Users/' + user.uid + '/cashflow/').child(mainRow).child('/chashFlow/').on('value', function (snapshot) {

                                    let postArray = snapshot.val();
                                    let keys = Object.keys(postArray);
                                    let length = keys.length;

                                    for (var i = 0; i < length; i++) {

                                        var id = keys[i];
                                        var newArrayCashB = {};

                                        if (length == 1) {

                                            database.ref('/Users/' + user.uid + '/cashflow/').child(mainRow).child('/chashFlow/').child(id).on('value', function (snapshot) {

                                                let postArray = snapshot.val();
                                                let keys = Object.keys(postArray);
                                                let length = keys.length;
                                                newArrayCashB = postArray;

                                            });

                                            firebase.database().ref().child('Users').child(user.uid).child('cashflow').child(mainRow).update({

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

                                            database.ref('/Users/' + user.uid + '/cashflow/' + mainRow + '/chashFlow/').remove().then(function () {

                                            }).catch(function (err) {
                                            });

                                        } else if (length > 2) {


                                        }

                                    }

                                });

                            });

                        }

                        var getRow = document.getElementById("newRow-" + I).getElementsByTagName('td')[1];
                        // getRow.innerText = newNum + ' ש"ח ';

                        if (newNum < 0) {
                            database.ref('/Users/' + user.uid + '/cashflow/').child(I).update({
                                totalCash: newNum,
                                type: 'out'
                            });
                        } else {
                            database.ref('/Users/' + user.uid + '/cashflow/').child(I).update({
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

                    function returnNameDay(d) {
                        var obg = Object.keys(weekDays);
                        var keys = obg.keys();

                        for (var i = 0; i < obg.length; i++) {
                            if (d = i) {
                                return obg[i];
                            }
                        }

                    }

                    var day = returnNameDay();
                    colDate.textContent = day;
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
        }
        function loadIncomingOutForTable(I, O) {
            // console.log(I, O);
            let ils = document.createElement("span");
            ils.setAttribute("id", "ils");
            var balnaceSum = I + O;
            // console.log(balnaceSum);
            var numin = formatNumber(I.toFixed(2));
            var numout = formatNumber(O.toFixed(2));
            var balnce = formatNumber(balnaceSum.toFixed(2));

            var splitin = numin.split(".");
            var splitout = numout.split(".");
            var splitbalance = balnce.split(".");

            let spanIn = document.createElement("span");
            let spanout = document.createElement("span");
            let spanblance = document.createElement("span");

            spanIn.setAttribute('class', 'decimel');
            spanout.setAttribute('class', 'decimel');
            spanblance.setAttribute('class', 'decimel');

            spanIn.textContent = splitin[1];
            spanout.textContent = splitout[1];
            spanblance.textContent = splitbalance[1];

            incoming.textContent = splitin[0] + '.';
            outcoming.textContent = splitout[0] + '.';
            balance.textContent = splitbalance[0] + '.';

            let imgin = document.createElement('img');
            // imgin.setAttribute("src", "./img/greeb01-01.png");
            // imgin.setAttribute("class", "imgIls");

            // let imgout = document.createElement('img');
            // imgout.setAttribute("src", "./img/red-01.png");
            // imgout.setAttribute("class", "imgIls");

            incoming.appendChild(spanIn);
            // incoming.appendChild(imgin);

            outcoming.appendChild(spanout);
            // outcoming.appendChild(imgout);

            balance.appendChild(spanblance);
        }
        function loadIncomingOut(I, O) {
            // console.log(m);
            let ils = document.createElement("span");
            ils.setAttribute("id", "ils");
            // var I = 0;
            // var O = 0;
            // for (var i = 0; i < m.length; i++) {
            //     O += Number(m[i][1]);
            //     I += Number(m[i][2]);
            // }
            var balnaceSum = I + O;

            var numin = formatNumber(I.toFixed(2));
            var numout = formatNumber(O.toFixed(2));
            var balnce = formatNumber(balnaceSum.toFixed(2));


            var splitin = numin.split(".");
            var splitout = numout.split(".");
            var splitbalance = balnce.split(".");

            let spanInhome = document.createElement("span");
            let spanouthome = document.createElement("span");
            let spanblancehome = document.createElement("span");


            spanblancehome.setAttribute('class', 'decimel');
            spanInhome.setAttribute('class', 'decimel');
            spanouthome.setAttribute('class', 'decimel');


            spanouthome.textContent = splitout[1];
            spanblancehome.textContent = splitbalance[1];
            spanInhome.textContent = splitin[1];

            // console.log(splitbalance[1]);


            num_balanceYear.textContent = '  ' + splitbalance[0] + '.';
            num_incomingYear.textContent = '  ' + splitin[0] + '.';
            num_expnendYear.textContent = '  ' + splitout[0] + '.';

            // console.log(balance);
            let imgin = document.createElement('img');
            imgin.setAttribute("src", "./img/greeb01-01.png");
            imgin.setAttribute("class", "imgIls");

            let imgout = document.createElement('img');
            imgout.setAttribute("src", "./img/red-01.png");
            imgout.setAttribute("class", "imgIls");


            if (balnaceSum >= 0) {
                let imgin = document.createElement('img');
                imgin.setAttribute("src", "./img/greeb01-01.png");
                imgin.setAttribute("class", "imgIls");
                num_balanceYear.style.color = "#50dd50";
                num_balanceYear.prepend(imgin);

            } else {
                let imgout = document.createElement('img');
                imgout.setAttribute("src", "./img/red-01.png");
                imgout.setAttribute("class", "imgIls");

                num_balanceYear.style.color = "red";
                num_balanceYear.prepend(imgout);

            }
            num_incomingYear.prepend(imgin);
            num_expnendYear.prepend(imgout);

            num_balanceYear.appendChild(spanblancehome);
            num_incomingYear.appendChild(spanInhome);
            num_expnendYear.appendChild(spanouthome);
        }

        function aotucomplete() {
            var autoTextOut = {};
            var autoTextIn = {};
            database.ref('/Users/' + user.uid + '/setting/text/').on('value', function (snapshot) {
                let textData = snapshot.val();
                let keys = Object.keys(textData);
                for (var i = 0; i < keys.length; i++) {
                    var id = keys[i];
                    if (id == 'in') {
                        database.ref('/Users/' + user.uid + '/setting/text/in').on('value', function (snapshot) {
                            let textDatain = snapshot.val();
                            let keysin = Object.keys(textDatain);
                            for (var j = 0; j < keysin.length; j++) {
                                var x = textDatain[keysin[j]].word;
                                console.log(x);
                                autoTextIn[x] = null;
                            }
                        });

                    } else if (id == 'out') {
                        database.ref('/Users/' + user.uid + '/setting/text/out').on('value', function (snapshot) {
                            let textDataout = snapshot.val();
                            let keysout = Object.keys(textDataout);
                            for (var j = 0; j < keysout.length; j++) {
                                var y = textDataout[keysout[j]].word;
                                autoTextOut[y] = null;
                            }
                        });
                    }
                }
            });
            var autocomplete = document.getElementById('typeIncoimg');
            M.Autocomplete.init(autocomplete, { data: autoTextIn });
            var autocompleteout = document.getElementById('typeOut');
            M.Autocomplete.init(autocompleteout, { data: autoTextOut });
        }
        function lastday(d) {
            var first = d.getDate() - d.getDay(); // First day is the day of the month - the day of the week
            var last = first + 6; // last day is the first day + 6

            var firstday = new Date(d.setDate(first)).toUTCString();
            var lastday = new Date(d.setDate(last)).toUTCString();
            return weekly = {
                firstday: firstday,
                lastday: lastday
            }
        }
        function createNewDate() {
            var correctday = new Date().toString();
            var split = correctday.split(" ");
            var dayCorrect = split[2];
            var monthCorrect = split[1];
            var corectYear = split[3];
            var new_Date = split[1] + " " + split[2] + ", " + split[3];
            var num_newdate = Date.parse(new_Date);
            return obg = {
                day: dayCorrect,
                month: monthCorrect,
                year: corectYear,
                fullDate: new_Date,
                dateInNum: num_newdate
            }
        }
        function bitweenClose() {
            bitweenDates.style.display = "none";
        }
        function addKeyWord(t, Type) {
            console.log(t, Type);
            var exists = false;
            var textTrim = t.trim();

            database.ref('/Users/' + user.uid + '/setting/text/' + Type).orderByChild("word").equalTo(textTrim).once("value", snapshot => {
                console.log(snapshot);
                if (snapshot) {
                    const userData = snapshot.val();
                    console.log("exists!", userData);

                    if (userData == null) {
                        let textupdates = {};
                        let textpostdata = {
                            word: textTrim
                        }


                        if (Type == 'out') {
                            let newPostKey = firebase.database().ref().child('Users').child(user.uid).child('setting').child('text').child('out').push().key;
                            textupdates['/Users/' + user.uid + '/setting/text/out/' + newPostKey] = textpostdata;
                            firebase.database().ref().update(textupdates);
                        } else if (Type == 'in') {
                            let newPostKey = firebase.database().ref().child('Users').child(user.uid).child('setting').child('text').child('in').push().key;
                            textupdates['/Users/' + user.uid + '/setting/text/in/' + newPostKey] = textpostdata;
                            firebase.database().ref().update(textupdates);
                        }
                    } else if (userData) {
                        alert('word exsists');
                    }

                }

            })


        }
        function saveNewWord() {
            newIncomeWord.addEventListener('click', (e) => {
                addKeyWord(typeIncoming.value, "in");
            });
            newExpendWord.addEventListener('click', (e) => {
                addKeyWord(typeOut.value, "out");
            });
        }
        function setPhotoUser() {

            if (user.photoURL === null) {
                database.ref('/Users/' + user.uid + '/info/').on('value', function (snap) {
                    textUser.textContent = snap.val().photoURL;
                    nameUser.textContent = snap.val().photoURL;
                });
            } else {
                // console.log(user);
                img.setAttribute("src", user.photoURL);
                menuUserimg.setAttribute("src", user.photoURL);
                nameUser.textContent = user.displayName;
            }

        }
        function renderCalender() {
            date.setDate(1);
            const monthDays = document.querySelector(".days");
            const lastDay = new Date(
                date.getFullYear(),
                date.getMonth() + 1,
                0
            ).getDate();

            const prevLastDay = new Date(
                date.getFullYear(),
                date.getMonth(),
                0
            ).getDate();

            const firstDayIndex = date.getDay();

            const lastDayIndex = new Date(
                date.getFullYear(),
                date.getMonth() + 1,
                0
            ).getDay();
            // var nextDays = "";

            let nextDays = 14 - lastDayIndex - 1;
            // console.log(lastDay, nextDays, prevLastDay);
            // if (prevLastDay) {
            //     if (lastDay == 31 && nextDays < 11) {
            //         // console.log(nextDays);
            //         nextDays = 14 - lastDayIndex - 1

            //     } else {
            //         nextDays = 7 - lastDayIndex - 1

            //     }
            // }

            var numDaysSum = firstDayIndex + lastDay + nextDays;
            if (numDaysSum < 43) {
                nextDays = 14 - lastDayIndex - 1;
            } else {
                nextDays = 7 - lastDayIndex - 1;
            }




            document.querySelector("#monthCalnder").innerHTML = months[date.getMonth()];

            // document.querySelector("#fullDate").innerHTML = new Date().toDateString();

            let days = "";
            let nd = 0;
            if (nextDays < 43) {
                nd = nextDays;
            } else {
                nd = nextDays - 7;
            }

            for (let x = firstDayIndex; x > 0; x--) {

                days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
            }

            for (let i = 1; i <= lastDay; i++) {
                if (
                    i === new Date().getDate() &&
                    date.getMonth() === new Date().getMonth()
                ) {
                    days += `<div class="today">${i}</div>`;

                } else {
                    days += `<div>${i}</div>`;

                }
            }

            for (let j = 1; j <= nd; j++) {


                days += `<div class="next-date">${j}</div>`;
                monthDays.innerHTML = days;


            }
        };

        function exportTableToExcel(tableID, filename = '') {
            var downloadLink;
            var dataType = 'application/vnd.ms-excel';
            var tableSelect = document.getElementById(tableID);
            var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

            // Specify file name
            filename = filename ? filename + '.xls' : 'excel_data.xls';

            // Create download link element
            downloadLink = document.createElement("a");

            document.body.appendChild(downloadLink);

            if (navigator.msSaveOrOpenBlob) {
                var blob = new Blob(['\ufeff', tableHTML], {
                    type: dataType
                });
                navigator.msSaveOrOpenBlob(blob, filename);
            } else {
                // Create a link to the file
                downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

                // Setting the file name
                downloadLink.download = filename;

                //triggering the function
                downloadLink.click();
            }
        }
        exportToExcele.addEventListener('click', e => {

            exportTableToExcel('table_main')
        });

        renderCalender();

        document.querySelector(".prev").addEventListener("click", (e) => {
            // e.preventDefault();
            date.setMonth(date.getMonth() - 1);
            renderCalender();
            HOME_PAGE_GET_DATA_FOR_CALNDER();
            // TABLE_PAGE_GET_DATA();
        });

        document.querySelector(".next").addEventListener("click", () => {
            // e.preventDefault();

            date.setMonth(date.getMonth() + 1);
            renderCalender();
            HOME_PAGE_GET_DATA_FOR_CALNDER();
        });

        function getDatesFromCalender(i, data, c, inc, out) {
            // console.log(i, data, c, inc, out);


            var cashflow = data.chashFlow;
            var cash_flow_cal = [0, 0];
            var inComCal = 0;
            var outComCal = 0;

            if (cashflow) {
                let keysInday = Object.keys(cashflow);
                // console.log(keysInday);
                // console.log(keysInday);
                for (var i = 0; i < keysInday.length; i++) {

                    var keyId = keysInday[i];
                    // console.log(cashflow[keyId].totalCash);
                    var val = cashflow[keyId].totalCash;
                    if (val > 0) {
                        inComCal += val;
                    } else if (val < 0) {
                        outComCal += val;
                    }

                    cash_flow_cal[0] = inComCal;
                    cash_flow_cal[1] = outComCal;

                }
                // console.log(cash_flow_cal);

            } else {
                var valSingle = data.totalCash;
                if (valSingle > 0) {
                    inComCal += valSingle;
                } else if (valSingle < 0) {
                    outComCal += valSingle;
                }
                cash_flow_cal[0] = inComCal;
                cash_flow_cal[1] = outComCal;
            }
            // console.log(cash_flow_cal);

            var day_num_Db = i;
            var date_db = data.date;
            var month_db = date_db.split(" ")[0];
            var day_db = date_db.split(" ")[1].split(",")[0];
            var year_db = date_db.split(" ")[2];


            // console.log(year_db);
            const calDays = document.getElementById("days").children;
            const month_cal = document.getElementById("monthCalnder").innerText;

            for (var i = 0; i < calDays.length; i++) {

                var typedate = calDays[i].className;
                var numdate = calDays[i].textContent;
                var datenumDb = 0;
                var datenumCalender = 0;
                if (typedate == "prev-date" || typedate == "next-date") {


                } else {
                    var fullMonthIndex = months.indexOf(month_cal);
                    var shortMonth = monthShort[fullMonthIndex];

                    // console.log(day_num_Db, numdate, shortMonth, month_db, year_db);

                    if (day_db == numdate && shortMonth == month_db && year_db == "2020") {
                        // console.log("connect", numdate, calDays[i]);
                        calDays[i].style.color = "rgb(61, 161, 255)";

                        var sumIncomingOutcoming = cash_flow_cal[0] + cash_flow_cal[1];
                        if (sumIncomingOutcoming > 0) {
                            calDays[i].style.color = "#50dd50";
                            calDays[i].style.fontWeight = "bold";
                            calDays[i].style.backgroundColor = "rgb(250, 250, 250)";
                            calDays[i].setAttribute("class", "haveData");


                        } else if (sumIncomingOutcoming < 0) {
                            calDays[i].style.color = "#ff3d67";
                            calDays[i].style.fontWeight = "bold";
                            calDays[i].style.backgroundColor = "rgb(250, 250, 250)";
                            calDays[i].setAttribute("class", "haveData");



                        }

                        let box_in_out = document.createElement('div');
                        let incomCal = document.createElement('span');
                        let outComCal = document.createElement('span');
                        let iconUp = document.createElement('i');
                        let icondown = document.createElement('i');

                        incomCal.setAttribute("id", "in_" + numdate);
                        outComCal.setAttribute("id", "out_" + numdate);
                        incomCal.textContent = "הכנסות : " + cash_flow_cal[0] + ' ש"ח ';
                        outComCal.textContent = "הוצאות : " + cash_flow_cal[1] + ' ש"ח ';
                        incomCal.style.color = "#50dd50";
                        outComCal.style.color = "#ff3d67";

                        box_in_out.setAttribute("class", "box_in_out");
                        box_in_out.appendChild(incomCal);
                        box_in_out.appendChild(outComCal);


                        calDays[i].appendChild(box_in_out);

                        calDays[i].addEventListener("mouseover", () => {
                            box_in_out.style.display = "grid";


                        });
                        calDays[i].addEventListener("mouseout", () => {
                            box_in_out.style.display = "none";


                        });


                        calDays[i].style.borderColor = "rgb(255, 255, 255)";


                    }


                    var new_date_paste = shortMonth + " " + numdate + ", 2020";
                    var stringCalDate = new_date_paste.toString();
                    var numddateCal = Date.parse(stringCalDate);

                    if (i == numdate) {

                    }

                    datenumDb += numddateCal;

                }



            }




        }

        function setSetting() {
            function cleanDataChips() {
                chipsIn.innerHTML = "";
                chipsOut.innerHTML = "";
                getDataFromSettingForm();
            }

            function cleanRefDataChips() {
                chipsOutOption.innerHTML = "";
                chipsInOption.innerHTML = "";
                getOptionForSettingForm();
            }
            database.ref('/Users/' + user.uid + '/setting/firstSetting/').on('value', function (snapshot) {

                var currentval = snapshot.val().start;
                var after = snapshot.val().creditBank;
                var visa = snapshot.val().creditLine;
                var day = snapshot.val().importantDay;
                start_db.textContent = ' ש"ח ' + currentval;
                line_bank_db.textContent = ' ש"ח ' + after;
                line_card_db.textContent = ' ש"ח ' + visa;
                day_db.textContent = day;

            });

            function addKeywordfromSetting() {
                var searchKeyWord = document.getElementById("searchKeyWord");
                var groupInOutSetting = document.getElementsByName("groupInOutSetting");

                settingBtn.addEventListener("click", e => {
                    var val = searchKeyWord.value;
                    if (val !== "") {
                        groupInOutSetting.forEach(function (y) {


                            if (y.checked) {
                                if (y.id == "outChoise") {
                                    addKeyWord(val, "out");

                                } else if (y.id == "inChoise") {
                                    addKeyWord(val, "in");

                                }
                            }
                        });
                    } else {
                        alert("חסר פרטים!");
                    }
                    chipsIn.innerHTML = "";
                    chipsOut.innerHTML = "";
                    getDataFromSettingForm();
                });





            }
            function getDataFromSettingForm() {


                var defaultOutText = [];

                var defaultInText = [];
                var inWord = [];
                var outWord = [];
                let data = {};
                database.ref('/Users/' + user.uid + '/setting/text/').on('value', function (snapshot) {

                    var currentval = snapshot.val();
                    let keys = Object.keys(currentval);


                    for (var i = 0; i < keys.length; i++) {
                        var uid = keys[i];

                        database.ref('/Users/' + user.uid + '/setting/text/' + uid).on('value', function (snapshot) {

                            let newval = snapshot.val();
                            let newKeys = Object.keys(newval);

                            if (uid == 'out') {
                                for (var j = 0; j < newKeys.length; j++) {
                                    var outuid = newKeys[j];
                                    var currentObject = newval[outuid];

                                    outWord.push([outuid, currentObject.word]);
                                }
                            } else if (uid == "in") {
                                for (var j = 0; j < newKeys.length; j++) {
                                    var inuid = newKeys[j];
                                    var currentObject = newval[inuid];

                                    inWord.push([inuid, currentObject.word]);
                                }
                            }

                        });
                    }

                    defaultOutText.push(...outWord);

                    defaultInText.push(...inWord);
                    defaultOutText.forEach(T => {

                        let chipBox = document.createElement("div");
                        let iconExit = document.createElement("i");
                        let textChip = document.createElement("span");
                        textChip.textContent = T[1];
                        iconExit.textContent = "close";
                        // iconExit.setAttribute('id', "exit_" + T[0]);
                        chipBox.setAttribute("class", "chip");
                        chipBox.setAttribute('id', "chipBox" + T[0]);

                        iconExit.setAttribute("class", "tiny material-icons exitChip");

                        chipBox.appendChild(iconExit);
                        chipBox.appendChild(textChip);
                        chipsOut.appendChild(chipBox);
                        iconExit.addEventListener("click", e => {
                            var rowcorrect = document.getElementById('chipBox' + T[0]);
                            var row = rowcorrect.id;
                            var split = row.split("chipBox");
                            database.ref('/Users/' + user.uid + '/setting/text/out/' + split[1]).remove().then(function () {

                            }).catch(function (err) {
                            });
                            cleanDataChips();

                        })
                    });

                    defaultInText.forEach(T => {

                        let chipBox = document.createElement("div");
                        let iconExit = document.createElement("i");
                        let textChip = document.createElement("span");
                        textChip.textContent = T[1];
                        iconExit.textContent = "close";
                        // iconExit.setAttribute('id', "exit_" + T[0]);
                        chipBox.setAttribute('id', "chipBox" + T[0]);

                        chipBox.setAttribute("class", "chip");
                        iconExit.setAttribute("class", "tiny material-icons exitChip");

                        chipBox.appendChild(iconExit);
                        chipBox.appendChild(textChip);
                        chipsIn.appendChild(chipBox);
                        iconExit.addEventListener("click", e => {

                            var rowcorrect = document.getElementById('chipBox' + T[0]);
                            var row = rowcorrect.id;
                            var split = row.split("chipBox");
                            console.log(split[1]);
                            database.ref('/Users/' + user.uid + '/setting/text/in/' + split[1]).remove().then(function () {

                            }).catch(function (err) {
                            });
                            cleanDataChips();
                        })
                    });

                });

            }
            function getOptionForSettingForm() {


                var OptionOut = [
                    [0, "עבודה"],
                    [1, " חשמל ומים"],
                    [2, "חשמל"],
                    [3, "מים"],
                    [4, "ביטוחים"],
                    [5, "ביטוח חיים"],
                    [6, 'שכירות'],
                    [7, "רכב"],
                    [8, "דלק"]

                ]

                var OptionIn = [

                    [0, "משכורת"],
                    [1, "לקוחות"],
                    [2, "עסק"],

                ]

                OptionOut.forEach(T => {
                    database.ref('/Users/' + user.uid + '/setting/text/out/').orderByChild("word").equalTo(T[1]).once("value", snapshot => {
                        // console.log(snapshot);
                        if (snapshot) {
                            const userData = snapshot.val();
                            // console.log("exists!", userData);
                            if (userData == null) {
                                let chipBox = document.createElement("div");
                                let iconadd = document.createElement("i");
                                let textChip = document.createElement("span");
                                textChip.textContent = T[1];
                                iconadd.textContent = "add";
                                chipBox.setAttribute("class", "chip");
                                chipBox.setAttribute('id', "chip_Box" + T[0]);
                                textChip.setAttribute('id', "span_out" + T[0]);

                                iconadd.setAttribute("class", "tiny material-icons exitChip");

                                chipBox.appendChild(iconadd);
                                chipBox.appendChild(textChip);
                                chipsOutOption.appendChild(chipBox);
                                iconadd.addEventListener("click", e => {
                                    e.preventDefault();
                                    var rowcorrect = document.getElementById('chip_Box' + T[0]);
                                    var rowa = document.getElementById('span_out' + T[0]);
                                    var row = rowcorrect.id;
                                    var split = row.split("chip_Box");
                                    var value = rowa.innerHTML;
                                    addKeyWord(value, "out");

                                    cleanDataChips();
                                    cleanRefDataChips();

                                })
                            } else if (userData) {

                            }





                        }
                    });
                });

                OptionIn.forEach(T => {
                    database.ref('/Users/' + user.uid + '/setting/text/in/').orderByChild("word").equalTo(T[1]).once("value", snapshot => {
                        // console.log(snapshot);
                        if (snapshot) {
                            const userData = snapshot.val();
                            // console.log("exists!", userData);
                            if (userData == null) {
                                let chipBox = document.createElement("div");
                                let iconadd = document.createElement("i");
                                let textChip = document.createElement("span");
                                textChip.textContent = T[1];
                                iconadd.textContent = "add";
                                // iconExit.setAttribute('id', "exit_" + T[0]);
                                chipBox.setAttribute('id', "chip_Box" + T[0]);

                                chipBox.setAttribute("class", "chip");
                                iconadd.setAttribute("class", "tiny material-icons exitChip");
                                textChip.setAttribute('id', "span_in" + T[0]);
                                chipBox.appendChild(iconadd);
                                chipBox.appendChild(textChip);
                                chipsInOption.appendChild(chipBox);

                                iconadd.addEventListener("click", e => {
                                    e.preventDefault();

                                    var rowcorrect = document.getElementById('chip_Box' + T[0]);
                                    var rowa = document.getElementById('span_in' + T[0]);


                                    var row = rowcorrect.id;
                                    var split = row.split("chip_Box");
                                    var value = rowa.innerHTML;



                                    addKeyWord(value, "in");

                                    cleanDataChips();
                                    cleanRefDataChips();
                                })
                            } else if (userData) {

                            }
                        }
                    });
                });

            }
            getOptionForSettingForm();
            getDataFromSettingForm();
            addKeywordfromSetting();
        }

        setSetting();

        var changeToPlan = document.getElementById("changeToPlan");
        var lever = document.getElementById("lever");

        // var changeToPlan = document.getElementById("changeToPlan");
        changeToPlan.addEventListener("click", e => {
            var arrtibute = changeToPlan.getAttribute("class");
            var check = changeToPlan.style;
            console.log(arrtibute);
            if (arrtibute == 'uncheck') {
                changeToPlan.setAttribute("class", 'check');
                TABLE_PAGE_GET_DATA();
                mainTable.innerHTML = "";

                console.log('uncheck tuen to check');
            } else if (arrtibute == 'check') {
                changeToPlan.setAttribute("class", 'uncheck');
                console.log('check tuen to uncheck');
                mainTable.innerHTML = "";
                TABLE_PAGE_GET_DATA();
            }
            console.log(arrtibute);
        })

        function TABLE_PAGE_GET_DATA() {
            // var total_IN = 0;
            // var total_OUT = 0;
            database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').once('value').then(snapshot => {
                var arrtibute = changeToPlan.getAttribute("class");
                var titleBal = document.getElementById("titleBoxTableBalance");
                var titleIn = document.getElementById("titleBoxTableIn");
                var titleOut = document.getElementById("titleBoxTableOut");

                mainTable.innerHTML = "";
                // var checktempView = changeToPlan.getAttribute("class");
                let postArray = snapshot.val();
                let keys = Object.keys(postArray);
                let array = [];
                const newDate = createNewDate();
                var arrayafter = 0;
                var StatusCash = 0;
                let totalOutTopBox = 0;
                let totalIncomeTopBox = 0;
                var finalArray = [];

                function setStatusCashBox(sub, newdate) {
                    if (sub > newdate) {
                        var number = formatNumber(arrayafter.toFixed(2));
                        var splitnum = number.split(".");
                        let spanNum = document.createElement('span');
                        let numCor = document.createElement('span');

                        spanNum.setAttribute("class", "decimel");
                        numCor.setAttribute("class", "decimel");

                        spanNum.textContent = splitnum[1];
                        numCor.textContent = splitnum[1];


                        // num_currectStatusCash.textContent = splitnum[0] + '.';

                        Status.textContent = splitnum[0] + ".";
                        num_currectStatusCash.textContent = splitnum[0] + ".";

                        num_currectStatusCash.appendChild(numCor);
                        Status.appendChild(spanNum);
                        // console.log(splitnum);


                        var newBalance = Number(arrayafter.toFixed(2));
                        if (newBalance < 0) {
                            var sum = Number(currectLimit) + newBalance;
                            var new_num = "-" + currectLimit;
                        } else {

                            var sum = Number(currectLimit) + newBalance;

                        }

                    } else {
                    }


                    var newnum = Status.innerText;
                    var splitnum = newnum.split(' ');

                }
                var daysTableArr = [];
                // tableWeek.innerHTML = "";
                var weeklyCheckDate = [["ראשון", 6], ["שני", 5], ["שלישי", 4], ["רביעי", 3], ["חמישי", 2], ["שישי", 1],
                ["שבת", 7]]
                var weeklyArr = [["ראשון", 0, 0], ["שני", 0, 0], ["שלישי", 0, 0], ["רביעי", 0, 0], ["חמישי", 0, 0], ["שישי", 0, 0],
                ["שבת", 0, 0]]
                var Month_Arr = [['Jan', 0, 0], ['Feb', 0, 0], ['Mar', 0, 0], ['Apr', 0, 0], ['May', 0, 0], ['Jun', 0, 0],
                ['Jul', 0, 0], ['Aug', 0, 0], ['Sep', 0, 0], ['Oct', 0, 0], ['Nov', 0, 0], ['Dec', 0, 0]];

                var days_Arr = [[1, 0, 0], [2, 0, 0], [3, 0, 0], [4, 0, 0], [5, 0, 0], [6, 0, 0],
                [7, 0, 0], [8, 0, 0], [9, 0, 0], [10, 0, 0], [11, 0, 0], [12, 0, 0], [13, 0, 0],
                [14, 0, 0], [15, 0, 0], [16, 0, 0], [17, 0, 0], [18, 0, 0], [19, 0, 0],
                [20, 0, 0], [21, 0, 0], [22, 0, 0], [23, 0, 0], [24, 0, 0], [25, 0, 0],
                [26, 0, 0], [27, 0, 0], [28, 0, 0], [29, 0, 0], [30, 0, 0], [31, 0, 0]];
                var totalout = 0;
                var totalin = 0;

                for (var i = 0; i < keys.length; i++) {
                    var id = keys[i];
                    // let totalin = 0;
                    // let totalout = 0;
                    let totalIncome = 0;
                    let totalOut = 0;

                    var currentObject = postArray[id];
                    var currectnum = currentObject.totalCash;
                    var temp = currentObject.after;
                    var type = currentObject.type;
                    var date = currentObject.date;
                    var splitDate = date.split(" ");
                    var day = splitDate[1].split(',');
                    var clearnum = day[0].split("0");
                    var dateDayNum = new Date(date).getDay();
                    var newdateParse = Date.parse(date); // day db
                    var subdate = newDate.dateInNum; // today
                    var fulDate = new Date;
                    setStatusCashBox(subdate, newdateParse);

                    function inOrOut() {
                        if (i > 0 && type == 'out') {

                            totalOut -= currectnum;

                        } else if (i > 0 && type == 'in') {

                            totalIncome += currectnum;

                        }
                    }

                    function inOrOutTopBoxyearly() {
                        // days_Arr.forEach(x => {
                        //     if (x[0] == dateDayNum) {
                        // //         console.log(x);
                        //         if (type == 'out') {
                        //             // x[2] += currectnum;
                        //             // days_Arr[index][2] += currectnum;
                        //             totalOutTopBox += currectnum;


                        //         } else if (type == 'in') {
                        //             x[1] += currectnum;
                        //             // days_Arr[index][1] += currectnum;
                        //             totalIncomeTopBox += currectnum;
                        //         }
                        //     }

                        // })
                        // if (type == 'out') {

                        //     totalOutTopBox += currectnum;


                        // } else if (type == 'in') {

                        //     totalIncomeTopBox += currectnum;
                        // }
                    }


                    function inOrOutTopBoxMonthly() {
                        // console.log(dateDayNum);

                        // console.log(clearnum[1], day);

                        days_Arr.forEach(x => {
                            if (x[0] == dateDayNum) {
                                // console.log(x);
                                if (type == 'out') {
                                    x[2] += currectnum;
                                    // days_Arr[index][2] += currectnum;
                                    totalOutTopBox += currectnum;


                                } else if (type == 'in') {
                                    x[1] += currectnum;
                                    // days_Arr[index][1] += currectnum;
                                    totalIncomeTopBox += currectnum;
                                }
                            }

                        })
                        // var index = days_Arr.indexOf(clearnum[1]);
                        // console.log(index);

                        finalArray = days_Arr;

                    }


                    function inOrOutTopBoxbetweenDates() {

                    }

                    function inOrOutTopBox() {

                        for (var i = 0; i < weeklyCheckDate.length; i++) {
                            // console.log(weeklyCheckDate[i][1], dateDayNum);
                            if (weeklyCheckDate[i][1] == dateDayNum) {
                                if (type == 'out') {
                                    weeklyArr[i][2] += currectnum;
                                    totalOutTopBox += currectnum;
                                } else if (type == 'in') {
                                    weeklyArr[i][1] += currectnum;
                                    totalIncomeTopBox += currectnum;
                                }
                            }
                        }
                        // console.log(finalArray);
                        finalArray = weeklyArr;
                    }

                    var sum = 0;

                    if (arrtibute == "check") {

                        arrayafter += currectnum;
                        sum = arrayafter;
                        inOrOut();
                    } else if (arrtibute == "uncheck") {
                        if (temp !== true) {
                            arrayafter += currectnum;
                            sum = arrayafter;

                            inOrOut();
                        }

                    }

                    var titledate = date.split(" ");
                    totalOut += totalout;
                    totalIncome += totalin;
                    var coreect_href = location.href;

                    groupView.forEach(e => {

                        var key = e.checked;
                        var uid = e.id;
                        if (key) {

                            if (uid == "chooseMonthly") {

                                titleIn.textContent = "הכנסות חודשיות";
                                titleOut.textContent = "הוצאות חודשיות";
                                titleBal.textContent = "מאזן חודשי";

                                if (newDate.month == splitDate[0]) {


                                    if (arrtibute == "check") {
                                        inOrOutTopBoxMonthly();
                                        laodUpData(id, currentObject, StatusCash, currectLimit, arrayafter, sum);
                                    } else if (arrtibute == "uncheck") {
                                        if (temp !== true) {
                                            inOrOutTopBoxMonthly();
                                            laodUpData(id, currentObject, StatusCash, currectLimit, arrayafter, sum);
                                        }
                                    }

                                }
                                finalArray = days_Arr;
                            } else if (uid == "chooseYearly") {

                                titleIn.textContent = "הכנסות שנתי";
                                titleOut.textContent = "הוצאות שנתי";
                                titleBal.textContent = "מאזן שנתי";
                                var index = "";



                                var xin = 0;
                                var xout = 0;

                                for (var j = 0; j < Month_Arr.length; j++) {
                                    if (arrtibute == "check") {

                                        if (Month_Arr[j][0] == splitDate[0]) {
                                            if (type == 'out') {
                                                xout += currectnum;

                                                // xout += currectnum;
                                            } else if (type = 'in') {
                                                xin += currectnum;

                                                // Month_Arr[j][1] += currectnum;
                                            }

                                        }

                                    } else if (arrtibute == "uncheck") {
                                        if (temp !== true) {

                                            if (Month_Arr[j][0] == splitDate[0]) {
                                                if (type == 'out') {
                                                    xout += currectnum;
                                                    // Month_Arr[j][2] += currectnum;
                                                } else if (type = 'in') {
                                                    // Month_Arr[j][1] += currectnum;
                                                    xin += currectnum;

                                                }

                                            }
                                        }
                                    }
                                }
                                console.log(xin);

                                Month_Arr.forEach(x => {
                                    if (x[0] == splitDate[0]) {
                                        x[1] += xin;
                                        x[2] += xout;
                                        totalout += xout;
                                        totalin += xin;
                                    }
                                })
                                total_IN = totalin;
                                total_OUT = totalout;
                                // console.log(totalout, totalin);
                                finalArray = Month_Arr;

                            } else if (uid == "choosWeekly") {

                                titleIn.textContent = "הכנסות שבועיות";
                                titleOut.textContent = "הוצאות שבועיות";
                                titleBal.textContent = "מאזן שבועי";

                                const weekly = lastday(fulDate);
                                var first_Full_day = weekly.firstday;
                                var last_Full_day = weekly.lastday;
                                var first_day = foramtDate(first_Full_day);
                                var last_day = foramtDate(last_Full_day);
                                if (id < last_day.num && id > first_day.num) {


                                    if (arrtibute == "check") {
                                        laodUpData(id, currentObject, StatusCash, currectLimit, arrayafter, sum);

                                        inOrOutTopBox();
                                    } else if (arrtibute == "uncheck") {
                                        if (temp !== true) {
                                            laodUpData(id, currentObject, StatusCash, currectLimit, arrayafter, sum);

                                            inOrOutTopBox();
                                        }
                                    }

                                }
                                // finalArray = finalArrayMOnth;

                            } else if (uid == "chooseBitweenDates") {

                                const days = getBitweenDates();

                                if (id < days.eDay && id > days.sDay) {


                                    if (arrtibute == "check") {
                                        laodUpData(id, currentObject, StatusCash, currectLimit, arrayafter, sum);

                                        inOrOutTopBox();
                                    } else if (arrtibute == "uncheck") {

                                        if (temp !== true) {
                                            laodUpData(id, currentObject, StatusCash, currectLimit, arrayafter, sum);

                                            inOrOutTopBox();
                                        }
                                    }
                                }
                                // finalArray = finalArrayMOnth;

                            }

                        }


                    });

                    array.push([splitDate[0], totalOut, totalIncome]);

                    let updatessettingB = {};
                    let postdataSettingB = {
                        totalCash: totalOut

                    }

                    updatessettingB['/Users/' + user.uid + '/monthly/' + titledate[0] + '/out/' + id] = postdataSettingB;
                    firebase.database().ref().update(updatessettingB);

                    let updatessetting = {};
                    let postdataSetting = {
                        totalCash: totalIncome
                    }

                    updatessetting['/Users/' + user.uid + '/monthly/' + titledate[0] + '/in/' + id] = postdataSetting;
                    firebase.database().ref().update(updatessetting);

                    nArray = array;

                    // tableWeek.innerHTML = ""


                }


                // document.addEventListener('click', e => {
                //     var key = e.target.id;
                //     console.log(key);
                // })
                // console.log(array);
                // console.log();
                // console.log(finalArray);
                // console.log(totalOutTopBox, totalIncomeTopBox);
                loadIncomingOutForTable(totalIncomeTopBox, totalOutTopBox);
                // chartTableYearly(days);
                groupView.forEach(e => {

                    var key = e.checked;
                    var uid = e.id;
                    if (key) {

                        if (uid == "chooseMonthly") {
                            chartTableYearly(finalArray);

                        } else if (uid == "chooseBitweenDates") {

                        } else if (uid == "chooseYearly") {
                            // console.log('2');

                            chartTableYearly(finalArray);
                            // var sum = xin + xout;
                            var start = Limit;
                            var num_in = 0;
                            var num_out = 0;
                            finalArray.forEach(y => {
                                var sum = y[1] + y[2];
                                num_in += y[1];
                                num_out += y[2];
                                start += sum;
                                // console.log(start);
                                // var after =
                                loadYearly(y, start);
                            })
                            loadIncomingOutForTable(num_in, num_out);


                        } else if (uid == "choosWeekly") {

                            chartTableYearly(finalArray);
                        }
                    }
                });

                // console.log(info);
            });

        }

        function HOME_PAGE_GET_DATA_FOR_CALNDER() {

            database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').on('value', function (snapshot) {

                let postArray = snapshot.val();
                let keys = Object.keys(postArray);
                var arrayafter = 0;
                var StatusCash = 0;
                var weekNewArr = []

                for (var i = 0; i < keys.length; i++) {
                    var id = keys[i];
                    let totalout = 0;
                    let totalIncome = 0;
                    let totalOut = 0;
                    var currentObject = postArray[id];
                    var currectnum = currentObject.totalCash;
                    arrayafter += currectnum;
                    var type = currentObject.type;
                    var date = currentObject.date;

                    if (i > 0 && type == 'out') {
                        totalOut -= currectnum;
                    } else if (i > 0 && type == 'in') {
                        totalIncome += currectnum;
                    }
                    totalOut += totalout;

                    var newData = new Date();
                    lastday(newData);
                    var fDay = Date.parse(weekly.firstday);
                    var lDay = Date.parse(weekly.lastday);

                    if (id >= fDay && id <= lDay) {
                        weekNewArr.push([id, currentObject]);
                    }
                    getDatesFromCalender(id, currentObject, StatusCash, currectLimit, arrayafter);
                }

            });
        }

        function HOME_PAGE_GET_DATA_FOR_WEEKLY() {
            // const new__Date = createNewDate();
            database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').once('value').then(snapshot => {
                var dates = [
                    ["ראשון", 0],
                    ["שני", 1],
                    ["שלישי", 2],
                    ["רביעי", 3],
                    ["חמישי", 4],
                    ["שישי", 5],
                    ["שבת", 6]
                ];
                var days = [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0],
                [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0], [13, 0],
                [14, 0], [15, 0], [16, 0], [17, 0], [18, 0], [19, 0],
                [20, 0], [21, 0], [22, 0], [23, 0], [24, 0], [25, 0],
                [26, 0], [27, 0], [28, 0], [29, 0], [30, 0], [31, 0]];

                // mainTable.innerHTML = "";
                let postArray = snapshot.val();
                let keys = Object.keys(postArray);
                var arrayafter = 0;
                var StatusCash = 0;
                var weekNewArr = [];
                var monthlyArr = [];

                const thisMonth = createNewDate();

                for (var i = 0; i < keys.length; i++) {

                    var id = keys[i];
                    let totalout = 0;
                    let totalIncome = 0;
                    let totalOut = 0;

                    var currentObject = postArray[id];
                    var currectnum = currentObject.totalCash;
                    var checkTemp = currentObject.after;


                    arrayafter += currectnum;

                    var type = currentObject.type;
                    var date = currentObject.date;

                    // var newdateParse = Date.parse(date); // day db
                    // var subdate = new__Date.dateInNum;
                    // setStatusCashBox(subdate, newdateParse);
                    var splitDate = date.split(" ");
                    var month = splitDate[0];
                    if (checkTemp !== true) {
                        if (thisMonth.month == month) {
                            monthlyArr.push([id, currentObject]);
                        }

                        var newData = new Date();
                        lastday(newData);
                        var fDay = Date.parse(weekly.firstday);
                        var lDay = Date.parse(weekly.lastday);

                        if (id >= fDay && id <= lDay) {

                            weekNewArr.push([id, currentObject]);
                        }

                    }

                }

                var suminWeekly = 0;
                var sumoutWeekly = 0;
                var suminMonthly = 0;
                var sumoutMonthly = 0;


                for (var h = 0; h < monthlyArr.length; h++) {
                    var cordate = monthlyArr[h][1];
                    var cashval = cordate.totalCash;
                    var type = cordate.type;
                    var date = cordate.date;
                    var slitDate = date.split(" ");
                    var numDay = Number(slitDate[1].split(',')[0]);
                    var index = daysArr.indexOf(numDay);
                    days[index][1] = cashval;
                    if (type == 'out') {
                        sumoutMonthly += cashval;
                    } else if (type == 'in') {
                        suminMonthly += cashval;
                    }

                }

                for (var i = 0; i < weekNewArr.length; i++) {
                    var cordate = weekNewArr[i][1];
                    var cashval = cordate.totalCash;
                    var type = cordate.type;
                    var date = new Date(cordate.date);
                    for (J = 0; J < dates.length; J++) {
                        // console.log(dates[J][1]);
                        if (dates[J][1] == date.getDay()) {
                            dates[J][1] = cashval;
                            if (type == 'out') {
                                sumoutWeekly += cashval;
                            } else if (type == 'in') {
                                suminWeekly += cashval;
                            }
                        }
                    }

                }

                // console.log(suminWeekly, sumoutWeekly, suminMonthly, sumoutMonthly);
                // // chartMonthly(thisMonth.month, suminMonthly, sumoutMonthly);
                groupChartHome.forEach(x => {
                    if (x.checked) {
                        // console.log(x.checked, x.id);
                        if (x.id == 'monthlyChart') {
                            var get = chartYearly.children;

                            // chartYearly.innerHTML = " ";         
                            // chartYearly.removeChild(get[0])
                            var numout = formatNumber(sumoutMonthly.toFixed(2));
                            var splitout = numout.split(".");
                            let spannumout = document.createElement("span");
                            spannumout.setAttribute("class", "decimel");
                            spannumout.textContent = splitout[1];

                            num_expendMonth.textContent = splitout[0] + ".";
                            num_expendMonth.appendChild(spannumout);

                            var numin = formatNumber(suminMonthly.toFixed(2));
                            var splitin = numin.split(".");
                            let spannumin = document.createElement("span");
                            spannumin.setAttribute("class", "decimel");
                            spannumin.textContent = splitin[1];

                            num_incomingMonth.textContent = splitin[0] + ".";
                            num_incomingMonth.appendChild(spannumin);

                            var sum = sumoutMonthly + suminMonthly;

                            var numbalance = formatNumber(sum.toFixed(2));
                            var splitbalance = numbalance.split(".");
                            let spannumbalance = document.createElement("span");
                            spannumbalance.setAttribute("class", "decimel");
                            spannumbalance.textContent = splitbalance[1];

                            num_balanceMonth.textContent = splitbalance[0] + ".";
                            num_balanceMonth.appendChild(spannumbalance);
                            console.log(suminMonthly, sumoutMonthly);
                            loadIncomingOut(suminMonthly, sumoutMonthly);
                            console.log(days);
                            chartTable(days);
                        } else if (x.id == 'weeklyChart') {
                            var numout = formatNumber(sumoutWeekly.toFixed(2));
                            var splitout = numout.split(".");
                            let spannumout = document.createElement("span");
                            spannumout.setAttribute("class", "decimel");
                            spannumout.textContent = splitout[1];

                            num_expendMonth.textContent = splitout[0] + ".";
                            num_expendMonth.appendChild(spannumout);

                            var numin = formatNumber(suminWeekly.toFixed(2));
                            var splitin = numin.split(".");
                            let spannumin = document.createElement("span");
                            spannumin.setAttribute("class", "decimel");
                            spannumin.textContent = splitin[1];

                            num_incomingMonth.textContent = splitin[0] + ".";
                            num_incomingMonth.appendChild(spannumin);

                            var sum = sumoutWeekly + suminWeekly;

                            var numbalance = formatNumber(sum.toFixed(2));
                            var splitbalance = numbalance.split(".");
                            let spannumbalance = document.createElement("span");
                            spannumbalance.setAttribute("class", "decimel");
                            spannumbalance.textContent = splitbalance[1];

                            num_balanceMonth.textContent = splitbalance[0] + ".";
                            num_balanceMonth.appendChild(spannumbalance);
                            // console.log(days);
                            var get = chartYearly.children;
                            // console.log(get[0]);
                            // console.log(suminWeekly, sumoutWeekly);

                            loadIncomingOut(suminWeekly, sumoutWeekly);
                            chartTable(dates);
                            // console.log(dates);

                        }
                    }
                    // console.log(x.checked, x.id)

                });

            });
        }

        function SEARCH_PAGE_GET() {

            var textSearch = document.getElementById("nameSearch");
            var lowCash = document.getElementById("lowSearch");
            var highCash = document.getElementById("highSearch");
            var date = document.getElementById("dateSearch");
            var typeCashSearch = document.getElementById("typeCashSearch");

            SearchForm.addEventListener("submit", e => {
                e.preventDefault();
                tableData.innerHTML = "";
                var dateVal = date.value;
                var highCashVal = highCash.value;
                var lowCashVal = lowCash.value;
                var textSearchVal = textSearch.value;
                var typeCashVal = typeCashSearch.value;
                var num = Date.parse(dateVal);
                console.log(typeCashVal, textSearchVal);
                var obg = [];

                if (textSearchVal === "" && typeCashVal !== "") {
                    database.ref('/Users/' + user.uid + '/cashflow/').orderByChild("wayPay").equalTo(typeCashVal).once('value').then(snapshot => {

                        console.log(snapshot);
                        let postArray = snapshot.val();
                        console.log(postArray);

                        let keys = Object.keys(postArray);
                        // const newDate = createNewDate();
                        for (var i = 0; i < keys.length; i++) {

                            var id = keys[i];
                            var currentObject = postArray[id];
                            var currectnum = currentObject.totalCash;
                            var type = currentObject.type;
                            var date = currentObject.date;
                            var title = currentObject.title;
                            var st = currentObject.status;
                            var way = currentObject.wayPay;
                            console.log(Date.parse(date));
                            if (id == num) {
                                console.log(currentObject);
                                if (lowCashVal !== "" && highCashVal === "") {
                                    console.log(currectnum, lowCashVal);
                                    if (currectnum < lowCashVal) {
                                        console.log("סכום מתחת");
                                        addToSearchBox(title, date, st, currectnum, way);
                                    }

                                } else if (lowCashVal === "" && highCashVal !== "") {
                                    if (currectnum > highCashVal) {
                                        console.log("סכום מעל");
                                        addToSearchBox(title, date, st, currectnum, way);
                                    }

                                } else if (lowCashVal !== "" && highCashVal !== "") {
                                    if (currectnum > highCashVal && currectnum > highCashVal) {
                                        console.log("סכום מעל ומתחת");
                                        addToSearchBox(title, date, st, currectnum, way);
                                    }


                                } else if (lowCashVal === "" && highCashVal === "") {
                                    addToSearchBox(title, date, st, currectnum, way);
                                    obg.push(currentObject);
                                }

                                obg.push(currentObject);
                            } else {
                                console.log(currentObject);
                                if (lowCashVal !== "" && highCashVal === "") {
                                    console.log(currectnum, lowCashVal);
                                    if (currectnum < lowCashVal) {
                                        console.log("סכום מתחת");
                                        addToSearchBox(title, date, st, currectnum, way);
                                    }

                                } else if (lowCashVal === "" && highCashVal !== "") {
                                    if (currectnum > highCashVal) {
                                        console.log("סכום מעל");
                                        addToSearchBox(title, date, st, currectnum, way);
                                    }

                                } else if (lowCashVal !== "" && highCashVal !== "") {
                                    if (currectnum > highCashVal && currectnum > highCashVal) {
                                        console.log("סכום מעל ומתחת");
                                        addToSearchBox(title, date, st, currectnum, way);
                                    }


                                } else if (lowCashVal === "" && highCashVal === "") {
                                    addToSearchBox(title, date, st, currectnum, way);
                                    obg.push(currentObject);
                                }

                                obg.push(currentObject);
                            }

                        }

                    });
                    console.log('dfgh');
                    // BetweenSum(lowCashVal, highCashVal);
                } else if (typeCashVal === "" && textSearchVal !== "") {
                    database.ref('/Users/' + user.uid + '/cashflow/').orderByChild("title").equalTo(textSearchVal).once('value').then(snapshot => {

                        console.log(snapshot);
                        let postArray = snapshot.val();
                        console.log(postArray);

                        let keys = Object.keys(postArray);
                        for (var i = 0; i < keys.length; i++) {

                            var id = keys[i];
                            var currentObject = postArray[id];
                            var currectnum = currentObject.totalCash;
                            var type = currentObject.type;
                            var date = currentObject.date;
                            var st = currentObject.status;
                            var way = currentObject.wayPay;

                            var title = currentObject.title;
                            console.log(currentObject);
                            if (id == num) {
                                if (lowCashVal !== "" && highCashVal === "") {
                                    console.log(currectnum, lowCashVal);
                                    if (currectnum < lowCashVal) {
                                        console.log("סכום מתחת");
                                        addToSearchBox(title, date, st, currectnum, way);
                                    }

                                } else if (lowCashVal === "" && highCashVal !== "") {
                                    if (currectnum > highCashVal) {
                                        console.log("סכום מעל");
                                        addToSearchBox(title, date, st, currectnum, way);
                                    }

                                } else if (lowCashVal !== "" && highCashVal !== "") {
                                    if (currectnum > highCashVal && currectnum > highCashVal) {
                                        console.log("סכום מעל ומתחת");
                                        addToSearchBox(title, date, st, currectnum, way);
                                    }


                                } else if (lowCashVal === "" && highCashVal === "") {
                                    addToSearchBox(title, date, st, currectnum, way);
                                    obg.push(currentObject);
                                }
                                // addToSearchBox(title, date, st, currectnum, way);
                            } else {
                                if (lowCashVal !== "" && highCashVal === "") {
                                    console.log(currectnum, lowCashVal);
                                    if (currectnum < lowCashVal) {
                                        console.log("סכום מתחת");
                                        addToSearchBox(title, date, st, currectnum, way);
                                    }

                                } else if (lowCashVal === "" && highCashVal !== "") {
                                    if (currectnum > highCashVal) {
                                        console.log("סכום מעל");
                                        addToSearchBox(title, date, st, currectnum, way);
                                    }

                                } else if (lowCashVal !== "" && highCashVal !== "") {
                                    if (currectnum > highCashVal && currectnum > highCashVal) {
                                        console.log("סכום מעל ומתחת");
                                        addToSearchBox(title, date, st, currectnum, way);
                                    }


                                } else if (lowCashVal === "" && highCashVal === "") {
                                    addToSearchBox(title, date, st, currectnum, way);
                                    obg.push(currentObject);
                                }
                            }

                        }
                        // console.log(info);

                    });
                    // BetweenSum(lowCashVal, highCashVal);
                } else if (typeCashVal !== "" && textSearchVal !== "") {
                    database.ref('/Users/' + user.uid + '/cashflow/').orderByChild("title").equalTo(textSearchVal).once('value').then(snapshot => {

                        console.log(snapshot);
                        let postArray = snapshot.val();
                        console.log(postArray);

                        let keys = Object.keys(postArray);

                        for (var i = 0; i < keys.length; i++) {

                            var id = keys[i];
                            var currentObject = postArray[id];
                            var currectnum = currentObject.totalCash;
                            var type = currentObject.type;
                            var date = currentObject.date;
                            var st = currentObject.status;
                            var title = currentObject.title;
                            var way = currentObject.wayPay;
                            console.log(currentObject);

                            console.log(way, typeCashVal);
                            if (way === typeCashVal) {
                                // addToSearchBox(title, date, st, currectnum, way);
                                console.log('succses');
                                obg.push(currentObject);

                                if (lowCashVal !== "" && highCashVal === "") {
                                    console.log(currectnum, lowCashVal);
                                    if (currectnum < lowCashVal) {
                                        console.log("סכום מתחת");
                                        addToSearchBox(title, date, st, currectnum, way);
                                    }

                                } else if (lowCashVal === "" && highCashVal !== "") {
                                    if (currectnum > highCashVal) {
                                        console.log("סכום מעל");
                                        addToSearchBox(title, date, st, currectnum, way);
                                    }

                                } else if (lowCashVal !== "" && highCashVal !== "") {
                                    if (currectnum > highCashVal && currectnum > highCashVal) {
                                        console.log("סכום מעל ומתחת");
                                        addToSearchBox(title, date, st, currectnum, way);
                                    }


                                } else if (lowCashVal === "" && highCashVal === "") {
                                    addToSearchBox(title, date, st, currectnum, way);
                                    obg.push(currentObject);
                                }
                            }
                        }

                    });

                } else if (typeCashVal === "" && textSearchVal === "") {
                    alert("חייב לפחות או חיפוש לפי שם או חיפוש לפי תנאי תשלום");
                    // BetweenSum(lowCashVal, highCashVal);
                    if (lowCashVal !== "" && highCashVal === "") {
                        console.log(currectnum, lowCashVal);
                        if (currectnum < lowCashVal) {
                            console.log("סכום מתחת");
                            addToSearchBox(title, date, st, currectnum, way);
                        }

                    } else if (lowCashVal === "" && highCashVal !== "") {
                        if (currectnum > highCashVal) {
                            console.log("סכום מעל");
                            addToSearchBox(title, date, st, currectnum, way);
                        }

                    } else if (lowCashVal !== "" && highCashVal !== "") {
                        if (currectnum > highCashVal && currectnum > highCashVal) {
                            console.log("סכום מעל ומתחת");
                            addToSearchBox(title, date, st, currectnum, way);
                        }


                    } else if (lowCashVal === "" && highCashVal === "") {
                        addToSearchBox(title, date, st, currectnum, way);
                        obg.push(currentObject);
                    }
                }
                // function BetweenSum(low, high) {

                // }

                textSearch.value = "";
                lowCash.value = "";
                highCash.value = "";
                date.value = "";
                typeCashSearch.value = "";

                function addToSearchBox(title, date, type, cash, way) {

                    // let delteboxtd = document.createElement('td');
                    // let icondelete = document.createElement('i');
                    let rowtable = document.createElement('tr');
                    let titleCash = document.createElement('td');
                    let typeCash = document.createElement('td');
                    let DateCash = document.createElement('td');
                    let TotalCash = document.createElement('td');
                    let wayCash = document.createElement('td');

                    titleCash.textContent = title;
                    typeCash.textContent = type;
                    DateCash.textContent = date;
                    TotalCash.textContent = cash;
                    wayCash.textContent = way;


                    rowtable.appendChild(TotalCash);

                    rowtable.appendChild(wayCash);
                    rowtable.appendChild(typeCash);
                    rowtable.appendChild(DateCash);
                    rowtable.appendChild(titleCash);
                    tableData.appendChild(rowtable);
                    // let ty = document.createElement('td');

                    // tableData
                }

                console.log(dateVal, highCashVal, lowCashVal, textSearchVal);
            })





        }

        SEARCH_PAGE_GET();

        document.addEventListener('click', (e) => {


            HomeRow = document.getElementById('HomeRow');
            var TableRow = document.getElementById('TableRow');
            var SettingRow = document.getElementById('SettingRow');

            var page = e.target.id;
            if (page == 'HomeMenu' || page == 'Home_Menu' || page == 'iHomeMenu') {
                settingPage.style.display = 'none';
                HOME_PAGE_GET_DATA_FOR_WEEKLY()

                Tableview.style.display = 'none';
                home.style.display = 'block';
                HomeRow.style.background = "rgba(61, 161, 255, 0.5)";
                TableRow.style.background = "none";
                SettingRow.style.background = "none";
            } else if (page == 'TableviewMenu' || page == 'Tableview_Menu' || page == 'iTableView') {
                TABLE_PAGE_GET_DATA();

                settingPage.style.display = 'none';
                home.style.display = 'none';
                Tableview.style.display = 'block';
                HomeRow.style.background = "none";
                TableRow.style.background = "rgba(61, 161, 255, 0.5)";
                SettingRow.style.background = "none";
            } else if (page == 'SettingTitle' || page == 'SettingMenu' || page == 'iSetting') {


                settingPage.style.display = 'grid';

                home.style.display = 'none';
                Tableview.style.display = 'none';
                HomeRow.style.background = "none";
                TableRow.style.background = "none";
                SettingRow.style.background = "rgba(61, 161, 255, 0.5)";

            } else if (page == 'logOut') {
                home.style.display = 'none';
                Tableview.style.display = 'none';
                settingPage.style.display = 'none';

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

            if (page == 'choosWeekly') {

                bitweenClose();
                TABLE_PAGE_GET_DATA();
            } else if (page == 'chooseMonthly') {

                bitweenClose();
                TABLE_PAGE_GET_DATA();
            } else if (page == 'chooseYearly') {

                bitweenClose();
                TABLE_PAGE_GET_DATA();
            } else if (page == 'chooseBitweenDates') {

                bitweenDates.style.display = "block";
                btn_BitweenDates.addEventListener('click', e => {
                    TABLE_PAGE_GET_DATA();
                })
            }

            if (page == 'monthlyChart') {
                HOME_PAGE_GET_DATA_FOR_WEEKLY();
            } else if (page == 'weeklyChart') {
                HOME_PAGE_GET_DATA_FOR_WEEKLY();

            }
        });

        buttonSettingFirst.addEventListener('click', (e) => {
            e.preventDefault();
            var startYear = document.getElementById("startYear");
            var bankLine = document.getElementById("bankLine");
            var creditLine = document.getElementById("creditLine");
            var dateExpend = document.getElementById("imporatntDate");



            var status_Start = startYear.value;
            var credit_Line = creditLine.value;
            var credit_Bank = bankLine.value;
            var date_Expend = dateExpend.value;
            var start_Date = "Jan 1, 2020";
            let updatessetting = {};
            var time = new Date();
            let postdataSetting = {
                start: Number(status_Start),
                creditLine: Number(credit_Line),
                creditBank: Number(credit_Bank),
                startDate: start_Date,
                cuurentCash: Number(status_Start),
                time: time,
                importantDay: date_Expend
            }
            var numDate = Date.parse(start_Date);
            let updates = {};
            var time = new Date();
            var contain = status_Start.includes("-");
            var currectCash = 0;
            if (contain == true) {
                let postdata = {
                    title: "התחלה",
                    date: start_Date,
                    totalCash: Number(status_Start),
                    after: Number(status_Start),
                    time: time,
                    type: 'out',
                    wayPay: "",
                    status: ""
                }
                updates['/Users/' + user.uid + '/cashflow/' + numDate] = postdata;
                firebase.database().ref().update(updates);
            } else {
                let postdata = {
                    title: "התחלה",
                    date: start_Date,
                    totalCash: Number(status_Start),
                    after: Number(status_Start),
                    time: time,
                    type: 'in',
                    wayPay: "",
                    status: ""
                }
                updates['/Users/' + user.uid + '/cashflow/' + numDate] = postdata;
                firebase.database().ref().update(updates);
            }
            updatessetting['/Users/' + user.uid + '/setting/' + 'firstSetting/'] = postdataSetting;
            firebase.database().ref().update(updatessetting);
            startP.value = '';
            creditLine.value = '';
            creditBank.value = '';
            startD.value = '';
            mainTable.innerHTML = "";
        });

        flagOut.addEventListener("click", e => {
            var styleflagOut = flagOut.style.color;
            console.log(styleflagOut);
            var st = false;

            if (styleflagOut == "") {
                flagOut.style.color = "#ff3d67";
                st = true;
            } else if (styleflagOut == "#ff3d67" || styleflagOut == "rgb(255, 61, 103)") {
                flagOut.style.color = "";
                st = false;
            }

        });

        flagloan.addEventListener("click", e => {
            var styleflagloan = flagloan.style.color;
            console.log(styleflagloan);
            var st = false;

            if (styleflagloan == "") {
                flagloan.style.color = "#ff3d67";
                st = true;
            } else if (styleflagloan == "#ff3d67" || styleflagloan == "rgb(255, 61, 103)") {
                flagloan.style.color = "";
                st = false;
            }

        });

        flagSave.addEventListener("click", e => {
            var styleflag = flagSave.style.color;
            console.log(styleflag);
            var st = false;

            if (styleflag == "") {
                flagSave.style.color = "#50dd50";
                st = true;
            } else if (styleflag == "#50dd50" || styleflag == "rgb(80, 221, 80)") {
                flagSave.style.color = "";
                st = false;
            }

        });
        flag.addEventListener("click", e => {
            var styleflag = flag.style.color;
            console.log(styleflag);
            var st = false;

            if (styleflag == "") {
                flag.style.color = "#50dd50";
                st = true;
            } else if (styleflag == "#50dd50" || styleflag == "rgb(80, 221, 80)") {
                flag.style.color = "";
                st = false;
            }

        });

        loanForm.addEventListener('submit', (e) => {
            e.preventDefault();

            var style_flagloan = flagloan.style.color;
            var st = false;

            if (style_flagloan == "") {
                st = false;
            } else if (style_flagloan == "#ff3d67" || style_flagloan == "rgb(255, 61, 103)") {
                st = true;
            }

            var infoLoanVal = infoLoan.value;
            var bankTypeVal = bankType.value;
            var CashLoanVal = "-" + CashLoan.value;
            var totalYearVal = totalYear.value;
            var startLoanVal = startLoan.value;
            var splitDate = startLoanVal.toString().split(" ");
            var monthb = splitDate[0];
            var day = splitDate[1];
            var year = splitDate[2];
            var sumPay = 0;
            var countMOnth = totalYearVal * 12;
            var monthPay = 0;
            var sum = CashLoanVal / countMOnth;
            var fixSum = sum.toFixed(0);


            if (year < corectYear) {

                monthPay = 12 - month[monthb];
                sumPay = monthPay * fixSum;
                left = CashLoanVal - sumPay;

            }

            var correctYearcash = 12 * fixSum;
            var totalleft = CashLoanVal - sumPay - correctYearcash;

            var leftyear = totalleft / fixSum / 12;
            var correctleftYear = leftyear.toFixed(1);

            let newP = firebase.database().ref().child('Users').child(user.uid).child('loan').push().key;
            let newu = {};
            let pos = {

                title: bankTypeVal,
                info: infoLoanVal,
                numYear: totalYearVal,
                startdate: startLoanVal,
                totalCash: CashLoanVal,
                monthlyPay: fixSum

            }

            newu['/Users/' + user.uid + '/loan/' + newP] = pos;
            firebase.database().ref().update(newu);

            for (var x in month) {
                console.log(x, month);
                var loandate = x + " " + day + " " + corectYear;
                var TypeCashLoan = 'הלוואה';
                var typePaymentloan = "הוראת קבע";
                var type_Way_Pay_laon = infoLoanVal + " הלוואה ";
                var title = bankTypeVal + " בנק ";
                // console.log("out", infoLoanVal, title, loandate, fixSum, 'yearly', type_Way_Pay_laon);



                addDb("out", infoLoanVal, title, loandate, fixSum, 'yearly', type_Way_Pay_laon, st);

            }

        });

        incomingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            aotucomplete();

            var style_flag = flag.style.color;
            var st = false;

            if (style_flag == "") {
                st = false;
            } else if (style_flag == "#50dd50" || style_flag == "rgb(80, 221, 80)") {
                st = true;
            }

            console.log(st);
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

            addDb("in", infoCashIN, TypeCashIN, dateCashIN, totalCashIN, typePayment, type_Way_Pay, st);

        });

        outcomingForm.addEventListener('submit', (e) => {

            e.preventDefault();
            aotucomplete();
            var style_flagOut = flagOut.style.color;
            var st = false;

            if (style_flagOut == "") {
                st = false;
            } else if (style_flagOut == "#ff3d67" || style_flagOut == "rgb(255, 61, 103)") {
                st = true;
            }
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

            addDb("out", infoCashOUT, TypeCashOUT, dateCashOUT, totalCashOUT, typePaymentout, type_Way_Pay, st);
        });
        SaveForm.addEventListener('submit', (e) => {

            e.preventDefault();

            var style_flagSave = flagSave.style.color;
            var st = false;

            if (style_flagSave == "") {
                st = false;
            } else if (style_flagSave == "#50dd50" || style_flagSave == "rgb(80, 221, 80)") {
                st = true;
            }
            var typePaymentout = "";
            var type_Way_Pay = "";



            var infoCashOUT = "";
            var TypeCashOUT = nameSave.value;
            var dateCashOUT = startSave.value;
            var totalCashOUT = '-' + sumSave.value;

            groupSave.forEach(function (y) {
                if (y.checked) {
                    console.log(y);
                    var W = y.id;
                    if (W == "onceSave") {

                        typePaymentout = "once";
                        type_Way_Pay = "חסכון חודשי";
                        console.log("out", infoCashOUT, TypeCashOUT, dateCashOUT, totalCashOUT, typePaymentout, type_Way_Pay, st);

                        addDb("out", infoCashOUT, TypeCashOUT, dateCashOUT, totalCashOUT, typePaymentout, type_Way_Pay, st);

                    } else if (W == "monthlySave") {
                        type_Way_Pay = "חסכון חד פעמי";
                        typePaymentout = "once";
                        var day = dateCashOUT.split(" ")[1].split(',')[0];
                        var numMonth = montharr.indexOf(dateCashOUT.split(" ")[0]);
                        // var totalYear = 11 - numMonth;
                        for (var i = numMonth; i < 12; i++) {
                            var month = montharr[i];
                            var newDate = month + " " + day + ", 2020";
                            console.log(newDate);
                            addDb("out", infoCashOUT, TypeCashOUT, newDate, totalCashOUT, typePaymentout, type_Way_Pay, st);
                        }

                    }
                }
                // return type_Way_Pay;
            });



        });



        database.ref('/Users/' + user.uid + '/setting/firstSetting/').on('value', function (snapshot) {

            var currentval = snapshot.val().start;
            var after = snapshot.val().creditBank;
            var visa = snapshot.val().creditLine;

            var limitCash = document.getElementById('limitCash');
            var limitCard = document.getElementById('limitCard');
            var Status = document.getElementById('Status');
            currectLimit = after;
            return currectLimit;

        });

        database.ref('/Users/' + user.uid + '/loan/').on('value', function (snap) {

            var coreDate = createNewDate();
            var month_Today = coreDate.month;
            var year_Today = coreDate.year;
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

                var splitD = dateStart.split(" ");
                var splittotal = totalLoan.split("-");

                var monthlypay = cashloan.split("-");
                var monthly_pay = monthlypay[1];
                var total_cash = splittotal[1];
                var m = splitD[0];
                var d = splitD[1];
                var y = splitD[2];

                var totalMonth = numYear * 12;
                var sumyear = year_Today - y - 1;
                var sum_year = sumyear * 12;
                var firstYear = 12 - month[m];
                var monththisYear = month[month_Today];
                var totalmonth = monththisYear + firstYear + sum_year;
                arr.push([infoloan, totalMonth - totalmonth, totalmonth, monthly_pay, total_cash]);

            }

            arr.forEach(snap => {
                // console.log(snap);
                var payuntilToday = snap[2] * Number(snap[3]);
                var precentNum = payuntilToday / Number(totalLoan) * 100;
                var fixprecent = precentNum.toFixed(0);
                var total_month = snap[1] + snap[2];
                var left_pay = Number(snap[4]) - payuntilToday;

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
                let iconOpenInfo = document.createElement('i');
                iconOpenInfo.setAttribute("class", "material-icons");
                iconOpenInfo.setAttribute("id", "loanOpenInfo");

                iconOpenInfo.textContent = "arrow_drop_down";

                container.setAttribute("id", "loan");
                title_loan.setAttribute("class", "right");
                progress_box.setAttribute("class", "progress-bar horizontal");
                prograss_track.setAttribute("class", "progress-track")
                prograss_fill.setAttribute("class", "progress-fill");

                boxText.setAttribute("class", "row col s12 Loan");
                boxText.setAttribute("id", "boxLoan" + snap[0]);


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
                precent.textContent = Math.abs(fixprecent) + "%";

                title_paybox.textContent = "נשאר לתשלום";
                p_paybox.textContent = left_pay;


                title_monthbox.textContent = snap[2];
                p_monthbox.textContent = "מתוך - " + total_month;

                title_leftPaybox.textContent = " שולם " + payuntilToday;

                p_leftPaybox.textContent = "מתוך - " + Number(snap[4]);
                // console.log(precent);
                prograss_fill.style.width = Math.abs(fixprecent) + "%";
                progress_box.appendChild(prograss_track);
                prograss_track.appendChild(prograss_fill);
                prograss_fill.appendChild(precent);


                // iconOpenInfo

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
                container.appendChild(iconOpenInfo);

                container.appendChild(progress_box);
                container.appendChild(boxText);


                containerLoan.appendChild(container);

                iconOpenInfo.addEventListener('click', e => {
                    var getRow = document.getElementById("boxLoan" + snap[0]);
                    var style = getRow.style.display;

                    if (style == "" || style == "none") {
                        getRow.style.display = "block";
                    } else if (style == "block") {
                        getRow.style.display = "none";
                    }

                })
            });


        });

        setPhotoUser();
        saveNewWord();
        TABLE_PAGE_GET_DATA();
        HOME_PAGE_GET_DATA_FOR_WEEKLY();
        HOME_PAGE_GET_DATA_FOR_CALNDER();
        charttype();

        async function charttype() {
            var ele = document.getElementById("btnchartCash");
            var MainArray = [];
            const today_date = createNewDate();
            // console.log(today_date.month);
            database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').on('value', function (snapshot) {
                var sumCredit = 0;
                var sumCash = 0;
                var sumPaper = 0;
                var sumDebit = 0;
                var sumBit = 0;
                var sumBank = 0;
                var coreDate = createNewDate();

                let postArray = snapshot.val();
                let keys = Object.keys(postArray);
                function setDataToWayPayBoxes(debit, cash, paper, bank, bit, credit) {
                    num_directDebit.textContent = debit;
                    num_cash.textContent = cash;
                    num_credit.textContent = credit;
                    num_transferBank.textContent = bank;
                    num_paper.textContent = paper;
                    num_bit.textContent = bit;

                    // console.log(num_cash.textContent);
                    var credit_box = document.getElementById("credit");
                    var cash_box = document.getElementById("cash");
                    var paper_box = document.getElementById("paper");
                    var directDebit_box = document.getElementById("directDebit");
                    var transferBank_box = document.getElementById("transferBank");
                    var bit_box = document.getElementById("bit");

                    if (num_paper.textContent < 0 || num_paper.textContent > 0) {
                        paper_box.style.background = "#ff3d67";
                    }
                    if (num_cash.textContent < 0 || num_cash.textContent > 0) {
                        cash_box.style.background = "#ff3d67";
                    }
                    if (num_directDebit.textContent < 0 || num_directDebit.textContent > 0) {
                        directDebit_box.style.background = "#ff3d67";
                    }
                    if (num_credit.textContent < 0 || num_credit.textContent > 0) {
                        credit_box.style.background = "#ff3d67";
                    }
                    if (num_transferBank.textContent < 0 || num_transferBank.textContent > 0) {
                        transferBank_box.style.background = "#ff3d67";
                    }
                    if (num_bit.textContent < 0 || num_bit.textContent > 0) {
                        bit_box.style.background = "#ff3d67";
                    }

                }


                // let totalOut = [];
                function getMonth(x) {

                    var splitDate = x.split(" ");
                    var currectDate = splitDate[0];

                    return currectDate;
                }

                for (var i = 0; i < keys.length; i++) {

                    var id = keys[i];
                    var currentObject = postArray[id];
                    // var wayPay = currentObject.wayPay;
                    var checkOut = currentObject.type;
                    var new_date = currentObject.date;

                    var splitDate = new_date.split(" ");
                    var y = getMonth(new_date);
                    var title = currentObject.title;
                    var trimTitle = title.trim();
                    var typePay = currentObject.wayPay;
                    var in_out = currentObject.type;
                    var cash = currentObject.totalCash;

                    if (today_date.month == splitDate[0] && checkOut == 'out') {

                        if (typePay == 'כרטיס אשראי') {
                            sumCredit += cash;
                        } else if (typePay == 'מזומן') {
                            sumCash += cash;
                        } else if (typePay == "צ'ק") {
                            sumPaper += cash;
                        } else if (typePay == 'העברה בנקאית') {
                            sumBank += cash;
                        } else if (typePay == 'ביט') {
                            sumBit += cash;
                        } else if (typePay == 'הוראת קבע') {
                            sumDebit += cash;
                        }

                    }
                    MainArray.push([y, trimTitle, in_out, typePay, cash, new_date]);

                    if (title == "פעילות מרובה") {

                        database.ref('/Users/' + user.uid + '/cashflow/').child(id).child('/chashFlow/').on('value', function (newsnapshot) {

                            let newpostArray = newsnapshot.val();
                            let newkeys = Object.keys(newpostArray);

                            for (var j = 0; j < newkeys.length; j++) {

                                var newid = newkeys[j];

                                database.ref('/Users/' + user.uid + '/cashflow/').child(id).child('/chashFlow/').child(newid).on('value', function (snap) {

                                    var val = snap.val();
                                    var date_new = val.date;
                                    var z = getMonth(date_new);
                                    var type = val.wayPay;
                                    var totalcash = val.totalCash;
                                    var inOrOut = val.type;
                                    var titleSub = val.title;

                                    MainArray.push([z, titleSub, inOrOut, type, totalcash, date_new]);
                                    if (today_date.month == splitDate[0] && inOrOut == 'out') {

                                        if (type == 'כרטיס אשראי') {
                                            sumCredit += totalcash;
                                        } else if (type == 'מזומן') {
                                            sumCash += totalcash;
                                        } else if (type == "צ'ק") {
                                            sumPaper += totalcash;
                                        } else if (type == 'העברה בנקאית') {
                                            sumBank += totalcash;
                                        } else if (type == 'ביט') {
                                            sumBit += totalcash;
                                        } else if (type == 'הוראת קבע') {
                                            sumDebit += totalcash;
                                        }

                                    }
                                });

                            }

                        });

                    }

                }


                setDataToWayPayBoxes(sumDebit, sumCash, sumPaper, sumBank, sumBit, sumCredit);
                var checkarray = [];
                var sumArray = [];
                var month_Array = [];
                var new_Date = coreDate.fullDate;
                var monthToday = coreDate.month;
                var yearToday = coreDate.year;

                var numToday = coreDate.numDate;

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

                                month_Array.push([payWay, sumMonth]);
                            }
                        }
                    }
                    var trueData = '';

                }

                var donutchart = document.getElementById('donutchart');
                var nameArray = [];
                var totalArray = [];

                if (month_Array.length < 1) {

                    totalArray.push(0);
                }

                month_Array.forEach(element => {

                    if (element[0] !== "") {
                        nameArray.push(element[0]);
                        totalArray.push(element[1]);

                    }
                });

                // console.log(nameArray);
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
                    }




                }
                data = {
                    datasets: [{
                        // label: 'סוגי הוצאות',
                        data: totalArray,
                        backgroundColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
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
                    type: 'doughnut',
                    data: data,
                    options: optionspei
                });

            });

        }

        async function chartTableYearly(d) {
            var inarr = [];
            var out = [];
            var title = [];
            // console.log(d);
            d.forEach(x => {
                // console.log(x);
                inarr.push(Math.abs(x[1]));
                out.push(Math.abs(x[2]));
                title.push(x[0]);

            })

            // console.log(inarr, out, title);

            var ctxc = document.getElementById('dual_x_div').getContext("2d");;

            var gradient_in_ctxc = ctxc.createLinearGradient(0, 0, 0, 400);
            var gradient_out_ctxc = ctxc.createLinearGradient(0, 0, 0, 400);

            gradient_out_ctxc.addColorStop(0, '#ff3d67');
            gradient_out_ctxc.addColorStop(1, '#ff98ae');
            gradient_in_ctxc.addColorStop(0, '#50dd50');
            gradient_in_ctxc.addColorStop(1, '#a6fda6');



            if (window.bar != undefined) {
                window.bar.destroy();
            }

            window.bar = new Chart(ctxc, {
                type: 'bar',
                data: {
                    labels: title,
                    datasets: [{
                        label: 'הכנסות',
                        data: inarr,
                        fill: true,
                        backgroundColor: [

                            gradient_in_ctxc,
                            gradient_in_ctxc,
                            gradient_in_ctxc,
                            gradient_in_ctxc,
                            gradient_in_ctxc,
                            gradient_in_ctxc,
                            gradient_in_ctxc,
                            gradient_in_ctxc,
                            gradient_in_ctxc,
                            gradient_in_ctxc,
                            gradient_in_ctxc,
                            gradient_in_ctxc

                        ],
                        borderColor: [

                            gradient_in_ctxc,
                            gradient_in_ctxc,
                            gradient_in_ctxc,
                            gradient_in_ctxc,
                            gradient_in_ctxc,
                            gradient_in_ctxc,
                            gradient_in_ctxc,
                            gradient_in_ctxc,
                            gradient_in_ctxc,
                            gradient_in_ctxc,
                            gradient_in_ctxc,
                            gradient_in_ctxc
                        ],
                        borderWidth: 1

                    }, {


                        label: 'הוצאות',
                        data: out,
                        fill: true,

                        backgroundColor: [
                            gradient_out_ctxc,
                            gradient_out_ctxc,
                            gradient_out_ctxc,
                            gradient_out_ctxc,
                            gradient_out_ctxc,
                            gradient_out_ctxc,
                            gradient_out_ctxc,
                            gradient_out_ctxc,
                            gradient_out_ctxc,
                            gradient_out_ctxc,
                            gradient_out_ctxc,
                            gradient_out_ctxc
                        ],
                        borderColor: [

                            gradient_out_ctxc,
                            gradient_out_ctxc,
                            gradient_out_ctxc,
                            gradient_out_ctxc,
                            gradient_out_ctxc,
                            gradient_out_ctxc,
                            gradient_out_ctxc,
                            gradient_out_ctxc,
                            gradient_out_ctxc,
                            gradient_out_ctxc,
                            gradient_out_ctxc,
                            gradient_out_ctxc



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


        }

        async function chartTable(d) {
            // console.log(d.length);

            if (d.length > 7) {
                var data = d;
                var inArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                var outArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                var days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

                for (H = 0; H < data.length; H++) {
                    var day = data[H][0];
                    if (data[H][1] > 0) {
                        inArr[days.indexOf(day)] = data[H][1];
                    } else if (data[H][1] < 0) {
                        outArr[days.indexOf(day)] = data[H][1];

                    }

                }
            } else if (d.length == 7) {
                var data = d;
                var inArr = [0, 0, 0, 0, 0, 0, 0];
                var outArr = [0, 0, 0, 0, 0, 0, 0];
                var days = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];

                for (H = 0; H < data.length; H++) {
                    var day = data[H][0];
                    if (data[H][1] > 0) {
                        inArr[days.indexOf(day)] = data[H][1];
                    } else if (data[H][1] < 0) {
                        outArr[days.indexOf(day)] = data[H][1];

                    }

                }
            }
            var ctx = document.getElementById("chart_div").getContext("2d");
            var gradient_in = ctx.createLinearGradient(0, 0, 0, 400);
            var gradient_out = ctx.createLinearGradient(0, 0, 0, 400);

            gradient_out.addColorStop(0, '#ff3d67');
            gradient_out.addColorStop(1, '#ff98ae');
            gradient_in.addColorStop(0, '#50dd50');
            gradient_in.addColorStop(1, '#a6fda6');
            // console.log(window.bar);

            if (window.bar != undefined) {
                window.bar.destroy();
            }

            window.bar = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: days,
                    datasets: [{
                        label: 'הכנסות',
                        data: inArr,
                        fill: true,
                        backgroundColor:
                            gradient_in
                        ,
                        borderColor:
                            gradient_in
                        ,
                        borderWidth: 1

                    }, {


                        label: 'הוצאות',
                        data: outArr,
                        fill: true,
                        backgroundColor:
                            gradient_out,
                        borderColor:
                            gradient_out

                        ,
                        borderWidth: 1
                    }]
                },

            });



        }


    } else {
        console.log('idan sign out');


        home.innerHTML = "";
        menu.innerHTML = "";
    }
})
