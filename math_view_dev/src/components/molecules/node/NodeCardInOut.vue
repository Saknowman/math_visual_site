<template>
    <base-node-card :title="title"
                    :pos_x="pos_x"
                    :pos_y="pos_y"
                    :content_height="my_content_height"
                    :content_width="my_content_width"
                    :is_static_width="is_static_width"
                    :static_width="static_width"
    >
        <g class="node-card-contents" :transform="'translate(0,' + (attribute_height / 2) + ')'">
            <g class="in_attributes"
               v-for="(in_attribute, index) in in_attributes"
               :key="'in_' + in_attribute.label">
                <text
                        :font-size="attribute_height"
                        :x="side_padding + (attribute_circle_radius * 2)"
                        :y="attribute_height * index + attribute_each_space * index"
                        text-anchor="start"
                >
                    {{ in_attribute.label }}
                </text>
                <circle :r="attribute_circle_radius"
                        :cx="side_padding + (attribute_circle_radius / 2)"
                        :cy="attribute_height * index + attribute_each_space * index + (attribute_height / 2)"
                        :fill="get_attribute_type_color(in_attribute.type)"
                ></circle>
            </g>
            <g class="out_attributes"
               v-for="(out_attribute, index) in out_attributes"
               :key="'out_' + out_attribute.label">
                <text
                        :font-size="attribute_height"
                        :x="out_card_width - side_padding - (attribute_circle_radius * 2)"
                        :y="attribute_height * index + attribute_each_space * index"
                        text-anchor="end"
                >
                    {{ out_attribute.label }}
                </text>
                <circle :r="attribute_circle_radius"
                        :cx="out_card_width - side_padding - (attribute_circle_radius / 2)"
                        :cy="attribute_height * index + attribute_each_space * index + (attribute_height / 2)"
                        :fill="get_attribute_type_color(out_attribute.type)"
                ></circle>
            </g>
        </g>
    </base-node-card>
</template>

<script>
    import BaseNodeCard from "./BaseNodeCard";

    export default {
        name: "NodeCardInOut",
        mixins: [BaseNodeCard],
        components: {
            'base-node-card': BaseNodeCard
        },
        props: {
            in_attributes: {
                type: Array,
                default() {
                    return []
                }
            },
            out_attributes: {
                type: Array,
                default() {
                    return []
                }
            },
        },
        computed: {
            attribute_height: function () {
                return this.$store.getters.node_card_attribute_height;
            },
            attribute_each_space: function () {
                return this.$store.getters.node_card_attribute_each_space;
            },
            my_content_height: function () {
                const attribute_max_num = Math.max(this.out_attributes.length, this.in_attributes.length);
                return this.attribute_height * attribute_max_num
                    + this.attribute_each_space * attribute_max_num
                    + this.attribute_height;
            },
            my_content_width: function () {
                if (this.is_static_width) return this.static_width;
                let in_text_max_length = 0;
                let out_text_max_length = 0;
                Object.values(this.in_attributes).forEach((attribute) => {
                    in_text_max_length = in_text_max_length < attribute.label.length ? attribute.label.length : in_text_max_length;
                });
                Object.values(this.out_attributes).forEach((attribute) => {
                    out_text_max_length = out_text_max_length < attribute.label.length ? attribute.label.length : out_text_max_length;
                });

                return this.calc_text_width(in_text_max_length + out_text_max_length + 2, this.attribute_height);
            },
            out_card_width: function () {
                return Math.max(this.card_width, this.my_content_width);
            },
            attribute_circle_radius: function () {
                return this.$store.getters.node_card_attribute_circle_radius;
            }
        },
        methods: {
            get_attribute_type_color(attribute_type) {
                return this.$store.getters.node_card_attribute_types[attribute_type].color;
            }
        }
    }
</script>

<style scoped>

</style>