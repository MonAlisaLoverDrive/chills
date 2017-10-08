<template>
    <div>
        <div class="menu-placeholder"></div>
        <div class="menu">
            <router-link :to="'/users/'+(1+2)">
                <div class="menu-item userdata">
                    <img src="assets/img/default_avatar.png">
                    <div class="wrapper">
                        <text-cover>{{ $root.userdata.displayName }}</text-cover>
                        <span class="username">@{{ $root.userdata.username }}</span>
                    </div>
                </div>
            </router-link>
            <div class="placeholder">

            </div>
            <router-link to="/parties">
                <div class="menu-item" onclick="">
                    <img src="assets/icons/shoe.svg">
                </div>
            </router-link>
            <router-link to="/photos">
                <div class="menu-item">
                    <img src="assets/icons/polaroid.svg">
                </div>
            </router-link>
            <div class="menu-item">
                <img src="assets/icons/bell.svg">
                <span class="dot top right red sm"></span>
            </div>

            <router-link to="/settings">
            <div class="menu-item">
                <img src="assets/icons/gear.svg">
            </div></router-link>
        </div>
    </div>
</template>

<style lang="less">
    @import '../assets/colors';

    div.menu-placeholder
    {
        height: 10vh;
    }

    div.menu
    {
        position:    fixed;
        top:         0;
        left:        0;
        width:       100vw;
        z-index:     4;
        /*box-sizing:    border-box;*/

        height:      10vh;
        background:  @black-ice;

        box-shadow:  0 0.4vh 1.4vh 0 rgba(0, 0, 0, 0.5);

        display:     flex;
        align-items: center;

        div.menu-item
        {
            height:          5vh;
            margin:          0.5vh;

            display:         flex;
            align-items:     center;
            justify-content: flex-start;

            color:           @snow-white;
            font-size:       3vh;

            cursor:          pointer;

            opacity:         0.8;
            transition:      opacity .5s;

            img
            {
                height: 100%;
            }

            @media @touch
            {
                opacity: 1;

                span.text
                {
                    display: none;
                }
            }

            &:hover
            {
                opacity: 1;
            }
        }

        div.menu-item.userdata
        {
            height:    8vh;
            width:     50%;
            font-size: 3vh;

            div.wrapper
            {
                width:     0;
                flex:      1;
                display:   flex;
                flex-wrap: wrap;
            }

            div.text-cover
            {
                flex:       1;
                max-height: 5vh;
            }

            span.username
            {
                font-size: 2vh;
            }

            img
            {
                border-radius: 100%;
                height:        90%;
                margin-right:  1vh;
            }
        }

        div.placeholder
        {
            flex: 1;
        }
    }
</style>

<script>
    import TextCover from './textCover.vue';

    export default {
        components: {TextCover},
    }
</script>