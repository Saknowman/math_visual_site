<template>
    <ul>
        <li v-for="(value, index) in values_list" :key="config_list[index].label">
            <current-value-viewer
                    :label="config_list[index].label"
                    :is_constant="config_list[index].is_constant">
                {{ value }}
            </current-value-viewer>
        </li>
    </ul>
</template>

<script>
    import CurrentValueViewer from "./CurrentValueViewer";

    export default {
        name: "CurrentValueViewerListSection",
        components: {
            'current-value-viewer': CurrentValueViewer
        },
        props: {
            values_list: {
                type: Array,
                default() {
                    return []
                }
            },
            config_list: {
                type: Array,
                default() {
                    return []
                }
            }
        },
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