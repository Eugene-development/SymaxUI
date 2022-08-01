<script>
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import { EffectFade, autoplay } from 'swiper';

    import 'swiper/css';
    import 'swiper/css/effect-fade';
</script>

<Swiper modules="{[EffectFade]}" effect="fade">
    <SwiperSlide class="my-6"><img class="mx-auto w-80 h-56 rounded-md xl:w-96 xl:h-56" src="https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/3.jpg" alt="sd"></SwiperSlide>
    <SwiperSlide><img class="mx-auto w-80 h-56 rounded-md xl:w-96 xl:h-56" src="https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/5.jpg" alt="sd"></SwiperSlide>
    <SwiperSlide><img class="mx-auto w-80 h-56 rounded-md xl:w-96 xl:h-56" src="https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/6.jpg" alt="sd"></SwiperSlide>
    <SwiperSlide><img class="mx-auto w-80 h-56 rounded-md xl:w-96 xl:h-56" src="https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/7.jpg" alt="sd"></SwiperSlide>
</Swiper>
