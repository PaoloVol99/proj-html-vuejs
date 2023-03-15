<script>
export default {

}
</script>

<template>
    <footer>
        <div class="bg-white">
            <img src="/img/avada-charity-sticky-header-logo-retina.png" alt="">
        </div>
        <div class="bg-grey">
            <div class="text">
                <span>&#169; Copyright 2012 - 2020</span>
                <span>AVADA THEME BY THEME FUSION | ALL RIGHTS RESERVED | POWERED BY WORDPRESS</span>  
            </div>
            <div class="social">
                <font-awesome-icon class="icon" icon="fa-brands fa-facebook" />
                <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />
                <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
                <font-awesome-icon class="icon" icon="fa-brands fa-youtube" />
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.bg-white {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 140px;

    img {
        width: 318px;
    }
}

.bg-grey {
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 140px;

    .text {
        display: flex;
        gap: 8px;
        color: #bababc;
        margin-bottom: 28px;
    }

    .social {
        color: goldenrod;
        display: flex;
        gap: 8px;

        .icon {
            padding: 10px;
            border-radius: 50%;
            background-color: white;
            font-size: 24px;
        }
    }

}

</style>