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
                        :in_attributes="node_config.in_attributes"
                        :out_attributes="node_config.out_attributes"
                        :node_type="node_config.node_type"
                ></node-card-in-out>
            </g>

            <g class="link-lines-g">
                <polyline class="node-link-line"
                      v-for="(config, index) in node_link_lines_config_list"
                      :key="index"
                      :points="config.points"
                ></polyline>
            </g>
        </svg>
    </div>
</template>

<script>
    import NodeCardInOut from "../../../molecules/node/NodeCardInOut";

    export default {
        name: "NodeGraphConstantVelocityLinearMotion",
        components: {
            'node-card-in-out': NodeCardInOut
        },
        data() {
            return {
                node_config_list: [
                    {
                        title: 'Circle',
                        pos: {x: 10, y: 20},
                        in_attributes: [],
                        out_attributes: [
                            {label: 'X', type: 'float'},
                            {label: 'Y', type: 'float'},
                        ],
                        node_type: 'input'
                    },
                    {
                        title: 'Circle',
                        pos: {x: 210, y: 20},
                        in_attributes: [
                            {label: 'X', type: 'float'},
                            {label: 'Y', type: 'float'},
                        ],
                        out_attributes: [],
                        node_type: 'output'
                    },
                    {
                        title: 'Velocity',
                        pos: {x: 10, y: 110},
                        in_attributes: [],
                        out_attributes: [
                            {label: 'value', type: 'int'},
                        ],
                        node_type: 'input'
                    },

                    // Angle to Radian
                    {
                        title: 'Angle',
                        pos: {x: 10, y: 70},
                        in_attributes: [],
                        out_attributes: [
                            {label: 'value', type: 'int'},
                        ],
                        node_type: 'input'
                    },
                    {
                        title: 'To Radian',
                        pos: {x: 35, y: 70},
                        in_attributes: [
                            {label: 'angle', type: 'float'}
                        ],
                        out_attributes: [
                            {label: 'radian', type: 'float'},
                        ]
                    },

                    // Radian to cos and sin
                    {
                        title: 'Cos',
                        pos: {x: 80, y: 60},
                        in_attributes: [
                            {label: 'radian', type: 'float'}
                        ],
                        out_attributes: [
                            {label: 'res', type: 'float'},
                        ],
                    },
                    {
                        title: 'Sin',
                        pos: {x: 80, y: 80},
                        in_attributes: [
                            {label: 'radian', type: 'float'}
                        ],
                        out_attributes: [
                            {label: 'res', type: 'float'},
                        ],
                    },

                    // Calc X and Y Velocity
                    {
                        title: 'Multiply',
                        pos: {x: 125, y: 55},
                        in_attributes: [
                            {label: 'value1', type: 'float'},
                            {label: 'value2', type: 'float'}
                        ],
                        out_attributes: [
                            {label: 'res', type: 'float'},
                        ],
                    },
                    {
                        title: 'Multiply',
                        pos: {x: 125, y: 80},
                        in_attributes: [
                            {label: 'value1', type: 'float'},
                            {label: 'value2', type: 'float'}
                        ],
                        out_attributes: [
                            {label: 'res', type: 'float'},
                        ],
                    },


                    // Calc next x and y pos
                    {
                        title: 'Add',
                        pos: {x: 170, y: 10},
                        in_attributes: [
                            {label: 'value1', type: 'float'},
                            {label: 'value2', type: 'float'}
                        ],
                        out_attributes: [
                            {label: 'res', type: 'float'},
                        ],
                    },
                    {
                        title: 'Add',
                        pos: {x: 170, y: 40},
                        in_attributes: [
                            {label: 'value1', type: 'float'},
                            {label: 'value2', type: 'float'}
                        ],
                        out_attributes: [
                            {label: 'res', type: 'float'},
                        ],
                    },
                ],
                viewer_width: this.$store.getters.layout_node_graph_width * ((this.$store.getters.node_card_static_default_width * 6) / this.$store.getters.layout_node_graph_width),
                viewer_height: this.$store.getters.layout_node_graph_height * ((this.$store.getters.node_card_static_default_width * 6) / this.$store.getters.layout_node_graph_width),
                node_link_lines_config_list: [
                    // in_circle to adds
                    { points: ['30,30.5', '170,21'].join(' ')},
                    { points: ['30,35', '170,50.5'].join(' ')},
                    // adds to out_circle
                    { points: ['200.5,21.5', '210.5, 31'].join(' ')},
                    { points: ['200.5,51', '210.5, 35'].join(' ')},
                    // Angle to radian
                    { points: ['29,80.5', '35,81'].join(' ')},
                    // Radian to cos and sin
                    { points: ['71,81', '80.5,71'].join(' ')},
                    { points: ['71,81', '80.5,91'].join(' ')},
                    // cos sin to multiply
                    { points: ['110,71', '125.5,66'].join(' ')},
                    { points: ['110,90.5', '125.5,90.5'].join(' ')},
                    // multiply to adds
                    { points: ['155,66.5', '170.5,26'].join(' ')},
                    { points: ['155,91.5', '170.5,56'].join(' ')},
                    // velocity to multiply
                    { points: ['35.5,121', '110, 121', '125.5,70.5'].join(' ')},
                    { points: ['35.5,121', '110, 121', '125.5,96'].join(' ')},
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