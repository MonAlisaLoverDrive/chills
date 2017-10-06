<template>
    <div id="app">
        <menu-bar></menu-bar>
        <content>
            <parties v-if="$root.currentPage === 'parties'"></parties>
        </content>

        <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700&amp;subset=cyrillic" rel="stylesheet">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
              integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
              crossorigin="anonymous">
    </div>
</template>

<script>
    import Parties from './pages/parties.vue';
    import TextCover from './components/textCover.vue';
    import MenuBar from './components/menubar.vue';

    export default {
        name: 'app',
        components: {Parties, TextCover, MenuBar},
        methods:
            {
                textCover(ref)
                {
                    return 48;
                }
            }
    }
</script>

<style>
    @import 'app.css';
</style>
