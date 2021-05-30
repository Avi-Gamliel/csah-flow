const database = firebase.database();
var dateExpend = document.getElementById('dateexpend');
var outcoming = document.getElementById('outcoming');
var dateIncome = document.getElementById('dateIncoimg');
var typeIncoming = document.getElementById('typeIncoimg');
var totalcash = document.getElementById('totalIncoimg');
var infoOut = document.getElementById('infoOut');
var dateOut = document.getElementById('dateOut');
var typeOut = document.getElementById('typeOut');
var totalOut = document.getElementById('totalOut');
var settingForm = document.getElementById('settingForm');


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
    // var instance = M.Modal.getInstance(elem);
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.date');
    var instances = M.Datepicker.init(elems);
});

console.log('test');

const mainTable = document.getElementById('mainTable');

window.addEventListener('click', (e) => {

    var target = e.target.id;
    console.log(target);

    if (target == 'dateexpend') {
        var datepickercolor = document.querySelector('.datepicker-date-display');
        console.log(datepickercolor);
        datepickercolor.setAttribute('style', 'background-color: red !important;');

    }

});





incomingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    var infoCash = incomingForm.value;
    var TypeCash = typeIncoming.value;
    var dateCash = dateIncome.value;
    var totalCash = totalcash.value;

    let updates = {};
    var time = new Date();

    let postdata = {
        title: TypeCash,
        date: dateCash,
        totalCash: totalCash,
        type: 'in',
        after: "",
        time: time
    }

    updates['/cashflow/' + dateCash] = postdata;
    firebase.database().ref().update(updates);

    totalcash.value = '';
    dateIncome.value = '';
    typeIncoming.value = '';
    incomingForm.value = '';
    mainTable.innerHTML = "";
})

outcoming.addEventListener('submit', (e) => {
    e.preventDefault();
    mainTable.innerHTML = "";

    var infoCash = infoOut.value;
    var TypeCash = typeOut.value;
    var dateCash = dateOut.value;
    var totalCash = totalOut.value;

    let newPostKey = firebase.database().ref().child('cashflow').child(dateCash).push();
    let updates = {};
    var time = new Date();

    let postdata = {
        title: TypeCash,
        date: dateCash,
        totalCash: totalCash,
        after: "",
        type: 'out',
        time: time
    }

    updates['/cashflow/' + dateCash] = postdata;
    firebase.database().ref().update(updates);


    totalcash.value = '';
    dateIncome.value = '';
    typeIncoming.value = '';
    incomingForm.value = '';

    mainTable.textContent = '';
    // const modal = document.querySelector('#modal2');
    // M.Modal.getInstance(modal).close();
    // outcoming.reset();

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


    let newPostKey = firebase.database().ref().child('cashflow').child(startDate).push();
    let updates = {};
    var time = new Date();
    var split = startnPoint.split('-');
    var num = split[1];

    console.log(split);
    var contain = startnPoint.includes("-");
    console.log(contain);


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
        updates['/cashflow/' + startDate] = postdata;
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


function laodUpData(doc, S, A) {

    // console.log(doc.data().totalCash)
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


    rowtable.setAttribute('id', 'newRow');

    typeCash.setAttribute('id', 'typeCash');
    TotalCashAfter.setAttribute('id', 'TotalCashAfter');
    DateCash.setAttribute('id', 'DateCash');
    TotalCash.setAttribute('id', 'TotalCash');

    DateCash.textContent = date;
    typeCash.textContent = title;
    TotalCashAfter.textContent = S;
    var res = A.substring(-3);
    var newLine = 0 - res;
    var sumNum = S - newLine;
    console.log(sumNum);

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

}



database.ref('/setting/firstSetting/').on('value', function (snapshot) {

    // console.log(snapshot.val().start);
    var currentval = snapshot.val().start;
    var after = snapshot.val().creditBank;
    var visa = snapshot.val().creditLine;

    var limitCash = document.getElementById('limitCash');
    var limitCard = document.getElementById('limitCard');
    var Status = document.getElementById('Status');

    limitCard.textContent = visa;
    limitCash.textContent = after;

    database.ref('/cashflow/').orderByChild('date').on('value', function (snapshot) {

        let postArray = snapshot.val();
        let keys = Object.keys(postArray);



        for (var i = 1; i < keys.length + 1; i++) {

            var id = keys[i];
            var currentObject = postArray[keys[i]];
            var newDate = new Date();
            // var num = currentObject.split('-');
            var currectnum = postArray[keys[i]].totalCash;
            var previus = postArray[keys[i - 1]].after;
            var type = postArray[keys[i]].type;
            console.log('cuurect-', currectnum, 'previuies', previus, 'type ', type)
            var StatusCash = 0;

            var date = currentObject.date;
            var newdateParse = Date.parse(date);

            var subdate = Date.parse(newDate);

            // console.log(newDate,subdate);



            if (subdate < newdateParse) {
                // console.log(postArray[keys[i - 1]].after);
                Status.textContent = postArray[keys[i - 1]].after


            }



            if (i == 0) {
                StatusCash = currectnum;
                firebase.database().ref().child('cashflow').child(id).update({
                    after: StatusCash
                })
                console.log(StatusCash);

            } else if (i > 0 && type == 'out') {
                StatusCash = Number(previus) - Number(currectnum);
                firebase.database().ref().child('cashflow').child(id).update({
                    after: StatusCash
                })
                console.log(StatusCash);
            } else if (i > 0 && type == 'in') {
                StatusCash = Number(currectnum) + Number(previus);
                firebase.database().ref().child('cashflow').child(id).update({
                    after: StatusCash
                })
                console.log(StatusCash);
            }




            // console.log(StatusCash);





            // console.log(currectStatus);
            console.log(currentObject, StatusCash, after);
            laodUpData(currentObject, StatusCash, after);

            // renderTitleStickers(id, currentObject.name, currentObject.posx, currentObject.posy, currentObject.userCreate, currentObject.fontsize);

        }

    });
});


// render data info 


