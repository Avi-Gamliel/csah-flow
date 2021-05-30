


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


auth.onAuthStateChanged(user => {
    let boxmain = document.getElementById("boxmain");
    let spinner = document.getElementById("spinner");
    if (document.readyState == 'loading') {
        // loading yet, wait for the event
        console.log("loading yet, wait for the event");

        // document.addEventListener('DOMContentLoaded', work);
    } else {
        console.log(" DOM is ready!");

        // DOM is ready!
        // work();
    }
    // console.log(state);
    // if (state == "loading") {
    //     spinner.style.display = "block"
    // } else if (state == "loading") {

    // }

    // console.log(spinner);
    boxmain.addEventListener('laod', function () {
        setTimeout(removeLoader, 2000);

        function removeLoader() {
            spinner.style.display = "none"
            console.log('in');
        }


    });
    if (user) {
        console.log(2);
        console.log(1);

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

                    // currectCash = currectCash - num;

                    updates['/Users/' + user.uid + '/cashflow/' + start_Date] = postdata;
                    firebase.database().ref().update(updates);

                    updatesm['/Users/' + user.uid + '/monthly/Jan/in/' + numdate] = postdatam;
                    firebase.database().ref().update(updatesm);

                    updatesm['/Users/' + user.uid + '/monthly/Jan/out/' + numdate] = postdatam;
                    firebase.database().ref().update(updatesm);

                }

            });
        }
        addFirstYear();


        // img.setAttribute("src", user.photoURL);
        // setup_project(user);


        loggedInLinks.forEach(item => item.style.display = 'inline-block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
        jQuery(window).on('load', function () {
            setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
            setTimeout(removehide, 2000); //wait for page load PLUS two seconds.

        });
        function removeLoader() {

            // fadeOut complete. Remove the loading div
            jQuery("#spinner").remove(); //makes page more lightweight 

        }
        function removehide() {
            jQuery("#spinner").hide(); //makes page more lightweight 

        }
        // if (user) {


        //     // location.reload();
        // } else {

        // }
        // // function wait2(){

        // window.addEventListener('load', e => {

        //     spinner.parentElement.removeChild(spinner)
        //     console.log('finish');
        // });
        // }
        // wait2()
        var Limit = 0;
        var Importantday = 0;
        var Limit = 0;
        console.log(user.displayName);

        // var laodingName = document.getElementById("laodingName");
        // laodingName.textContent = user.displayName;

        database.ref('/Users/' + user.uid + '/setting/firstSetting/').once('value').then(snapshot => {
            Limit = snapshot.val().cuurentCash;
        });

        var Status = document.getElementById('Status');
        var num_currectStatusCash = document.getElementById('num_currectStatusCash');

        //     var cahrtBtnLines = document.getElementById("insertcharthome");
        //     var photohome = document.getElementById("photohome");

        // documen-

        // document.addEventListener('click', e => {
        //     let key = e.target.id;
        //     console.log(key);
        //     if (key == "home_btn_side") {
        //         tablePage.style.display = 'none';
        //         homePage.style.display = 'block';
        //         settingPage.style.display = 'none';
        //     } else if (key == "table_btn_side") {
        //         tablePage.style.display = 'block';
        //         homePage.style.display = 'none';
        //         settingPage.style.display = 'none';
        //     } else if (key == "setting_btn_side") {
        //         tablePage.style.display = 'none';
        //         homePage.style.display = 'none';
        //         settingPage.style.display = 'block';
        //     }
        // });

        var header = document.getElementById("outHome");
        var inHome = document.getElementById("inHome");
        // var inHome = document.getElementById("inHome");


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
                savingTitle.style.display = 'block';


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

                navbar.classList.remove('col-11');
                navbar.classList.add('col-10');
                navbar.classList.remove('offset-1');
                navbar.classList.add('offset-2');

                HomeMenu.classList.add('ml-3');
                HomeMenu.style.marginLeft = '0px';
                saveMenu.classList.add('ml-3');
                saveMenu.style.marginLeft = '0px';
                TableviewMenu.classList.add('ml-3');
                TableviewMenu.style.marginLeft = '0px';

                SettingMenu.classList.add('ml-3');
                SettingMenu.style.marginLeft = '0px';
                e.target.classList.remove("check");

            } else if (key == "navbar-toggler-icon") {

                navbar.classList.remove('col-10');
                navbar.classList.add('col-11');
                navbar.classList.remove('offset-2');
                navbar.classList.add('offset-1');
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
                HomeMenu.classList.remove('ml-3');
                HomeMenu.style.marginLeft = '32px';

                SettingMenu.classList.remove('ml-3');
                SettingMenu.style.marginLeft = '32px';

                TableviewMenu.classList.remove('ml-3');
                TableviewMenu.style.marginLeft = '32px';
                saveMenu.classList.remove('ml-3');
                saveMenu.style.marginLeft = '32px';
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


        /////////***********************************/////// */
        loanForm.addEventListener('submit', (e) => {
            e.preventDefault();
            var st = false;
            var core_Date = createNewDate();
            var month__Today = core_Date.month;
            var year__Today = core_Date.year;

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
            var yearthatpay = Number(year__Today) - Number(year); //0 ///1 //2 
            var prev_year_left = "";
            var prevmonthYear = "";

            if (yearthatpay >= 1) {
                prev_year_left = yearthatpay - 1;
                prevmonthYear = prev_year_left * 12;

            }
            var totalmonth = yearthatpay * 12;
            var monthy = "";
            var untilToday = month[month__Today];




            if (year < corectYear) {
                // monthy = getmonth();
                // console.log(monthy);
                console.log(countMOnth, month[monthb], prevmonthYear, untilToday);
                monthy = month[monthb] + prevmonthYear + untilToday;
                montleft = countMOnth - monthy;
                sumPay = monthPay * fixSum;
                left = CashLoanVal - sumPay;
            }

            var correctYearcash = 12 * fixSum;
            var totalleft = CashLoanVal - sumPay - correctYearcash;
            var nametrim = infoLoanVal.trim();
            var title = "";
            // var nametrim = name_Save.trim();
            database.ref('/Users/' + user.uid + '/loan/').on('value', function (snap) {

                var coreDate = createNewDate();
                var month_Today = coreDate.month;
                var year_Today = coreDate.year;
                let postArr = snap.val();
                let keysArr = Object.keys(postArr);
                var arr = [];


                for (var i = 0; i < keysArr.length; i++) {
                    var uid = keysArr[i];
                    var monthPay = postArr[uid].monthlyPay;
                    var dateStart = postArr[uid].startdate;
                    var cashloan = postArr[uid].monthlyPay;
                    var totalLoan = postArr[uid].totalCash;
                    title = postArr[uid].title;
                    var infoloan = postArr[uid].info;
                    var numYear = postArr[uid].numYear;

                }
            });

            title = title.trim();
            if (title !== nametrim) {
                console.log('exist');
                let newP = firebase.database().ref().child('Users').child(user.uid).child('loan').push().key;
                let newu = {};

                let pos = {
                    title: bankTypeVal,
                    info: infoLoanVal,
                    numYear: totalYearVal,
                    startdate: start_Loan,
                    totalCash: CashLoanVal,
                    monthlyPay: fixSum,
                    monthPass: monthy,
                    monthLeft: montleft,
                    totalMonth: countMOnth
                }


                newu['/Users/' + user.uid + '/loan/' + newP] = pos;
                firebase.database().ref().update(newu);
            }

            var loandate = "Jan" + " " + day + " " + corectYear;
            var type_Way_Pay_laon = " הלוואה ";
            var title = bankTypeVal + " בנק ";

            // for (var x in month) {
            //     console.log(loandate);
            // }
            console.log(("out", infoLoanVal, title, loandate, fixSum, 'yearly', type_Way_Pay_laon, 'true'));
            addDb("out", infoLoanVal, title, loandate, fixSum, 'yearly', type_Way_Pay_laon, 'true');

        });

        loanSave.addEventListener('submit', (e) => {
            e.preventDefault();
            var nameSave = document.getElementById("nameSave");
            var whySave = document.getElementById("whySave");
            var CashSave = document.getElementById("CashSave");
            var numPaySave = document.getElementById("numPaySave");



            var name_Save = nameSave.value; // nam_save
            var why_Save = whySave.value; // reason save
            var Cash_Save = "-" + CashSave.value; // cash
            var start_Save = startSave.value;
            var num_Pay_Save = numPaySave.value; // destination
            var start_Save_format = FormatDate(start_Save);
            var type_Way_Pay = "";


            groupSave.forEach(function (y) {
                if (y.checked) {
                    var W = y.id;
                    console.log(W);
                    return type_Way_Pay = W;
                }

            });

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





            console.log(type_Way_Pay);
            addDb("out", why_Save, name_Save, start_Save_format, Cash_Save, type_Way_Pay, 'חסכון', 'false');

            console.log(type_Way_Pay, name_Save, why_Save, Cash_Save, num_Pay_Save, start_Save_format);

        });

        function addDb(Type, i, t, d, c, P, W, Temp) {

            var corMonth = d.split(" ");
            var correctMonth = corMonth[0];
            var correctDay = corMonth[1].split(",")[0];
            var correctYear = corMonth[2];
            var numMonth = month[correctMonth];
            var key = P.toString();
            console.log(key);
            function addToDataBase(date, s) {

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

                database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').on('value', snapshot => {

                    let postArray = snapshot.val();
                    let keys = Object.keys(postArray);

                    for (var i = 0; i < keys.length; i++) {
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
                            status = object.type;


                        }
                    }
                });
                console.log(dataCash, chashFlow, waypay);
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
                        console.log(keysCash);
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
                        console.log(uwp, uobg, uid, cashsub);
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
                                    status: s
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
                                status: s
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
                                status: status
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
                                status: s
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
                                status: 'כללי'
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
                            status: status
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
                            status: s
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
                            status: 'כללי'
                        });
                    }

                } else {
                    // let newPostKey = firebase.database().ref().child('Users').child(user.uid).child('cashflow').child(dateCashNum).push().key;

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

            }
            console.log(P);
            if (key == 'onceIn' || key == 'once' || key == 'onceSave') {

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

            } else if (key == 'yearlyIn' || key == 'yearly' || key == 'yearlySave') {

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


            } else if (key == 'paymentIn' || key == 'payment' || key == 'paymentSave') {

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
                }
                console.log(numpay);
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
            // console.log(d, n);

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
            var row = document.getElementById("titleBoxTableBalance");
            var iconbal = document.getElementById("icon_Balance");
            var divide = I / 100;
            var precent = Math.abs(O) / divide;
            console.log(divide);
            console.log(precent);
            var num_currectStatusCash = document.getElementById("Status");

            if (precent > 0 && precent !== Infinity) {
                num_currectStatusCash.textContent = precent.toFixed(0) + "%"

            } else if (precent == Infinity) {
                num_currectStatusCash.textContent = "הזן הכנסות"

            }

            // if (precent < 50) {
            //     num_currectStatusCash.style.color = "#50dd50 !important";
            // } else if (precent >= 50 && precent <= 80) {
            //     num_currectStatusCash.style.color = "#17a2b8 !important";

            // } else if (precent > 80 && precent <= 100) {
            //     num_currectStatusCash.style.color = "#ff643d !important";

            // } else if (precent > 100) {
            //     num_currectStatusCash.style.color = "#ff3d67";

            // }
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
                                // console.log(x);
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
            // console.log(t, Type);
            var exists = false;
            var textTrim = t.trim();

            database.ref('/Users/' + user.uid + '/setting/text/' + Type).orderByChild("word").equalTo(textTrim).once("value").then(function (snapshot) {
                // console.log(snapshot);
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

            var monthC = months[date.getMonth()]
            document.querySelector("#monthCalnder").innerHTML = switch_full_Eng_To_Heb_Month(monthC);

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

        function laodUpData(I, doc, S, A, pr, sum) {
            var dt = "";

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
                console.log("1");
                // console.log('addDataTable');
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
                // console.log(day, daysplit, day === daysplit);
                if (day === daysplit) {
                    rowtable.classList.add("newRow");
                    rowtable.classList.add("importantDay");
                    rowtable.classList.add("shadow-sm");


                } else {
                    rowtable.setAttribute('class', 'newRow');

                }
                // rowtable.setAttribute("class", "temporaryRow")
                rowtable.setAttribute('id', 'newRow' + "-" + I);
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

                if (pr > 0) {
                    let imgAfter = document.createElement("img");
                    imgAfter.setAttribute("class", "imgIls");
                    TotalCashAfter.style.color = '#50dd50';
                    imgAfter.setAttribute("src", "./img/greeb01-01.png");
                    if (wayPay == "כרטיס אשראי") {
                        TotalCashAfter.textContent = 'יורד ב- ' + day + " " + hebmonth;
                        TotalCashAfter.style.fontWeight = "bold";
                        TotalCashAfter.style.color = '#ff3d67';
                    } else if (wayPay !== "כרטיס אשראי") {
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
                        TotalCashAfter.textContent = 'יורד ב- ' + day + " " + hebmonth;
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

                        // console.log(parents);
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
                                    TotalCashAfter.textContent = 'יורד ב- ' + day + " " + hebmonth;
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


                    });


                }
                // document.addEventListener('click', e => {
                //     console.log(e.target);
                // })
            }


        }

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
            // console.log(cash_flow_cal[1], cash_flow_cal[0]);
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
            // console.log(month_cal);
            database.ref('/Users/' + user.uid + '/setting/firstSetting/').on('value', snapshot => {
                // console.log(snapshot.val().cuurentCash);
                Limit = snapshot.val().cuurentCash;
                var importantDay = snapshot.val().importantDay;
                // console.log(importantDay);

                var impDate = importantDay.split(" ")[1].split(",")[0];
                // console.log(dayRow);
                // Importantday += impDate;
                // console.log(importantDay);
                for (var i = 0; i < calDays.length; i++) {

                    var typedate = calDays[i].className;
                    var numdate = calDays[i].textContent;
                    var datenumDb = 0;
                    var datenumCalender = 0;
                    if (typedate == "prev-date" || typedate == "next-date") {


                    } else {
                        var fullMonthIndex = hebMonth.indexOf(month_cal);
                        // console.log(fullMonthIndex);
                        var shortMonth = monthShort[fullMonthIndex];
                        // console.log(impDate);
                        // console.log(day_num_Db, numdate, shortMonth, month_db, year_db);
                        // console.log(Importantday);
                        var dayRow = document.getElementById(impDate).classList.add("importantday");
                        // dayRow.style.color = "rgb(61, 161, 255)";

                        // console.log(day_db);

                        // console.log(day_db, numdate, "- ", shortMonth, month_db, " - ", year_db);
                        if (day_db == numdate && shortMonth == month_db && year_db == "2020") {
                            // console.log("connect", numdate, calDays[i]);
                            calDays[i].style.color = "rgb(61, 161, 255)";

                            var sumIncomingOutcoming = cash_flow_cal[0] + cash_flow_cal[1];
                            // console.log(cash_flow_cal[1], cash_flow_cal[0]);

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
                // console.log('in');
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
            console.log(5);
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

            database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').on('value', function (snapshot) {

                postArray = snapshot.val();
                keys = Object.keys(postArray);

            });

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
                                // arraydata.push(id, currentObject, StatusCash, currectLimit, arrayafter, sum);
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
                                // arraydata.push(id, currentObject, StatusCash, currectLimit, arrayafter, sum);

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
                                                if (sub_currentObject.wayPay !== 'כרטיס אשראי') {
                                                    typeExpend.push([sub_title, sub_currectnum]);

                                                }
                                            } else if (sub_type == "in") {

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
                                console.log(typeExpend);
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
                                // arraydata.push(id, currentObject, StatusCash, currectLimit, arrayafter, sum);

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
            // arraydata.forEach(x => {
            //     console.log(x[0], x[1], x[2], x[3], x[4], x[5]);
            //     laodUpData(x[0], x[1], x[2], x[3], x[4], x[5]);
            // });
            groupView.forEach(e => {
                var key = e.checked;
                var uid = e.id;
                console.log(arraydata);
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

                                    // console.log(x[1]);
                                    // x[0] = hebmonth[];
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
                    getDatesFromCalender(id, currentObject, StatusCash, currectLimit, arrayafter);
                }

            });
        }

        // function UPDATE_CORRECT_CASH() {
        //     var sttus_cash = 0;
        //     var totalcash = 0;

        //     database.ref('/Users/' + user.uid + '/setting/firstSetting/').on('value', snapshot => {
        //         var data = snapshot.val();
        //         var statusCash = data.cuurentCash;
        //         sttus_cash = statusCash;
        //     });
        //     var sum = sttus_cash;
        //     database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').on('value', snapshot => {

        //         let postArray = snapshot.val();
        //         let keys = Object.keys(postArray);
        //         var arrayafter = 0;

        //         for (var i = 0; i < keys.length; i++) {

        //             // var arrayafter = 0;
        //             var subcash = 0;

        //             var id = keys[i];
        //             var currentObject = postArray[id];
        //             var currectnum = currentObject.totalCash;

        //             // var before = keys[i - 1];
        //             if (currentObject.wayPay !== 'כרטיס אשראי' && currentObject.wayPay !== 'פעילות מרובה') {
        //                 sum += currectnum;
        //                 // console.log(sum, currectnum);
        //             } else if (currentObject.wayPay == 'פעילות מרובה') {
        //                 database.ref('/Users/' + user.uid + '/cashflow/' + id + '/chashFlow/').orderByChild('number').on('value', snapshot => {

        //                     let post_Array = snapshot.val();
        //                     let keys_sub = Object.keys(post_Array);
        //                     var arrayafter = 0;

        //                     for (var j = 0; j < keys_sub.length; j++) {
        //                         // var arrayafter = 0;
        //                         var uid = keys_sub[j];
        //                         var current_Object = post_Array[uid];
        //                         var currectnum_sub = current_Object.totalCash;
        //                         if (current_Object.wayPay !== 'כרטיס אשראי') {
        //                             subcash += current_Object.totalCash;
        //                         }
        //                     }


        //                 });
        //             }
        //             console.log(subcash);
        //             console.log(subcash + sum);

        //             //     var beforeObject = postArray[before];
        //             //     var date = currentObject.date;
        //             //     var temp = currentObject.after;
        //             //     // arrayafter += currectnum;
        //             //     var before = keys[i - 1];

        //             //     // arrayafter += currectnum;
        //             //     var sumb = subcash + sum;



        //             //     console.log(sumb);
        //             //     if (before == undefined) {
        //             //         continue;
        //             //     } else {

        //             //         if (id < num_newdate) {
        //             //             continue;
        //             //         } else if (id == num_newdate) {
        //             //             addStatusCash(sumb);
        //             //             break;
        //             //         } else if (id > num_newdate) {
        //             //             // SEND DATA AFTER BEFORE CASH
        //             //             var correctDatebefore = beforeObject.date;
        //             //             var cash = beforeObject.totalCash;
        //             //             var total = sumb - currectnum;
        //             //             addStatusCash(total);
        //             //             break;
        //             //         }
        //             //     }
        //             //     function addStatusCash(sumb) {
        //             //         var number = formatNumber(sumb.toFixed(2));
        //             //         var splitnum = number.split(".");
        //             //         let spanNum = document.createElement('span');
        //             //         let numCor = document.createElement('span');
        //             //         spanNum.setAttribute("class", "decimel");
        //             //         numCor.setAttribute("class", "decimel");
        //             //         spanNum.textContent = splitnum[1];
        //             //         numCor.textContent = splitnum[1];
        //             //         Status.textContent = splitnum[0] + ".";
        //             //         num_currectStatusCash.textContent = splitnum[0] + ".";
        //             //         num_currectStatusCash.appendChild(numCor);
        //             //         Status.appendChild(spanNum);
        //             //     }
        //         }
        //     });
        // }

        // UPDATE_CORRECT_CASH();

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

        function HOME_PAGE_GET_DATA_FOR_WEEKLY() {

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
                var SUMMUST = 0;
                var SUMSAVE = 0;
                var dayWithMultiCashFlow = [];
                var loan = 0;
                var save = 0;

                for (var i = 0; i < keys.length; i++) {
                    var id = keys[i];
                    console.log(id, i);
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
                    console.log(wayPay.trim());
                    if (wayPay.trim() == 'חסכון') {
                        save += currectnum;
                    }
                    if (wayPay.trim() == 'הלוואה') {
                        loan += currectnum;
                    }
                    if (currentObject.chashFlow) {
                        console.log(currentObject.chashFlow);
                        // if (wayPay == 'חסכון') {
                        // }
                        // if (wayPay == 'הלוואה') {
                        // }
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
                                        console.log(i);

                                        database.ref('/Users/' + user.uid + '/cashflow/' + id + "/chashFlow/").orderByChild('number').on('value', snapshot => {

                                            let subPostArray = snapshot.val();
                                            let SubKeys = Object.keys(subPostArray);
                                            var subIn = 0;
                                            var subOut = 0;
                                            var must = 0;
                                            var saving = 0;
                                            console.log(SubKeys);

                                            for (var k = 0; k < SubKeys.length; k++) {
                                                var newuid = SubKeys[k];
                                                database.ref('/Users/' + user.uid + '/cashflow/' + id + "/chashFlow/" + newuid + '/').on('value', snap => {
                                                    var dataDb = snap.val();
                                                    if (dataDb.wayPay == 'חסכון') {
                                                        console.log(k);
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
                                                        } else if (dataDb.wayPay == 'כרטיס אשראי') {
                                                            credit += dataDb.totalCash;
                                                        }

                                                    } else if (dataDb.type == 'in') {
                                                        subIn += dataDb.totalCash;
                                                    }
                                                });
                                            }
                                            console.log(must);
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


                                            } else if (wayPay == 'כרטיס אשראי') {
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
                                                        } else if (dataDb.wayPay == 'כרטיס אשראי') {

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

                                            console.log(must_b);
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

                console.log(save, loan);
                console.log(SUMMUST);
                console.log(SUMSAVE); // TOTAL SAVING

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
                console.log(SUMMUST);
                var divideMust = Math.abs(SUMOUT) / 100;
                var precentMust = Math.abs(SUMMUST) / divideMust;
                var sumleft = Number(100) - precentMust.toFixed(0);

                var formatMustprectnt = precentMust.toFixed(0) + "%";
                var divide = SUMIN / 100;
                var precent = Math.abs(SUMOUT) / divide;
                // var sumleft = precent - precentMust;

                // console.log(divide);
                // console.log(precent);
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
                // console.log(inprec, outprec);

                // if (inprec.toFixed("0") == NaN) {
                //     inn.textContent = "הכנסה -  0%";
                // } else {
                //     inn.textContent = "הכנסה - " + inprec.toFixed("0") + "%";
                // }
                // if (outprec.toFixed("0") == NaN) {
                //     outprec.textContent = "הוצאה -  0%";
                // } else {
                //     out.textContent = "הוצאה - " + outprec.toFixed("0") + "%";
                // }

                // if (sumleft.toFixed("0") == NaN) {
                //     precentExpend.textContent = "רשות - 0%";

                // } else {
                //     precentExpend.textContent = "רשות - " + sumleft + "%";

                // }
                // if (precentMusts.toFixed(0) == NaN) {
                //     precentExpendMust.textContent = "חובה -  0%";
                // } else {
                //     precentExpendMust.textContent = "חובה - " + formatMustprectnt;

                // }

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



                // if (precent < 50) {
                //     currectStatusCash.style.color = "#50dd50 !important";
                // } else if (precent >= 50 && precent <= 80) {
                //     currectStatusCash.style.color = "#17a2b8 !important";

                // } else if (precent > 80 && precent <= 100) {
                //     currectStatusCash.style.color = "#ff643d !important";

                // } else if (precent > 100) {
                //     currectStatusCash.style.color = "#ff3d67";

                // }

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
                var newdate = FormatDate(dateVal);
                var dataValNum = Date.parse(newdate);
                var highCashVal = highCash.value;
                var lowCashVal = lowCash.value;
                var textSearchVal = textSearch.value;
                var typeCashVal = typeCashSearch.value;
                var obg = [];

                if (textSearchVal === "" && typeCashVal !== "") {
                    database.ref('/Users/' + user.uid + '/cashflow/').orderByChild("wayPay").equalTo(typeCashVal).once('value').then(snapshot => {

                        let postArray = snapshot.val();
                        let keys = Object.keys(postArray);

                        for (var i = 0; i < keys.length; i++) {

                            var id = keys[i];
                            var currentObject = postArray[id];
                            var currectnum = currentObject.totalCash;
                            var type = currentObject.type;
                            var date = currentObject.date;
                            var title = currentObject.title;
                            var st = currentObject.status;
                            var way = currentObject.wayPay;

                            if (lowCashVal !== "" && highCashVal === "") {
                                if (currectnum < lowCashVal) {
                                    addToSearchBox(title, date, st, currectnum, way);
                                }
                            } else if (lowCashVal === "" && highCashVal !== "") {
                                if (currectnum > highCashVal) {
                                    addToSearchBox(title, date, st, currectnum, way);
                                }
                            } else if (lowCashVal !== "" && highCashVal !== "") {
                                if (currectnum > highCashVal && currectnum > highCashVal) {
                                    addToSearchBox(title, date, st, currectnum, way);
                                }
                            } else if (lowCashVal === "" && highCashVal === "") {
                                addToSearchBox(title, date, st, currectnum, way);
                                obg.push(currentObject);
                            }
                            obg.push(currentObject);
                        }
                    });

                } else if (typeCashVal === "" && textSearchVal !== "") {

                    database.ref('/Users/' + user.uid + '/cashflow/').orderByChild("title").equalTo(textSearchVal).once('value').then(snapshot => {

                        let postArray = snapshot.val();
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

                            if (lowCashVal !== "" && highCashVal === "") {
                                if (currectnum < lowCashVal) {
                                    addToSearchBox(title, date, st, currectnum, way);
                                }
                            } else if (lowCashVal === "" && highCashVal !== "") {
                                if (currectnum > highCashVal) {
                                    addToSearchBox(title, date, st, currectnum, way);
                                }
                            } else if (lowCashVal !== "" && highCashVal !== "") {
                                if (currectnum > highCashVal && currectnum > highCashVal) {
                                    addToSearchBox(title, date, st, currectnum, way);
                                }
                            } else if (lowCashVal === "" && highCashVal === "") {
                                addToSearchBox(title, date, st, currectnum, way);
                                obg.push(currentObject);
                            }
                        }

                    });

                } else if (typeCashVal !== "" && textSearchVal !== "") {

                    database.ref('/Users/' + user.uid + '/cashflow/').orderByChild("title").equalTo(textSearchVal).once('value').then(snapshot => {

                        let postArray = snapshot.val();
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
                            if (way === typeCashVal) {
                                obg.push(currentObject);
                                if (lowCashVal !== "" && highCashVal === "") {
                                    if (currectnum < lowCashVal) {
                                        addToSearchBox(title, date, st, currectnum, way);
                                    }
                                } else if (lowCashVal === "" && highCashVal !== "") {
                                    if (currectnum > highCashVal) {
                                        addToSearchBox(title, date, st, currectnum, way);
                                    }
                                } else if (lowCashVal !== "" && highCashVal !== "") {
                                    if (currectnum > highCashVal && currectnum > highCashVal) {
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
                        let postArray = snapshot.val();
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
                            if (lowCashVal !== "" && highCashVal === "") {
                                if (currectnum < lowCashVal) {
                                    addToSearchBox(title, date, st, currectnum, way);
                                }
                            } else if (lowCashVal === "" && highCashVal !== "") {
                                if (currectnum > highCashVal) {
                                    addToSearchBox(title, date, st, currectnum, way);
                                }
                            } else if (lowCashVal !== "" && highCashVal !== "") {
                                if (currectnum > highCashVal && currectnum > highCashVal) {
                                    addToSearchBox(title, date, st, currectnum, way);
                                }
                            }
                        }
                    });
                }

                if (dateVal !== "") {

                    database.ref('/Users/' + user.uid + '/cashflow/').orderByChild("date").equalTo(newdate).on('value', snapshot => {

                        let postArray = snapshot.val();
                        var current_Object = postArray[dataValNum];
                        var currect_num = current_Object.totalCash;
                        var type_num = current_Object.type;
                        var date_num = current_Object.date;
                        var st_num = current_Object.status;
                        var way_num = current_Object.wayPay;
                        var title_num = current_Object.title;

                        if (lowCashVal !== "" && highCashVal === "") {
                            if (currect_num < lowCashVal) {
                                addToSearchBox(title_num, date_num, st_num, currect_num, way_num);
                            }
                        } else if (lowCashVal === "" && highCashVal !== "") {
                            if (currect_num > highCashVal) {
                                addToSearchBox(title_num, date_num, st_num, currect_num, way_num);
                            }
                        } else if (lowCashVal !== "" && highCashVal !== "") {
                            if (currect_num > highCashVal && currect_num > highCashVal) {
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
        }

        SEARCH_PAGE_GET();

        function LOAN_GET_DATA() {
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
                    title = postArr[uid].title;
                    var infoloan = postArr[uid].info;
                    var numYear = postArr[uid].numYear;
                    var splitD = dateStart.split(" ");
                    var splittotal = totalLoan.split("-");
                    var monthlypay = cashloan.split("-");
                    var monthly_pay = monthlypay[1];
                    var total_cash = splittotal[1];
                    console.log(splittotal);
                    var m = splitD[0];
                    var d = splitD[1];
                    var y = splitD[2];
                    var totalMonth = numYear * 12;
                    var sumyear = year_Today - y - 1;
                    var sum_year = sumyear * 12;
                    var firstYear = 12 - month[m];
                    var monththisYear = month[month_Today];
                    var totalmonth = monththisYear + firstYear + sum_year;
                    arr.push([infoloan, totalMonth - totalmonth, totalmonth, monthly_pay, total_cash, title]);
                }
                var divcont = ``;
                arr.forEach(snap => {
                    var payuntilToday = snap[2] * Number(snap[3]);
                    var precentNum = payuntilToday / Number(totalLoan) * 100;
                    var fixprecent = precentNum.toFixed(0);
                    var total_month = snap[1] + snap[2];
                    var left_pay = Number(snap[4]) - payuntilToday;

                    var left_An = "";
                    var Right_An = "";

                    if (Math.abs(fixprecent) <= 10 && Math.abs(fixprecent) > 0) {
                        Right_An.style.animation = "loading-1 1.5s linear forwards 1.8s"
                        left_An.style.animation = "loading-0 1.5s linear forwards 1.8s"
                    } else if (Math.abs(fixprecent) < 25 && Math.abs(fixprecent) > 10) {
                        Right_An = "loading-2 1.5s linear forwards 1.8s"
                        left_An = "loading-0 1.5s linear forwards 1.8s"
                    } else if (Math.abs(fixprecent) == 25) {
                        left_An = "loading-0 1.5s linear forwards 3.3s"
                        Right_An = "loading-2-2 1.5s linear forwards 1.8s"
                    } else if (Math.abs(fixprecent) <= 30 && Math.abs(fixprecent) > 20) {
                        Right_An = "loading-3 1.5s linear forwards 1.8s"
                        left_An = "loading-0 1.5s linear forwards 1.8s"
                    } else if (Math.abs(fixprecent) <= 40 && Math.abs(fixprecent) > 30) {
                        Right_An = "loading-4 1.5s linear forwards 1.8s"
                        left_An = "loading-0 1.5s linear forwards 1.8s"
                    } else if (Math.abs(fixprecent) == 50) {
                        left_An = "loading-0 1.5s linear forwards 3.3s"
                        Right_An = "loading-5 1.5s linear forwards 1.8s"
                    } else if (Math.abs(fixprecent) > 50 && Math.abs(fixprecent) < 60) {
                        left_An = "loading-2 1.5s linear forwards 3.3s"
                        Right_An = "loading-6 1.5s linear forwards 1.8s"
                    } else if (Math.abs(fixprecent) >= 60 && Math.abs(fixprecent) < 75) {
                        left_An = "loading-2 1.5s linear forwards 3.3s"
                        Right_An = "loading-7 1.5s linear forwards 1.8s"
                    } else if (Math.abs(fixprecent) == 75) {
                        left_An = "loading-2 1.5s linear forwards 3.3s"
                        Right_An = "loading-7-7 1.5s linear forwards 1.8s"
                    } else if (Math.abs(fixprecent) > 75 && Math.abs(fixprecent) < 80) {
                        left_An = "loading-2 1.5s linear forwards 3.3s"
                        Right_An = "loading-8 1.5s linear forwards 1.8s"
                    } else if (Math.abs(fixprecent) >= 80 && Math.abs(fixprecent) < 90) {
                        left_An = "loading-2 1.5s linear forwards 3.3s"
                        Right_An = "loading-9 1.5s linear forwards 1.8s"
                    } else if (Math.abs(fixprecent) >= 90 && Math.abs(fixprecent) < 100) {
                        left_An = "loading-2 1.5s linear forwards 3.3s"
                        Right_An = "loading-9 1.5s linear forwards 1.8s"
                    } else if (Math.abs(fixprecent) == 100) {
                        left_An = "loading-2 1.5s linear forwards 3.3s"
                        Right_An = "loading-10 1.5s linear forwards 1.8s"
                    }

                    divcont += `<div class="card cd cardLoanSaave shadow-sm border-0 mb-2">
                           <div class="row col-12 h-100 mx-0 my-0" id="SaveConector">
                                <div class="col-6 colmn bg-white">
                                    <div class="container mt-4">

                                        <div class="progress blue" style="height: 150px;">
                                                <span class="progress-left" >
                                                    <span class="progress-bar" style="animation:${left_An}"> </span>
                                                </span>
                                                <span class="progress-right" >
                                                    <span class="progress-bar" style="animation:${Right_An}"></span>
                                                </span>
                                                <div class="progress-value">${Math.abs(fixprecent)}</div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div class="col-6 colmn info">

                                        <h4 class="text-right mt-3">${snap[5]}</h4>
                                        <p class="text-right mx-0 my-0 lt"><span class="title_save"> פירוט ההלוואה- </span>${infoloan}</p>
                                        <p class="text-right mx-0 my-0 lt">${snap[4]}<span class="title_save"> -סכום הלוואה</span></p>
                                        <p class="text-right mx-0 my-0 lt">${left_pay}<span class="title_save"> -נשאר לתשלום</span></p>

                                        <p class="text-right mx-0 my-0 lt">${total_month}<span class="title_save"> -סה"כ חודשים</span></p>
                                        <p class="text-right mx-0 my-0 lt">${snap[1]}<span class="title_save"> -מס' חודשים שנשארו</span></p>

                                        <p class="text-right mx-0 my-0 lt">${left_pay}<span class="title_save"> -נשאר לתשלום</span></p>
                                        <p class="text-right mx-0 my-0 lt">${monthly_pay}<span class="title_save"> -תשלום חודשי</span></p>

                                </div>
                           </div>
                        </div>`;
                    // var day = ``;

                    // var secday = ``;

                    // containerSave.innerHTML = day;
                    // containerSave.innerHTML = secday;
                });
                containerloan.innerHTML = divcont;
                // containerLoan.appendChild(container);
            });
        }

        function SAVING_GET_DATA() {
            database.ref('/Users/' + user.uid + '/saveMoney/').on('value', function (snap) {

                var coreDate = createNewDate();
                var month_Today = coreDate.month;
                var year_Today = coreDate.year;
                let postArr = snap.val();
                let keysArr = Object.keys(postArr);
                var arr = [];
                var title = "";

                for (var i = 0; i < keysArr.length; i++) {
                    var uid = keysArr[i];
                    // var monthPay = postArr[uid].monthlyPay;
                    var dateStart = postArr[uid].startdate;
                    var destination = postArr[uid].destination;
                    var totalSave = postArr[uid].totalCash;
                    var infoSave = postArr[uid].info;
                    var title = postArr[uid].title;
                    var splitD = dateStart.split(" ");

                    var monthlypay = totalSave.split("-");
                    var monthly_pay = monthlypay[1];

                    var m = splitD[0];
                    var d = splitD[1];
                    var y = splitD[2];

                    arr.push([infoSave, " ", " ", monthly_pay, destination, title, dateStart]);
                }
                var divcont = ``;

                arr.forEach(snap => {
                    var payuntilToday = Number(snap[3]);
                    var precentNum = payuntilToday / Number(snap[4]) * 100;
                    var fixprecent = precentNum.toFixed(0);

                    var left_pay = Number(snap[4]) - payuntilToday;

                    var left_An = "";
                    var Right_An = "";

                    if (Math.abs(fixprecent) <= 10 && Math.abs(fixprecent) > 0) {
                        Right_An.style.animation = "loading-1 1.5s linear forwards 1.8s"
                        left_An.style.animation = "loading-0 1.5s linear forwards 1.8s"
                    } else if (Math.abs(fixprecent) < 25 && Math.abs(fixprecent) > 10) {
                        Right_An = "loading-2 1.5s linear forwards 1.8s"
                        left_An = "loading-0 1.5s linear forwards 1.8s"
                    } else if (Math.abs(fixprecent) == 25) {
                        left_An = "loading-0 1.5s linear forwards 3.3s"
                        Right_An = "loading-2-2 1.5s linear forwards 1.8s"
                    } else if (Math.abs(fixprecent) <= 30 && Math.abs(fixprecent) > 20) {
                        Right_An = "loading-3 1.5s linear forwards 1.8s"
                        left_An = "loading-0 1.5s linear forwards 1.8s"
                    } else if (Math.abs(fixprecent) <= 40 && Math.abs(fixprecent) > 30) {
                        Right_An = "loading-4 1.5s linear forwards 1.8s"
                        left_An = "loading-0 1.5s linear forwards 1.8s"
                    } else if (Math.abs(fixprecent) == 50) {
                        left_An = "loading-0 1.5s linear forwards 3.3s"
                        Right_An = "loading-5 1.5s linear forwards 1.8s"
                    } else if (Math.abs(fixprecent) > 50 && Math.abs(fixprecent) < 60) {
                        left_An = "loading-2 1.5s linear forwards 3.3s"
                        Right_An = "loading-6 1.5s linear forwards 1.8s"
                    } else if (Math.abs(fixprecent) >= 60 && Math.abs(fixprecent) < 75) {
                        left_An = "loading-2 1.5s linear forwards 3.3s"
                        Right_An = "loading-7 1.5s linear forwards 1.8s"
                    } else if (Math.abs(fixprecent) == 75) {
                        left_An = "loading-2 1.5s linear forwards 3.3s"
                        Right_An = "loading-7-7 1.5s linear forwards 1.8s"
                    } else if (Math.abs(fixprecent) > 75 && Math.abs(fixprecent) < 80) {
                        left_An = "loading-2 1.5s linear forwards 3.3s"
                        Right_An = "loading-8 1.5s linear forwards 1.8s"
                    } else if (Math.abs(fixprecent) >= 80 && Math.abs(fixprecent) < 90) {
                        left_An = "loading-2 1.5s linear forwards 3.3s"
                        Right_An = "loading-9 1.5s linear forwards 1.8s"
                    } else if (Math.abs(fixprecent) >= 90 && Math.abs(fixprecent) < 100) {
                        left_An = "loading-2 1.5s linear forwards 3.3s"
                        Right_An = "loading-9 1.5s linear forwards 1.8s"
                    } else if (Math.abs(fixprecent) == 100) {
                        left_An = "loading-2 1.5s linear forwards 3.3s"
                        Right_An = "loading-10 1.5s linear forwards 1.8s"
                    }

                    divcont += `<div class="card cd cardLoanSaave shadow-sm border-0 mb-2">
                                   <div class="row col-12 h-100 mx-0 my-0" id="SaveConector">
                                        <div class="col-6 colmn bg-white">
                                            <div class="container mt-4">
                                                <div class="progress green" style="height: 150px;">
                                                        <span class="progress-left" >
                                                            <span class="progress-bar" style="animation:${left_An}"> </span>
                                                        </span>
                                                        <span class="progress-right" >
                                                            <span class="progress-bar" style="animation:${Right_An}"></span>
                                                        </span>
                                                        <div class="progress-value">${fixprecent}</div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                        <div class="col-6 colmn info">
                                                <h4 class="text-right mt-3">${title}</h4>
                                                <p class="text-right mx-0 my-0 lt"><span class="title_save"> שם חסכון- </span>${infoSave}</p>
                                                <p class="text-right mx-0 my-0 lt">${destination}<span class="title_save"> -יעד</span></p>
                                                <p class="text-right mx-0 my-0 lt">${monthly_pay}<span class="title_save"> -הופקד</span></p>
                                                <p class="text-right mx-0 my-0 lt">${'1/1/2020'}<span class="title_save"> -תאריך הפקדה הבא</span></p>
                                                <p class="text-right mx-0 my-0 lt">${'500'}<span class="title_save"> -תשלום הבא</span></p>
    
                                        </div>
                                   </div>
                                </div>`;

                });
                containerSave.innerHTML = divcont;

            });
        }

        document.addEventListener('click', (e) => {



            var page = e.target.id;

            if (page == 'HomeRow' || page == 'Home_Menu' || page == 'iHomeMenu') {
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
            } else if (page == 'TableRow' || page == 'Tableview_Menu' || page == 'iTableView') {
                mainTable.innerHTML = "";
                TABLE_PAGE_GET_DATA();
                console.log('table view button');
                settingPage.style.display = 'none';
                homePage.style.display = 'none';
                tablePage.style.display = 'block';
                HomeRow.style.background = "none";
                savingRow.style.background = "none";
                save_loan_Page.style.display = 'none';

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

            } else if (page == 'isaving' || page == 'savingTitle' || page == 'savingRow') {

                settingPage.style.display = 'none';
                homePage.style.display = 'none';
                tablePage.style.display = 'none';
                save_loan_Page.style.display = 'block';
                HomeRow.style.background = "none";
                TableRow.style.background = "none";
                SettingRow.style.background = "none";
                savingRow.style.background = " rgb(24, 24, 24) ";
                savingTitle.classList.remove("text-white");
                savingTitle.classList.add("text-info");

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

                SAVING_GET_DATA()
                LOAN_GET_DATA()
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

            if (page == 'iconminusbtn') {
                addCorrectDayToInput("dateOut");
            } else if (page == 'iconaddbtn') {
                addCorrectDayToInput("dateIncoimg");
            }

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
                    TABLE_PAGE_GET_DATA();
                })
            }

            if (page == 'monthlyChart') {
                HOME_PAGE_GET_DATA_FOR_WEEKLY();
            } else if (page == 'weeklyChart') {
                HOME_PAGE_GET_DATA_FOR_WEEKLY();
            }

        });


        function GET_CORRECT_DATE_CASH() {
            var date = new Date();
            var string = date.toString();
            var sD = string.split(" ");
            var formatDating = sD[1] + " " + sD[2] + ", " + sD[3];
            var numDay = Date.parse(formatDating);
            console.log(numDay);
            database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').on('value', snapshot => {
                let postArray = snapshot.val();
                let keys = Object.keys(postArray);
                var out = 0;
                var inc = 0;
                var g = 0;
                var h = 0;

                for (var i = 0; i < keys.length; i++) {
                    var id = keys[i];
                    var obg = postArray[id];
                    var date_b = obg.date;
                    var mon = date_b.split(" ")[0];
                    if (mon == sD[1]) {
                        if (obg.type == "out" && obg.wayPay !== 'כרטיס אשראי' && obg.wayPay !== 'פעילות מרובה') {
                            out += obg.totalCash;
                        } else if (obg.wayPay == 'פעילות מרובה') {
                            database.ref('/Users/' + user.uid + '/cashflow/' + id + '/chashFlow/').orderByChild('number').on('value', snaps => {
                                let post_Array = snaps.val();
                                let keys_sub = Object.keys(post_Array);
                                for (var j = 0; j < keys_sub.length; j++) {
                                    var id_sub = keys_sub[j];
                                    var obg_b = post_Array[id_sub];
                                    if (obg_b.type == "out" && obg_b.wayPay !== 'כרטיס אשראי') {
                                        g += obg_b.totalCash;
                                    } if (obg_b.type == "in" && obg_b.wayPay !== 'כרטיס אשראי') {
                                        h += obg_b.totalCash;
                                    }
                                }
                            });

                        } else if (obg.type == "in" && obg.wayPay !== 'כרטיס אשראי' && obg.wayPay !== 'פעילות מרובה') {
                            inc += obg.totalCash;
                        }
                    }
                }
                var sumin = inc + h
                var sumout = out + g
                console.log(sumin, sumout);

                // var divide = sumin / 100;
                // var precent = Math.abs(sumout).toFixed() / divide.toFixed();
                // console.log(divide);
                // console.log(Number(precent).toFixed());
                // var num_currectStatusCash = document.getElementById("num_currectStatusCash");
                // num_currectStatusCash.textContent = precent.toFixed(0) + "%"

            });

        }
        GET_CORRECT_DATE_CASH()
        var settingform = document.getElementById("settingform");

        settingform.addEventListener('submit', (e) => {

            e.preventDefault();
            var startYear = document.getElementById("startYear");
            var bankLine = document.getElementById("bankLine");
            var creditLine = document.getElementById("creditLine");
            var dateexpend = document.getElementById("imporatntDate").value;
            var dateExpend = FormatDate(dateexpend)
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


        incomingForm.addEventListener('submit', (e) => {

            e.preventDefault();
            aotucomplete();

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

            var infoCashIN = incomingForm.value;
            var TypeCashIN = typeIncoming.value;
            var dateCashIN = dateIncome.value;
            var date_fornmat = FormatDate(dateCashIN);
            var totalCashIN = totalcash.value;

            if (TypeCashIN !== "" && dateCashIN !== "") {
                addDb("in", infoCashIN, TypeCashIN, date_fornmat, totalCashIN, typePayment, type_Way_Pay, st);
                TABLE_PAGE_GET_DATA();
            } else if (TypeCashIN !== "") {

                alert("חסר תאריך")
                // $('.alert').alert();
            } else if (dateCashIN !== "") {

                alert("חסר שם לעסקה")
                // $('.alert').alert();
            } else if (dateCashIN == "" && TypeCashIN == "") {
                alert("חסרים פרטים")
            }



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
            if (TypeCashOUT !== "" && dateCashOUT !== "") {
                var date_fornmat_out = FormatDate(dateCashOUT);
                var monthFormat = date_fornmat_out.split(" ")[0];
                var totalCashOUT = '-' + totalOut.value;

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
                addDb("out", infoCashOUT, TypeCashOUT, date_fornmat_out, totalCashOUT, typePaymentout, type_Way_Pay, st);

                // mainTable.innerHTML = "";
                TABLE_PAGE_GET_DATA();

            } else if (TypeCashOUT !== "") {

                alert("חסר תאריך")
                // $('.alert').alert();
            } else if (dateCashOUT !== "") {

                alert("חסק שם לעסקה")
                // $('.alert').alert();
            } else if (dateCashIN == "" && TypeCashIN == "") {
                alert("חסרים פרטים")
            }


        });

        database.ref('/Users/' + user.uid + '/setting/firstSetting/').on('value', function (snapshot) {

            var after = snapshot.val().creditBank;
            currectLimit = after;
            return currectLimit;

        });









        setPhotoUser();
        saveNewWord();
        HOME_PAGE_GET_DATA_FOR_WEEKLY();
        HOME_PAGE_GET_DATA_FOR_CALNDER();

        async function chartTypeChart(d) {
            console.log(d);

            var inarr = [];
            var out = [];
            var title = [];
            var colorarray = "";
            var name = "";
            var lign = '';
            d.forEach(x => {
                inarr.push(Math.abs(x[1]));
                title.push(x[0]);
            });
            console.log(inarr.length);
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
        var photo = document.getElementById("photo");
        var insertchart = document.getElementById("insertchart");
        var photohome = document.getElementById("photohome");
        var insertcharthome = document.getElementById("insertcharthome");
        document.addEventListener("click", e => {

            var key = e.target.id;
            if (key == "photo") {

                photo.style.color = "#17a2b8"
                insertchart.style.color = "#e2e2e2"
                insertchart.classList.remove("checked");
                photo.classList.add("checked");
                mainTable.innerHTML = "";

                TABLE_PAGE_GET_DATA();

            } else if (key == "insertchart") {
                photo.style.color = "#e2e2e2";
                insertchart.style.color = "#17a2b8";
                insertchart.classList.add("checked");
                photo.classList.remove("checked");
                mainTable.innerHTML = "";
                TABLE_PAGE_GET_DATA();

            }
        })
        document.addEventListener("click", e => {
            var key = e.target.id;
            if (key == "photohome") {

                photohome.style.color = "#17a2b8"
                insertcharthome.style.color = "#e2e2e2"
                insertcharthome.classList.remove("checked");
                photohome.classList.add("checked");
                // photohome.classList.add("shadow-sm");

                // mainTable.innerHTML = "";
                HOME_PAGE_GET_DATA_FOR_WEEKLY();
                // TABLE_PAGE_GET_DATA();

            } else if (key == "insertcharthome") {
                photohome.style.color = "#e2e2e2";
                insertcharthome.style.color = "#17a2b8";
                insertcharthome.classList.add("checked");
                photohome.classList.remove("checked");
                HOME_PAGE_GET_DATA_FOR_WEEKLY();
                // mainTable.innerHTML = "";
                // TABLE_PAGE_GET_DATA();

            }
        });
        async function chartTableYearly(d) {
            console.log(d);
            var typeb = "";
            if (photo.classList[1] == "checked") {
                typeb = "line"
            } else if (insertchart.classList[1] == "checked") {
                console.log("checked 2");
                typeb = "bar"
            }
            // console.log(type);
            var inarr = [];
            var out = [];
            var title = [];
            d.forEach(x => {
                inarr.push(Math.abs(x[1]));
                out.push(Math.abs(x[2]));
                title.push(x[0]);
            })

            console.log(inarr, out, title);

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
                type: typeb,
                data: {
                    labels: title,
                    datasets: [{
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
                },
                options: {
                    responsive: true,
                    scales: {
                        yAxes: [{
                            ticks: {
                                min: 0,
                                max: 15000,
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
            // console.log(i, o, d);
            var type = ""
            if (photohome.classList[1] == "checked") {
                type = "line"
            } else if (insertcharthome.classList[1] == "checked") {
                // console.log("checked 2");
                type = "bar"
            }
            var ctx = document.getElementById("chart_div").getContext("2d");
            var gradient_in = ctx.createLinearGradient(0, 0, 0, 400);
            var gradient_out = ctx.createLinearGradient(0, 0, 0, 400);

            gradient_out.addColorStop(0, '#ff3d67');
            gradient_out.addColorStop(1, '#ff98ae');
            gradient_in.addColorStop(0, '#50dd50');
            gradient_in.addColorStop(1, '#a6fda6');

            if (window.bar != undefined) {
                window.bar.destroy();
            }

            window.bar = new Chart(ctx, {
                type: type,
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
        homePage.innerHTML = "";
        tablePage.innerHTML = "";
        side_bar.innerHTML = "";
        settingPage.innerHTML = "";

        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');

        // let maindiv= document.createElement("div");
        // let secondDiv =  document.createElement("div");
        // let containerDiv =  document.createElement("div");
        // let row_1 =  document.createElement("div");
        // let row_2 =  document.createElement("div");
        // let row_3 =  document.createElement("div");
        // let row_2_1 =  document.createElement("div");
        // let row_2_1_1 =  document.createElement("div");
        // let row_2_1_2 =  document.createElement("div");
        // let row_2_1_2_1 =  document.createElement("div");
        // let span_2_1_2_1 =  document.createElement("div");

        // let row_2_1_2_2 =  document.createElement("div");
        // let span_2_1_2_2 =  document.createElement("div");

        // let row_2_1_2_3 =  document.createElement("div");
        // let span_2_1_2_3 =  document.createElement("div");

        // maindiv.setAttribute("class","spinner log_in");
        // maindiv.setAttribute("id","spinner");
        // maindiv.setAttribute("style","display:block; width: 100%; height: 100%;");
        // secondDiv.setAttribute("class","div loadingbg");
        // containerDiv.setAttribute("class","container text-center h-100");
        // row_1.setAttribute("class","row h_35");
        // row_2.setAttribute("class","row h_30");
        // row_3.setAttribute("class","row h_35");

        // row_2_1.setAttribute("class","display-4");
        // row_2_1.setAttribute("class","laodingName");

        // row_2.setAttribute("class","col");
        // row_2_1_1



        // row_2.setAttribute("class","row h_35");











    }
})

