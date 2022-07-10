<script>
	import { useInvert, useFunc } from '../../../functions/broker';
	import { visibleMobileMenu } from '../../../store/stores.js';
	// import {visibleMobileMenu} from "../../../../../src/store/stores.js";
	const { invert } = useInvert;
	const changeVisibleMobileMenu = () => visibleMobileMenu.update(invert);

	const { testFunction } = useFunc;
	const testFunc = () => testFunction('1234567');
	export let menu;
	export let logo;
</script>

<div class="pt-1 pb-4 relative bg-gray-800 overflow-hidden">
	<nav
		class="relative  mx-auto flex items-center justify-between px-2 sm:px-4 lg:px-6"
		aria-label="Global"
	>
		<div class="flex items-center flex-1 justify-between">
			<div class="flex mt-2 ml-2 items-center justify-between w-full md:w-auto">
				<a href="/">
					<span class="sr-only">Logo</span>
					<img class="h-8 w-auto sm:h-12" src={logo} alt="logo" />
				</a>
				<div class="mr-2 flex items-center md:hidden">
					<!--                    <button type="button" class="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white" aria-expanded="false">-->
					<button
						on:click={changeVisibleMobileMenu}
						on:click={testFunc}
						type="button"
						class="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
						aria-expanded="false"
					>
						<span class="sr-only">Open main menu</span>
						<!-- Heroicon name: outline/menu -->
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
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
			</div>
			<div class="hidden space-x-8 md:flex md:ml-10 mt-3 mr-4">
				{#each menu as { value, path }}
					<a
						href="/{path}"
						class="font-medium text-white hover:text-gray-300 transition ease-in-out delay-100 hover:scale-110 duration-500"
						>{value}</a
					>
				{/each}
			</div>
		</div>
	</nav>
</div>
