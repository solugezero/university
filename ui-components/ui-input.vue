<template>
    <div class="ui-input_wrapper">
        <div class="ui-input_wrapper__title">{{props.title}}</div>
        <input v-if="!props.textarea" :style="getStyle" v-model="state" :placeholder="props?.placeholder" type="text" class="ui-input">
        <textarea v-else class="ui-input" :style="getStyle" v-model="state"></textarea>
    </div>
</template>

<script setup>
let state = ref('')
const emit = defineEmits(["update:modelValue"])
const props = defineProps({
    placeholder: {
        type: String
    },
    title: {
        type: String,
        default: 'Title of input'
    },
    height: {
        type: String,
        default: '50px'
    },
    textarea: {
        type: Boolean,
    }
})

const getStyle = computed(() => {
    const {height} = props;
    return {
        'height': height
    }
})

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
    border-radius: 12px;
    color: #000;
    padding: 2px 12px;
    align-items: flex-start;
    display: flex;

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