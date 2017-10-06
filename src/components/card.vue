<template>
    <div class="card" :class="{ sm: (Math.random()>0.5)}">
        <div class="header">{{ party.name }}</div>
        <div class="date">
            <i class="fa fa-calendar-o" aria-hidden="true"></i>
            {{ party.date }}
            <i class="fa fa-clock-o" aria-hidden="true"></i>
            {{ party.time }}
        </div>
        <div class="description">
            {{ party.description }}
        </div>
        <div class="username">
            {{ party.ownerName }}
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
    export default
    {
        props: ['party']
    }
</script>