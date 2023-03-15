<script>
import { faParagraph } from '@fortawesome/free-solid-svg-icons';

export default {
    data() {
        return {
            mainArticle: {
                    title: 'Understanding community complexities',
                    img: '/img/photo-1444213007800-cff19e1677ac.jpg',
                    paragraph: 'lorem ipsum sit amet, consectetur adipiscing elit. érasent ac nibh vestibulum laoreet ipsum'
                },
            articles: [
                {
                    title: 'The human story of uniqueness',
                    img: '/img/photo-1444664597500-035db93e2323-177x142.jpg',
                    paragraph: 'lorem ipsum sit amet, consectetur adipiscing elit. érasent ac nibh vestibulum laoreet ipsum'
                },
                {
                    title: 'Sustainable trade tactics',
                    img: '/img/photo-1447430617419-95715602278e-177x142.jpg',
                    paragraph: 'lorem ipsum sit amet, consectetur adipiscing elit. érasent ac nibh vestibulum laoreet ipsum'
                },
                {
                    title: 'Farmers making a difference',
                    img: '/img/photo-1460230525622-630fe3294cd7-177x142.jpg',
                    paragraph: 'lorem ipsum sit amet, consectetur adipiscing elit. érasent ac nibh vestibulum laoreet ipsum'
                },
                {
                    title: 'Meeting remote tribes in Peru',
                    img: '/img/photo-1460600421604-5e138c208b9c-177x142.jpg',
                    paragraph: 'lorem ipsum sit amet, consectetur adipiscing elit. érasent ac nibh vestibulum laoreet ipsum'
                },
            ]
        }
    }
}
</script>

<template>
    <section>
        <div class="section-wrapper">
            <div class="container">
                <div class="title-wrapper">
                    <h1 class="section-title">
                        latest articles
                    </h1>
                    <span class="subtitle">Together we make all the difference</span>
                </div>
                <div class="articles-wrapper row">
                    <div class="col-6">
                        <div class="article-big">
                            <figure>
                                <img :src="mainArticle.img" alt="">
                            </figure>
                            <div class="text">
                                <h3>{{ mainArticle.title }}</h3>
                                <p>{{ mainArticle.paragraph }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div v-for="(article, i) in articles" :key="i" class="article">
                            <figure>
                                <img :src="article.img" alt="">
                            </figure>
                            <div class="text">
                                <h3>{{ article.title }}</h3>
                                <p>{{ article.paragraph }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button>view all our articles</button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 90px 120px;

    .title-wrapper {
        margin-bottom: 85px;
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

    .articles-wrapper {
        margin: 0 -22px;
        margin-bottom: 90px;

        .col-6 {
            width: 50%;
            padding: 0 22px;

            img {
                display: block;
            }

            p {
                line-height: 36px;
            }

            h3 {
                color: goldenrod;
                margin-bottom: 10px;
                font-size: 20px;
                font-family: 'Montserrat', sans-serif;
                font-weight: 400;
            }
            
            &:last-child {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            .article {
                display: flex;
                gap: 20px;
                align-items: center;

                figure {
                    width: 134px;
                    flex-shrink: 0;
                }
            }

            .article-big {
                border: 1px solid lightgrey;
                .text {
                    padding: 35px 22px 26px;
                    border-top: 1px solid lightgrey;

                    h3 {
                        margin-bottom: 16px;
                    }
                }
            }
        }
    }

    .container {
        max-width: 1080px;
        margin: 0 auto;

        button {
            line-height: 52px;
            text-transform: uppercase;
            font-family: 'Montserrat', sans-serif;
            font-size: 18px;
            color: white;
            background-color: #ed6864;
            width: 100%;
        }
    }
}

</style>