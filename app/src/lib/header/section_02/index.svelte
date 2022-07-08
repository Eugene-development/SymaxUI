<script>
    import {useInvert} from "larux/broker";
    import {visibleMobileMenu} from "$store/stores";
    const { invert } = useInvert;
    const changeVisibleMobileMenu = () => visibleMobileMenu.update(invert);
    export let menu;
    export let logo;
</script>

<div class="pt-1 pb-4 relative bg-gray-800 overflow-hidden">
    <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
        <div class="flex items-center flex-1 justify-between">
            <div class="flex mt-2 items-center justify-between w-full md:w-auto">
                <a href="/">
                    <span class="sr-only">Logo</span>
                    <img class="h-8 w-auto sm:h-12" src="{logo}" alt="logo">
                </a>
                <div class="-mr-2 flex items-center md:hidden">
<!--                    <button type="button" class="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white" aria-expanded="false">-->
                    <button on:click={changeVisibleMobileMenu} type="button" class="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <!-- Heroicon name: outline/menu -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="hidden space-x-8 md:flex md:ml-10 mt-3 mr-12">
                {#each menu as {value, path}}
                    <a href="/{path}" class="font-medium text-white hover:text-gray-300 transition ease-in-out delay-100 hover:scale-110 duration-500">{value}</a>
                {/each}
            </div>
        </div>
    </nav>
</div>


{#if $visibleMobileMenu}

    <div class="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top lg:hidden bg-gray-50">
        <div class="rounded-lg shadow-md ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div class="px-5 pt-4 flex items-center justify-between">
                <a on:click={changeVisibleMobileMenu} href="/app/static">
                    <img class="h-8 w-auto" src="https://storage.yandexcloud.net/brand-logo/mos-mebel/5.png"
                         alt="main">
                </a>

                <div class="-mr-2">
                    <button on:click={changeVisibleMobileMenu} type="button"
                            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                        <span class="sr-only">Close menu</span>
                        <!-- Heroicon name: outline/x -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="pt-5 pb-2">
                <div class="px-2 space-y-1">
                    {#each menu as { value, path }, i}
                        <a class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50" href="/{path}" on:click={changeVisibleMobileMenu}>{value}</a>
                    {:else}
                        <p>Нет данных!</p>
                    {/each}
                </div>
                <!--                <div class="mt-6 px-5">-->
                <!--                    <button on:click={changeVisibleFormMeasurement} type="button"-->
                <!--                            class="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-green-500 to-cyan-600 text-white font-medium hover:from-green-600 hover:to-cyan-700">Получить консультацию</button>-->
                <!--                </div>-->
                <div class="mt-2 px-5">
                    <p class="text-center text-sm font-medium text-gray-500">Услуга бесплатная</p>
                </div>
            </div>
        </div>
    </div>
{/if}

