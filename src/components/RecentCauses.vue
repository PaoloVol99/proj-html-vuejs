<script>
export default {
    data() {
        return {
            images: [
                {
                    img: '/img/avada-charity-fair-trade-featured.jpg',
                    title: 'fair trade',
                },
                {
                    img: '/img/avada-charity-farming-featured.jpg',
                    title: 'farming',
                },
                {
                    img: '/img/avada-charity-shelter-featured.jpg',
                    title: 'shelter',
                },
                {
                    img: '/img/avada-charity-vaccines-featured.jpg',
                    title: 'vaccines',
                }
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
                    <img :src="image.img" alt="">
                    <div class="bg-gold">
                        <span>{{ image.title }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;


.section-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 90px 180px;
    max-width: 1540px;
    margin: 0 auto;

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
                background-color: $primary-color;
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
            position: relative;

            img {
                display: block;
            }

            &:hover .bg-gold{
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                text-transform: uppercase;
                font-size: 22px;
                font-family: 'Montserrat', sans-serif;
                width: 90%;
                overflow: hidden;

                span {
                    display: block;
                }
            }

            .bg-gold {
                position: absolute;
                top: 0;
                bottom: 0;
                right: 50%;
                left: 14px;
                background-color: rgba($color: $primary-color, $alpha: 0.7);
                width: 0;
                cursor: pointer;
                transition: all linear 100ms;
                
                span {
                    display: none;
                }
            }
        }
    }
}

</style>