var r = require("./cryptojs.js");
var s = "xwg_ielts_mini_program";

var encode = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

var m = secret(encode, !0);

console.log(m);

function secret(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    var n = r.MD5(s).toString();
    var o = r.enc.Utf8.parse(n.substring(0, 16));
    var i = r.enc.Utf8.parse(n.substring(16));

    return t ? r.AES.decrypt(e, i, {
        iv: o,
        padding: r.pad.Pkcs7
    }).toString(r.enc.Utf8) : r.AES.encrypt(e, i, {
        iv: o,
        mode: r.mode.CBC,
        padding: r.pad.Pkcs7
    }).toString();
};
