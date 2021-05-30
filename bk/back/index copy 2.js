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




// window.addEventListener('click', (e) => {

//     var target = e.target.id;
//     // console.log(target);

//     if (target == 'dateexpend') {
//         var datepickercolor = document.querySelector('.datepicker-date-display');
//         // console.log(datepickercolor);
//         datepickercolor.setAttribute('style', 'background-color: red !important;');

//     }

// });




incomingForm.addEventListener('submit', (e) => {

    e.preventDefault();

    // get Form value //

    var infoCash = incomingForm.value;
    var TypeCash = typeIncoming.value;
    var dateCash = dateIncome.value;
    var totalCash = totalcash.value;

    let updates = {};
    var time = new Date();
    var dateCashNum = Date.parse(dateCash);
    var timeNum = Date.parse(time);
    var numDataCorrect = '';
    var numExpends = '';
    var newArrayCash = {};

    //update the DB on change value

    database.ref('/cashflow/').orderByChild('number').on('value', function (snapshot) {

        let postArray = snapshot.val();
        let keys = Object.keys(postArray);

        for (var i = 0; i < keys.length; i++) {

            var id = keys[i];
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
        console.log(keys.length);

        if (keys.length == 1) {

            return numExpends = 1;

        }


    });
    console.log(numDataCorrect, dateCashNum, numExpends);

    // if the MONTH exists create and push New action
    if (numDataCorrect == dateCashNum) {
        console.log('excces');

        let newPostKey = firebase.database().ref().child('cashflow').child(dateCashNum).child('chashFlow').push().key;
        let updates = {};

        let postdata = {
            title: TypeCash,
            date: dateCash,
            totalCash: totalCash,
            type: 'in',
            after: "",
            time: time
        }

        updates['/cashflow/' + dateCashNum + '/chashFlow/' + newPostKey] = postdata;


        //clean the FOOM

        totalcash.value = '';
        dateIncome.value = '';
        typeIncoming.value = '';
        incomingForm.value = '';
        mainTable.innerHTML = "";

        //update DB
        firebase.database().ref().update(updates);


        if (numExpends == 1) {
            database.ref('/cashflow/').child(dateCashNum).on('value', function (snapshot) {

                let postArray = snapshot.val();
                let keys = Object.keys(postArray);
                console.log(postArray);
                newArrayCash = postArray;
                // console.log(postArray);
                // // let updates = {};
                // let newPostKey = firebase.database().ref().child('cashflow').child(dateCashNum).child('chashFlow').push().key;

                // // updates['/cashflow/' + dateCashNum + '/chashFlow/' + newPostKey] = postArray;
                // firebase.database().ref().update(updates);
            })

            console.log(newArrayCash);

            let newPostKeyA = firebase.database().ref().child('cashflow').child(dateCashNum).child('chashFlow').push().key;
            let newupdate = {};
            // let updates = {};
            let postdata = {

                title: newArrayCash.title,
                date: newArrayCash.date,
                totalCash: newArrayCash.totalCash,
                type: newArrayCash.type,
                after: newArrayCash.after,
                time: newArrayCash.time
            }

            newupdate['/cashflow/' + dateCashNum + '/chashFlow/' + newPostKeyA] = postdata;
            firebase.database().ref().update(newupdate);

            firebase.database().ref().child('cashflow').child(dateCashNum).update({


                title: "פעילות מרובה",
                date: newArrayCash.date,
                totalCash: "",
                type: newArrayCash.type,
                after: newArrayCash.after,
                time: newArrayCash.time
            })

        }
    } else {

        let postdata = {
            title: TypeCash,
            date: dateCash,
            totalCash: totalCash,
            type: 'in',
            after: "",
            time: time
        }

        updates['/cashflow/' + dateCashNum] = postdata;

        firebase.database().ref().update(updates);
        totalcash.value = '';
        dateIncome.value = '';
        typeIncoming.value = '';
        incomingForm.value = '';
        mainTable.innerHTML = "";

    }


    // for (var i = 0; i < keys.length; i++) {

    //     var id = keys[i];
    //     var currentObject = postArray[keys[i]].totalCash;
    //     console.log(currentObject);
    // }
    // return array = currentObject;

    // console.log(array);

    // if (array > 0) {

    //     firebase.database().ref().child('Monthly').child(month).child('in').update({

    //         totalCash: Number(totalCash) + Number(array)
    //     });

    // } else {
    //     let keyB = firebase.database().ref().child('Monthly').child(month).child('in').push().key;

    //     let updatesMonthly = {};

    //     let postdataMonthly = {

    //         totalCash: totalCash

    //     }

    //     updatesMonthly['/Monthly/' + month + '/in/'] = postdataMonthly;
    //     firebase.database().ref().update(updatesMonthly);
    // }






})

outcoming.addEventListener('submit', (e) => {
    e.preventDefault();

    var infoCash = infoOut.value;
    var TypeCash = typeOut.value;
    var dateCash = dateOut.value;
    var totalCash = totalOut.value;
    // console.log(keys.length);
    let updates = {};
    var time = new Date();
    var dateCashNum = Date.parse(dateCash);
    var timeNum = Date.parse(time);
    var numDataCorrect = '';
    var numExpends = '';
    var newArrayCash = {};
    database.ref('/cashflow/').orderByChild('number').on('value', function (snapshot) {

        let postArray = snapshot.val();
        let keys = Object.keys(postArray);



        for (var i = 0; i < keys.length; i++) {

            var id = keys[i];


            var currentObject = postArray[keys[i]].date;
            var dataDate = Date.parse(currentObject);

            if (dataDate == dateCashNum) {

                return numDataCorrect = dataDate;

            }

        }




    });
    database.ref('/cashflow/').child(dateCashNum).child('chashFlow').on('value', function (snapshot) {

        let postArray = snapshot.val();
        let keys = Object.keys(postArray);
        console.log(keys.length);
        if (keys.length == 1) {

            console.log('1');


            return numExpends = 1;

        }


    })
    console.log(numDataCorrect, dateCashNum, numExpends);
    if (numDataCorrect == dateCashNum) {
        console.log('excces');

        let newPostKey = firebase.database().ref().child('cashflow').child(dateCashNum).child('chashFlow').push().key;

        // let updates = {};
        let postdata = {

            title: TypeCash,
            date: dateCash,
            totalCash: totalCash,
            type: 'out',
            after: "",
            time: time
        }

        updates['/cashflow/' + dateCashNum + '/chashFlow/' + newPostKey] = postdata;

        totalcash.value = '';
        dateIncome.value = '';
        typeIncoming.value = '';
        incomingForm.value = '';
        mainTable.innerHTML = "";
        firebase.database().ref().update(updates);


        if (numExpends == 1) {
            database.ref('/cashflow/').child(dateCashNum).on('value', function (snapshot) {

                let postArray = snapshot.val();
                let keys = Object.keys(postArray);
                console.log(postArray);
                newArrayCash = postArray;
                // console.log(postArray);
                // // let updates = {};
                // let newPostKey = firebase.database().ref().child('cashflow').child(dateCashNum).child('chashFlow').push().key;

                // // updates['/cashflow/' + dateCashNum + '/chashFlow/' + newPostKey] = postArray;
                // firebase.database().ref().update(updates);
            })

            console.log(newArrayCash);

            let newPostKeyA = firebase.database().ref().child('cashflow').child(dateCashNum).child('chashFlow').push().key;
            let newupdate = {};
            // let updates = {};
            let postdata = {

                title: newArrayCash.title,
                date: newArrayCash.date,
                totalCash: newArrayCash.totalCash,
                type: newArrayCash.type,
                after: newArrayCash.after,
                time: newArrayCash.time
            }

            newupdate['/cashflow/' + dateCashNum + '/chashFlow/' + newPostKeyA] = postdata;
            firebase.database().ref().update(newupdate);

            firebase.database().ref().child('cashflow').child(dateCashNum).update({


                title: "פעילות מרובה",
                date: newArrayCash.date,
                totalCash: "",
                type: newArrayCash.type,
                after: newArrayCash.after,
                time: newArrayCash.time
            })

        }
    } else {

        let postdata = {
            title: TypeCash,
            date: dateCash,
            totalCash: totalCash,
            type: 'out',
            after: "",
            time: time
        }

        updates['/cashflow/' + dateCashNum] = postdata;

        firebase.database().ref().update(updates);
        totalcash.value = '';
        dateIncome.value = '';
        typeIncoming.value = '';
        incomingForm.value = '';
        mainTable.innerHTML = "";

    }

    var splitDate = dateCash.split(" ");
    var month = splitDate[0];
    var array = "";

    firebase.database().ref().child('Monthly').child(month).on('value', function (snapshot) {
        let postArray = snapshot.val();
        let keys = Object.keys(postArray);
        for (var i = 0; i < keys.length; i++) {

            var id = keys[i];
            var currentObject = postArray[keys[i]].totalCash;
            console.log(currentObject);
        }
        return array = currentObject;

    });

    console.log(array);

    if (array > 0) {

        firebase.database().ref().child('Monthly').child(month).child('in').update({

            totalCash: Number(totalCash) + Number(array)
        });

    } else {
        let keyB = firebase.database().ref().child('Monthly').child(month).child('in').push().key;

        let updatesMonthly = {};

        let postdataMonthly = {

            totalCash: totalCash

        }

        updatesMonthly['/Monthly/' + month + '/in/'] = postdataMonthly;
        firebase.database().ref().update(updatesMonthly);
    }

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


    // let newPostKeySetteing = firebase.database().ref().child('setting').push().key;
    let updatessetting = {};
    var time = new Date();

    let postdataSetting = {
        start: startnPoint,
        creditLine: creditLine,
        creditBank: creditBank,
        startDate: startDate,
        cuurentCash: startnPoint,
        time: time
    }
    var numDate = Date.parse(startDate);

    let newPostKey = firebase.database().ref().child('cashflow').child(numDate).push();
    let updates = {};
    var time = new Date();
    var split = startnPoint.split('-');
    var num = split[1];

    // console.log(split);
    var contain = startnPoint.includes("-");
    // console.log(contain);


    var currectCash = 0;

    if (contain == true) {

        let postdata = {

            title: "התחלה",
            date: startDate,
            totalCash: num,
            after: currectCash - num,
            time: time,
            type: 'out'
        }
        currectCash = currectCash - num;
        updates['/cashflow/' + numDate] = postdata;
        firebase.database().ref().update(updates);
        console.log(currectCash);


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

})


function laodUpData(I, doc, S, A) {

    // console.log(doc.date, doc.chashFlow, S, A)
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
        // TotalCash.style.color = 'green';

    } else if (type == 'out') {
        icon.setAttribute('id', 'downArrow');
        icon.textContent = 'arrow_downward';
        TotalCash.style.color = 'red';

        TotalCash.textContent = '-' + totalCash;
    }
    // int numA = Integer.parseInt(A);


    rowtable.setAttribute('id', 'newRow' + "-" + I);
    rowtable.setAttribute('class', 'newRow');

    typeCash.setAttribute('id', 'typeCash');
    TotalCashAfter.setAttribute('id', 'TotalCashAfter');
    DateCash.setAttribute('id', 'DateCash');
    TotalCash.setAttribute('id', 'TotalCash');

    DateCash.textContent = date;
    typeCash.textContent = title;
    TotalCashAfter.textContent = S;
    // var res = A.substring(-3);
    var newLine = 0 - A;
    var sumNum = S - newLine;
    // console.log(sumNum);
    // console.log(S, newLine);


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

            // console.log(keys.length);
            let spanNum = document.createElement("span");
            spanNum.setAttribute("class", "spanNum");
            spanNum.textContent = keys.length;
            typeCash.appendChild(spanNum);

            for (var i = 0; i < keys.length; i++) {

                var id = keys[i];


                var currentObject = postArray[keys[i]];
                // console.log(id, currentObject);
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
                    // TotalCash.style.color = 'green';

                } else if (type == 'out') {
                    icon.setAttribute('id', 'downArrow');
                    icon.textContent = 'arrow_downward';
                    TotalCash.style.color = 'red';

                    TotalCash.textContent = '-' + totalCash;
                }
                // int numA = Integer.parseInt(A);


                rowtable.setAttribute('id', I + 'newRow' + i);
                rowtable.setAttribute('class', 'newSubRow');

                typeCash.setAttribute('id', 'typeCash');
                TotalCashAfter.setAttribute('id', 'TotalCashAfter');
                DateCash.setAttribute('id', 'DateCash');
                TotalCash.setAttribute('id', 'TotalCash');

                DateCash.textContent = date;
                typeCash.textContent = title;
                TotalCashAfter.textContent = S;
                // var res = A.substring(-3);
                var newLine = 0 - A;
                var sumNum = S - newLine;
                // console.log(sumNum);
                // console.log(S, newLine);


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



                // console.log(icon.textContent);

                if (icon.textContent == 'arrow_downward') {

                    array.push("-" + cuurectcashDay);

                } else if (icon.textContent == 'arrow_upward') {
                    array.push(cuurectcashDay);
                }


            }

            // console.log(array);
            var getRow = document.getElementById("newRow-" + I).getElementsByTagName('td')[1];
            var getRowValue = getRow.innerText;
            var newNum = 0;

            for (var i = 0; i < array.length; i++) {



                if (type == 'in') {
                    // console.log(Number(newNum), Number(getRowValue), Number(array[i]))
                    newNum = Number(newNum) + Number(array[i]);
                } else if (type == 'out') {
                    // console.log(Number(newNum), Number(getRowValue), Number(array[i]))
                    newNum = Number(newNum) - Number(array[i]);

                }

            }
            getRow.innerText = newNum;
            database.ref('/cashflow/').child(I).update({
                totalCash: newNum

            });
            // getRow.textContent = getRowValue + array[]
            // console.log(newNum);

            rowtable.addEventListener('click', (e) => {
                // console.log('click')
                for (var i = 0; i < keys.length; i++) {

                    var row = document.getElementById(I + "newRow" + i);
                    var sts = row.style.display;
                    // console.log(sts);

                    // row.style.display = 'table-row';
                    if (sts == 'none') {

                        row.style.display = 'table-row';
                    } else {

                        row.style.display = 'none';
                    }
                }



            });
        });

    }

    var splitDate = dateCash.split(" ");
    var month = splitDate[0];
    let Num = "";
    var ststus = "";

    firebase.database().ref().child('Monthly').child(month).child('in').on('value', function (snapshot) {
        let postArray = snapshot.val();
        let keys = Object.keys(postArray);
        console.log(postArray.totalCash);
        Num = postArray.totalCash;
        // return Num;
    });

    console.log(Num);


    if (Num > 0) {
        firebase.database().ref().child('Monthly').child(month).child('in').update({

            totalCash: Number(Num) + Number(totalCash)
        })
        console.log("num");
    } else {

        console.log("empty");
        let updatesMonthly = {};

        let postdataMonthly = {

            totalCash: totalCash

        }

        updatesMonthly['/Monthly/' + month + '/in/'] = postdataMonthly;
        firebase.database().ref().update(updatesMonthly);

    }

}


var currectLimit = '';
database.ref('/setting/firstSetting/').on('value', function (snapshot) {

    // console.log(snapshot.val().start);
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

    // console.log(keys.length);


    for (var i = 1; i < keys.length + 1; i++) {

        var id = keys[i];
        var currentObject = postArray[keys[i]];
        var newDate = new Date();
        var currectnum = postArray[keys[i]].totalCash;
        var previus = postArray[keys[i - 1]].after;
        var type = postArray[keys[i]].type;
        var Status = document.getElementById('Status');
        var box = document.getElementById('BodyBoxSta');

        var StatusCash = 0;

        var date = currentObject.date;
        var newdateParse = Date.parse(date);
        var subdate = Date.parse(newDate);






        if (i == 0) {
            StatusCash = Number(currectnum);
            firebase.database().ref().child('cashflow').child(id).update({
                after: StatusCash
            })
            // console.log(StatusCash);

        } else if (i > 0 && type == 'out') {
            StatusCash = Number(previus) - Number(currectnum);
            firebase.database().ref().child('cashflow').child(id).update({
                after: StatusCash
            })
            // console.log(StatusCash);
        } else if (i > 0 && type == 'in') {
            console.log(Number(currectnum), Number(previus));

            StatusCash = Number(currectnum) + Number(previus);
            firebase.database().ref().child('cashflow').child(id).update({
                after: StatusCash
            })
            // console.log(StatusCash);
        }




        // console.log(StatusCash);





        // console.log(currectStatus);
        // console.log(currentObject, StatusCash, currentObject.after);
        laodUpData(id, currentObject, StatusCash, currectLimit);

        // renderTitleStickers(id, currentObject.name, currentObject.posx, currentObject.posy, currentObject.userCreate, currentObject.fontsize);

    }

   
});


// render data info 


