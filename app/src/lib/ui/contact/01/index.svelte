<script>
	import { Form_v2 } from '../../broker.js';

	export let address;
	export let phones;
	export let emails;
	export let contentForm_v2;
</script>


<div class="bg-slate-100">
	<div class="w-full mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
		<div class="relative bg-white shadow-xl">
			<h2 class="sr-only">Контакты</h2>

			<div class="grid grid-cols-1 lg:grid-cols-3">
				<!-- Contact information -->
				<div class="relative overflow-hidden py-10 px-6 bg-cyan-900 sm:px-10 xl:p-12">
					<div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
						<svg
							class="absolute inset-0 w-full h-full"
							width="343"
							height="388"
							viewBox="0 0 343 388"
							fill="none"
							preserveAspectRatio="xMidYMid slice"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
								fill="url(#linear1)"
								fill-opacity=".1"
							/>
							<defs>
								<linearGradient
									id="linear1"
									x1="254.553"
									y1="107.554"
									x2="961.66"
									y2="814.66"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#fff" />
									<stop offset="1" stop-color="#fff" stop-opacity="0" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div
						class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
						aria-hidden="true"
					>
						<svg
							class="absolute inset-0 w-full h-full"
							width="359"
							height="339"
							viewBox="0 0 359 339"
							fill="none"
							preserveAspectRatio="xMidYMid slice"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
								fill="url(#linear2)"
								fill-opacity=".1"
							/>
							<defs>
								<linearGradient
									id="linear2"
									x1="192.553"
									y1="28.553"
									x2="899.66"
									y2="735.66"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#fff" />
									<stop offset="1" stop-color="#fff" stop-opacity="0" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div
						class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
						aria-hidden="true"
					>
						<svg
							class="absolute inset-0 w-full h-full"
							width="160"
							height="678"
							viewBox="0 0 160 678"
							fill="none"
							preserveAspectRatio="xMidYMid slice"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
								fill="url(#linear3)"
								fill-opacity=".1"
							/>
							<defs>
								<linearGradient
									id="linear3"
									x1="192.553"
									y1="325.553"
									x2="899.66"
									y2="1032.66"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#fff" />
									<stop offset="1" stop-color="#fff" stop-opacity="0" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<h3 class="text-xl font-medium text-white">Контактная информация:</h3>
					<p class="mt-6 text-base text-cyan-50 max-w-3xl">{address}</p>
					<dl class="mt-8 space-y-6">
						<dt><span class="sr-only">Телефон</span></dt>
						{#each phones as { phone, name }}
							<dd class="flex text-base text-cyan-50">
								<!-- Heroicon name: outline/phone -->
								<svg
									class="flex-shrink-0 w-6 h-6 text-cyan-100"
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
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
								<span class="ml-3">{phone} ({name}) </span>
							</dd>
						{/each}
						<dt><span class="sr-only">Почта</span></dt>
						{#each emails as { email }}
							<dd class="flex text-base text-cyan-50">
								<!-- Heroicon name: outline/mail -->
								<svg
									class="flex-shrink-0 w-6 h-6 text-cyan-100"
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
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<span class="ml-3">{email}</span>
							</dd>
						{/each}

						<dt><span class="sr-only">Почта</span></dt>
						<!--                        <dd class="flex text-base text-cyan-50">-->
						<!--                            <a class="text-base text-cyan-50 flex" href="https://vk.com/orbita_stroy"-->
						<!--                               target="_blank">-->
						<!--                                <svg class="mr-3 lex-shrink-0 w-6 h-6 text-cyan-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
						<!--                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />-->
						<!--                                </svg>-->
						<!--                                vk.com/orbita_stroy-->
						<!--                            </a>-->
						<!--                        </dd>-->
					</dl>
				</div>

				<!-- Contact form -->
				<Form_v2 {...contentForm_v2}/>
			</div>
		</div>
	</div>
</div>
