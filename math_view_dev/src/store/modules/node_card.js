export default {
    state: {
        is_shown_node_help: false,
        node_help_content: null
    },
    mutations: {
        set_node_card_is_show_help(state, is) {
            state.is_shown_node_help = is;
        },
        set_node_help_content(state, help_content) {
            state.node_help_content = help_content;
        }
    },
    getters: {
        node_card_static_default_width: () => 40,
        node_card_title_height: () => 5,
        node_card_contents_side_padding: () => 1,
        node_card_contents_top_padding: () => 1,
        node_card_attribute_height: () => 4,
        node_card_attribute_each_space: () => 1,
        node_card_attribute_circle_radius: () => 1,
        node_card_help_formula_height: () => 5,
        node_card_attribute_types: () => {
            return {
                'int': {'color': '#00f'},
                'float': {'color': '#55f'},
                'vector2': {'color': '#0f0'}
            }
        },
        node_card_types: () => {
            return {
                'default': {'color': '#cacaca', 'text': '#000000'},
                'formula': {'color': '#333333', 'text': '#ccddee'},
                'input': {'color': '#ff9e5e', 'text': '#000000'},
                'output': {'color': '#ff878c', 'text': '#000000'},
                'help': {'color': '#ccffaa', 'text': '#000000'},
                'help_icon': {'color': '#ff7c10', 'text': '#ffffff'}
            }
        },
        node_content_type: () => {
            return {
                'add': {
                    in_attributes: [
                        {label: 'value1', type: 'float'},
                        {label: 'value2', type: 'float'}
                    ],
                    out_attributes: [
                        {label: 'res', type: 'float'},
                    ],
                    help: {
                        title: 'Add',
                        formula: ['res = value1 + value2']
                    }
                },
                'multiply': {
                    in_attributes: [
                        {label: 'value1', type: 'float'},
                        {label: 'value2', type: 'float'}
                    ],
                    out_attributes: [
                        {label: 'res', type: 'float'},
                    ],
                    help: {
                        title: 'Multiply',
                        formula: ['res = value1 * value2']
                    }
                },
                'sin': {
                    in_attributes: [
                        {label: 'radian', type: 'float'}
                    ],
                    out_attributes: [
                        {label: 'res', type: 'float'},
                    ],
                    help: {
                        title: 'Sin',
                        formula: ['res = sin(angle)']
                    }
                },
                'cos': {
                    in_attributes: [
                        {label: 'radian', type: 'float'}
                    ],
                    out_attributes: [
                        {label: 'res', type: 'float'},
                    ],
                    help: {
                        title: 'Cos',
                        formula: ['res = cos(angle)']
                    }
                },
                'to_radian': {
                    in_attributes: [
                        {label: 'angle', type: 'float'}
                    ],
                    out_attributes: [
                        {label: 'radian', type: 'float'},
                    ],
                    help: {
                        title: 'To Radian',
                        formula: ['radian = angle * (PI / 180)', 'nononon_isisis']
                    }
                }
            }
        }
    }
}