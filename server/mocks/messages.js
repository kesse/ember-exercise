module.exports = function(app) {

  var lastId = 0;

  var messages = [{
    id: ++lastId,
    title: 'Välkommen',
    body: 'Välkommen till mitt system',
    user: 1,
    comments: []
  },{
    id: ++lastId,
    title: 'Nyheter',
    body: 'Här kommer lite nyheter',
    user: 2,
    comments: [1]
  },{
    id: ++lastId,
    title: 'Ny model',
    body: 'Den nya modellen fungerar väldigt bra',
    user: 3,
    comments: [2, 3]
  }];

   app.get('/api/messages', function(req, res) {
     res.send({
       messages: messages
     });
   });

   app.get('/api/messages/:id', function(req, res) {

     var id = req.params.id;

    for (var i = 0; i < messages.length; i++) {
      var message = messages[i];
      if (message.id+"" === id) {
        res.send({
          message: message
        });

        return;
      }
    }

     res.send({});
   });

   app.post('/api/messages', function(req, res) {

     var message = {
       id: ++lastId,
       title: req.body.message.title,
       body: req.body.message.body,
       user: req.body.message.user,
       comments: []
     };

     messages.push(message);

     res.send({
       message: message
     });
   });

   app.delete('/api/messages/:id', function(req, res) {

     var index = -1;
     var id = req.params.id;

     for (var i = 0; i < messages.length; i++) {
       var message = messages[i];
       if (message.id+"" === id) {
         index = i;
       }
     }

     if (index > -1) {
       messages.splice(index, 1);
     }

     res.status(204).end();
   });

   app.put('/api/messages/:id', function(req, res) {

     var id = req.params.id;

     for (var i = 0; i < messages.length; i++) {
       var message = messages[i];
       if (message.id+"" === id) {
         message.title = req.body.message.title;
         message.body = req.body.message.body;
         message.user = req.body.message.user;

         res.send({
           message: message
         });

         return;
       }
     }

     res.status(204).end();
   });
};
