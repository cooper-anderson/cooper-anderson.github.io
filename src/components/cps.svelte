<script lang="ts">
	let clicks = 0;

	function onClick() {
		clicks++;
		setTimeout(() => clicks--, 1000);
	}
</script>

<main>
	<h1>{clicks} clicks per second</h1>
	<button on:click={onClick}>click</button>
</main>
