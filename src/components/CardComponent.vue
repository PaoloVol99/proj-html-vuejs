<script>
export default {
    props: {
        icon: String,
        title: String,
        paragraph: String,
        button: String,
    }

}
</script>

<template>
    <div class="card">
        <font-awesome-icon class="icon" :icon="icon" />
        <h3 class="title">{{ title }}</h3>
        <p class="paragraph">{{ paragraph }}</p>
        <button class="btn-yellow">{{ button }}</button>
    </div>
</template>

<style lang="scss" scoped>

@use '../style/partials/variables.scss' as *;

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    text-align: center;

    .icon {
        color: $primary-color;
        font-size: 70px;
        margin-bottom: 18px;
        cursor: pointer;
        transition: all linear 120ms;

        &:hover {
            color: white;
        }
    }

    .btn-yellow {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        text-transform: uppercase;
        font-size: 14px;
        padding: 10px 24px;
        cursor: pointer;
        background-color: $primary-color;
        color: white;
        transition: all linear 120ms;

        &:hover {
            background-color: $primary-color-hover;
        }
    }

    .paragraph {
        line-height: 36px;
        margin: 26px 0 40px;
    }

    .title {
        font-family: 'Montserrat', sans-serif;
        font-size: 23px;
        font-weight: 400;
    }
}

</style>