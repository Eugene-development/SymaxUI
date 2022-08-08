<script>
	import { image, currentImage, formConsultation } from '../../../store/stores.js';
	import { useInvert } from '../../../functions/invert/index.js';

	const { invertToFalse, invert } = useInvert;

	const closeImage = () => image.update(invertToFalse);
	const changeVisibleFormConsultation = () => formConsultation.update(invert);
</script>

{#if $image}
	<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<!--
          Background backdrop, show/hide based on modal state.

          Entering: "ease-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100"
            To: "opacity-0"
        -->
		<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

		<div class="fixed z-10 inset-0 overflow-y-auto">
			<div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
				<!--
                  Modal panel, show/hide based on modal state.

                  Entering: "ease-out duration-300"
                    From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    To: "opacity-100 translate-y-0 sm:scale-100"
                  Leaving: "ease-in duration-200"
                    From: "opacity-100 translate-y-0 sm:scale-100"
                    To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                -->
				<div
					class="relative bg-gray-50 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full"
				>
					<div class="bg-gray-50 px-2 pt-5 pb-4 sm:p-3 sm:pb-4">
						<div class="sm:flex sm:items-start">
							<img class="mx-auto w-full rounded-md " src={$currentImage} alt="" />
						</div>
					</div>
					<div class="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
						<button
							type="button"
							on:click|preventDefault={changeVisibleFormConsultation}
							on:click|preventDefault={closeImage}
							class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
							>Запись на замер</button
						>
						<button
							type="button"
							class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
							on:click|preventDefault={closeImage}>Закрыть</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
