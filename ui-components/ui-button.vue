<template>
    <button class="ui-button">
        <slot></slot>
    </button>
</template>

<script setup>

</script>

<style scoped lang="scss">
.ui-button {
    display: flex;
    justify-content: center;
    align-items: center;
    // background: #f5f5f5;
    padding: 7px 12px;
    border: none;
    font-size: 16px;
    transition: all 0.3s;
    text-decoration: none;
    background-color: rgba(56, 121, 241, 0.274);
    user-select: none;
    color: #000;
    cursor: pointer;
    max-height: 30px;
    -webkit-box-shadow: 0px 0px 100px -31px rgba(34, 60, 80, 0.274);
    -moz-box-shadow: 0px 0px 100px -31px rgba(34, 60, 80, 0.356);
    box-shadow: 0px 0px 100px -31px rgba(34, 60, 80, 0.288);
    border-radius: 3px;


    &:hover {
        background-color: rgba(65, 93, 146, 0.274);
    }
}
</style>