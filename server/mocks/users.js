module.exports = function(app) {
  var users = [{
    id: 1,
    firstName: 'Ove',
    lastName: 'Törnberg',
    age: 12
  },{
    id: 2,
    firstName: 'Mats',
    lastName: 'Mattson',
    age: 45
  },{
    id: 3,
    firstName: 'Göran',
    lastName: 'Göransson',
    age: 70
  }];

   app.get('/api/users', function(req, res) {
     res.send({
       users: users
     });
   });

   app.get('/api/users/:id', function(req, res) {

     var id = req.params.id;

    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      if (user.id+"" === id) {
        res.send({
          user: user
        });

        return;
      }
    }

     res.send({});
   });
};
