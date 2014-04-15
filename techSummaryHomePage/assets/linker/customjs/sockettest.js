$(function(){
    $('.socket').click(function(){
        socket.get('/socket',{
            message: 'hi there!'
        }, function (response) {
            console.log(response);
            // response === {success: true, message: 'hi there!'}
        });
    });
})
