<template>
    <div class="ui-input_wrapper">
        <div class="ui-input_wrapper__title">{{props.title}}</div>
        <input v-model="state" :placeholder="props?.placeholder" type="text" class="ui-input">
    </div>
</template>

<script setup>
const emit = defineEmits(["update:modelValue"])
const props = defineProps({
    placeholder: {
        type: String
    },
    title: {
        type: String,
        default: 'Title of input'
    }
})
let state = ref('')
watch(
  () => state.value,
  (newValue, oldValue) => {
    emit("update:modelValue", state.value)
  },
  { deep: true }
)
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