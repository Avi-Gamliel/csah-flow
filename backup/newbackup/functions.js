


////////////// GO TO INDEX.JS in function ///////////////////

const fucntions = require('frirebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {

// check requist is made by admin

if(context.auth.token.admin !==true){
    return {error:'you are not admin'}
}


    return admin.auth().getUserByEmail(data.email).then(user => {
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true
        });
    }).then(() => {
        console.log('succses admin user');
    }).catch(err => {
        console.log(err);
    })
})



////////////// GO TO AUTH.JS in function //////////////////

//GET USER EMAIL


// REFEERENCE FUNCTION TO ADDAMINROLE
const addAdminRole = functions.httpsCallable('addAdminRole');
addAdminRole({ email: emaildata }).then(result => {
    console.log(result);
})



// IN Auth.ONAUTHSTATECHANGE if(USER)

user.getIdTokenResult().then(idTokenResult=>{
    console.log(idTokenResult.claims);
    user.admnin =idTokenResult.claims.admin;
})



