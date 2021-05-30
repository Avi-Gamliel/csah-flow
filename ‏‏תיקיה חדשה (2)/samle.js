var splitDate = dateCash.split(" ");
var month = splitDate[0];


let keyB = firebase.database().ref().child('Monthly').child(month).child('in').push().key;

let updatesMonthly = {};

let postdataMonthly = {

    title: TypeCash,
    date: dateCash,
    totalCash: totalCash,
    type: 'in',
    after: "",
    time: time
}

updatesMonthly['/Monthly/' + month + '/in/' + keyB] = postdataMonthly;
firebase.database().ref().update(updatesMonthly);





tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        console.log(target);
        tabContents.forEach(tabcontent => {
            tabcontent.classList.remove('active')
        })
        target.classList.add('active');
    })
})
