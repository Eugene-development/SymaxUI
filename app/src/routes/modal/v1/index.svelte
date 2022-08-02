<script>
	import { Modal_v1 } from '../../../lib/ui/broker.js';
    import {image} from "../../../lib/store/stores.js";
    import {useInvert} from "../../../lib/functions/invert/index.js";
    const { invertToTrue } = useInvert;
	const showModal = () => image.update(invertToTrue);
</script>

<button on:click={showModal}>Показать</button>
<Modal_v1 />
