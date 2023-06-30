<template>
    <div class="boxtop">
        <nav class="container" :class="{ scrollNAv: this.heightSCroll > 90 }">
            <div class="logo_wrapper" @click="this.$router.push('/')">
                <img src="../../assets/images/german_flag.jpeg" alt="logo of Bloomsbury as flag of German">
                <h2 class="title_nav">BLOOMSBURY</h2>
            </div>
            <div class="navigation_link_wrapper">
                <a href="">О нас</a>
                <a href="">Курсы</a>
                <a href="">Отзывы</a>
                <a href="">Преподаватели</a>
                <a href="">Партнеры</a>
            </div>
            <div class="link_btn">
                <a href="">Позвонить</a>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    data() {
        return {
            heightSCroll: 0
        }
    },
    methods: {
        navScrol() {
            window.addEventListener('scroll', () => {
                this.heightSCroll = window.scrollY
            })
            let box = document.querySelector('.boxtop')
            box.getBoundingClientRect().top
        },
    },
    mounted() {
        this.navScrol()
    }
}
</script>
<style lang="scss">
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 20;
    padding: 0 104px;
    position: fixed;
    width: 100%;
    transition: all 700ms;

    .logo_wrapper {
        display: flex;
        cursor: pointer;

        img {
            object-fit: contain;
            width: 64px;
        }

        .title_nav {
            position: relative;
            left: -10px;
            font-family: 'Open Sans', sans-serif;
            font-weight: 900;
            font-size: 24px;
        }
    }

    .link_btn {
        font-size: 18px;
        font-family: 'Open Sans', sans-serif;
        background: var(--german-yellow);
        color: white;
        border: 3px solid white;
        padding: 10px 15px;
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

    .navigation_link_wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 40%;
        font-size: 18px;
        font-family: 'Open Sans', sans-serif;
    }
}

.boxtop {
    height: 70px;
    display: flex;
    justify-content: center;
}

.scrollNAv {
    background-color: var(--german-yellow);
    border-radius: 150px;
    margin-top: 10px;
    box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.25);
}
</style>