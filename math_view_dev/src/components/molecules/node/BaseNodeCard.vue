<template>
    <g class="node-card">
        <rect :x="pos_x"
              :y="pos_y"
              rx="2"
              :width="card_width"
              :height="card_height"
              :fill="board_color"
              :stroke="border_color"
              :stroke-width="Math.min(1, card_width * 0.02)"
        ></rect>
        <text class="title"
              :x="pos_x + card_width / 2"
              :y="pos_y + top_padding"
              :font-size="title_height"
              text-anchor="middle"
        >{{ title }}
        </text>
        <g :transform="'translate(' + [pos_x, content_pos_y].join(',') + ')'">
            <slot></slot>
        </g>
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
            title: {
                type: String,
                required: true
            },
            content_height: {
                type: Number,
                default: 0
            },
            content_width: {
                type: Number,
                default: 0
            },
            is_static_width: {
                type: Boolean,
                default: false
            },
            static_width: {
                type: Number,
                default() {return this.$store.getters.node_card_static_default_width}
            },
            node_type: {
                type: String,
                default: null
            }
        },
        computed: {
            card_height: function () {
                return this.$store.getters.node_card_title_height + this.content_height;
            },
            card_width: function () {
                if (this.is_static_width) return this.static_width;
                return Math.max(
                    this.calc_text_width(this.title.length + 1, this.title_height * 0.8),
                    this.content_width
                );
            },
            title_height: function () {
                return this.$store.getters.node_card_title_height;
            },
            side_padding: function () {
                return this.$store.getters.node_card_contents_side_padding;
            },
            top_padding: function () {
                return this.$store.getters.node_card_contents_top_padding;
            },
            content_pos_y: function () {
                return (this.pos_y + this.title_height + this.card_width * 0.02) + this.$store.getters.node_card_contents_top_padding;
            },
            board_color: function (){
                const node_type = !this.node_type ? 'default' : this.node_type;
                return this.$store.getters.node_card_types[node_type].color + 'ff';
            },
            border_color: function () {
                const node_type = !this.node_type ? 'default' : this.node_type;
                return this.$store.getters.node_card_types[node_type].color + '30';
            }
        },
        methods: {
            calc_text_width(text_length, font_size) {
                return font_size * text_length * 0.7;
            }
        }
    }
</script>
<style lang="scss" scoped>
    .node-card {
        .board {
            fill: rgba($theme-color-main-primary, 0.2);
            stroke: $theme-color-main-primary;
        }

        text {
            dominant-baseline: hanging;
        }
    }
</style>