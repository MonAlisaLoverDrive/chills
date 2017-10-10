<template>
    <!--<transition name="fade">-->
        <div class="startparty">
            <div class="input-wrapper">
                <span class="description">Party name</span>
                <input>
            </div>
            <div class="input-wrapper">
                <span class="description">Party name</span>
                <input>
            </div>
            <div class="hash-suggestions">
                <span class="description">Suggestions</span><br>
                #almaty #betonomeshalka #meshaet_beton #brigada_stroiteley
                #zhret #samogon
            </div>
            <div class="input-wrapper description-area">
                <span class="description">Description</span>
                <textarea></textarea>
            </div>
            <div class="input-wrapper">
                <button class="flat">Start the party</button>
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

        display: flex;
        flex-direction: column;

        div.description-area
        {
            flex: 1;

            textarea
            {
                flex: 1;
            }
        }

        div.hash-suggestions
        {
            font-size: 3.5vh;
            margin: 1vh;
            color: @ice-gray;
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