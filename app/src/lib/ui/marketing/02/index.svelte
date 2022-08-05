<script>
	export let title_Marketing_v2;
	export let description_Marketing_v2;
	export let img_Marketing_v2;
	export let link_Marketing_v2;
	export let alt_Marketing_v2;
</script>

<div class="bg-white">
	<div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
		<div class="bg-gray-800 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
			<div class="pt-10 pb-12 px-3 sm:pt-16 sm:px-8 lg:py-16 lg:pr-0 xl:py-20 xl:px-10">
				<div class="lg:self-center">
					<h2
						class=" mx-auto text-4xl tracking-tight font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-sky-200 to-blue-200 "
					>
						<span class="block">{title_Marketing_v2}</span>
						<!--                        <span class="block">Мы готовы к партнёрству!</span>-->
					</h2>
					<p class="mt-4 text-lg leading-6 text-sky-100">{description_Marketing_v2}</p>
					<a
						href="/{link_Marketing_v2}"
						class="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-slate-800 hover:bg-indigo-50"
						>Подробнее</a
					>
				</div>
			</div>
			<div class="-mt-16 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
				<img
					class="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
					src={img_Marketing_v2}
					alt={alt_Marketing_v2}
				/>
			</div>
		</div>
	</div>
</div>
