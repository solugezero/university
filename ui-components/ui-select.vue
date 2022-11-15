<template>
    <div class="ui-select" @click="toggleActive" ref="selectRef">
        <p class="ui-select__title">Вид работы</p>
        <div class="ui-select_holder">
            <p class="ui-select_holder__item">{{activeItem.text}}</p>
            <p class="ui-select_holder__button" :style="getActiveStyle">></p>
        </div>
        <div class="ui-select_wrapper-items" v-if="isActive" @click.stop>
            <div @click="handleSelect(item)" v-for="(item, index) in props.options" :key="`ui-select_wrapper-items__item__${index}`" class="ui-select_wrapper-items__item">{{item.text}}</div>
        </div>
    </div>
</template>

<script setup>
import {
    onClickOutside
} from '@vueuse/core'
let isActive = ref(false)
let selectRef = ref()
let activeItem = ref({text: 'Выберите тип работы'})
const emit = defineEmits(["update:modelValue"])
const props = defineProps({
    options: {
        type: Object,
        default: [
            {text: 'Презентация', id: 'presentation'},
            {text: 'Лабораторная работа', id: 'lab'},
            {text: 'Реферат', id: 'referat'},
            {text: 'Курс', id: 'course'},
        ]
    }
})
onClickOutside(selectRef, () => isActive.value = false)
const toggleActive = () => {
    isActive.value = !isActive.value
}
const handleSelect = (item) => {
    activeItem.value = item
    isActive.value = false
    emit("update:modelValue", activeItem.value)
}



const getActiveStyle = computed(() => {
    return isActive.value ? 'transform: rotate(90deg)' : 'transform: rotate(0deg)'
})

</script>

<style scoped lang="scss">
.ui-select {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;

    &__title {
            color: #fff;
            font-size: 16px;
            font-weight: 700;
    }

    &_holder {
        background-color: #f5f5f5;
        border: none;
        width: 100%;
        height: 50px;
        border-radius: 12px;
        padding: 0px 12px;
        align-items: center;
        display: flex;
        justify-content: space-between;
        
        &__item, &__button {
            color: #000;
        }

        &__button {
            transition: transform 0.3s;
        }
    }

    &_wrapper-items {
        display: flex;
        position: absolute;
        top: 85px;
        flex-direction: column;
        background-color: #F5F5F5;
        width: 100%;
        gap: 5px;
        border-radius: 12px;
        z-index: 100;
        padding: 5px;
        
        &__item {
            color: #000;
            background: #F5F5F5;
            border-radius: 12px;
            padding: 5px 12px;
            cursor: pointer;
            &:hover {
                background: rgb(238, 238, 238);
            }
        }
    }
}
</style>