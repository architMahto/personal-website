// importing node modules
var express    = require('express'),
    bodyParser = require('body-parser'),
    logger     = require('morgan'),
    cors       = require('cors'),
    port       = 3000;

var app = express();

/* middleware */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(cors());

app.listen(port, function() {
  console.log("You are connected to port:", port);
});
