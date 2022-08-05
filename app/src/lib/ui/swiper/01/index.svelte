<script>
    import { Marketing_v5 } from "../../broker.js";
    export let content_Swiper_v1;

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
        autoplay={{ delay: 4000 }}
        scrollbar={{ draggable: true, hide: true }}
        on:slideChange={() => console.log('slide change')}
        on:swiper={(e) => console.log(e.detail[0])}
>
    {#each content_Swiper_v1 as {title_Marketing_v5, text_Marketing_v5, img_Marketing_v5}}
      <SwiperSlide>
          <Marketing_v5 {title_Marketing_v5} {text_Marketing_v5} {img_Marketing_v5} />
      </SwiperSlide>
    {/each}
</Swiper>
