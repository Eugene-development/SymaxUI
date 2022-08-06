<script>
    import { Marketing_v2 } from "../../broker.js";
    export let content_Swiper_v2;

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
        autoplay={{ delay: 5000 }}
        scrollbar={{ draggable: true, hide: true }}
        on:slideChange={() => console.log('slide change')}
        on:swiper={(e) => console.log(e.detail[0])}
>
    {#each content_Swiper_v2 as {...content_Swiper_v2}}
        <SwiperSlide>
            <Marketing_v2 {...content_Swiper_v2}/>
        </SwiperSlide>
    {/each}
</Swiper>
