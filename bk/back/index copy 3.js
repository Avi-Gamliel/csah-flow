const database = firebase.database();
var dateExpend = document.getElementById('dateexpend');
var outcoming = document.getElementById('outcomingForm');
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

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var elemselect = document.querySelectorAll('select');
    var elemsdatepicker = document.querySelectorAll('.datepicker');
    var elemssidenav = document.querySelectorAll('.sidenav');
    var elemsdate = document.querySelectorAll('.date');

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
        totalcash.value = '';
        dateIncome.value = '';
        typeIncoming.value = '';
        incomingForm.value = '';
        mainTable.innerHTML = "";
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
        c = '';
        d = '';
        t = '';
        i = '';
        mainTable.innerHTML = "";
    }
}

incomingForm.addEventListener('submit', (e) => {

    e.preventDefault();
    var infoCashIN = incomingForm.value;
    var TypeCashIN = typeIncoming.value;
    var dateCashIN = dateIncome.value;
    var totalCashIN = totalcash.value;
    addDb("in", infoCashIN, TypeCashIN, dateCashIN, totalCashIN);

})

outcoming.addEventListener('submit', (e) => {
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
    var startnPoint = startP.value;
    var creditL = document.getElementById('creditLine')
    var creditLine = creditL.value;
    var creditB = document.getElementById('creditBank');
    var creditBank = creditB.value;
    var startD = document.getElementById('startDate');
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
        TotalCash.textContent = totalCash;
    } else if (type == 'out') {
        icon.setAttribute('id', 'downArrow');
        icon.textContent = 'arrow_downward';
        TotalCash.style.color = 'red';
        TotalCash.textContent = '-' + totalCash;
    }


    rowtable.setAttribute('id', 'newRow' + "-" + I);
    rowtable.setAttribute('class', 'newRow');
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

function loadIncomingOut(O, I) {

    incoming.textContent = I;
    var formatNum = O.toString().split('-');
    outcoming.textContent = O;
    var balnaceSum = Number(I) - Number(formatNum[1]);
    balance.textContent = balnaceSum;
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

database.ref('/cashflow/').orderByChild('number').on('value', function (snapshot) {

    let postArray = snapshot.val();
    let keys = Object.keys(postArray);
    let totalIncome = 0;
    let totalOut = 0;
    let array = [];
    var newDate = new Date();
    for (var i = 1; i < keys.length + 1; i++) {

        var id = keys[i];
        var currentObject = postArray[keys[i]];

        var currectnum = postArray[keys[i]].totalCash;
        var previus = postArray[keys[i - 1]].after;
        var type = postArray[keys[i]].type;
        var StatusCash = 0;
        var date = currentObject.date;
        var newdateParse = Date.parse(date);
        var subdate = Date.parse(newDate);
        console.log(subdate);

        var value = '';
        console.log(subdate, newdateParse);
        if (subdate > newdateParse) {

            Status.textContent = postArray[keys[i]].after;
        } else {

            // Status.textContent = postArray[keys[i]].after;
        }
        // console.log(Status.innerText, Number(Status.toString()));
        var newnum = Status.innerText;
        var splitnum = newnum.split(' ');
        console.log(splitnum[0]);

        if (splitnum[0] == 0) {
            Status.style.color = '#00cc00';
            box.style.background = "#E6E6E6";

        } else {
            Status.style.color = 'red';
            box.style.background = "#E6E6E6";

        }

        if (i == 0) {
            StatusCash = Number(currectnum);
            firebase.database().ref().child('cashflow').child(id).update({
                after: StatusCash
            })

        } else if (i > 0 && type == 'out') {
            totalOut -= currectnum;
            StatusCash = Number(previus) - Number(currectnum);
            firebase.database().ref().child('cashflow').child(id).update({
                after: StatusCash
            })

        } else if (i > 0 && type == 'in') {

            totalIncome += currectnum;
            StatusCash = Number(currectnum) + Number(previus);
            firebase.database().ref().child('cashflow').child(id).update({
                after: StatusCash
            });
        }

        var titledate = date.split(" ");
        laodUpData(id, currentObject, StatusCash, currectLimit);
        let updatessetting = {};
        let postdataSetting = {
            totalCash: currentObject.totalCash
        }
        updatessetting['/monthly/' + titledate[0] + '/' + type + '/' + id] = postdataSetting;
        firebase.database().ref().update(updatessetting);

        loadIncomingOut(totalOut, totalIncome);

    }


});
database.ref('/monthly/').on('value', function (snapshot) {

    let postArray = snapshot.val();
    let keys = Object.keys(postArray);
    let final = [];
    let chartmap = [];
    for (var i = 0; i < keys.length; i++) {
        var id = keys[i];
        var currentObject = postArray[keys[i]];
        var newDate = new Date();


        database.ref('/monthly/').child(id).on('value', function (snapshot) {
            let postArray = snapshot.val();
            let keys = Object.keys(postArray);

            let cIn = [];
            let Cout = [];
            for (var i = 0; i < keys.length; i++) {

                var type = keys[i];
                var currentObject = postArray[keys[i]];


                let masterarray = [];
                database.ref('/monthly/').child(id).child(type).on('value', function (snapshot) {
                    let postArray = snapshot.val();
                    let keys = Object.keys(postArray);



                    // console.log(postArray[keys[i]]);
                    for (var i = 0; i < keys.length; i++) {

                        var ctype = keys[i];
                        var obg = postArray[keys[i]];

                        if (type == 'in') {

                            cIn.push(obg.totalCash);
                        } else if (type == 'out') {
                            Cout.push(obg.totalCash);

                        }


                        var ctype = keys[i];


                        final = [id, Cout, cIn];
                    }

                });



            }
            let incomingB = 0;
            let outcomngB = 0;
            if (final[1].length !== undefined) {
                for (var j = 0; j < final[1].length; j++) {

                    console.log(final[1][j]);
                    incomingB += final[1][j];


                }
            }
            // console.log(o.length, i.length);

            if (final[2].length !== undefined) {
                for (var h = 0; h < final[2].length; h++) {

                    console.log(final[2][h]);
                    outcomngB += final[2][h];


                }
            }
            chartmap.push([final[0], incomingB, outcomngB]);

            console.log(chartmap);



        });

    }
    drawStuff(chartmap);
    console.log(chartmap);



});

google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawStuff);

function drawStuff(m) {
    console.log(m);

    var data = new google.visualization.arrayToDataTable([

        ['Month', 'Outcoming', 'Incoming'],
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
        console.log(x);
        m.forEach(function (y) {
            var month = y[0];
            console.log(month);
            if (month == x.c[0].v) {

                x.c[1].v = y[1];
                x.c[2].v = y[2];

            }
        })
        console.log(m, x.c[0].v);


        // chart.update();



    });

    // console.log(arrayToDataTable[0]);


    var options = {
        width: 1270,


        chart: {
            // title: 'Nearby galaxies',
            // subtitle: 'distance on the left, brightness on the right'
        },
        bars: 'vertical', // Required for Material Bar Charts.
        series: {
            0: { axis: 'distance', color: 'red' }, // Bind series 0 to an axis named 'distance'.
            1: { axis: 'brightness', color: '#00cc00' } // Bind series 1 to an axis named 'brightness'.
        },
        axes: {
            x: {
                distance: { label: 'parsecs' }, // Bottom x-axis.
                brightness: { side: 'top', label: 'apparent magnitude' } // Top x-axis.
            }
        }
    };

    var chart = new google.charts.Bar(document.getElementById('dual_x_div'));
    chart.draw(data, options);
};
// database.ref('/Yearly/').orderByChild('number').on('value', function (snapshot) {


//     console.log(snapshot);

//     let postArray = snapshot.val();
//     let keys = Object.keys(postArray);
//     console.log(postArray.reverse());

//     // console.log(keys.length);

//     for (var i = 1; i <= keys.length + 1; i++) {


//         var id = keys[i];
//         var currentObject = postArray[keys[i]];
//         var newDate = new Date();
//         var currectnum = postArray[keys[i]].totalCash;
//         var previus = postArray[keys[i - 1]].after;
//         var type = postArray[keys[i]].type;

//         var Status = document.getElementById('Status');
//         var box = document.getElementById('BodyBoxSta');

//         var StatusCash = 0;

//         var date = currentObject.date;
//         var newdateParse = Date.parse(date);
//         var subdate = Date.parse(newDate);
//         console.log(currentObject, newdateParse, currectnum, subdate);

//         if (subdate > newdateParse) {
//             console.log(postArray[keys[i]].after);
//             Status.textContent = postArray[keys[i]].after
//             if (previus > 0) {
//                 Status.style.color = 'green';

//             } else if (previus < 0) {
//                 Status.style.color = 'white';
//                 box.style.background = 'red';
//             }
//         }


//         if (i == 0) {
//             StatusCash = Number(currectnum);
//             firebase.database().ref().child('cashflow').child(id).update({
//                 after: StatusCash
//             })


//         } else if (i > 0 && type == 'out') {
//             StatusCash = Number(previus) - Number(currectnum);
//             firebase.database().ref().child('cashflow').child(id).update({
//                 after: StatusCash
//             })

//         } else if (i > 0 && type == 'in') {

//             console.log(Number(currectnum), Number(previus));

//             StatusCash = Number(currectnum) + Number(previus);
//             firebase.database().ref().child('cashflow').child(id).update({
//                 after: StatusCash
//             });
//         }

//         console.log(id, currentObject, StatusCash, currectLimit);

//         laodUpData(id, currentObject, StatusCash, currectLimit);

//     }


// });

