<script>
export default {

}
</script>

<template>
    <section>
        <div class="row">
            <div class="col col-8">
                <h1>every moment counts</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aperiam omnis ipsum, itaque asperiores
                    cum officia non delectus quos similique pariatur sunt beatae autem.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, praesentium obcaecati itaque
                    laudantium nihil vero culpa mollitia labore consequatur assumenda magnam tempore!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas deleniti nihil dolorem eveniet et?</p>
                <button class="btn btn-yellow">our mission</button>
            </div>
            <div class="col col-4">
                <div class="wrapper">
                    <div class="volunteers">
                        <span class="number">
                            <font-awesome-icon icon="fa-regular fa-heart" />
                            2032
                        </span>
                        <span class="text">Volunteers worldwide</span>
                    </div>
                    <div class="projects">
                        <span class="number">
                            <font-awesome-icon icon="fa-solid fa-globe" />
                            132
                        </span>
                        <span class="text">Volunteers worldwide</span>
                    </div>
                    <div class="donated">
                        <span class="number">
                            <font-awesome-icon icon="fa-solid fa-dollar-sign" />
                            3.8M
                        </span>
                        <span class="text">Donated</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;


section {

    .col-8 {
        width: calc((100% / 12) * 8);
        background-color: white;
        padding: 130px;

        h1 {
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
                margin: 30px 0 46px;
            }
        }

        p {
            margin-bottom: 38px;
            line-height: 36px;
        }

        .btn {
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
            text-transform: uppercase;
            font-size: 14px;
            padding: 10px 24px;
            cursor: pointer;

            &.btn-yellow {
                background-color: $primary-color;
                color: white;

                &:hover {
                    background-color: $primary-color-hover;
                }
            }
        }

    }

    .col-4 {
        width: calc((100% / 12) * 4);
        background-image: url('/img/home-content-bg-1.jpg');
        padding: 130px 0;

    }

    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 68px;

        div {
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;

            .number {
                font-size: 60px;
            }

            .text {
                font-size: 24px;
            }
        }
    }
}
</style>