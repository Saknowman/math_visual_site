<template>
    <div class="scroll-area">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ScrollArea"
    }
</script>

<style lang="scss" scoped>
    .scroll-area {
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .scroll-area::-webkit-scrollbar {
        width: $scroll-bar-width;
    }

    .scroll-area::-webkit-scrollbar-thumb {
        background: $theme-color-accent-primary;
        border-radius: 10px;
    }

    .scroll-area::-webkit-scrollbar-track {
        background: rgba($theme-color-accent-primary, 0.3);
        border-radius: 10px;
    }
</style>