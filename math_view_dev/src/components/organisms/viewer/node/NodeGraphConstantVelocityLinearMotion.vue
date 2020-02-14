<template>
    <div>
        <svg :viewBox="[0, 0, viewer_width, viewer_height].join(',')">
            <g class="nodes-g">
                <node-card-in-out
                        v-for="(node_config, index) in node_config_list"
                        :key="index"
                        :title="node_config.title"
                        :pos_x="node_config.pos.x"
                        :pos_y="node_config.pos.y"
                        :in_attributes="node_config.content.in_attributes"
                        :out_attributes="node_config.content.out_attributes"
                        :node_type="node_config.node_type"
                        :help="node_config.content.help"
                ></node-card-in-out>
            </g>

            <g class="link-lines-g">
                <polyline class="node-link-line"
                          v-for="(config, index) in node_link_lines_config_list"
                          :key="index"
                          :points="config.points"
                ></polyline>
            </g>
            <node-help
                    title=""
                    :pos_x="viewer_width / 2"
                    :pos_y="viewer_height / 2"
            ></node-help>
            <base-node-card title="F "
                            :help="help"
                            node_type="help_icon"
            ></base-node-card>
        </svg>
    </div>
</template>

<script>
    import NodeCardInOut from "../../../molecules/node/NodeCardInOut";
    import NodeHelp from "../../../molecules/node/NodeHelp";
    import BaseNodeCard from "../../../molecules/node/BaseNodeCard";

    export default {
        name: "NodeGraphConstantVelocityLinearMotion",
        components: {
            'base-node-card': BaseNodeCard,
            'node-card-in-out': NodeCardInOut,
            'node-help': NodeHelp
        },
        data() {
            return {
                help: {
                    title: 'Constant Velocity Linear Motion',
                    formula: [
                        'radian = Angle.value * (PI / 180)',
                        'x_distance = cos(radian) * Velocity.value',
                        'y_distance = sin(radian) * Velocity.value',
                        '',
                        'Circle.x += x_distance',
                        'Circle.y += y_distance',
                    ]
                },
                node_config_list: [
                    {
                        title: 'Circle',
                        pos: {x: 10, y: 20},
                        content: {
                            in_attributes: [],
                            out_attributes: [
                                {label: 'X', type: 'float'},
                                {label: 'Y', type: 'float'},
                            ],
                        },
                        node_type: 'input'
                    },
                    {
                        title: 'Circle',
                        pos: {x: 210, y: 20},
                        content: {
                            in_attributes: [
                                {label: 'X', type: 'float'},
                                {label: 'Y', type: 'float'},
                            ],
                            out_attributes: [],
                        },
                        node_type: 'output'
                    },
                    {
                        title: 'Velocity',
                        pos: {x: 10, y: 110},
                        content: {
                            in_attributes: [],
                            out_attributes: [
                                {label: 'value', type: 'int'},
                            ],
                        },
                        node_type: 'input'
                    },

                    // Angle to Radian
                    {
                        title: 'Angle',
                        pos: {x: 10, y: 70},
                        content: {
                            in_attributes: [],
                            out_attributes: [
                                {label: 'value', type: 'int'},
                            ],
                        },
                        node_type: 'input'
                    },
                    {
                        title: 'To Radian',
                        pos: {x: 35, y: 70},
                        content: this.$store.getters.node_content_type['to_radian'],
                        node_type: 'formula'
                    },

                    // Radian to cos and sin
                    {
                        title: 'Cos',
                        pos: {x: 80, y: 60},
                        content: this.$store.getters.node_content_type['cos'],
                        node_type: 'formula'
                    },
                    {
                        title: 'Sin',
                        pos: {x: 80, y: 80},
                        content: this.$store.getters.node_content_type['sin'],
                        node_type: 'formula'
                    },

                    // Calc X and Y Velocity
                    {
                        title: 'Multiply',
                        pos: {x: 125, y: 55},
                        content: this.$store.getters.node_content_type['multiply'],
                        node_type: 'formula'
                    },
                    {
                        title: 'Multiply',
                        pos: {x: 125, y: 80},
                        content: this.$store.getters.node_content_type['multiply'],
                        node_type: 'formula'
                    },


                    // Calc next x and y pos
                    {
                        title: 'Add',
                        pos: {x: 170, y: 10},
                        content: this.$store.getters.node_content_type['add'],
                        node_type: 'formula'
                    },
                    {
                        title: 'Add',
                        pos: {x: 170, y: 40},
                        content: this.$store.getters.node_content_type['add'],
                        node_type: 'formula'
                    },
                ],
                viewer_width: this.$store.getters.layout_node_graph_width * ((this.$store.getters.node_card_static_default_width * 6) / this.$store.getters.layout_node_graph_width),
                viewer_height: this.$store.getters.layout_node_graph_height * ((this.$store.getters.node_card_static_default_width * 6) / this.$store.getters.layout_node_graph_width),
                node_link_lines_config_list: [
                    // in_circle to adds
                    {points: ['30,30.5', '170,21'].join(' ')},
                    {points: ['30,35', '170,50.5'].join(' ')},
                    // adds to out_circle
                    {points: ['200.5,21.5', '210.5, 31'].join(' ')},
                    {points: ['200.5,51', '210.5, 35'].join(' ')},
                    // Angle to radian
                    {points: ['29,80.5', '35,81'].join(' ')},
                    // Radian to cos and sin
                    {points: ['71,81', '80.5,71'].join(' ')},
                    {points: ['71,81', '80.5,91'].join(' ')},
                    // cos sin to multiply
                    {points: ['110,71', '125.5,66'].join(' ')},
                    {points: ['110,90.5', '125.5,90.5'].join(' ')},
                    // multiply to adds
                    {points: ['155,66.5', '170.5,26'].join(' ')},
                    {points: ['155,91.5', '170.5,56'].join(' ')},
                    // velocity to multiply
                    {points: ['35.5,121', '110, 121', '125.5,70.5'].join(' ')},
                    {points: ['35.5,121', '110, 121', '125.5,96'].join(' ')},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .link-lines-g {
        .node-link-line {
            stroke-width: 0.7;
            stroke: $theme-color-accent-primary;
            fill: none
        }
    }

</style>