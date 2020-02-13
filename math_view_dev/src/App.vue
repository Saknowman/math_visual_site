<template>
    <div id="app">
        <main-header class="header"></main-header>
        <router-view class="main"/>
    </div>
</template>

<script>
    import MainHeaderMenu from "./components/organisms/menus/MainHeaderMenu";

    export default {
        name: "App",
        components: {
            'main-header': MainHeaderMenu
        }
    }
</script>

<style lang="scss">
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        display: flex;
        flex-direction: column;
        height: 100%;

        .main {
            flex: 1;
            max-height: calc(100vh - #{$header-height});
        }
    }
</style>
