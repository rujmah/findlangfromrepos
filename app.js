var GitHubApi = require("github");

var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    timeout: 5000
});


if (process.argv[2]===undefined) {
  console.log("Please enter a git username: node app [username]");
} else {
  var username = process.argv[2];
  console.log('Username [' + username + '] entered');
  console.log('Requesting data from GitHub API...');
  console.log('---');
  
  github.repos.getFromUser({
    user: username
  }, function(err, res) {
    if (res===undefined || res.length < 1) {
      console.log(username + 'has no public repos that I can find...');
      return;
    }
    var langCount = {};
    for (var i = 0; i < res.length; i++) {
      var lang = res[i].language;
      langCount[lang] = (langCount[lang]===undefined ? 1 : langCount[lang]+1)
    };
    var sortable = [];
    for (var item in langCount) {sortable.push([item, langCount[item]])}
    var to_return;
    code_use = sortable.sort(function(a, b) {return b[1] - a[1]})
    for(var i in code_use) {console.log(code_use[i][0] + ' used ' + code_use[i][1] + ' times.');}
    console.log('---');
    console.log('From such we must conclude that the most favourite of all codes for user is: ');
    console.log('***' + code_use[0][0] + '***');
    console.log('---');
  });
}