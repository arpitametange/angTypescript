function optional(empName:string,empid:number,isTransportAvail?:boolean){
    console.log('**************Use of optional parameter**********************');
    console.log(`Employee's name:${empName}`);
    console.log(`Employee's id:${empid} `);
    if (isTransportAvail!=undefined) {
        console.log(`This is the optional parameter = isTransportAvail:${isTransportAvail} `);
        
    }

}
optional("Anvayi Sharma",12,true);
optional("Ankita Mishra",23)