<template>
    <div class="container">
        <div class="main_wrapper">
            <img class="bg_image" width="1000px" src="../../assets/images/header_bg.jpg " alt="">
            <div class="header_titles">
                <div class="inner_header">
                    <h1>Курсы немецкого языка и образование в Германии</h1>
                    <p>Мы открываем дорогу в лучшее будущее!
                    </p>
                    <ul>
                        <div class="li_wrap">
                            <li>Доходимость</li>
                            <img src="../../assets/images/result.svg" alt="">
                        </div>
                        <div class="li_wrap">
                            <li>Количество положительных отзывов</li>
                            <img src="../../assets/images/recycle.svg" alt="">
                        </div>
                        <div class="li_wrap">
                            <li>Количество кейсов с результатов</li>
                            <img src="../../assets/images/like.svg" alt="">
                        </div>
                    </ul>
                </div>
            </div>
            <!-- <div class="image_wrap">
            </div> -->
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.bg_image {
    position: absolute;
    z-index: -5;
    width: 100%;
    object-fit: cover;
    height: 93%;
    left: 0;
}


.main_wrapper {
    height: 93vh;

    .header_titles {
        width: 40%;
        height: 100vh;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .inner_header {
            background: rgba(0, 0, 0, 0.5);
            padding: 30px;
            border-radius: 10px;
            color: white;
            animation: moveInRight 2s 0.5s 1 linear forwards;

            h1 {
                color: var(--german-yellow);
                font-family: 'Open Sans', sans-serif;
              @media screen and (max-width: 1300px){
                font-size: 30px;
              }
            }

            @keyframes moveInRight {
                0% {
                    opacity: 0;
                    transform: translateX(300px);
                }

                80% {
                    transform: translateX(-10px);
                }

                100% {
                    opacity: 1;
                    transform: translate(40px);
                }
            }

            p {
                font-size: 22px;
                font-weight: 600;
                font-family: 'Open Sans', sans-serif;
                @media screen and (max-width: 1300px){
                  font-size: 20px;
                }
            }

            ul {
                display: flex;
                flex-direction: column;
              margin-top: 20px;

            }

            .li_wrap {
                display: flex;
                justify-content: space-between;

                img {
                    width: 35px;
                }

                li {
                    font-size: 20px;
                    line-height: 60px;
                    font-weight: 600;
                  @media screen and (max-width: 1300px){
                    font-size: 16px;
                    line-height: 30px;
                    padding: 10px;
                  }
                }
            }
        }
    }
}
</style>