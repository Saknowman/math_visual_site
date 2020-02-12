<template>
    <base-label class="base-label" :label="label">
        <base-input-range
                class="base-input-range"
                type="range"
                @change="(new_value) => {$emit('change', new_value)}"
                :value="value"
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
            label: {
                type: String,
                default: "Label"
            },
            value: {
                type: Number,
                default: 0
            },
            min: {
                type: Number,
                default: -10
            },
            max: {
                type: Number,
                default: 10
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
            padding: $space-medium;
            font-size: 1.0em;
        }
    }
</style>