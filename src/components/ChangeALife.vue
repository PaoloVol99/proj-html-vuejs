<script>
export default {

}
</script>

<template>
    <section>
        <div class="section-wrapper">
            <div class="container">
                <div class="title-wrapper">
                    <h1 class="section-title">
                        change a life today
                    </h1>
                    <span class="subtitle">As long as poverty, injustice & inequality persist, none of us can truly rest. It doesn't take as much to change a life. Get in touch today and start making the difference.</span>
                </div>
                <div class="buttons">
                    <button class="btn btn-white">volunteer</button>
                    <button class="btn btn-white">donate now</button>
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
    padding: 90px 0;
    background-image: url('/img/home-footer.jpg');
    background-size: cover;
    background-attachment: fixed;
    color: white;

    .container {
        max-width: 856px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        .title-wrapper {
            margin-bottom: 48px;
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

        .buttons {
            display: flex;
            gap: 48px;

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
    
                    &:hover {
                        border-color: goldenrod;
                        color: goldenrod;
                    }
                }
            }
        }

    }

}
</style>