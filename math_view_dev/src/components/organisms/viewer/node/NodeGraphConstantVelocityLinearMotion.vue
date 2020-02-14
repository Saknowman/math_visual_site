<template>
    <div>
        <svg :viewBox="[0, 0, viewer_width, viewer_height].join(',')"
             style="background: #eee">
            <g class="nodes-g">
                <node-card-in-out
                        v-for="(node_config, index) in node_config_list"
                        :key="index"
                        :title="node_config.title"
                        :pos_x="node_config.pos.x"
                        :pos_y="node_config.pos.y"
                        :in_attributes="node_config.in_attributes"
                        :out_attributes="node_config.out_attributes"
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
                        ]
                    },
                    {
                        title: 'Circle',
                        pos: {x: 210, y: 20},
                        in_attributes: [
                            {label: 'X', type: 'float'},
                            {label: 'Y', type: 'float'},
                        ],
                        out_attributes: []
                    },
                    {
                        title: 'Velocity',
                        pos: {x: 10, y: 110},
                        in_attributes: [],
                        out_attributes: [
                            {label: 'value', type: 'int'},
                        ]
                    },

                    // Angle to Radian
                    {
                        title: 'Angle',
                        pos: {x: 10, y: 70},
                        in_attributes: [],
                        out_attributes: [
                            {label: 'value', type: 'int'},
                        ]
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
                        pos: {x: 70, y: 60},
                        in_attributes: [
                            {label: 'radian', type: 'float'}
                        ],
                        out_attributes: [
                            {label: 'res', type: 'float'},
                        ],
                    },
                    {
                        title: 'Sin',
                        pos: {x: 70, y: 80},
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
                        pos: {x: 120, y: 55},
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
                        pos: {x: 120, y: 80},
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
                    { points: ['30,29', '170,19.5'].join(' ')},
                    { points: ['30,33', '170,49'].join(' ')},
                    // adds to out_circle
                    { points: ['193,19.5', '210, 29'].join(' ')},
                    { points: ['193,49', '210, 33'].join(' ')},
                    // Angle to radian
                    { points: ['27,79.5', '35,79.5'].join(' ')},
                    // Angle to cos and sin
                    { points: ['63,79.5', '70,69.5'].join(' ')},
                    { points: ['63,79.5', '70,89'].join(' ')},
                    // cos sin to multiply
                    { points: ['92,69.5', '120,64.5'].join(' ')},
                    { points: ['92,89', '120,89'].join(' ')},
                    // multiply to adds
                    { points: ['145,64.5', '170,24'].join(' ')},
                    { points: ['145,89.5', '170,54'].join(' ')},
                    // velocity to multiply
                    { points: ['35.5,119', '90, 119', '120,68.5'].join(' ')},
                    { points: ['35.5,119', '90, 119', '120,94'].join(' ')},

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