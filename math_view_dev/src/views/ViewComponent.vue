<template>
    <div style="width: 250px;">
        <range-input-with-label></range-input-with-label>
    </div>
</template>

<script>
    import RangeInputWithLabel from "../components/molecules/forms/RangeInputWithLabel";

    export default {
        name: "ViewComponent",
        components: {
            'range-input-with-label': RangeInputWithLabel
        }
    }
</script>

<style scoped>

</style>