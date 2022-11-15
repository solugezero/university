<template>
    <div class="ui-input_wrapper">
        <div class="ui-input_wrapper__title">{{props.title}}</div>
        <input :placeholder="props?.placeholder" type="text" class="ui-input">
    </div>
</template>

<script setup>
const props = defineProps({
    placeholder: {
        type: String
    },
    title: {
        type: String,
        default: 'Title of input'
    }
})
</script>

<style scoped lang="scss">
.ui-input {
    background-color: #f5f5f5;
    border: none;
    width: 100%;
    height: 50px;
    border-radius: 12px;
    color: #000;
    padding: 0px 12px;

    &_wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;

        &__title {
            color: #fff;
            font-size: 16px;
            font-weight: 700;
        }
    }
}
</style>