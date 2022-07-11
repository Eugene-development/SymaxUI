<script>
	import { visibleBanner_01 } from '../../../store/stores.js';
	import { useInvert } from '../../../functions/broker';
	const { invertToFalse } = useInvert;
	const changeVisibleBanner_01 = () => visibleBanner_01.update(invertToFalse);
</script>

{#if $visibleBanner_01}
	<div class="relative bg-black">
		<div class="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-8">
			<div class="pr-16 sm:text-center sm:px-16">
				<p class="font-medium text-white antialiased">
					<span class="md:hidden"> Снижены цены на древесину! </span>
					<span class="hidden md:inline"> Хорошие новости! Снижены цены на древесину. </span>
					<span class="block sm:ml-2 sm:inline-block">
						<a href="/category/pilomaterial" class="text-white font-bold underline">
							Подробнее <span aria-hidden="true">&rarr;</span></a
						>
					</span>
				</p>
			</div>
			<div
				class="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start"
			>
				<button
					type="button"
					on:click={changeVisibleBanner_01}
					class="flex p-2 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-white"
				>
					<span class="sr-only">Dismiss</span>
					<!-- Heroicon name: outline/x -->
					<svg
						class="h-4 w-4 text-white"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>
	</div>
{/if}
