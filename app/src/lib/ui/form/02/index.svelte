<script>
	import { form_02_sent } from '../../../store/stores.js';
	import { useInvert } from '../../../functions/broker';
	import axios from "axios";

	let name = '';
	let position = '';
	let email = '';
	let phone = '';
	let comment = '';


	export let apiMail
	export let apiToken
	export let header

	const url = `/sendOffer`;
	const apiData = {
		baseURL: `${apiMail}`,
		headers: {
			Authorization: `Bearer ${apiToken}`
		}
	};
	async function sendOffer() {
		try {
			const payload = { name, position, email, phone, comment };
			await axios.post(url, payload, apiData);
			sendForm_02();
		} catch (error) {
			console.error(error);
		}
	}
	const { invertToTrue } = useInvert;
	const sendForm_02 = () => {
		try {
			form_02_sent.update(invertToTrue);
		} catch (error) {
			console.error(error);
		}
	};
</script>

<div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
	<h3 class="text-lg font-medium text-gray-900 border-b pb-2">
		{header}
	</h3>
	<form on:submit|preventDefault|once={sendOffer} class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
		<div>
			<label for="name" class="block text-sm font-medium text-gray-900">Имя</label>
			<div class="mt-1">
				<input
						bind:value={name}
					type="text"
					name="name"
					id="name"
					autocomplete="name"
						required
					class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md border border-gray-300"
				/>
			</div>
		</div>
		<div>
			<label for="position" class="block text-sm font-medium text-gray-900">Должность</label>
			<div class="mt-1">
				<input
						bind:value={position}
					type="text"
					name="position"
					id="position"
						required
					autocomplete="position"
					class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md border border-gray-300"
				/>
			</div>
		</div>
		<div>
			<label for="email" class="block text-sm font-medium text-gray-900">Почта</label>
			<div class="mt-1">
				<input
						bind:value={email}
					id="email"
						required
					name="email"
					type="email"
					autocomplete="email"
					class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md border border-gray-300"
				/>
			</div>
		</div>
		<div>
			<div class="flex justify-between">
				<label for="phone" class="block text-sm font-medium text-gray-900">Телефон</label>
			</div>
			<div class="mt-1">
				<input
						bind:value={phone}
					type="text"
					name="phone"
					id="phone"
						required
					autocomplete="tel"
					class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md border border-gray-300"
					aria-describedby="phone-optional"
				/>
			</div>
		</div>
		<div class="sm:col-span-2">
			<div class="flex justify-between">
				<label for="comment" class="block text-sm font-medium text-gray-900">Комментарий</label>
				<span id="comment-max" class="text-sm text-gray-500">Максимум 500 символов</span>
			</div>
			<div class="mt-1">
				<textarea
						bind:value={comment}
					id="comment"
						required
					name="comment"
					rows="4"
					class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cyan-500 focus:border-cyan-500 border border-gray-300 rounded-md"
					aria-describedby="comment-max"></textarea>
			</div>
		</div>
		<!--                        <div class="sm:col-span-2">-->
		<!--                            <div class="flex justify-between">-->
		<!--                                <label for="file-upload" class="block text-sm font-medium text-gray-900">Загрузить файл</label>-->
		<!--                            </div>-->
		<!--                            <div class=" mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">-->
		<!--                                <div class="space-y-1 text-center">-->
		<!--                                    <svg class="mx-auto h-12 w-48 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">-->
		<!--                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />-->
		<!--                                    </svg>-->
		<!--                                    <div class="flex text-sm text-gray-600">-->
		<!--                                        <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-red-800 hover:text-cyan-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500">-->
		<!--                                            <span>Загрузите файл</span>-->
		<!--                                            <input id="file-upload" name="file-upload" type="file" class="sr-only">-->
		<!--                                        </label>-->
		<!--                                        <p class="pl-1">или перетяните его в эту область</p>-->
		<!--                                    </div>-->
		<!--                                    <p class="text-xs text-gray-500">-->
		<!--                                        PNG, JPG, GIF up to 10MB-->
		<!--                                    </p>-->
		<!--                                </div>-->
		<!--                            </div>-->

		<!--                        </div>-->

		<div class="sm:col-span-2 sm:flex sm:justify-end">

			{#if $form_02_sent}
				<span
						class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-800 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:w-auto"
				>
					Отправлено
				</span>
			{:else }
				<button
						type="submit"
						class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-800 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:w-auto"
				>
					Отправить
				</button>
			{/if}
		</div>
	</form>
</div>
