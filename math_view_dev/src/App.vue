<template>
    <div id="app">
        <header class="header"></header>
        <router-view class="main"/>
    </div>
</template>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        display: flex;
        flex-direction: column;
        height: 100%;

        .header {
            height: $header-height;
        }

        .main {
            flex: 1;
        }
    }
</style>
