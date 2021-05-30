
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
var SettingMenu = document.getElementById('SettingMenu');

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
var myChart2;
var ctx = document.getElementById("chart_div").getContext("2d");
var tabsContent = document.getElementById("tab-content");
const homePage = document.getElementById("home_page");
const tablePage = document.getElementById("table_page");
var side_bar = document.getElementById("side_bar");
var formWordSetting = document.getElementById("formWordSetting");
var navbar = document.getElementById("navbar");


var bankCARD = document.getElementById("bankCARD");
var bitCARD = document.getElementById("bitCARD");
var debitCARD = document.getElementById("debitCARD");
var cashCARD = document.getElementById("cashCARD");
var paperCARD = document.getElementById("paperCARD");
var creditCARD = document.getElementById("creditCARD");
var bankCARDbox = document.getElementById("bankCARDbox");
var bitCARDbox = document.getElementById("bitCARDbox");
var debitCARDbox = document.getElementById("debitCARDbox");
var cashCARDbox = document.getElementById("cashCARDbox");
var paperCARDbox = document.getElementById("paperCARDbox");
var creditCARDbox = document.getElementById("creditCARDbox");

var i_bank = document.getElementById("i_bank");
var i_paper = document.getElementById("i_paper");
var i_credit = document.getElementById("i_credit");
var i_debit = document.getElementById("i_debit");
var i_bit = document.getElementById("i_bit");
var i_cash = document.getElementById("i_cash");


// EXITFUNCIONS

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

// DOM LOAD CONTENT

// document.addEventListener('DOMContentLoaded', function () {

//     var elems = document.querySelectorAll('.modal');
//     var elemselect = document.querySelectorAll('select');
//     var elemsdatepicker = document.querySelectorAll('.datepicker');
//     var elemssidenav = document.querySelectorAll('.sidenav');
//     var elemsdate = document.querySelectorAll('.date');
//     var el = document.querySelectorAll('.tab');
//     var elemss = document.querySelectorAll('.dropdown-trigger');
//     M.Dropdown.init(elemss);
//     M.Tabs.init(el);

//     M.Datepicker.init(elemsdatepicker);
//     M.Datepicker.init(elemsdate);
//     M.Sidenav.init(elemssidenav);
//     M.FormSelect.init(elemselect);
//     M.Modal.init(elems);

// });



// RUN WHEN USER IN

auth.onAuthStateChanged(user => {

    if (user) {
        var Limit = 0;
        var Importantday = 0;

        var Limit = 0;

        database.ref('/Users/' + user.uid + '/setting/firstSetting/').once('value').then(snapshot => {
            Limit = snapshot.val().cuurentCash;
        });


        var Status = document.getElementById('Status');
        var num_currectStatusCash = document.getElementById('num_currectStatusCash');


        document.addEventListener('click', e => {
            let key = e.target.id;
            console.log(key);
            if (key == "home_btn_side") {
                tablePage.style.display = 'none';
                homePage.style.display = 'block';
                settingPage.style.display = 'none';


            } else if (key == "table_btn_side") {
                tablePage.style.display = 'block';
                homePage.style.display = 'none';
                settingPage.style.display = 'none';

            } else if (key == "setting_btn_side") {
                tablePage.style.display = 'none';
                homePage.style.display = 'none';
                settingPage.style.display = 'block';
            }
        });
        var Home_Menu = document.getElementById("Home_Menu");
        var SettingTitle = document.getElementById("SettingTitle");
        var Tableview_Menu = document.getElementById("Tableview_Menu");
        var changeToPlan = document.getElementById("changeToPlan");
        var lever = document.getElementById("lever");
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
        const correctHref = returnCorrect_href();
        var chipsOut = document.getElementById("chipsOut");
        var chipsIn = document.getElementById("chipsIn");
        var chipsOutOption = document.getElementById("chipsOutOption");
        var chipsInOption = document.getElementById("chipsInOption");
        HOME_PAGE_GET_DATA_FOR_WEEKLY();
        var userInfoText = document.getElementById("userInfoText");
        var HomeRow = document.getElementById('HomeRow');
        var TableRow = document.getElementById('TableRow');
        var SettingRow = document.getElementById('SettingRow');



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
            var key = e.target.className;



            if (key == "navbar-toggler-icon check") {

                side_bar.classList.remove("test");
                side_bar.classList.add("col-sm-2");
                Home_Menu.style.display = 'block';
                Tableview_Menu.style.display = 'block';
                SettingTitle.style.display = 'block';
                menuUserimg.style.display = 'inline-block'
                nameUser.style.display = 'block';

                homePage.classList.remove('col-sm-11');
                homePage.classList.add('col-sm-10');

                tablePage.classList.remove('col-sm-11');
                tablePage.classList.add('col-sm-10');

                settingPage.classList.remove('col-sm-11');
                settingPage.classList.add('col-sm-10');
                navbar.classList.remove('col-11');
                navbar.classList.add('col-10');
                navbar.classList.remove('offset-1');
                navbar.classList.add('offset-2');
                // HomeMenu.classList.remove('ml-4');
                HomeMenu.classList.add('ml-3');
                HomeMenu.style.marginLeft = '0px';

                TableviewMenu.classList.add('ml-3');
                TableviewMenu.style.marginLeft = '0px';


                SettingMenu.classList.add('ml-3');
                SettingMenu.style.marginLeft = '0px';
                // SettingMenu.style.marginLeft = '0px';
                e.target.classList.remove("check");


            } else if (key == "navbar-toggler-icon") {
                navbar.classList.remove('col-10');
                navbar.classList.add('col-11');
                navbar.classList.remove('offset-2');
                navbar.classList.add('offset-1');
                Home_Menu.style.display = 'none';
                Tableview_Menu.style.display = 'none';
                SettingTitle.style.display = 'none';
                menuUserimg.style.display = 'none';
                nameUser.style.display = 'none';
                side_bar.classList.remove('col-sm-2');
                side_bar.classList.add("test");

                homePage.classList.remove('col-sm-10');
                homePage.classList.add('col-sm-11');

                tablePage.classList.remove('col-sm-10');
                tablePage.classList.add('col-sm-11');
                HomeMenu.classList.remove('ml-3');
                HomeMenu.style.marginLeft = '32px';

                SettingMenu.classList.remove('ml-3');
                SettingMenu.style.marginLeft = '32px';



                TableviewMenu.classList.remove('ml-3');
                TableviewMenu.style.marginLeft = '32px';

                settingPage.classList.remove('col-sm-10');
                settingPage.classList.add('col-sm-11');

                e.target.classList.add("check");

                // side_bar.style.position = " absolute"
                // side_bar.style.width = "200px !important"
            }
            console.log(key);

        });

        function returnCorrect_href() {
            var correct_href = location.href;
            var split_href = correct_href.split("/");
            var last_href = split_href[split_href.length - 1];
            return last_href
        }
        function createDates(m, d, y) {
            var newdate = m + " " + d + ", " + y;
            var newdataString = newdate.toString();
            return newdataString;
        }
        function addDb(Type, i, t, d, c, P, W, Temp) {
            console.log('addDb');
            var corMonth = d.split(" ");
            var correctMonth = corMonth[0];
            var correctDay = corMonth[1];
            var correctYear = corMonth[2];
            var numMonth = month[correctMonth];
            var key = P.toString();

            function addToDataBase(date, s) {
                console.log('addToDataBase');

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



                // if (W == "כרטיס אשראי הורדה") {

                // } else if(W !== "כרטיס אשראי הורדה"){

                // }



                database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').on('value', snapshot => {

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
                            after: false,
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


                // TABLE_PAGE_GET_DATA();
                // HOME_PAGE_GET_DATA_FOR_WEEKLY();

            }

            // function createDates(m, d, y) {
            //     var newdate = m + " " + d + " " + y;
            //     var newdataString = newdate.toString();
            //     return newdataString;
            // }

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


            totalcash.value = '';
            dateIncome.value = '';
            typeIncoming.value = '';
            incomingForm.value = '';
            totalOut.value = '';
            dateOut.value = '';
            typeOut.value = '';
            infoOut.value = '';
            mainTable.innerHTML = "";
            // TABLE_PAGE_GET_DATA();
        }
        //table functions
        function getBitweenDates() {
            var sDay = start_date.value;
            var eDay = end_date.value;
            var start_day = FormatDate(sDay);
            var end_day = FormatDate(eDay);

            var num_start = Date.parse(start_day);
            var num_end = Date.parse(end_day);

            return start_end_weekly = {
                sDay: num_start,
                eDay: num_end
            }
        }

        function sumDuplicate(arr) {
            for (var i = 0; i < arr.length; i++) {

                for (var j = 0; j < arr.length; j++) {
                    if (arr[i][0] == arr[j][0] && i !== j) {
                        arr[i][1] = arr[i][1] + arr[j][1];
                        arr.splice(j, 1);
                    }
                }
            }
        }

        function loadYearly(d, n) {
            // mainTable.innerHTML = "";
            console.log(d, n);

            const mon = Object.keys(month);
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

            } else if (sum > 0) {

                let imgBalnce = document.createElement('img');
                imgBalnce.setAttribute("class", "imgIls");
                imgBalnce.setAttribute("src", "./img/greeb01-01.png");

                icon.textContent = "arrow_upward";
                iconin.style.color = " #50dd50";
                TotalCash.style.color = '#50dd50';
                TotalCash.prepend(imgBalnce);

            } else {
                let imgBalnce = document.createElement('img');
                imgBalnce.setAttribute("class", "imgIls");
                imgBalnce.setAttribute("src", "./img/greeb01-01.png");

                icon.textContent = "remove";
                icon.style.color = " #50dd50";
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
            // M.Autocomplete.init(autocomplete, { data: autoTextIn });
            var autocompleteout = document.getElementById('typeOut');
            // M.Autocomplete.init(autocompleteout, { data: autoTextOut });
        }
        function lastday(d) {
            var first = d.getDate() - d.getDay(); // First day is the day of the month - the day of the week
            var last = first + 6; // last day is the first day + 6

            var firstday = new Date(d.setDate(first)).toUTCString();
            var lastday = new Date(d.setDate(last)).toUTCString();

            // console.log(firstday);
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

            database.ref('/Users/' + user.uid + '/setting/text/' + Type).orderByChild("word").equalTo(textTrim).once("value").then(function (snapshot) {
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
                // img.setAttribute("src", user.photoURL);
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

            let nextDays = 14 - lastDayIndex - 1;
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
                    days += `<div id=${i} class="today">${i}</div>`;

                } else {
                    days += `<div id=${i}>${i}</div>`;
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

        // changeToPlan.addEventListener("click", e => {
        //     e.preventDefault();
        //     var changeToPlan = document.getElementById("changeToPlan");

        //     var arrtibute = changeToPlan.getAttribute("class");
        //     var check = changeToPlan.style;
        //     console.log(arrtibute);
        //     if (arrtibute == 'uncheck') {
        //         changeToPlan.setAttribute("class", 'check');
        //         mainTable.innerHTML = "";
        //         TABLE_PAGE_GET_DATA();

        //         // TABLE_PAGE_GET_DATA();

        //         console.log('uncheck tuen to check');
        //     } else if (arrtibute == 'check') {
        //         changeToPlan.setAttribute("class", 'uncheck');
        //         console.log('check tuen to uncheck');
        //         mainTable.innerHTML = "";
        //         TABLE_PAGE_GET_DATA();
        //         // TABLE_PAGE_GET_DATA();

        //     }



        //     console.log(arrtibute);
        // });

        function laodUpData(I, doc, S, A, pr, sum) {
            console.log(I, doc, S, A, pr);
            var previewNum = 0;
            console.log('laodUpData');

            // console.log(sum, doc.totalCash, pr);

            // console.log(previewNum);
            // console.log(50);
            // var checktempView = changeToPlan.getAttribute("class");
            // if (checktempView == "check") {
            addDataTable();
            if (doc.totalCash < 0) {
                previewNum = pr + doc.totalCash;

            } else {
                previewNum = pr - doc.totalCash;
            }
            // } else if (checktempView == "uncheck") {
            // if (doc.after !== true) {
            //     addDataTable();
            //     if (doc.totalCash < 0) {
            //         previewNum = pr + doc.totalCash;

            //     } else {
            //         previewNum = pr - doc.totalCash;
            //     }
            // }
            // }
            var numCard = 0;

            function addDataTable() {
                console.log();
                console.log('addDataTable');
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
                    icon.style.color = '#50dd50';
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
                    icon.style.color = '#ff3d67';


                    TotalCash.textContent = ' ' + formatNumber(totalCash.toFixed(2));

                    TotalCash.prepend(img)
                }
                // if (doc.after == true) {
                rowtable.setAttribute("class", "temporaryRow")
                // rowtable.setAttribute('id', 'newRow' + "-" + I + "-Temp");
                // rowtable.style.background = red;
                // } else {
                rowtable.setAttribute('class', 'newRow');

                // }

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

                if (pr > 0) {
                    let imgAfter = document.createElement("img");
                    imgAfter.setAttribute("class", "imgIls");
                    TotalCashAfter.style.color = '#50dd50';
                    imgAfter.setAttribute("src", "./img/greeb01-01.png");
                    if (wayPay == "אשראי") {
                        TotalCashAfter.textContent = 'יורד ב- 10';
                        TotalCashAfter.style.fontWeight = "bold";

                    } else if (wayPay !== "אשראי") {
                        TotalCashAfter.textContent = " " + formatNumber(Number(pr).toFixed(2));
                        TotalCashAfter.prepend(imgAfter);
                    }
                    // TotalCashAfter.textContent = " " + formatNumber(Number(pr).toFixed(2));

                } else if (pr < 0) {
                    let imgAfter = document.createElement("img");
                    imgAfter.setAttribute("class", "imgIls");
                    imgAfter.setAttribute("src", "./img/red-01.png");
                    TotalCashAfter.style.color = '#ff3d67';

                    // TotalCashAfter.textContent = " " + formatNumber(Number(pr).toFixed(2));
                    if (wayPay == "כרטיס אשראי") {
                        TotalCashAfter.textContent = 'יורד ב- 10';
                        TotalCashAfter.style.fontWeight = "bold";

                    } else if (wayPay !== "כרטיס אשראי") {
                        TotalCashAfter.textContent = " " + formatNumber(Number(pr).toFixed(2));
                        TotalCashAfter.prepend(imgAfter);



                    }
                }

                var newLine = 0 - A;
                var sumNum = A + pr;

                if (pr < newLine) {
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
                    //     TotalCashAfter.style.color = '#ff3d67';
                    //     // TotalCashAfter.style.fontWeight = 'bold';
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
                            var check = currentObject.after;
                            date = dateToday;
                            title = titlecash;
                            var subtotalCash = Number(cuurectcashDay).toFixed(2);
                            type = typeDay;
                            var st = currentObject.status;

                            // if (checktempView == "check") {
                            addSubRows();
                            // } else if (checktempView == "uncheck") {
                            // if (check !== true) {
                            //     addSubRows();
                            // }
                            // }

                            function addSubRows() {

                                let typeOfPaySub = document.createElement('td');
                                let conditionPaySub = document.createElement('td');
                                let row_table = document.createElement('tr');
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
                                    icon.style.color = '#50dd50';
                                    TotalCash.textContent = " " + Number(subtotalCash).toFixed(2);
                                    TotalCash.prepend(img);


                                } else if (type == 'out') {
                                    let img = document.createElement('img');
                                    img.setAttribute("src", "./img/red-01.png");
                                    img.setAttribute("class", "imgIls");

                                    icon.setAttribute('id', 'downArrow');

                                    icon.textContent = 'arrow_downward';
                                    TotalCash.style.color = '#ff3d67';
                                    icon.style.color = '#ff3d67';

                                    TotalCash.textContent = " " + Number(subtotalCash).toFixed(2);
                                    TotalCash.prepend(img);
                                }

                                row_table.setAttribute('id', I + '_newRow_' + i);
                                row_table.setAttribute('class', 'newSubRow');
                                typeCash.setAttribute('id', 'typeCash');
                                TotalCashAfter.setAttribute('id', 'TotalCashAfter');
                                DateCash.setAttribute('id', 'DateCash');
                                TotalCash.setAttribute('id', 'TotalCash');
                                DateCash.textContent = date;
                                typeCash.textContent = title;
                                typeOfPaySub.textContent = way;
                                conditionPaySub.textContent = st;
                                var total = 0;

                                if (suminsiderow == 0) {
                                    if (way == "כרטיס אשראי") {
                                        total = Number(previewNum) + 0;
                                        suminsiderow += Number(total);

                                    } else if (way !== "כרטיס אשראי") {
                                        total = Number(previewNum) + Number(subtotalCash);
                                        suminsiderow += Number(total);
                                    }


                                } else {
                                    if (way == "כרטיס אשראי") {
                                        total = Number(previewNum) + 0;
                                        suminsiderow += Number(total);

                                    } else if (way !== "כרטיס אשראי") {
                                        total = Number(previewNum) + Number(subtotalCash);
                                        suminsiderow += Number(total);
                                    }

                                }
                                let imgAfter = document.createElement("img");
                                imgAfter.setAttribute("class", "imgIls");
                                imgAfter.setAttribute("src", "./img/red-01.png");
                                // TotalCashAfter.style.color = '#ff3d67';
                                if (way == "כרטיס אשראי") {
                                    TotalCashAfter.textContent = 'יורד ב- 10';
                                    TotalCashAfter.style.fontWeight = "bold";
                                    TotalCashAfter.style.color = '#ff3d67';
                                    // row_table.classList.add("shadow-sm");
                                    // row_table.classList.add('table-sm');
                                    row_table.classList.add("bd");





                                } else if (way !== "כרטיס אשראי") {
                                    TotalCashAfter.textContent = Number(suminsiderow).toFixed(2);
                                    TotalCashAfter.prepend(imgAfter);
                                    TotalCashAfter.style.color = '#ff3d67';
                                    // row_table.classList.add('table-sm');
                                    // row_table.classList.add("shadow-sm");
                                    row_table.classList.add("bd");



                                }


                                var newLine = 0 - A;
                                var sumNum = suminsiderow - newLine;
                                iconsubtd.appendChild(icon);
                                delteboxtd.appendChild(icondelete);
                                row_table.appendChild(TotalCashAfter);
                                row_table.appendChild(TotalCash);
                                row_table.appendChild(iconsubtd);
                                row_table.appendChild(typeCash);
                                row_table.appendChild(conditionPaySub);
                                row_table.appendChild(typeOfPaySub);
                                row_table.appendChild(DateCash);
                                row_table.appendChild(delteboxtd);
                                mainTable.appendChild(row_table);

                                row_table.style.display = 'none';

                                if (icon.textContent == 'arrow_downward') {
                                    array.push(cuurectcashDay);
                                } else if (icon.textContent == 'arrow_upward') {
                                    array.push(cuurectcashDay);
                                }

                                if (type == 'in') {
                                    if (way == "כרטיס אשראי") {

                                        newNum += 0;

                                    } else if (way !== "כרטיס אשראי") {
                                        newNum = Number(newNum) + Number(array[i]);
                                    }


                                } else if (type == 'out') {
                                    if (way == "כרטיס אשראי") {

                                        newNum += 0;

                                    } else if (way !== "כרטיס אשראי") {
                                        newNum = Number(newNum) + Number(array[i]);
                                    }
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

                        }


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
                                    // row.classList.add = "bg-dark";
                                    rowtable.style.background = " rgb(252, 252, 252)";
                                } else {
                                    row.style.display = 'none';
                                    rowtable.style.background = " rgb(255, 255, 255)";
                                }

                            }

                        });

                    });
                }
            }


        }

        function getDatesFromCalender(i, data, c, inc, out) {
            // console.log(i, data, c, inc, out);

            // console.log(i, data);
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
                // console.log(inComCal, outComCal);
                cash_flow_cal[0] = inComCal;
                cash_flow_cal[1] = outComCal;
            }
            // console.log(cash_flow_cal);

            var day_num_Db = i;
            var date_db = data.date;
            var month_db = date_db.split(" ")[0];
            var day_db = date_db.split(" ")[1].split(",")[0];
            var year_db = date_db.split(" ")[2];
            // console.log(day_db);
            if (day_db < 10) {
                day_db = day_db.split("0")[1];
                // console.log(day_db);

            }
            // console.log(day_db);

            // console.log(year_db);
            const calDays = document.getElementById("days").children;
            const month_cal = document.getElementById("monthCalnder").innerText;


            database.ref('/Users/' + user.uid + '/setting/firstSetting/').on('value', snapshot => {
                // console.log(snapshot.val().cuurentCash);
                Limit = snapshot.val().cuurentCash;
                var importantDay = snapshot.val().importantDay;
                // console.log(importantDay);

                var impDate = importantDay.split(" ")[1].split(",")[0];
                // console.log(dayRow);
                // Importantday += impDate;
                // console.log(Importantday);
                for (var i = 0; i < calDays.length; i++) {

                    var typedate = calDays[i].className;
                    var numdate = calDays[i].textContent;
                    var datenumDb = 0;
                    var datenumCalender = 0;
                    if (typedate == "prev-date" || typedate == "next-date") {


                    } else {
                        var fullMonthIndex = months.indexOf(month_cal);
                        // console.log(fullMonthIndex);
                        var shortMonth = monthShort[fullMonthIndex];
                        // console.log(impDate);
                        // console.log(day_num_Db, numdate, shortMonth, month_db, year_db);
                        // console.log(Importantday);
                        var dayRow = document.getElementById(impDate).classList.add("importantday");
                        // dayRow.style.color = "rgb(61, 161, 255)";

                        // console.log(day_db);


                        if (day_db == numdate && shortMonth == month_db && year_db == "2020") {
                            // console.log("connect", numdate, calDays[i]);
                            calDays[i].style.color = "rgb(61, 161, 255)";

                            var sumIncomingOutcoming = cash_flow_cal[0] + cash_flow_cal[1];
                            if (sumIncomingOutcoming > 0) {
                                calDays[i].style.color = "#50dd50";
                                calDays[i].style.fontWeight = "bold";
                                calDays[i].style.backgroundColor = "rgb(250, 250, 250)";
                                calDays[i].classList.add("class", "haveData");


                            } else if (sumIncomingOutcoming < 0) {
                                calDays[i].style.color = "#ff3d67";
                                calDays[i].style.fontWeight = "bold";
                                calDays[i].style.backgroundColor = "rgb(250, 250, 250)";
                                calDays[i].classList.add("haveData");



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

            });






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
            database.ref('/Users/' + user.uid + '/setting/firstSetting/').once('value').then(function (snapshot) {

                var currentval = snapshot.val().start;
                var after = snapshot.val().creditBank;
                var visa = snapshot.val().creditLine;
                var day = snapshot.val().importantDay;
                // console.log(currentval);
                start_db.textContent = ' ש"ח ' + currentval;
                line_bank_db.textContent = ' ש"ח ' + after;
                line_card_db.textContent = ' ש"ח ' + visa;
                day_db.textContent = day;

            });
            var searchKeyWord = document.getElementById("searchKeyWord");
            var groupInOutSetting = document.getElementsByName("groupInOutSetting");

            formWordSetting.addEventListener("submit", e => {
                e.preventDefault()
                var val = searchKeyWord.value;
                console.log('in');
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


            function getDataFromSettingForm() {


                var defaultOutText = [];

                var defaultInText = [];
                var inWord = [];
                var outWord = [];
                let data = {};
                database.ref('/Users/' + user.uid + '/setting/text/').once('value').then(function (snapshot) {

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
                        let iconExit = document.createElement("span");
                        let textChip = document.createElement("span");
                        textChip.textContent = T[1];
                        iconExit.textContent = "x";
                        // iconExit.setAttribute('id', "exit_" + T[0]);
                        // chipBox.setAttribute("class", "chip col-6  mr-1 ml-1");
                        chipBox.setAttribute('id', "chipBox" + T[0]);
                        textChip.setAttribute('class', 'text-right col-11 mt-1 px-0 py-0');
                        chipBox.setAttribute("class", "align-middle chip row col-5 mb-2 mr-1 ml-1");

                        iconExit.setAttribute("class", "text-left col-1 mt-1  px-0 py-0");

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
                        let iconExit = document.createElement("span");
                        let textChip = document.createElement("span");
                        textChip.textContent = T[1];
                        iconExit.textContent = "x";
                        // iconExit.setAttribute('id', "exit_" + T[0]);
                        chipBox.setAttribute('id', "chipBox" + T[0]);
                        textChip.setAttribute('class', 'text-right col-11 mt-1 px-0 py-0')
                        chipBox.setAttribute("class", "align-middle chip row col-5 mb-2 mr-1 ml-1");
                        iconExit.setAttribute("class", "text-left col-1 mt-1  px-0 py-0");

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
                                let iconadd = document.createElement("span");
                                let textChip = document.createElement("span");
                                textChip.textContent = T[1];
                                iconadd.textContent = "+";
                                chipBox.setAttribute("class", "align-middle chip row col-5 mb-2 mr-1 ml-1");
                                chipBox.setAttribute('id', "chip_Box" + T[0]);
                                textChip.setAttribute('id', "span_out" + T[0]);
                                textChip.setAttribute('class', 'text-right col-11 mt-1 px-0 py-0');


                                iconadd.setAttribute("class", "text-left col-1 mt-1  px-0 py-0");

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
                                let iconadd = document.createElement("span");
                                let textChip = document.createElement("span");
                                textChip.textContent = T[1];
                                iconadd.textContent = "+";
                                // iconExit.setAttribute('id', "exit_" + T[0]);
                                chipBox.setAttribute('id', "chip_Box" + T[0]);

                                chipBox.setAttribute("class", "align-middle chip row col-5 mb-2 mr-1 ml-1");
                                iconadd.setAttribute("class", "text-left col-1 mt-1  px-0 py-0");
                                textChip.setAttribute('id', "span_in" + T[0]);
                                textChip.setAttribute('class', "text-right col-11 mt-1 px-0 py-0");


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

        }
        setSetting();
        renderCalender();

        function TABLE_PAGE_GET_DATA() {
            mainTable.innerHTML = "";

            var titleBal = document.getElementById("titleBoxTableBalance");
            var titleIn = document.getElementById("titleBoxTableIn");
            var titleOut = document.getElementById("titleBoxTableOut");

            var days_Arr = [[1, 0, 0], [2, 0, 0], [3, 0, 0], [4, 0, 0],
            [5, 0, 0], [6, 0, 0], [7, 0, 0], [8, 0, 0], [9, 0, 0], [10, 0, 0],
            [11, 0, 0], [12, 0, 0], [13, 0, 0], [14, 0, 0], [15, 0, 0], [16, 0, 0],
            [17, 0, 0], [18, 0, 0], [19, 0, 0], [20, 0, 0], [21, 0, 0], [22, 0, 0],
            [23, 0, 0], [24, 0, 0], [25, 0, 0], [26, 0, 0], [27, 0, 0], [28, 0, 0],
            [29, 0, 0], [30, 0, 0], [31, 0, 0]];

            var daysTableArr = [];
            var weeklyCheckDate = [["ראשון", 6], ["שני", 5], ["שלישי", 4],
            ["רביעי", 3], ["חמישי", 2], ["שישי", 1],
            ["שבת", 7]];

            var weeklyArr = [["ראשון", 0, 0], ["שני", 0, 0], ["שלישי", 0, 0],
            ["רביעי", 0, 0], ["חמישי", 0, 0], ["שישי", 0, 0],
            ["שבת", 0, 0]];

            var Month_Arr = [['Jan', 0, 0], ['Feb', 0, 0], ['Mar', 0, 0],
            ['Apr', 0, 0], ['May', 0, 0], ['Jun', 0, 0],
            ['Jul', 0, 0], ['Aug', 0, 0], ['Sep', 0, 0],
            ['Oct', 0, 0], ['Nov', 0, 0], ['Dec', 0, 0]];

            database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').on('value', snapshot => {

                let postArray = snapshot.val();
                let keys = Object.keys(postArray);
                let array = [];
                const newDate = createNewDate();
                var arrayafter = 0;
                var StatusCash = 0;
                let totalOutTopBox = 0;
                let totalIncomeTopBox = 0;
                var finalArray = [];
                var dayWithMultiCashFlow = [];
                var totalout = 0;
                var totalin = 0;
                var datesWeekly = [];
                var typeExpend = [];
                var cardSum = 0;
                var x = 0;
                var y = 0;

                for (var i = 0; i < keys.length; i++) {

                    var sum = 0;
                    var id = keys[i];
                    let totalIncome = 0;
                    let totalOut = 0;
                    var subDataInOut = [];
                    var currentObject = postArray[id];
                    var currectnum = currentObject.totalCash;
                    var way_pay = currentObject.wayPay;
                    var temp = currentObject.after;
                    var type = currentObject.type;
                    var date = currentObject.date;
                    var cashFlow = currentObject.chashFlow;
                    var splitDate = date.split(" ");
                    var day = splitDate[1].split(',');
                    var clearnum = day[0].split("0");
                    var dateDayNum = new Date(date).getDay();
                    var newdateParse = Date.parse(date); // day db
                    var subdate = newDate.dateInNum; // today
                    var fulDate = new Date;

                    if (way_pay == "כרטיס אשראי") {
                        arrayafter += 0;
                        sum = arrayafter;
                        x += currectnum;


                    } else if (way_pay !== "כרטיס אשראי") {
                        arrayafter += currectnum;
                        sum = arrayafter;
                    }


                    if (num_newdate == id) {

                        console.log('have', date);

                    } else {
                        if (id < num_newdate) {
                            console.log('לפני', date);

                            // send data to cobx and stop looping
                        } else {
                            console.log('אחרי', date);
                            console.log('יום לפני', date);

                        }
                    }

                    groupView.forEach(e => {

                        var key = e.checked;
                        var uid = e.id;

                        if (key) {

                            if (uid == 'choosWeekly' || uid == 'choosWeekly') {

                                titleIn.textContent = "הכנסות שבועיות";
                                titleOut.textContent = "הוצאות שבועיות";
                                titleBal.textContent = "מאזן שבועי";

                                const weekly = lastday(fulDate);
                                var first_Full_day = weekly.firstday;
                                var last_Full_day = weekly.lastday;
                                var first_day = foramtDate(first_Full_day);
                                var last_day = foramtDate(last_Full_day);


                                if (id <= last_day.num && id >= first_day.num) {


                                    laodUpData(id, currentObject, StatusCash, currectLimit, arrayafter, sum);
                                    datesWeekly.push(date);

                                    if (currentObject.title == "פעילות מרובה") {

                                        database.ref('/Users/' + user.uid + '/cashflow/' + id + "/chashFlow/").orderByChild('number').on('value', snap => {

                                            let postArraySub = snap.val();
                                            let keysSyb = Object.keys(postArraySub);

                                            for (var i = 0; i < keysSyb.length; i++) {

                                                var subid = keysSyb[i];
                                                var sub_currentObject = postArraySub[subid];
                                                var sub_currectnum = sub_currentObject.totalCash;
                                                var sub_title = sub_currentObject.title;
                                                var sub_type = sub_currentObject.type;
                                                var sub_date = sub_currentObject.date;
                                                var sub_cashFlow = sub_currentObject.chashFlow;
                                                if (sub_type == "out") {
                                                    typeExpend.push([sub_title, sub_currectnum]);

                                                } else if (sub_type == "in") {

                                                }



                                            }

                                        });

                                    } else if (currentObject.title !== "פעילות מרובה") {
                                        if (type == "out") {
                                            typeExpend.push([currentObject.title, currectnum]);


                                        } else if (type == "in") {

                                        }
                                    }

                                }
                            } else if (uid == 'chooseMonthly' || uid == 'chooseMonthly') {

                                titleIn.textContent = "הכנסות חודשיות";
                                titleOut.textContent = "הוצאות חודשיות";
                                titleBal.textContent = "מאזן חודשי";

                                if (newDate.month == splitDate[0]) {


                                    laodUpData(id, currentObject, StatusCash, currectLimit, arrayafter, sum);
                                    if (currentObject.title == "פעילות מרובה") {

                                        database.ref('/Users/' + user.uid + '/cashflow/' + id + "/chashFlow/").orderByChild('number').on('value', snap => {

                                            let postArraySub = snap.val();
                                            let keysSyb = Object.keys(postArraySub);

                                            for (var i = 0; i < keysSyb.length; i++) {
                                                var subid = keysSyb[i];
                                                var sub_currentObject = postArraySub[subid];
                                                var sub_currectnum = sub_currentObject.totalCash;
                                                var sub_title = sub_currentObject.title;
                                                var sub_type = sub_currentObject.type;
                                                var sub_date = sub_currentObject.date;
                                                var sub_cashFlow = sub_currentObject.chashFlow;
                                                if (sub_type == "out") {
                                                    typeExpend.push([sub_title, sub_currectnum]);

                                                } else if (sub_type == "in") {

                                                }

                                            }

                                        });

                                    } else if (currentObject.title !== "פעילות מרובה") {
                                        if (type == "out") {
                                            typeExpend.push([currentObject.title, currectnum]);


                                        } else if (type == "in") {

                                        }
                                    }

                                }

                            } else if (uid == 'chooseYearly' || uid == 'chooseYearly') {

                                titleIn.textContent = "הכנסות שנתי";
                                titleOut.textContent = "הוצאות שנתי";
                                titleBal.textContent = "מאזן שנתי";
                                var index = "";
                                var xin = 0;
                                var xout = 0;

                                for (var j = 0; j < Month_Arr.length; j++) {



                                    if (Month_Arr[j][0] == splitDate[0]) {
                                        if (type == 'out') {
                                            xout += currectnum;
                                        } else if (type = 'in') {
                                            xin += currectnum;
                                        }
                                    }

                                    if (currentObject.title == "פעילות מרובה") {

                                        database.ref('/Users/' + user.uid + '/cashflow/' + id + "/chashFlow/").orderByChild('number').on('value', snap => {

                                            let postArraySub = snap.val();
                                            let keysSyb = Object.keys(postArraySub);

                                            for (var i = 0; i < keysSyb.length; i++) {

                                                var subid = keysSyb[i];
                                                var sub_currentObject = postArraySub[subid];
                                                var sub_currectnum = sub_currentObject.totalCash;
                                                var sub_title = sub_currentObject.title;
                                                var sub_type = sub_currentObject.type;
                                                var sub_date = sub_currentObject.date;
                                                var sub_cashFlow = sub_currentObject.chashFlow;
                                                if (sub_type == "out") {
                                                    typeExpend.push([sub_title, sub_currectnum]);

                                                } else if (sub_type == "in") {

                                                }

                                            }

                                        });

                                    } else if (currentObject.title !== "פעילות מרובה") {
                                        if (type == "out") {
                                            typeExpend.push([currentObject.title, currectnum]);


                                        } else if (type == "in") {

                                        }
                                    }

                                }


                            } else if (uid = 'chooseBitweenDates' || uid == 'chooseBitweenDates') {

                                const days = getBitweenDates();
                                if (id <= days.eDay && id >= days.sDay) {

                                    laodUpData(id, currentObject, StatusCash, currectLimit, arrayafter, sum);
                                    datesWeekly.push(date);
                                    if (currentObject.title == "פעילות מרובה") {

                                        database.ref('/Users/' + user.uid + '/cashflow/' + id + "/chashFlow/").orderByChild('number').on('value', snap => {

                                            let postArraySub = snap.val();
                                            let keysSyb = Object.keys(postArraySub);

                                            for (var i = 0; i < keysSyb.length; i++) {

                                                var subid = keysSyb[i];
                                                var sub_currentObject = postArraySub[subid];
                                                var sub_currectnum = sub_currentObject.totalCash;
                                                var sub_title = sub_currentObject.title;
                                                var sub_type = sub_currentObject.type;
                                                var sub_date = sub_currentObject.date;
                                                var sub_cashFlow = sub_currentObject.chashFlow;
                                                if (sub_type == "out") {
                                                    typeExpend.push([sub_title, sub_currectnum]);

                                                } else if (sub_type == "in") {

                                                }
                                            }

                                        });

                                    } else if (currentObject.title !== "פעילות מרובה") {
                                        if (type == "out") {
                                            typeExpend.push([currentObject.title, currectnum]);
                                        } else if (type == "in") {
                                        }
                                    }


                                }


                            }

                        }
                    });
                    console.log(cardSum);

                    if (cashFlow) {

                        database.ref('/Users/' + user.uid + '/cashflow/' + id + "/chashFlow/").on('value', snapshot => {

                            let subPostArray = snapshot.val();
                            let SubKeys = Object.keys(subPostArray);
                            var subIn = 0;
                            var subOut = 0;
                            var card_Sum = 0;
                            for (var k = 0; k < SubKeys.length; k++) {

                                var uid = SubKeys[k];
                                var dataDb = subPostArray[uid];
                                if (dataDb.wayPay == "כרטיס אשראי") {
                                    card_Sum += dataDb.totalCash;
                                    // subOut += 0;
                                    y += dataDb.totalCash;
                                }

                                if (dataDb.type == 'out') {
                                    if (dataDb.wayPay !== "כרטיס אשראי") {
                                        subOut += dataDb.totalCash;

                                    }
                                    // if (arrtibute == "check") {

                                    // } else if (arrtibute == "uncheck") {

                                    // if (dataDb.after !== true && dataDb.after !== " ") {
                                    // subOut += dataDb.totalCash;

                                    // subOut += dataDb.totalCash;
                                    // }
                                    // }
                                    // typeExpend.push([dataDb.title, dataDb.totalCash]);

                                } else if (dataDb.type == 'in') {

                                    // if (arrtibute == "check") {

                                    subIn += dataDb.totalCash;

                                    // } else if (arrtibute == "uncheck") {

                                    // if (dataDb.after !== true && dataDb.after !== " ") {

                                    // subIn += dataDb.totalCash;

                                    // }
                                    // }
                                }

                            }
                            console.log(y);
                            cardSum += card_Sum;
                            dayWithMultiCashFlow.push([date, subIn, subOut]);

                        });

                    } else {
                        if (type == 'out') {
                            if (way_pay == "כרטיס אשראי") {

                                cardSum += currectnum;
                            }
                            dayWithMultiCashFlow.push([date, 0, currectnum]);

                        } else if (type == 'in') {

                            dayWithMultiCashFlow.push([date, currectnum, 0]);

                        }
                    }

                }
                console.log(x + y);

                typeExpend.forEach(element => {
                    console.log(element);

                });

                groupView.forEach(e => {

                    var key = e.checked;
                    var uid = e.id;

                    if (key) {

                        if (uid == "chooseMonthly") {
                            var newArray = [];
                            var sumin = 0;
                            var sumout = 0;
                            let totalArray = [];

                            // typeExpend.forEach(e => {
                            //     let newRowName = e[0]
                            //     console.log(typeExpend.indexOf(e));

                            //     totalArray.forEach(x => {


                            //         var num = totalArray.length;
                            //         if (num == 0) {
                            //             console.log("in");
                            //             totalArray.push([e]);
                            //         } else {

                            //             var index = totalArray.indexOf(e);
                            //             if (index !== -1) {
                            //                 x[1] += e[1];
                            //             } else if (index == -1) {
                            //                 totalArray.push([e]);
                            //             }



                            //         }

                            //     })
                            // });
                            console.log(typeExpend);
                            console.log(totalArray);

                            // for (var i = 0; i < typeExpend.length; i++) {
                            //     console.log(typeExpend[i][0]);
                            //     if (i == 0) {
                            //         totalArray.push([typeExpend[i]]);

                            //     } else if (i !== 0) {
                            //         for (var j = 0; j < totalArray.length; j++) {

                            //             if (totalArray[j][0] === typeExpend[i][0]) {
                            //                 totalArray[j][1] += typeExpend[i][1];
                            //             }

                            //         }
                            //     }

                            //     // var included = totalArray[i].includes(typeExpend[i][0]);
                            //     // totalArray.push([typeExpend[i]]);
                            //     // console.log(included);

                            //     // var index = totalArray.indexOf([typeExpend[i][0]]);


                            // }



                            sumDuplicate(typeExpend);
                            console.log(typeExpend);
                            chartTypeChart(typeExpend);
                            // var included = totalArray[i].includes(typeExpend[i][0]);
                            // totalArray.push([typeExpend[i]]);
                            // console.log(included);

                            // var index = totalArray.indexOf([typeExpend[i][0]]);


                            // }


                            dayWithMultiCashFlow.forEach(d => {
                                var mon = d[0].split(" ")[0];
                                var day = d[0].split(" ")[1].split(",")[0];

                                if (newDate.month == mon) {
                                    days_Arr.forEach(x => {
                                        if (x[0] == day) {
                                            x[1] = d[1];
                                            x[2] = d[2];
                                            sumin += d[1];
                                            sumout += d[2];
                                        }
                                    })
                                }
                            })

                            loadIncomingOutForTable(sumin, sumout);
                            finalArray = days_Arr;
                            chartTableYearly(finalArray);

                        } else if (uid == "chooseBitweenDates") {

                            // console.log(new Date(datesWeekly[0]).getDay());
                            // console.log(datesWeekly);
                            var newarray = [];
                            var sumin = 0;
                            var sumout = 0;
                            sumDuplicate(typeExpend);
                            console.log(typeExpend);
                            chartTypeChart(typeExpend);
                            dayWithMultiCashFlow.forEach(d => {

                                datesWeekly.forEach(y => {
                                    if (d[0] == y) {
                                        var checkDay = new Date(y).getDay();
                                        newarray.push(d);
                                        sumin += d[1];
                                        sumout += d[2];
                                    }
                                })

                            });

                            loadIncomingOutForTable(sumin, sumout)
                            finalArray = newarray;
                            chartTableYearly(finalArray);

                        } else if (uid == "chooseYearly") {
                            var data = 0;
                            database.ref('/Users/' + user.uid + '/setting/firstSetting/').on('value', snapshot => {
                                // console.log(Object.keys(snapshot));

                                var data = snapshot.val();
                                var statusCash = data.cuurentCash;
                                data = statusCash;
                                console.log(data);

                            });
                            var start = data;
                            var num_in = 0;
                            var num_out = 0;
                            console.log(dayWithMultiCashFlow);
                            // sumDuplicate(typeExpend);
                            // console.log(typeExpend);
                            // chartTypeChart(typeExpend);
                            dayWithMultiCashFlow.forEach(d => {

                                var date = d[0].split(" ")[0];
                                Month_Arr.forEach(x => {

                                    if (x[0] == date) {

                                        // console.log(x[1]);
                                        x[1] += d[1];
                                        x[2] += d[2];
                                        var sum = d[1] + d[2];
                                        num_in += d[1];
                                        num_out += d[2];

                                    }

                                })

                            })
                            Month_Arr.forEach(o => {
                                var sum = o[1] + o[2];
                                start += sum;
                                loadYearly(o, start);

                            })
                            chartTableYearly(Month_Arr);

                            loadIncomingOutForTable(num_in, num_out);
                            // console.log(num_in, num_out);


                        } else if (uid == "choosWeekly") {

                            var num_in = 0;
                            var num_out = 0;
                            // console.log(dayWithMultiCashFlow);
                            sumDuplicate(typeExpend);
                            console.log(typeExpend);
                            chartTypeChart(typeExpend);
                            dayWithMultiCashFlow.forEach(d => {
                                datesWeekly.forEach(y => {

                                    if (d[0] == y) {
                                        var checkDay = new Date(y).getDay();


                                        weeklyArr[checkDay][1] = d[1];
                                        weeklyArr[checkDay][2] = d[2];
                                        num_in += d[1];
                                        num_out += d[2];

                                    }
                                })

                            });
                            loadIncomingOutForTable(num_in, num_out);
                            finalArray = weeklyArr;
                            chartTableYearly(finalArray);

                        }
                    }
                });
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
                    // console.log(date, type);

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

        function UPDATE_CORRECT_CASH() {
            // var arrtibute = changeToPlan.getAttribute("class");

            var sttus_cash = 0;
            database.ref('/Users/' + user.uid + '/setting/firstSetting/').on('value', snapshot => {
                // console.log(Object.keys(snapshot));

                var data = snapshot.val();
                var statusCash = data.cuurentCash;
                sttus_cash = statusCash;
                // console.log(sttus_cash);

            });
            // console.log(sttus_cash);

            var sum = sttus_cash;
            database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').on('value', snapshot => {

                let postArray = snapshot.val();
                let keys = Object.keys(postArray);
                // console.log(keys.length);

                var arrayafter = 0;
                for (var i = 0; i < keys.length; i++) {
                    var arrayafter = 0;
                    var id = keys[i];
                    var before = keys[i - 1];

                    var currentObject = postArray[id];
                    var beforeObject = postArray[before];

                    var date = currentObject.date;
                    var temp = currentObject.after;
                    var currectnum = currentObject.totalCash;





                    // if (arrtibute == "check") {
                    arrayafter += currectnum;
                    sum += arrayafter;

                    // } else if (arrtibute == "uncheck") {
                    //     if (temp !== true || temp !== " ") {
                    arrayafter += currectnum;
                    sum += arrayafter;

                    //     }
                    // }

                    if (before == undefined) {
                        continue;
                    } else {

                        if (id < num_newdate) {
                            continue;
                        } else if (id == num_newdate) {
                            // SEND DATA AFTER CORRECT CASH

                            // console.log(sum);
                            addStatusCash(sum);

                            break;

                        } else if (id > num_newdate) {
                            // SEND DATA AFTER BEFORE CASH

                            var correctDatebefore = beforeObject.date;
                            var cash = beforeObject.totalCash;
                            var total = sum - currectnum;
                            addStatusCash(total);
                            break;
                        }

                    }
                    function addStatusCash(sum) {

                        var number = formatNumber(sum.toFixed(2));
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

                    }




                }
            });
        }





        UPDATE_CORRECT_CASH();
        function FormatDate(Date) {

            var split = Date.split("-");
            var monthy = split[1];
            if (monthy < 10) {
                monthy = monthy.split("")[1];
            }
            // console.log(monthy);
            var corMonth = Object.keys(month);
            // console.log(monthy);

            var Month = corMonth[monthy - 1];
            // console.log(Month);

            var year = split[0];

            var day = split[2];
            var newDate = Month + " " + day + ", " + year;
            return newDate;
        }
        function HOME_PAGE_GET_DATA_FOR_WEEKLY() {
            // const new__Date = createNewDate();
            function setDataToWayPayBoxes(d, c, p, b, bt, cr) {
                // console.log(d, c, p, b, bt, cr);
                num_directDebit.textContent = d;
                num_cash.textContent = c;
                num_credit.textContent = cr;
                num_transferBank.textContent = b;
                num_paper.textContent = p;
                num_bit.textContent = bt;

                // var i_bank = document.getElementById("i_bank");
                // var i_paper = document.getElementById("i_bank");
                // var i_credit = document.getElementById("i_bank");
                // var i_debit = document.getElementById("i_bank");
                // var i_bit = document.getElementById("i_bank");
                // var i_cash = document.getElementById("i_bank");

                if (num_paper.textContent < 0 || num_paper.textContent > 0) {
                    paperCARDbox.classList.remove("shadow-sm");
                    paperCARDbox.classList.add("shadow");
                    paperCARD.classList.remove("text-secondary");
                    paperCARD.classList.remove("text-secondary");
                    paperCARD.classList.remove("bg-light");
                    paperCARD.classList.add("expendCheck");
                    i_paper.classList.remove("text-secondary");
                    i_paper.classList.add("color_icon");

                } else {
                    paperCARDbox.classList.remove("shadow");
                    paperCARD.classList.remove("expendCheck");
                    paperCARDbox.classList.add("shadow-sm");
                    paperCARD.classList.add("text-secondary");
                    paperCARD.classList.add("bg-light");
                    i_paper.classList.remove("color_icon");
                    i_paper.classList.add("text-secondary");
                }

                if (num_cash.textContent < 0 || num_cash.textContent > 0) {
                    cashCARDbox.classList.remove("shadow-sm");
                    cashCARDbox.classList.add("shadow");
                    cashCARD.classList.remove("text-secondary");
                    cashCARD.classList.remove("bg-light");
                    cashCARD.classList.add("expendCheck");
                    i_cash.classList.remove("text-secondary");
                    i_cash.classList.add("color_icon");
                    // num_cash.style.fontSize = "20px"

                } else {

                    cashCARDbox.classList.remove("shadow");
                    cashCARD.classList.remove("expendCheck");
                    cashCARDbox.classList.add("shadow-sm");
                    cashCARD.classList.add("text-secondary");
                    cashCARD.classList.add("bg-light");
                    i_cash.classList.remove("color_icon");
                    i_cash.classList.add("text-secondary");

                }
                if (num_directDebit.textContent < 0 || num_directDebit.textContent > 0) {
                    debitCARDbox.classList.remove("shadow-sm");
                    debitCARDbox.classList.add("shadow");
                    debitCARD.classList.remove("text-secondary");
                    debitCARD.classList.remove("bg-light");
                    debitCARD.classList.add("expendCheck");
                    i_debit.classList.remove("text-secondary");
                    i_debit.classList.add("color_icon");
                } else {
                    debitCARDbox.classList.remove("shadow");
                    debitCARD.classList.remove("expendCheck");
                    debitCARDbox.classList.add("shadow-sm");
                    debitCARD.classList.add("text-secondary");
                    debitCARD.classList.add("bg-light");
                    i_debit.classList.remove("color_icon");
                    i_debit.classList.add("text-secondary");
                }


                if (num_credit.textContent < 0 || num_credit.textContent > 0) {
                    creditCARDbox.classList.remove("shadow-sm");
                    creditCARDbox.classList.add("shadow");
                    creditCARD.classList.remove("text-secondary");
                    creditCARD.classList.remove("bg-light");
                    creditCARD.classList.add("expendCheck");
                    i_credit.classList.remove("text-secondary");
                    i_credit.classList.add("color_icon");

                } else {
                    creditCARDbox.classList.remove("shadow");
                    creditCARD.classList.remove("expendCheck");
                    creditCARDbox.classList.add("shadow-sm");
                    creditCARD.classList.add("text-secondary");
                    creditCARD.classList.add("bg-light");
                    i_credit.classList.remove("color_icon");
                    i_credit.classList.add("text-secondary");
                }

                if (num_transferBank.textContent < 0 || num_transferBank.textContent > 0) {
                    bankCARDbox.classList.remove("shadow-sm");
                    bankCARDbox.classList.add("shadow");
                    bankCARD.classList.remove("text-secondary");
                    bankCARD.classList.remove("bg-light");
                    bankCARD.classList.add("expendCheck");
                    i_bank.classList.remove("text-secondary");
                    // i_bank.style.color = "#ff3d67 !important";
                    i_bank.classList.add("color_icon");

                } else {

                    bankCARDbox.classList.remove("shadow");
                    bankCARD.classList.remove("expendCheck");
                    bankCARDbox.classList.add("shadow-sm");
                    bankCARD.classList.add("text-secondary");
                    bankCARD.classList.add("bg-light");
                    i_bank.classList.remove("color_icon");
                    i_bank.classList.add("text-secondary");
                }

                if (num_bit.textContent < 0 || num_bit.textContent > 0) {
                    bitCARDbox.classList.remove("shadow-sm");
                    bitCARDbox.classList.add("shadow");
                    bitCARD.classList.remove("text-secondary");
                    bitCARD.classList.remove("bg-light");
                    bitCARD.classList.add("expendCheck");
                    i_bit.classList.remove("text-secondary");
                    // i_bit.style.color = "#ff3d67 !important";
                    i_bit.classList.add("color_icon");


                } else {
                    bitCARDbox.classList.remove("shadow");
                    bitCARD.classList.remove("expendCheck");
                    bitCARDbox.classList.add("shadow-sm");
                    bitCARD.classList.add("text-secondary");
                    bitCARD.classList.add("bg-light");
                    i_bit.classList.remove("color_icon");
                    i_bit.classList.add("text-secondary");
                }


            }
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

            database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').on('value', snapshot => {
                const newDate = createNewDate();

                let postArray = snapshot.val();
                let keys = Object.keys(postArray);
                var arrayafter = 0;
                var StatusCash = 0;
                var weekNewArr = [];
                var monthlyArr = [];

                const thisMonth = createNewDate();


                var credit = 0;
                var debit = 0;
                var cheks = 0;
                var bank = 0;
                var bit = 0;
                var cash = 0;
                function checkType(a, c) {
                    if (a == 'העברה בנקאית') {
                        bank += c;
                    } else if (a == "צ'ק") {
                        // console.log(a, c);
                        paper += c;
                    } else if (a == 'מזומן') {
                        // console.log(a, c);
                        cash += c;
                    } else if (a == 'כרטיס אשראי') {
                        // console.log(a, c);
                        credit += c;
                    } else if (a == 'הוראת קבע') {
                        // console.log(a, c);
                        debit += c;
                    } else if (a == 'ביט') {
                        // console.log(a, c);
                        bit += c;
                    }
                }
                var SUMIN = 0;
                var SUMOUT = 0;
                var dayWithMultiCashFlow = [];
                for (var i = 0; i < keys.length; i++) {

                    var id = keys[i];
                    let totalout = 0;
                    let totalIncome = 0;
                    let totalOut = 0;
                    var currentObject = postArray[id];
                    var currectnum = currentObject.totalCash;
                    var wayPay = currentObject.wayPay;
                    var checkTemp = currentObject.after;
                    arrayafter += currectnum;
                    var type = currentObject.type;
                    var date = currentObject.date;
                    var splitDate = date.split(" ");
                    var month = splitDate[0];

                    if (wayPay == 'כרטיס אשראי') {

                    }

                    groupChartHome.forEach(e => {

                        var key = e.checked;
                        var uid = e.id;
                        var inBoxHome = document.getElementById("inHome");
                        var outBoxHome = document.getElementById("outHome");

                        if (key) {

                            if (uid == 'weeklyChart' || uid == 'weeklyChart') {

                                inBoxHome.textContent = "הכנסות שבועיות";
                                outBoxHome.textContent = "הוצאות שבועיות";

                                var fulDate = new Date;

                                const weekly = lastday(fulDate);
                                var first_Full_day = weekly.firstday;
                                var last_Full_day = weekly.lastday;
                                var first_day = foramtDate(first_Full_day);
                                var last_day = foramtDate(last_Full_day);

                                if (id <= last_day.num && id >= first_day.num) {

                                    if (currentObject.chashFlow) {


                                        database.ref('/Users/' + user.uid + '/cashflow/' + id + "/chashFlow/").orderByChild('number').on('value', snapshot => {

                                            let subPostArray = snapshot.val();
                                            let SubKeys = Object.keys(subPostArray);
                                            var subIn = 0;
                                            var subOut = 0;

                                            for (var k = 0; k < SubKeys.length; k++) {

                                                var newuid = SubKeys[k];
                                                database.ref('/Users/' + user.uid + '/cashflow/' + id + "/chashFlow/" + newuid + '/').on('value', snap => {

                                                    var dataDb = snap.val();
                                                    if (dataDb.type == 'out') {
                                                        subOut += dataDb.totalCash;
                                                        if (dataDb.wayPay == 'מזומן') {
                                                            cash += dataDb.totalCash;
                                                        } else if (dataDb.wayPay == "צ'ק") {
                                                            cheks += dataDb.totalCash;
                                                        } else if (dataDb.wayPay == 'העברה בנקאית') {
                                                            bank += dataDb.totalCash;
                                                        } else if (dataDb.wayPay == 'הוראת קבע') {
                                                            debit += dataDb.totalCash;
                                                        } else if (dataDb.wayPay == "אפליקציית ביט") {
                                                            bit += dataDb.totalCash;
                                                        } else if (dataDb.wayPay == 'כרטיס אשראי') {
                                                            credit += dataDb.totalCash;
                                                        }

                                                    } else if (dataDb.type == 'in') {
                                                        subIn += dataDb.totalCash;
                                                    }

                                                });
                                            }

                                            dayWithMultiCashFlow.push([date, subIn, subOut]);
                                            SUMIN += subIn;
                                            if (wayPay !== 'כרטיס אשראי') {
                                                SUMOUT += subOut;

                                            }


                                        });

                                    } else {

                                        if (type == 'out') {

                                            // if (checkTemp !== true || checkTemp !== " ") {
                                            dayWithMultiCashFlow.push([date, 0, currectnum]);
                                            if (wayPay !== 'כרטיס אשראי') {
                                                SUMOUT += currectnum;


                                            }
                                            // }

                                            if (wayPay == 'מזומן') {
                                                // if (checkTemp !== true || checkTemp !== " ") {
                                                cash += currectnum;
                                                // }
                                            } else if (wayPay == "צ'ק") {
                                                // if (checkTemp !== true || checkTemp !== " ") {
                                                cheks += currectnum;
                                                // }
                                            } else if (wayPay == 'העברה בנקאית') {
                                                // if (checkTemp !== true || checkTemp !== " ") {
                                                bank += currectnum;
                                                // }
                                            } else if (wayPay == 'הוראת קבע') {
                                                // if (checkTemp !== true || checkTemp !== " ") {
                                                debit += currectnum;
                                                // }
                                            } else if (wayPay == "אפליקציית ביט") {
                                                // if (checkTemp !== true || checkTemp !== " ") {
                                                bit += currectnum;
                                                // }
                                            } else if (wayPay == 'כרטיס אשראי') {

                                                // if (checkTemp !== true || checkTemp !== " ") {

                                                credit += currectnum;
                                                // }
                                            }

                                        } else if (type == 'in') {

                                            // if (checkTemp !== true || checkTemp !== " ") {

                                            SUMIN += currectnum;
                                            dayWithMultiCashFlow.push([date, currectnum, 0]);
                                            // }

                                        }

                                    }

                                }

                            } else if (uid == 'monthlyChart' || uid == 'monthlyChart') {

                                inBoxHome.textContent = "הכנסות חודשיות";
                                outBoxHome.textContent = "הוצאות חודשיות";

                                if (newDate.month == splitDate[0]) {

                                    if (currentObject.chashFlow) {

                                        database.ref('/Users/' + user.uid + '/cashflow/' + id + "/chashFlow/").orderByChild('number').on('value', snapshot => {

                                            let subPostArray = snapshot.val();
                                            let SubKeys = Object.keys(subPostArray);
                                            var subIn = 0;
                                            var subOut = 0;

                                            for (var k = 0; k < SubKeys.length; k++) {

                                                var uid = SubKeys[k];
                                                database.ref('/Users/' + user.uid + '/cashflow/' + id + "/chashFlow/" + uid + '/').on('value', snap => {

                                                    var dataDb = snap.val();
                                                    if (dataDb.type == 'out') {
                                                        subOut += dataDb.totalCash;
                                                        if (dataDb.wayPay == 'מזומן') {
                                                            cash += dataDb.totalCash;
                                                        } else if (dataDb.wayPay == "צ'ק") {
                                                            cheks += dataDb.totalCash;
                                                        } else if (dataDb.wayPay == 'העברה בנקאית') {
                                                            bank += dataDb.totalCash;
                                                        } else if (dataDb.wayPay == 'הוראת קבע') {
                                                            debit += dataDb.totalCash;
                                                        } else if (dataDb.wayPay == "אפליקציית ביט") {
                                                            bit += dataDb.totalCash;
                                                        } else if (dataDb.wayPay == 'כרטיס אשראי') {

                                                            credit += dataDb.totalCash;
                                                        }

                                                    } else if (dataDb.type == 'in') {

                                                        subIn += dataDb.totalCash;

                                                    }
                                                });
                                            }

                                            SUMIN += subIn;
                                            if (wayPay !== 'כרטיס אשראי') {
                                                SUMOUT += subOut;



                                            }

                                            dayWithMultiCashFlow.push([date, subIn, subOut]);


                                        });

                                    } else {
                                        // console.log(date, checkTemp);

                                        if (type == 'out') {

                                            dayWithMultiCashFlow.push([date, 0, currectnum]);
                                            if (wayPay !== 'כרטיס אשראי') {
                                                SUMOUT += currectnum;




                                            }

                                            if (wayPay == 'מזומן') {

                                                cash += currectnum;

                                            } else if (wayPay == "צ'ק") {

                                                cheks += currectnum;

                                            } else if (wayPay == 'העברה בנקאית') {

                                                bank += currectnum;

                                            } else if (wayPay == 'הוראת קבע') {

                                                debit += currectnum;

                                            } else if (wayPay == 'אפליקציית ביט') {

                                                bit += currectnum;

                                            } else if (wayPay == 'כרטיס אשראי') {

                                                credit += currectnum;

                                            }
                                        } else if (type == 'in') {

                                            dayWithMultiCashFlow.push([date, currectnum, 0]);
                                            SUMIN += currectnum;
                                        }
                                    }

                                }

                            }

                        }
                    });


                }
                setDataToWayPayBoxes(Math.abs(debit), Math.abs(cash), Math.abs(cheks), Math.abs(bank), Math.abs(bit), Math.abs(credit))

                groupChartHome.forEach(e => {

                    var key = e.checked;
                    var uid = e.id;
                    var inchart = [];
                    var outChart = [];
                    var dayschart = [];

                    if (key) {

                        if (uid == 'weeklyChart') {

                            var data = dayWithMultiCashFlow;
                            // console.log(data);
                            var inArrweek = [0, 0, 0, 0, 0, 0, 0];
                            var outArrweek = [0, 0, 0, 0, 0, 0, 0];
                            var refWeek = [1, 2, 3, 4, 5, 6, 7];
                            var daysweeks = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];

                            for (H = 0; H < data.length; H++) {
                                var day = data[H][0];
                                var num = new Date(day).getDay();
                                inArrweek[refWeek.indexOf(num)] = data[H][1];
                                outArrweek[refWeek.indexOf(num)] = data[H][2];

                            }
                            inchart = inArrweek;
                            outChart = outArrweek;
                            dayschart = daysweeks;

                            chartTable(inchart, outChart, dayschart);

                        } else if (uid == 'monthlyChart') {
                            var data = dayWithMultiCashFlow;
                            // console.log(data);
                            var inArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                            var outArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                            var days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

                            for (H = 0; H < data.length; H++) {
                                var day = data[H][0].split(" ")[1].split(",")[0];
                                inArr[days.indexOf(Number(day))] += data[H][1];
                                outArr[days.indexOf(Number(day))] += data[H][2];
                            }
                            inchart = inArr;
                            outChart = outArr;
                            dayschart = days;
                            chartTable(inchart, outChart, dayschart);


                        }
                    }
                });

                // loadIncomingOut(SUMIN, SUMOUT);
                var numout = formatNumber(SUMOUT.toFixed(2));
                var splitout = numout.split(".");
                let spannumout = document.createElement("span");
                spannumout.setAttribute("class", "decimel");
                spannumout.textContent = splitout[1];

                num_expendMonth.textContent = splitout[0] + ".";
                num_expendMonth.appendChild(spannumout);

                var numin = formatNumber(SUMIN.toFixed(2));
                var splitin = numin.split(".");
                let spannumin = document.createElement("span");
                spannumin.setAttribute("class", "decimel");
                spannumin.textContent = splitin[1];

                num_incomingMonth.textContent = splitin[0] + ".";
                num_incomingMonth.appendChild(spannumin);

                var sum = SUMIN + SUMOUT;

                var numbalance = formatNumber(sum.toFixed(2));
                var splitbalance = numbalance.split(".");
                let spannumbalance = document.createElement("span");
                spannumbalance.setAttribute("class", "decimel");
                spannumbalance.textContent = splitbalance[1];

                num_balanceMonth.textContent = splitbalance[0] + ".";
                num_balanceMonth.appendChild(spannumbalance);

                var suminWeekly = 0;
                var sumoutWeekly = 0;
                var suminMonthly = 0;
                var sumoutMonthly = 0;


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
                // console.log(dateVal);
                var newdate = FormatDate(dateVal);
                // console.log(newdate);
                // console.log(dateVal);

                var dataValNum = Date.parse(newdate);
                var highCashVal = highCash.value;
                var lowCashVal = lowCash.value;
                var textSearchVal = textSearch.value;
                var typeCashVal = typeCashSearch.value;
                // console.log(typeCashVal, textSearchVal);
                var obg = [];

                if (textSearchVal === "" && typeCashVal !== "") {
                    database.ref('/Users/' + user.uid + '/cashflow/').orderByChild("wayPay").equalTo(typeCashVal).once('value').then(snapshot => {

                        // console.log(snapshot);
                        let postArray = snapshot.val();
                        // console.log(postArray);

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
                            // console.log(Date.parse);
                            // console.log(currentObject);
                            if (lowCashVal !== "" && highCashVal === "") {
                                // console.log(currectnum, lowCashVal);
                                if (currectnum < lowCashVal) {
                                    // console.log("סכום מתחת");
                                    addToSearchBox(title, date, st, currectnum, way);
                                }

                            } else if (lowCashVal === "" && highCashVal !== "") {
                                if (currectnum > highCashVal) {
                                    // console.log("סכום מעל");
                                    addToSearchBox(title, date, st, currectnum, way);
                                }

                            } else if (lowCashVal !== "" && highCashVal !== "") {
                                if (currectnum > highCashVal && currectnum > highCashVal) {
                                    // console.log("סכום מעל ומתחת");
                                    addToSearchBox(title, date, st, currectnum, way);
                                }


                            } else if (lowCashVal === "" && highCashVal === "") {
                                addToSearchBox(title, date, st, currectnum, way);
                                obg.push(currentObject);
                            }

                            obg.push(currentObject);
                        }

                    });
                    // console.log('dfgh');
                    // BetweenSum(lowCashVal, highCashVal);
                } else if (typeCashVal === "" && textSearchVal !== "") {
                    database.ref('/Users/' + user.uid + '/cashflow/').orderByChild("title").equalTo(textSearchVal).once('value').then(snapshot => {

                        // console.log(snapshot);
                        let postArray = snapshot.val();
                        // console.log(postArray);

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
                            // console.log(currentObject);
                            if (lowCashVal !== "" && highCashVal === "") {
                                // console.log(currectnum, lowCashVal);
                                if (currectnum < lowCashVal) {
                                    // console.log("סכום מתחת");
                                    addToSearchBox(title, date, st, currectnum, way);
                                }

                            } else if (lowCashVal === "" && highCashVal !== "") {
                                if (currectnum > highCashVal) {
                                    // console.log("סכום מעל");
                                    addToSearchBox(title, date, st, currectnum, way);
                                }

                            } else if (lowCashVal !== "" && highCashVal !== "") {
                                if (currectnum > highCashVal && currectnum > highCashVal) {
                                    // console.log("סכום מעל ומתחת");
                                    addToSearchBox(title, date, st, currectnum, way);
                                }


                            } else if (lowCashVal === "" && highCashVal === "") {
                                addToSearchBox(title, date, st, currectnum, way);
                                obg.push(currentObject);
                            }
                            // addToSearchBox(title, date, st, currectnum, way);


                        }
                        // console.log(info);

                    });
                    // BetweenSum(lowCashVal, highCashVal);
                } else if (typeCashVal !== "" && textSearchVal !== "") {
                    database.ref('/Users/' + user.uid + '/cashflow/').orderByChild("title").equalTo(textSearchVal).once('value').then(snapshot => {

                        // console.log(snapshot);
                        let postArray = snapshot.val();
                        // console.log(postArray);

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
                            // console.log(currentObject);

                            // console.log(way, typeCashVal);
                            if (way === typeCashVal) {
                                // addToSearchBox(title, date, st, currectnum, way);
                                // console.log('succses');
                                obg.push(currentObject);

                                if (lowCashVal !== "" && highCashVal === "") {
                                    // console.log(currectnum, lowCashVal);
                                    if (currectnum < lowCashVal) {
                                        // console.log("סכום מתחת");
                                        addToSearchBox(title, date, st, currectnum, way);
                                    }

                                } else if (lowCashVal === "" && highCashVal !== "") {
                                    if (currectnum > highCashVal) {
                                        // console.log("סכום מעל");
                                        addToSearchBox(title, date, st, currectnum, way);
                                    }

                                } else if (lowCashVal !== "" && highCashVal !== "") {
                                    if (currectnum > highCashVal && currectnum > highCashVal) {
                                        // console.log("סכום מעל ומתחת");
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
                    database.ref('/Users/' + user.uid + '/cashflow/').orderByChild("number").once('value').then(snapshot => {

                        // console.log(snapshot);
                        let postArray = snapshot.val();
                        // console.log(postArray);
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
                            // console.log(currentObject);

                            // console.log(way, typeCashVal);
                            if (lowCashVal !== "" && highCashVal === "") {
                                // console.log(currectnum, lowCashVal);
                                if (currectnum < lowCashVal) {
                                    // console.log("סכום מתחת");
                                    addToSearchBox(title, date, st, currectnum, way);
                                }

                            } else if (lowCashVal === "" && highCashVal !== "") {
                                if (currectnum > highCashVal) {
                                    // console.log("סכום מעל");
                                    addToSearchBox(title, date, st, currectnum, way);
                                }

                            } else if (lowCashVal !== "" && highCashVal !== "") {
                                if (currectnum > highCashVal && currectnum > highCashVal) {
                                    // console.log("סכום מעל ומתחת");
                                    addToSearchBox(title, date, st, currectnum, way);
                                }


                            }
                            // else if (lowCashVal === "" && highCashVal === "") {
                            //     addToSearchBox(title, date, st, currectnum, way);
                            //     obg.push(currentObject);
                            // }
                        }

                    });
                    // BetweenSum(lowCashVal, highCashVal);

                }

                if (dateVal !== "") {
                    database.ref('/Users/' + user.uid + '/cashflow/').orderByChild("date").equalTo(newdate).on('value', snapshot => {

                        // console.log(snapshot.val());
                        let postArray = snapshot.val();
                        // console.log(postArray[dataValNum]);

                        // var id = keys[i];
                        var current_Object = postArray[dataValNum];
                        var currect_num = current_Object.totalCash;
                        var type_num = current_Object.type;
                        var date_num = current_Object.date;
                        var st_num = current_Object.status;
                        var way_num = current_Object.wayPay;
                        var title_num = current_Object.title;


                        if (lowCashVal !== "" && highCashVal === "") {
                            // console.log(currectnum, lowCashVal);
                            if (currect_num < lowCashVal) {
                                // console.log("סכום מתחת");
                                addToSearchBox(title_num, date_num, st_num, currect_num, way_num);
                            }

                        } else if (lowCashVal === "" && highCashVal !== "") {
                            if (currect_num > highCashVal) {
                                // console.log("סכום מעל");
                                addToSearchBox(title_num, date_num, st_num, currect_num, way_num);
                            }

                        } else if (lowCashVal !== "" && highCashVal !== "") {
                            if (currect_num > highCashVal && currect_num > highCashVal) {
                                // console.log("סכום מעל ומתחת");
                                addToSearchBox(title_num, date_num, st_num, currect_num, way_num);
                            }


                        } else if (lowCashVal === "" && highCashVal === "") {
                            addToSearchBox(title_num, date_num, st_num, currect_num, way_num);
                            obg.push(current_Object);
                        }




                    });
                }


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

                // console.log(dateVal, highCashVal, lowCashVal, textSearchVal);
            })





        }

        SEARCH_PAGE_GET();

        document.addEventListener('click', (e) => {


            var iHomeMenu = document.getElementById("iHomeMenu");
            var iTableView = document.getElementById("iTableView");
            var iSetting = document.getElementById("iSetting");


            var page = e.target.id;
            if (page == 'HomeRow' || page == 'Home_Menu' || page == 'iHomeMenu') {
                settingPage.style.display = 'none';
                HOME_PAGE_GET_DATA_FOR_WEEKLY()
                // iHomeMenu.style.color = "#000";
                tablePage.style.display = 'none';
                homePage.style.display = 'block';

                Home_Menu.classList.remove("text-white");
                Home_Menu.classList.add("text-info");

                Tableview_Menu.classList.remove("text-info");
                Tableview_Menu.classList.add("text-white");

                SettingTitle.classList.remove("text-info");
                SettingTitle.classList.add("text-white");




                iHomeMenu.classList.remove("text-white");
                iHomeMenu.classList.add("text-info");

                iTableView.classList.remove("text-info");
                iTableView.classList.add("text-white");

                iSetting.classList.remove("text-info");
                iSetting.classList.add("text-white");

                HomeRow.style.background = " rgb(24, 24, 24)";
                TableRow.style.background = "none";
                SettingRow.style.background = "none";
            } else if (page == 'TableRow' || page == 'Tableview_Menu' || page == 'iTableView') {
                TABLE_PAGE_GET_DATA();

                settingPage.style.display = 'none';
                homePage.style.display = 'none';
                tablePage.style.display = 'block';
                HomeRow.style.background = "none";
                TableRow.style.background = " rgb(24, 24, 24) ";
                SettingRow.style.background = "none";

                Tableview_Menu.classList.remove("text-white");
                Tableview_Menu.classList.add("text-info");

                Home_Menu.classList.remove("text-info");
                Home_Menu.classList.add("text-white");

                SettingTitle.classList.remove("text-info");
                SettingTitle.classList.add("text-white");




                iHomeMenu.classList.remove("text-info");
                iHomeMenu.classList.add("text-white");

                iTableView.classList.remove("text-white");
                iTableView.classList.add("text-info");

                iSetting.classList.remove("text-info");
                iSetting.classList.add("text-white");

            } else if (page == 'SettingRow' || page == 'SettingMenu' || page == 'iSetting') {


                settingPage.style.display = 'block';

                homePage.style.display = 'none';
                tablePage.style.display = 'none';
                HomeRow.style.background = "none";
                TableRow.style.background = "none";
                SettingRow.style.background = " rgb(24, 24, 24) ";

                SettingTitle.classList.remove("text-white");
                SettingTitle.classList.add("text-info");

                Home_Menu.classList.remove("text-info");
                Home_Menu.classList.add("text-white");

                Tableview_Menu.classList.remove("text-info");
                Tableview_Menu.classList.add("text-white");



                iHomeMenu.classList.remove("text-info");
                iHomeMenu.classList.add("text-white");

                iTableView.classList.remove("text-info");
                iTableView.classList.add("text-white");

                iSetting.classList.remove("text-white");
                iSetting.classList.add("text-info");

            } else if (page == 'logOut') {


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

            if (page == 'changeToPlan') {
                var changeToPlan = document.getElementById("changeToPlan");

                var arrtibute = changeToPlan.getAttribute("class");
                var check = changeToPlan.style;
                // console.log(arrtibute);
                if (arrtibute == 'uncheck') {
                    changeToPlan.setAttribute("class", 'check');
                    // mainTable.innerHTML = "";
                    TABLE_PAGE_GET_DATA();

                    // TABLE_PAGE_GET_DATA();

                    // console.log('uncheck tuen to check');
                } else if (arrtibute == 'check') {
                    changeToPlan.setAttribute("class", 'uncheck');
                    // console.log('check tuen to uncheck');
                    // mainTable.innerHTML = "";
                    TABLE_PAGE_GET_DATA();
                    // TABLE_PAGE_GET_DATA();

                }
            }

            if (page == 'monthlyChart') {
                HOME_PAGE_GET_DATA_FOR_WEEKLY();
            } else if (page == 'weeklyChart') {
                HOME_PAGE_GET_DATA_FOR_WEEKLY();

            }
        });
        var settingform = document.getElementById("settingform");
        settingform.addEventListener('submit', (e) => {
            e.preventDefault();
            var startYear = document.getElementById("startYear");
            var bankLine = document.getElementById("bankLine");
            var creditLine = document.getElementById("creditLine");
            var dateexpend = document.getElementById("imporatntDate").value;

            var dateExpend = FormatDate(dateexpend)
            // console.log(dateExpend);
            var status_Start = startYear.value;
            var credit_Line = creditLine.value;
            var credit_Bank = bankLine.value;
            var date_Expend = dateExpend;

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

        loanForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // var style_flagloan = flagloan.style.color;
            var st = false;

            // if (style_flagloan == "") {
            //     st = false;
            // } else if (style_flagloan == "#ff3d67" || style_flagloan == "rgb(255, 61, 103)") {
            //     st = true;
            // }

            var infoLoanVal = infoLoan.value;
            var bankTypeVal = bankType.value;
            var CashLoanVal = "-" + CashLoan.value;
            var totalYearVal = totalYear.value;
            var startLoanVal = startLoan.value;
            var start_Loan = FormatDate(startLoanVal);
            var splitDate = start_Loan.toString().split(" ");
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
                startdate: start_Loan,
                totalCash: CashLoanVal,
                monthlyPay: fixSum

            }

            newu['/Users/' + user.uid + '/loan/' + newP] = pos;
            firebase.database().ref().update(newu);

            for (var x in month) {
                // console.log(x, month);
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

            // var style_flag = flag.style.color;
            var st = false;

            // if (style_flag == "") {
            //     st = false;
            // } else if (style_flag == "#50dd50" || style_flag == "rgb(80, 221, 80)") {
            //     st = true;
            // }

            // console.log(st);
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
            var date_fornmat = FormatDate(dateCashIN);
            var totalCashIN = totalcash.value;

            addDb("in", infoCashIN, TypeCashIN, date_fornmat, totalCashIN, typePayment, type_Way_Pay, st);
        });

        outcomingForm.addEventListener('submit', (e) => {

            e.preventDefault();
            aotucomplete();
            var st = false;
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


            var infoCashOUT = infoOut.value; //info
            var TypeCashOUT = typeOut.value; //name
            var dateCashOUT = dateOut.value; // dateCash
            var date_fornmat_out = FormatDate(dateCashOUT);
            var monthFormat = date_fornmat_out.split(" ")[0];


            var totalCashOUT = '-' + totalOut.value;
            // database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').on('value', snapshot => {

            //     let postArray = snapshot.val();
            //     let keys = Object.keys(postArray);
            //     var x = 0;
            //     for (var i = 0; i < keys.length; i++) {

            //         var currentObject = postArray[keys[i]];
            //         var date = currentObject.date
            //         var split = date.split(" ");
            //         var month = split[0];
            //         var year = split[2];
            //         var dataDate = Date.parse(date);
            //         var timedate = new Date();
            //         var timeNum = Date.parse(timedate);
            //         database.ref('/Users/' + user.uid + '/setting/firstSetting/').once('value').then(snapshot => {
            //             importDate = snapshot.val().cuurentCash;
            //         });
            //         var day = importDate.split(" ")[1].split(",")[0];
            //         var year = importDate.split(" ")[2];
            //         var month = correctMonth;

            //         var newCorrectDate = createDates(month, day, year);
            //         var corDateNum = Date.parse(newCorrectDate);
            //         if (currentObject.wayPay == "כרטיס - הורדה") {
            //             var totalCard = currentObject.totalCash + totalCashOUT;
            //             firebase.database().ref().child('Users').child(user.uid).child('cashflow').child(dataDate).update({
            //                 totalCash: newArrayCash.totalCash,
            //             });


            //         } else if (currentObject.wayPay !== "כרטיס - הורדה") {
            //             // let newPostKeyA = firebase.database().ref().child('Users').child(user.uid).child('cashflow').child(dataDate).push().key;
            //             let newupdate = {};
            //             let postdataD = {

            //                 title: "כרטיס-אשראי",
            //                 date: dataDate,
            //                 totalCash: totalCashOUT,
            //                 type: 'out',
            //                 after: false,
            //                 time: timedate,
            //                 numTime: timeNum,
            //                 wayPay: "כרטיס - הורדה",
            //                 status: 'חד פעמי'
            //             }

            //             newupdate['/Users/' + user.uid + '/cashflow/' + dataDate] = postdataD;
            //             firebase.database().ref().update(newupdate);
            //         }


            //     }

            // });
            if (type_Way_Pay == "כרטיס אשראי") {
                var importDate = ""

                database.ref('/Users/' + user.uid + '/setting/firstSetting/').once('value').then(snapshot => {
                    importDate = snapshot.val().importantDay;
                    var day = importDate.split(" ")[1].split(",")[0]; // 10
                    // var importantDateNum = Date.parse(importDate);
                    var yearVal = date_fornmat_out.split(" ")[2]; // year value
                    var dayVal = date_fornmat_out.split(" ")[1].split(",")[0]; // day value
                    var monthVal = monthFormat; // month value
                    var correctDate = "";
                    if (dayVal < 10) {
                        correctDate = createDates(monthVal, day, yearVal);
                    } else if (dayVal >= 10) {

                        var indexMonth = labelx.indexOf(monthVal);
                        console.log(indexMonth);
                        var nextMonth = Number(indexMonth) + 1;
                        var cormonth = labelx[nextMonth];
                        console.log(cormonth, day, yearVal);
                        correctDate = createDates(cormonth, day, yearVal);

                    }

                    console.log(correctDate);
                    addDb("out", infoCashOUT, TypeCashOUT, correctDate, totalCashOUT, typePaymentout, 'כרטיס אשראי הורדה', st);

                });


                // var newCorrectDate = createDates(month, day, year);
                // var corDateNum = Date.parse(newCorrectDate);
                // addDb("out", infoCashOUT, TypeCashOUT, newCorrectDate, totalCashOUT, typePaymentout, type_Way_Pay, st);



                //     let newPostKeyA = firebase.database().ref().child('Users').child(user.uid).child('card').child(corDateNum).push().key;
                // let newupdate = {};
                // let postdataD = {

                //     title:
                //         date:
                //     totalCash:
                //         type:
                //     after:
                //         time:
                //     numTime:
                //         wayPay:
                //     status: 
                // }

                // newupdate['/Users/' + user.uid + '/cashflow/' + dateCashNum + '/chashFlow/' + newPostKeyA] = postdataD;
                // firebase.database().ref().update(newupdate);

            }
            addDb("out", infoCashOUT, TypeCashOUT, date_fornmat_out, totalCashOUT, typePaymentout, type_Way_Pay, st);

            // TABLE_PAGE_GET_DATA();
            // HOME_PAGE_GET_DATA_FOR_WEEKLY();
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
                var container_Loan = document.createElement('div');
                let spanleft = document.createElement('span');
                let leftPrograss = document.createElement('span');
                let rightPrograss = document.createElement('span');
                let spanright = document.createElement('span');
                let prograssValue = document.createElement('div');
                let left = document.createElement('div');
                let center = document.createElement('div');
                let right = document.createElement('div');

                let boxinfo = document.createElement("div");

                let prograssbox = document.createElement('div');

                let title_loan = document.createElement('h6');
                let lTitle = document.createElement('h6');
                let RTitle = document.createElement('h6');
                let CTitle = document.createElement('h6');
                let lSpan = document.createElement('p');
                let RSpan = document.createElement('p');
                let CSpan = document.createElement('p');

                lTitle.setAttribute("id", "titleProgreesLeftcash");
                RTitle.setAttribute("id", "titleProgreescash");
                CTitle.setAttribute("id", "monthleft");
                lSpan.setAttribute("id", "totalMonthLoan");
                RSpan.setAttribute("id", "totalCashLoan");
                CSpan.setAttribute("id", "totalMonthLoan");
                prograssbox.setAttribute("class", "progress blue");
                prograssbox.style.height = "150px";

                container.setAttribute("class", "col-6 px-2 py-2");
                container_Loan.setAttribute("class", "container card border-0 cd shadow-sm");

                spanleft.setAttribute("class", "progress-left");
                spanright.setAttribute("class", "progress-right");
                prograssValue.setAttribute("class", "progress-value");
                // prograssValue.setAttribute("id", "progress-right");

                rightPrograss.setAttribute("class", "progress-bar");
                leftPrograss.setAttribute("class", "progress-bar");
                boxinfo.setAttribute("class", "row mx-0 my-0 pt-3");
                left.setAttribute("class", "col-4 text-center");
                center.setAttribute("class", "col-4 text-center");
                right.setAttribute("class", "col-4 text-center");

                title_loan.setAttribute("class", "text-center mx-0 mt-3 pb-3");
                title_loan.setAttribute("id", "titleProgreesLeftcash");

                //set value
                title_loan.textContent = " הלוואה " + snap[0];
                prograssValue.textContent = Math.abs(fixprecent) + "%";
                // prograssValue.style.width = Math.abs(fixprecent) + "%";

                var num = Math.abs(fixprecent);

                var numString = num.toString().split("")[0];
                if (Math.abs(fixprecent) < 50) {
                    rightPrograss.style.animation = "loading-" + numString + " 1.5s linear forwards 1.8s"
                    leftPrograss.style.animation = "loading-0 1.5s linear forwards 1.8s"
                } else {
                    leftPrograss.style.animation = "loading-2 1.5s linear forwards 3.3s"
                    rightPrograss.style.animation = "loading-" + numString + " 1.5s linear forwards 1.8s"
                }

                lTitle.textContent = "נשאר לתשלום";
                lSpan.textContent = left_pay;
                CTitle.textContent = ' חודשים ' + snap[2];
                CSpan.textContent = "מתוך - " + total_month;
                RTitle.textContent = " שולם " + payuntilToday;
                RSpan.textContent = "מתוך - " + Number(snap[4]);

                spanleft.appendChild(leftPrograss);
                spanright.appendChild(rightPrograss);
                prograssbox.appendChild(spanleft);
                prograssbox.appendChild(spanright);
                prograssbox.appendChild(prograssValue);
                right.appendChild(RTitle);
                right.appendChild(RSpan);
                center.appendChild(CTitle);
                center.appendChild(CSpan);
                left.appendChild(lTitle);
                left.appendChild(lSpan);
                boxinfo.appendChild(right);
                boxinfo.appendChild(center);
                boxinfo.appendChild(left);
                container_Loan.appendChild(title_loan);
                container_Loan.appendChild(prograssbox);
                container_Loan.appendChild(boxinfo);
                container.appendChild(container_Loan);
                containerLoan.appendChild(container);
            });


        });
        setPhotoUser();
        saveNewWord();
        // TABLE_PAGE_GET_DATA();
        HOME_PAGE_GET_DATA_FOR_WEEKLY();
        HOME_PAGE_GET_DATA_FOR_CALNDER();
        // charttype();
        // chartTypeChart

        async function chartTypeChart(d) {
            var inarr = [];
            var out = [];
            var title = [];
            console.log(d);
            d.forEach(x => {

                inarr.push(Math.abs(x[1]));
                // out.push(Math.abs(x[2]));
                title.push(x[0]);

            })
            console.log(inarr, title);

            var ctxType = document.getElementById('chartTypeTable').getContext("2d");


            function colorAray(inarr) {
                var newARRAY = [];

                inarr.forEach(x => {
                    // var newval = Math.abs(x);
                    console.log(x);

                    if (x < 500 && 0 < x) {
                        newARRAY.push('#ffb6c6');

                    } else if (1000 > x && x > 500) {
                        newARRAY.push('#ff8ea6');
                    } else if (1500 > x && x > 1000) {
                        newARRAY.push('#ff6184');
                    } else if (x > 1500 && 2500 > x) {
                        newARRAY.push('#ff3c66');
                    } else if (x > 2000) {
                        newARRAY.push('#ff1648');
                    }
                })
                console.log(newARRAY);
                return newARRAY
            }
            var colorarray = colorAray(inarr);
            console.log(colorarray);
            var labelsnew = ["מעל 500", "מעל 1000", "מעל 1500", "מעל 2000", " מעל 2500"]
            data = {
                labels: title,

                datasets: [{
                    label: title,
                    data: inarr,
                    fill: true,
                    // fontColor: function (inarr) {
                    //     var index = inarr.dataIndex;
                    //     var value = inarr.dataset.data[index];
                    //     console.log(value);
                    //     return value < 500 ? '#50dd50' :  // draw negative values in red
                    //         value < 1000 ? '#17a2b8' :
                    //             value < 1500 ? '#ff643d' :
                    //                 value < 3000 ? '#ff3d67' :
                    //                     index % 2 ? '#ff1648' :    // else, alternate values in blue and green
                    //                         'green';
                    //     // else, alternate values in blue and green


                    // },
                    backgroundColor: colorarray
                    // function (inarr) {
                    //     var index = inarr.dataIndex;
                    //     var value = inarr.dataset.data[index];
                    //     console.log(value);
                    //     return value < 500 ? '#ffb6c6' :  // draw negative values in red
                    //         value < 1000 ? '#ff8ea6' :
                    //             value < 1500 ? '#ff6184' :
                    //                 value < 3000 ? '#ff3c66' :
                    //                     index % 2 ? '#ff1648' :    // else, alternate values in blue and green
                    //                         'green';
                    //     // else, alternate values in blue and green


                    // },

                }],

                // These labels appear in the legend and in the tooltips when hovering different arcs
            };

            // if (window.bar != undefined) {
            //     window.bar.destroy();
            // }
            if (window.doughnut != undefined) {
                window.doughnut.destroy();
            }
            window.doughnut = new Chart(ctxType, {
                type: 'pie',
                data: data,
                options: {
                    legend: {
                        // display: true,
                        labels: {
                            text: labelsnew,
                            fontSize: 12,

                            display: true,



                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    tooltips: {

                        bodyFontSize: 18,
                        title: 'nearest'


                    }
                    // scales: {
                    //     yAxes: [{
                    //         ticks: {
                    //             min: 0,
                    //             max: 20000,
                    //             // stepSize: 20,
                    //         }
                    //     }]
                    // },
                    // "animation": {
                    //     "duration": 1
                    //     // "onComplete": function () {
                    //     //     var chartInstance = this.chart,
                    //     //         ctx = chartInstance.ctxType;

                    //     //     ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                    //     //     ctx.display = 'inline';
                    //     //     ctx.textBaseline = 'bottom';

                    //     //     this.data.datasets.forEach(function (dataset, i) {
                    //     //         var meta = chartInstance.controller.getDatasetMeta(i);
                    //     //         meta.data.forEach(function (bar, index) {
                    //     //             var data = dataset.data[index];
                    //     //             ctx.fillText(data, bar._model.x, bar._model.y - 5);
                    //     //         });
                    //     //     });
                    //     // }
                    // },
                    // "vAxis": { viewWindow: { max: 1000 } },

                }
                // options: options
            });


            // var gradient_out_ctxType = ctxType.createLinearGradient(0, 0, 0, 400, 'repeat');
            // var gradient_in_ctxType = ctxType.createLinearGradient(0, 0, 0, 400, 'repeat');

            // gradient_out_ctxType.addColorStop(0, '#ff3d67');
            // gradient_out_ctxType.addColorStop(1, '#ff98ae');
            // gradient_in_ctxType.addColorStop(0, '#50dd50');
            // gradient_in_ctxType.addColorStop(1, '#a6fda6');


            // if (window.bar != undefined) {
            //     window.bar.destroy();
            // }

            // window.bar = new Chart(ctxType, {
            //     type: 'doughnut',
            //     data: data
            // options: {
            //     responsive: true,
            //     scales: {
            //         yAxes: [{
            //             ticks: {
            //                 min: 0,
            //                 max: 20000,
            //                 // stepSize: 20,
            //             }
            //         }]
            //     },
            //     "animation": {
            //         "duration": 1,
            //         "onComplete": function () {
            //             var chartInstance = this.chart,
            //                 ctx = chartInstance.ctx;

            //             ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
            //             ctx.display = 'inline';
            //             ctx.textBaseline = 'bottom';

            //             this.data.datasets.forEach(function (dataset, i) {
            //                 var meta = chartInstance.controller.getDatasetMeta(i);
            //                 meta.data.forEach(function (bar, index) {
            //                     var data = dataset.data[index];
            //                     ctx.fillText(data, bar._model.x, bar._model.y - 5);
            //                 });
            //             });
            //         }
            //     },
            //     // "vAxis": { viewWindow: { max: 1000 } },

            // }

            // });


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

            var gradient_in_ctxc = ctxc.createLinearGradient(0, 0, 0, 400, 'repeat');
            var gradient_out_ctxc = ctxc.createLinearGradient(0, 0, 0, 400, 'repeat');

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
                        // fill: true,
                        backgroundColor: gradient_in_ctxc,

                        borderWidth: 1

                    }, {


                        label: 'הוצאות',
                        data: out,
                        fill: true,

                        backgroundColor: gradient_out_ctxc,

                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        yAxes: [{
                            ticks: {
                                min: 0,
                                max: 20000,
                                // stepSize: 20,
                            }
                        }]
                    },
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
                    // "vAxis": { viewWindow: { max: 1000 } },

                }

            });


        }

        async function chartTable(i, o, d) {

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
                    labels: d,
                    datasets: [{
                        label: 'הכנסות',
                        data: i,
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
                        data: o,
                        fill: true,
                        backgroundColor:
                            gradient_out,
                        borderColor:
                            gradient_out

                        ,
                        borderWidth: 1
                    }]
                }, options: {
                    responsive: true
                }

            });



        }


    } else {
        console.log("dotan logout");
        homePage.innerHTML = "";
        tablePage.innerHTML = "";

    }
})
