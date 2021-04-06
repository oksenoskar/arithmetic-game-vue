const cryptojs = require('crypto-js');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger funcst.');

    var encrypted = cryptojs.AES.encrypt(req.query.s, req.query.pw);

    context.res = {
        status: 200,
        body: {
            output: `${encrypted}`
        }
    };
}