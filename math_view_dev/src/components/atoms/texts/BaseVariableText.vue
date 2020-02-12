<template>
    <span class="variable-text">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: "BaseVariableText"
    }
</script>

<style lang="scss" scoped>
    .variable-text {
        color: $theme-color-main-primary;
    }
</style>