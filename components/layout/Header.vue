<script lang="ts" setup>
import { usePopupStore } from '~/store/popupStore';
import { HEADER_DATA } from '../../data/menu.data';


const popupStore = usePopupStore();

const popupHandler = (flag: boolean) => {
    popupStore.set(flag);
}

</script>

<template>
    <div class="xl:max-w-1230 md:max-w-3xl sm:max-w-xl max-w-md"
        style="padding: 0 15px; width: 100%; margin: 0 auto; min-height: 100vh; display: flex; flex-direction: column;">
        <div class="flex justify-between align-middle my-12 ">
            <NuxtImg src="/smallLogo.png" class="logo-img" />
                <UiButton lineHeight="42px" fontSize="14px" @click="popupHandler">Mám záujem o UX audit</UiButton>
        </div>
        <h1 class="title "> {{ HEADER_DATA.title }}</h1>
    </div>
</template>

<style scoped>
.btn {
    color: #fff;
    font-weight: 900;
    font-size: 14px;
    line-height: 28px;
    border-radius: 0.5rem;
}

.logo-img {
    width: 145px;
}

.title {
    color: #fff;
    font-size: 3rem;
    text-align: center;
    font-weight: 900;
    max-width: 700px;
    margin: auto;
    transform: translate(0%, -50%);
    line-height: 80px;

}

@media screen and (max-width: 1200px) {
    .title {
        font-size: 2.5rem;
        line-height: 60px;
    }
}

@media screen and (max-width: 480px) {
    .logo-img {
        width: 100px;
    }
    .title {
        font-size: 2rem;
        line-height: 48px;
    }
}
</style>