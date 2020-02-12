<template>
    <div class="base-simulation-viewer">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "BaseSimulationViewer"
    }
</script>

<style lang="scss" scoped>
    .base-simulation-viewer {
        background: $theme-color-background-secondary;
        height: 100%;
    }
</style>