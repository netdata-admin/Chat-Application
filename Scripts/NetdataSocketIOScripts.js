var socket = null;
var columns = [];
function connecttoNetdataSocketIO(apiKey, socketName) {
    if (socket == null) {
        socket = io.connect("http://www.netdata.com:8888", { 'forceNew': true });

        socket.on("connect", function () {
            socket.emit("firstConnection", apiKey, socketName);
            console.log("connected");
            onConnect();
        });

        socket.on("getDataFromServer", function (data) {
            console.log("data recived");
            onData(data);
        });

        socket.on("getDataColumns", function (columns) {
            onGetColumns(columns);
            this.columns = columns;
        });

        socket.on('disconnect', function () {
            socket.disconnect();
            onDisconnect();
            console.log('disconnected');
        });

        socket.on('sendError', function (errorMessage) {
            onError(errorMessage);
            console.log('Error:' + errorMessage);
        });

        socket.on('socketDisconnected', function (socketName) {
            onSocketDisconnected(socketName);
        });

        socket.on('socketConnected', function (socketName) {
            onSocketConnected(socketName);
        });
        socket.on('getUserList', function (users) {
            getUserList(users);
        });

        socket.on('getDataFromSocket', function (data) {
            onGetDataFromSocket(data);
            console.log(data);
        });

    }
    else {
        console.log("Already connected");

    }
}
function sendDataToServer(data, socketName) {

    console.log("data sended:" + data + " to " + socketName);
    socket.emit("sendDataFromClient", data, apiKey, socketName);

}
function sendtDataToSocket(columnNameArray, dataArray, socketName) {

    if (typeof columnNameArray.length == "undefined" || typeof dataArray.length == "undefined") {
        console.log("Undefined array");
        return 0;
    }

    if (columnNameArray.length != dataArray.length) {
        console.log("Length of arrays must be same!");
        return 0;
    }

    var obj = {};
    for (var i = 0; i < columnNameArray.length; i++) {
        obj[columnNameArray[i]] = dataArray[i];
    }
    var result = JSON.stringify(obj);
    socket.emit('sendDataToSocket', result, socketName);
    console.log("data sended to socket:" + socketName + " data:" + result);
}
function getColumns() {
    socket.emit("getDataColumns", apiKey);
    console.log("get data columns for:" + apiKey);
}
function createAndSendData(columnNameArray, dataArray, socketName) {

    if (typeof columnNameArray.length == "undefined" || typeof dataArray.length == "undefined") {
        console.log("Undefined array");
        return 0;
    }

    if (columnNameArray.length != dataArray.length) {
        console.log("Length of arrayys must be same");
        return 0;
    }

    var obj = {};
    for (var i = 0; i < columnNameArray.length; i++) {
        obj[columnNameArray[i]] = dataArray[i];
    }
    result = JSON.stringify(obj);
    sendDataToServer(result, socketName);
}