function optional(empName, empid, isTransportAvail) {
    console.log('**************Use of optional parameter**********************');
    console.log("Employee's name:".concat(empName));
    console.log("Employee's id:".concat(empid, " "));
    if (isTransportAvail != undefined) {
        console.log("This is the optional parameter = isTransportAvail:".concat(isTransportAvail, " "));
    }
}
optional("Anvayi Sharma", 12, true);
optional("Ankita Mishra", 23);
