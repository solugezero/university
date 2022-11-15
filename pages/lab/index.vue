<template>
<div class="referats">
    <div class="content-box">
        <OrganismsCreateForm>
            <template v-slot:activeButton>
                <ui-button>Добавить работу</ui-button>
            </template>
        </OrganismsCreateForm>
        <div class="referats_wrapper">
            <p class="referats_wrapper__title">Список лаб</p>
            <div class="referats_wrapper_list">
            </div>
        </div>
    </div>
</div>
</template>

  
<script setup>
let data = ref({
    referats: [{
        author: '',
        description: '',
        datePublication: ''
    }]
})
</script>

  
<style lang="scss" scoped>
.referats {
    display: flex;
    width: 100%;
    height: auto;
    // background: rgba(255, 0, 0, 0.281);
    flex-direction: column;

    .content-box {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &_wrapper {
        display: flex;
        width: 100%;
        height: 300px;
        // background: rgba(0, 128, 0, 0.418);

        &__title {
            font-size: 20px;
            font-weight: 700;
            color: #000;
        }
    }
}
</style>
