module.exports = function(app) {
  var messages = [{
    id: 1,
    title: 'Välkommen',
    body: 'Välkommen till mitt system'
  },{
    id: 2,
    title: 'Nyheter',
    body: 'Här kommer lite nyheter'
  },{
    id: 3,
    title: 'Ny model',
    body: 'Den nya modellen fungerar väldigt bra'
  }];

   app.get('/api/messages', function(req, res) {
     res.send(messages);
   });

   app.get('/api/messages/:id', function(req, res) {

     var id = req.params.id;

    for (var i = 0; i < messages.length; i++) {
      var message = messages[i];
      if (message.id+"" === id) {
        res.send(message);

        return;
      }
    }

     res.send({});
   });
};
