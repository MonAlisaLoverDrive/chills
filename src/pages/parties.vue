<template>
    <div class="parties">
        <search-bar></search-bar>

        <content>
            <card></card>
            <card></card>
            <card></card>
            <card></card>
            <card></card>
            <card></card>
            <card></card>
        </content>

        <action-button>+</action-button>
    </div>
</template>

<style lang="less">
    @import '../assets/colors';

    div.parties
    {
        content
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