<script>
	import { formConsultation } from '../../../store/stores.js';
	import axios from 'axios';
	import { useInvert } from '../../../functions/invert/index.js';
	// import ElementTransitions from "$lib/ElementTransitions/index.svelte";

	const { invert } = useInvert;

	const changeVisibleFormConsultation = () => formConsultation.update(invert);

	let name = '';
	let phone = '';
	let address = '';
	let time = '';

	export let apiMail
	export let apiToken

	const url = `/sendConsultation`;
	const apiData = {
		baseURL: `${apiMail}`,
		headers: {
			Authorization: `Bearer ${apiToken}`
		}
	};
	async function sendConsultation() {
		try {
			const payload = { name, phone, address, time };
			await axios.post(url, payload, apiData);
			changeVisibleFormConsultation();
		} catch (error) {
			console.error(error);
		}
	}

	export let avatar;
	export let nameManager;
	export let logo;
	export let slogan;

</script>

{#if $formConsultation}
	<!--    <ElementTransitions>-->
	<div
		class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20"
		role="dialog"
		aria-modal="true"
	>
		<!--
          Background overlay, show/hide based on modal state.

          Entering: "ease-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100"
            To: "opacity-0"
        -->
		<div class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" aria-hidden="true"></div>

		<!--
          Command palette, show/hide based on modal state.

          Entering: "ease-out duration-300"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        -->
		<div
			class="mx-auto max-w-3xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
		>
			<div class="h-7 p-4 absolute right-0">
				<button
					on:click={changeVisibleFormConsultation}
					type="button"
					class=" text-gray-400 hover:text-gray-500"
				>
					<span class="sr-only">Close panel</span>
					<!-- Heroicon name: outline/x -->
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>

			<div class=" h-full  flex-none flex-col divide-y divide-gray-100 overflow-y-auto sm:flex">
				<div class="flex-none p-6 text-center">
					<img src={avatar} alt="" class="mx-auto h-16 w-16 rounded-full" />
					<h2 class="mt-3 font-semibold text-gray-900">{nameManager}</h2>
					<p class="text-sm leading-6 text-gray-500">Ваш персональный менеджер</p>
				</div>
				<form
					on:submit|preventDefault|once={sendConsultation}
					class="flex flex-auto flex-col justify-between p-6"
				>
					<div
						class="mb-6 relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-sky-600 focus-within:border-sky-600"
					>
						<label
							for="name"
							class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
							>Ваше имя</label
						>
						<input
							bind:value={name}
							required
							type="text"
							name="name"
							id="name"
							class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
						/>
					</div>
					<div
						class="mb-6 relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-sky-600 focus-within:border-sky-600"
					>
						<label
							for="phone"
							class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
							>Ваш телефон</label
						>
						<input
							bind:value={phone}
							required
							type="text"
							name="phone"
							id="phone"
							class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
						/>
					</div>
					<div
						class="mb-6 relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-sky-600 focus-within:border-sky-600"
					>
						<label
							for="address"
							class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
							>Адрес объекта</label
						>
						<input
							bind:value={address}
							required
							type="text"
							name="address"
							id="address"
							class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
						/>
					</div>
					<div
						class="mb-6 relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-sky-600 focus-within:border-sky-600"
					>
						<label
							for="time"
							class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
							>Удобное время замера</label
						>
						<input
							bind:value={time}
							required
							type="text"
							name="time"
							id="time"
							class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
						/>
					</div>

					<button
						type="submit"
						class="mt-6 w-full rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
						>Отправить</button
					>
				</form>
			</div>

			<!-- Empty state, show/hide based on command palette state -->
			<div class="py-8 px-6 text-center text-sm sm:px-14 bg-black border-amber-50">
				<!-- Heroicon name: outline/users -->
				<img class="h-16 w-auto mx-auto" src={logo} alt="logo" />
				<p class="mt-2 text-gray-50">{slogan}</p>
			</div>
		</div>
	</div>
	<!--    </ElementTransitions>-->
{/if}
