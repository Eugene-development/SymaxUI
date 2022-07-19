<script>
    export let title
    export let description
    export let img_1
    export let alt_1
    export let img_2
    export let alt_2
    export let benefits_1
    export let benefits_2
</script>


<div class="bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-2xl mx-auto px-4 py-12 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <!-- Details section -->
        <section aria-labelledby="details-heading">
            <div class="flex flex-col items-center text-center">
                <h2 id="details-heading" class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
                <p class="mt-3 max-w-3xl text-lg text-gray-600">{description}</p>
            </div>

            <div class="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                <div>
                    <div class="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                        <img src="{img_1}" alt="{alt_1}" class="w-full h-96 object-center object-cover">
                    </div>
                    {#each benefits_1 as {value}}
                    <p class="mt-8 text-base text-gray-500">{value}</p>
                    {/each}
                </div>
                <div>
                    <div class="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                        <img src="{img_2}" alt="{alt_2}" class="w-full h-96 object-center object-cover">
                    </div>
                    {#each benefits_2 as {value}}
                        <p class="mt-8 text-base text-gray-500">{value}</p>
                    {/each}
                </div>
            </div>
        </section>
    </div>
</div>
