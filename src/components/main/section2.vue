<template>
    <div>
        <div class="section2_wrapper">
            <section class="container">
                <div class="on_table">
                    <h2>Осуществите свою мечту и начните говорить на немецком с нами!</h2>
                    <p>6 ПРИЧИН НАКОНЕЦ-ТО ВЫУЧИТЬ НЕМЕЦКИЙ</p>
                </div>
                <div class="table_advantages">
                    <div class="table_item">
                        <div class="svg_table">
                            <img src="../../assets/images/svg_folder/world.svg" alt="">
                        </div>
                        <div class="table_title">
                            <h3>Почувствуйте себя "своим" в Германии</h3>
                            <p>Вы сможете путешествовать, свободно общаясь с местными и не чувствуя языкового барьера</p>
                        </div>
                    </div>
                    <div class="table_item">
                        <div class="svg_table">
                            <img src="../../assets/images/svg_folder/case.svg" alt="">
                        </div>
                        <div class="table_title">
                            <h3>Найдите работу мечты зарубежом</h3>
                            <p>Вы сможете пройти собеседование и получить работу своей мечты в Германии</p>
                        </div>
                    </div>
                    <div class="table_item">
                        <div class="svg_table">
                            <img src="../../assets/images/svg_folder/univer.svg" alt="">
                        </div>
                        <div class="table_title">
                            <h3>Учитесь в ВУЗе Германии или Австрии</h3>
                            <p>Вы сможете поступить в один из немецких университетов и получить престижное европейское
                                образование</p>
                        </div>
                    </div>
                    <div class="table_item">
                        <div class="svg_table">
                            <img src="../../assets/images/svg_folder/euro.svg" alt="">
                        </div>
                        <div class="table_title">
                            <h3>Зарабатывайте больше</h3>
                            <p>Вы найдете деловых немецких партнеров, откроете свой собственный бизнес в Европе </p>
                        </div>
                    </div>
                    <div class="table_item">
                        <div class="svg_table">
                            <img src="../../assets/images/svg_folder/medal.svg" alt="">
                        </div>
                        <div class="table_title">
                            <h3>Сдайте экзамен по немецкому</h3>
                            <p>Вы сможете сдать любой экзамен по немецкому языку (напр. TestDaF или Goethe) с первого раза
                            </p>
                        </div>
                    </div>
                    <div class="table_item">
                        <div class="svg_table">
                            <img src="../../assets/images/svg_folder/chat.svg" alt="">
                        </div>
                        <div class="table_title">
                            <h3>Общайтесь с любимыми</h3>
                            <p>Сможете понимать своих немецких родственников или признаться избраннику в любви на немецком!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.section2_wrapper {
    section {
        text-align: center;

        .on_table {
            background: var(--german-yellow);
            padding: 20px 0;
            margin-top: 30px;
            margin-bottom: 30px;
            border-radius: 10px;

            h2 {
                font-size: 26px;
                font-family: 'Open Sans', sans-serif;
                color: rgb(42, 41, 41);
                margin: 10px 0;
            }

            p {
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                color: rgb(42, 41, 41);
                font-weight: 600;
            }
        }

        .table_advantages {
            display: grid;
            grid-template-columns: 33% 33% 33%;
            grid-gap: 10px;

            .table_item {
                &:nth-child(1) {}

                &:nth-child(2) {}

                &:nth-child(3) {}

                &:nth-child(4) {}

                &:nth-child(5) {}

                &:nth-child(6) {}

                background: var(--german-yellow);
                padding: 20px;
                margin: 10px;
                border-radius: 10px;
                display: flex;
                justify-content: space-around;
                align-items: center;

                .svg_table {
                    width: 44px;

                    img {
                        width: 100%;
                        object-fit: cover;
                    }
                }

                .table_title {
                    width: 80%;
                    font-family: 'Open Sans', sans-serif;
                }
            }
        }
    }
}
</style>