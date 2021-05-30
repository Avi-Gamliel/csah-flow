const loginform = document.getElementById('signinEmail');
const signInGoogle = document.getElementById('signinGoole');
const sign_inGoole = document.getElementById('sign_inGoole');

const logout = document.querySelector('#logOut');
const signUpForm = document.getElementById('signupEmail');
const name_signup = document.getElementById('name_signup');
const newpassword_signup = document.getElementById('newpassword_signup');
const lastName_signup = document.getElementById('lastName_signup');
const newEmail_signup = document.getElementById('newEmail_signup');
var provider = new firebase.auth.GoogleAuthProvider();
var Home = document.getElementById("home_page");
var img = document.getElementById("userUrl");
var menu = document.getElementById("menu");
var alertBox = document.getElementById("alertBox");
let spinner = document.getElementById("spinner");
let openpage = document.getElementById("openpage");
var sidemenupad = document.getElementById("sidemenupad");


function Alert(m) {
    var alert = `<div class="row col-12 mt-3 mx-0 px-0"><div class="alert alert-danger alert-dismissible fade show  mx-auto" role="alert">
        ${m}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div></div>`;
    return alert
}

function Promt(m, type, id) {
    var pro =
        ` <div class="modal fade" id=${id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">מחיקה</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="text-right">${m}</div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn cd" id="yes${type}">כן</button>
                        <button type="button" class="btn cd" id="no${type}">לא</button>
                    </div>
                </div>
            </div>
        </div>`;
    return pro;


}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

auth.onAuthStateChanged(user => {

    if (user) {
        // console.log('a');
        sidemenupad.style.background = "#282b30 "
        GETINUSER()

    } else {
        openpage.style.display = 'block'
        sidemenupad.style.background = "#f8f9fa"
    }
});

signUpForm.addEventListener('click', (e) => {

    e.preventDefault();

    const firstName = name_signup.value;
    const lastName = lastName_signup.value;
    const newEmail = newEmail_signup.value;
    const newpassword = newpassword_signup.value;

    var fchar = firstName.charAt(0).toUpperCase();
    var lchar = lastName.charAt(0).toUpperCase();
    var x = fchar + lchar;
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
        firebase.database().ref().update(updates).then(() => {

        })
        var actionCodeSettings = {

            url: 'https://cash-flow-app-236ed.web.app/',
            // This must be true.
            handleCodeInApp: true,

        };
        auth.sendSignInLinkToEmail(newEmail, actionCodeSettings)
            .then(function () {
                console.log("sendlink");
                window.localStorage.setItem('emailForSignIn', newEmail);
            })
            .catch(function (error) {
                console.log(error);
            });

        if (auth.isSignInWithEmailLink(window.location.href)) {
            var email = window.localStorage.getItem('emailForSignIn');
            if (!email) {
                email = window.prompt('Please provide your email for confirmation');
            }
            firebase.auth().signInWithEmailLink(email, window.location.href)
                .then(function (result) {

                    window.localStorage.removeItem('emailForSignIn');
                })
                .catch(function (error) {

                });
        }

    }).catch((err) => {
        if (err == "The email address is badly formatted") {
            alertBox.innerHTML = Alert('חסרים פרטים');
        } else {
            alertBox.innerHTML = Alert('המשתמש קיים במערכת');
        }
    });

});

signInGoogle.addEventListener('click', (e) => {
    signGoogle();
});
sign_inGoole.addEventListener('click', (e) => {
    signGoogle();
});
function signGoogle() {

    firebase.auth().signInWithPopup(provider).then(function (result) {

        var token = result.credential.accessToken;
        var user = result.user;
        var photoUrl = user.photoURL;
        var name = user.displayName;
        var array = name.split(" ");
        var fName = array[0];
        var lName = array[1];
        var id = user.uid;
        var email = user.email;

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

            // const modal = document.querySelector('#modal-signIn');
            // M.Modal.getInstance(modal).close();
            // loginform.reset();

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

        }).catch((err) => {
            console.log(err);
        });
        ;
        // ...
    }).then(() => {
        // location.reload();

        // GETINUSER();

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

loginform.addEventListener('click', (e) => {

    e.preventDefault();

    var em = document.getElementById("Email");
    var ps = document.getElementById("password");
    var closesignin = document.getElementById("closesignin");

    const Email = em.value;
    const password = ps.value;
    em.classList.remove("is-invalid");
    em.classList.remove("is-valid");
    ps.classList.remove("is-invalid");

    auth.signInWithEmailAndPassword(Email, password).then(cred => {

        // const modal = document.querySelector('#modal-signIn');
        // M.Modal.getInstance(modal).close();
        // signIn.reset();

        $('#modal-signIn').modal('hide');
        // spinner.style.display = "block"


        // jQuery(window).on('load', function () {
        //     // jQuery("#spinner").show();
        // });
        // GETINUSER()



        // location.reload();

    }).catch(function (error) {

        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorMessage);


        var g = validateEmail(Email);

        console.log(g);
        if (Email == "" || g == false) {
            em.classList.remove("is-valid");
            em.classList.add("is-invalid");
        } else {
            em.classList.remove("is-invalid");
            em.classList.add("is-valid");
        }
        if (password == "") {
            // ps.classList.remove("is-valid");
            ps.classList.add("is-invalid");
        } else {
            ps.classList.remove("is-invalid");
            // ps.classList.add("is-valid");
        }


        // if (password !== "" && Email !== "" && errorMessage == "The email address is badly formatted.") {
        //     alertBox.innerHTML = Alert("חסרים פרטים")
        // } else if (password !== "" && Email !== "") {
        //     alertBox.innerHTML = Alert("חסרים פרטים")
        // } else if (errorMessage == "The email address is badly formatted.") {

        //     alertBox.innerHTML = Alert("האימייל לא כתוב נכון")

        // } else if (errorMessage == "The password is invalid or the user does not have a password.") {

        //     alertBox.innerHTML = Alert("המייל או הסיסמא לא נכונים")
        // }

        // else if (errorMessage == "The email address is badly formatted."){
        // alertBox.innerHTML = Alert("מייל או סיסמא לא נכונים")
        // 
        // }
        closesignin.addEventListener('click', e => {
            em.classList.remove("is-valid");
            em.classList.remove("is-invalid");
            ps.classList.remove("is-invalid");

        })
        // ...
    });


});

logout.addEventListener('click', (e) => {
    e.preventDefault();

    auth.signOut();
    var Home = document.querySelector('#home_page');
    var Tableview = document.querySelector('#table_page');
    Home.innerHTML = '';
    Tableview.innerHTML = '';
    location.reload();


});