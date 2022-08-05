<script>
	import { Marketing_v5 } from '../../../lib/ui/broker.js';
	export let content_Marketing_v5;

	// import Swiper core and required modules
	import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/scrollbar';
</script>

<Swiper
	modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
	spaceBetween={40}
	slidesPerView={1}
	navigation
	autoplay={{ delay: 4000 }}
	scrollbar={{ draggable: true, hide: true }}
	on:slideChange={() => console.log('slide change')}
	on:swiper={(e) => console.log(e.detail[0])}
>

	<SwiperSlide><Marketing_v5 {...content_Marketing_v5} /></SwiperSlide>
	<SwiperSlide><Marketing_v5 {...content_Marketing_v5} /></SwiperSlide>
	<SwiperSlide><Marketing_v5 {...content_Marketing_v5} /></SwiperSlide>
	<SwiperSlide><Marketing_v5 {...content_Marketing_v5} /></SwiperSlide>
</Swiper>
