<template>
    <div class="input-container">
        <span class="current-value flex-item">{{ current_value }}</span>
        <input
                class="base-input flex-item"
                type="range"
                v-model.number="current_value"
                :min="min"
                :max="max"
                :step="step">
    </div>
</template>

<script>
    export default {
        name: "BaseInputRange",
        components: {
        },
        props: {
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
        },
        data() {
            return {
                current_value: 0
            }
        }

    }
</script>

<style lang="scss" scoped>
    .input-container {
        width: 100%;
        display: flex;
        flex-direction: column;

        .flex-item {
            margin-bottom: $space-medium;
        }

        .current-value {
            align-self: center;
            font-size: 1.1em;
            background: $theme-color-main-primary;
            color: #fff;
            border-radius: 10px;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            padding: $space-medium;

        }

        .base-input {
            align-self: center;
            width: 95%;
            -webkit-appearance: none;
            appearance: none;
            background-color: $theme-color-main-light;
            height: 2px;
            border-radius: 6px;

            &:focus,
            &:active {
                outline: none;
            }

            &::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                cursor: pointer;
                position: relative;
                width: 1.5em;
                height: 1.5em;
                display: block;
                border: 2px solid $theme-color-main-primary;
                background-color: #fff;
                border-radius: 50%;
                -webkit-border-radius: 50%;
            }
        }
    }

</style>