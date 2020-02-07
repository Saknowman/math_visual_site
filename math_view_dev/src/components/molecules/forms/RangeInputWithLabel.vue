<template>
    <base-label class="base-label">
        <base-input-range
                class="base-input-range"
                type="range"
                :min="min"
                :max="max"
                :step="step"
        ></base-input-range>
    </base-label>
</template>

<script>
    import BaseLabel from "../../atoms/forms/BaseLabel";
    import BaseInputRange from "../../atoms/forms/BaseInputRange";

    export default {
        name: "RangeInputWithLabel",
        components: {
            'base-label': BaseLabel,
            'base-input-range': BaseInputRange
        },
        props: {
            min: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 100
            },
            step: {
                type: Number,
                default: 1
            }
        }
    }
</script>

<style lang="scss" scoped>
    .base-label {
        display: flex;
        flex-direction: column;
        font-size: 1.3em;

        .base-input-range {
            margin-top: $space-medium;
            padding: $space-medium;
            font-size: 1.1em;
        }
    }
</style>