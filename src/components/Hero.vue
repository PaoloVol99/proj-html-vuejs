<script>
export default {
    data() {
        return {
            menuList: [
                'home',
                'mission',
                'causes',
                'journal',
                'donate'
            ],
            activeMenuLink: 0,
        }
    }

}
</script>

<template>
    <div class="wrapper">
        <header class="main-header">
            <img src="/img/avada-charity-logo-retina.png" alt="logo">
            <nav>
                <ul class="navbar">
                    <li v-for="(link, i) in menuList" :class="i === activeMenuLink ? 'active' : ''">{{ link }}</li>
                </ul>
            </nav>
        </header>
        <section class="hero">
            <h1>make a difference</h1>
            <p>As long as poverty, injustice &amp; inequality persist, none of us can truly rest</p>
            <div class="buttons">
                <button class="btn btn-white">our mission</button>
                <button class="btn btn-yellow">donate now</button>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>

@use '../style/partials/variables.scss' as *;

.wrapper {
    background-image: url('/img/home-page-slider.jpg');
    background-size: cover;
    background-attachment: fixed;
    // height: 100vh;

    .main-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 35px 105px;

        img {
            max-width: 320px;
        }
        
        .navbar {
            display: flex;
            gap: 50px;
            color: white;
            text-transform: uppercase;
            align-items: center;

            li {
                cursor: pointer;
                transition: all linear 120ms;

                &:hover {
                    color: $primary-color;
                }

                &.active {
                    color: $primary-color;
                }

                &:last-child {
                    padding: 0 30px;
                    line-height: 40px;
                    background-color: $primary-color;
                    transition: all linear 120ms;

                    &:hover {
                        background-color: $primary-color-hover;
                        color: white;
                    }
                }
            }

        }
    }

    .hero {
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 260px 0 380px;
        
        h1 {
            font-size: 64px;
            font-weight: 300;
            text-transform: uppercase;
            margin-bottom: 18px;
            font-family: 'Montserrat', sans-serif;
        }
        
        p {
            margin-bottom: 32px;
            font-size: 22px;
        }

        .buttons {
            display: flex;
            gap: 14px;

            .btn {
                font-family: 'Montserrat', sans-serif;
                font-weight: 500;
                text-transform: uppercase;
                font-size: 14px;
                padding: 10px 24px;
                cursor: pointer;

                &.btn-white {
                    border: 2px solid white;
                    color: white;
                    transition: all linear 120ms;

                    &:hover {
                        border-color: $primary-color;
                        color: $primary-color;
                    }
                }

                &.btn-yellow {
                    border: 2px solid $primary-color;
                    color: $primary-color;
                    transition: all linear 120ms;

                    &:hover {
                        border-color: white;
                        color: white;
                        background-color: $primary-color-hover;
                    }
                }
            }
            
            
        }
    }
}

    
</style>