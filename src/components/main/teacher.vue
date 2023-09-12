<template >
    <div class="teacher_wrap">
        <div class="container">
            <div class="teacher_inner">
                <div class="media">
                    <iframe src="https://www.youtube.com/embed/kp_JolKyKpI" title="10 причин учить немецкий язык."
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
                <div class="teacher">
                    <h2>Преподаватели</h2>
                    <ul>
                        <li>
                            <p>Только 1 из 10 претендентов становится преподавателем</p>
                        </li>
                        <li>
                            <p>В школе обучают специалисты с документально подтвержденными знаниями и опытом работы
                            </p>
                        </li>
                        <li>
                            <p>У каждого из них есть наставник-методист, который помогает поддерживать высокий уровень
                                обучения</p>
                        </li>
                        <li>
                            <p>Детей и взрослых учат разные преподаватели, которые могут не только объяснить, но и
                                заинтересовать обучением</p>
                        </li>
                    </ul>
                    <router-link to="/teachers">Все учителя</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style lang="scss">
.teacher_wrap {
    background: var(--german-black);
    padding: 100px 0 50px 0;
    .teacher_inner {
        display: flex;
        justify-content: space-between;
        gap: 50px;
        .media {
            iframe {
                width: 800px;
                height: 500px;
              @media screen and (max-width: 1300px){
                width: 600px;
                height: 400px;
              }
            }
        }
        .teacher {
            font-family: 'Open sans', sans-serif;
            color: white;

            h2 {
                font-size: 64px;
              @media screen and (max-width: 1400px) {
                font-size: 45px;
              }
            }

            ul {
                margin: 0;
                padding: 0;
                li {
                    margin: 30px;
                    font-weight: 500;
                    @media screen and (max-width: 1300px){
                     margin: 15px;
                    }
                }
            }
            a {
                font-size: 22px;
                font-family: 'Open Sans', sans-serif;
                background: var(--german-red);
                color: white;
                border: 1px solid white;
                padding: 10px 0;
                border-radius: 10px;
                transition: 1s;
                display: inline-block;
                text-align: center;
                width: 90%;

                &:hover {
                    background: var(--german-yellow);
                    color: var(--german-black);
                }

                &:active {
                    background: #000;
                    color: white;
                }
            }
        }
    }
}
</style>