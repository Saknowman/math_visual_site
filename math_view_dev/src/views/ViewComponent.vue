<template>
    <div>
        <base-input-with-label></base-input-with-label>
    </div>
</template>

<script>
    import RangeInputWithLabel from "../components/molecules/forms/RangeInputWithLabel";

    export default {
        name: "ViewComponent",
        components: {
            'base-input-with-label': RangeInputWithLabel
        }
    }
</script>

<style scoped>

</style>