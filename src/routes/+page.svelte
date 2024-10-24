<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import '../app.css';
	export let data;
	console.log(data);

	// Client API:
	const { form, errors, constraints, message, enhance } = superForm(data.form);
</script>

<div class="w-screen h-screen flex justify-center items-center">
	<form use:enhance method="POST" class="flex flex-col gap-3">
		<div class="flex justify-between  gap-2">
			<label for="name">Name</label>
			<input
				type="text"
				name="name"
				aria-invalid={$errors.name ? 'true' : undefined}
				bind:value={$form.name}
				class="border-black border-2 rounded-md"
			/>
		</div>
		{#if $errors.name}<span class="text-red-300">{$errors.name}</span>{/if}
		<div class="flex justify-between gap-2">
			<label for="email">E-mail</label>
			<input type="email" name="email" bind:value={$form.email} class="border-black border-2 rounded-md" />
		</div>
		{#if $errors.email}<span class="text-red-300">{$errors.email}</span>{/if}
		<div class="flex justify-between gap-2">
			<label for="password">Enter password: </label>
			<input
				type="password"
				name="password"
				bind:value={$form.password}
				class="border-black border-2 rounded-md"
			/>
		</div>
		{#if $errors.password}<span class="text-red-300">{$errors.password}</span>{/if}

		<button class="w-full bg-black/90 rounded-md text-white h-8">Submit</button>
		{#if $message}<h3>{$message}</h3>{/if}
	</form>
</div>
