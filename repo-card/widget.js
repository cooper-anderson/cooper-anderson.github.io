setInterval(function() {
	$("div.repo-card").each(function (index, item) {
		$(item).replaceWith(`<iframe class="repo-card" src="repo-card/template.html?user=${$(item).data().user}&repo=${$(item).data().repo}" frameborder=0 scrolling="no" style="width: 320px; height: 388px;"></iframe`);
	});
});