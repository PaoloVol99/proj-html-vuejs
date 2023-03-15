<script>
export default {
    data() {
        return {
            images: [
                '/img/avada-charity-fair-trade-featured.jpg',
                '/img/avada-charity-farming-featured.jpg',
                '/img/avada-charity-shelter-featured.jpg',
                '/img/avada-charity-vaccines-featured.jpg',
            ]
        }
    }

}
</script>

<template>
    <section>
        <div class="section-wrapper">
            <div class="title-wrapper">
                <h1 class="section-title">
                    recent causes
                </h1>
                <span class="subtitle">We run projects in over 30 countries in 5 continents</span>
            </div>
            <div class="images-wrapper row">
                <div v-for="(image, i) in images" :key="i" class="col">
                    <img :src="image" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

.section-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 90px 180px;

    .title-wrapper {
        margin-bottom: 125px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        
        .section-title {
            text-transform: uppercase;
            font-family: 'Montserrat', sans-serif;
            font-weight: 400;
            font-size: 36px;
            
            &::after {
                content: '';
                width: 190px;
                height: 3px;
                background-color: goldenrod;
                display: block;
                margin: 30px auto 46px;
            }
        }

        .subtitle {
            font-size: 22px;
        }
    }

    .images-wrapper {
        margin: 0 -14px;
        .col {
            width: 25%;
            padding: 0 14px;
        }
    }
}

</style>