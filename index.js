/**
 * Connection ID Creator
 * generates a string of characters for use in unique identification
 *
 * USE:
 * CID.create() - returns unique string for general use
 * CID.createCID() - returns unique string for conversation IDs 
 * CID.createGID() - returns unique string for group IDs
 * CID.createMID() - returns unique string for media IDs
 */

var cid_VERSION = "00";

function getLastOfTimestamp ( num ) {
    var d = +new Date + "";
    var f = d;
    if(num){
        f = d.substring( d.length - num, d.length);
    }
    return f;
}

function generateRandom ( s ) {
    var n;
    if (typeof(s) == 'number' && s === parseInt(s, 10)){
        s = Array(s + 1).join('x');
    }
    return s.replace(/x/g, function(){
        var n = Math.round(Math.random() * 61) + 48;
        n = n > 57 ? (n + 7 > 90 ? n + 13 : n + 7) : n;
        return String.fromCharCode(n);
    });
}

module.exports = {

    create: function () {
        var rand6   = generateRandom(6);
        var TS      = getLastOfTimestamp();
        var rand12  = generateRandom(12);

        return rand6 + TS + rand12 + cid_VERSION;
    },

    createCID: function () {
        var rand6   = generateRandom(6);
        var TS      = getLastOfTimestamp(5);
        var rand8   = generateRandom(8);

        return cid_VERSION + rand8 + TS + rand6;
    },

    createGID: function () {
        var rand4   = generateRandom(4);
        var TS      = getLastOfTimestamp(4);
        var rand6   = generateRandom(6);

        return rand4 + TS + rand6 + cid_VERSION;
    },

    createMID: function () {
        var rand11   = generateRandom(11);
        var TS      = getLastOfTimestamp();
        var rand13   = generateRandom(13);

        return rand13 + TS + cid_VERSION + rand11;
    },

    total: function () {
        var num = (Math.pow(6, 36) + Math.pow(13, 10) + Math.pow(12, 36) + 3);
            num = Math.pow(num, 4);
        return num;
    }

};