module.exports = function(app) {
  var comments = [{
    id: 1,
    text: 'Något verkar fungera i alla fall. :)',
    user: 2,
    message: 2
  },{
    id: 2,
    text: 'Väldigt bra',
    user: 1,
    message: 3
  },{
    id: 3,
    text: 'Kunde inte gjort det bättre',
    user: 2,
    message: 3
  }];

   app.get('/api/comments', function(req, res) {
     res.send({
       comments: comments
     });
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
