const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const recipes = require('./data');

server.use(express.static('public'));
server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  noCache: true
});

server.get('/', function(req, res) {
  const featured = [];

  for (let index = 0; index < 6; index++) {
    featured.push(recipes[index]);
  }

  return res.render('home', { recipes: featured });
});

server.get('/about', function(req, res) {
  return res.render('about');
});

server.get('/recipes', function(req, res) {
  return res.render('recipes', { recipes });
});

server.get('/recipe/:id', function(req, res) {
  const { id } = req.params;
  const recipe = recipes[id];

  if(!recipe) return res.send(`Oooppss... receita não encontrada!`);

  return res.render('recipe', { recipe });
});

server.listen(5000, function() {
  console.log("Server running on port 5000...");
});