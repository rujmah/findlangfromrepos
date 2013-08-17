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
  for (var i = 0; i < res.length; i++) {
      console.log(res[i].language);
    };
});
