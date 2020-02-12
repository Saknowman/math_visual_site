<template>
    <span class="constant-text">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: "BaseConstantText"
    }
</script>

<style lang="scss" scoped>
    .constant-text {
        color: $theme-color-text-secondary;
    }
</style>