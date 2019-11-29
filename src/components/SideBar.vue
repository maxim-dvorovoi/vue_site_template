<template>
    <div class="sidebar">
        <div class="routes">
            <router-link to="/" @click.native="$store.commit('showHideSideBar')">
                <div>Home</div>
            </router-link>
            <router-link to="/portfolio" @click.native="$store.commit('showHideSideBar')">
                <div>Portfolio</div>
            </router-link>
            <router-link to="/contact" @click.native="$store.commit('showHideSideBar')">
                <div>Contact</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SideBar"
    }
</script>

<style scoped>
    .sidebar {
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        line-height: 60px;
        width: 250px;
        display: flex;
        flex-direction: column;
        text-align: start;
        background-color: #305a4e;
        color: white;
        box-shadow: inset 10px 0 26px -16px rgba(28,28,28,1);
    }

    .routes > a > div{
        padding-left: 20px;
        box-shadow: inset 0 -1px 0 0 rgba(42,76,66,1);
        transition: .3s;
    }

    .routes > a > div:hover {
        background-color: #ffffff1f;
    }

    .router-link-exact-active > div {
        background-color: #ffffff1f;
    }

    .routes > a {
        color: white;
    }
</style>