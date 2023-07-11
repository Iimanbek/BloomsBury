<template>
    <div>
        <div class="first_lesen">
            <div class=" container">
                <h2>Запишитесь на бесплатный урок!</h2>
                <p>Урок немецкого 120 мин, тестирование и рекомендации по обучению</p>
                <div>
                    <a href="https://api.whatsapp.com/send?phone=996500287385">Записаться</a>
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
    background: var(--german-black);
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
            background: var(--german-red);
            color: white;
            border: 1px solid white;
            padding: 10px 125px;
            border-radius: 10px;
            transition: 1s;

            &:hover {
                background: var(--german-yellow);
                color: var(--german-black);
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