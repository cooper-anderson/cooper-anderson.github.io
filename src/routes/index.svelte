<script lang="ts">
	import Gear from "$lib/Gear.svelte";
	import Parallax from "$lib/Parallax.svelte";

	let y: number;
	let t: number;
</script>

<Parallax bind:t bind:y />

<div class="gears" style="transform: scale({2 + 0 * t})">
	<div style="transform: translate(-50%, -50%) translate(100px, 100px)">
		<Gear
			radius={200}
			thickness={10}
			teeth={30}
			toothHeight={2.5}
			toothGap={0.3}
			rotation={3.9 + (t * 360) / 2}
			color="#2A2A37"
		/>
	</div>
	<div style="transform: translate(-50%, -50%) translate(215px, 50px)">
		<Gear inverted teeth={15} spokes={3} rotation={t * 360} color="#2A2A37" />
	</div>
	<div style="transform: translate(-50%, -50%) translate(356px, 200px)">
		<Gear
			radius={400}
			thickness={10}
			teeth={60}
			toothHeight={1.5}
			spokes={6}
			spokeWidth={2}
			rotation={0.0 + (t * 360) / 4}
			color="#2A2A37"
		/>
	</div>
	<div style="transform: translate(-50%, -50%) translate(356px, 200px)">
		<Gear
			radius={100}
			thickness={10}
			teeth={18}
			toothHeight={5.0}
			spokes={3}
			rotation={0.0 + (t * 360) / 4}
			color="#363646"
		/>
	</div>
	<div style="transform: translate(-50%, -50%) translate(100px, 462px)">
		<Gear
			inverted
			radius={300}
			thickness={5}
			teeth={18 * 4}
			toothHeight={1.5}
			toothGap={0.08}
			spokes={4}
			rotation={45.1 + (t * 360) / 32}
			color="#2A2A37"
		/>
	</div>
	<div style="transform: translate(-50%, -50%) translate(100px, 462px)">
		<Gear
			inverted
			radius={800}
			thickness={5}
			teeth={18 * 8}
			toothHeight={0.6}
			toothGap={0.08}
			spokes={3}
			rotation={45.1 + (t * 360) / 32}
			color="#363646"
		/>
	</div>
	<div style="transform: translate(-50%, -50%) translate(587px, 462px)">
		<Gear
			radius={200}
			thickness={5}
			teeth={18}
			toothHeight={5.4}
			toothGap={0.08}
			spokes={3}
			rotation={45.1 + (t * 360) / 16}
			color="#2A2A37"
		/>
	</div>
	<div style="transform: translate(-50%, -50%) translate(1176px, 24px)">
		<Gear
			inverted
			radius={1600}
			thickness={5}
			teeth={18 * 8}
			toothHeight={0.8}
			toothGap={0.08}
			spokes={7}
			rotation={3.1 + (t * 360) / 128}
			color="#2A2A37"
		/>
	</div>
	<div style="transform: translate(-50%, -50%) translate(587px, 462px)">
		<Gear
			radius={400}
			thickness={5}
			teeth={18 * 4}
			toothHeight={1.4}
			toothGap={0.08}
			spokes={5}
			spokeWidth={4}
			rotation={45.1 + (t * 360) / 16}
			color="#363646"
		/>
	</div>
</div>

<div class="text">
	<span style="opacity: {1 - Math.max(0, y / 40)}"> scroll down </span>

	<div class="foreground" style="opacity: {(1 - 1) * 100}%">
		You have scrolled pixels
	</div>
</div>

<!--main>
	<h1>Welcome to my Website!</h1>
	<p>This is a work-in-progress</p>
	<p>
		In the meantime, out my
		<a href="https://github.com/cooperuser">GitHub</a>
	</p>
</main-->
<style>
	.gears {
		position: fixed;
	}

	.gears > div {
		position: absolute;
		display: inline;
		/* opacity: 0.2; */
	}

	.text {
		position: relative;
		width: 100%;
		height: 600vh;
		color: rgb(220, 113, 43);
		text-align: center;
		padding: 4em 0.5em 0.5em 0.5em;
		box-sizing: border-box;
		pointer-events: none;
	}

	span {
		display: block;
		font-size: 1em;
		text-transform: uppercase;
		will-change: transform, opacity;
	}

	.foreground {
		position: absolute;
		top: 700px;
		left: 0;
		width: 100%;
		height: calc(100% - 712px);
		/* background-color: rgb(32, 0, 1); */
		color: white;
		padding: 50vh 0 0 0;
	}

	:global(body) {
		background: #1f1f28;
		margin: 0;
		padding: 0;
	}
</style>
