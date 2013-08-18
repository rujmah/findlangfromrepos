var _und = require("underscore");
var GitHubApi = require("github");

var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    timeout: 5000
});

github.repos.getFromUser({
    user: "rujmah"
}, function(err, res) {
      // console.log(res);
  var langCount = {};
  for (var i = 0; i < res.length; i++) {
    var lang = res[i].language;
    langCount[lang] = (langCount[lang]===undefined ? 1 : langCount[lang]+1)
      
    // console.log(res[i].language + ':' + langCount[lang]);
    };
    var property_names = Object.getOwnPropertyNames(langCount);
    property_names = _und.reject(property_names, function(item){ return item === 'null' });
    console.log(property_names);
});
