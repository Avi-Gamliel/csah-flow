const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { log } = require('firebase-functions/lib/logger');
admin.initializeApp();


exports.addAdminRole = functions.https.onCall((data, context) => {

    // if (context.auth.token.admin !== true) {
    //     return { error: 'you are not admin' }
    // }

    return admin.auth().getUserByEmail(data.email).then(user => {
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true
        });
    }).then(() => {
        return 'succses admin user';
    }).catch(err => {
        return err;
    })

})

exports.checkifCUPUNRIGHT = functions.https.onCall((data, context) => {

    var cupun = '1$2CASH76&FLOW';
    var dataUser = data.word;
    var code = dataUser.toString();

    console.log(code, cupun, data);
    if (code == cupun) {
        return true;
    } else {
        return false;
    }
});
