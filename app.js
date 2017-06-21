const express = require('express');
const mustacheExpress = require('mustache-express');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

var todo_list = [
  {'title': 'Learn Node', complete: false}
  , {'title': 'Learn Express', complete: false}
  , {'title': 'Learn Routes', complete: false}
];

//Listening on root
app.get('/todo/', function (req, res) {
  var idx = 0;
  var ctx = {
    todos: todo_list,
    id: function(){
      return idx++;
    }
  };

  res.render('todo', ctx);
});

app.get('/todo/:id/complete', function(req, res){
  var id = req.params.id;
  todo_list[id].complete = true;
  res.send(200);
});

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
