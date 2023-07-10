<template>
    <div class="container" id="COMMENTS">
        <section class="section_4">
            <h2>Все отзывы от наших дорогих учеников</h2>
            <div class="slides">
                <div class="slider_box" id="slide-1">
                    <img src="../../assets/images/comment1.jpeg" alt="">
                </div>
                <div class="slider_box" id="slide-2">
                    <img src="../../assets/images/comment2.jpeg" alt="">
                </div>
                <div class="slider_box" id="slide-3">
                    <img src="../../assets/images/comment3.jpeg" alt="">
                </div>
                <div class="slider_box" id="slide-4">
                    <img src="../../assets/images/comment4.jpeg" alt="">
                </div>
                <div class="slider_box" id="slide-5">
                    <img src="../../assets/images/comment5.jpeg" alt="">
                </div>
                <div class="slider_box" id="slide-5">
                    <img src="../../assets/images/comment6.jpeg" alt="">
                </div>
            </div>
        </section>

    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.slider {
    width: 300px;
    text-align: center;
    overflow: hidden;
}

.slides {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
}

.slides::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

.slides::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 10px;
}

.slides::-webkit-scrollbar-track {
    background: transparent;
}

.slides>div {
    scroll-snap-align: start;
    flex-shrink: 0;
    width: 300px;
    height: 300px;
    margin-right: 50px;
    border-radius: 10px;
    background: rgba(128, 128, 128, 0.118);
    transform-origin: center center;
    transform: scale(1);
    transition: transform 0.5s;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.author-info {
    background: rgba(0, 0, 0, 0.75);
    color: white;
    padding: 0.75rem;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    margin: 0;
}

.author-info a {
    color: white;
}

.slider>a {
    display: inline-flex;
    width: 1.5rem;
    height: 1.5rem;
    background: rgba(255, 255, 255, 1);
    text-decoration: none;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 0 0.5rem 0;
    position: relative;
}

.slider>a:active {
    top: 1px;
}

.slider>a:focus {
    background: #000;
}

.slider_box {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0 10px;
}

.slider_box {
    padding: 20px;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
}

.section_4 {
    padding: 100px 0 50px 0;

    h2 {
        text-align: center;
        font-size: 46px;
        color: var(--german-black);
        font-family: 'Open sans', sans-serif;
        margin-bottom: 40px;
    }
}
</style>