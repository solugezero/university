<template>
<div>
    <div class="create-form_activeSlot" @click="toggleActive">
        <slot name="activeButton"></slot>
    </div>
    <div class="create-form" v-if="isActive">
        <div class="create-form_inner" ref="formInner">
            <div class="create-form_inner_top">
                <div class="create-form_inner_top__title">Добавить работу</div>
                <div class="create-form_inner_top__close-btn" @click="toggleActive">X</div>
            </div>
            <div class="create-form_inner_content">
                <ui-input v-model="stateInput.author" title="ФИО"></ui-input>
                <ui-input v-model="stateInput.group" title="Группа"></ui-input>
                <ui-input textarea v-model="stateInput.description" title="Описание" height="300px"></ui-input>
                <!-- <ui-input v-model="stateInput.type" title="Вид работы" placeholder="Презентация/курс/реферат/лаб. работа"></ui-input> -->
                <ui-select v-model="stateInput.type" style="max-width: 50%;"></ui-select>
            </div>
            <div class="create-form_inner_bottom">
                <FileUpload name="demo[]" :customUpload="true" @uploader="myUploader" />
                <ui-button @click="handleSend">Добавить</ui-button>
            </div>
        </div>
    </div>
</div>

<!-- Презентации и курсы, рефераты, лабараторные работы, ...-->
</template>

<script setup>
import {
    onClickOutside
} from '@vueuse/core'
let isActive = ref(false)
let formInner = ref(null)
let stateInput = ref({})
const toggleActive = () => {
    isActive.value = !isActive.value
}
onClickOutside(formInner, () => isActive.value = false)

const myUploader = (event) => {
    stateInput.value['uploads'] = event
}
const handleSend = () => {
    // send to backend
    console.log(stateInput.value)
    stateInput.value = {}
}
</script>

<style lang="scss" scoped>
.create-form {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(85, 85, 85, 0.242);

    &_inner {
        // border-radius: 12px;
        padding: 30px;
        display: flex;
        width: 80%;
        height: 80%;
        background: rgba(182, 182, 182, 0.452);
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 10px );
        -webkit-backdrop-filter: blur( 3px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        flex-direction: column;
        gap: 30px;
        overflow: auto;

        &_content {
            display: flex;
            flex-direction: column;
            gap: 50px;
        }

        &_top {
            display: flex;
            width: 100%;
            height: auto;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            &__title {
                font-size: 20px;
                font-weight: 700;
            }

            &__close-btn {
                cursor: pointer;
                user-select: none;
                font-weight: 700;
                font-size: 20px;
            }
        }

        &_bottom {
            display: flex;
            width: 100%;
            height: auto;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
        }
    }
}
</style>
