<template>
    <g>
        <rect
                :x="pos_x"
                :y="pos_y"
                :width="card_width"
                :height="card_height"
                class="node-card"></rect>
        <slot></slot>
    </g>
</template>

<script>
    export default {
        name: "BaseNodeCard",
        props: {
            pos_x: {
                type: Number,
                default: 0
            },
            pos_y: {
                type: Number,
                default: 0
            },
            card_width: {
                type: Number,
                default: 20
            }
        },
        computed: {
            card_height: function() {
                console.log(this.$store.getters.node_card_title_height);
                return this.$store.getters.node_card_title_height;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .node-card {
        fill: $theme-color-main-primary
    }
</style>