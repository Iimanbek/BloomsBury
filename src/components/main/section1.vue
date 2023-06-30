<template>
    <div>
        <div class="first_lesen">
            <div class=" container">
                <h2>Запишитесь на бесплатный урок!</h2>
                <p>Урок немецкого 120 мин, тестирование и рекомендации по обучению</p>
                <div>
                    <a href="#">Записаться</a>
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
.first_lesen {
    background: #AE6200;
    color: white;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    padding: 30px;

    h2 {
        margin: 0;
        font-size: 36px;
        font-weight: 500;
    }

    p {
        font-size: 24px;
        margin: 20px 0;
    }

    div {
        a {
            display: inline-block;
            font-size: 22px;
            font-family: 'Open Sans', sans-serif;
            background: var(--german-yellow);
            color: white;
            border: 3px solid white;
            padding: 10px 125px;
            border-radius: 10px;
            transition: 1s;

            &:hover {
                background: white;
                color: var(--german-yellow);
                scale: 1.1;
            }

            &:active {
                background: #000;
                color: white;
            }
        }
    }
}
</style>