const homePage = document.getElementById("home_page");
const tablePage = document.getElementById("table_page");
var Status = document.getElementById('Status');
var num_currectStatusCash = document.getElementById('num_currectStatusCash');


document.addEventListener('click', e => {
    let key = e.target.id;
    console.log(key);
    if (key == "home_btn_side") {
        tablePage.style.display = 'none';
        homePage.style.display = 'block';

    } else if (key == "table_btn_side") {
        tablePage.style.display = 'block';
        homePage.style.display = 'none';
    }
});


auth.onAuthStateChanged(user => {

    if (user) {
        var corDate = createNewDate();
        var dayCorrect = corDate.day;
        var monthCorrect = corDate.month;
        var corectYear = corDate.year;
        var num_newdate = corDate.dateInNum;

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

        function formatNumber(num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        }

        function UPDATE_CORRECT_CASH() {
            // var arrtibute = changeToPlan.getAttribute("class");
            var sttus_cash = 0;

            database.ref('/Users/' + user.uid + '/setting/firstSetting/').on('value', snapshot => {
                var data = snapshot.val();
                var statusCash = data.cuurentCash;
                sttus_cash = statusCash;
                console.log(sttus_cash);

            });

            var sum = sttus_cash;

            database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').on('value', snapshot => {

                let postArray = snapshot.val();
                let keys = Object.keys(postArray);
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

                    arrayafter += currectnum;
                    sum += arrayafter;

                }

                if (before == undefined) {
                    // continue;
                } else {
                    if (id < num_newdate) {
                        // continue;
                    } else if (id == num_newdate) {
                        addStatusCash(sum);
                        // break;
                    } else if (id > num_newdate) {
                        var correctDatebefore = beforeObject.date;
                        var cash = beforeObject.totalCash;
                        var total = sum - currectnum;
                        addStatusCash(total);
                        // break;
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

                    Status.textContent = splitnum[0] + ".";
                    num_currectStatusCash.textContent = splitnum[0] + ".";

                    num_currectStatusCash.appendChild(numCor);
                    Status.appendChild(spanNum);

                }

            });
        }


        function TABLE_PAGE_GET_DATA() {
            mainTable.innerHTML = "";

            var titleBal = document.getElementById("titleBoxTableBalance");
            var titleIn = document.getElementById("titleBoxTableIn");
            var titleOut = document.getElementById("titleBoxTableOut");
            var arrtibute = changeToPlan.getAttribute("class");

            var days_Arr = [[1, 0, 0], [2, 0, 0], [3, 0, 0], [4, 0, 0],
            [5, 0, 0], [6, 0, 0], [7, 0, 0], [8, 0, 0], [9, 0, 0], [10, 0, 0],
            [11, 0, 0], [12, 0, 0], [13, 0, 0], [14, 0, 0], [15, 0, 0], [16, 0, 0],
            [17, 0, 0], [18, 0, 0], [19, 0, 0], [20, 0, 0], [21, 0, 0], [22, 0, 0],
            [23, 0, 0], [24, 0, 0], [25, 0, 0], [26, 0, 0], [27, 0, 0], [28, 0, 0],
            [29, 0, 0], [30, 0, 0], [31, 0, 0]];

            var daysTableArr = [];
            //         // tableWeek.innerHTML = "";
            var weeklyCheckDate = [["??????????", 6], ["??????", 5], ["??????????", 4],
            ["??????????", 3], ["??????????", 2], ["????????", 1],
            ["??????", 7]];

            var weeklyArr = [["??????????", 0, 0], ["??????", 0, 0], ["??????????", 0, 0],
            ["??????????", 0, 0], ["??????????", 0, 0], ["????????", 0, 0],
            ["??????", 0, 0]];

            var Month_Arr = [['Jan', 0, 0], ['Feb', 0, 0], ['Mar', 0, 0],
            ['Apr', 0, 0], ['May', 0, 0], ['Jun', 0, 0],
            ['Jul', 0, 0], ['Aug', 0, 0], ['Sep', 0, 0],
            ['Oct', 0, 0], ['Nov', 0, 0], ['Dec', 0, 0]];

            database.ref('/Users/' + user.uid + '/cashflow/').orderByChild('number').on('value', snapshot => {

                // getdata for Tabel //
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
                for (var i = 0; i < keys.length; i++) {

                    var sum = 0;
                    var id = keys[i];
                    let totalIncome = 0;
                    let totalOut = 0;
                    var subDataInOut = [];
                    var currentObject = postArray[id];
                    var currectnum = currentObject.totalCash;
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

                    // send each data to loadTable 

                    if (arrtibute == "check") {
                        arrayafter += currectnum;
                        sum = arrayafter;

                    } else if (arrtibute == "uncheck") {
                        if (temp !== true || temp !== " ") {
                            arrayafter += currectnum;
                            sum = arrayafter;

                        }
                    }

                    if (num_newdate == id) {
                        // send data to cobx
                        console.log('have', date);
                        // break;
                    } else {
                        if (id < num_newdate) {
                            console.log('????????', date);

                            // send data to cobx and stop looping
                        } else {
                            console.log('????????', date);
                            console.log('?????? ????????', date);

                        }
                    }

                    groupView.forEach(e => {

                        var key = e.checked;
                        var uid = e.id;

                        if (key) {

                            if (uid == 'choosWeekly' && temp !== true || uid == 'choosWeekly' && temp !== " ") {

                                titleIn.textContent = "???????????? ??????????????";
                                titleOut.textContent = "???????????? ??????????????";
                                titleBal.textContent = "???????? ??????????";

                                const weekly = lastday(fulDate);
                                var first_Full_day = weekly.firstday;
                                var last_Full_day = weekly.lastday;
                                var first_day = foramtDate(first_Full_day);
                                var last_day = foramtDate(last_Full_day);


                                if (id <= last_day.num && id >= first_day.num) {


                                    if (arrtibute == "check") {

                                        laodUpData(id, currentObject, StatusCash, currectLimit, arrayafter, sum);
                                        datesWeekly.push(date);

                                    } else if (arrtibute == "uncheck") {

                                        laodUpData(id, currentObject, StatusCash, currectLimit, arrayafter, sum);
                                        datesWeekly.push(date);

                                    }

                                }

                            } else if (uid == 'chooseMonthly' && temp !== true || uid == 'chooseMonthly' && temp !== " ") {

                                titleIn.textContent = "???????????? ??????????????";
                                titleOut.textContent = "???????????? ??????????????";
                                titleBal.textContent = "???????? ??????????";

                                if (newDate.month == splitDate[0]) {

                                    if (arrtibute == "check") {
                                        laodUpData(id, currentObject, StatusCash, currectLimit, arrayafter, sum);
                                    } else if (arrtibute == "uncheck") {
                                        if (temp !== true && temp !== " ") {
                                            laodUpData(id, currentObject, StatusCash, currectLimit, arrayafter, sum);
                                        }
                                    }

                                }

                            } else if (uid == 'chooseYearly' && temp !== true || uid == 'chooseYearly' && temp !== " ") {

                                titleIn.textContent = "???????????? ????????";
                                titleOut.textContent = "???????????? ????????";
                                titleBal.textContent = "???????? ????????";
                                var index = "";
                                var xin = 0;
                                var xout = 0;

                                for (var j = 0; j < Month_Arr.length; j++) {

                                    if (arrtibute == "check") {

                                        if (Month_Arr[j][0] == splitDate[0]) {
                                            if (type == 'out') {
                                                xout += currectnum;
                                            } else if (type = 'in') {
                                                xin += currectnum;
                                            }
                                        }

                                    } else if (arrtibute == "uncheck") {

                                        if (temp !== true && temp !== " ") {

                                            if (Month_Arr[j][0] == splitDate[0]) {

                                                if (type == 'out') {
                                                    xout += currectnum;
                                                } else if (type = 'in') {
                                                    xin += currectnum;
                                                }

                                            }

                                        }

                                    }
                                }


                            } else if (uid = 'chooseBitweenDates' && temp !== true || uid == 'chooseBitweenDates' && temp !== " ") {

                                const days = getBitweenDates();
                                if (id <= days.eDay && id >= days.sDay) {
                                    if (arrtibute == "check") {
                                        laodUpData(id, currentObject, StatusCash, currectLimit, arrayafter, sum);
                                        datesWeekly.push(date);
                                    } else if (arrtibute == "uncheck") {
                                        if (temp !== true && temp !== " ") {
                                            laodUpData(id, currentObject, StatusCash, currectLimit, arrayafter, sum);
                                            datesWeekly.push(date);
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

                            for (var k = 0; k < SubKeys.length; k++) {

                                var uid = SubKeys[k];
                                var dataDb = subPostArray[uid];

                                if (dataDb.type == 'out') {

                                    if (arrtibute == "check") {

                                        subOut += dataDb.totalCash;

                                    } else if (arrtibute == "uncheck") {

                                        if (dataDb.after !== true && dataDb.after !== " ") {

                                            subOut += dataDb.totalCash;
                                        }
                                    }

                                } else if (dataDb.type == 'in') {

                                    if (arrtibute == "check") {

                                        subIn += dataDb.totalCash;

                                    } else if (arrtibute == "uncheck") {

                                        if (dataDb.after !== true && dataDb.after !== " ") {

                                            subIn += dataDb.totalCash;

                                        }
                                    }
                                }

                            }

                            if (arrtibute == "check") {
                                dayWithMultiCashFlow.push([date, subIn, subOut]);
                            } else if (arrtibute == "uncheck") {
                                if (temp !== true) {
                                    dayWithMultiCashFlow.push([date, subIn, subOut]);
                                }
                            }

                        });

                    } else {
                        if (type == 'out') {

                            if (arrtibute == "check") {
                                dayWithMultiCashFlow.push([date, 0, currectnum]);
                            } else if (arrtibute == "uncheck") {
                                if (temp !== true && temp !== " ") {
                                    dayWithMultiCashFlow.push([date, 0, currectnum]);
                                }
                            }

                        } else if (type == 'in') {

                            if (arrtibute == "check") {
                                dayWithMultiCashFlow.push([date, currectnum, 0]);
                            } else if (arrtibute == "uncheck") {
                                if (temp !== true && temp !== " ") {
                                    dayWithMultiCashFlow.push([date, currectnum, 0]);
                                }
                            }

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

                            console.log(new Date(datesWeekly[0]).getDay());
                            console.log(datesWeekly);
                            var newarray = [];
                            var sumin = 0;
                            var sumout = 0;

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
                            dayWithMultiCashFlow.forEach(d => {

                                var date = d[0].split(" ")[0];
                                Month_Arr.forEach(x => {

                                    if (x[0] == date) {

                                        console.log(x[1]);
                                        x[1] += d[1];
                                        x[2] += d[2];
                                        var sum = d[1] + d[2];
                                        num_in += d[1];
                                        num_out += d[2];
                                        // start += sum;

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
                            console.log(num_in, num_out);


                        } else if (uid == "choosWeekly") {
                            // console.log(new Date(datesWeekly[0]).getDay());
                            // console.log(datesWeekly);
                            var num_in = 0;
                            var num_out = 0;
                            console.log(dayWithMultiCashFlow);
                            dayWithMultiCashFlow.forEach(d => {
                                datesWeekly.forEach(y => {

                                    if (d[0] == y) {
                                        var checkDay = new Date(y).getDay();
                                        // console.log(d);

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

                            // chartTableYearly(finalArray);
                        }
                    }
                });
            });


        }


        UPDATE_CORRECT_CASH();
    } else {
        console.log('idan sign out');


        homePage.innerHTML = "";
        tablePage.innerHTML = "";
    }
})
