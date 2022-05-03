<script lang="ts">
	export let y: number = 0;
	export let t: number = 0;
	$: t = y / 2296;
</script>

<svelte:window bind:scrollY={y} />
