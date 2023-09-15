<script >
  export default {
    data(){
      return{
        burgerStatus: false,
        openMenu: false,
      }
    }
  }
</script>

<template>
  <div >
    <div class="Burger_wrapper" >
      <div class="menu-wrapper" @click.prevent="openMenu = !openMenu" :class="{ active: openMenu }">
        <div class="menu-bar one"></div>
        <div class="menu-bar two"></div>
      </div>
      <div v-show="openMenu" class="rout_list">
        <nav class="menu">
          <a @click="openMenu = !openMenu" href="/#COURSE" style="animation-delay: 0.1s">Курсы</a>
          <a @click="openMenu = !openMenu" href="/#COMMENTS" style="animation-delay: 0.2s">Отзывы</a>
          <router-link @click="openMenu = !openMenu" to="/teachers" style="animation-delay: 0.3s">Преподаватели</router-link>
          <a @click="openMenu = !openMenu" href="" style="animation-delay: 0.4s">Партнеры</a>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .Burger_wrapper{
    .menu{
      //z-index: 30;
      display: flex;
      flex-direction: column;
      justify-content:center ;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100%;
      overflow-y: hidden;
      color: white;
      animation-name: appear;
      animation-iteration-count: 1;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      @keyframes appear {
        from{
          background: rgba(0, 0, 0, 0.1);
        }
        to{
          background: rgba(0, 0, 0, 0.5);
        }
      }
      a{
        display: inline-block;
        margin: 30px 0;
      }
    }
  }


  .menu-wrapper {
    z-index: 30;
    width: 40px;
    height: auto;
    cursor: pointer;
    position: relative;
  }

  .menu-bar {
    position: absolute;
    width: 100%;
    height: 4px;
    background: #000;
    left: 0%;
  }

  //.menu-wrapper:hover .menu-bar {
  //  animation-duration: 1s;
  //  animation-name: slideOut;
  //  animation-direction: alternate;
  //  animation-timing-function: ease-out;
  //  animation-iteration-count: 1;
  //}



  .one {
    top: 0px;
    animation-delay: 0.1s;
    transition: all 0.3s;
  }

  .two {
    top: 8px;
    transition: all 0.3s;
  }


  @keyframes slideOut {
    0% {
      width: 100%;
      left: 0%;
      right: auto;
    }

    50% {
      width: 0%;
      left: 0%;
      right: auto;
    }
    51% {
      width: 0%;
      right: 0%;
      left: auto;
    }

    100% {
      width: 100%;
      right: 0%;
      left: auto;
    }
  }

  .menu-wrapper:hover .menu-bar.active {
    animation:none;
  }
  .active .one{
    top: 50%;
    left: 0%;
    transform: rotate(45deg);
  }
  .active .two{
    top: 50%;
    left: 0%;
    transform: rotate(-45deg);
  }
</style>