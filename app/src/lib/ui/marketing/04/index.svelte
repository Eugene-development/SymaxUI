<script>
	import { image, currentImage } from '../../../store/stores.js';
	import { useInvert } from '../../../functions/invert/index.js';
	const { invertToTrue } = useInvert;
	const visibleImg = async (img) => {
		await currentImage.update(() => img);
		await image.update(invertToTrue);
	};
	export let mainText;
	export let dataProduct;
</script>

<div class="bg-gradient-to-b from-white to-gray-100">
	<div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-16 ">
		<div class="space-y-12">
			<div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
				<h2 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
					{mainText.titleCategory}
				</h2>
				<p class="text-xl text-gray-900">{mainText.descriptionCategory}</p>
			</div>
			<div class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
				{#each dataProduct as { name, text, img, alt }}
					<div
						class="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-8 xl:text-left shadow-2xl"
						on:click|preventDefault={visibleImg(img)}
					>
						<div class="space-y-6 xl:space-y-10">
							<img class="mx-auto w-80 h-56 rounded-md xl:w-96 xl:h-56" src={img} alt="{alt}" />
							<div class="space-y-2 xl:flex xl:items-center xl:justify-between">
								<div class="font-medium text-lg leading-6 space-y-1 divide-y divide-green-300">
									<h3 class="py-1 text-white text-2xl">{name}</h3>
									<p class="py-1 text-white text-base">{text}</p>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<!--on:click|preventDefault|once={sendToCart(id)}-->
