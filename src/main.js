import App from './App.svelte';

let tasks = [];
if (localStorage.getItem('tab_task')) {
	try {
		tasks = JSON.parse(localStorage.getItem('tab_task'));
	} catch (e) {
		localStorage.removeItem('tab_task');
	}
}
const app = new App({
	target: document.body,
	props: {
		tasks
	}
});

export default app;