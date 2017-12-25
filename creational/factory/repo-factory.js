class RepoFactory {
  constructor() {
    let repos = this;
    let repoList = [
      {
        name: "task",
        source: "../module/task-repo"
      }
      //   {
      //     name: "user",
      //     source: "./user-repo"
      //   },
      //   {
      //     name: "project",
      //     source: "./project-repo"
      //   }
    ];

    repoList.forEach(function(repo) {
      repos[repo.name] = require(repo.source);
    });
  }
}

module.exports = new RepoFactory();
