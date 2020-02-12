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
        height: 100%;
    }
</style>