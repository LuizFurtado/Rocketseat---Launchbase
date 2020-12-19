const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require('./data');
server.use(express.static('public'));
server.set('view engine', 'njk');

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true
});

server.get('/', function(req, res) {
  const data = {
    avatar_url: "https://avatars3.githubusercontent.com/u/19859764?s=460&u=c3af343e6639c6f89dd3deb12c98a2fcaf111921&v=4",
    name: "Luiz Furtado",
    role: "Fullstack Developer",
    bio: "Desenvolvedor Fullstack com ótimos conhecimentos em Javascript e C#. Apaixonado por novas tecnologias e por transformar essas tecnologias em soluções para os problemas das pessoas.",
    social: [
      {
        name: "Github",
        url: "https://github.com/LuizFurtado"
      },
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/luiz-fernando-furtado/"
      },
      {
        name: "Twitter",
        url: "https://twitter.com/luizfpfurtado"
      }
    ]
  }
  return res.render('about', { info: data });
});

server.get('/portfolio', function(req, res) {
  return res.render('portfolio', { items: videos });
});

server.get('/video', function(req, res) {
  const id = req.query.id;
  const video = videos.find(function(video) {
    return video.id = id;
  });

  if(!video) {
    return res.send("Ops! This video was not found!");
  }

  return res.render('video', { item: video });
});

server.listen(5000, function() {
  console.log("Server running on port 5000");
});