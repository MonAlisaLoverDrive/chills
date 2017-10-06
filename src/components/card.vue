<template>
    <div class="card" :class="{ sm: (Math.random()>0.5)}">
        <div class="header">Open party season 2017</div>
        <div class="date">
            <i class="fa fa-calendar-o" aria-hidden="true"></i>
            09.11.2017
            <i class="fa fa-clock-o" aria-hidden="true"></i>
            08:00 PM
        </div>
        <div class="description">
            #lorem #ipsum #dolor<br>
            #sit #amet
            <br><br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor at leo a malesuada. Proin scelerisque libero vitae orci faucibus congue. Pellentesque scelerisque sollicitudin lorem a aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames...
        </div>
        <div class="username">
            Alice
        </div>

    </div>
</template>

<style lang="less">
    @import '../assets/colors';

    div.card
    {
        background: @snow-white;
        color:      @pitch-black;
        margin:     1vh;
        padding:    1vh;

        box-shadow: 0 0 2vh 0 rgba(0, 0, 0, 0.25);
        font-size:  3vh;

        flex-basis: 100%;
        flex-grow:  1;

        div.header
        {
            font-size:   4vh;
            font-weight: bold;
            margin:      0;
        }

        div.date
        {
            font-weight: bold;
        }

        div.username
        {
            text-align:  right;
            color:       @deep-water;
            font-weight: bold;
        }

        @media @screen-md
        {
            flex-basis: 40%;

            font-size: 2vh;
        }

        @media @screen-lg
        {
            flex-basis: 30%;

            font-size: 2vh;
        }
    }
</style>

<script>
    export default {}
</script>