<template>
    <div class="search-bar">
        <div class="search">
            <div class="input-wrapper">
                <input title="Search" placeholder="#rocknroll" class="search">
                <a><i class="fa fa-search" aria-hidden="true"></i></a>
            </div>
        </div>
        <div class="search-placeholder"></div>
    </div>
</template>

<style lang="less">
    @import '../assets/colors';

    div.search-bar
    {
        div.search-placeholder
        {
            height:  9vh;
            z-index: 0;
        }

        div.search
        {
            z-index:  1;
            position: fixed;
            width:    100vw;

            @media @screen-lg
            {
                width: 30vw;
            }

            div.input-wrapper
            {
                font-size: 4vh;
                margin:    1vh;

                a
                {
                    position: absolute;
                    right:    1vh;
                    top:      1vh;
                    line-height: 4vh;
                }
            }
        }
    }
</style>

<script>
    export default {}
</script>