<script>
	import { form_01_sent } from '../../../store/stores.js';
	import { useInvert } from '../../../functions/broker';
	import axios from "axios";



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
			sendForm_01();
		} catch (error) {
			console.error(error);
		}
	}

	const { invertToTrue } = useInvert;
	const sendForm_01 = () => {
		try {
			form_01_sent.update(invertToTrue);
		} catch (error) {
			console.error(error);
		}
	};


	export let header;
	export let subheader;
	export let nameForm;
	export let phoneForm;
	export let addressForm;
	export let timeForm;
</script>

<div
	class="mt-16 sm:mt-24 lg:mt-4 lg:col-span-6 sm:transition sm:ease-in-out sm:delay-100 sm:hover:scale-110 sm:duration-500"
>
	<div class="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
		<div class="px-4 py-8 sm:px-10">
			<div>
				<p class="text-lg font-bold text-gray-700 text-center">
					{header}
				</p>
			</div>

			<div class="mt-6 relative">
				<div class="absolute inset-0 flex items-center" aria-hidden="true">
					<div class="w-full border-t border-gray-300"></div>
				</div>
				<div class="relative flex justify-center text-sm">
					<span class="px-2 bg-white text-gray-500 "> {subheader} </span>
				</div>
			</div>

			<div class="mt-6">
				<form on:submit|preventDefault|once={sendConsultation} class="space-y-6">

					{#if (nameForm)}
						<div>
							<label for="name" class="sr-only">{nameForm}</label>
							<input
									bind:value={name}
									type="text"
									name="name"
									id="name"
									autocomplete="name"
									placeholder="{nameForm}"
									required
									class="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
							/>
						</div>
					{/if}
					{#if (phoneForm)}
						<div>
							<label for="phone" class="sr-only">{phoneForm}</label>
							<input
									bind:value={phone}
									type="text"
									name="phone"
									id="phone"
									autocomplete="phone"
									placeholder="{phoneForm}"
									required
									class="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
							/>
						</div>
					{/if}
					{#if (addressForm)}
						<div>
							<label for="address" class="sr-only">{addressForm}</label>
							<input
									bind:value={address}
									type="text"
									name="address"
									id="address"
									autocomplete="address"
									placeholder="{addressForm}"
									required
									class="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
							/>
						</div>
					{/if}
					{#if (timeForm)}
						<div>
							<label for="time" class="sr-only">{timeForm}</label>
							<input
									bind:value={time}
									type="text"
									name="time"
									id="time"
									autocomplete="time"
									placeholder="{timeForm}"
									required
									class="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
							/>
						</div>
					{/if}


					<div>
						{#if $form_01_sent}
							<span
									class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-300 hover:from-green-200 via-cyan-600 hover:via-cyan-700 to-green-300 hover:to-green-200 "
							>Отправлено</span
							>
						{:else}
							<button
									type="submit"
								class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-300 hover:from-green-200 via-cyan-600 hover:via-cyan-700 to-green-300 hover:to-green-200 "
								>Отправить</button
							>
						{/if}
					</div>
					<!--                                        <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">-->
					<!--                                            Save Changes-->
					<!--                                        </button>-->
				</form>
			</div>
		</div>
		<div class="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
			<p class="text-xs leading-5 text-gray-500 text-center">
				После отправки заявки с вами свяжется менеджер <strong>Евгений</strong> для уточнения нюансов
			</p>
		</div>
	</div>
</div>
