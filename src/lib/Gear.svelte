<script lang="ts">
	export let radius: number = 100;
	export let thickness: number = 10;
	export let teeth: number = 12;
	export let toothHeight: number = 5;
	export let toothGap: number = 0.2;
	export let spokes: number = 5;
	export let spokeWidth: number = 5;
	export let inverted: boolean = false;
	export let rotation: number = 0;
	export let color: string = "#FFA066";

	let clockwise = inverted ? -1 : 1;
	let spacing = (40 * Math.PI) / teeth - toothGap;
	let toothAngles = genAngles(teeth, inverted ? 0.5 : 0);
	let spokeAngles = genAngles(spokes, inverted ? 0.5 : 0);

	function genAngles(count: number, offset: number = 0) {
		return [...Array(count).keys()].map(i => ((i + offset) / count) * 360);
	}
</script>

<svg
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	width={radius}
	height={radius}
	class="gear"
	class:inverted
>
	<g
		style="transform: translate(50%, 50%) rotate({rotation * clockwise}deg)"
		fill={color}
	>
		<circle
			r="{40 - thickness / 2}%"
			stroke={color}
			stroke-width="{thickness}%"
			fill="none"
		/>
		{#each toothAngles as theta}
			<rect
				x="{-spacing / 2}%"
				y="{40 - thickness / 2}%"
				width="{spacing}%"
				height="{toothHeight + thickness / 2}%"
				style="transform: rotate({theta}deg)"
			/>
		{/each}
		{#each spokeAngles as theta}
			<rect
				x="{-spokeWidth / 2}%"
				y="0"
				width="{spokeWidth}%"
				height="{40 - thickness / 4}%"
				style="transform: rotate({theta}deg)"
			/>
		{/each}
	</g>
</svg>
