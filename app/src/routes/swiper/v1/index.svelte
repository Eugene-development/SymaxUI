<script>
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
        autoplay={{delay:2000}}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true, hide: true }}
        on:slideChange={() => console.log('slide change')}
        on:swiper={(e) => console.log(e.detail[0])}
>
        <SwiperSlide class="my-6">
                <img class="mx-auto w-80 h-56 rounded-md xl:w-96 xl:h-56" src="https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/3.jpg" alt="sd">
                <p>123</p>
        </SwiperSlide>
        <SwiperSlide><img class="mx-auto w-80 h-56 rounded-md xl:w-96 xl:h-56" src="https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/5.jpg" alt="sd"></SwiperSlide>
        <SwiperSlide><img class="mx-auto w-80 h-56 rounded-md xl:w-96 xl:h-56" src="https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/6.jpg" alt="sd"></SwiperSlide>
        <SwiperSlide><img class="mx-auto w-80 h-56 rounded-md xl:w-96 xl:h-56" src="https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/7.jpg" alt="sd"></SwiperSlide>

</Swiper>
