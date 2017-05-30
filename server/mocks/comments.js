module.exports = function(app) {
  var lastId = 0;

  var comments = [{
    id: ++lastId,
    text: 'Något verkar fungera i alla fall. :)',
    user: 2,
    message: 2
  },{
    id: ++lastId,
    text: 'Väldigt bra',
    user: 1,
    message: 3
  },{
    id: ++lastId,
    text: 'Kunde inte gjort det bättre',
    user: 2,
    message: 3
  }];

   app.get('/api/comments', function(req, res) {
     res.send({
       comments: comments
     });
   });

   app.post('/api/comments', function(req, res) {

     var comment = {
       id: ++lastId,
       text: req.body.comment.text,
       message: req.body.comment.message,
       user: req.body.comment.user
     };

     comments.push(comment);

     res.send({
       comment: comment
     });
   });

   app.delete('/api/comments/:id', function(req, res) {

     var index = -1;
     var id = req.params.id;

     for (var i = 0; i < comments.length; i++) {
       var comment = comments[i];
       if (comment.id+"" === id) {
         index = i;
       }
     }

     if (index > -1) {
       comments.splice(index, 1);
     }

     res.status(204).end();
   });

   app.put('/api/comments/:id', function(req, res) {

     var id = req.params.id;

     for (var i = 0; i < comments.length; i++) {
       var comment = comments[i];
       if (comment.id+"" === id) {
         comment.text = req.body.comment.text;
         comment.message = req.body.comment.message;
         comment.user = req.body.comment.user;

         res.send({
           comment: comment
         });

         return;
       }
     }

     res.status(204).end();
   });

   app.get('/api/comments/:id', function(req, res) {

     var id = req.params.id;

    for (var i = 0; i < comments.length; i++) {
      var comment = comments[i];
      if (comment.id+"" === id) {
        res.send({
          comment: comment
        });

        return;
      }
    }

     res.send({});
   });
};
