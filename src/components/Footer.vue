<template>
    <div class="footer">
        <div class="content-center">
            <div class="flex-between">
                <div>
                    <a href="https://ua.linkedin.com/in/maxim-dvorovoi" target="_blank">© 2020 Maxim Dvorovoi</a>
                </div>
                <div class="social">
                    <a href="https://ua.linkedin.com/in/maxim-dvorovoi" target="_blank">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/d_mas9/" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/maxim.dvorovoy" target="_blank">
                        <i class="fab fa-facebook-square"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .footer {
        color: white;
        font-weight: 300;
        flex: 0 0 auto;
        background-color: rgba(54,99,86,1);
        height: 120px;
    }

    .flex-between {
        display: flex;
        justify-content: space-between;
        height: 120px;
        align-items: center;
    }

    a {
        color: white !important;
        transition: .3s;
    }

    a:hover {
        opacity: .7;
    }

    .social {
        width: 110px;
    }

    .social a {

        margin-left: 15px;
    }

    .social i {
        font-size: 22px;
        vertical-align: middle;
    }
</style>