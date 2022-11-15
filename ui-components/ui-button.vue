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
    background: #f5f5f5;
    padding: 7px 12px;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    transition: all 0.3s;
    text-decoration: none;
    user-select: none;
    color: #000;
    cursor: pointer;
    max-height: 30px;

    &:hover {
        background-color: #d6d6d6;
    }
}
</style>