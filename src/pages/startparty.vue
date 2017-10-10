<template>
    <!--<transition name="fade">-->
        <div class="startparty">
            <div class="input-wrapper">
                Party name
                <input></div>
            <div class="input-wrapper">
                Date and time
                <input></div>
            <div class="input-wrapper">
                Description
                <textarea></textarea>
            </div>
        </div>
    <!--</transition>-->
</template>

<style lang="less">
    @import '../assets/colors';

    div.startparty
    {
        width: 100%;
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