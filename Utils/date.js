module.exports.getCurrentDate = () => {
    var date = new Date();
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var year = date.getFullYear();
    var hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    var meridiem = date.getHours() > 12 ? 'PM' : 'AM';
    date = day + '/' + month + '/' + year + ' ' + hour + ':' + minute + ':' + seconds + ' ' + meridiem;
    return date;
};
module.exports.getCurrentDateEndTime = () => {
    let cal = new Date();
    cal.setHours(23);
    cal.setMinutes(59);
    cal.setSeconds(59);
    cal.setMilliseconds(0);
    let date = cal.valueOf();

    return date;
};
module.exports.getCurrentDateOnly = () => {
    let cal = new Date();
    cal.setHours(0);
    cal.setMinutes(0);
    cal.setSeconds(0);
    cal.setMilliseconds(0);
    let date = cal.valueOf();

    return date;
};

module.exports.getDateWithEndTime = () => {
    let cal = new Date();
    cal.setHours(23);
    cal.setMinutes(59);
    cal.setSeconds(59);
    cal.setMilliseconds(999);
    let date = cal.valueOf();

    return date;
};

module.exports.getCurentYear = () => {
    let cal = new Date().getFullYear();
    return cal;
};

module.exports.CurrentDateonly = () => {
    var date = new Date();
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var year = date.getFullYear();

    date = day + '-' + month + '-' + year;
    return date;
};

// module.exports.getLeadCurrentDateandTime = () => {
//   var currentdate = new Date();
//   console.log(currentdate);
//   var datetime =
//     "Date : " +
//     currentdate.getDay() +
//     "/" +
//     currentdate.getMonth() +
//     "/" +
//     currentdate.getFullYear() +
//     " Time : " +
//     currentdate.getHours() +
//     ":" +
//     currentdate.getMinutes() +
//     ":" +
//     currentdate.getSeconds();
//     console.log(datetime);
//   return datetime;
// };
module.exports.getLeadCurrentDateandTime = () => {
    var currentdate = new Date();
    var datetime =
        'Date : ' +
        currentdate.getDate() +
        '-' +
        (currentdate.getMonth() + 1) +
        '-' +
        currentdate.getFullYear() +
        ' Time : ' +
        currentdate.getHours() +
        ':' +
        currentdate.getMinutes() +
        ':' +
        currentdate.getSeconds();
    return datetime;
};

module.exports.getGMTDate = () => {
    var date = new Date();
    return date;
};
