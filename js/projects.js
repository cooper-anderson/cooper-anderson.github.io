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
	for (let repo in repos) {
		$("#repos").append(`<div class="repo-card" data-user="${repos[repo].owner.login}" data-repo="${repo}"></div>`);
	}
}