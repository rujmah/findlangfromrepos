## findlangfromrepos

A node commandline app to find the most likely favourite language for a github user by from their public repos.

## Getting started

### Installation

```sh
git clone git@github.com:rujmah/findlangfromrepos.git
cd findlangfromrepos && npm install
```

### Running

Run the app with the following syntax ```node app [username]``` where ```username``` is a GitHub username.

For example:

```sh
node app dhh
```

Would return: 

```sh
Username [dhh] entered
Requesting data from GitHub API...
---
Ruby used 14 times.
---
From such we must conclude that the most favourite of all codes for user is:
***Ruby***
---
```

## Testing

Yep, that would be good. 
