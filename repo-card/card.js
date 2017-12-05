
temp = "outline-secondary"

function repoCard(user="cooper-anderson", repo="Blockade", func=function(data) {}) {
	$.ajax({
		url: `https://api.github.com/repos/${user}/${repo}`,
		success: function(data) {
			card = `<div class="repo-card card text-white bg-dark">
				<img class="card-img-top" src="img/card.svg" alt="Card image cap">
				<div class="card-body">
					<h4 class="card-title">${data.name}</h4>
					<p class="card-text">${data.description}</p>
					<a href="https://${user}.github.io/${repo}" id="page-button" class="btn btn-primary" target="_top">Page</a>
					<a href="${data.html_url}" id="repo-button" class="btn btn-primary" target="_top">Repo</a>
					<a href="${data.html_url}/stargazers" id="star-button" class="btn btn-${temp}" target="_top" data-toggle="tooltip" data-placement="top" title="Stargazers"><span class="octicon octicon-star"></span> <span id="star-count">${data.stargazers_count}</span></a>
					<a href="${data.html_url}/watchers" id="watch-button" class="btn btn-${temp}" target="_top" data-toggle="tooltip" data-placement="top" title="Watchers"><span class="octicon octicon-eye"></span> <span id="watch-count">${data.watchers_count}</span></a>
			</div>
		</div>`
			func(card);
		}
	})
}

