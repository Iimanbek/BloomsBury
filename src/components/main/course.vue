<template>
    <div class="course_main_wrap" id="COURSE">
        <div class="container ">
            <h2 class="title_course">Выберите для себя подходящий вариант обучения </h2>
            <div class="course_wrap">
                <div class="type_course">
                    <img class="image_course" src="../../assets/images/course1.jpg" alt="images">
                    <div>
                        <h3>В группе</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae exercitationem velit magni
                            neque eius ex molestias, quibusdam pariatur animi impedit.</p>
                        <p>Стоимость: 3000сом</p>
                        <p>Количество занятий: 3 раза в неделю</p>
                        <p>Продолжительность: 2 часа</p>
                        <a href="https://api.whatsapp.com/send?phone=996500287385" class="consult">Получить консультацию</a>
                    </div>
                </div>
                <div class="type_course">
                    <img class="image_course" src="../../assets/images/course2.jpg" alt="images">
                    <div>
                        <h3>Индивидуальные занятия</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae exercitationem velit magni
                            neque eius ex molestias, quibusdam pariatur animi impedit.</p>
                        <p>Стоимость: от 4300 - 4800 сомов</p>
                        <p>Количество занятий: 12</p>
                        <p>Продолжительность: 2 часа</p>
                        <a href="https://api.whatsapp.com/send?phone=996500287385" class="consult">Получить консультацию</a>
                    </div>
                </div>
                <div class="type_course">
                    <img class="image_course" src="../../assets/images/course3.jpg" alt="images">
                    <div>
                        <h3>Интенсивные занятия</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae exercitationem velit magni
                            neque eius ex molestias, quibusdam pariatur animi impedit.</p>
                        <p>Стоимость: 3500сом</p>
                        <p>Количество занятий: 5 раз в неделю</p>
                        <p>Продолжительность:1 час 20 мин</p>
                        <a href="https://api.whatsapp.com/send?phone=996500287385" class="consult">Получить консультацию</a>
                    </div>
                </div>
                <div class="type_course">
                <img class="image_course" src="../../assets/images/course1.jpg" alt="images">
                <div>
                  <h3>Онлайн занятия</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae exercitationem velit magni
                    neque eius ex molestias, quibusdam pariatur animi impedit.</p>
                  <p>Стоимость: 3500сом</p>
                  <p>Количество занятий: 5 раз в неделю</p>
                  <p>Продолжительность:1 час 20 мин</p>
                  <a href="https://api.whatsapp.com/send?phone=996500287385" class="consult">Получить консультацию</a>
                </div>
              </div>
            </div>
        </div>
   </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.course_wrap {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 100px 0;
    gap: 30px;
    @media screen and (max-width: 1400px) {
      justify-content: center;
    }
    .type_course {
        font-family: 'Open Sans', sans-serif;
        width: 325px;
        height:auto;
        background: rgba(256, 256, 256);
        border-radius: 10px;
      @media screen and (max-width: 1400px) {
        width: 450px;
        justify-content: center;
      }
        .image_course {
            width: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
        div {
          padding: 10px;
            h3 {
                font-size: 21px;
            }

            p {
                margin: 10px 0;
            }

            .consult {
                font-size: 18px;
                font-family: 'Open Sans', sans-serif;
                background: var(--german-red);
                color: white;
                border: 1px solid white;
                padding: 10px 15px;
                border-radius: 10px;
                transition: 1s;
                display: inline-block;
                text-align: center;
                width: 100%;
                margin: 0 auto auto;

                &:hover {
                    background: var(--german-yellow);
                    color: var(--german-black);
                    // scale: 1.1;
                }

                &:active {
                    background: #000;
                    color: white;
                }
            }
        }
    }
}

.course_main_wrap {
    margin-top: 20px;
    background: var(--german-black);
    padding: 100px 0 50px 0;
}

.title_course {
    text-align: center;
    color: white;
    font-size: 45px;
    font-family: 'Open Sans', sans-serif;
}

</style>