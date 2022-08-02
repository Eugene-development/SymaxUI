<script>
    import { Modal_v2 } from '../../../lib/ui/broker.js';
    import {formConsultation} from "../../../lib/store/stores.js";
    import {useInvert} from "../../../lib/functions/invert/index.js";
    const { invertToTrue } = useInvert;
    const showModal = () => formConsultation.update(invertToTrue);
</script>

<button on:click={showModal}>Показать</button>
<Modal_v2 />
