<script>
	import { formConsultation } from '../../../store/stores.js';
	import { useInvert } from '../../../functions/invert/index.js';
	const { invert } = useInvert;
	const changeVisibleFormConsultation = () => formConsultation.update(invert);

	export let pathImg;
	export let title;
	export let description;
</script>

<div class="relative">
	<div class="absolute inset-0">
		<img class="w-full h-full object-cover grayscale" src={pathImg} alt="фото фона" />
		<div class="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true"></div>
	</div>
	<div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-24 sm:px-6 lg:px-8">
		<h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
			{title}
		</h1>
		<p class="mt-6 text-xl text-indigo-100 max-w-3xl">{description}</p>
		<button
				on:click|preventDefault={changeVisibleFormConsultation}
			class="mt-8 px-12 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-600 bg-opacity-40 hover:bg-green-400 hover:bg-opacity-30"
		>
			Запись на замер
		</button>
	</div>
</div>
