const loginform = document.querySelector('#loginform');
const signInGoogle = document.getElementById('signinGoole');
const logout = document.querySelector('#logOut');
const signUpForm = document.querySelector('#formSignUp');
var provider = new firebase.auth.GoogleAuthProvider();
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

auth.onAuthStateChanged(user => {

    if (user) {
        console.log(user.uid);  // id of user
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');

        setup_project(user);

    } else {
        console.log('user out');
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');

    }
});


signUpForm.addEventListener('submit', (e) => {

    e.preventDefault();

    //get user info//

    const firstName = signUpForm['firstName'].value;
    const lastName = signUpForm['lastName'].value;
    const newEmail = signUpForm['newEmail'].value;
    const newpassword = signUpForm['newpassword'].value;

    // sign in user//

    auth.createUserWithEmailAndPassword(newEmail, newpassword).then(cred => {

        let updates = {};

        let postdata = {
            firstName: firstName,
            lastName: lastName,
            Email: newEmail,
            password: newpassword
        }

        updates['/Users/' + cred.user.uid] = postdata;
        return firebase.database().ref().update(updates).then(() => {
            const modal = document.querySelector('#modal-signUp');
            M.Modal.getInstance(modal).close();
            signUpForm.reset();
        }).then(() => {

            db.collection('users').doc(cred.user.uid).set({

                firstName: firstName,
                lastName: lastName,
                email: newEmail,
                password: newpassword

            });

        });

    });

});

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

        console.log(postdata);


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
    console.log(Email, password);

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
    // var projectsListshare = document.querySelector('.shareprojects');
    // var projectsList = document.querySelector('.projects');
    // projectsListshare.innerHTML = '';
    // projectsList.innerHTML = '';

});