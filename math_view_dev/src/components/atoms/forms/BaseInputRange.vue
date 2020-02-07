<template>
    <div class="input-container">
        <base-input class="base-input" type="range" v-model="value"></base-input>
        {{ value }}
    </div>
</template>

<script>
    import BaseInput from "./BaseInput";

    export default {
        name: "BaseInputRange",
        components: {
            'base-input': BaseInput
        },
        data: () => {
            return {
                value: 0
            }
        }

    }
</script>

<style lang="scss" scoped>
    .input-container {
        width: 100%;

        .base-input {
            width: 100%;
        }
    }

</style>