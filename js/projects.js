let repos = {};

$.ajax({
	url: "https://api.github.com/users/cooper-anderson/repos",
	success: function(data) {
		for (let repo in data) {
			if (data[repo].has_pages) {
				$.ajax({
					url: data[repo].languages_url,
					success: function(lang) {
						data[repo].languages = lang;
					}
				});
				repos[data[repo].name] = data[repo];
			}
		}
	},
	complete: main
});

function main() {
	for (let i = 0; i < 1; i++) {
		for (let repo in repos) {
			repoCard(user=repos[repo].owner.login, repo=repo, func=function(data) {$("#repos").append(data);});
		}
	}
}
