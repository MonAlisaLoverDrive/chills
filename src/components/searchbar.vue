<template>
    <div class="search-bar">
        <div class="search">
            <div class="input">
                <input title="Search" placeholder="#rocknroll">
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

            div.input
            {
                height:    7vh;
                margin:    1vh;
                font-size: 4vh;

                input
                {
                    outline:       none;
                    border:        none;
                    border-radius: 1vh;
                    background:    @snow-white;

                    box-sizing:    border-box;
                    width:         100%;
                    height:        100%;
                    font-size:     4vh;
                    padding:       1vh;

                    box-shadow:    0 0.1vh 1.1vh 0 rgba(0, 0, 0, 0.5);
                }

                a
                {
                    position: absolute;
                    right:    1vh;
                    top:      1vh;
                }
            }
        }
    }
</style>

<script>
    export default {}
</script>