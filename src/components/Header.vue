<template>
  <div class="header">
    <div class="content-center">
      <router-link to="/">
        <div class="logo">
          SITE
        </div>
      </router-link>

      <div class="routes">
        <svg
          @click="$store.state.sideBar = !$store.state.sideBar"
          :class="'burger' + ($store.state.sideBar ? ' active' : '')"
          viewBox="0 0 100 100" width="45"
        >
          <path
            class="line top"
            d="m 70,33 h -40 c -6.5909,0 -7.763966,-4.501509 -7.763966,-7.511428 0,-4.721448 3.376452,-9.583771 13.876919,-9.583771 14.786182,0 11.409257,14.896182 9.596449,21.970818 -1.812808,7.074636 -15.709402,12.124381 -15.709402,12.124381"
          />
          <path
            class="line middle"
            d="m 30,50 h 40"
          />
          <path
            class="line bottom"
            d="m 70,67 h -40 c -6.5909,0 -7.763966,4.501509 -7.763966,7.511428 0,4.721448 3.376452,9.583771 13.876919,9.583771 14.786182,0 11.409257,-14.896182 9.596449,-21.970818 -1.812808,-7.074636 -15.709402,-12.124381 -15.709402,-12.124381"
          />
        </svg>
        <span>
          <router-link to="/">Home</router-link>
        </span>
        <span>
          <router-link to="/portfolio">Portfolio</router-link>
        </span>
        <span>
          <router-link to="/contact">Contact</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .header {
    height: 80px;
    line-height: 80px;
  }

  .logo {
    display: inline-block;
    font-size: 30px;
    color: #3e3e3e;
  }

  .routes {
    float: right;
  }

  .routes > span {
    margin-left: 10px;
  }

  .routes > span > a {
    padding: 3px;
    margin-left: 5px;
    color: black;
    transition: .3s;
  }

  .routes > span > a:hover {
    box-shadow: inset 0 -2px 0 0 rgba(54,99,86,1);
  }

  .burger {
    display: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    position: relative;
    left: 10px;
  }

  .line {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: rgba(54,99,86,1);
    stroke-width: 5.5;
    stroke-linecap: round;
  }

  .burger .top {
    stroke-dasharray: 40 121;
  }
  .burger .bottom {
    stroke-dasharray: 40 121;
  }
  .burger.active .top {
    stroke-dashoffset: -102px;
  }
  .burger.active .bottom {
    stroke-dashoffset: -102px;
  }

  @media (max-width: 1024px) {
    .burger {
      display: inline-block;
    }

    .routes > span {
      display: none;
    }
  }
</style>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>
