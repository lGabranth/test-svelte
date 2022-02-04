<script>
	export let tasks = [];
	let new_task = { name: '', checked: false, status: 1 };

	function checkTask (obj) {
      obj.checked = !obj.checked;
      localStorage.setItem('tab_task', JSON.stringify(tasks));
    }

	function addTaskKeyUp(e) {
		if (e.charCode === 13) addTask()
	}

	function addTask() {
		if (new_task.name !== '') {
			tasks.push(JSON.parse(JSON.stringify(new_task)));
			tasks = tasks;
			localStorage.setItem('tab_task', JSON.stringify(tasks));
			new_task = { name: '', checked: false, status: 1 };
		}
	}

	function emptyTasks() {
		tasks = [];
      	localStorage.clear();
	}

	$: numberOfTask = tasks.length;
</script>

<main>
	<div id="app" class="container mx-auto p-6 flex flex-col">
	  <div class="flex flex-col items-center bg-gray-100 p-8 rounded-xl">
		<h1 class="text-3xl font-black mb-6">TodoList <small>({ numberOfTask })</small></h1>
<!--		<button class="rounded-lg bg-blue-600 text-white ml-2 p-2 hover:bg-red-500" @click="sort_priority = !sort_priority">Sort by priority</button>-->
		<ul class="min-w-full">
		  <!-- À vous de jouer ici -->
			{#each tasks as task, i}
		  		<li class="m-2 p-4 rounded cursor-pointer bg-blue-200 hover:bg-blue-500 hover:text-white {task.checked ? 'line-through' : ''}" on:click="{checkTask(task)}">{ task.status === '3' ? 'Urgent' : (task.status === '2' ? 'Important' : 'Normal') } : { task.name }</li>
			{/each}
		</ul>
	  </div>
	  <div class="mt-4 flex flex-row ">
		  <input type="text" class="flex-grow bg-gray-100 p-2 rounded-lg " placeholder="Add a task" bind:value="{new_task.name}" on:keyup="{addTaskKeyUp}">
		  <!-- Quand vous en serez à l'étape sur la gestion de la priorité, décommentez la ligne suivante -->
		  <select class="bg-gray-100 p-2 rounded-lg ml-2" bind:value="{new_task.status}">
			<option value="1">Normal 🖊</option>
			<option value="2">Important 🥊</option>
			<option value="3">Urgent 🚨</option>
		  </select>
		  <button class="rounded-lg bg-blue-600 text-white ml-2 p-2 hover:bg-blue-500" on:click="{addTask}">Add task</button>
		  <button class="rounded-lg bg-red-600 text-white ml-2 p-2 hover:bg-red-500" on:click="{emptyTasks}">Clear tasks</button>
	  </div>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>