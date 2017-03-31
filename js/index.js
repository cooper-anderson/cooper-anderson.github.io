$(".nav-link").on("click", function(data) {
	if (!$(this).hasClass("disabled")) {
		$(".nav-link").each(function(index, item) {
			$(item).removeClass("active");
		});
		$(this).addClass("active");
		if ($(this).data("url") != undefined) {
			$("#main-area").attr("src", $(this).data("url"));
		}
	}
})
