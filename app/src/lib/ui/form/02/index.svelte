<div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
	<h3 class="text-lg font-medium text-gray-900 border-b pb-2">
		Отправить запрос или коммерческое предложение:
	</h3>
	<form action="#" method="POST" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
		<div>
			<label for="first_name" class="block text-sm font-medium text-gray-900">Имя</label>
			<div class="mt-1">
				<input
					type="text"
					name="first_name"
					id="first_name"
					autocomplete="given-name"
					class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md border border-gray-300"
				/>
			</div>
		</div>
		<div>
			<label for="last_name" class="block text-sm font-medium text-gray-900">Должность</label>
			<div class="mt-1">
				<input
					type="text"
					name="last_name"
					id="last_name"
					autocomplete="family-name"
					class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md border border-gray-300"
				/>
			</div>
		</div>
		<div>
			<label for="email" class="block text-sm font-medium text-gray-900">Почта</label>
			<div class="mt-1">
				<input
					id="email"
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
					type="text"
					name="phone"
					id="phone"
					autocomplete="tel"
					class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cyan-500 focus:border-cyan-500 border-gray-300 rounded-md border border-gray-300"
					aria-describedby="phone-optional"
				/>
			</div>
		</div>
		<div class="sm:col-span-2">
			<div class="flex justify-between">
				<label for="message" class="block text-sm font-medium text-gray-900">Комментарий</label>
				<span id="message-max" class="text-sm text-gray-500">Максимум 500 символов</span>
			</div>
			<div class="mt-1">
				<textarea
					id="message"
					name="message"
					rows="4"
					class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-cyan-500 focus:border-cyan-500 border border-gray-300 rounded-md"
					aria-describedby="message-max"
				/>
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
			<button
				type="submit"
				class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-800 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:w-auto"
			>
				Отправить
			</button>
		</div>
	</form>
</div>
