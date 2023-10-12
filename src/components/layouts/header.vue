<template>
    <div class="boxtop" id="TOP">
        <nav class="container" :class="{ scrollNAv: this.heightSCroll > 90 }">
            <a href="/#TOP">
                <div class="logo_wrapper">
                    <img src="../../assets/images/german_flag.jpeg" alt="logo of Bloomsbury as flag of German">
                    <h2 class="title_nav">BLOOMSBURY</h2>
                </div>
            </a>
            <div class="navigation_link_wrapper">
                <a href="/#COURSE">Курсы</a>
                <a href="/#COMMENTS">Отзывы</a>
                <router-link to="/teachers">Преподаватели</router-link>
                <a href="">Партнеры</a>
            </div>
          <div class="burger_wrap">
            <div class="link_btn">
                <a href="tel:+996501287385">Позвонить</a>
            </div>
            <div  class="burger">
              <v-burger />
            </div>
          </div>
        </nav>
    </div>
</template>
<script>
import Burger from "@/components/main/Burger.vue";
export default {
    data() {
        return {
            heightSCroll: 0,
        }
    },
  components:{
    'v-burger': Burger
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
<style lang="scss" scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 20;
    padding: 0 104px;
    position: fixed;
    width: 100%;
    transition: all 700ms;
    @media screen and (max-width: 1100px) {
      padding: 0 44px;
    }
  .burger_wrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25%;
    .burger{
      display: none;
      @media screen and (max-width: 1100px) {
        display: block;
      }
    }
  }
    .logo_wrapper {
        display: flex;
        align-items: center;
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
        background: var(--german-red);
        color: white;
        border: 1px solid white;
        padding: 10px 15px;
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

    .navigation_link_wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 40%;
        font-size: 18px;
        font-family: 'Open Sans', sans-serif;
      @media screen and (max-width: 1100px) {
        display: none;
      }
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