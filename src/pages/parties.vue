<template>
    <!--<transition name="fade">-->
        <div class="parties">
            <search-bar></search-bar>

            <div class="partylist">
                <card :party="party" v-for="party in $root.parties" :key="party.id"></card>
            </div>


            <action-button onclick="sierra.router.push('startparty')">+</action-button>
        </div>
    <!--</transition>-->
</template>

<style lang="less">
    @import '../assets/colors';

    div.parties
    {
        height: 100%;
        width:  100%;

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