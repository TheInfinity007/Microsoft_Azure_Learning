
module.exports = async function (context, req, connectionInfo) {
    context.log('signalR function Ran!!');

    context.res.body = connectionInfo
}
