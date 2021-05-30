var dateExpend = document.getElementById('dateexpend');
var outcomingForm = document.getElementById('outcomingForm');
var dateIncome = document.getElementById('dateIncoimg');
var typeIncoming = document.getElementById('typeIncoimg');
var totalcash = document.getElementById('totalIncoimg');
var infoOut = document.getElementById('infoOut');
var dateOut = document.getElementById('dateOut');
var typeOut = document.getElementById('typeOut');
var total_Out = document.getElementById('totalOut');
var settingForm = document.getElementById('settingForm');
var incomingForm = document.getElementById('incomingForm');
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
const mainTable = document.getElementById('mainTable');
const mainTableCard = document.getElementById('mainTableCard');
const Checkform = document.getElementById('Checkform');


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
var groupchoose = document.getElementsByName("groupchoose");
var group1 = document.getElementsByName("group1");
var group2 = document.getElementsByName("group2");
var group3 = document.getElementsByName("group3");
var group4 = document.getElementsByName("group4");

var search = document.getElementsByName("search");

var middleSetting = document.getElementsByName("middleSetting");
var LoanWords = document.getElementById("LoanWords");
var saveWords = document.getElementById("saveWords");
var outWords = document.getElementById("outWords");
var inWords = document.getElementById("inWords");


var groupSave = document.getElementsByName("groupSave");
var paymentin = document.getElementById("paymentIn");
var flowin = document.getElementById("flowIn");
var iconaddbtn = document.getElementById("iconaddbtn");
var iconminusbtn = document.getElementById("iconminusbtn");
var creditbox = document.getElementById("creditbox");
var FlowBox = document.getElementById("FlowBox");
var creditboxOut = document.getElementById("creditboxOut");
var creditboxSave = document.getElementById("creditboxSave");
var boxsave = document.getElementById("boxsave");
var infoIncoimg = document.getElementById("infoIncoimg");
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
const containerloan = document.getElementById("containerloan");
const box_Loan = document.getElementById("box_Loan");
const containerSave = document.getElementById("containerSave");
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
var saveMenu = document.getElementById('saveMenu');
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
const Card_page = document.getElementById("Card_page");

const save_loan_Page = document.getElementById("save_loan_Page");
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
const loggedOutLinks = document.querySelectorAll('.log_out');
const loggedInLinks = document.querySelectorAll('.log_in');
var addSave = document.getElementById("addSave");
const loanSave = document.getElementById("loanSave");
var titleApp = document.getElementById("titleApp");
var buttonSettingFirst = document.getElementById("buttonSettingFirst");

var startYear = document.getElementById("startYear");
var bankLine = document.getElementById("bankLine");
var creditLine = document.getElementById("creditLine");
var date_i = document.getElementById("imporatntDate");

var nameSave = document.getElementById("nameSave");
var whySave = document.getElementById("whySave");
var CashSave = document.getElementById("CashSave");
var numPaySave = document.getElementById("numPaySave");
var startSave = document.getElementById("startSave");
var xs = document.querySelectorAll(".sidebar");
var important = document.getElementById("important");
var free = document.getElementById("free");
var all = document.getElementById("all");
var autoCompout = document.getElementById("autoCompout");
var autoCompIn = document.getElementById("autoCompIn");
var laonList = document.getElementById("laonList");
var saveAutoComp = document.getElementById("saveAutoComp");
var cupunBtn = document.getElementById("payform");
var addloan = document.getElementById("addloan");
var boxSaveBtn = document.getElementById("boxSaveBtn");
var laonBoxBtn = document.getElementById("laonBoxBtn");
var searchBtnBox = document.getElementById("searchBtnBox");
var searchTool = document.getElementById("searchTool");

////////////// GO TO AUTH.JS in function //////////////////

//GET USER EMAIL


// REFEERENCE FUNCTION TO ADDAMINROLE
// const addAdminRole = functions.httpsCallable('addAdminRole');
// addAdminRole({ email: emaildata }).then(result => {
//     console.log(result);
// })



// // IN Auth.ONAUTHSTATECHANGE if(USER)

// user.getIdTokenResult().then(idTokenResult=>{
//     console.log(idTokenResult.claims);
//     user.admnin =idTokenResult.claims.admin;
// })


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

// RUN WHEN USER IN

const GETINUSER = () => {
    auth.onAuthStateChanged(user => {
        console.log(user

        );


        let boxmain = document.getElementById("boxmain");
        if (user) {

            var d = new Date();
            var dateformat = foramtDate(d);
            var m = dateformat.month;
            var mnum = month[m];
            if (mnum < 10) {
                var t = "0" + mnum;
                mnum = t;
            }
            // console.log(mnum);
            var joindate = dateformat.year + "-" + mnum + "-" + dateformat.day;
            // var dateOut = 
            // console.log(joindate);
            cupunBtn.addEventListener('submit', e => {
                e.preventDefault();
                var boxLaertFirst = document.getElementById("boxLaertFirst");
                //check if cupun right 
                console.log(user);
                var CUPUN = document.getElementById("CUPUN");
                var valueCupun = CUPUN.value;
                var check = false;
                const checkifCUPUNRIGHT = functions.httpsCallable('checkifCUPUNRIGHT');
                checkifCUPUNRIGHT({ word: valueCupun }).then(result => {
                    if (result.data == true) {
                        console.log('true');
                        console.log(result);
                        check = true;
                        const addAdminRole = functions.httpsCallable('addAdminRole');
                        addAdminRole({ email: user.email }).then(resul => {
                            console.log(resul);
                            $('#payModel').modal('hide');
                            auth.signOut();


                            setInterval(function setalert() {
                                boxLaertFirst.style.display = "block"
                            }, 2000);
                            setInterval(function removealert() {
                                boxLaertFirst.style.display = "none"

                                var containerFirstAlertAdmin = document.getElementById("containerFirstAlertAdmin")
                                containerFirstAlertAdmin.removeChild(boxLaertFirst);
                                location.reload();

                            }, 5000);



                        }).catch((err) => {
                            console.log(err);
                        })
                    } else {
                        console.log('flase');
                        console.log(result);
                    }


                }).catch(err => {
                    console.log(err);
                })
                console.log(check);
                if (check == true) {

                }


            })
            Checkform.addEventListener("submit", e => {
                e.preventDefault();
                console.log(324);
                var endDate = document.getElementById("endDate").value;
                var startDate = document.getElementById("startDate").value;
                var sumStartDate = document.getElementById("statusbank").value;
                console.log(startDate, sumStartDate, endDate);

            })

            user.getIdTokenResult().then(idTokenResult => {
                console.log(idTokenResult.claims.admin);
                if (idTokenResult.claims.admin) {
                    var payModel = document.getElementById("upgrade");
                    payModel.innerHTML = "Pro"
                    payModel.setAttribute('data-target', '#')
                    boxSaveBtn.removeAttribute("data-original-title")
                    laonBoxBtn.removeAttribute("data-original-title")

                    boxSaveBtn.setAttribute("data-original-title", "הוסף חסכון");
                    laonBoxBtn.setAttribute("data-original-title", "הוסף הלוואה");
                    searchTool.removeAttribute("data-original-title");

                    // data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?"
                } else {
                    addloan.style.color = "#9e9e9e";
                    addSave.style.color = "#9e9e9e";
                    addloan.style.background = "none";
                }
                // user.admnin = idTokenResult.claims.admin;
            })



            nameSave.addEventListener("change", e => {
                function getdataforloan() {
                    return database.ref('/Users/' + user.uid + '/saveMoney/').once('value').then(snapshot => {
                        return snapshot.val()
                    }).catch((err) => {
                        console.log(err);
                    });
                }
                getdataforloan().then((p) => {
                    var key = Object.keys(p);
                    for (var i = 0; i < key.length; i++) {
                        var obg = p[key[i]];
                        var title = obg.title;
                        // console.log(e.target.value);
                        if (title == e.target.value) {
                            numPaySave.value = obg.destination;
                            numPaySave.classList.add("is-valid")
                        }
                    }
                }).catch((err) => {
                    console.log(err);
                });


            })
            date_i.value = joindate;
            dateOut.value = joindate;
            dateIncome.value = joindate;
            startLoan.value = joindate;
            startSave.value = joindate;

            function addFirstYear() {
                database.ref('/Users/' + user.uid).on('value', function (snapshot) {

                    if (snapshot.val().cashflow === undefined) {
                        var correctdate = new Date().toString();
                        var correct_dateSplit = correctdate.split(" ");
                        var correctyear = correct_dateSplit[3];
                        var startdate = "Jan 01, " + correctyear;
                        var numdate = Date.parse(startdate);
                        let updatessettingg = {};
                        var time = new Date();
                        let updates = {};
                        let updatesm = {};
                        let postdatam = {
                            totalCash: 0
                        };

                        var start_Date = Date.parse(startdate);
                        let postdataSettingg = {
                            start: 0,
                            creditLine: 0,
                            creditBank: 0,
                            startDate: startdate,
                            cuurentCash: 0,
                            time: time
                        }
                        let postdata = {
                            title: "תחילת שנה",
                            date: startdate,
                            totalCash: 0,
                            after: 0,
                            time: "",
                            type: '',
                            wayPay: "",
                            status: ""
                        }
                        updatessettingg['/Users/' + user.uid + '/setting/' + 'firstSetting/'] = postdataSettingg;
                        firebase.database().ref().update(updatessettingg)

                        updates['/Users/' + user.uid + '/cashflow/' + start_Date] = postdata;
                        firebase.database().ref().update(updates);

                    }
                });
            }
            // console.log(1);
            addFirstYear();
            function GET_KEYWORDS_FOR_INPUTS() {
                //     var autoCompout = document.getElementById("autoCompout");
                // var autoCompIn = document.getElementById("autoCompIn");
                // var laonList = document.getElementById("laonList");
                // var saveAutoComp = document.getElementById("saveAutoComp");
                database.ref('/Users/' + user.uid + '/setting/Keywords/').on('value', snapshot => {

                    if (snapshot) {
                        var postarray = snapshot.val();
                        var keys = Object.keys(postarray);
                        var divIn = "";
                        var divOut = "";
                        var divLoan = "";
                        var divSave = "";

                        for (var i = 0; i < keys.length; i++) {
                            var data = postarray[keys[i]];
                            var subkeys = Object.keys(data);
                            for (var j = 0; j < subkeys.length; j++) {
                                var subObj = data[subkeys[j]];
                                var word = subObj.word;

                                if (keys[i] == "in") {


                                    divIn += `<option value="${word}"></option>`;

                                }
                                if (keys[i] == "out") {

                                    // var word = data.word;

                                    divOut += `<option value="${word}"></option>`;

                                }

                                if (keys[i] == "loan") {

                                    // var word = data.word;

                                    divLoan += `<option value="${word}"></option>`;

                                }

                                if (keys[i] == "save") {



                                    divSave += `<option value="${word}"></option>`;

                                }

                                autoCompIn.innerHTML = divIn;
                                autoCompout.innerHTML = divOut;
                                laonList.innerHTML = divLoan;
                                saveAutoComp.innerHTML = divSave;
                            }



                        }
                    } else {

                    }



                })

            }
            GET_KEYWORDS_FOR_INPUTS()
            loggedInLinks.forEach(item => item.style.display = 'block');
            loggedOutLinks.forEach(item => item.style.display = 'none');

            var Limit = 0;
            var Importantday = 0;
            var Limit = 0;

            database.ref('/Users/' + user.uid + '/setting/firstSetting/').once('value').then(snapshot => {
                if (snapshot.exists()) {
                    Limit = snapshot.val().cuurentCash;
                    console.log(limit.exists());
                }


            }).catch((err) => {
                console.log(err);
            });

            var Status = document.getElementById('Status');
            var num_currectStatusCash = document.getElementById('num_currectStatusCash');
            var header = document.getElementById("outHome");
            var inHome = document.getElementById("inHome");

            header.addEventListener('click', e => {
                let keys = e.target.id;
                if (keys = "cardFooter") {

                    var getstyle = document.getElementById("cardFooter");
                    var style = getstyle.style.display;
                    if (style == "none") {
                        getstyle.style.display = 'block';
                    } else if (style == "block") {
                        getstyle.style.display = 'none';

                    }
                }
            });

            inHome.addEventListener('click', e => {
                let keys = e.target.id;
                if (keys = "cardFooterin") {
                    var getstyle = document.getElementById("cardFooterin");
                    var style = getstyle.style.display;
                    if (style == "none") {
                        getstyle.style.display = 'block';
                    } else if (style == "block") {
                        getstyle.style.display = 'none';
                    }
                }
            });

            document.addEventListener('click', e => {
                let keys = e.target.id;
                if (keys == "titleflagBox" || keys == "flagBox" || keys == "statusHome" || keys == "st" || keys == "flagBox") {
                    var getstyle = document.getElementById("cardFooterinout");
                    var style = getstyle.style.display;
                    if (style == "none") {
                        getstyle.style.display = 'block';
                    } else if (style == "block") {
                        getstyle.style.display = 'none';
                    }
                }
            });


            function UPDAT_TOTAL_CASH() {
                function GETDATAFORCASH() {
                    return database.ref('/Users/' + user.uid + '/cashflow/').orderByChild("number").once('value').then(function (snap) {

                        return snap.val();
                    });

                }
                GETDATAFORCASH().then(data => {
                    console.log(data);
                    var keys = Object.keys(data);
                    for (var i = 0; i < keys.length; i++) {
                        var post = data[keys[i]];
                        var cashFlow = post.chashFlow
                        if (cashFlow) {
                            var newkeys = Object.keys(cashFlow);
                            var total = 0;
                            for (var j = 0; j < newkeys.length; j++) {
                                var subpost = cashFlow[newkeys[j]];
                                total += subpost.totalCash;
                            }
                            console.log(total);
                            firebase.database().ref().child('Users').child(user.uid).child('cashflow').child(keys[i]).update({
                                totalCash: total
                            });
                        }
                    }
                }).catch(err => {
                    console.log(err);
                })
            }

            UPDAT_TOTAL_CASH();
            var Home_Menu = document.getElementById("Home_Menu");
            var SettingTitle = document.getElementById("SettingTitle");
            var Tableview_Menu = document.getElementById("Tableview_Menu");
            var savingTitle = document.getElementById("savingTitle");
            var changeToPlan = document.getElementById("changeToPlan");
            var lever = document.getElementById("lever");
            var mainArray = [];
            var corDate = createNewDate();
            var dayCorrect = corDate.day;
            var monthCorrect = corDate.month;
            var corectYear = corDate.year;
            var num_newdate = corDate.dateInNum;
            var currectLimit = '';
            var hebMonth = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"]
            var labelx = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var labelxfull = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
            var savingRow = document.getElementById('savingRow');
            var iHomeMenu = document.getElementById("iHomeMenu");
            var iTableView = document.getElementById("iTableView");
            var iSetting = document.getElementById("iSetting");
            var isaving = document.getElementById("isaving");
            var Card_Menu = document.getElementById("Card_Menu");
            var CardMenu = document.getElementById("CardMenu");
            var iCardMenu = document.getElementById("iCardMenu");
            // var iCardMenu = document.getElementById("iCardMenu");
            var cardRow = document.getElementById("cardRow");




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

                    Card_Menu.style.display = 'block';
                    titleApp.style.display = "inline-block";
                    savingTitle.style.display = 'block';

                    sidemenupad.classList.remove("test");
                    // sidemenupad.classList.add("col-sm-2");
                    menuUserimg.style.display = 'inline-block'
                    nameUser.style.display = 'block';
                    homePage.classList.remove('col-sm-11');
                    homePage.classList.add('col-sm-10');
                    save_loan_Page.classList.remove('col-sm-11');
                    save_loan_Page.classList.add('col-sm-10');
                    tablePage.classList.remove('col-sm-11');
                    tablePage.classList.add('col-sm-10');
                    settingPage.classList.remove('col-sm-11');
                    settingPage.classList.add('col-sm-10');
                    // navbar.classList.remove('col-11');
                    // navbar.classList.add('col-10');
                    HomeMenu.classList.add('ml-7');
                    HomeMenu.style.marginLeft = '0px';
                    saveMenu.classList.add('ml-7');
                    saveMenu.style.marginLeft = '0px';
                    TableviewMenu.classList.add('ml-7');
                    CardMenu.style.marginLeft = '0px';
                    CardMenu.classList.add('ml-7');
                    TableviewMenu.style.marginLeft = '0px';
                    SettingMenu.classList.add('ml-7');
                    SettingMenu.style.marginLeft = '0px';
                    e.target.classList.remove("check");

                } else if (key == "navbar-toggler-icon") {

                    // navbar.classList.remove('col-10');
                    // navbar.classList.add('col-11');
                    Card_Menu.style.display = 'none';

                    titleApp.style.display = "none";
                    save_loan_Page.classList.remove('col-sm-10');
                    save_loan_Page.classList.add('col-sm-11');
                    Home_Menu.style.display = 'none';
                    Tableview_Menu.style.display = 'none';
                    SettingTitle.style.display = 'none';
                    menuUserimg.style.display = 'none';
                    nameUser.style.display = 'none';
                    savingTitle.style.display = 'none';

                    side_bar.classList.remove('col-sm-2');
                    side_bar.classList.add("test");
                    homePage.classList.remove('col-sm-10');
                    homePage.classList.add('col-sm-11');
                    tablePage.classList.remove('col-sm-10');
                    tablePage.classList.add('col-sm-11');
                    HomeMenu.classList.remove('ml-7');
                    // sidemenupad.classList.remove("col-sm-2");
                    sidemenupad.classList.add("test");
                    HomeMenu.style.marginLeft = '23px';
                    SettingMenu.classList.remove('ml-7');
                    SettingMenu.style.marginLeft = '23px';
                    TableviewMenu.classList.remove('ml-7');
                    TableviewMenu.style.marginLeft = '23px';
                    CardMenu.classList.remove('ml-7');
                    CardMenu.style.marginLeft = '23px';

                    saveMenu.classList.remove('ml-7');
                    saveMenu.style.marginLeft = '23px';
                    settingPage.classList.remove('col-sm-10');
                    settingPage.classList.add('col-sm-11');

                    e.target.classList.add("check");

                }
            });

            function switch_English_To_Hebrew_Month(m) {
                var index = labelx.indexOf(m);
                var month = hebMonth[index + 1];
                return month;

            }

            function switch_English_To_english_Month(m) {
                var index = hebMonth.indexOf(m);
                var month = labelx[index];
                return month;

            }
            function switch_Eng_To_Heb_Month(m) {
                var index = labelx.indexOf(m);
                var month = hebMonth[index];
                return month;
            }

            function switch_full_Eng_To_Heb_Month(m) {
                var index = labelxfull.indexOf(m);
                var month = hebMonth[index];
                return month;
            }

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
            user.getIdTokenResult().then(idTokenResult => {
                console.log(idTokenResult.claims.admin);
                // var boxSaveBtn = document.getElementById("boxSaveBtn");
                // var laonBoxBtn = document.getElementById("laonBoxBtn");
                // var searchBtnBox = document.getElementById("laonBoxBtn");



                if (idTokenResult.claims.admin) {
                    addSave.setAttribute("data-target", "#modal5")
                    addloan.setAttribute("data-target", "#modal4")

                    // addloan.setAttribute("data-target", "#modal5")

                    loanForm.addEventListener('submit', (e) => {

                        e.preventDefault();
                        var st = false;
                        var core_Date = createNewDate();
                        var month__Today = core_Date.month;
                        var year__Today = core_Date.year;
                        var infoLoanVal = infoLoan.value; // title
                        var bankTypeVal = bankType.value;// bank
                        var CashLoanVal = "-" + CashLoan.value;// cashloan
                        var totalYearVal = totalYear.value;// sum year
                        var startLoanVal = startLoan.value;// date start value
                        var start_Loan = FormatDate(startLoanVal); // date start format
                        var sumPay = 0;
                        var countMOnth = totalYearVal * 12;// sum month
                        var monthPay = 0;
                        var sum = CashLoanVal / countMOnth; // cash per month
                        var fixSum = sum.toFixed(0); //cash per month
                        var splitDate = start_Loan.split(" ");// date start split
                        var monthb = splitDate[0];// date start month
                        var day = splitDate[1];// date start day
                        var year = splitDate[2];// date start year

                        if (bankTypeVal == "") {
                            bankType.classList.remove("is-valid");
                            bankType.classList.add("is-invalid");
                        } else {
                            bankType.classList.remove("is-invalid");
                            bankType.classList.add("is-valid");
                        }
                        if (infoLoanVal == "") {
                            infoLoan.classList.remove("is-valid");
                            infoLoan.classList.add("is-invalid");
                        } else {
                            infoLoan.classList.remove("is-invalid");
                            infoLoan.classList.add("is-valid");
                        }
                        if (CashLoan.value == "" || CashLoan.value == 0) {
                            CashLoan.classList.remove("is-valid");
                            CashLoan.classList.add("is-invalid");
                        } else {
                            CashLoan.classList.remove("is-invalid");
                            CashLoan.classList.add("is-valid");
                        }
                        if (totalYearVal == "" || totalYearVal == 0) {
                            totalYear.classList.remove("is-valid");
                            totalYear.classList.add("is-invalid");
                        } else {
                            totalYear.classList.remove("is-invalid");
                            totalYear.classList.add("is-valid");
                        }

                        if (startLoanVal == "") {
                            startLoan.classList.remove("is-valid");
                            startLoan.classList.add("is-invalid");
                        } else {
                            startLoan.classList.remove("is-invalid");
                            startLoan.classList.add("is-valid");
                        }

                        if (totalYearVal !== "" && CashLoan.value !== "" && bankTypeVal !== "" && startLoanVal !== "" && totalYearVal !== 0 && CashLoan.value !== 0) {
                            let newP = firebase.database().ref().child('Users').child(user.uid).child('loan').push().key;
                            let newu = {};
                            let pos = {
                                title: bankTypeVal,
                                info: infoLoanVal,
                                numYear: totalYearVal,
                                startdate: start_Loan,
                                totalCash: CashLoanVal,
                                monthlyPay: fixSum,
                                totalMonth: countMOnth,
                                monthLeft: 0,
                                monthPass: 0,
                                cashPaid: 0,
                                cashLeft: 0
                            }

                            newu['/Users/' + user.uid + '/loan/' + newP] = pos;
                            firebase.database().ref().update(newu);
                            var loandate = "Jan" + " " + day + " " + corectYear;
                            var type_Way_Pay_laon = "הלוואה";
                            var title = bankTypeVal;

                            if (year == year__Today) {
                                addDb("out", infoLoanVal, title, start_Loan, fixSum, 'paymentloan', type_Way_Pay_laon, 'true');
                                addDb("in", infoLoanVal, title, start_Loan, Math.abs(CashLoanVal), 'once', type_Way_Pay_laon, 'false');
                            } else {
                                addDb("out", infoLoanVal, title, loandate, fixSum, 'yearly', type_Way_Pay_laon, 'true');
                            }
                            SAVEWORD(infoLoanVal, "loan");

                        }

                        console.log(xs[1]);
                        xs.forEach((x) => {

                            var row = x.children[0].children[0].children[0];
                            var arttibute = row.classList[1];

                            if (arttibute == "text-info") {
                                var page = x.children[0].children[0].children[1].innerHTML;

                                if (page == 'דוחות') {
                                    TABLE_PAGE_GET_DATA();
                                    console.log('דוחות');

                                } else {
                                    console.log('דף הבחית');
                                    HOME_PAGE_GET_DATA_FOR_WEEKLY();

                                }
                            }
                        });
                        // SAVE_AUTO_WORD(infoLoanVal, "loan");

                    });

                    loanSave.addEventListener('submit', (e) => {

                        e.preventDefault();
                        var name_Save = nameSave.value; // nam_save
                        var why_Save = whySave.value; // reason save
                        var Cash_Save = "-" + CashSave.value; // cash
                        var start_Save = startSave.value;
                        var num_Pay_Save = numPaySave.value; // destination
                        var start_Save_format = FormatDate(start_Save);
                        var type_Way_Pay = "";
                        var title = "";
                        var sum = 0;
                        var des = 0;


                        var key = "";

                        var nametrim = name_Save.trim();

                        // console.log(1);



                        // title = title.trim();

                        groupSave.forEach(function (y) {
                            if (y.checked) {
                                var W = y.id;
                                // console.log(W);
                                return type_Way_Pay = W;
                            }
                        });


                        if (why_Save == "") {
                            whySave.classList.remove("is-valid");
                            whySave.classList.add("is-invalid");
                        } else {
                            whySave.classList.remove("is-invalid");
                            whySave.classList.add("is-valid");
                        }
                        if (name_Save == "") {
                            nameSave.classList.remove("is-valid");
                            nameSave.classList.add("is-invalid");
                        } else {
                            nameSave.classList.remove("is-invalid");
                            nameSave.classList.add("is-valid");
                        }
                        if (CashSave.value == "" || CashSave.value == 0) {
                            CashSave.classList.remove("is-valid");
                            CashSave.classList.add("is-invalid");
                        } else {
                            CashSave.classList.remove("is-invalid");
                            CashSave.classList.add("is-valid");
                        }
                        if (num_Pay_Save == "" || num_Pay_Save == 0) {
                            numPaySave.classList.remove("is-valid");
                            numPaySave.classList.add("is-invalid");
                        } else {
                            numPaySave.classList.remove("is-invalid");
                            numPaySave.classList.add("is-valid");
                        }

                        database.ref('/Users/' + user.uid + '/saveMoney/').on('value', function (snap) {
                            if (snap) {
                                let postArr = snap.val();
                                let keysArr = Object.keys(postArr);
                                var arr = [];

                                for (var i = 0; i < keysArr.length; i++) {

                                    var uid = keysArr[i];
                                    let til = postArr[uid].title;

                                    if (nametrim == til.trim()) {
                                        title = postArr[uid].title;
                                        sum = postArr[uid].totalCash;
                                        des = postArr[uid].destination;

                                        key = uid;
                                        console.log(key);
                                    }
                                }
                            } else {
                                console.log('empty')
                            }

                        });

                        if (num_Pay_Save !== "" && CashSave.value !== "" && name_Save !== "" && why_Save !== "" && CashSave.value !== 0 && num_Pay_Save !== 0) {

                            addDb("out", why_Save, name_Save, start_Save_format, Cash_Save, type_Way_Pay, 'חסכון', 'false');

                            SAVEWORD(name_Save, "save");
                            console.log(title, nametrim);
                            if (title !== nametrim) {
                                let new_P = firebase.database().ref().child('Users').child(user.uid).child('saveMoney').push().key;
                                let new_u = {};
                                let po_s = {
                                    title: name_Save,
                                    info: why_Save,
                                    startdate: start_Save_format,
                                    totalCash: 0,
                                    destination: num_Pay_Save
                                }
                                new_u['/Users/' + user.uid + '/saveMoney/' + new_P] = po_s;
                                firebase.database().ref().update(new_u);

                            } else if (title == nametrim) {
                                console.log(title, nametrim);
                                console.log(Math.abs(num_Pay_Save), Math.abs(des));

                                if (Math.abs(num_Pay_Save) > Math.abs(des)) {
                                    console.log(key);
                                    console.log(Math.abs(num_Pay_Save), Math.abs(des), key);

                                    firebase.database().ref().child('Users').child(user.uid).child('saveMoney').child(key).update({
                                        destination: num_Pay_Save

                                    });
                                }
                            }
                            xs.forEach((x) => {

                                var row = x.children[0].children[0].children[0];
                                var arttibute = row.classList[1];

                                if (arttibute == "text-info") {
                                    var page = x.children[0].children[0].children[1].innerHTML;
                                    console.log(page);
                                    if (page == 'דוחות') {
                                        TABLE_PAGE_GET_DATA();
                                    } else if (page == "חסכונות והלוואות") {
                                        UPDATESAVE();

                                        SAVING_GET_DATA();
                                        // UPDATESAVE();
                                        // boxsave.innerHTML = "";e
                                        console.log("gg");
                                    } else {
                                        console.log('e');
                                        // GETDATAFORCASH();
                                        UPDATESAVE();

                                        SAVE_GET_DATA_HOME();
                                        HOME_PAGE_GET_DATA_FOR_WEEKLY();

                                    }
                                    UPDAT_TOTAL_CASH();

                                }
                            });

                        }



                    })

                    function SEARCH_PAGE_GET() {

                        var textSearch = document.getElementById("nameSearch");
                        var lowCash = document.getElementById("lowSearch");
                        var highCash = document.getElementById("highSearch");
                        var date = document.getElementById("dateSearch");
                        var typeCashSearch = document.getElementById("typeCashSearch");

                        SearchForm.addEventListener("submit", e => {
                            e.preventDefault();
                            tableData.innerHTML = "";
                            var dateVal = date.value; // date
                            var newdate = FormatDate(dateVal);
                            console.log(newdate.toString());
                            var dataValNum = Date.parse(newdate.toString());
                            console.log(dataValNum);
                            var highCashVal = highCash.value; //highcash
                            var lowCashVal = lowCash.value;//low cash
                            var textSearchVal = textSearch.value;//name
                            var typeCash_Search = typeCashSearch.value;//type

                            console.log();

                            // var typeCashVal = typeCashSearch.value; // type cash
                            var typePayment = "";

                            search.forEach(x => {
                                var key = x.checked;
                                if (key) {
                                    return typePayment = x.id
                                }
                            })

                            console.log(typePayment);
                            function getdataforSearch() {
                                return database.ref('/Users/' + user.uid + '/cashflow/').orderByChild("number").once('value').then(snapshot => {
                                    var array = [];
                                    var snap = snapshot.val();
                                    var id = [];


                                    if (snap) {
                                        var keys = Object.keys(snap);
                                        for (var i = 0; i < keys.length; i++) {
                                            var arr = snap[keys[i]];
                                            var cashflow = snap[keys[i]].chashFlow;
                                            uid = keys[i];
                                            if (cashflow) {
                                                // add to array
                                                var newKeys = Object.keys(cashflow);
                                                for (var j = 0; j < newKeys.length; j++) {
                                                    var postArrySub = cashflow[newKeys[j]];
                                                    array.push(postArrySub);
                                                    id.push(uid);

                                                }
                                            } else {
                                                // add to array
                                                array.push(arr);
                                                id.push(uid);


                                            }

                                        }
                                    } else {
                                        console.log("empty")
                                    }
                                    return {
                                        array: array,
                                        id: id
                                    }



                                });
                            }


                            getdataforSearch().then(x => {
                                // console.log(x);
                                var KEYS = Object.keys(x.array);
                                var KEYSid = Object.keys(x.id);

                                var newArrayFinal = [];

                                console.log(dateVal, dateVal, textSearchVal, lowCashVal, highCashVal);





                                for (var i = 0; i < KEYS.length; i++) {
                                    var doc = x.array[KEYS[i]];
                                    var newid = x.id[KEYSid[i]];
                                    console.log(newid);
                                    console.log(x.array);
                                    function checkSearch() {
                                        // console.log(Number(dataValNum) === Number(newid), Number(dataValNum), Number(newid));

                                        if (dateVal !== "" && typeCash_Search == "" && textSearchVal == "" && lowCashVal == "" && highCashVal == "") {
                                            // console.log(lowCashVal, Math.abs(doc.totalCash), lowCashVal > Math.abs(doc.totalCash));
                                            // console.log(Number(dataValNum) === Number(newid), Number(dataValNum), Number(x[0]));

                                            if (newid == Number(dataValNum)) {
                                                console.log(Number(dataValNum) === Number(newid), Number(dataValNum), newid);

                                                newArrayFinal.push(doc)
                                            }

                                        } else if (dateVal !== "" && typeCash_Search !== "" && textSearchVal == "" && lowCashVal == "" && highCashVal == "") {
                                            console.log(typeCash_Search);
                                            if (newid == dataValNum && doc.wayPay == typeCash_Search) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (dateVal !== "" && typeCash_Search !== "" && textSearchVal !== "" && lowCashVal == "" && highCashVal == "") {
                                            if (newid == dataValNum && doc.wayPay == typeCash_Search && textSearchVal == doc.title) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (dateVal !== "" && typeCash_Search !== "" && textSearchVal !== "" && lowCashVal !== "" && highCashVal == "") {
                                            if (newid == dataValNum && doc.wayPay == typeCash_Search && textSearchVal == doc.title && lowCashVal > Math.abs(doc.totalCash)) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (dateVal !== "" && typeCash_Search !== "" && textSearchVal !== "" && lowCashVal !== '' && highCashVal !== "") {
                                            if (newid == dataValNum && doc.wayPay == typeCash_Search && textSearchVal == doc.title && lowCashVal > Math.abs(doc.totalCash) && highCashVal < Math.abs(doc.totalCash)) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (dateVal !== "" && typeCash_Search !== "" && textSearchVal == "" && lowCashVal == "" && highCashVal == "") {
                                            console.log(typeCash_Search);
                                            if (newid == dataValNum && doc.wayPay == typeCash_Search) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (dateVal !== "" && typeCash_Search !== "" && textSearchVal == "" && lowCashVal !== "" && highCashVal == "") {
                                            if (newid == dataValNum && doc.wayPay == typeCash_Search && Number(lowCashVal) > Math.abs(doc.totalCash)) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (dateVal !== "" && typeCash_Search !== "" && textSearchVal == "" && lowCashVal !== "" && highCashVal !== "") {
                                            if (newid == dataValNum && doc.wayPay == typeCash_Search && textSearchVal == doc.title && lowCashVal > Math.abs(doc.totalCash) && highCashVal < Math.abs(doc.totalCash)) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (dateVal !== "" && typeCash_Search !== "" && textSearchVal == "" && lowCashVal == '' && highCashVal !== "") {
                                            if (newid == dataValNum && doc.wayPay == typeCash_Search && textSearchVal == doc.title && highCashVal < Math.abs(doc.totalCash)) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (dateVal !== "" && typeCash_Search == "" && textSearchVal !== "" && lowCashVal == "" && highCashVal == "") {
                                            console.log(typeCash_Search);
                                            if (newid == dataValNum && doc.title == textSearchVal) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (dateVal !== "" && typeCash_Search == "" && textSearchVal !== "" && lowCashVal !== "" && highCashVal == "") {
                                            if (newid == dataValNum && textSearchVal == doc.title && Number(lowCashVal) > Math.abs(doc.totalCash)) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (dateVal !== "" && typeCash_Search == "" && textSearchVal !== "" && lowCashVal !== "" && highCashVal !== "") {
                                            if (newid == dataValNum && textSearchVal == doc.title && lowCashVal > Math.abs(doc.totalCash) && highCashVal < Math.abs(doc.totalCash)) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (dateVal !== "" && typeCash_Search == "" && textSearchVal !== "" && lowCashVal == '' && highCashVal !== "") {
                                            if (newid == dataValNum && textSearchVal == doc.title && highCashVal < Math.abs(doc.totalCash)) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (dateVal !== "" && typeCash_Search == "" && textSearchVal == "" && lowCashVal == '' && highCashVal !== "") {
                                            if (newid == dataValNum && highCashVal < Math.abs(doc.totalCash)) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (dateVal !== "" && typeCash_Search == "" && textSearchVal == "" && lowCashVal !== '' && highCashVal !== "") {
                                            if (newid == dataValNum && Number(lowCashVal) > Math.abs(doc.totalCash) && Number(highCashVal) < Math.abs(doc.totalCash)) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (dateVal !== "" && typeCash_Search == "" && textSearchVal == "" && lowCashVal == '' && highCashVal !== "") {
                                            if (newid == dataValNum && highCashVal < Math.abs(doc.totalCash)) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (typeCash_Search !== "" && textSearchVal == "" && lowCashVal == "" && highCashVal == "") {
                                            console.log(typeCash_Search);
                                            if (doc.wayPay == typeCash_Search) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (typeCash_Search !== "" && textSearchVal !== "" && lowCashVal == "" && highCashVal == "") {
                                            if (doc.wayPay == typeCash_Search && textSearchVal == doc.title) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (typeCash_Search !== "" && textSearchVal !== "" && lowCashVal !== "" && highCashVal == "") {
                                            if (doc.wayPay == typeCash_Search && textSearchVal == doc.title && lowCashVal > Math.abs(doc.totalCash)) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (typeCash_Search !== "" && textSearchVal !== "" && lowCashVal !== '' && highCashVal !== "") {
                                            if (doc.wayPay == typeCash_Search && textSearchVal == doc.title && lowCashVal > Math.abs(doc.totalCash) && highCashVal < Math.abs(doc.totalCash)) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (typeCash_Search !== "" && textSearchVal == "" && lowCashVal == "" && highCashVal == "") {
                                            console.log(typeCash_Search);
                                            if (doc.wayPay == typeCash_Search) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (typeCash_Search !== "" && textSearchVal == "" && lowCashVal !== "" && highCashVal == "") {
                                            if (doc.wayPay == typeCash_Search && lowCashVal > Math.abs(doc.totalCash)) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (typeCash_Search !== "" && textSearchVal == "" && lowCashVal !== "" && highCashVal !== "") {
                                            if (doc.wayPay == typeCash_Search && textSearchVal == doc.title && lowCashVal > Math.abs(doc.totalCash) && highCashVal < Math.abs(doc.totalCash)) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (typeCash_Search !== "" && textSearchVal == "" && lowCashVal == '' && highCashVal !== "") {
                                            if (doc.wayPay == typeCash_Search && highCashVal < Math.abs(doc.totalCash)) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (typeCash_Search == "" && textSearchVal !== "" && lowCashVal == "" && highCashVal == "") {
                                            console.log(typeCash_Search);
                                            if (doc.title == textSearchVal) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (typeCash_Search == "" && textSearchVal !== "" && lowCashVal !== "" && highCashVal == "") {
                                            if (textSearchVal == doc.title && lowCashVal > Math.abs(doc.totalCash)) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (typeCash_Search == "" && textSearchVal !== "" && lowCashVal !== "" && highCashVal !== "") {
                                            if (textSearchVal == doc.title && lowCashVal > Math.abs(doc.totalCash) && highCashVal < Math.abs(doc.totalCash)) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (typeCash_Search == "" && textSearchVal !== "" && lowCashVal == '' && highCashVal !== "") {
                                            if (textSearchVal == doc.title && highCashVal < Math.abs(doc.totalCash)) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (typeCash_Search == "" && textSearchVal == "" && lowCashVal == '' && highCashVal !== "") {
                                            if (highCashVal < Math.abs(doc.totalCash)) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (typeCash_Search == "" && textSearchVal == "" && lowCashVal !== '' && highCashVal !== "") {
                                            if (lowCashVal > Math.abs(doc.totalCash) && highCashVal < Math.abs(doc.totalCash)) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (typeCash_Search == "" && textSearchVal == "" && lowCashVal !== '' && highCashVal == "") {
                                            if (lowCashVal > Math.abs(doc.totalCash)) {
                                                newArrayFinal.push(doc)
                                            }
                                        } else if (typeCash_Search == "" && textSearchVal == "" && lowCashVal == '' && highCashVal !== "") {
                                            if (highCashVal < Math.abs(doc.totalCash)) {
                                                newArrayFinal.push(doc)
                                            }
                                        }



                                        // else if (dateVal == "" && typeCash_Search !== "" && textSearchVal == "" && lowCashVal == "" && highCashVal == "") {
                                        //     if (doc.wayPay == typeCash_Search) {
                                        //         newArrayFinal.push(doc)
                                        //     }
                                        // } else if (dateVal == "" && typeCash_Search !== "" && textSearchVal !== "" && lowCashVal == "" && highCashVal == "") {
                                        //     if (doc.wayPay == typeCash_Search && textSearchVal == doc.title) {
                                        //         newArrayFinal.push(doc)
                                        //     }
                                        // } else if (dateVal == "" && typeCash_Search !== "" && textSearchVal !== "" && lowCashVal !== "" && highCashVal == "") {
                                        //     if (doc.wayPay == typeCash_Search && textSearchVal == doc.title && lowCashVal > Math.abs(doc.totalCash)) {
                                        //         newArrayFinal.push(doc)
                                        //     }
                                        // } else if (dateVal == "" && typeCash_Search !== "" && textSearchVal !== "" && lowCashVal !== "" && highCashVal !== "") {
                                        //     if (doc.wayPay == typeCash_Search && textSearchVal == doc.title && lowCashVal > Math.abs(doc.totalCash) && highCashVal < Math.abs(doc.totalCash)) {
                                        //         newArrayFinal.push(doc)
                                        //     }
                                        // } else if (dateVal == "" && typeCash_Search == "" && textSearchVal !== "" && lowCashVal == "" && highCashVal == "") {
                                        //     if (textSearchVal == doc.title) {
                                        //         newArrayFinal.push(doc)
                                        //     }
                                        // } else if (dateVal == "" && typeCash_Search == "" && textSearchVal !== "" && lowCashVal !== "" && highCashVal == "") {
                                        //     if (textSearchVal == doc.title && lowCashVal > Math.abs(doc.totalCash)) {
                                        //         newArrayFinal.push(doc)
                                        //     }
                                        // } else if (dateVal == "" && typeCash_Search == "" && textSearchVal !== "" && lowCashVal !== "" && highCashVal !== "") {
                                        //     if (textSearchVal == doc.title && lowCashVal > Math.abs(doc.totalCash) && highCashVal < Math.abs(doc.totalCash)) {
                                        //         newArrayFinal.push(doc)
                                        //     }
                                        // } else if (dateVal == "" && typeCash_Search == "" && textSearchVal == "" && lowCashVal !== "" && highCashVal == "") {
                                        //     if (lowCashVal > Math.abs(doc.totalCash)) {
                                        //         newArrayFinal.push(doc)
                                        //     }
                                        // } else if (dateVal == "" && typeCash_Search == "" && textSearchVal == "" && lowCashVal !== "" && highCashVal !== "") {
                                        //     if (lowCashVal > Math.abs(doc.totalCash) && highCashVal < Math.abs(doc.totalCash)) {
                                        //         newArrayFinal.push(doc)
                                        //     }
                                        // } else if (dateVal == "" && typeCash_Search == "" && textSearchVal == "" && lowCashVal == "" && highCashVal !== "") {
                                        //     if (highCashVal < Math.abs(doc.totalCash)) {
                                        //         newArrayFinal.push(doc)
                                        //     }
                                        // }
                                    }

                                    if (typePayment == "all") {
                                        // get all  == x
                                        checkSearch();


                                    } else if (typePayment == "free") {

                                        if (doc.after == false) {
                                            checkSearch();


                                        }


                                    } else if (typePayment == "important") {

                                        if (doc.after == true) {

                                            checkSearch();



                                        }
                                    }
                                }
                                newArrayFinal.forEach(x => {
                                    console.log(x);
                                    addToSearchBox(x.title, x.date, x.status, x.totalCash, x.wayPay);

                                })




                                console.log(newArrayFinal);
                                // getdataforSearch().then(x => {
                                //     console.log(x);
                                //     var keys = Object.keys(x);
                                //     for (var i = 0; i < keys.length; i++) {
                                //         var post = x[keys[i]];
                                //         if (dateVal) {
                                //             log("date");

                                //             if (keys[i] == dataValNum) {
                                //                 console.log('date exsist');
                                //             // give the date value

                                //             } else {
                                //                 console.log('day is not exsist');
                                //             }

                                //         } else {

                                //             // if there is another input giver their propotion

                                //         }

                                //     }
                                // })



                                var obg = [];



                                // if (dateVal !== "" && textSearchVal == "" && typeCashVal == "" && lowCashVal == "" && highCashVal == "") {
                                //     console.log("onldy date");
                                // } else if (dateVal !== "") {


                                //     if (textSearchVal !== "" && typeCashVal !== "") {

                                //     } else if (textSearchVal == "" && typeCashVal !== "") {

                                //     } else if (textSearchVal !== "" && typeCashVal == "") {

                                //     } else if (textSearchVal !== "" && typeCashVal == "") { }
                                // }

                                // if (textSearchVal === "" && typeCashVal !== "") {
                                //     database.ref('/Users/' + user.uid + '/cashflow/').orderByChild("wayPay").equalTo(typeCashVal).once('value').then(snapshot => {

                                //         let postArray = snapshot.val();

                                //         if (postArray) {

                                //         } else {
                                //             console.log(" textSearch empty + textType not empty");
                                //         }
                                //         let keys = Object.keys(postArray);

                                //         for (var i = 0; i < keys.length; i++) {

                                //             var id = keys[i];
                                //             var currentObject = postArray[id];
                                //             var currectnum = currentObject.totalCash;
                                //             var type = currentObject.type;
                                //             var date = currentObject.date;
                                //             var title = currentObject.title;
                                //             var st = currentObject.status;
                                //             var way = currentObject.wayPay;

                                //             if (lowCashVal !== "" && highCashVal === "") {
                                //                 if (currectnum < lowCashVal) {
                                //                     addToSearchBox(title, date, st, currectnum, way);
                                //                 }
                                //             } else if (lowCashVal === "" && highCashVal !== "") {
                                //                 if (currectnum > highCashVal) {
                                //                     addToSearchBox(title, date, st, currectnum, way);
                                //                 }
                                //             } else if (lowCashVal !== "" && highCashVal !== "") {
                                //                 if (currectnum > highCashVal && currectnum > highCashVal) {
                                //                     addToSearchBox(title, date, st, currectnum, way);
                                //                 }
                                //             } else if (lowCashVal === "" && highCashVal === "") {
                                //                 addToSearchBox(title, date, st, currectnum, way);
                                //                 obg.push(currentObject);
                                //             }
                                //             obg.push(currentObject);
                                //         }
                                //     }).catch((err) => {
                                //         console.log(err);
                                //     });


                                // } else if (typeCashVal === "" && textSearchVal !== "") {

                                //     database.ref('/Users/' + user.uid + '/cashflow/').orderByChild("title").equalTo(textSearchVal).once('value').then(snapshot => {

                                //         let postArray = snapshot.val();

                                //         if (postArray) {
                                //             let keys = Object.keys(postArray);

                                //             for (var i = 0; i < keys.length; i++) {

                                //                 var id = keys[i];
                                //                 var currentObject = postArray[id];
                                //                 var currectnum = currentObject.totalCash;
                                //                 var type = currentObject.type;
                                //                 var date = currentObject.date;
                                //                 var st = currentObject.status;
                                //                 var way = currentObject.wayPay;
                                //                 var title = currentObject.title;

                                //                 if (lowCashVal !== "" && highCashVal === "") {
                                //                     if (currectnum < lowCashVal) {
                                //                         addToSearchBox(title, date, st, currectnum, way);
                                //                     }
                                //                 } else if (lowCashVal === "" && highCashVal !== "") {
                                //                     if (currectnum > highCashVal) {
                                //                         addToSearchBox(title, date, st, currectnum, way);
                                //                     }
                                //                 } else if (lowCashVal !== "" && highCashVal !== "") {
                                //                     if (currectnum > highCashVal && currectnum > highCashVal) {
                                //                         addToSearchBox(title, date, st, currectnum, way);
                                //                     }
                                //                 } else if (lowCashVal === "" && highCashVal === "") {
                                //                     addToSearchBox(title, date, st, currectnum, way);
                                //                     obg.push(currentObject);
                                //                 }
                                //             }
                                //         } else {
                                //             console.log(" textSearch empty + textType not empty");
                                //         }


                                //     }).catch((err) => {
                                //         console.log(err);
                                //     });


                                // } else if (typeCashVal !== "" && textSearchVal !== "") {

                                //     database.ref('/Users/' + user.uid + '/cashflow/').orderByChild("title").equalTo(textSearchVal).once('value').then(snapshot => {

                                //         let postArray = snapshot.val();

                                //         if (postArray) {
                                //             let keys = Object.keys(postArray);

                                //             for (var i = 0; i < keys.length; i++) {
                                //                 var id = keys[i];
                                //                 var currentObject = postArray[id];
                                //                 var currectnum = currentObject.totalCash;
                                //                 var type = currentObject.type;
                                //                 var date = currentObject.date;
                                //                 var st = currentObject.status;
                                //                 var title = currentObject.title;
                                //                 var way = currentObject.wayPay;
                                //                 if (way === typeCashVal) {
                                //                     obg.push(currentObject);
                                //                     if (lowCashVal !== "" && highCashVal === "") {
                                //                         if (currectnum < lowCashVal) {
                                //                             addToSearchBox(title, date, st, currectnum, way);
                                //                         }
                                //                     } else if (lowCashVal === "" && highCashVal !== "") {
                                //                         if (currectnum > highCashVal) {
                                //                             addToSearchBox(title, date, st, currectnum, way);
                                //                         }
                                //                     } else if (lowCashVal !== "" && highCashVal !== "") {
                                //                         if (currectnum > highCashVal && currectnum > highCashVal) {
                                //                             addToSearchBox(title, date, st, currectnum, way);
                                //                         }
                                //                     } else if (lowCashVal === "" && highCashVal === "") {
                                //                         addToSearchBox(title, date, st, currectnum, way);
                                //                         obg.push(currentObject);
                                //                     }
                                //                 }
                                //             }
                                //         } else {
                                //             console.log(" textSearch empty + textType not empty");
                                //         }


                                //     }).catch((err) => {
                                //         console.log(err);
                                //     });


                                // } else if (typeCashVal === "" && textSearchVal === "") {

                                //     database.ref('/Users/' + user.uid + '/cashflow/').orderByChild("number").once('value').then(snapshot => {
                                //         let postArray = snapshot.val();

                                //         if (postArray) {
                                //             let keys = Object.keys(postArray);
                                //             for (var i = 0; i < keys.length; i++) {
                                //                 var id = keys[i];
                                //                 var currentObject = postArray[id];
                                //                 var currectnum = currentObject.totalCash;
                                //                 var type = currentObject.type;
                                //                 var date = currentObject.date;
                                //                 var st = currentObject.status;
                                //                 var title = currentObject.title;
                                //                 var way = currentObject.wayPay;
                                //                 if (lowCashVal !== "" && highCashVal === "") {
                                //                     if (currectnum < lowCashVal) {
                                //                         addToSearchBox(title, date, st, currectnum, way);
                                //                     }
                                //                 } else if (lowCashVal === "" && highCashVal !== "") {
                                //                     if (currectnum > highCashVal) {
                                //                         addToSearchBox(title, date, st, currectnum, way);
                                //                     }
                                //                 } else if (lowCashVal !== "" && highCashVal !== "") {
                                //                     if (currectnum > highCashVal && currectnum > highCashVal) {
                                //                         addToSearchBox(title, date, st, currectnum, way);
                                //                     }
                                //                 }
                                //             }
                                //         } else {
                                //             console.log(" textSearch empty + textType not empty");
                                //         }

                                //     }).catch((err) => {
                                //         console.log(err);
                                //     });

                                // }

                                // if (dateVal !== "") {

                                //     database.ref('/Users/' + user.uid + '/cashflow/').orderByChild("date").equalTo(newdate).on('value', snapshot => {

                                //         let postArray = snapshot.val();

                                //         if (postArray) {
                                //             var current_Object = postArray[dataValNum];
                                //             var currect_num = current_Object.totalCash;
                                //             var type_num = current_Object.type;
                                //             var date_num = current_Object.date;
                                //             var st_num = current_Object.status;
                                //             var way_num = current_Object.wayPay;
                                //             var title_num = current_Object.title;

                                //             if (lowCashVal !== "" && highCashVal === "") {
                                //                 if (currect_num < lowCashVal) {
                                //                     addToSearchBox(title_num, date_num, st_num, currect_num, way_num);
                                //                 }
                                //             } else if (lowCashVal === "" && highCashVal !== "") {
                                //                 if (currect_num > highCashVal) {
                                //                     addToSearchBox(title_num, date_num, st_num, currect_num, way_num);
                                //                 }
                                //             } else if (lowCashVal !== "" && highCashVal !== "") {
                                //                 if (currect_num > highCashVal && currect_num > highCashVal) {
                                //                     addToSearchBox(title_num, date_num, st_num, currect_num, way_num);
                                //                 }
                                //             } else if (lowCashVal === "" && highCashVal === "") {
                                //                 addToSearchBox(title_num, date_num, st_num, currect_num, way_num);
                                //                 obg.push(current_Object);
                                //             }
                                //         } else {
                                //             console.log(" textSearch empty + textType not empty");
                                //         }


                                //     });
                                // }

                                textSearch.value = "";
                                lowCash.value = "";
                                highCash.value = "";
                                date.value = "";
                                typeCashSearch.value = "";

                                function addToSearchBox(title, date, type, cash, way) {

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

                                }
                            })
                        });
                    }



                    SEARCH_PAGE_GET();
                } else {
                    addSave.setAttribute("data-target", "#");
                    addloan.setAttribute("data-target", "#");
                    // addloan.setAttribute("data-target", "#");
                    searchBtnBox.setAttribute("data-target", "#");
                    searchBtnBox.setAttribute("data-target", "#");
                    searchTool.setAttribute("title", "שדרג חבילה");
                    // הוסף הלוואה


                    // addSave.classList.add("bg-danger")
                    // addloan.classList.add("bg-danger")




                }
                // user.admnin = idTokenResult.claims.admin;
            })



            function UPDATELOAN() {
                var coreDate = createNewDate();
                var month_Today = coreDate.month;
                var year_Today = coreDate.year;
                let postArr = "";

                database.ref('/Users/' + user.uid + '/loan/').on('value', function (snap) {

                    postArr = snap.val();
                    if (postArr) {
                        let keysArr = Object.keys(postArr);
                        var arr = [];

                        for (var i = 0; i < keysArr.length; i++) {
                            var uid = keysArr[i];
                            var monthtotal = postArr[uid].totalMonth;
                            var dateStart = postArr[uid].startdate;
                            var cashloan = postArr[uid].monthlyPay;
                            var totalLoan = postArr[uid].totalCash;
                            var title = postArr[uid].title;
                            var infoloan = postArr[uid].info;
                            var numYear = postArr[uid].numYear;
                            var splitDate = dateStart.split(" ");// date start split
                            var monthb = splitDate[0];// date start month
                            var day = splitDate[1].split(",")[0];// date start day
                            var year = splitDate[2];// date start year 
                            var yearthatpay = Number(year_Today) - Number(year); //0 ///1 //2 
                            var prev_year_left = "";
                            var prevmonthYear = "";

                            if (yearthatpay >= 1) {
                                prev_year_left = yearthatpay - 1;
                                prevmonthYear = prev_year_left * 12;
                            }

                            var monthy = "";
                            var untilToday = month[month_Today];

                            if (year < year_Today) {
                                monthy = 12 - month[monthb] + prevmonthYear + untilToday; // pass
                                montleft = monthtotal - monthy;// left
                                sumPay = monthy * cashloan;// sum pass
                                left = totalLoan - sumPay;// sum left            
                            } else if (year == year_Today) {

                                var temp_monthy = untilToday - month[monthb]; // pass
                                if (temp_monthy <= 0) {
                                    monthy = 0;
                                    // montleft = 
                                } else {
                                    monthy = temp_monthy;
                                }
                                montleft = monthtotal - monthy;// left
                                sumPay = monthy * cashloan;// sum pass
                                left = totalLoan - sumPay;// sum left      
                            }

                            // console.log(monthy, montleft, left, sumPay, totalLoan);
                            firebase.database().ref().child('Users').child(user.uid).child('loan').child(uid).update({
                                cashLeft: Math.abs(left),
                                cashPaid: Math.abs(sumPay),
                                monthLeft: montleft,
                                monthPass: monthy,
                            });
                        }
                    } else {
                        console.log("empty")
                    }

                });
            }
            function SAVEWORD(word, type) {
                // word = "משכורת"
                // type = "in/out/loan/save";


                function GET_DATA_FOR_KEYWORDS() {
                    return database.ref('/Users/' + user.uid + '/setting/Keywords/').once('value').then(snapshot => {
                        return snapshot.val();
                    });
                }

                GET_DATA_FOR_KEYWORDS().then(data => {
                    if (data) {

                        console.log(data);
                        var keys = Object.keys(data);
                        // var array = Object.keys(data);
                        for (var i = 0; i < keys.length; i++) {
                            var doc = data[keys[i]];
                            if (doc) {

                                if (keys[i] == type) {

                                    // var check = keys.includes(type);
                                    console.log(doc);
                                    var newkeys = Object.keys(doc);
                                    var arrayword = [];

                                    console.log(newkeys);
                                    for (var j = 0; j < newkeys.length; j++) {
                                        var obg = doc[newkeys[j]];

                                        console.log(obg.word);

                                        var wordData = obg.word;
                                        arrayword.push(wordData);
                                        console.log(arrayword);

                                        // console.log(wordData.trim(), word.trim());
                                        // if (wordData.trim() == word.trim()) {

                                        //     console.log("word exist ");

                                        //     return;

                                        // } else if (wordData.trim() !== word.trim()) {
                                        //     console.log("3 check");

                                        //     // make anew One
                                        //     let new_PostKey = firebase.database().ref().child('Users').child(user.uid).child('setting').child('Keywords').child(type).push().key;
                                        //     let up_dates = {};
                                        //     let post_data = {
                                        //         word: word
                                        //     }

                                        //     up_dates['/Users/' + user.uid + '/setting/Keywords/' + type + "/" + new_PostKey] = post_data;
                                        //     firebase.database().ref().update(up_dates);

                                        // }
                                    }
                                    console.log(arrayword);

                                    var check = arrayword.indexOf(word);
                                    console.log(check);
                                    if (check == -1) {
                                        let new_PostKey = firebase.database().ref().child('Users').child(user.uid).child('setting').child('Keywords').child(type).push().key;
                                        let up_dates = {};
                                        let post_data = {
                                            word: word
                                        }

                                        up_dates['/Users/' + user.uid + '/setting/Keywords/' + type + "/" + new_PostKey] = post_data;
                                        firebase.database().ref().update(up_dates);
                                        break;

                                    } else if (check > -1) {
                                        console.log('exisst');
                                        break;
                                    }

                                } else {
                                    var check = keys.includes(type);
                                    console.log(check);
                                    if (check == true) {
                                        // have data

                                    } else {
                                        let new___PostKey = firebase.database().ref().child('Users').child(user.uid).child('setting').child('Keywords').child(type).push().key;
                                        let up___dates = {};
                                        let post___data = {
                                            word: word
                                        }

                                        up___dates['/Users/' + user.uid + '/setting/Keywords/' + type + "/" + new___PostKey] = post___data;
                                        firebase.database().ref().update(up___dates);
                                        break;
                                    }
                                }
                            } else {
                                let new_PostKey = firebase.database().ref().child('Users').child(user.uid).child('setting').child('Keywords').child(type).push().key;
                                let up_dates = {};
                                let post_data = {
                                    word: word
                                }

                                up_dates['/Users/' + user.uid + '/setting/Keywords/' + type + "/" + new_PostKey] = post_data;
                                firebase.database().ref().update(up_dates);
                            }

                        }



                    } else {
                        // save for data base 
                        console.log("2 check");

                        let newPostKey = firebase.database().ref().child('Users').child(user.uid).child('setting').child('Keywords').child(type).push().key;
                        let updates = {};
                        let postdata = {
                            word: word
                        }

                        updates['/Users/' + user.uid + '/setting/Keywords/' + type + "/" + newPostKey] = postdata;
                        firebase.database().ref().update(updates);

                        // database.ref('/Users/' + user.uid + '/setting/Keywords/' + type)
                    }
                }).catch(err => {
                    console.log(err)
                })


            }


            function SAVE_GET_DATA_HOME() {
                console.log(7);

                database.ref('/Users/' + user.uid + '/saveMoney/').on('value', function (snap) {
                    console.log(8);

                    var coreDate = createNewDate();
                    var month_Today = coreDate.month;
                    var year_Today = coreDate.year;
                    let postArr = snap.val();
                    var data = postArr;

                    if (data) {



                        // console.log('in');
                        let keysArr = Object.keys(data);


                        var arr = [];
                        var title = "";
                        var tot_cash = 0;
                        var tot_pass = 0;
                        var tot_left = 0;
                        var num = 0;

                        for (var i = 0; i < keysArr.length; i++) {
                            var uid = keysArr[i];
                            var destination = data[uid].destination;
                            var totalSAVE = data[uid].totalCash;
                            tot_cash += Math.abs(totalSAVE);
                            tot_pass += Math.abs(destination);
                            num += 1;
                        }

                        var payuntilToday = tot_cash;
                        var precentNum = payuntilToday / Number(tot_pass) * 100;
                        var fixprecent = precentNum.toFixed(0);
                        var divcont = ``;
                        // console.log(payuntilToday);
                        var left_An = "";
                        var Right_An = "";
                        var animation = "animation";
                        // console.log(fixprecent);
                        if (Math.abs(fixprecent) == 0) {
                            animation = "display"
                            left_An = "block"
                            Right_An = "block"
                        } else if (Math.abs(fixprecent) <= 10 && Math.abs(fixprecent) > 0 && Math.abs(fixprecent) !== 0) {
                            Right_An = "loading-1 1.5s linear forwards 1.8s"
                            left_An = "loading-0 1.5s linear forwards 1.8s"
                        } else if (Math.abs(fixprecent) < 25 && Math.abs(fixprecent) > 10) {
                            Right_An = "loading-2 1.5s linear forwards 1.8s"
                            left_An = "loading-0 1.5s linear forwards 1.8s"
                        } else if (Math.abs(fixprecent) == 25) {
                            left_An = "loading-0 1.5s linear forwards 3.3s"
                            Right_An = "loading-2-2 1.5s linear forwards 1.8s"
                        } else if (Math.abs(fixprecent) <= 30 && Math.abs(fixprecent) > 20) {
                            Right_An = "loading-3 1.5s linear forwards 1.8s"
                            left_An = "loading-0 1.5s linear forwards 1.8s"
                        } else if (Math.abs(fixprecent) < 50 && Math.abs(fixprecent) > 30) {
                            Right_An = "loading-4 1.5s linear forwards 1.8s"
                            left_An = "loading-0 1.5s linear forwards 1.8s"
                        } else if (Math.abs(fixprecent) == 50) {
                            left_An = "loading-0 1.5s linear forwards 3.3s"
                            Right_An = "loading-5 1.5s linear forwards 1.8s"
                        } else if (Math.abs(fixprecent) > 50 && Math.abs(fixprecent) < 60) {
                            Right_An = "loading-5 1.5s linear forwards 1.8s"
                            left_An = "loading-6 1.5s linear forwards 3.3s"
                        } else if (Math.abs(fixprecent) >= 60 && Math.abs(fixprecent) < 75) {
                            Right_An = "loading-5 1.5s linear forwards 1.8s"
                            left_An = "loading-7 1.5s linear forwards 3.3s"
                        } else if (Math.abs(fixprecent) == 75) {
                            Right_An = "loading-5 1.5s linear forwards 1.8s"
                            left_An = "loading-7-7 1.5s linear forwards 3.3s"
                        } else if (Math.abs(fixprecent) > 75 && Math.abs(fixprecent) < 80) {
                            Right_An = "loading-5 1.5s linear forwards 1.8s"
                            left_An = "loading-8 1.5s linear forwards 3.3s"
                        } else if (Math.abs(fixprecent) >= 80 && Math.abs(fixprecent) < 90) {
                            Right_An = "loading-5 1.5s linear forwards 1.8s"
                            left_An = "loading-9 1.5s linear forwards 3.3s"
                        } else if (Math.abs(fixprecent) >= 90 && Math.abs(fixprecent) < 100) {
                            Right_An = "loading-5 1.5s linear forwards 1.8s"
                            left_An = "loading-10 1.5s linear forwards 3.3s"
                        } else if (Math.abs(fixprecent) == 100) {
                            Right_An = "loading-5 1.5s linear forwards 1.8s"
                            left_An = "loading-10-10 1.5s linear forwards 3.3s"
                        }

                        var x = "";
                        if (Math.abs(fixprecent) == 100) {
                            x = ` <i class="material-icons mx-auto align-middle finishSave" > done_all</i> `;
                        } else {
                            x = fixprecent + "%";
                        }
                        divcont = `<div class="card cd cardLoanSaave shadow-sm border-0 mb-2">
                               <div id="boxClick"></div>
                                <div class="row col-12 h-100 mx-0 my-0" id="SaveConector">
                                    <div class="col-6 colmn bg-white" >
                                        <div class="container mt-4" >
    
                                            <div class="progress green" style="height: 150px;">
                                                <span class="progress-left" >
                                                    <span class="progress-bar" style="${animation}:${left_An}"> </span>
                                                </span>
                                                <span class="progress-right" >
                                                    <span class="progress-bar" style="${animation}:${Right_An}"></span>
                                                </span>
                                                <div class="progress-value">${x}</div>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div class="col-6 colmn info">
    
                                        <h4 class="text-right mt-3">חסכונות</h4>
                                        <p class="text-right mx-0 my-0 lt">${tot_cash}<span class="title_save"> -סה"כ חסכונות</span></p>
    
                                        <p class="text-right mx-0 my-0 lt">${tot_pass}<span class="title_save"> -יעד</span></p>
                                        <p class="text-right mx-0 my-0 lt">${num}<span class="title_save"> -מס' חסכונות</span></p>
    
    
    
    
                                    </div>
                                </div>
                         </div> `;
                        console.log(10);

                        boxsave.innerHTML = divcont;



                    } else {
                        console.log("empty")
                    }


                });

                // console.log(data);





            }

            UPDATELOAN();



            function UPDATESAVE() {

                console.log(222);

                var save = [];
                let keys = [];
                let postArray = {};
                let post_Array = "";
                const newDate = createNewDate();

                // database.ref('/Users/' + user.uid + '/cashflow/').on('value', function (snapshot) {
                //     if (snapshot) {
                //         post_Array = snapshot.val();

                //     } else {
                //         console.log("empty")
                //     }
                // });
                // console.log(post_Array);
                function getdatadforupdateSave() {
                    return database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').once('value').then(function (snapshot) {

                        console.log(0);
                        return snapshot.val();
                    }).catch((err) => {
                        console.log(err);
                    })
                }
                getdatadforupdateSave().then(postArray => {

                    if (postArray) {

                        keys = Object.keys(postArray);

                        for (var i = 0; i < keys.length; i++) {
                            var id = keys[i];
                            let totalout = 0;
                            let totalIncome = 0;
                            let totalOut = 0;
                            var currentObject = postArray[id];
                            var title = currentObject.title;
                            var currectnum = currentObject.totalCash;
                            var wayPay = currentObject.wayPay;
                            var checkTemp = currentObject.after;
                            var type = currentObject.type;
                            var date = currentObject.date;
                            var splitDate = date.split(" ");
                            var month = splitDate[0];
                            var save_ssub = [];

                            if (wayPay == 'חסכון') {
                                if (newDate.dateInNum >= id) {
                                    save.push([title, currectnum]);
                                }
                            }
                            var cCash = currentObject.chashFlow;
                            console.log(cCash);
                            if (currentObject.chashFlow !== undefined) {

                                var keysCash = Object.keys(currentObject.chashFlow);
                                console.log(cCash);

                                for (var j = 0; j < keysCash.length; j++) {
                                    var uid = keysCash[j];
                                    var currObject = cCash[uid];
                                    var wp = currObject.wayPay;
                                    if (wp == "חסכון") {
                                        if (newDate.dateInNum >= id) {
                                            // console.log(currObject.title, currObject.totalCash);
                                            save.push([currObject.title, currObject.totalCash]);

                                        }
                                    }
                                }
                            }
                        }
                        console.log(save);
                        if (save) {
                            console.log(save.length);
                            for (var h = 0; h < save.length; h++) {
                                for (var q = 0; q < save.length; q++) {
                                    console.log(save[q][0], save[h][0]);
                                    // console.log(save[q][0] == save[h][0], save[q][0], save[h][0]);
                                    if (save[q][0] == save[h][0] && h != q) {
                                        save[h][1] = save[h][1] + save[q][1];
                                        console.log(save[q][0], save[h][1], save[q][1], save[h][1] + save[q][1]);

                                        save.splice(q, 1)
                                        i = i - 1;
                                        q = q - 1;

                                    }

                                }
                                console.log(save);
                                var newAray = save;



                            }
                            var maintitle = "";
                            var arrr = [];
                            function getDataForSaveMoney() {
                                return database.ref('/Users/' + user.uid + '/saveMoney/').once('value').then(function (snap) {
                                    // console.log(snap);

                                    return snap.val();

                                })
                            }

                            getDataForSaveMoney().then(postArr => {
                                if (postArr) {

                                    let keysArr = Object.keys(postArr);

                                    var arr = [];
                                    var sum = 0;

                                    for (var i = 0; i < keysArr.length; i++) {
                                        var u_id = keysArr[i];
                                        maintitle = postArr[u_id].title;

                                        save.forEach(element => {
                                            // console.log(element);

                                            if (element[0] == maintitle) {

                                                // console.log('exist');
                                                arrr.push([u_id, maintitle]);

                                            }
                                        });

                                    }

                                    arrr.forEach(x => {

                                        newAray.forEach(y => {
                                            if (y[0] == x[1]) {
                                                console.log(y[1]);
                                                firebase.database().ref().child('Users').child(user.uid).child('saveMoney').child(x[0]).update({
                                                    totalCash: y[1]

                                                });
                                                // console.log(y, x);
                                            }


                                            function checkifdestinatin() {
                                                return database.ref('/Users/' + user.uid + '/saveMoney/' + x[0]).once('value').then(function (snap) {
                                                    return snap.val();
                                                }).catch((err) => {
                                                    console.log(err);
                                                });


                                            }
                                            checkifdestinatin().then(z => {
                                                // console.log(z.destination, Math.abs(y[1]));
                                                // console.log(y.destination);
                                                if (z.destination < Math.abs(y[1])) {
                                                    firebase.database().ref().child('Users').child(user.uid).child('saveMoney').child(x[0]).update({
                                                        destination: Math.abs(z.totalCash)

                                                    });
                                                }

                                            }).catch((err) => {
                                                console.log(err);
                                            });

                                        });
                                    });
                                } else {
                                    console.log("empty")
                                }

                            }).catch(err => {
                                console.log(err)
                            })


                        } else {
                            console.log("wrong")
                        }


                    } else {
                        console.log("empty")
                    }

                }).catch(err => {
                    console.log(err)
                })





            }

            UPDATESAVE();



            function addDb(Type, i, t, d, c, P, W, Temp) {
                console.log(2);
                // console.log(Type, i, t, d, c, P, W, Temp);
                var corMonth = d.split(" ");
                var correctMonth = corMonth[0];
                var correctDay = corMonth[1].split(",")[0];
                var correctYear = corMonth[2];
                var numMonth = month[correctMonth];
                var key = P.toString();

                function addToDataBase(date, s, I) {
                    console.log(3);

                    mainTable.innerHTML = "";
                    var TypeCash = t;
                    var totalCash = c;
                    var time = new Date();
                    var dateCashNum = Date.parse(date);
                    var timeNum = Date.parse(time);
                    var numDataCorrect = '';
                    let numExpends = 0;
                    var newArrayCash = {};
                    var dataCash = 0;
                    var waypay = '';
                    var chashFlow = '';
                    var title = '';
                    var dbDate = '';
                    var numTime = '';
                    var time = '';
                    var type = '';
                    var status = '';
                    var info = '';

                    database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').on('value', snapshot => {
                        console.log(4);
                        let postArray = snapshot.val();
                        let keys = Object.keys(postArray);

                        for (var i = 0; i < keys.length; i++) {
                            console.log(5);
                            var currentObject = postArray[keys[i]].date;
                            var dataDate = Date.parse(currentObject);
                            if (dataDate == dateCashNum) {
                                numDataCorrect = dataDate;
                                var object = postArray[keys[i]];
                                dataCash = object.totalCash;
                                after = object.after;
                                waypay = object.wayPay;
                                chashFlow = object.chashFlow;
                                title = object.title;
                                dbDate = object.date;
                                numTime = object.numTime;
                                time = object.time;
                                type = object.type;
                                status = object.status;
                                info = object.info;

                            }
                        }
                    });

                    if (numDataCorrect == dateCashNum) {

                        var type_in_out = "";
                        var total = Number(totalCash) + Number(dataCash);
                        if (total < 0) {
                            type_in_out = "out"
                        } else {
                            type_in_out = "in"
                        }

                        if (waypay == 'פעילות מרובה') {

                            let keysCash = Object.keys(chashFlow);
                            var uwp = "";
                            var uobg = "";
                            var cashsub = 0;
                            var uid = "";

                            for (var i = 0; i < keysCash.length; i++) {

                                var id = keysCash[i];
                                var obg = chashFlow[id];
                                var wp = obg.wayPay;

                                if (obg.wayPay == "כרטיס אשראי הורדה") {
                                    uwp = wp;
                                    uid = id;
                                    cashsub = obg.totalCash;
                                }
                            }
                            var sumCardCashflow = Number(cashsub) + Number(totalCash);
                            var sumCardMain = total;

                            if (uwp == "כרטיס אשראי הורדה") {

                                if (W == "כרטיס אשראי הורדה") {
                                    firebase.database().ref().child('Users').child(user.uid).child('cashflow').child(dateCashNum).child('chashFlow').child(uid).update({
                                        totalCash: sumCardCashflow
                                    });
                                    firebase.database().ref().child('Users').child(user.uid).child('cashflow').child(dateCashNum).update({
                                        totalCash: sumCardMain
                                    });
                                } else {
                                    // make anew one
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
                                        status: s,
                                        info: I
                                    }

                                    updates['/Users/' + user.uid + '/cashflow/' + dateCashNum + '/chashFlow/' + newPostKey] = postdata;
                                    firebase.database().ref().update(updates);
                                }
                            } else {

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
                                    status: s,
                                    info: I
                                }

                                updates['/Users/' + user.uid + '/cashflow/' + dateCashNum + '/chashFlow/' + newPostKey] = postdata;
                                firebase.database().ref().update(updates);

                            }

                        } else if (waypay == 'כרטיס אשראי הורדה') {

                            if (W == "כרטיס אשראי הורדה") {

                                firebase.database().ref().child('Users').child(user.uid).child('cashflow').child(dateCashNum).update({
                                    totalCash: total
                                });

                            } else {

                                let newPostKey = firebase.database().ref().child('Users').child(user.uid).child('cashflow').child(dateCashNum).child('chashFlow').push().key;
                                let updates = {};
                                let postdata = {
                                    title: title,
                                    date: dbDate,
                                    totalCash: Number(dataCash),
                                    type: type,
                                    after: after,
                                    time: time,
                                    numTime: numTime,
                                    wayPay: waypay,
                                    status: status,
                                    info: info
                                }

                                updates['/Users/' + user.uid + '/cashflow/' + dateCashNum + '/chashFlow/' + newPostKey] = postdata;
                                firebase.database().ref().update(updates);

                                let new_PostKey = firebase.database().ref().child('Users').child(user.uid).child('cashflow').child(dateCashNum).child('chashFlow').push().key;
                                let updates_new = {};
                                let post_data = {
                                    title: TypeCash,
                                    date: date,
                                    totalCash: Number(totalCash),
                                    type: Type,
                                    after: Temp,
                                    time: time,
                                    numTime: timeNum,
                                    wayPay: W,
                                    status: s,
                                    info: I
                                }

                                updates_new['/Users/' + user.uid + '/cashflow/' + dateCashNum + '/chashFlow/' + new_PostKey] = post_data;
                                firebase.database().ref().update(updates_new);

                                firebase.database().ref().child('Users').child(user.uid).child('cashflow').child(dateCashNum).update({
                                    title: "פעילות מרובה",
                                    date: date,
                                    totalCash: total,
                                    type: type_in_out,
                                    after: false,
                                    time: time,
                                    numTime: timeNum,
                                    wayPay: "פעילות מרובה",
                                    status: 'כללי',
                                    info: "פעילות מרובה"
                                });
                            }

                        } else {

                            let newPostKey = firebase.database().ref().child('Users').child(user.uid).child('cashflow').child(dateCashNum).child('chashFlow').push().key;
                            let updates = {};
                            let postdata = {
                                title: title,
                                date: dbDate,
                                totalCash: Number(dataCash),
                                type: type,
                                after: after,
                                time: time,
                                numTime: numTime,
                                wayPay: waypay,
                                status: status,
                                info: info

                            }

                            updates['/Users/' + user.uid + '/cashflow/' + dateCashNum + '/chashFlow/' + newPostKey] = postdata;
                            firebase.database().ref().update(updates);

                            let new_PostKey = firebase.database().ref().child('Users').child(user.uid).child('cashflow').child(dateCashNum).child('chashFlow').push().key;
                            let updates_new = {};
                            let post_data = {
                                title: TypeCash,
                                date: date,
                                totalCash: Number(totalCash),
                                type: Type,
                                after: Temp,
                                time: time,
                                numTime: timeNum,
                                wayPay: W,
                                status: s,
                                info: I
                            }

                            updates_new['/Users/' + user.uid + '/cashflow/' + dateCashNum + '/chashFlow/' + new_PostKey] = post_data;
                            firebase.database().ref().update(updates_new);

                            firebase.database().ref().child('Users').child(user.uid).child('cashflow').child(dateCashNum).update({
                                title: "פעילות מרובה",
                                date: date,
                                totalCash: total,
                                type: type_in_out,
                                after: false,
                                time: time,
                                numTime: timeNum,
                                wayPay: "פעילות מרובה",
                                status: 'כללי',
                                info: 'פעילות מרובה'
                            });
                        }
                    } else {
                        console.log(i);
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
                            status: s,
                            info: I
                        }
                        updates['/Users/' + user.uid + '/cashflow/' + dateCashNum] = postdata;
                        firebase.database().ref().update(updates);
                    }

                }

                if (key == 'onceIn' || key == 'once' || key == 'onceSave') {

                    addToDataBase(d, "חד פעמי", i);
                } else if (key == 'dusIn' || key == 'dus') {
                    var k = numMonth - 2;
                    while (k < 11) {
                        for (x in month) {
                            if (month[x] == k + 2) {
                                var status = "דו חודשי";
                                var newDate = createDates(x, correctDay, correctYear)
                                addToDataBase(newDate, status, i);
                            }
                        }
                        k += 2;
                    }

                } else if (key == 'yearlyIn' || key == 'yearly' || key == 'yearlySave') {

                    for (x in month) {
                        var status = "שנתי";
                        var newDate = createDates(x, correctDay, correctYear);
                        console.log(newDate, status, i);
                        addToDataBase(newDate, status, i);
                    }

                } else if (key == 'flowIn' || key == 'flow') {
                    var numpay = 0;
                    if (key == 'flowIn') {
                        numpay = document.getElementById("flowin").value;
                    } else if (key == 'flow') {
                        numpay = document.getElementById("flowOut").value;
                    }
                    var status = '+ ' + numpay + ' שוטף';
                    addToDataBase(d, status, i);

                } else if (key == 'paymentIn' || key == 'payment' || key == 'paymentSave' || key == 'paymentloan') {

                    var numpay = "";

                    if (key == 'paymentIn') {
                        var newnumpay = document.getElementById("creditinput").value;
                        numpay = newnumpay;
                    } else if (key == 'payment') {
                        var newnumpayout = document.getElementById("creditinputOut").value;
                        numpay = newnumpayout;
                    } else if (key == 'paymentSave') {
                        var newnumpaysave = document.getElementById("creditinputSave").value;
                        numpay = newnumpaysave;
                    } else if (key == 'paymentloan') {
                        numpay = 13 - numMonth;
                    }

                    var l = numMonth;
                    var j = 0;
                    var status = "";
                    while (j < numpay) {
                        for (x in month) {
                            if (month[x] == l) {
                                var m = j + 1;
                                if (key == 'paymentIn' || key == 'payment' || key == 'paymentSave') {
                                    status = numpay + " תשלום " + m + " מתוך ";
                                } else if (key == 'paymentloan') {
                                    status = "שנתי";
                                }
                                var newDate = createDates(x, correctDay, correctYear);
                                addToDataBase(newDate, status, i);
                            }
                        }
                        l++;
                        j += 1;
                    }

                }

                totalcash.value = '';
                dateIncome.value = '';
                typeIncoming.value = '';
                // incomingForm.value = '';
                total_Out.value = '';
                dateOut.value = '';
                typeOut.value = '';
                infoOut.value = '';

                console.log(6);

                ClearFormIncomingValid();
                clearFormInputValid();
                clearFormSaveValid();
                ClearFormLoanValid();
                // HOME_PAGE_GET_DATA_FOR_WEEKLY();

                // TABLE_PAGE_GET_DATA();
            }

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
                // console.log(arr.length);
                var arra = arr;

                for (var i = 0; i < arra.length; i++) {
                    for (var j = 0; j < arra.length; j++) {
                        if (arra[i][0] == arra[j][0] && i !== j) {
                            arra[i][1] = arra[i][1] + arra[j][1];
                            arra.splice(j, 1);
                            return arra;
                        } else {
                            return arra;
                        }

                    }
                }

            }

            function loadYearly(d, n) {

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
            function clearAlert() {
                alertBox.innerHTML = "";
            }
            function loadIncomingOutForTable(I, O) {
                let ils = document.createElement("span");
                ils.setAttribute("id", "ils");
                var balnaceSum = I + O;
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
                var row = document.getElementById("titleBoxTableBalance");
                var iconbal = document.getElementById("icon_Balance");
                var divide = I / 100;
                var precent = Math.abs(O) / divide;
                var num_currectStatusCash = document.getElementById("Status");

                if (precent > 0 && precent !== Infinity) {
                    num_currectStatusCash.textContent = precent.toFixed(0) + "%"
                } else if (precent == Infinity) {
                    num_currectStatusCash.textContent = "הזן הכנסות"
                }

                if (balnaceSum < 0) {
                    row.classList.remove("backgroundTitleBlue");
                    row.classList.remove("backgroundTitlein");
                    row.classList.add("backgroundTitleout");
                    iconbal.innerHTML = "arrow_downward";
                    iconbal.style.color = '#ff3d67';
                } else if (balnaceSum > 0) {
                    row.classList.add("backgroundTitlein");
                    row.classList.remove("backgroundTitleout");
                    row.classList.remove("backgroundTitleBlue");
                    iconbal.textContent = "arrow_upward";
                    iconbal.style.color = '#17a2b8';
                }

                let imgin = document.createElement('img');
                incoming.appendChild(spanIn);
                outcoming.appendChild(spanout);
                balance.appendChild(spanblance);
            }

            function loadIncomingOut(I, O) {

                let ils = document.createElement("span");
                ils.setAttribute("id", "ils");
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
                num_balanceYear.textContent = '  ' + splitbalance[0] + '.';
                num_incomingYear.textContent = '  ' + splitin[0] + '.';
                num_expnendYear.textContent = '  ' + splitout[0] + '.';
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

                var exists = false;
                var textTrim = t.trim();

                database.ref('/Users/' + user.uid + '/setting/text/' + Type).orderByChild("word").equalTo(textTrim).once("value").then(function (snapshot) {
                    if (snapshot) {
                        const userData = snapshot.val();
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
                            alertBox.innerHTML('word exsists');
                        }
                    }
                }).catch((err) => {
                    console.log(err);
                });
            }

            // function saveNewWord() {
            //     newIncomeWord.addEventListener('click', (e) => {
            //         addKeyWord(typeIncoming.value, "in");
            //     });
            //     newExpendWord.addEventListener('click', (e) => {
            //         addKeyWord(typeOut.value, "out");
            //     });
            // }

            function setPhotoUser() {

                if (user.photoURL === null) {
                    database.ref('/Users/' + user.uid + '/info/').on('value', function (snap) {
                        textUser.textContent = snap.val().photoURL;
                        nameUser.textContent = snap.val().photoURL;
                    });
                } else {
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

                var monthC = months[date.getMonth()]
                document.querySelector("#monthCalnder").innerHTML = switch_full_Eng_To_Heb_Month(monthC);

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
                filename = filename ? filename + '.xls' : 'excel_data.xls';
                downloadLink = document.createElement("a");
                document.body.appendChild(downloadLink);

                if (navigator.msSaveOrOpenBlob) {
                    var blob = new Blob(['\ufeff', tableHTML], {
                        type: dataType
                    });
                    navigator.msSaveOrOpenBlob(blob, filename);
                } else {
                    downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
                    downloadLink.download = filename;
                    downloadLink.click();
                }
            }

            exportToExcele.addEventListener('click', e => {
                exportTableToExcel('table_main')
            });

            document.querySelector(".prev").addEventListener("click", (e) => {
                date.setMonth(date.getMonth() - 1);
                renderCalender();
                HOME_PAGE_GET_DATA_FOR_CALNDER();
            });

            document.querySelector(".next").addEventListener("click", () => {
                date.setMonth(date.getMonth() + 1);
                renderCalender();
                HOME_PAGE_GET_DATA_FOR_CALNDER();
            });

            function laodUpData(I, doc, S, A, pr, sum) {
                var dt = "";
                // console.log("3");

                database.ref('/Users/' + user.uid + '/setting/firstSetting/').on('value', snapshot => {
                    dt = snapshot.val().importantDay;
                    return dt;
                });
                var split_a = dt.split(" ");
                var month = split_a[0];
                var day = split_a[1].split(",")[0];

                var hebmonth = switch_English_To_Hebrew_Month(month);
                var previewNum = 0;
                addDataTable();
                if (doc.totalCash < 0) {
                    previewNum = pr + doc.totalCash;
                } else {
                    previewNum = pr - doc.totalCash;
                }
                var numCard = 0;
                function addDataTable() {

                    var date = doc.date;
                    var totalCash = doc.totalCash;
                    var type = doc.type;
                    var title = doc.title;
                    var status = doc.status;
                    var wayPay = doc.wayPay;
                    var t = totalCash;
                    var daysplit = date.split(" ")[1].split(",")[0];
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
                    icondelete.setAttribute("class", "material-icons delteicons btn");
                    icondelete.setAttribute("type", "button");
                    icondelete.setAttribute("data-target", "#row");
                    icondelete.setAttribute("data-toggle", "modal");
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

                    if (day === daysplit) {
                        rowtable.classList.add("newRow");
                        rowtable.classList.add("importantDay");
                        rowtable.classList.add("shadow-sm");
                    } else {
                        rowtable.setAttribute('class', 'newRow');
                    }

                    if (wayPay == "חסכון") {
                        icondelete.setAttribute("id", "detletrow " + I + " save");
                    } else if (wayPay == "הלוואה") {
                        icondelete.setAttribute("id", "detletrow " + I + " loan");
                    } else if (wayPay == "כרטיס אשראי הורדה") {
                        icondelete.setAttribute("id", "detletrow " + I + " card");
                    } else if (wayPay == "פעילות מרובה") {
                        icondelete.setAttribute("id", "detletrow " + I + " multi");
                    } else {
                        icondelete.setAttribute("id", "detletrow " + I + " simple");
                    }

                    rowtable.setAttribute('id', 'newRow' + " " + I);
                    rowtable.classList.add("mainRow")
                    typeCash.setAttribute('id', 'typeCash');
                    icontd.setAttribute("id", 'icontd');
                    typeOfPay.setAttribute('id', 'typeOfPay');
                    conditionPay.setAttribute('id', 'conditionPay');
                    TotalCashAfter.setAttribute('id', 'TotalCashAfter');
                    DateCash.setAttribute('id', 'DateCash');
                    TotalCash.setAttribute('id', 'TotalCash');
                    var dateBefore = date.split(" ");
                    var mon = dateBefore[0];
                    var monthHeb = switch_Eng_To_Heb_Month(mon);
                    var dayHeb = dateBefore[1].split(",")[0];
                    var newdate = dayHeb + " - " + monthHeb;
                    typeOfPay.textContent = wayPay;
                    conditionPay.textContent = status;
                    DateCash.textContent = newdate;
                    typeCash.textContent = title;

                    var splitdate = date.split(" ");
                    var mon = splitdate[0].toString();
                    var dayData = splitdate[0].split(",")[0];
                    var corMonth = "";
                    const monthss = {
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



                    console.log(daysplit, day);
                    if (daysplit < day) {
                        // mon is currect month
                        corMonth = mon;


                    } else if (day < daysplit) {

                        // next month
                        var indexMon = montharr.indexOf(mon);
                        console.log(indexMon);
                        var newMon = montharr[indexMon + 1]
                        corMonth = newMon;



                    }
                    console.log(corMonth);

                    console.log(mon);

                    if (pr > 0) {
                        let imgAfter = document.createElement("img");
                        imgAfter.setAttribute("class", "imgIls");
                        TotalCashAfter.style.color = '#50dd50';
                        imgAfter.setAttribute("src", "./img/greeb01-01.png");
                        if (wayPay == "כרטיס אשראי") {
                            TotalCashAfter.textContent = 'יורד ב- ' + day + " " + switch_Eng_To_Heb_Month(corMonth);
                            TotalCashAfter.style.fontWeight = "bold";
                            TotalCashAfter.style.color = '#ff3d67';
                        } else if (wayPay !== "כרטיס אשראי") {
                            TotalCashAfter.textContent = " " + formatNumber(Number(pr).toFixed(2));
                            TotalCashAfter.prepend(imgAfter);
                        }


                    } else if (pr < 0) {
                        let imgAfter = document.createElement("img");
                        imgAfter.setAttribute("class", "imgIls");
                        imgAfter.setAttribute("src", "./img/red-01.png");
                        TotalCashAfter.style.color = '#ff3d67';
                        if (wayPay == "כרטיס אשראי") {
                            TotalCashAfter.textContent = 'יורד ב- ' + day + " " + switch_Eng_To_Heb_Month(corMonth);
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

                        if (getEl) {

                            var parents = getEl.parentElement;
                            var RowParents = parents.parentElement;
                            RowParents.style.borderBottom = "none";
                            parents.removeChild(getEl)
                        }

                        rowtable.style.borderBottom = "#ff3d67 5px solid";
                        let spanTitle = document.createElement('span');
                        spanTitle.setAttribute('id', 'spanTitle');
                        spanTitle.textContent = formatNumber(sumNum.toFixed(2)) + " " + "חריגה";
                        TotalCashAfter.appendChild(spanTitle);

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
                        var key = e.target.id;
                        var splitkey = key.split(" ")[2];
                        if (splitkey == "loan") {
                            alertBox.innerHTML = Alert("הוצאה זו היא חלק מהלוואה לא ניתן למחוק מכאן, מחיקה מעמוד הלוואות / חסכונות")
                        } else if (splitkey == "save") {
                            alertBox.innerHTML = Alert("הוצאה זו היא חלק מפיקדון לא ניתן למחוק מכאן, מחיקה מעמוד הלוואות / חסכונות")
                        } else if (splitkey == "card") {
                            alertBox.innerHTML = Alert("הוצאה זו היא כל הוצאות האשראי לפי תאריך הוצאות")
                        } else if (splitkey == "multi") {
                            alertBox.innerHTML = Alert("לא ניתן למחוק פעילות מרובה אנא מחק מתוך השורה");

                        } else if (splitkey == "simple") {

                            alertBox.innerHTML = Promt("?אתה בטוח שאתה רוצה למחוק נתון זה", "table", "row");
                            document.addEventListener("click", e => {
                                var uid = e.target.id;
                                if (uid == "yestable") {
                                    mainTable.removeChild(rowtable);
                                    var datesplit = date.split(" ");
                                    var newdate = datesplit[0];
                                    var IdRow = icondelete.getAttribute("id");
                                    var textSplit = IdRow.split(" ");
                                    var id = textSplit[1];

                                    database.ref('/Users/' + user.uid + '/cashflow/' + id).remove().then(function () {

                                    }).catch(function (err) {
                                    });

                                    $('#row').modal('hide')

                                } else if (uid == "notable") {
                                    $('#row').modal('hide')
                                }
                            })
                        }
                    });

                    if (doc.chashFlow) {

                        var array = [];

                        // database.ref('/Users/' + user.uid + '/cashflow/').child(I).child('/chashFlow/').once('value').then(function (snapshot) {

                        let postArray = doc.chashFlow;

                        let keys = Object.keys(postArray);
                        let spanNum = document.createElement("span");
                        let textbox = document.createElement("p");
                        spanNum.setAttribute("class", "spanNum");
                        textbox.setAttribute("class", "numBox");
                        spanNum.textContent = keys.length;
                        spanNum.appendChild(textbox);
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
                            addSubRows();

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
                                icondelete.setAttribute("class", "material-icons delteicons btn ");
                                icondelete.setAttribute("type", "button");
                                icondelete.setAttribute("data-target", "#subrow");
                                icondelete.setAttribute("data-toggle", "modal");
                                if (way == "חסכון") {
                                    icondelete.setAttribute("id", I + " detletrow " + rowid + " save");
                                } else if (way == "הלוואה") {
                                    icondelete.setAttribute("id", I + " detletrow " + rowid + " loan");
                                } else if (way == "כרטיס אשראי הורדה") {
                                    icondelete.setAttribute("id", I + " detletrow " + rowid + " card");
                                } else {
                                    icondelete.setAttribute("id", I + " detletrow " + rowid + " simple");
                                }

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

                                row_table.setAttribute('id', I + ' newRow ' + i);
                                row_table.setAttribute('class', 'newSubRow');
                                typeCash.setAttribute('id', 'typeCash');
                                TotalCashAfter.setAttribute('id', 'TotalCashAfter');
                                DateCash.setAttribute('id', 'DateCash');
                                TotalCash.setAttribute('id', 'TotalCash');
                                DateCash.textContent = date;
                                typeCash.textContent = title;
                                typeOfPaySub.textContent = way;
                                if (way == "כרטיס אשראי הורדה") {
                                    conditionPaySub.textContent = "יום הורדה";//st 

                                } else {
                                    conditionPaySub.textContent = st;//st 

                                }
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
                                if (way == "כרטיס אשראי") {
                                    TotalCashAfter.textContent = 'יורד ב- ' + day + " " + hebmonth;
                                    TotalCashAfter.style.fontWeight = "bold";
                                    TotalCashAfter.style.color = '#ff3d67';
                                    row_table.classList.add("bd");

                                } else if (way !== "כרטיס אשראי") {
                                    TotalCashAfter.textContent = Number(suminsiderow).toFixed(2);
                                    TotalCashAfter.prepend(imgAfter);
                                    TotalCashAfter.style.color = '#ff3d67';
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
                                    var splitRow = idrow.split(" ");
                                    var row_Id = splitRow[2];
                                    var mainRow = splitRow[0];
                                    var splitkey = idrow.split(" ")[3];
                                    if (splitkey == "loan") {
                                        alertBox.innerHTML = Alert("הוצאה זו היא חלק מהלוואה לא ניתן למחוק מכאן, מחיקה מעמוד הלוואות / חסכונות")
                                    } else if (splitkey == "save") {
                                        alertBox.innerHTML = Alert("הוצאה זו היא חלק מפיקדון לא ניתן למחוק מכאן, מחיקה מעמוד הלוואות / חסכונות")
                                    } else if (splitkey == "card") {
                                        alertBox.innerHTML = Alert("הוצאה זו היא כל הוצאות האשראי לפי תאריך הוצאות")
                                    } else if (splitkey == "simple") {

                                        alertBox.innerHTML = Promt("?אתה בטוח שאתה רוצה למחוק נתון זה", "sub", "subrow");
                                        document.addEventListener("click", d => {
                                            var uid = d.target.id;
                                            if (uid == "yessub") {
                                                mainTable.removeChild(row_table);

                                                database.ref('/Users/' + user.uid + '/cashflow/' + mainRow + '/chashFlow/' + row_Id).remove().then(function () {
                                                }).catch(function (err) {
                                                });

                                                database.ref('/Users/' + user.uid + '/cashflow/').child(mainRow).child('/chashFlow/').once('value', function (snapshot) {

                                                    let postArray = snapshot.val();
                                                    let keys = Object.keys(postArray);
                                                    let length = keys.length;

                                                    for (var i = 0; i < length; i++) {

                                                        var id = keys[i];
                                                        var newArrayCashB = {};

                                                        if (length == 1) {

                                                            database.ref('/Users/' + user.uid + '/cashflow/').child(mainRow).child('/chashFlow/').child(id).once('value', function (snapshot) {

                                                                let postArray = snapshot.val();
                                                                let keys = Object.keys(postArray);
                                                                let length = keys.length;
                                                                newArrayCashB = postArray;

                                                            }).catch((err) => {
                                                                console.log(err);
                                                            });;

                                                            firebase.database().ref().child('Users').child(user.uid).child('cashflow').child(mainRow).update({

                                                                title: newArrayCashB.title,
                                                                date: newArrayCashB.date,
                                                                totalCash: newArrayCashB.totalCash,
                                                                type: newArrayCashB.type,
                                                                after: newArrayCashB.after,
                                                                time: newArrayCashB.time,
                                                                numTime: newArrayCashB.numTime,
                                                                wayPay: newArrayCashB.wayPay,
                                                                status: newArrayCashB.status,
                                                                info: newArrayCashB.info


                                                            });

                                                            database.ref('/Users/' + user.uid + '/cashflow/' + mainRow + '/chashFlow/').remove().then(function () {

                                                            }).catch(function (err) {
                                                            });
                                                            mainTable.innerHTML = "";
                                                            TABLE_PAGE_GET_DATA();
                                                        } else if (length > 2) {

                                                        }
                                                    }
                                                });
                                                $('#subrow').modal('hide')
                                            } else if (uid == "nosub") {
                                                $('#subrow').modal('hide')
                                            }
                                        })

                                    }
                                });
                            }

                        }

                        rowtable.addEventListener('click', (e) => {

                            for (var i = 0; i < keys.length; i++) {

                                var row = document.getElementById(I + " newRow " + i);
                                var sts = row.style.display;
                                if (sts == 'none') {
                                    row.style.display = 'table-row';
                                    rowtable.style.background = " rgb(252, 252, 252)";
                                } else {
                                    row.style.display = 'none';
                                    rowtable.style.background = " rgb(255, 255, 255)";
                                }
                            }
                        });

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

                    }
                }

            }

            database.ref('/Users/' + user.uid + '/setting/firstSetting/').on('value', snapshot => {
                // Limit = snapshot.val().cuurentCash;
                var important_Day = snapshot.val().importantDay;
                if (important_Day == undefined) {
                    function iniAlert() {
                        alertBox.innerHTML = Alert("הגדרות ראשונות ריקות. הזן תחילה הגדרות ראשוניות");

                    }
                    iniAlert();

                    setTimeout(clearAlert, 4000)

                }
            });

            function getDatesFromCalender(i, data, c, inc, out) {

                var cashflow = data.chashFlow;
                var cash_flow_cal = [0, 0];
                var inComCal = 0;
                var outComCal = 0;

                if (cashflow) {
                    let keysInday = Object.keys(cashflow);
                    for (var i = 0; i < keysInday.length; i++) {
                        var keyId = keysInday[i];
                        var val = cashflow[keyId].totalCash;
                        if (val > 0) {
                            inComCal += val;
                        } else if (val < 0) {
                            outComCal += val;
                        }
                        cash_flow_cal[0] = inComCal;
                        cash_flow_cal[1] = outComCal;
                    }

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

                var day_num_Db = i;
                var date_db = data.date;
                var month_db = date_db.split(" ")[0];
                var day_db = date_db.split(" ")[1].split(",")[0];
                var year_db = date_db.split(" ")[2];
                if (day_db < 10) {
                    day_db = day_db.split("0")[1];
                }
                const calDays = document.getElementById("days").children;
                const month_cal = document.getElementById("monthCalnder").innerText;
                var importantDay = "";
                function getdata_Calender() {
                    return database.ref('/Users/' + user.uid + '/setting/firstSetting/').once('value').then(snapshot => {

                        // console.log(importantDay.split(" ")[1].split(",")[0]);
                        // console.log(7);
                        return snapshot.val()


                    }).catch((x) => {
                        console.log(x);
                    });
                }

                getdata_Calender().then(doc => {
                    // console.log(doc);

                    Limit = doc.cuurentCash;
                    importantDay = doc.importantDay;

                    // console.log(importantDay);

                    // console.log(importantDay);
                    if (importantDay) {
                        var impDate = importantDay.split(" ")[1].split(",")[0];

                        for (var i = 0; i < calDays.length; i++) {

                            var typedate = calDays[i].className;
                            var numdate = calDays[i].textContent;
                            var datenumDb = 0;
                            var datenumCalender = 0;
                            if (typedate == "prev-date" || typedate == "next-date") {

                            } else {
                                var fullMonthIndex = hebMonth.indexOf(month_cal);
                                var shortMonth = monthShort[fullMonthIndex];
                                var dayRow = document.getElementById(impDate).classList.add("importantday");

                                if (day_db == numdate && shortMonth == month_db && year_db == "2020") {

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
                                    outComCal.textContent = "הוצאות : " + Math.abs(cash_flow_cal[1]) + ' ש"ח ';
                                    incomCal.style.color = "#50dd50";
                                    outComCal.style.color = "#ff3d67";
                                    box_in_out.setAttribute("class", "box_in_out text-right");
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

                    } else {

                        settingPage.style.display = 'block';
                        homePage.style.display = 'none';
                        tablePage.style.display = 'none';
                        HomeRow.style.background = "none";
                        TableRow.style.background = "none";
                        savingRow.style.background = "none";
                        save_loan_Page.style.display = 'none';
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
                        savingTitle.classList.remove("text-info");
                        savingTitle.classList.add("text-white");
                        isaving.classList.remove("text-info");
                        isaving.classList.add("text-white");



                    }


                })

            }

            function setSetting() {
                // function cleanDataChips() {
                //     chipsIn.innerHTML = "";
                //     chipsOut.innerHTML = "";
                //     getDataFromSettingForm();
                // }

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
                var searchKeyWord = document.getElementById("searchKeyWord");
                var groupInOutSetting = document.getElementsByName("groupInOutSetting");

                // formWordSetting.addEventListener("submit", e => {
                //     e.preventDefault()
                //     var val = searchKeyWord.value;
                //     if (val !== "") {
                //         groupInOutSetting.forEach(function (y) {

                //             if (y.checked) {
                //                 if (y.id == "outChoise") {
                //                     addKeyWord(val, "out");

                //                 } else if (y.id == "inChoise") {
                //                     addKeyWord(val, "in");
                //                 }
                //             }
                //         });
                //     } else {
                //         alert("חסר פרטים!");
                //     }
                //     chipsIn.innerHTML = "";
                //     chipsOut.innerHTML = "";
                //     getDataFromSettingForm();
                // });

                function getDataFromSettingForm() {

                    var defaultOutText = [];
                    var defaultInText = [];
                    var inWord = [];
                    var outWord = [];
                    let data = {};
                    // database.ref('/Users/' + user.uid + '/setting/text/').once('value').then(function (snapshot) {

                    //     var currentval = snapshot.val();
                    //     let keys = Object.keys(currentval);


                    //     for (var i = 0; i < keys.length; i++) {
                    //         var uid = keys[i];

                    //         database.ref('/Users/' + user.uid + '/setting/text/' + uid).on('value', function (snapshot) {

                    //             let newval = snapshot.val();
                    //             let newKeys = Object.keys(newval);

                    //             if (uid == 'out') {
                    //                 for (var j = 0; j < newKeys.length; j++) {
                    //                     var outuid = newKeys[j];
                    //                     var currentObject = newval[outuid];
                    //                     outWord.push([outuid, currentObject.word]);
                    //                 }
                    //             } else if (uid == "in") {
                    //                 for (var j = 0; j < newKeys.length; j++) {
                    //                     var inuid = newKeys[j];
                    //                     var currentObject = newval[inuid];
                    //                     inWord.push([inuid, currentObject.word]);
                    //                 }
                    //             }
                    //         });
                    //     }

                    //     defaultOutText.push(...outWord);
                    //     defaultInText.push(...inWord);
                    //     defaultOutText.forEach(T => {

                    //         let chipBox = document.createElement("div");
                    //         let iconExit = document.createElement("span");
                    //         let textChip = document.createElement("span");
                    //         textChip.textContent = T[1];
                    //         iconExit.textContent = "x";
                    //         chipBox.setAttribute('id', "chipBox" + T[0]);
                    //         textChip.setAttribute('class', 'text-right col-11 mt-1 px-0 py-0');
                    //         chipBox.setAttribute("class", "align-middle chip row col-5 mb-2 mr-1 ml-1");
                    //         iconExit.setAttribute("class", "text-left col-1 mt-1  px-0 py-0");
                    //         chipBox.appendChild(iconExit);
                    //         chipBox.appendChild(textChip);
                    //         chipsOut.appendChild(chipBox);
                    //         iconExit.addEventListener("click", e => {
                    //             var rowcorrect = document.getElementById('chipBox' + T[0]);
                    //             var row = rowcorrect.id;
                    //             var split = row.split("chipBox");
                    //             database.ref('/Users/' + user.uid + '/setting/text/out/' + split[1]).remove().then(function () {

                    //             }).catch(function (err) {
                    //             });
                    //             cleanDataChips();

                    //         })
                    //     });

                    //     defaultInText.forEach(T => {

                    //         let chipBox = document.createElement("div");
                    //         let iconExit = document.createElement("span");
                    //         let textChip = document.createElement("span");
                    //         textChip.textContent = T[1];
                    //         iconExit.textContent = "x";
                    //         chipBox.setAttribute('id', "chipBox" + T[0]);
                    //         textChip.setAttribute('class', 'text-right col-11 mt-1 px-0 py-0')
                    //         chipBox.setAttribute("class", "align-middle chip row col-5 mb-2 mr-1 ml-1");
                    //         iconExit.setAttribute("class", "text-left col-1 mt-1  px-0 py-0");
                    //         chipBox.appendChild(iconExit);
                    //         chipBox.appendChild(textChip);
                    //         chipsIn.appendChild(chipBox);
                    //         iconExit.addEventListener("click", e => {

                    //             var rowcorrect = document.getElementById('chipBox' + T[0]);
                    //             var row = rowcorrect.id;
                    //             var split = row.split("chipBox");
                    //             console.log(split[1]);
                    //             database.ref('/Users/' + user.uid + '/setting/text/in/' + split[1]).remove().then(function () {

                    //             }).catch(function (err) {
                    //             });
                    //             cleanDataChips();
                    //         })
                    //     });

                    // }).catch((err) => {
                    //     console.log(err);
                    // });
                    function getDataWord() {
                        return database.ref('/Users/' + user.uid + '/setting/Keywords/').once('value').then(function (snapshot) {

                            return snapshot.val()
                        });
                    }
                    getDataWord().then(currentval => {
                        let keys = Object.keys(currentval);
                        var div = "";
                        var divin = "";
                        var divout = "";
                        var divsave = "";
                        var divloan = "";

                        for (var i = 0; i < keys.length; i++) {
                            var uid = keys[i];
                            console.log(currentval[uid]);
                            if (uid == "in") {
                                var newsKeyIn = Object.keys(currentval[uid]);
                                for (var h = 0; h < newsKeyIn.length; h++) {
                                    var datawordin = currentval[uid][newsKeyIn[h]].word;
                                    console.log(datawordin);
                                    divin += `<div class="col-5  mx-2  mt-2 p-0"><div class="row  m-0 p-0 col-12 chip"><div class="col-2 m-0 px-2 py-1" id="inExitWord in ${newsKeyIn[h]}">x</div><div class="col-10 m-0 px-2 py-1">${datawordin}</div></div></div>`;
                                }
                            }
                            if (uid == "out") {
                                var newsKeyOut = Object.keys(currentval[uid]);
                                for (var g = 0; g < newsKeyOut.length; g++) {
                                    var datawordout = currentval[uid][newsKeyOut[g]].word;
                                    console.log(datawordout);
                                    divout += `<div class="col-5 mx-2  mt-2 p-0"><div class="row m-0 p-0 col-12 chip"><div class="col-2 m-0 px-2 py-1" id="outExitWord out ${newsKeyOut[g]}">x</div><div class="col-10 m-0 px-2 py-1">${datawordout}</div></div></div>`;

                                }
                            }
                            if (uid == "save") {
                                var newsKeySave = Object.keys(currentval[uid]);
                                for (var k = 0; k < newsKeySave.length; k++) {
                                    var datawordsave = currentval[uid][newsKeySave[k]].word;
                                    console.log(datawordsave);
                                    divsave += `<div class="col-5 mx-2 mt-2 p-0"><div class="row m-0 p-0 col-12 chip"><div class="col-2 m-0 px-2 py-1" id="saveExitWord save ${newsKeySave[k]}">x</div><div class="col-10 m-0 px-2 py-1">${datawordsave}</div></div> </div>`;

                                }
                            }
                            if (uid == 'loan') {
                                var newsKeyLoan = Object.keys(currentval[uid]);
                                for (var w = 0; w < newsKeyLoan.length; w++) {
                                    var datawordloan = currentval[uid][newsKeyLoan[w]].word;
                                    console.log(datawordloan);
                                    divloan += `<div class="col-5 mx-2  mt-2 p-0"><div class="row m-0 p-0 col-12 chip"><div class="col-2 m-0 px-2 py-1" id="loanExitWord loan ${newsKeyLoan[w]}">x</div><div class="col-10 m-0 px-2 py-1">${datawordloan}</div></div></div>`;

                                }
                            }

                            console.log(divsave);
                            console.log(divloan);
                            console.log(divout);
                            console.log(divin);



                            // database.ref('/Users/' + user.uid + '/setting/Keywords/' + uid).on('value', function (snapshot) {
                            // middleSetting.innerHTML = div
                            //     let newval = snapshot.val();
                            //     let newKeys = Object.keys(newval);

                            //     if (uid == 'out') {
                            //         for (var j = 0; j < newKeys.length; j++) {
                            //             var outuid = newKeys[j];
                            //             var currentObject = newval[outuid];
                            //             outWord.push([outuid, currentObject.word]);
                            //         }
                            //     } else if (uid == "in") {
                            //         for (var j = 0; j < newKeys.length; j++) {
                            //             var inuid = newKeys[j];
                            //             var currentObject = newval[inuid];
                            //             inWord.push([inuid, currentObject.word]);
                            //         }
                            //     }
                            // });
                        }
                        inWords.innerHTML = divin;
                        outWords.innerHTML = divout;
                        LoanWords.innerHTML = divloan;
                        saveWords.innerHTML = divsave;


                    }).catch((err) => {
                        console.log(err);
                    });


                    // defaultOutText.push(...outWord);
                    // defaultInText.push(...inWord);
                    // defaultOutText.forEach(T => {

                    //     let chipBox = document.createElement("div");
                    //     let iconExit = document.createElement("span");
                    //     let textChip = document.createElement("span");
                    //     textChip.textContent = T[1];
                    //     iconExit.textContent = "x";
                    //     chipBox.setAttribute('id', "chipBox" + T[0]);
                    //     textChip.setAttribute('class', 'text-right col-11 mt-1 px-0 py-0');
                    //     chipBox.setAttribute("class", "align-middle chip row col-5 mb-2 mr-1 ml-1");
                    //     iconExit.setAttribute("class", "text-left col-1 mt-1  px-0 py-0");
                    //     chipBox.appendChild(iconExit);
                    //     chipBox.appendChild(textChip);
                    //     chipsOut.appendChild(chipBox);
                    //     iconExit.addEventListener("click", e => {
                    //         var rowcorrect = document.getElementById('chipBox' + T[0]);
                    //         var row = rowcorrect.id;
                    //         var split = row.split("chipBox");
                    //         database.ref('/Users/' + user.uid + '/setting/text/out/' + split[1]).remove().then(function () {

                    //         }).catch(function (err) {
                    //         });
                    //         cleanDataChips();

                    //     })
                    // });

                    // defaultInText.forEach(T => {

                    //     let chipBox = document.createElement("div");
                    //     let iconExit = document.createElement("span");
                    //     let textChip = document.createElement("span");
                    //     textChip.textContent = T[1];
                    //     iconExit.textContent = "x";
                    //     chipBox.setAttribute('id', "chipBox" + T[0]);
                    //     textChip.setAttribute('class', 'text-right col-11 mt-1 px-0 py-0')
                    //     chipBox.setAttribute("class", "align-middle chip row col-5 mb-2 mr-1 ml-1");
                    //     iconExit.setAttribute("class", "text-left col-1 mt-1  px-0 py-0");
                    //     chipBox.appendChild(iconExit);
                    //     chipBox.appendChild(textChip);
                    //     chipsIn.appendChild(chipBox);
                    //     iconExit.addEventListener("click", e => {

                    //         var rowcorrect = document.getElementById('chipBox' + T[0]);
                    //         var row = rowcorrect.id;
                    //         var split = row.split("chipBox");
                    //         console.log(split[1]);
                    //         database.ref('/Users/' + user.uid + '/setting/text/in/' + split[1]).remove().then(function () {

                    //         }).catch(function (err) {
                    //         });
                    //         cleanDataChips();
                    //     })
                    // });



                }

                document.addEventListener('click', e => {
                    var id = e.target.id;
                    var splitid = id.split(" ")[2];
                    var spittype = id.split(" ")[1];
                    console.log(splitid, spittype);
                    database.ref('/Users/' + user.uid + '/setting/Keywords/' + spittype + '/' + splitid).remove().then(function () {

                    }).catch(function (err) {
                        console.log(err);
                    });
                    inWords.innerHTML = "";
                    outWords.innerHTML = "";
                    LoanWords.innerHTML = "";
                    saveWords.innerHTML = "";
                    getDataFromSettingForm();
                })
                // function getOptionForSettingForm() {

                //     var OptionOut = [
                //         [0, "עבודה"],
                //         [1, " חשמל ומים"],
                //         [2, "חשמל"],
                //         [3, "מים"],
                //         [4, "ביטוחים"],
                //         [5, "ביטוח חיים"],
                //         [6, 'שכירות'],
                //         [7, "רכב"],
                //         [8, "דלק"]

                //     ]

                //     var OptionIn = [

                //         [0, "משכורת"],
                //         [1, "לקוחות"],
                //         [2, "עסק"],

                //     ]

                //     OptionOut.forEach(T => {
                //         database.ref('/Users/' + user.uid + '/setting/text/out/').orderByChild("word").equalTo(T[1]).once("value", snapshot => {
                //             if (snapshot) {
                //                 const userData = snapshot.val();
                //                 if (userData == null) {
                //                     let chipBox = document.createElement("div");
                //                     let iconadd = document.createElement("span");
                //                     let textChip = document.createElement("span");
                //                     textChip.textContent = T[1];
                //                     iconadd.textContent = "+";
                //                     chipBox.setAttribute("class", "align-middle chip row col-5 mb-2 mr-1 ml-1");
                //                     chipBox.setAttribute('id', "chip_Box" + T[0]);
                //                     textChip.setAttribute('id', "span_out" + T[0]);
                //                     textChip.setAttribute('class', 'text-right col-11 mt-1 px-0 py-0');
                //                     iconadd.setAttribute("class", "text-left col-1 mt-1  px-0 py-0");
                //                     chipBox.appendChild(iconadd);
                //                     chipBox.appendChild(textChip);
                //                     chipsOutOption.appendChild(chipBox);
                //                     iconadd.addEventListener("click", e => {
                //                         e.preventDefault();
                //                         var rowcorrect = document.getElementById('chip_Box' + T[0]);
                //                         var rowa = document.getElementById('span_out' + T[0]);
                //                         var row = rowcorrect.id;
                //                         var split = row.split("chip_Box");
                //                         var value = rowa.innerHTML;
                //                         addKeyWord(value, "out");

                //                         cleanDataChips();
                //                         cleanRefDataChips();

                //                     })
                //                 } else if (userData) {

                //                 }

                //             }
                //         }).catch((err) => {
                //             console.log(err);
                //         });
                //     });

                //     OptionIn.forEach(T => {
                //         database.ref('/Users/' + user.uid + '/setting/text/in/').orderByChild("word").equalTo(T[1]).once("value", snapshot => {
                //             if (snapshot) {
                //                 const userData = snapshot.val();
                //                 if (userData == null) {
                //                     let chipBox = document.createElement("div");
                //                     let iconadd = document.createElement("span");
                //                     let textChip = document.createElement("span");
                //                     textChip.textContent = T[1];
                //                     iconadd.textContent = "+";
                //                     chipBox.setAttribute('id', "chip_Box" + T[0]);
                //                     chipBox.setAttribute("class", "align-middle chip row col-5 mb-2 mr-1 ml-1");
                //                     iconadd.setAttribute("class", "text-left col-1 mt-1  px-0 py-0");
                //                     textChip.setAttribute('id', "span_in" + T[0]);
                //                     textChip.setAttribute('class', "text-right col-11 mt-1 px-0 py-0");
                //                     chipBox.appendChild(iconadd);
                //                     chipBox.appendChild(textChip);
                //                     chipsInOption.appendChild(chipBox);

                //                     iconadd.addEventListener("click", e => {
                //                         e.preventDefault();
                //                         var rowcorrect = document.getElementById('chip_Box' + T[0]);
                //                         var rowa = document.getElementById('span_in' + T[0]);
                //                         var row = rowcorrect.id;
                //                         var split = row.split("chip_Box");
                //                         var value = rowa.innerHTML;
                //                         addKeyWord(value, "in");
                //                         cleanDataChips();
                //                         cleanRefDataChips();
                //                     })
                //                 } else if (userData) {

                //                 }
                //             }
                //         }).catch((err) => {
                //             console.log(err);
                //         });;
                //     });

                // }
                // getOptionForSettingForm();
                getDataFromSettingForm();

            }

            setSetting();
            renderCalender();
            // var arrayHiger = [1, 2, 3, 4, 5, 6, 7, 8]
            function CHECK_HIGHER(arr) {
                return Math.max(...arr)

            }
            // const num = CHECK_HIGHER(arrayHiger)
            // console.log(num);
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
                            if (currentObject.wayPay) {
                                totalOut -= currectnum;
                            }
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
                        // console.log(id, currentObject, StatusCash, currectLimit, arrayafter);
                        if (currentObject.wayPay !== "כרטיס אשראי" && currentObject.wayPay !== "פעילות מרובה") {
                            getDatesFromCalender(id, currentObject, StatusCash, currectLimit, arrayafter);



                        }
                        if (currentObject.wayPay == "פעילות מרובה") {
                            var chash = currentObject.chashFlow;
                            var key__s = Object.keys(chash);
                            for (var h = 0; h < key__s.length; h++) {
                                var obj = chash[key__s[h]];
                                if (obj.wayPay !== "כרטיס אשראי") {
                                    getDatesFromCalender(id, obj, StatusCash, currectLimit, arrayafter);

                                }
                            }
                        }
                    }

                });
            }

            function FormatDate(Date) {
                var split = Date.split("-");
                var monthy = split[1];
                if (monthy < 10) {
                    monthy = monthy.split("")[1];
                }
                var corMonth = Object.keys(month);
                var Month = corMonth[monthy - 1];
                var year = split[0];
                var day = split[2];
                var newDate = Month + " " + day + ", " + year;
                return newDate;
            }

            incomingForm.addEventListener('submit', (e) => {

                e.preventDefault();
                // e.stopPropagation();
                var st = false;
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

                var infoCashIN = infoIncoimg.value;
                var TypeCashIN = typeIncoming.value;
                var dateCashIN = dateIncome.value;
                var date_fornmat = FormatDate(dateCashIN);
                console.log(date_fornmat);
                var totalCashIN = totalcash.value;

                if (dateCashIN == "") {
                    dateIncome.classList.remove("is-valid");
                    dateIncome.classList.add("is-invalid");
                } else {
                    dateIncome.classList.remove("is-invalid");
                    dateIncome.classList.add("is-valid");
                }
                if (TypeCashIN == "") {
                    typeIncoming.classList.remove("is-valid");
                    typeIncoming.classList.add("is-invalid");
                } else {
                    typeIncoming.classList.remove("is-invalid");
                    typeIncoming.classList.add("is-valid");
                }
                if (totalCashIN == "") {
                    totalcash.classList.remove("is-valid");
                    totalcash.classList.add("is-invalid");
                } else {
                    totalcash.classList.remove("is-invalid");
                    totalcash.classList.add("is-valid");
                }

                if (dateCashIN !== "" && totalCashIN !== "" && TypeCashIN !== "") {
                    addDb("in", infoCashIN, TypeCashIN, date_fornmat, totalCashIN, typePayment, type_Way_Pay, st);
                    // TABLE_PAGE_GET_DATA();
                    SAVEWORD(TypeCashIN, "in")
                }
                // var xs = document.querySelectorAll(".sidebar");
                // console.log(xs[1]);
                // xs.forEach((x) => {
                //     var key = x.style.color;
                //     var row = x.children[0].children[0].children[0];
                //     var arttibute = row.classList[1];
                //     console.log(arttibute);
                //     if (arttibute == "text-white") {
                //         console.log(x.children[0].children[0].children[1])
                //     }
                // })
                // HOME_PAGE_GET_DATA_FOR_WEEKLY();
                // var key = document.getElementById("side")

                console.log(xs[1]);
                xs.forEach((x) => {

                    var row = x.children[0].children[0].children[0];
                    var arttibute = row.classList[1];

                    if (arttibute == "text-info") {
                        var page = x.children[0].children[0].children[1].innerHTML;

                        if (page == 'דוחות') {
                            TABLE_PAGE_GET_DATA();
                            console.log('דוחות');

                        } else {
                            console.log('דף הבחית');
                            HOME_PAGE_GET_DATA_FOR_WEEKLY();
                        }
                    }
                });



                // SAVE_AUTO_WORD(TypeCashIN, "inc")
            });

            outcomingForm.addEventListener('submit', (e) => {
                e.preventDefault();
                // e.stopPropagation();

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


                groupchoose.forEach(function (x) {
                    if (x.checked) {
                        if (x.id == "must") {
                            return st = true;
                        }
                    }
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
                var totalCashOUT = '-' + total_Out.value;
                var tnum = total_Out.value;
                console.log(tnum);
                if (dateCashOUT == "") {
                    dateOut.classList.remove("is-valid");
                    dateOut.classList.add("is-invalid");
                } else {
                    dateOut.classList.remove("is-invalid");
                    dateOut.classList.add("is-valid");
                }
                if (TypeCashOUT == "") {
                    typeOut.classList.remove("is-valid");
                    typeOut.classList.add("is-invalid");
                } else {
                    typeOut.classList.remove("is-invalid");
                    typeOut.classList.add("is-valid");
                }
                if (tnum == "" || tnum == 0) {
                    total_Out.classList.remove("is-valid");
                    total_Out.classList.add("is-invalid");
                } else {
                    total_Out.classList.remove("is-invalid");
                    total_Out.classList.add("is-valid");
                }

                if (dateCashOUT !== "" && tnum !== "" && TypeCashOUT !== "" && tnum !== 0) {
                    var date_fornmat_out = FormatDate(dateCashOUT);
                    var monthFormat = date_fornmat_out.split(" ")[0];
                    if (type_Way_Pay == "כרטיס אשראי") {

                        var importDate = "";
                        var correctDate = "";
                        database.ref('/Users/' + user.uid + '/setting/firstSetting/').on('value', function (snapshot) {
                            importDate = snapshot.val().importantDay;
                            var day = importDate.split(" ")[1].split(",")[0]; // 10
                            var yearVal = date_fornmat_out.split(" ")[2]; // year value
                            var dayVal = date_fornmat_out.split(" ")[1].split(",")[0]; // day value
                            var monthVal = monthFormat; // month value
                            if (dayVal < day) {
                                correctDate = createDates(monthVal, day, yearVal);
                            } else if (dayVal >= day) {
                                var indexMonth = labelx.indexOf(monthVal);
                                var nextMonth = Number(indexMonth) + 1;
                                var cormonth = labelx[nextMonth];
                                correctDate = createDates(cormonth, day, yearVal);
                            }
                        });
                        var numday = Date.parse(correctDate);
                        addDb("out", infoCashOUT, TypeCashOUT, correctDate, totalCashOUT, typePaymentout, 'כרטיס אשראי הורדה', false);
                    }
                    console.log("out", infoCashOUT, TypeCashOUT, date_fornmat_out, totalCashOUT, typePaymentout, type_Way_Pay, st);
                    addDb("out", infoCashOUT, TypeCashOUT, date_fornmat_out, totalCashOUT, typePaymentout, type_Way_Pay, st);
                    SAVEWORD(TypeCashOUT, "out");
                }
                // HOME_PAGE_GET_DATA_FOR_WEEKLY();

                // TABLE_PAGE_GET_DATA();



                // if (TypeCashOUT !== "" && dateCashOUT !== "") {
                //     var date_fornmat_out = FormatDate(dateCashOUT);
                //     var monthFormat = date_fornmat_out.split(" ")[0];
                //     if (type_Way_Pay == "כרטיס אשראי") {

                //         var importDate = "";
                //         var correctDate = "";
                //         database.ref('/Users/' + user.uid + '/setting/firstSetting/').on('value', function (snapshot) {
                //             importDate = snapshot.val().importantDay;
                //             var day = importDate.split(" ")[1].split(",")[0]; // 10
                //             var yearVal = date_fornmat_out.split(" ")[2]; // year value
                //             var dayVal = date_fornmat_out.split(" ")[1].split(",")[0]; // day value
                //             var monthVal = monthFormat; // month value
                //             if (dayVal < day) {
                //                 correctDate = createDates(monthVal, day, yearVal);
                //             } else if (dayVal >= day) {
                //                 var indexMonth = labelx.indexOf(monthVal);
                //                 var nextMonth = Number(indexMonth) + 1;
                //                 var cormonth = labelx[nextMonth];
                //                 correctDate = createDates(cormonth, day, yearVal);
                //             }
                //         });
                //         var numday = Date.parse(correctDate);
                //         addDb("out", infoCashOUT, TypeCashOUT, correctDate, totalCashOUT, typePaymentout, 'כרטיס אשראי הורדה', false);
                //     }
                //     console.log("out", infoCashOUT, TypeCashOUT, date_fornmat_out, totalCashOUT, typePaymentout, type_Way_Pay, st);
                //     addDb("out", infoCashOUT, TypeCashOUT, date_fornmat_out, totalCashOUT, typePaymentout, type_Way_Pay, st);
                //     HOME_PAGE_GET_DATA_FOR_WEEKLY();

                // } else if (TypeCashOUT !== "") {
                //     alertBox.innerHTML = Alert("חסר תאריך")
                // } else if (dateCashOUT !== "") {
                //     alertBox.innerHTML = Alert("חסר שם לעסקה")
                // } else if (dateCashIN == "" && TypeCashIN == "") {
                //     alertBox.innerHTML = Alert("חסרים פרטים")
                // }
                // TABLE_PAGE_GET_DATA();
                console.log(xs[1]);
                xs.forEach((x) => {

                    var row = x.children[0].children[0].children[0];
                    var arttibute = row.classList[1];

                    if (arttibute == "text-info") {
                        var page = x.children[0].children[0].children[1].innerHTML;

                        if (page == 'דוחות') {
                            TABLE_PAGE_GET_DATA();
                            console.log('דוחות');

                        } else {
                            console.log('דף הבחית');
                            HOME_PAGE_GET_DATA_FOR_WEEKLY();
                        }
                    }
                });
                // SAVE_AUTO_WORD(TypeCashOUT, "outc")
            });

            function TABLE_PAGE_GET_DATA() {

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
                var keys = "";
                var postArray = "";

                // database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').on('value', function (snapshot) {
                //     console.log("2");
                //     postArray = snapshot.val();
                //     keys = Object.keys(postArray);

                // });

                function getdatattable() {
                    return database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').once('value').then(function (snapshot) {
                        console.log("8");
                        return postArray = snapshot.val();

                    }).catch((err) => {
                        console.log(err);
                    });

                }
                getdatattable().then((edata) => {
                    keys = Object.keys(edata);
                    console.log("9");

                    // console.log(edata);
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
                    var arraydata = [];
                    for (var i = 0; i < keys.length; i++) {

                        var sum = 0;
                        var id = keys[i];
                        let totalIncome = 0;
                        let totalOut = 0;
                        var subDataInOut = [];
                        var currentObject = edata[id];
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
                        } else {
                            if (id < num_newdate) {
                            } else {
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
                                        console.log("1");

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
                                                        if (sub_currentObject.wayPay !== 'כרטיס אשראי') {
                                                            typeExpend.push([sub_title, sub_currectnum]);
                                                        }
                                                    } else if (sub_type == "in") {
                                                    }
                                                }
                                            });
                                        } else if (currentObject.title !== "פעילות מרובה") {
                                            if (type == "out") {
                                                if (way_pay !== 'כרטיס אשראי') {
                                                    typeExpend.push([currentObject.title, currectnum]);
                                                }
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
                                                if (postArraySub) {
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
                                                            if (sub_currentObject.wayPay !== 'כרטיס אשראי') {
                                                                typeExpend.push([sub_title, sub_currectnum]);

                                                            }
                                                        } else if (sub_type == "in") {

                                                        }
                                                    }
                                                }


                                            });

                                        } else if (currentObject.title !== "פעילות מרובה") {

                                            if (type == "out") {
                                                if (way_pay !== "כרטיס אשראי") {
                                                    typeExpend.push([currentObject.title, currectnum]);
                                                }
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
                                    if (dataDb.type == 'out') {
                                        if (dataDb.wayPay !== "כרטיס אשראי") {
                                            subOut += dataDb.totalCash;
                                            card_Sum += dataDb.totalCash;
                                            y += dataDb.totalCash;
                                        }
                                    } else if (dataDb.type == 'in') {
                                        subIn += dataDb.totalCash;
                                    }
                                }
                                cardSum += card_Sum;
                                dayWithMultiCashFlow.push([date, subIn, subOut]);
                            });

                        } else {
                            if (type == 'out') {
                                if (way_pay !== "כרטיס אשראי") {
                                    cardSum += currectnum;
                                    dayWithMultiCashFlow.push([date, 0, currectnum]);
                                }
                            } else if (type == 'in') {
                                dayWithMultiCashFlow.push([date, currectnum, 0]);
                            }
                        }
                    }

                    groupView.forEach(e => {
                        var key = e.checked;
                        var uid = e.id;
                        if (key) {
                            if (uid == "chooseMonthly") {
                                var newArray = [];
                                var sumin = 0;
                                var sumout = 0;
                                let totalArray = [];

                                sumDuplicate(typeExpend);
                                chartTypeChart(typeExpend);

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
                                });

                                loadIncomingOutForTable(sumin, sumout);
                                finalArray = days_Arr;
                                chartTableYearly(finalArray);
                            } else if (uid == "chooseBitweenDates") {
                                var newarray = [];
                                var sumin = 0;
                                var sumout = 0;
                                sumDuplicate(typeExpend);
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
                                    var data = snapshot.val();
                                    var statusCash = data.cuurentCash;
                                    data = statusCash;
                                });
                                var start = data;
                                var num_in = 0;
                                var num_out = 0;
                                dayWithMultiCashFlow.forEach(d => {

                                    var date = d[0].split(" ")[0];
                                    Month_Arr.forEach(x => {

                                        if (x[0] == date) {
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
                                    o[0] = switch_Eng_To_Heb_Month(o[0]);
                                    start += sum;
                                    loadYearly(o, start);
                                })
                                chartTableYearly(Month_Arr.reverse());
                                var incom = 0;
                                var outcom = 0;
                                Month_Arr.forEach(g => {
                                    incom += g[1];
                                    outcom += g[2];
                                });
                                var newArray = [["הכנסה", incom], ["הוצאה", outcom]];
                                chartTypeChart(newArray);
                                loadIncomingOutForTable(num_in, num_out);



                            } else if (uid == "choosWeekly") {

                                var num_in = 0;
                                var num_out = 0;
                                sumDuplicate(typeExpend);
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
                }).catch((err) => {
                    console.log(err);
                });



            }

            function HOME_PAGE_GET_DATA_FOR_WEEKLY() {
                // console.log(2);

                function setDataToWayPayBoxes(d, c, p, b, bt, cr) {

                    num_directDebit.textContent = d;
                    num_cash.textContent = c;
                    num_credit.textContent = cr;
                    num_transferBank.textContent = b;
                    num_paper.textContent = p;
                    num_bit.textContent = bt;

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
                var keys = "";
                var postArray = "";
                var s = "";


                let keys_ = "";
                let postArray_ = {};
                function getdata() {
                    return database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').once('value').then(snapshot => {
                        // console.log("2");

                        return snapshot.val();

                    }).catch((err) => {
                        console.log(err);
                    });
                }
                getdata().then((d) => {

                    // console.log(d);
                    postArray = d;
                    // console.log(postArray);
                    const newDate = createNewDate();
                    if (postArray) {
                        // postArray = snapshot.val();
                        keys = Object.keys(postArray);

                        // console.log(postArray);


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
                        var SUMMUST = 0;
                        var SUMSAVE = 0;
                        var dayWithMultiCashFlow = [];
                        var loan = 0;
                        var save = 0;

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

                            if (wayPay.trim() == 'חסכון') {
                                save += currectnum;
                            }
                            if (wayPay.trim() == 'הלוואה') {
                                loan += currectnum;
                            }
                            // if (wayPay.trim() == 'כרטיס אשראי הורדה') {
                            //     credit += currectnum;
                            // }
                            if (currentObject.chashFlow) {

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
                                                // console.log(i);

                                                database.ref('/Users/' + user.uid + '/cashflow/' + id + "/chashFlow/").orderByChild('number').on('value', snapshot => {

                                                    let subPostArray = snapshot.val();
                                                    let SubKeys = Object.keys(subPostArray);
                                                    var subIn = 0;
                                                    var subOut = 0;
                                                    var must = 0;
                                                    var saving = 0;
                                                    // console.log(SubKeys);

                                                    for (var k = 0; k < SubKeys.length; k++) {
                                                        var newuid = SubKeys[k];
                                                        database.ref('/Users/' + user.uid + '/cashflow/' + id + "/chashFlow/" + newuid + '/').on('value', snap => {
                                                            if (snap) {
                                                                var dataDb = snap.val();
                                                                if (dataDb.wayPay == 'חסכון') {
                                                                    // console.log(k);
                                                                    saving += dataDb.totalCash;
                                                                }
                                                                if (dataDb.after == true || dataDb.after == "true") {
                                                                    console.log(k);
                                                                    must += dataDb.totalCash;
                                                                }
                                                                if (dataDb.type == 'out') {

                                                                    if (dataDb.wayPay !== 'כרטיס אשראי') {
                                                                        subOut += dataDb.totalCash;
                                                                    }
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
                                                                    } else if (dataDb.wayPay == 'כרטיס אשראי הורדה') {
                                                                        credit += dataDb.totalCash;
                                                                    }

                                                                } else if (dataDb.type == 'in') {
                                                                    subIn += dataDb.totalCash;
                                                                }
                                                            } else {

                                                            }

                                                        });
                                                    }
                                                    // console.log(must);
                                                    SUMMUST += must;
                                                    SUMSAVE += saving;
                                                    dayWithMultiCashFlow.push([date, subIn, subOut]);
                                                    SUMIN += subIn;
                                                    if (wayPay !== 'כרטיס אשראי') {
                                                        SUMOUT += subOut;
                                                    }
                                                });

                                            } else {
                                                if (type == 'out') {
                                                    if (checkTemp == true || checkTemp == "true") {
                                                        SUMMUST += currectnum;
                                                    }
                                                    if (wayPay == 'חסכון') {
                                                        SUMSAVE += currectnum;
                                                    }
                                                    if (wayPay !== 'כרטיס אשראי') {
                                                        dayWithMultiCashFlow.push([date, 0, currectnum]);
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
                                                    } else if (wayPay == "אפליקציית ביט") {
                                                        bit += currectnum;
                                                    } else if (wayPay == 'כרטיס אשראי הורדה') {
                                                        credit += currectnum;
                                                    }
                                                } else if (type == 'in') {
                                                    SUMIN += currectnum;
                                                    dayWithMultiCashFlow.push([date, currectnum, 0]);
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
                                                    var must_b = 0;

                                                    var saving_b = 0;

                                                    for (var k = 0; k < SubKeys.length; k++) {

                                                        var uid = SubKeys[k];

                                                        console.log(uid, k);

                                                        database.ref('/Users/' + user.uid + '/cashflow/' + id + "/chashFlow/" + uid + '/').on('value', snap => {

                                                            var dataDb = snap.val();
                                                            if (dataDb.after == true || dataDb.after == "true") {
                                                                must_b += dataDb.totalCash;
                                                            }
                                                            if (dataDb.wayPay == 'חסכון') {
                                                                saving_b += currectnum;
                                                            }
                                                            console.log(dataDb.after == true, dataDb.totalCash, dataDb.date);
                                                            if (dataDb.type == 'out') {

                                                                if (dataDb.wayPay !== 'כרטיס אשראי') {
                                                                    subOut += dataDb.totalCash;
                                                                }
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
                                                                } else if (dataDb.wayPay == 'כרטיס אשראי הורדה') {

                                                                    credit += dataDb.totalCash;
                                                                }

                                                            } else if (dataDb.type == 'in') {

                                                                subIn += dataDb.totalCash;

                                                            }
                                                            console.log(must_b);

                                                        });
                                                    }

                                                    SUMMUST += must_b;
                                                    SUMSAVE += saving_b;
                                                    SUMIN += subIn;
                                                    if (wayPay !== 'כרטיס אשראי') {
                                                        SUMOUT += subOut;
                                                    }

                                                    dayWithMultiCashFlow.push([date, subIn, subOut]);

                                                });

                                            } else {

                                                if (type == 'out') {

                                                    dayWithMultiCashFlow.push([date, 0, currectnum]);
                                                    if (checkTemp == true || checkTemp == "true") {
                                                        SUMMUST += currectnum;
                                                    }
                                                    if (wayPay == 'חסכון') {
                                                        SUMSAVE += currectnum;
                                                    }
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
                                                    } else if (wayPay == 'כרטיס אשראי הורדה') {
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
                                    // console.log(inchart, outChart, dayschart);

                                    chartTable(inchart, outChart, dayschart);

                                } else if (uid == 'monthlyChart') {
                                    var data = dayWithMultiCashFlow;
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
                                    console.log(inchart, outChart, dayschart);
                                    chartTable(inchart, outChart, dayschart);
                                }
                            }
                        });

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
                        var row = document.getElementById("homeBalanceBox");
                        var iconbal = document.getElementById("iconBalance");
                        var divideMust = Math.abs(SUMOUT) / 100;
                        var precentMust = Math.abs(SUMMUST) / divideMust;
                        var sumleft = Number(100) - precentMust.toFixed(0);
                        var formatMustprectnt = precentMust.toFixed(0) + "%";
                        var divide = SUMIN / 100;
                        var precent = Math.abs(SUMOUT) / divide;
                        var currectStatusCash = document.getElementById("num_currectStatusCash");
                        var iconFlag = document.getElementById("iconFlag");

                        if (precent <= 100 && precent !== Infinity) {
                            currectStatusCash.textContent = precent.toFixed(0) + "%"
                        } else if (precent > 100 && precent !== Infinity) {
                            currectStatusCash.textContent = precent.toFixed(0) + "%"
                            iconFlag.removeAttribute("data-original-title");
                            iconFlag.setAttribute("data-original-title", "היעד לרדת מ - 100%");
                        } else if (precent == Infinity) {
                            iconFlag.removeAttribute("data-original-title");
                            iconFlag.setAttribute("data-original-title", "היעד להכניס הכנסות");
                            currectStatusCash.textContent = "-"
                        }
                        var toalinout = Number(SUMIN) + Number(Math.abs(SUMOUT));
                        var divideinout = Number(toalinout) / 100;
                        var inprec = Number(SUMIN) / divideinout.toFixed("0");
                        var outprec = Number(100) - inprec;

                        var precentExpendMust = document.getElementById("precentExpendMust");
                        var precentExpend = document.getElementById("precentExpend");
                        var leftmoneyin = document.getElementById("leftmoneyin");
                        var inn = document.getElementById("in");
                        var out = document.getElementById("out");
                        inn.textContent = "הכנסה - " + inprec.toFixed("0") + "%";
                        out.textContent = "הוצאה - " + outprec.toFixed("0") + "%";
                        precentExpend.textContent = "רשות - " + sumleft + "%";
                        precentExpendMust.textContent = "חובה - " + formatMustprectnt;
                        var check = SUMOUT + SUMIN;
                        if (check <= 0) {
                            leftmoneyin.textContent = "נשאר עוד " + Math.abs(check) + " " + 'ש"ח לנקודת איזון';
                        } else if (check > 0) {
                            leftmoneyin.textContent = "מעולה אתם ביתרה של " + Math.abs(check);
                        }

                        if (sum.toFixed(2) < 0) {
                            row.classList.remove("backgroundTitleBlue");
                            row.classList.remove("backgroundTitlein");
                            row.classList.add("backgroundTitleout");
                            iconbal.innerHTML = "arrow_downward";
                            iconbal.style.color = '#ff3d67';
                        } else if (sum.toFixed(2) > 0) {
                            row.classList.add("backgroundTitlein");
                            row.classList.remove("backgroundTitleout");
                            row.classList.remove("backgroundTitleBlue");
                            iconbal.textContent = "arrow_upward";
                            iconbal.style.color = '#17a2b8';
                        }
                        console.log("10");

                    } else {
                        console.log("empty")
                    }

                }).catch((err) => {
                    console.log(err);
                });


                // database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').on('value', snapshot => {

                // });
            }


            function LOAN_GET_DATA_HOME() {
                database.ref('/Users/' + user.uid + '/loan/').on('value', function (snap) {

                    var coreDate = createNewDate();
                    var month_Today = coreDate.month;
                    var year_Today = coreDate.year;
                    let postArr = snap.val();


                    if (postArr) {
                        let keysArr = Object.keys(postArr);
                        var arr = [];
                        var title = "";
                        var tot_cash = 0;
                        var tot_pass = 0;
                        var tot_left = 0;
                        var num = 0;


                        for (var i = 0; i < keysArr.length; i++) {
                            var uid = keysArr[i];
                            var monthPay = postArr[uid].monthlyPay;
                            var dateStart = postArr[uid].startdate;
                            var cashloan = postArr[uid].monthlyPay;
                            var totalLoan = postArr[uid].totalCash;
                            var title = postArr[uid].title;
                            var infoloan = postArr[uid].info;
                            var numYear = postArr[uid].numYear;
                            var cashLeft = postArr[uid].cashLeft;
                            var cashPaid = postArr[uid].cashPaid;
                            var monthLeft = postArr[uid].monthLeft;
                            var monthPass = postArr[uid].monthPass;
                            var totalMonth = postArr[uid].totalMonth;



                            tot_cash += Math.abs(totalLoan);
                            tot_pass += Math.abs(cashPaid);
                            tot_left += Math.abs(cashLeft);
                            num += 1;

                            // var splitD = dateStart.split(" ");
                            // var splittotal = totalLoan.split("-");
                            // var monthlypay = cashloan.split("-");
                            // var monthly_pay = monthlypay[1];
                            // var total_cash = splittotal[1];
                            // console.log(splittotal);
                            // var m = splitD[0];
                            // var d = splitD[1];
                            // var y = splitD[2];
                            // var totalMonth = numYear * 12;
                            // var sumyear = year_Today - y - 1;
                            // var sum_year = sumyear * 12;
                            // var firstYear = 12 - month[m];
                            // var monththisYear = month[month_Today];
                            // var totalmonth = monththisYear + firstYear + sum_year;
                            // arr.push([infoloan, totalMonth - totalmonth, totalmonth, monthly_pay, total_cash, title]);

                        }

                        var payuntilToday = tot_pass;
                        var precentNum = payuntilToday / Number(tot_cash) * 100;
                        var fixprecent = precentNum.toFixed(0);
                        // var total_month = ;
                        var left_pay = tot_left;
                        var divcont = ``;
                        // console.log(payuntilToday);
                        var left_An = "";
                        var Right_An = "";
                        var animation = "animation";
                        if (Math.abs(fixprecent) == 0) {
                            animation = "display"
                            left_An = "block"
                            Right_An = "block"
                        } else if (Math.abs(fixprecent) <= 10 && Math.abs(fixprecent) > 0) {
                            Right_An = "loading-1 1.5s linear forwards 1.8s"
                            left_An = "loading-0 1.5s linear forwards 1.8s"
                        } else if (Math.abs(fixprecent) < 25 && Math.abs(fixprecent) > 10) {
                            Right_An = "loading-2 1.5s linear forwards 1.8s"
                            left_An = "loading-0 1.5s linear forwards 1.8s"
                        } else if (Math.abs(fixprecent) == 25) {
                            left_An = "loading-0 1.5s linear forwards 3.3s"
                            Right_An = "loading-2-2 1.5s linear forwards 1.8s"
                        } else if (Math.abs(fixprecent) <= 30 && Math.abs(fixprecent) > 20) {
                            Right_An = "loading-3 1.5s linear forwards 1.8s"
                            left_An = "loading-0 1.5s linear forwards 1.8s"
                        } else if (Math.abs(fixprecent) < 50 && Math.abs(fixprecent) > 30) {
                            Right_An = "loading-4 1.5s linear forwards 1.8s"
                            left_An = "loading-0 1.5s linear forwards 1.8s"
                        } else if (Math.abs(fixprecent) == 50) {
                            left_An = "loading-0 1.5s linear forwards 3.3s"
                            Right_An = "loading-5 1.5s linear forwards 1.8s"
                        } else if (Math.abs(fixprecent) > 50 && Math.abs(fixprecent) < 60) {
                            Right_An = "loading-5 1.5s linear forwards 1.8s"
                            left_An = "loading-6 1.5s linear forwards 3.3s"
                        } else if (Math.abs(fixprecent) >= 60 && Math.abs(fixprecent) < 75) {
                            Right_An = "loading-5 1.5s linear forwards 1.8s"
                            left_An = "loading-7 1.5s linear forwards 3.3s"
                        } else if (Math.abs(fixprecent) == 75) {
                            Right_An = "loading-5 1.5s linear forwards 1.8s"
                            left_An = "loading-7-7 1.5s linear forwards 3.3s"

                        } else if (Math.abs(fixprecent) > 75 && Math.abs(fixprecent) < 80) {
                            Right_An = "loading-5 1.5s linear forwards 1.8s"
                            left_An = "loading-8 1.5s linear forwards 3.3s"

                        } else if (Math.abs(fixprecent) >= 80 && Math.abs(fixprecent) < 90) {

                            Right_An = "loading-5 1.5s linear forwards 1.8s"
                            left_An = "loading-9 1.5s linear forwards 3.3s"
                        } else if (Math.abs(fixprecent) >= 90 && Math.abs(fixprecent) < 100) {

                            Right_An = "loading-5 1.5s linear forwards 1.8s"
                            left_An = "loading-10 1.5s linear forwards 3.3s"
                        } else if (Math.abs(fixprecent) == 100) {
                            Right_An = "loading-5 1.5s linear forwards 1.8s";
                            left_An = "loading-10-10 1.5s linear forwards 3.3s";
                        }


                        var x = "";
                        if (Math.abs(fixprecent) == 100) {
                            x = ` <i class="material-icons mx-auto align-middle finishSave">done_all</i> `;
                        } else {
                            x = fixprecent + "%";
                        }

                        divcont = `<div class="card cd cardLoanSaave shadow-sm border-0 mb-2">
                                             <div id="boxClick"></div>
                                                <div class="row col-12 h-100 mx-0 my-0" id="SaveConector">
                                                    <div class="col-6 colmn bg-white" >
                                                        <div class="container mt-4" >
                                
                                                            <div class="progress blue" style="height: 150px;">
                                                                    <span class="progress-left" >
                                                                        <span class="progress-bar" style="${animation}:${left_An}"> </span>
                                                                    </span>
                                                                    <span class="progress-right" >
                                                                        <span class="progress-bar" style="${animation}:${Right_An}"></span>
                                                                    </span>
                                                                    <div class="progress-value">${x}</div>
                                                            </div >
                                                        </div >
                                                    </div >
    
                                                    <div class="col-6 colmn info">
    
                                                        <h4 class="text-right mt-3">הלוואות</h4>
                                                        <p class="text-right mx-0 my-0 lt">${tot_cash}<span class="title_save"> -סה"כ הלוואות</span></p>
    
                                                        <p class="text-right mx-0 my-0 lt">${left_pay}<span class="title_save"> -נשאר לתשלום</span></p>
                                                        <p class="text-right mx-0 my-0 lt">${tot_pass}<span class="title_save"> -שולם</span></p>
                                                        <p class="text-right mx-0 my-0 lt">${num}<span class="title_save"> -מס' הלוואות</span></p>
    
    
    
    
                                                    </div>
                                             </div >
                                      </div > `;

                        box_Loan.innerHTML = divcont;
                        // containerLoan.appendChild(container);
                    } else {
                        console.log("empty")
                    }

                });
            }

            LOAN_GET_DATA_HOME()



            SAVE_GET_DATA_HOME();

            function LOAN_GET_DATA() {
                database.ref('/Users/' + user.uid + '/loan/').on('value', function (snap) {
                    // console.log(1);
                    var coreDate = createNewDate();
                    var month_Today = coreDate.month;
                    var year_Today = coreDate.year;
                    let postArr = snap.val();
                    if (postArr) {
                        let keysArr = Object.keys(postArr);
                        var arr = [];
                        var title = "";

                        for (var i = 0; i < keysArr.length; i++) {
                            var uid = keysArr[i];
                            // console.log(2);
                            var monthPay = postArr[uid].monthlyPay;
                            var dateStart = postArr[uid].startdate;
                            var cashloan = postArr[uid].monthlyPay;
                            var totalLoan = postArr[uid].totalCash;
                            var cashPaid = postArr[uid].cashPaid;
                            var cashLeft = postArr[uid].cashLeft;
                            var monthLeft = postArr[uid].monthLeft;
                            var monthPass = postArr[uid].monthPass;
                            title = postArr[uid].title;
                            var infoloan = postArr[uid].info;
                            var numYear = postArr[uid].numYear;
                            var splitD = dateStart.split(" ");
                            var splittotal = totalLoan.split("-");
                            var monthlypay = cashloan.split("-");
                            var monthly_pay = monthlypay[1];
                            var total_cash = splittotal[1];
                            // console.log(splittotal);
                            var m = splitD[0];
                            var d = splitD[1];
                            var y = splitD[2];
                            var totalMonth = numYear * 12;
                            var sumyear = year_Today - y - 1;
                            var sum_year = sumyear * 12;
                            var firstYear = 12 - month[m];
                            var monththisYear = month[month_Today];
                            var totalmonth = monththisYear + firstYear + sum_year;
                            // console.log(infoloan, totalMonth - totalmonth, totalmonth, monthly_pay, total_cash, title, uid);
                            arr.push([infoloan, totalMonth - totalmonth, totalmonth, monthly_pay, total_cash, title, uid, monthPass, cashLeft, monthLeft, cashPaid]);
                        }
                        var divcont = ``;
                        arr.forEach(snap => {
                            // console.log(3);
                            var y = snap[2];
                            if (y < 0) {
                                y = 0;
                            }
                            // console.log(y);
                            var payuntilToday = y * Number(snap[3]);
                            var precentNum = payuntilToday / Number(snap[4]) * 100;
                            var fixprecent = precentNum.toFixed(0);
                            var total_month = snap[1] + snap[2];
                            var left_pay = Number(snap[4]) - payuntilToday;
                            var left_An = "";
                            var Right_An = "";
                            var animation = "animation";
                            fixprecent = y;
                            if (Math.abs(fixprecent) == 0) {
                                animation = "display"
                                left_An = "block"
                                Right_An = "block"
                            } else if (Math.abs(fixprecent) <= 10 && Math.abs(fixprecent) > 0) {
                                Right_An = "loading-1 1.5s linear forwards 1.8s"
                                left_An = "loading-0 1.5s linear forwards 1.8s"
                            } else if (Math.abs(fixprecent) < 25 && Math.abs(fixprecent) > 10) {
                                Right_An = "loading-2 1.5s linear forwards 1.8s"
                                left_An = "loading-0 1.5s linear forwards 1.8s"
                            } else if (Math.abs(fixprecent) == 25) {
                                left_An = "loading-0 1.5s linear forwards 3.3s"
                                Right_An = "loading-2-2 1.5s linear forwards 1.8s"
                            } else if (Math.abs(fixprecent) <= 30 && Math.abs(fixprecent) > 20) {
                                Right_An = "loading-3 1.5s linear forwards 1.8s"
                                left_An = "loading-0 1.5s linear forwards 1.8s"
                            } else if (Math.abs(fixprecent) < 50 && Math.abs(fixprecent) > 30) {
                                Right_An = "loading-4 1.5s linear forwards 1.8s"
                                left_An = "loading-0 1.5s linear forwards 1.8s"
                            } else if (Math.abs(fixprecent) == 50) {
                                left_An = "loading-0 1.5s linear forwards 3.3s"
                                Right_An = "loading-5 1.5s linear forwards 1.8s"
                            } else if (Math.abs(fixprecent) > 50 && Math.abs(fixprecent) < 60) {
                                Right_An = "loading-5 1.5s linear forwards 1.8s"
                                left_An = "loading-6 1.5s linear forwards 3.3s"
                            } else if (Math.abs(fixprecent) >= 60 && Math.abs(fixprecent) < 75) {
                                Right_An = "loading-5 1.5s linear forwards 1.8s"
                                left_An = "loading-7 1.5s linear forwards 3.3s"
                            } else if (Math.abs(fixprecent) == 75) {
                                Right_An = "loading-5 1.5s linear forwards 1.8s"
                                left_An = "loading-7-7 1.5s linear forwards 3.3s"

                            } else if (Math.abs(fixprecent) > 75 && Math.abs(fixprecent) < 80) {
                                Right_An = "loading-5 1.5s linear forwards 1.8s"
                                left_An = "loading-8 1.5s linear forwards 3.3s"

                            } else if (Math.abs(fixprecent) >= 80 && Math.abs(fixprecent) < 90) {

                                Right_An = "loading-5 1.5s linear forwards 1.8s"
                                left_An = "loading-9 1.5s linear forwards 3.3s"
                            } else if (Math.abs(fixprecent) >= 90 && Math.abs(fixprecent) < 100) {

                                Right_An = "loading-5 1.5s linear forwards 1.8s"
                                left_An = "loading-10 1.5s linear forwards 3.3s"
                            } else if (Math.abs(fixprecent) == 100) {
                                Right_An = "loading-5 1.5s linear forwards 1.8s";
                                left_An = "loading-10-10 1.5s linear forwards 3.3s";
                            }


                            var x = "";
                            if (Math.abs(fixprecent) == 100) {
                                x = ` < i class="material-icons mx-auto align-middle finishSave" > done_all</i > `;
                            } else {
                                x = fixprecent + "%";
                            }


                            divcont += `<div class="card cd cardLoanSaave shadow-sm border-0 mb-2">
    
                                                <div class="row col-12 h-100 mx-0 my-0" id="SaveConector">
    
                                                    <div class="col-6 ml-0 mr-0 pl-0 pr-0 mt-2"> <i class="material-icons deleteloan btn" id="deleteLoan ${snap[6]} ${snap[0]}" type="button" data-target="#rowloan" data-toggle="modal">delete</i></div>
                                                    <div class="col-6 ml-0 pl-0 mt-2 text-right"><h4 class="text-right mt-0">${snap[5]}</h4></div>
    
                                                    <div class="col-6 colmn loancircle">
    
                                                        <div class="container mt-0">
    
                                                            <div class="progress blue" style="height: 150px;">
    
                                                                <span class="progress-left" >
                                                                    <span class="progress-bar" style="${animation}:${left_An}"> </span>
                                                                </span>
    
                                                                <span class="progress-right" >
                                                                    <span class="progress-bar" style="${animation}:${Right_An}"></span>
                                                                </span>
    
                                                                <div class="progress-value">${x}</div>
    
                                                            </div>
    
                                                        </div>
    
                                                    </div>
    
                                                    <div class="col-6 colmn info">
    
                                                        <p class="text-right mx-0 my-0 lt"><span class="title_save"> פירוט ההלוואה- </span>${snap[0]}</p>
                                                        <p class="text-right mx-0 my-0 lt">${snap[4]}<span class="title_save"> -סכום הלוואה</span></p>
                                                        <p class="text-right mx-0 my-0 lt">${snap[10]}<span class="title_save"> -שולם</span></p>
                                                        <p class="text-right mx-0 my-0 lt">${snap[8]}<span class="title_save"> -נשאר לתשלום</span></p>
                                                        <p class="text-right mx-0 my-0 lt">${total_month}<span class="title_save"> -סה"כ חודשים</span></p>
                                                        <p class="text-right mx-0 my-0 lt">${snap[1]}<span class="title_save"> -מס' חודשים שנשארו</span></p>
                                                        <p class="text-right mx-0 my-0 lt">${monthly_pay}<span class="title_save"> -תשלום חודשי</span></p>
    
                                                    </div>
    
                                                </div>
                                           
                                         </div> `;

                        });
                        containerloan.innerHTML = divcont;

                        document.addEventListener("click", e => {

                            // console.log(4);

                            var key = e.target.id;
                            var keySp = key.split(" ");
                            // console.log(keySp);
                            // console.log(5);

                            if (keySp[0] == "deleteLoan") {

                                document.addEventListener("click", u => {
                                    var uid = u.target.id;
                                    console.log(uid);
                                    if (uid == "yesloan") {
                                        // console.log(key);
                                        // console.log(uid);

                                        database.ref('/Users/' + user.uid + '/loan/' + keySp[1]).remove().then(function () {
                                        }).catch(function (err) {
                                        });

                                        database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').once('value', snapshot => {

                                            let postArray = snapshot.val();
                                            let keys = Object.keys(postArray);
                                            var x = 0;
                                            for (var i = 0; i < keys.length; i++) {
                                                var object = postArray[keys[i]];
                                                var dataCash = object.totalCash;
                                                var after = object.after;
                                                var waypay = object.wayPay;
                                                var chashFlow = object.chashFlow;
                                                var title = object.title;
                                                var dbDate = object.date;
                                                var numTime = object.numTime;
                                                var time = object.time;
                                                var type = object.type;
                                                var status = object.type;

                                                if (waypay == "הלוואה") {

                                                    // console.log(keySp[2]);

                                                    if (object.info == keySp[2]) {

                                                        database.ref('/Users/' + user.uid + '/cashflow/' + keys[i]).remove().then(function () {
                                                        }).catch(function (err) {
                                                        });

                                                        x += 1;
                                                        // console.log("exist", keys[i]);

                                                    }

                                                }

                                                if (waypay == "פעילות מרובה") {
                                                    var keysSubs = Object.keys(chashFlow);

                                                    for (var t = 0; t < keysSubs.length; t++) {
                                                        var obj = chashFlow[keysSubs[t]];

                                                        console.log(obj.info, keySp[2]);
                                                        // console.log(keySp[2]);

                                                        if (obj.wayPay == "הלוואה") {
                                                            if (obj.info == keySp[2]) {
                                                                x += 1
                                                                // console.log("subexsit", keysSubs[t]);

                                                                database.ref('/Users/' + user.uid + '/cashflow/' + keys[i] + "/chashFlow/" + keysSubs[t]).remove().then(function () {

                                                                }).catch(function (err) {
                                                                });

                                                                database.ref('/Users/' + user.uid + '/cashflow/').child(keys[i]).child('/chashFlow/').once('value', function (snapshot) {

                                                                    let postArray = snapshot.val();
                                                                    let key_s = Object.keys(postArray);
                                                                    let length = key_s.length;

                                                                    for (var j = 0; j < length; j++) {

                                                                        var id = key_s[j];
                                                                        var newArrayCashB = {};

                                                                        if (length == 1) {
                                                                            // console.log(keys[i], id);

                                                                            database.ref('/Users/' + user.uid + '/cashflow/').child(keys[i]).child('/chashFlow/').child(id).once('value', function (snapshot) {
                                                                                console.log("delete 3");


                                                                                let postArray__s = snapshot.val();
                                                                                let key__s = Object.keys(postArray__s);
                                                                                let length__s = key__s.length;
                                                                                newArrayCashB = postArray__s;

                                                                            }).catch((err) => {
                                                                                console.log(err);
                                                                            });


                                                                            firebase.database().ref().child('Users').child(user.uid).child('cashflow').child(keys[i]).update({

                                                                                title: newArrayCashB.title,
                                                                                date: newArrayCashB.date,
                                                                                totalCash: newArrayCashB.totalCash,
                                                                                type: newArrayCashB.type,
                                                                                after: newArrayCashB.after,
                                                                                time: newArrayCashB.time,
                                                                                numTime: newArrayCashB.numTime,
                                                                                wayPay: newArrayCashB.wayPay,
                                                                                status: newArrayCashB.status,
                                                                                info: newArrayCashB.info


                                                                            });

                                                                            database.ref('/Users/' + user.uid + '/cashflow/' + keys[i] + '/chashFlow/').remove().then(function () {

                                                                            }).catch(function (err) {
                                                                                console.log(err);
                                                                            });

                                                                        } else if (length > 2) {

                                                                        }

                                                                    }
                                                                });

                                                            }

                                                        }

                                                    }
                                                }

                                            }
                                            // console.log(x);
                                        }).catch((err) => {
                                            console.log(err);
                                        });

                                        containerloan.innerHTML = "";
                                        LOAN_GET_DATA();
                                        $('#rowloan').modal('hide');

                                    } else if (uid == "noloan") {
                                        $('#rowloan').modal('hide')
                                    }
                                })

                            }
                        })

                    } else {
                        console.log("loan empty")
                    }

                });
            }
            function SAVING_GET_DATA() {
                console.log(7);

                var coreDate = createNewDate();
                var month_Today = coreDate.month;
                var year_Today = coreDate.year;
                // UPDATESAVE();


                database.ref('/Users/' + user.uid + '/saveMoney/').on('value', function (snap) {

                    console.log(8);
                    let postArr = snap.val();
                    if (postArr) {
                        let keysArr = Object.keys(postArr);
                        var arr = [];
                        var title = "";
                        // console.log(keysArr);
                        for (var i = 0; i < keysArr.length; i++) {
                            console.log(11);

                            var uid = keysArr[i];
                            var dateStart = postArr[uid].startdate;
                            var destination = postArr[uid].destination;
                            var totalSave = postArr[uid].totalCash;
                            var infoSave = postArr[uid].info;
                            var title = postArr[uid].title;
                            var splitD = dateStart.split(" ");
                            var monthlypay = Math.abs(totalSave);
                            var monthly_pay = monthlypay;
                            var titletrim = title.split(" ");
                            var newtitle = titletrim.join('');
                            // console.log(newtitle);
                            var m = splitD[0];
                            var d = splitD[1];
                            var y = splitD[2];

                            arr.push([infoSave, " ", title, monthly_pay, destination, newtitle, dateStart, uid]);
                        }
                        // console.log(arr);

                        var divcont = ``;

                        arr.forEach(snap => {

                            var payuntilToday = Number(snap[3]);
                            var precentNum = payuntilToday / Number(snap[4]) * 100;
                            var fixprecent = precentNum.toFixed(0);
                            // console.log(payuntilToday, snap[4]);
                            var left_pay = Number(snap[4]) - payuntilToday;

                            var left_An = "";
                            var Right_An = "";

                            var animation = "animation";
                            // console.log(fixprecent);
                            if (Math.abs(fixprecent) == 0) {
                                animation = "display"
                                left_An = "block"
                                Right_An = "block"
                                // left_An.style.animation = "none"
                            } else if (Math.abs(fixprecent) <= 10 && Math.abs(fixprecent) > 0) {
                                Right_An = "loading-1 1.5s linear forwards 1.8s";
                                left_An = "loading-0 1.5s linear forwards 1.8s";
                            } else if (Math.abs(fixprecent) < 25 && Math.abs(fixprecent) > 10) {
                                Right_An = "loading-2 1.5s linear forwards 1.8s";
                                left_An = "loading-0 1.5s linear forwards 1.8s";
                            } else if (Math.abs(fixprecent) == 25) {
                                left_An = "loading-0 1.5s linear forwards 3.3s";
                                Right_An = "loading-2-2 1.5s linear forwards 1.8s";
                            } else if (Math.abs(fixprecent) <= 30 && Math.abs(fixprecent) > 20) {
                                Right_An = "loading-3 1.5s linear forwards 1.8s";
                                left_An = "loading-0 1.5s linear forwards 1.8s";
                            } else if (Math.abs(fixprecent) < 50 && Math.abs(fixprecent) > 30) {
                                Right_An = "loading-4 1.5s linear forwards 1.8s";
                                left_An = "loading-0 1.5s linear forwards 1.8s";
                            } else if (Math.abs(fixprecent) == 50) {
                                left_An = "loading-0 1.5s linear forwards 3.3s";
                                Right_An = "loading-5 1.5s linear forwards 1.8s";
                            } else if (Math.abs(fixprecent) > 50 && Math.abs(fixprecent) < 60) {
                                Right_An = "loading-5 1.5s linear forwards 1.8s";
                                left_An = "loading-6 1.5s linear forwards 3.3s";
                            } else if (Math.abs(fixprecent) >= 60 && Math.abs(fixprecent) < 75) {
                                Right_An = "loading-5 1.5s linear forwards 1.8s";
                                left_An = "loading-7 1.5s linear forwards 3.3s";
                            } else if (Math.abs(fixprecent) == 75) {
                                Right_An = "loading-5 1.5s linear forwards 1.8s";
                                left_An = "loading-7-7 1.5s linear forwards 3.3s";

                            } else if (Math.abs(fixprecent) > 75 && Math.abs(fixprecent) < 80) {
                                Right_An = "loading-5 1.5s linear forwards 1.8s";
                                left_An = "loading-8 1.5s linear forwards 3.3s";

                            } else if (Math.abs(fixprecent) >= 80 && Math.abs(fixprecent) < 90) {

                                Right_An = "loading-5 1.5s linear forwards 1.8s";
                                left_An = "loading-9 1.5s linear forwards 3.3s";
                            } else if (Math.abs(fixprecent) >= 90 && Math.abs(fixprecent) < 100) {

                                Right_An = "loading-5 1.5s linear forwards 1.8s";
                                left_An = "loading-10 1.5s linear forwards 3.3s";
                            } else if (Math.abs(fixprecent) == 100) {
                                Right_An = "loading-5 1.5s linear forwards 1.8s";
                                left_An = "loading-10-10 1.5s linear forwards 3.3s";

                            }

                            var x = "";
                            if (Math.abs(fixprecent) == 100) {
                                x = ` <i class="material-icons mx-auto align-middle finishSave"> done_all</i> `;
                            } else {
                                x = fixprecent + "%";
                            }

                            // console.log(x);
                            divcont += `<div class="card cd cardLoanSaave shadow-sm border-0 mb-2">
        
                                                        <div class="row col-12 h-100 mx-0 my-0" id="SaveConector">
        
                                                            <div class="col-6 ml-0 mr-0 pl-0 pr-0 mt-2"> <i class="material-icons deleteloan" id="deleteSave ${snap[5]} ${snap[7]} ${snap[0]}"  type="button" data-target="#saveloan" data-toggle="modal">delete</i></div>
                                                            <div class="col-6 ml-0 pl-0 mt-2 text-right"><h4 class="text-right mt-0">${snap[2]}</h4></div>
                                                            <div class="col-6 colmn loancircle">
                                                                <div class="container mt-0">
                                                                    <div class="progress green" style="height: 150px;">
                                                                        <span class="progress-left" >
                                                                            <span class="progress-bar" style="${animation}:${left_An}"> </span>
                                                                        </span>
                                                                        <span class="progress-right" >
                                                                            <span class="progress-bar" style="${animation}:${Right_An}"></span>
                                                                        </span>
                                                                        <div class="progress-value">${x}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
        
                                                            <div class="col-6 colmn info">
        
                                                                <p class="text-right mx-0 my-0 lt"><span class="title_save"> שם חסכון- </span>${snap[0]}</p>
                                                                <p class="text-right mx-0 my-0 lt">${Math.abs(snap[4])}<span class="title_save"> -יעד</span></p>
                                                                <p class="text-right mx-0 my-0 lt">${snap[3]}<span class="title_save"> -הופקד</span></p>
        
                                                            </div>
                                                        </div>
                                               </div> `



                        });

                        console.log(12);

                        containerSave.innerHTML = divcont;

                        document.addEventListener("click", e => {
                            var key = e.target.id;
                            var keySp = key.split(" ");
                            if (keySp[0] == "deleteSave") {

                                document.addEventListener("click", u => {
                                    var uid = u.target.id;
                                    // console.log(uid);
                                    if (uid == "yessave") {
                                        console.log(key);
                                        console.log(keySp[2]);

                                        database.ref('/Users/' + user.uid + '/saveMoney/' + keySp[2]).remove().then(function () {

                                        }).catch(function (err) {
                                        });

                                        database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').once('value').then(snapshot => {

                                            let postArray = snapshot.val();
                                            let keys = Object.keys(postArray);
                                            var x = 0;
                                            for (var i = 0; i < keys.length; i++) {
                                                var object = postArray[keys[i]];
                                                var dataCash = object.totalCash;
                                                var after = object.after;
                                                var waypay = object.wayPay;
                                                var chashFlow = object.chashFlow;
                                                var title = object.title;
                                                var dbDate = object.date;
                                                var numTime = object.numTime;
                                                var time = object.time;
                                                var type = object.type;
                                                var status = object.type;
                                                var titlesplut = title.split(" ");
                                                var arraytitle = titlesplut.join('');

                                                if (waypay == "חסכון") {
                                                    // console.log(object.info, keySp[2]);
                                                    console.log(keySp[2]);
                                                    if (arraytitle == keySp[1]) {


                                                        database.ref('/Users/' + user.uid + '/cashflow/' + keys[i]).remove().then(function () {

                                                        }).catch(function (err) {
                                                            console.log(err);
                                                        });

                                                        x += 1;
                                                        console.log("exist", keys[i]);
                                                    }

                                                }

                                                if (waypay == "פעילות מרובה") {
                                                    var keysSubs = Object.keys(chashFlow);

                                                    for (var t = 0; t < keysSubs.length; t++) {
                                                        var obj = chashFlow[keysSubs[t]];
                                                        var obgt = obj.title;
                                                        var splitob = obgt.split(" ");
                                                        var jointitle = splitob.join('');

                                                        if (obj.wayPay == "חסכון") {
                                                            if (jointitle == keySp[1]) {
                                                                x += 1

                                                                database.ref('/Users/' + user.uid + '/cashflow/' + keys[i] + "/chashFlow/" + keysSubs[t]).remove().then(function () {

                                                                }).catch(function (err) {
                                                                    console.log(err);
                                                                });

                                                                database.ref('/Users/' + user.uid + '/cashflow/').child(keys[i]).child('/chashFlow/').on('value', function (snapshot) {
                                                                    if (snapshot) {
                                                                        let postArray = snapshot.val();
                                                                        let key_s = Object.keys(postArray);
                                                                        let length = key_s.length;

                                                                        for (var j = 0; j < length; j++) {

                                                                            var id = key_s[j];
                                                                            var newArrayCashB = {};

                                                                            if (length == 1) {
                                                                                console.log(keys[i], id);

                                                                                database.ref('/Users/' + user.uid + '/cashflow/').child(keys[i]).child('/chashFlow/').child(id).once('value', function (snapshot) {
                                                                                    console.log("delete 3");


                                                                                    let postArray__s = snapshot.val();
                                                                                    let key__s = Object.keys(postArray__s);
                                                                                    let length__s = key__s.length;
                                                                                    newArrayCashB = postArray__s;

                                                                                }).catch((err) => {
                                                                                    console.log(err);
                                                                                });


                                                                                firebase.database().ref().child('Users').child(user.uid).child('cashflow').child(keys[i]).update({

                                                                                    title: newArrayCashB.title,
                                                                                    date: newArrayCashB.date,
                                                                                    totalCash: newArrayCashB.totalCash,
                                                                                    type: newArrayCashB.type,
                                                                                    after: newArrayCashB.after,
                                                                                    time: newArrayCashB.time,
                                                                                    numTime: newArrayCashB.numTime,
                                                                                    wayPay: newArrayCashB.wayPay,
                                                                                    status: newArrayCashB.status,
                                                                                    info: newArrayCashB.info

                                                                                });

                                                                                database.ref('/Users/' + user.uid + '/cashflow/' + keys[i] + '/chashFlow/').remove().then(function () {

                                                                                }).catch(function (err) {
                                                                                    console.log(err);
                                                                                });

                                                                            } else if (length > 2) {


                                                                            }

                                                                        }
                                                                    } else {
                                                                        console.log('empty');
                                                                    }

                                                                });

                                                            }

                                                        }

                                                    }
                                                }

                                            }
                                            console.log(x);
                                        }).catch((err) => {
                                            console.log(err);
                                        });
                                        console.log(14);

                                        containerSave.innerHTML = "";
                                        // UPDATESAVE();
                                        UPDATESAVE();
                                        SAVING_GET_DATA();

                                        $('#saveloan').modal('hide');

                                    } else if (uid == "nosave") {
                                        $('#saveloan').modal('hide')
                                    }
                                })

                            }
                        });
                        // let postArr = snap.val();
                        // return snap.val();
                    } else {
                        console.log('save empty');
                    }
                })



            }
            var buttonMonth = document.getElementById("inputMonth");

            buttonMonth.addEventListener("click", e => {
                GET_DATA_PAGE_CARD();
            });
            function GET_DATA_PAGE_CARD() {

                var value = buttonMonth.children;
                var yearly = false;
                var monthCredit = [];
                // var yearly = false;
                var totaloutToal = 0;
                var monthAr = Object.keys(value);
                for (var i = 0; i < monthAr.length; i++) {
                    var data = value[monthAr[i]];
                    var month = data.innerHTML;


                    var monthEng = switch_English_To_english_Month(month);
                    var newDate = new Date().toString();
                    var corMonth = newDate.split(" ")[1];
                    console.log(monthEng, corMonth)
                    if (monthEng == corMonth) {
                        data.setAttribute("selected", "selected");
                    }



                }
                var monthBefore = document.getElementById("monthBefore");
                var titleMonthBefore = document.getElementById("titleMonthBefore");
                var card_cash = document.getElementById("card_cash");
                var StatusCardCash = document.getElementById("StatusCardCash");
                var BlanceMOnthlyCashCard = document.getElementById("BlanceMOnthlyCashCard");
                var precentCard = document.getElementById("precentCard");
                var limitCard = document.getElementById("limitCard");


                console.log(buttonMonth.value);
                card_cash.innerHTML = 0;
                monthBefore.innerHTML = 0;
                BlanceMOnthlyCashCard.textContent = 0;
                StatusCardCash.innerHTML = "";
                if (buttonMonth.value == "שנתי") {
                    yearly = true;
                }
                StatusCardCash.textContent = buttonMonth.value;


                var month = hebMonth.indexOf(buttonMonth.value);
                var num = month;//9 september
                var previewNum = month - 1;
                var monEnglish = labelx[num];
                var monEnglishprev = labelx[previewNum];

                titleMonthBefore.innerHTML = "";
                precentCard.innerHTML = ""
                titleMonthBefore.innerHTML = "";
                // StatusCardCash.innerHTML = "";

                titleMonthBefore.textContent = "חודש לפני - " + switch_Eng_To_Heb_Month(monEnglishprev);
                // monthBefore.textContent = lastMonth[1]

                var lastMonth = [];
                var thismonth = [];
                var total_finl = 0;

                console.log(monEnglish);
                function getdataCard() {
                    return database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').once('value').then(snapshot => {
                        // console.log("      
                        return snapshot.val();


                    }).then(result => {
                        console.log(result);

                        var key = Object.keys(result);
                        var newKeys = Object.keys(key);
                        console.log(key);
                        var array = [];
                        var TITLEARRAY = [];
                        var typeArr = [];

                        var beforemonth = 0;
                        var wayYearly = [];
                        var div = "";
                        for (var i = 0; i < key.length; i++) {

                            var post = result[key[i]];

                            var date = post.date;
                            if (post.type == 'out' && post.wayPay !== "פעילות מרובה" && post.wayPay !== "כרטיס אשראי") {
                                totaloutToal += post.totalCash;
                            }
                            var splitmonth = date.split(" ")[0];
                            console.log(splitmonth);
                            if (post.wayPay == "כרטיס אשראי") {
                                wayYearly.push([post.title, post.totalCash])
                            }

                            if (post.wayPay == "כרטיס אשראי הורדה") {


                                monthCredit.push([splitmonth, post.totalCash])
                                if (monEnglishprev == splitmonth) {
                                    lastMonth = [splitmonth, post.totalCash]
                                    var m = lastMonth[0].split(" ")[0];

                                    if (lastMonth[1] < 0) {
                                        console.log(1);
                                        titleMonthBefore.innerHTML = "";
                                        titleMonthBefore.textContent = "חודש לפני - " + switch_Eng_To_Heb_Month(m);
                                        monthBefore.textContent = Math.abs(lastMonth[1]);
                                        console.log('before cards', lastMonth);
                                    }

                                }
                                if (monEnglish == splitmonth) {
                                    console.log(2);

                                    thismonth = [splitmonth, post.totalCash]
                                    var mT = thismonth[0].split(" ")[0];

                                    if (thismonth[1] <= 0) {
                                        StatusCardCash.innerHTML = "";
                                        console.log(3);

                                        // var thism = thismonth[0].split(" ")[0];
                                        StatusCardCash.textContent = switch_Eng_To_Heb_Month(mT);
                                        card_cash.textContent = Math.abs(thismonth[1]);

                                    }
                                    if (post.type == 'out') {
                                        total_finl += post.totalCash;
                                    }

                                }
                            }

                            if (monEnglish == splitmonth) {
                                if (post.type == 'out' && post.wayPay !== "כרטיס אשראי") {
                                    total_finl += post.totalCash;
                                }
                                console.log(splitmonth);
                                if (post.wayPay == "כרטיס אשראי") {
                                    console.log(4);

                                    typeArr.push([post.title, post.totalCash]);

                                    var cash = post.totalCash;
                                    var way = post.wayPay;
                                    var title = post.title;
                                    // var date = post.date;
                                    var type = post.type;
                                    var status = post.status
                                    console.log(cash, way), title;
                                    array.push([date, cash]);
                                    TITLEARRAY.push([title, cash]);

                                    div += `<tr> <td>${date}</td>  <td>${cash}</td><td><i class="material-icons text-danger">arrow_downward</i></td><td>${way}</td><td>${status}</td> <td>${title}</td><td>${date}</td></tr>`;

                                } else if (post.wayPay == "פעילות מרובה") {
                                    console.log(5);

                                    var cashflow = post.chashFlow;
                                    var newKeys = Object.keys(post.chashFlow);
                                    for (var j = 0; j < newKeys.length; j++) {
                                        console.log(6);

                                        var postSub = cashflow[newKeys[j]];
                                        var stotalCshSub = postSub.totalCash;
                                        var stitle = postSub.title;
                                        var stype = postSub.type;
                                        var sstutas = postSub.status;
                                        var swat = postSub.wayPay;
                                        console.log(stype);
                                        if (stype == 'out' && swat !== "כרטיס אשראי") {
                                            total_finl += postSub.totalCash;
                                        }
                                        if (postSub.wayPay == "כרטיס אשראי הורדה") {
                                            monthCredit.push([splitmonth, postSub.totalCash])

                                            if (monEnglishprev == splitmonth) {
                                                console.log(7);

                                                lastMonth = [splitmonth, stotalCshSub.totalCash]
                                                var m = lastMonth[0].split(" ")[0];


                                                console.log(lastMonth[1])
                                                if (lastMonth[1] < 0) {
                                                    console.log(8);

                                                    monthBefore.innerHTML = "";
                                                    titleMonthBefore.textContent = "חודש לפני - " + switch_Eng_To_Heb_Month(m);
                                                    monthBefore.textContent = lastMonth[1]
                                                    console.log('before cards', lastMonth);
                                                }
                                            }
                                            if (monEnglish == splitmonth) {
                                                thismonth = [splitmonth, postSub.totalCash]

                                                console.log(9);


                                                if (thismonth[1] <= 0) {
                                                    StatusCardCash.innerHTML = "";
                                                    card_cash.innerHTML = "";
                                                    var thism = thismonth[0].split(" ")[0];
                                                    StatusCardCash.textContent = switch_Eng_To_Heb_Month(thism);
                                                    card_cash.textContent = thismonth[1];

                                                    console.log(10);

                                                }
                                            }
                                        }
                                        if (postSub.wayPay == "כרטיס אשראי") {
                                            // if (monEnglishprev == splitmonth) {
                                            //     //before
                                            //     beforemonth += postSub.totalCash;
                                            // }
                                            typeArr.push([postSub.title, postSub.totalCash]);
                                            console.log(11);

                                            div += `<tr><td>${postSub.date}</td><td>${stotalCshSub}</td><td><i class="material-icons text-danger">arrow_downward</i></td><td>${swat}</td><td>${sstutas}</td><td>${stitle}</td><td>${date}</td></tr>`;
                                            array.push([date, stotalCshSub]);
                                            TITLEARRAY.push([stitle, stotalCshSub]);


                                        }
                                    }
                                }

                            }
                            if (post.wayPay == "פעילות מרובה") {

                                var cash_flow = post.chashFlow;
                                var new_Keys = Object.keys(post.chashFlow);
                                for (var j = 0; j < new_Keys.length; j++) {
                                    var data_b = post.chashFlow;
                                    var docs = data_b[new_Keys[j]];
                                    if (docs.wayPay == "כרטיס אשראי") {
                                        wayYearly.push([docs.title, docs.totalCash])
                                    }
                                    if (docs.type == 'out' && docs.wayPay !== "כרטיס אשראי") {
                                        totaloutToal += docs.totalCash;
                                    }
                                }


                            }

                            console.log(beforemonth);

                            console.log(array);
                            // if (post.chashFlow) {

                            // } else {

                            // }
                            console.log(div);
                            console.log(total_finl);
                        }
                        console.log(totaloutToal);
                        return {
                            div: div,
                            array: array,
                            TITLEARRAY: TITLEARRAY,
                            lastMonth: lastMonth,
                            thismonth: thismonth,
                            total_finl: total_finl,
                            typeArr: typeArr,
                            yearly: yearly,
                            monthCredit: monthCredit,
                            wayYearly: wayYearly,
                            totaloutToal: totaloutToal

                        };
                    }).catch((err) => {
                        console.log(err);
                    });

                }

                getdataCard().then(element => {
                    console.log(element.total_finl, element.monthCredit, element.yearly);
                    console.log(element.wayYearly);
                    var totaltype = element.wayYearly;
                    var bal = 0;
                    var day_s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
                    var out_Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    var monthName = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


                    for (var i = 0; i < totaltype.length; i++) {

                        for (var j = 0; j < totaltype.length; j++) {
                            if (j !== i && totaltype[i][0] == totaltype[j][0]) {
                                totaltype[i][1] += totaltype[j][1];
                                totaltype.splice(j, 1);
                                j--;
                                // i--;
                            }
                        }

                    }
                    console.log(totaltype);
                    totaltype.forEach(x => {
                        bal += x[1];
                    })
                    var average = bal / 12;
                    console.log(average);


                    element.array.forEach(x => {
                        console.log(x);
                        var month = x[0].split(" ")[1].split(",")[0];
                        if (month < 10) {
                            var monthsplit = month.split("0")[1];
                            month = monthsplit
                        }
                        console.log(month);
                        var pos = day_s.indexOf(Number(month));
                        out_Arr[pos] += x[1];

                    });


                    var importantdate = "";
                    function getSettingLimitCard() {
                        return database.ref('/Users/' + user.uid + '/setting/firstSetting/').orderByChild('number').once('value').then(snapshot => {
                            return snapshot.val();
                        });
                    }
                    getSettingLimitCard().then(post => {
                        var value = card_cash.innerHTML;
                        limitCard.textContent = post.creditLine;
                        importantdate = post.importantDay;
                        var total = post.creditLine - Number(value);
                        console.log(total);
                        BlanceMOnthlyCashCard.textContent = total;


                        console.log(importantdate);

                        if (element.yearly == true) {


                            var newdiv = "";
                            console.log('in');
                            var docs = element.monthCredit;
                            titleMonthBefore.textContent = "ממוצע שנתי";
                            monthBefore.textContent = Math.abs(average.toFixed("0"));

                            var sum = 0;
                            docs.forEach(x => {
                                console.log(labelx.indexOf(x[0]));
                                var index = labelx.indexOf(x[0]);
                                monthName[index] = x[1];
                                sum += x[1];
                                var day = importantdate.split(" ")[1].split(",")[0];
                                var correctDay = x[0] + " " + day;
                                newdiv += `<tr><td>${correctDay}</td><td>${x[1]}</td><td><i class="material-icons text-danger">arrow_downward</i></td><td>חודשי</td><td>אשראי</td><td>סה"כ הוצאות חודשי</td><td>${x[0]}</td></tr>`;
                            });


                            var totalPrecent = element.totaloutToal / 100;
                            var precentNum = Math.abs(sum) / totalPrecent;
                            var p = Math.abs(precentNum.toFixed("0"));
                            precentCard.textContent = p + "%";
                            card_cash.textContent = Math.abs(sum);
                            chartTypeCardChart(totaltype)

                            chartCard(monthName, labelx);
                            mainTableCard.innerHTML = newdiv;

                            console.log(monthName);
                        } else if (element.yearly == false) {
                            mainTableCard.innerHTML = element.div;

                            console.log('in');
                            console.log(out_Arr, day_s);
                            chartCard(out_Arr, day_s);
                            var array = element.typeArr;
                            for (var i = 0; i < array.length; i++) {

                                for (var j = 0; j < array.length; j++) {
                                    if (j !== i && array[i][0] == array[j][0]) {
                                        array[i][1] += array[j][1];
                                        array.splice(j, 1)
                                    }
                                }

                            }
                            console.log(array);
                            chartTypeCardChart(element.typeArr)



                            console.log(element.total_finl);
                            var prencent = Math.abs(element.total_finl) / 100;
                            console.log(prencent.toFixed("0"));
                            var prectentFromOUt = Math.abs(card_cash.innerHTML) / prencent.toFixed("0");
                            console.log(prectentFromOUt);
                            console.log(card_cash.value);


                            var finalprecent = prectentFromOUt.toFixed("0") + "%";
                            precentCard.textContent = finalprecent;
                        }
                    }).catch((err) => {
                        console.log(err)
                    })
                    // TITLEARRAY.array.forEach(x => {
                    //     console.log(x);
                    //     var TITLE = x[0];


                    //     var pos = day_s.indexOf(Number(month));
                    //     out_Arr[pos] += x[1];



                    // });


                }).catch((x) => {
                    console.log(x)
                });





            }


            // function GET_DATA_PAGE_CARD() {

            //     var value = buttonMonth.children;

            //     var monthAr = Object.keys(value);
            //     for (var i = 0; i < monthAr.length; i++) {
            //         var data = value[monthAr[i]];
            //         var month = data.innerHTML;
            //         var monthEng = switch_English_To_english_Month(month);
            //         var newDate = new Date().toString();
            //         var corMonth = newDate.split(" ")[1];
            //         console.log(monthEng, corMonth)
            //         if (monthEng == corMonth) {
            //             data.setAttribute("selected", "selected");
            //         }

            //     }
            //     var monthBefore = document.getElementById("monthBefore");
            //     var titleMonthBefore = document.getElementById("titleMonthBefore");
            //     var card_cash = document.getElementById("card_cash");
            //     var StatusCardCash = document.getElementById("StatusCardCash");
            //     var BlanceMOnthlyCashCard = document.getElementById("BlanceMOnthlyCashCard");
            //     var precentCard = document.getElementById("precentCard");
            //     var limitCard = document.getElementById("limitCard");


            //     console.log(buttonMonth.value);
            //     card_cash.innerHTML = 0;
            //     monthBefore.innerHTML = 0;
            //     BlanceMOnthlyCashCard.textContent = 0;


            //     var month = hebMonth.indexOf(buttonMonth.value);
            //     var num = month;//9 september
            //     var previewNum = month - 1;
            //     var monEnglish = labelx[num];
            //     var monEnglishprev = labelx[previewNum];

            //     titleMonthBefore.innerHTML = "";
            //     precentCard.innerHTML = ""
            //     titleMonthBefore.innerHTML = "";
            //     // StatusCardCash.innerHTML = "";

            //     titleMonthBefore.textContent = "חודש לפני - " + switch_Eng_To_Heb_Month(monEnglishprev);
            //     // monthBefore.textContent = lastMonth[1]

            //     var lastMonth = [];
            //     var thismonth = [];
            //     var total_finl = 0;

            //     console.log(monEnglish);
            //     function getdataCard() {
            //         return database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').once('value').then(snapshot => {
            //             // console.log("      
            //             return snapshot.val();


            //         }).then(result => {
            //             console.log(result);

            //             var key = Object.keys(result);
            //             var newKeys = Object.keys(key);
            //             console.log(key);
            //             var array = [];
            //             var TITLEARRAY = [];
            //             var typeArr = [];

            //             var beforemonth = 0;

            //             var div = "";
            //             for (var i = 0; i < key.length; i++) {

            //                 var post = result[key[i]];

            //                 var date = post.date;
            //                 var splitmonth = date.split(" ")[0];
            //                 console.log(splitmonth);


            //                 if (post.wayPay == "כרטיס אשראי הורדה") {
            //                     if (monEnglishprev == splitmonth) {
            //                         lastMonth = [splitmonth, post.totalCash]
            //                         var m = lastMonth[0].split(" ")[0];

            //                         if (lastMonth[1] < 0) {
            //                             console.log(1);
            //                             titleMonthBefore.innerHTML = "";
            //                             titleMonthBefore.textContent = "חודש לפני - " + switch_Eng_To_Heb_Month(m);
            //                             monthBefore.textContent = lastMonth[1]
            //                             console.log('before cards', lastMonth);
            //                         }

            //                     }
            //                     if (monEnglish == splitmonth) {
            //                         console.log(2);

            //                         thismonth = [splitmonth, post.totalCash]
            //                         var mT = thismonth[0].split(" ")[0];

            //                         if (thismonth[1] <= 0) {
            //                             StatusCardCash.innerHTML = "";
            //                             console.log(3);

            //                             // var thism = thismonth[0].split(" ")[0];
            //                             StatusCardCash.textContent = "חודש הקרוב - " + switch_Eng_To_Heb_Month(mT);
            //                             card_cash.textContent = thismonth[1];

            //                         }
            //                         if (post.type == 'out') {
            //                             total_finl += post.totalCash;
            //                         }

            //                     }
            //                 }

            //                 if (monEnglish == splitmonth) {
            //                     if (post.type == 'out' && post.wayPay !== "כרטיס אשראי") {
            //                         total_finl += post.totalCash;
            //                     }
            //                     console.log(splitmonth);
            //                     if (post.wayPay == "כרטיס אשראי") {
            //                         console.log(4);

            //                         typeArr.push([post.title, post.totalCash]);

            //                         var cash = post.totalCash;
            //                         var way = post.wayPay;
            //                         var title = post.title;
            //                         // var date = post.date;
            //                         var type = post.type;
            //                         var status = post.status
            //                         console.log(cash, way), title;
            //                         array.push([date, cash]);
            //                         TITLEARRAY.push([title, cash]);

            //                         div += `<tr> <td>dsfs</td>  <td>${cash}</td><td>${type}</td><td>${way}</td><td>${status}</td> <td>${title}</td><td>${date}</td></tr>`;

            //                     } else if (post.wayPay == "פעילות מרובה") {
            //                         console.log(5);

            //                         var cashflow = post.chashFlow;
            //                         var newKeys = Object.keys(post.chashFlow);
            //                         for (var j = 0; j < newKeys.length; j++) {
            //                             console.log(6);

            //                             var postSub = cashflow[newKeys[j]];
            //                             var stotalCshSub = postSub.totalCash;
            //                             var stitle = postSub.title;
            //                             var stype = postSub.type;
            //                             var sstutas = postSub.status;
            //                             var swat = postSub.wayPay;
            //                             console.log(stype);
            //                             if (stype == 'out' && swat !== "כרטיס אשראי") {
            //                                 total_finl += postSub.totalCash;
            //                             }
            //                             if (postSub.wayPay == "כרטיס אשראי הורדה") {
            //                                 if (monEnglishprev == splitmonth) {
            //                                     console.log(7);

            //                                     lastMonth = [splitmonth, stotalCshSub.totalCash]
            //                                     var m = lastMonth[0].split(" ")[0];


            //                                     console.log(lastMonth[1])
            //                                     if (lastMonth[1] < 0) {
            //                                         console.log(8);

            //                                         monthBefore.innerHTML = "";
            //                                         titleMonthBefore.textContent = "חודש לפני - " + switch_Eng_To_Heb_Month(m);
            //                                         monthBefore.textContent = lastMonth[1]
            //                                         console.log('before cards', lastMonth);
            //                                     }
            //                                 }
            //                                 if (monEnglish == splitmonth) {
            //                                     thismonth = [splitmonth, postSub.totalCash]

            //                                     console.log(9);


            //                                     if (thismonth[1] <= 0) {
            //                                         StatusCardCash.innerHTML = "";
            //                                         card_cash.innerHTML = "";
            //                                         var thism = thismonth[0].split(" ")[0];
            //                                         StatusCardCash.textContent = "מצב חודש - " + switch_Eng_To_Heb_Month(thism);
            //                                         card_cash.textContent = thismonth[1];

            //                                         console.log(10);

            //                                     }
            //                                 }
            //                             }
            //                             if (postSub.wayPay == "כרטיס אשראי") {
            //                                 // if (monEnglishprev == splitmonth) {
            //                                 //     //before
            //                                 //     beforemonth += postSub.totalCash;
            //                                 // }
            //                                 typeArr.push([postSub.title, postSub.totalCash]);
            //                                 console.log(11);

            //                                 div += `<tr><td>dsfs</td><td>${stotalCshSub}</td><td>${stype}</td><td>${swat}</td><td>${sstutas}</td><td>${stitle}</td><td>${date}</td></tr>`;
            //                                 array.push([date, stotalCshSub]);
            //                                 TITLEARRAY.push([stitle, stotalCshSub]);


            //                             }
            //                         }
            //                     }

            //                 }


            //                 console.log(beforemonth);

            //                 console.log(array);
            //                 // if (post.chashFlow) {

            //                 // } else {

            //                 // }
            //                 console.log(div);
            //                 console.log(total_finl);
            //             }
            //             return {
            //                 div: div,
            //                 array: array,
            //                 TITLEARRAY: TITLEARRAY,
            //                 lastMonth: lastMonth,
            //                 thismonth: thismonth,
            //                 total_finl: total_finl,
            //                 typeArr: typeArr

            //             };
            //         }).catch((err) => {
            //             console.log(err);
            //         });

            //     }

            //     getdataCard().then(element => {
            //         console.log(element.total_finl);
            //         mainTableCard.innerHTML = element.div;

            //         var day_s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
            //         var out_Arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

            //         element.array.forEach(x => {
            //             console.log(x);
            //             var month = x[0].split(" ")[1].split(",")[0];
            //             if (month < 10) {
            //                 var monthsplit = month.split("0")[1];
            //                 month = monthsplit
            //             }
            //             console.log(month);
            //             var pos = day_s.indexOf(Number(month));
            //             out_Arr[pos] += x[1];



            //         });
            //         console.log(out_Arr, day_s);
            //         chartCard(out_Arr, day_s);
            //         chartTypeCardChart(element.typeArr)


            //         function getSettingLimitCard() {
            //             return database.ref('/Users/' + user.uid + '/setting/firstSetting/').orderByChild('number').once('value').then(snapshot => {
            //                 return snapshot.val();
            //             });
            //         }
            //         getSettingLimitCard().then(post => {
            //             var value = card_cash.innerHTML;
            //             limitCard.textContent = post.creditLine
            //             var total = post.creditLine + Number(value);
            //             console.log(total);
            //             BlanceMOnthlyCashCard.textContent = total;
            //         }).catch((err) => {
            //             console.log(err)
            //         })
            //         console.log(element.total_finl);
            //         var prencent = Math.abs(element.total_finl) / 100;
            //         console.log(prencent.toFixed("0"));
            //         var prectentFromOUt = Math.abs(card_cash.innerHTML) / prencent.toFixed("0");
            //         console.log(prectentFromOUt);
            //         console.log(card_cash.value);


            //         var finalprecent = prectentFromOUt.toFixed("0") + "%";
            //         precentCard.textContent = finalprecent;
            //         // TITLEARRAY.array.forEach(x => {
            //         //     console.log(x);
            //         //     var TITLE = x[0];


            //         //     var pos = day_s.indexOf(Number(month));
            //         //     out_Arr[pos] += x[1];



            //         // });


            //     }).catch((x) => {
            //         console.log(x)
            //     });





            // }

            // GET_DATA_PAGE_CARD()

            function clearClassSetting() {
                startYear.classList.remove("is-invalid");
                bankLine.classList.remove("is-invalid");
                creditLine.classList.remove("is-invalid");
                date_i.classList.remove("is-invalid");
                startYear.classList.remove("is-valid");
                bankLine.classList.remove("is-valid");
                creditLine.classList.remove("is-valid");
                date_i.classList.remove("is-valid");
            }

            function clearFormInputValid() {


                typeOut.classList.remove("is-invalid");
                total_Out.classList.remove("is-invalid");
                dateOut.classList.remove("is-invalid");


                typeOut.classList.remove("is-valid");
                total_Out.classList.remove("is-valid");
                dateOut.classList.remove("is-valid");
            }

            function clearFormSaveValid() {


                nameSave.classList.remove("is-invalid");
                whySave.classList.remove("is-invalid");
                CashSave.classList.remove("is-invalid");
                numPaySave.classList.remove("is-invalid");



                nameSave.classList.remove("is-valid");
                whySave.classList.remove("is-valid");
                CashSave.classList.remove("is-valid");
                numPaySave.classList.remove("is-valid");

                nameSave.value = "";
                whySave.value = "";
                CashSave.value = "";
                numPaySave.value = "";
            }

            function ClearFormIncomingValid() {

                dateIncome.classList.remove("is-valid");
                dateIncome.classList.remove("is-invalid");
                typeIncoming.classList.remove("is-valid");
                typeIncoming.classList.remove("is-invalid");
                totalcash.classList.remove("is-valid");
                totalcash.classList.remove("is-invalid");

            }

            function ClearFormLoanValid() {
                CashLoan.classList.remove("is-invalid");
                totalYear.classList.remove("is-invalid");
                infoLoan.classList.remove("is-invalid");
                bankType.classList.remove("is-invalid");
                startLoan.classList.remove("is-invalid");


                CashLoan.classList.remove("is-valid");
                totalYear.classList.remove("is-valid");
                infoLoan.classList.remove("is-valid");
                bankType.classList.remove("is-valid");
                startLoan.classList.remove("is-valid");

                CashLoan.value = "";
                totalYear.value = "";
                infoLoan.value = "";
                bankType.value = "";
                startLoan.value = "";


            }

            document.addEventListener('click', (e) => {

                var page = e.target.id;
                var pagesplit = page.split(" ");
                // console.log(pagesplit[0]);

                if (page == 'HomeRow' || page == 'Home_Menu' || page == 'iHomeMenu') {

                    ClearFormIncomingValid();
                    clearClassSetting();
                    clearFormSaveValid();
                    clearFormInputValid();
                    ClearFormLoanValid();

                    SAVE_GET_DATA_HOME();
                    settingPage.style.display = 'none';
                    HOME_PAGE_GET_DATA_FOR_WEEKLY()
                    tablePage.style.display = 'none';
                    homePage.style.display = 'block';
                    save_loan_Page.style.display = 'none';
                    cardRow.style.background = 'none';
                    Card_page.style.display = 'none';
                    Home_Menu.classList.remove("text-white");
                    Home_Menu.classList.add("text-info");
                    Tableview_Menu.classList.remove("text-info");
                    Tableview_Menu.classList.add("text-white");
                    SettingTitle.classList.remove("text-info");
                    SettingTitle.classList.add("text-white");
                    Card_Menu.classList.remove("text-info");
                    Card_Menu.classList.add("text-white");
                    iHomeMenu.classList.remove("text-white");
                    iHomeMenu.classList.add("text-info");
                    iCardMenu.classList.remove("text-info");
                    iCardMenu.classList.add("text-white");

                    iTableView.classList.remove("text-info");
                    iTableView.classList.add("text-white");
                    iSetting.classList.remove("text-info");
                    iSetting.classList.add("text-white");
                    HomeRow.style.background = " rgb(24, 24, 24)";
                    TableRow.style.background = "none";
                    SettingRow.style.background = "none";
                    savingRow.style.background = "none";

                    savingTitle.classList.remove("text-info");
                    savingTitle.classList.add("text-white");
                    isaving.classList.remove("text-info");
                    isaving.classList.add("text-white");
                } else if (page == 'cardRow' || page == 'Card_Menu' || page == 'iCardMenu') {

                    clearFormSaveValid();
                    ClearFormIncomingValid();
                    clearClassSetting();
                    clearFormInputValid();
                    ClearFormLoanValid();

                    mainTable.innerHTML = "";
                    // TABLE_PAGE_GET_DATA();
                    // console.log('table view button');
                    settingPage.style.display = 'none';
                    homePage.style.display = 'none';
                    tablePage.style.display = 'none';
                    Card_page.style.display = 'block';

                    GET_DATA_PAGE_CARD();
                    HomeRow.style.background = "none";
                    savingRow.style.background = "none";
                    save_loan_Page.style.display = 'none';
                    TableRow.style.background = "none";

                    Card_Menu.classList.remove("text-white");
                    Card_Menu.classList.add("text-info");
                    iCardMenu.classList.remove("text-white");
                    iCardMenu.classList.add("text-info");
                    cardRow.style.background = " rgb(24, 24, 24) ";
                    SettingRow.style.background = "none";
                    Tableview_Menu.classList.remove("text-info");
                    Tableview_Menu.classList.add("text-white");
                    Home_Menu.classList.remove("text-info");
                    Home_Menu.classList.add("text-white");
                    SettingTitle.classList.remove("text-info");
                    SettingTitle.classList.add("text-white");
                    iHomeMenu.classList.remove("text-info");
                    iHomeMenu.classList.add("text-white");
                    iTableView.classList.remove("text-info");
                    iTableView.classList.add("text-white");
                    iSetting.classList.remove("text-info");
                    iSetting.classList.add("text-white");
                    savingTitle.classList.remove("text-info");
                    savingTitle.classList.add("text-white");
                    isaving.classList.remove("text-info");
                    isaving.classList.add("text-white");
                } else if (page == 'TableRow' || page == 'Tableview_Menu' || page == 'iTableView') {

                    clearFormSaveValid();
                    ClearFormIncomingValid();
                    clearClassSetting();
                    clearFormInputValid();
                    ClearFormLoanValid();

                    mainTable.innerHTML = "";
                    TABLE_PAGE_GET_DATA();
                    // console.log('table view button');
                    settingPage.style.display = 'none';
                    homePage.style.display = 'none';
                    tablePage.style.display = 'block';
                    HomeRow.style.background = "none";
                    savingRow.style.background = "none";
                    save_loan_Page.style.display = 'none';
                    Card_page.style.display = 'none';
                    cardRow.style.background = 'none';
                    iCardMenu.classList.remove("text-info");
                    iCardMenu.classList.add("text-white");
                    Card_Menu.classList.remove("text-info");
                    Card_Menu.classList.add("text-white");
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
                    savingTitle.classList.remove("text-info");
                    savingTitle.classList.add("text-white");
                    isaving.classList.remove("text-info");
                    isaving.classList.add("text-white");
                } else if (page == 'SettingRow' || page == 'SettingMenu' || page == 'iSetting') {

                    clearFormSaveValid();
                    clearFormInputValid();
                    ClearFormIncomingValid();
                    ClearFormLoanValid();

                    settingPage.style.display = 'block';
                    homePage.style.display = 'none';
                    tablePage.style.display = 'none';
                    HomeRow.style.background = "none";
                    TableRow.style.background = "none";
                    savingRow.style.background = "none";
                    save_loan_Page.style.display = 'none';
                    Card_page.style.display = 'none';
                    cardRow.style.background = 'none';
                    iCardMenu.classList.remove("text-info");
                    iCardMenu.classList.add("text-white");
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
                    savingTitle.classList.remove("text-info");
                    savingTitle.classList.add("text-white");
                    Card_Menu.classList.remove("text-info");
                    Card_Menu.classList.add("text-white");
                    isaving.classList.remove("text-info");
                    isaving.classList.add("text-white");

                } else if (page == 'isaving' || page == 'savingTitle' || page == 'savingRow' || page == "boxClick") {
                    clearFormSaveValid();
                    clearClassSetting();
                    clearFormInputValid();
                    ClearFormIncomingValid();
                    ClearFormLoanValid();

                    settingPage.style.display = 'none';
                    homePage.style.display = 'none';
                    tablePage.style.display = 'none';
                    save_loan_Page.style.display = 'block';
                    HomeRow.style.background = "none";
                    TableRow.style.background = "none";
                    SettingRow.style.background = "none";
                    Card_page.style.display = 'none';
                    cardRow.style.background = 'none';
                    iCardMenu.classList.remove("text-info");
                    iCardMenu.classList.add("text-white");
                    savingRow.style.background = " rgb(24, 24, 24) ";
                    savingTitle.classList.remove("text-white");
                    savingTitle.classList.add("text-info");
                    Card_Menu.classList.remove("text-info");
                    Card_Menu.classList.add("text-white");


                    SettingTitle.classList.add("text-white");
                    SettingTitle.classList.remove("text-info");
                    Home_Menu.classList.remove("text-info");
                    Home_Menu.classList.add("text-white");
                    Tableview_Menu.classList.remove("text-info");
                    Tableview_Menu.classList.add("text-white");
                    iHomeMenu.classList.remove("text-info");
                    iHomeMenu.classList.add("text-white");
                    iTableView.classList.remove("text-info");
                    iTableView.classList.add("text-white");
                    iSetting.classList.remove("text-info");
                    iSetting.classList.add("text-white");
                    isaving.classList.remove("text-white");
                    isaving.classList.add("text-info");

                    SAVING_GET_DATA();
                    LOAN_GET_DATA();
                    alertBox.innerHTML = ""
                    alertBox.innerHTML = Promt("?אתה בטוח שאתה רוצה למחוק הלוואה זו", "loan", "rowloan") + Promt("?אתה בטוח שאתה רוצה למחוק פקדון זה", "save", "saveloan");
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
                } else if (page == 'paymentSave') {
                    console.log('block');
                    creditboxSave.style.display = "block";
                } else if (page == 'onceSave') {
                    creditboxSave.style.display = "none";

                } else if (page == 'yearlySave') {
                    creditboxSave.style.display = "none";

                }

                // if (page == 'iconminusbtn') {
                //     // addCorrectDayToInput("dateOut");
                // } else if (page == 'iconaddbtn') {
                //     addCorrectDayToInput("dateIncoimg");
                // }

                if (page == 'choosWeekly') {
                    mainTable.innerHTML = "";

                    bitweenClose();
                    TABLE_PAGE_GET_DATA();

                } else if (page == 'chooseMonthly') {
                    mainTable.innerHTML = "";

                    bitweenClose();
                    TABLE_PAGE_GET_DATA();
                } else if (page == 'chooseYearly') {
                    mainTable.innerHTML = "";

                    bitweenClose();
                    TABLE_PAGE_GET_DATA();
                } else if (page == 'chooseBitweenDates') {
                    mainTable.innerHTML = "";

                    bitweenDates.style.display = "block";
                    btn_BitweenDates.addEventListener('click', e => {
                        mainTable.innerHTML = ""
                        TABLE_PAGE_GET_DATA();
                    })
                }

                if (page == 'monthlyChart') {
                    HOME_PAGE_GET_DATA_FOR_WEEKLY();
                } else if (page == 'weeklyChart') {
                    HOME_PAGE_GET_DATA_FOR_WEEKLY();
                }

            });

            var settingform = document.getElementById("settingform");

            buttonSettingFirst.addEventListener('click', (e) => {

                e.preventDefault();

                var dateexpend = date_i.value;
                var dateExpend = FormatDate(dateexpend)
                var status_Start = startYear.value;
                var credit_Line = creditLine.value;
                var credit_Bank = bankLine.value;
                var date_Expend = dateExpend;

                console.log(status_Start, credit_Line, credit_Bank, dateexpend);

                console.log(startYear, bankLine, creditLine, date_i);
                if (dateexpend == "") {
                    date_i.classList.remove("is-valid");
                    date_i.classList.add("is-invalid");
                } else {
                    date_i.classList.remove("is-invalid");
                    date_i.classList.add("is-valid");
                }
                if (credit_Line == "") {
                    creditLine.classList.remove("is-valid");
                    creditLine.classList.add("is-invalid");
                } else {
                    creditLine.classList.remove("is-invalid");
                    creditLine.classList.add("is-valid");
                }
                if (credit_Bank == "") {
                    bankLine.classList.remove("is-valid");
                    bankLine.classList.add("is-invalid");
                } else {
                    bankLine.classList.remove("is-invalid");
                    bankLine.classList.add("is-valid");
                }

                if (status_Start == "") {
                    startYear.classList.remove("is-valid");
                    startYear.classList.add("is-invalid");
                } else {
                    startYear.classList.remove("is-invalid");
                    startYear.classList.add("is-valid");
                }

                if (dateexpend !== "" && credit_Line !== "" && credit_Bank !== "" && status_Start !== "") {

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
                            status: "",
                            info: ""
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
                            status: "",
                            info: ""
                        }
                        updates['/Users/' + user.uid + '/cashflow/' + numDate] = postdata;
                        firebase.database().ref().update(updates);
                    }

                    updatessetting['/Users/' + user.uid + '/setting/' + 'firstSetting/'] = postdataSetting;
                    firebase.database().ref().update(updatessetting);
                    startYear.value = '';
                    creditLine.value = '';
                    bankLine.value = '';
                    date_i.value = '';




                    settingPage.style.display = 'none';
                    HOME_PAGE_GET_DATA_FOR_WEEKLY()
                    tablePage.style.display = 'none';
                    homePage.style.display = 'block';
                    save_loan_Page.style.display = 'none';

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
                    savingRow.style.background = "none";

                    savingTitle.classList.remove("text-info");
                    savingTitle.classList.add("text-white");
                    isaving.classList.remove("text-info");
                    isaving.classList.add("text-white");

                    // var div = `<div class="bgStartNote">
                    // <div class="display-2 text-white">!בהצלחה</div>
                    // </div>`
                    // document.body.innerHTML = div;
                }


                // mainTable.innerHTML = "";
            });


            database.ref('/Users/' + user.uid + '/setting/firstSetting/').on('value', function (snapshot) {

                var after = snapshot.val().creditBank;
                if (after !== undefined || after !== null) {
                    currectLimit = after;
                    return currectLimit;
                } else {
                    console.log("empty");
                }


            });
            // console.log(currectLimit);

            setPhotoUser();
            // saveNewWord();
            HOME_PAGE_GET_DATA_FOR_WEEKLY();
            HOME_PAGE_GET_DATA_FOR_CALNDER();

            async function chartTypeChart(d) {

                var inarr = [];
                var out = [];
                var title = [];
                var colorarray = "";
                var name = "";
                var lign = '';
                // var newArray = [];
                d.forEach(x => {
                    inarr.push(Math.abs(x[1]));
                    // newArray.push(x[1]);
                    title.push(x[0]);
                });

                var limit = CHECK_HIGHER(inarr);


                if (inarr.length == 0) {
                    inarr = [0, 0];
                    title = ['', ""];
                    colorarray = ['#17a2b8', '#17a2b8'];
                    name = "pie";
                } else if (inarr.length == 2) {
                    colorarray = ['#50dd50', '#ff6184'];
                    name = "pie";

                } else if (inarr.length >= 6) {
                    colorarray = colorAray(inarr);
                    name = "pie";


                } else if (inarr.length < 6) {
                    colorarray = colorAray(inarr);
                    name = "pie";
                }

                var ctxType = document.getElementById('chartTypeTable').getContext("2d");
                function colorAray(inarr) {
                    var newARRAY = [];
                    inarr.forEach(x => {
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
                    return newARRAY
                }

                var labelsnew = ["מעל 500", "מעל 1000", "מעל 1500", "מעל 2000", " מעל 2500"];
                data = {
                    labels: title,
                    datasets: [{
                        label: title,
                        data: inarr,
                        fill: true,
                        backgroundColor: colorarray
                    }],
                };

                if (window.doughnut != undefined) {
                    window.doughnut.destroy();
                }
                window.doughnut = new Chart(ctxType, {
                    type: name,
                    data: data,
                    options: {
                        legend: {
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
                    }
                });
            }

            async function chartTypeCardChart(d) {

                var inarr = [];
                var out = [];
                var title = [];
                var colorarray = "";
                var name = "";
                var lign = '';
                // var newArray = [];
                d.forEach(x => {
                    inarr.push(Math.abs(x[1]));
                    // newArray.push(x[1]);
                    title.push(x[0]);
                });

                var limit = CHECK_HIGHER(inarr);


                if (inarr.length == 0) {
                    inarr = [0, 0];
                    title = ['', ""];
                    colorarray = ['#17a2b8', '#17a2b8'];
                    name = "pie";
                } else if (inarr.length == 2) {
                    colorarray = ['#50dd50', '#ff6184'];
                    name = "pie";

                } else if (inarr.length >= 6) {
                    colorarray = colorAray(inarr);
                    name = "pie";


                } else if (inarr.length < 6) {
                    colorarray = colorAray(inarr);
                    name = "pie";
                }

                var ctxType = document.getElementById('chartCardTable').getContext("2d");
                function colorAray(inarr) {
                    var newARRAY = [];
                    inarr.forEach(x => {
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
                    return newARRAY
                }

                var labelsnew = ["מעל 500", "מעל 1000", "מעל 1500", "מעל 2000", " מעל 2500"];
                data = {
                    labels: title,
                    datasets: [{
                        label: title,
                        data: inarr,
                        fill: true,
                        backgroundColor: colorarray
                    }],
                };

                if (window.doughnut != undefined) {
                    window.doughnut.destroy();
                }
                window.doughnut = new Chart(ctxType, {
                    type: name,
                    data: data,
                    options: {
                        legend: {
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
                    }
                });
            }
            var photo = document.getElementById("photo");
            var insertchart = document.getElementById("insertchart");
            var photohome = document.getElementById("photohome");
            var linechart = document.getElementById("linechart");
            var insertcharthome = document.getElementById("insertcharthome");
            var linechart_card = document.getElementById("linechart_card");
            var linecharthome = document.getElementById("linecharthome");



            var photo_card = document.getElementById("photo_card");
            var insertchart_card = document.getElementById("insertchart_card");
            document.addEventListener("click", e => {

                var key = e.target.id;
                if (key == "photo") {

                    photo.style.color = "#17a2b8"
                    insertchart.style.color = "#e2e2e2"
                    insertchart.classList.remove("checked");
                    photo.classList.add("checked");
                    mainTable.innerHTML = "";
                    linechart.style.color = "#e2e2e2";
                    linechart.classList.remove("checked");
                    TABLE_PAGE_GET_DATA();

                } else if (key == "insertchart") {
                    photo.style.color = "#e2e2e2";
                    insertchart.style.color = "#17a2b8";
                    linechart.style.color = "#e2e2e2";
                    linechart.classList.remove("checked");
                    insertchart.classList.add("checked");
                    photo.classList.remove("checked");
                    mainTable.innerHTML = "";
                    TABLE_PAGE_GET_DATA();

                } else if (key == "linechart") {
                    linechart.style.color = "#17a2b8";
                    photo.classList.remove("checked");
                    insertchart.classList.remove("checked");
                    linechart.classList.add("checked");


                    photo.style.color = "#e2e2e2";
                    insertchart.style.color = "#e2e2e2";
                    mainTable.innerHTML = "";

                    // HOME_PAGE_GET_DATA_FOR_WEEKLY();
                    TABLE_PAGE_GET_DATA();


                }
            })
            document.addEventListener("click", e => {
                var key = e.target.id;
                if (key == "photohome") {

                    photohome.style.color = "#17a2b8"
                    insertcharthome.style.color = "#e2e2e2"
                    linecharthome.style.color = "#e2e2e2"

                    insertcharthome.classList.remove("checked");
                    linecharthome.classList.remove("checked");

                    photohome.classList.add("checked");

                    HOME_PAGE_GET_DATA_FOR_WEEKLY();


                } else if (key == "insertcharthome") {
                    photohome.style.color = "#e2e2e2";
                    linecharthome.style.color = "#e2e2e2"

                    insertcharthome.style.color = "#17a2b8";
                    insertcharthome.classList.add("checked");
                    photohome.classList.remove("checked");
                    linecharthome.classList.remove("checked");

                    HOME_PAGE_GET_DATA_FOR_WEEKLY();
                } else if (key == "linecharthome") {
                    linecharthome.style.color = "#17a2b8";
                    linecharthome.classList.add("checked");
                    photohome.classList.remove("checked");
                    insertcharthome.classList.remove("checked");

                    photohome.style.color = "#e2e2e2";
                    insertcharthome.style.color = "#e2e2e2";

                    // HOME_PAGE_GET_DATA_FOR_WEEKLY();
                    HOME_PAGE_GET_DATA_FOR_WEEKLY();

                }

            });
            document.addEventListener("click", e => {
                var key = e.target.id;
                if (key == "photo_card") {

                    photo_card.style.color = "#17a2b8"
                    insertchart_card.style.color = "#e2e2e2"
                    linechart_card.style.color = "#e2e2e2";

                    insertchart_card.classList.remove("checked");
                    photo_card.classList.add("checked");
                    linechart_card.classList.remove("checked");

                    // HOME_PAGE_GET_DATA_FOR_WEEKLY();
                    GET_DATA_PAGE_CARD();


                } else if (key == "insertchart_card") {
                    photo_card.style.color = "#e2e2e2";
                    linechart_card.style.color = "#e2e2e2";

                    insertchart_card.style.color = "#17a2b8";

                    insertchart_card.classList.add("checked");
                    photo_card.classList.remove("checked");
                    linechart_card.classList.remove("checked");

                    // HOME_PAGE_GET_DATA_FOR_WEEKLY();
                    GET_DATA_PAGE_CARD();
                } else if (key == "linechart_card") {
                    linechart_card.style.color = "#17a2b8";
                    linechart_card.classList.add("checked");
                    photo_card.classList.remove("checked");
                    insertchart_card.classList.remove("checked");

                    photo_card.style.color = "#e2e2e2";
                    insertchart_card.style.color = "#e2e2e2";

                    // HOME_PAGE_GET_DATA_FOR_WEEKLY();
                    GET_DATA_PAGE_CARD();
                }

            });
            async function chartTableYearly(d) {
                var typeb = "";
                var inarr = [];
                var out = [];
                var title = [];
                d.forEach(x => {
                    inarr.push(Math.abs(x[1]));
                    out.push(Math.abs(x[2]));
                    title.push(x[0]);
                })
                var total = inarr.concat(out)
                console.log(total);
                var limit = "";
                if (total == 0) {
                    limit = 100;
                } else {
                    limit = CHECK_HIGHER(total) + 20;

                }
                var ctxc = document.getElementById('dual_x_div').getContext("2d");;
                var gradient_in_ctxc = ctxc.createLinearGradient(0, 0, 0, 400, 'repeat');
                var gradient_out_ctxc = ctxc.createLinearGradient(0, 0, 0, 400, 'repeat');

                gradient_out_ctxc.addColorStop(0, '#ff3d67');
                gradient_out_ctxc.addColorStop(1, '#ff98ae');
                gradient_in_ctxc.addColorStop(0, '#50dd50');
                gradient_in_ctxc.addColorStop(1, '#a6fda6');


                if (photo.classList[1] == "checked") {
                    typeb = "line"
                } else if (insertchart.classList[1] == "checked") {
                    // console.log("checked 2");
                    typeb = "bar"
                }

                if (linechart.classList[1] == "checked") {
                    typeb = "line";


                    dataset = [{
                        label: 'הכנסות',
                        data: inarr,
                        fill: false,
                        lineTension: 0,

                        backgroundColor: gradient_in_ctxc,
                        borderWidth: 2,
                        borderColor: gradient_in_ctxc

                    }, {
                        label: 'הוצאות',
                        data: out,
                        fill: false,
                        lineTension: 0,

                        backgroundColor: gradient_out_ctxc,
                        borderWidth: 2,
                        borderColor: gradient_out_ctxc
                    }]


                } else {
                    dataset = [{
                        label: 'הכנסות',
                        data: inarr,
                        backgroundColor: gradient_in_ctxc,
                        borderWidth: 1
                    }, {
                        label: 'הוצאות',
                        data: out,
                        fill: true,
                        backgroundColor: gradient_out_ctxc,
                        borderWidth: 1
                    }]

                }


                if (window.bar != undefined) {
                    window.bar.destroy();
                }

                window.bar = new Chart(ctxc, {
                    type: typeb,
                    data: {
                        labels: title,
                        datasets: dataset
                    },
                    options: {
                        responsive: true,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    min: 0,
                                    max: limit,
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

                    }
                });
            }

            function chartTable(i, o, d) {
                console.log(i, o, d);


                var limit = "";
                var type = "";
                var dataset = "";

                var inCom = [];
                var ouCom = [];
                i.forEach(x => {
                    inCom.push(Math.abs(x))
                });
                o.forEach(y => {
                    ouCom.push(Math.abs(y))
                })
                var total = inCom.concat(ouCom)
                var checkNum = CHECK_HIGHER(total);
                console.log(total);
                if (checkNum == 0) {
                    limit = 100;
                } else {
                    limit = checkNum + 20;


                }
                console.log(limit, checkNum);

                // console.log(type, i, o, d);
                var ctx = document.getElementById("chart_div").getContext("2d");
                var gradient_in = ctx.createLinearGradient(0, 0, 0, 400);
                var gradient_out = ctx.createLinearGradient(0, 0, 0, 400);

                gradient_out.addColorStop(0, '#ff3d67');
                gradient_out.addColorStop(1, '#ff98ae');
                gradient_in.addColorStop(0, '#50dd50');
                gradient_in.addColorStop(1, '#a6fda6');




                if (photohome.classList[1] == "checked") {
                    type = "line"
                } else if (insertcharthome.classList[1] == "checked") {
                    type = "bar"
                }

                if (linecharthome.classList[1] == "checked") {
                    type = "line";


                    dataset = [{
                        label: 'הכנסות',
                        data: inCom,
                        fill: false,
                        lineTension: 0,

                        backgroundColor: gradient_in,
                        borderWidth: 2,
                        borderColor: gradient_in

                    }, {
                        label: 'הוצאות',
                        data: ouCom,
                        fill: false,
                        lineTension: 0,

                        backgroundColor: gradient_out,
                        borderWidth: 2,
                        borderColor: gradient_out
                    }]


                } else {
                    dataset = [{
                        label: 'הכנסות',
                        data: inCom,
                        backgroundColor: gradient_in,
                        borderWidth: 1
                    }, {
                        label: 'הוצאות',
                        data: ouCom,
                        fill: true,
                        backgroundColor: gradient_out,
                        borderWidth: 1
                    }]

                }


                // var title = [];
                console.log(inCom, ouCom, type);



                if (window.bar != undefined) {
                    window.bar.destroy();
                }

                window.bar = new Chart(ctx, {
                    type: type,
                    data: {
                        labels: d,
                        datasets: dataset
                    }, options: {
                        responsive: true,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    min: 0,
                                    max: limit,
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

                    }
                });

            }
            function chartCard(o, d) {

                var type = "";
                var dataset = "";
                var ct_x = document.getElementById("dual_Card_div").getContext("2d");
                var gradient_in = ct_x.createLinearGradient(0, 0, 0, 400);
                var gradient_out = ct_x.createLinearGradient(0, 0, 0, 400);

                gradient_out.addColorStop(0, '#ff3d67');
                gradient_out.addColorStop(1, '#ff98ae');

                var inCom = [];
                var ouCom = [];
                // i.forEach(x => {
                //     inCom.push(Math.abs(x))
                // });
                o.forEach(y => {
                    ouCom.push(Math.abs(y))
                })
                // var title = [];

                if (photo_card.classList[1] == "checked") {
                    type = "line"
                } else if (insertchart_card.classList[1] == "checked") {
                    type = "bar"
                }

                if (linechart_card.classList[1] == "checked") {
                    type = "line";

                    dataset = [{
                        label: 'הוצאות',
                        data: ouCom,
                        fill: false,
                        lineTension: 0,
                        backgroundColor:
                            gradient_out,
                        borderColor:
                            gradient_out
                        ,
                        borderWidth: 2
                    }]


                } else {
                    dataset = [{
                        label: 'הוצאות',
                        data: ouCom,
                        fill: true,
                        backgroundColor:
                            gradient_out,
                        borderColor:
                            gradient_out
                        ,
                        borderWidth: 1
                    }]

                }


                var total = inCom.concat(ouCom)
                var checkNum = CHECK_HIGHER(total);
                console.log(total);
                var limit = "";
                if (checkNum == 0) {
                    limit = 100;
                } else {
                    limit = checkNum + 20;


                }
                console.log(limit, checkNum);

                // console.log(type, i, o, d);

                // gradient_in.addColorStop(0, '#50dd50');
                // gradient_in.addColorStop(1, '#a6fda6');

                if (window.bar != undefined) {
                    window.bar.destroy();
                }

                window.bar = new Chart(ct_x, {
                    type: type,
                    data: {
                        labels: d,
                        datasets: dataset,
                    }, options: {
                        responsive: true,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    min: 0,
                                    max: limit,
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

                    }
                });

            }

        } else {
            homePage.innerHTML = "";
            tablePage.innerHTML = "";
            settingPage.innerHTML = "";
            loggedInLinks.forEach(item => item.style.display = 'none');
            loggedOutLinks.forEach(item => item.style.display = 'inline-block');

        }
    })
}


