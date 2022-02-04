<script>
	export let task = { name: '', checked: false, status: 1 };

</script>

<main>
	<li class="m-2 p-4 rounded cursor-pointer bg-blue-200 hover:bg-blue-500 hover:text-white {task.checked ? 'line-through' : ''}" on:click="{checkTask(task)}">{ task.status === '3' ? 'Urgent' : (task.status === '2' ? 'Important' : 'Normal') } : { task.name }</li>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	p {
		color: blue;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>