<script>
import { faParagraph } from '@fortawesome/free-solid-svg-icons';
import CardComponent from './CardComponent.vue'
export default {
    components: {
        CardComponent
    },
    data() {
        return {
            cards: [
                {
                    icon: 'fa-solid fa-droplet',
                    title: 'Clean Water',
                },
                {
                    icon: 'fa-solid fa-stethoscope',
                    title: 'Vaccinations',
                },
                {
                    icon: 'fa-solid fa-graduation-cap',
                    title: 'Education',
                },
                {
                    icon: 'fa-brands fa-pagelines',
                    title: 'Farming',
                },
            ],
            paragraph: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique provident, quae ipsam soluta perspiciatis ducimus!',
            button: 'learn more'
        }
    }
}
</script>

<template>
    <section>
        <div class="section-wrapper">
            <div class="title-wrapper">
                <h1 class="section-title">
                    our values
                </h1>
                <span class="subtitle">think big. act bigger.</span>
            </div>
            <div class="cards-wrapper">
                <CardComponent v-for="(card, i) in cards" :key="i" :icon="card.icon" :title="card.title" :paragraph="paragraph" :button="button"/>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .section-wrapper {
        background-image: url('/img/home-content-bg-2.jpg');
        background-size: cover;
        background-attachment: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 140px 180px;

        .title-wrapper {
            margin-bottom: 125px;
            color: white;
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
                text-transform: capitalize;
                font-size: 22px;
            }
        }
        
        .cards-wrapper {
            display: flex;
            gap: 16px;
        }
    }
</style>