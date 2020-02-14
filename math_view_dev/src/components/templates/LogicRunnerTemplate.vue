<template>
    <main class="logic-runner-template">
        <div class="cell-item menu-container">
            <slot class="menu" name="menu"></slot>
        </div>
        <div class="cell-item viewer-container">
            <slot class="viewer" name="simulator"></slot>
            <slot class="viewer" name="node_graph"></slot>
        </div>
    </main>
</template>

<script>
    export default {
        name: "LogicRunnerTemplate",
        components: {

        }
    }
</script>

<style lang="scss" scoped>
    .logic-runner-template{
        display: flex;
        width: 100%;

        .cell-item {
            padding: $space-x-large;
        }

        .menu-container {
            width: $menu-width;
            background: rgba($theme-color-main-primary, 0.2);
        }

        .menu-border {
            width: $space-medium;
            background: $theme-color-main-light;
            border-radius: 10px;
            margin: $space-x-large 0;
        }

        .viewer-container {
            flex: 1;

        }
    }

</style>