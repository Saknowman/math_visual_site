<template>
    <ul>
        <li v-for="config in config_list" :key="config.label">
            <range-input-with-label
                    :label="config.label"
                    :value="config.value"
                    :max="config.max"
                    :min="config.min"
                    :step="config.step"
                    @change="config.change"
            ></range-input-with-label>
        </li>
    </ul>
</template>

<script>
    import RangeInputWithLabel from "./RangeInputWithLabel";

    export default {
        name: "RangeInputListSection",
        components: {
            'range-input-with-label': RangeInputWithLabel
        },
        props: {
            config_list: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    ul {
        list-style: none;
        padding-left: 0;

        li {
            margin-top: $space-x-large;
        }

        li:first-child {
            margin-top: 0;
        }
    }

</style>