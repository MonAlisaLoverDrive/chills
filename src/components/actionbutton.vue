<template>
    <div class="action-button">
        <slot></slot>
    </div>
</template>

<style lang="less">
    @import '../assets/colors';

    div.action-button
    {
        color:         @snow-white;
        position:      fixed;
        bottom:        1vh;
        right:         1vh;

        border-radius: 100%;
        background:    @deep-water;
        width:         10vh;
        height:        10vh;
        font-size:     10vh;
        line-height:   10vh;
        text-align:    center;
        padding:       0;

        z-index:       6;
        box-shadow:    0.3vh 0.3vh 1.6vh 0 rgba(0, 0, 0, 0.5);
    }
</style>

<script>
    export default {}
</script>