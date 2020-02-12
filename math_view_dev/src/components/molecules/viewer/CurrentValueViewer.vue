<template>
    <base-label class="base-label" :label="label">
        :
        <div v-if="is_constant">
            <base-constant-text class="current-value">
                <slot></slot>
            </base-constant-text>
        </div>
        <div v-else>
            <base-variable-text class="current-value">
                <slot></slot>
            </base-variable-text>
        </div>

    </base-label>
</template>

<script>
    import BaseLabel from "../../atoms/forms/BaseLabel";
    import BaseConstantText from "../../atoms/texts/BaseConstantText";
    import BaseVariableText from "../../atoms/texts/BaseVariableText";

    export default {
        name: "CurrentValueViewer",
        components: {
            'base-label': BaseLabel,
            'base-constant-text': BaseConstantText,
            'base-variable-text': BaseVariableText
        },
        props: {
            label: {
                type: String,
                default: 'Label'
            },
            is_constant: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .base-label {
        display: flex;
        font-size: 1.3em;

        .current-value {
            padding: $space-medium;
            font-size: 1.0em;
        }
    }
</style>