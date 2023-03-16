<script>
export default {
    
}
</script>

<template>
    <div class="bg-red">
        <h4>view all our causes</h4>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables.scss' as *;
    .bg-red {
        background-color: $secondary-color;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: background-color linear 120ms;

        &:hover {
            background-color: $secondary-color-hover;
        }

        h4 {
            text-transform: uppercase;
            font-weight: 400;
            font-family: 'Montserrat', sans-serif;
            color: white;
            font-size: 22px;
        }
    }
</style>

