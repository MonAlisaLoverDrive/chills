<template>
    <transition name="fade">
        <div class="startparty">
            START PARTY
        </div>
    </transition>
</template>

<style lang="less">
    @import '../assets/colors';

    div.startparty
    {
        height: 100%;

        div.partylist
        {
            display:   flex;
            flex-wrap: wrap;
        }
    }
</style>

<script>
    import SearchBar from '../components/searchbar.vue';
    import Card from '../components/card.vue';
    import ActionButton from '../components/actionbutton.vue';

    export default {
        components: {SearchBar, Card, ActionButton},
    }
</script>