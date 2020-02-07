<template>
    <label class="base-label">
        {{label}}
        <slot></slot>
    </label>
</template>

<script>
    export default {
        name: "BaseLabel",
        props: {
            label: {
                type: String,
                default: "Label"
            }
        }
    }
</script>

<style lang="scss" scoped>
    .base-label {
        color: $label-color;
        font-weight: bold;
    }
</style>