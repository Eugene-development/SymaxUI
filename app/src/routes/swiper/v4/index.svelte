<script>
    import {Swiper, SwiperSlide} from "swiper/svelte";

    // Import Swiper styles
    import "swiper/css";

    import "swiper/css/effect-cards";

    import "./style.css";

    // import required modules
    import {EffectCards} from "swiper";
</script>

<Swiper
        class="mySwiper"
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
>
    <SwiperSlide><div class="text-5xl">Скидка 10 цуйуайу </div></SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    <SwiperSlide>Slide 5</SwiperSlide>
    <SwiperSlide>Slide 6</SwiperSlide>
    <SwiperSlide>Slide 7</SwiperSlide>
    <SwiperSlide>Slide 8</SwiperSlide>
    <SwiperSlide>Скидка 10 цуйуайу кай3а34м акуаа</SwiperSlide>
</Swiper>
