/**
 * RssController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */


var RssController = {
    index: function(req,res){
        // Get the value of a parameter
        // Send a JSON response
        if('https' == req.protocol){
            res.view('home/index');
        }else{
            res.send(400, 'you could not access via https')
        };
    },
    socket: function(req,res){
        console.log("calling socket");
        var socket = req.socket;
        var io = sails.io;
        // Get the value of a parameter
        var param = req.param('message');
        var st = (param) ? true : false;
        
        io.sockets.emit('message', {thisIs: param});
        //socket.broadcast.to('roomName').emit('message', {thisIs: 'theMessage'});

        // Send a JSON response
        res.json({success: st, message: param});
    }
}

module.exports = RssController;

