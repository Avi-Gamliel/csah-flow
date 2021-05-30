const loginform = document.querySelector('#loginform');
const signInGoogle = document.getElementById('signinGoole');
const logout = document.querySelector('#logOut');
const signUpForm = document.getElementById('signupEmail');
const name_signup = document.getElementById('name_signup');
const newpassword_signup = document.getElementById('newpassword_signup');
const lastName_signup = document.getElementById('lastName_signup');
const newEmail_signup = document.getElementById('newEmail_signup');

// const signUp_Form = document.querySelector('#signupEmail');


var provider = new firebase.auth.GoogleAuthProvider();
var Home = document.getElementById("Home");
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
var img = document.getElementById("userUrl");
var menu = document.getElementById("menu");






auth.onAuthStateChanged(user => {

    if (user) {
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

        loggedInLinks.forEach(item => item.style.display = 'inline-block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
        Home.style.display = "block"
        // img.setAttribute("src", user.photoURL);
        // setup_project(user);

    } else {

        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
        menu.style.display = "none";
    }
});


signUpForm.addEventListener('click', (e) => {
    console.log("1");

    // const name_signup = document.getElementById('name_signup');
    // const newpassword_signup = document.getElementById('newpassword_signup');
    // const lastName_signup = document.getElementById('lastName_signup');
    // const newEmail_signup = document.getElementById('newEmail_signup');

    //get user info//

    const firstName = name_signup.value;
    const lastName = lastName_signup.value;
    const newEmail = newEmail_signup.value;
    const newpassword = newpassword_signup.value;
    console.log(firstName, lastName, newEmail);
    var fchar = firstName.charAt(0).toUpperCase();
    var lchar = lastName.charAt(0).toUpperCase();
    var x = fchar + lchar;

    console.log(firstName, newEmail);
    // sign in user//

    auth.createUserWithEmailAndPassword(newEmail, newpassword).then(cred => {

        let updates = {};

        let postdata = {
            firstName: firstName,
            lastName: lastName,
            Email: newEmail,
            photoURL: x,
            password: newpassword
        }

        updates['/Users/' + cred.user.uid + '/info/'] = postdata;
        return firebase.database().ref().update(updates).then(() => {
            const modal = document.querySelector('#modal-signUp');
            M.Modal.getInstance(modal).close();
            signUpForm.reset();
        }).then(() => {

            db.collection('users').doc(cred.user.uid).set({

                firstName: firstName,
                lastName: lastName,
                email: newEmail,
                photoURL: x,
                password: newpassword

            });

        });
    }).then(() => {

    }).catch((err) => {
        alert(err);
    });



})


signInGoogle.addEventListener('click', (e) => {

    signGoogle();

});

function signGoogle() {

    firebase.auth().signInWithPopup(provider).then(function (result) {

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        var photoUrl = user.photoURL;
        var name = user.displayName;
        var array = name.split(" ");
        var fName = array[0];
        var lName = array[1];
        var id = user.uid;
        var email = user.email;
        // userImage.setAttribute("src", photoUrl);

        let updates = {};
        let postdata = {

            firstName: fName,
            lastName: lName,
            Email: email,
            uid: id,
            photoURL: photoUrl

        }




        updates['/Users/' + id + '/info/'] = postdata;
        firebase.database().ref().update(updates).then(() => {

            const modal = document.querySelector('#modal-signIn');
            M.Modal.getInstance(modal).close();
            loginform.reset();

            firstName = fName;
            lastName = lName;
            Email = email;
            uid = id;
            photoURL = photoUrl;

        }).then(() => {

            db.collection('users').doc(id).set({

                firstName: fName,
                lastName: lName,
                Email: email,
                uid: id,
                photoURL: photoUrl

            });

        });
        location.reload();
        // ...
    }).catch(function (error) {

        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(error);

        // ...
    });

}

loginform.addEventListener('submit', (e) => {

    e.preventDefault();

    const Email = loginform['Email'].value;
    const password = loginform['password'].value;


    auth.signInWithEmailAndPassword(Email, password).then(cred => {

        const modal = document.querySelector('#modal-signIn');
        M.Modal.getInstance(modal).close();
        signIn.reset();

    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });

});

logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
    // location.reload();
    var Home = document.querySelector('#Home');
    var Tableview = document.querySelector('#Tableview');
    Home.innerHTML = '';
    Tableview.innerHTML = '';

});