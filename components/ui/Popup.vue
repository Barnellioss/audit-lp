<script lang="ts" setup>
import { usePopupStore } from '~/store/popupStore';

const popupStore = usePopupStore();

const handleClick = () => {
    popupStore.set(false);
};

let formCompleted = false;


const nameRef = ref('');
const emailRef = ref('');
const phoneRef = ref('');
const webRef = ref('');
const infoRef = ref('');
/* @click="handleClick"*/


const errors = ref<{ [key: string]: string }>({});

const validateForm = () => {
    errors.value = {};

    // Validate name
    if (!nameRef.value.trim()) {
        errors.value.name = 'Meno je povinné.';
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRef.value.trim()) {
        errors.value.email = 'Email je povinný.';
    } else if (!emailPattern.test(emailRef.value)) {
        errors.value.email = 'Email má nesprávny formát.';
    }


    const phonePattern = /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/;
    if (!phoneRef.value.trim()) {
        errors.value.phone = 'Tel. číslo je povinné.';
    } else if (!phonePattern.test(phoneRef.value)) {
        errors.value.phone = 'Tel. číslo má nesprávny formát.';
    }


    const webPattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

    if (!webRef.value.trim()) {
        errors.value.web = 'Webstránka je povinná.';
    } else if (!webPattern.test(webRef.value.trim())) {
        errors.value.web = 'Neplatná webová adresa.';
    }


    if (!infoRef.value.trim()) {
        errors.value.info = 'Poznámka je povinná.';
    }


    return Object.keys(errors.value).length === 0;
};

const submitForm = () => {
    if (validateForm()) {

        formCompleted = true;
        console.log('Form submitted successfully.');
    } else {
        console.log('Form validation failed:', errors.value);
    }
};


</script>


<template>

    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <div class="fixed inset-0 z-10 w-screen overflow-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                <div
                    class="relative transform overflow-y-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left relative" v-if="formCompleted">
                            <button class="close-btn" @click="handleClick">
                                x
                            </button>
                            <UiTitle fontSize="30px" lineHeight="44px" fontWeight="900" maxWidth="75%"
                                margin="0 auto 15px">Formulár je uložený
                            </UiTitle>
                        </div>
                        <div class="sm:flex sm:items-start" v-else>
                            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left relative">
                                <button class="close-btn" @click="handleClick">
                                    x
                                </button>
                                <UiTitle fontSize="30px" lineHeight="44px" fontWeight="900" maxWidth="75%"
                                    margin="0 auto 15px">Jednoducho nám napíšte a my sa vám ozveme.
                                </UiTitle>
                                <form @submit.prevent="submitForm">
                                    <div class="flex flex-col">
                                        <label for="name"
                                            class="block  mt-3 font-black leading-6 text-gray-900 text-left pb-3">Meno:
                                            <span class="pink-text">*</span></label>
                                        <input placeholder="" type="name"
                                            class="block w-full py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            v-model="nameRef" />
                                        <span :class="[errors.info ? 'text-red-500' : 'text-white', 'mr-auto']">{{
                                            errors.name }}</span>
                                    </div>

                                    <div class="flex sm:flex-row flex-col">
                                        <div class="sm:w-1/2 w-full pr-2 flex flex-col">
                                            <label for="email"
                                                class="block font-black mt-3 leading-6 text-gray-900 text-left pb-3">Email:
                                                <span class="pink-text">*</span></label>
                                            <input placeholder="" type="email"
                                                class="block w-full py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                v-model="emailRef" />
                                            <span :class="[errors.info ? 'text-red-500' : 'text-white', 'mr-auto']">{{
                                                errors.email }}</span>
                                        </div>

                                        <div class="sm:w-1/2 w-full pl-2 flex flex-col">
                                            <label for="tel"
                                                class="block mt-3 font-black leading-6 text-gray-900 text-left pb-3">Tel.
                                                čislo: <span class="pink-text">*</span></label>
                                            <input placeholder="" type="tel"
                                                class="block w-full py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                v-model="phoneRef" />
                                            <span :class="[errors.info ? 'text-red-500' : 'text-white', 'mr-auto']">{{
                                                errors.phone }}</span>
                                        </div>

                                    </div>


                                    <div class="flex flex-col">
                                        <label for="web"
                                            class="block mt-3 font-black leading-6 text-gray-900 text-left pb-3">Webstránka:
                                            <span class="pink-text">*</span></label>
                                        <input placeholder="" type="web"
                                            class="block w-full py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            v-model="webRef" />
                                        <span :class="[errors.info ? 'text-red-500' : 'text-white', 'mr-auto']">{{
                                            errors.web }}</span>
                                    </div>

                                    <div class="flex flex-col">
                                        <label for="price"
                                            class="block mt-3 font-black leading-6 text-gray-900 text-left pb-3">Poznámka:
                                            <span class="pink-text">*</span></label>
                                        <textarea placeholder="Je niečo čo by ste sa nás chceli spýtat?" type="name"
                                            class="block w-full  py-3 pl-3 pr-20 h-32 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            v-model="infoRef"></textarea>
                                        <span :class="[errors.info ? 'text-red-500' : 'text-white', 'mr-auto']">{{
                                            errors.info }}</span>
                                    </div>

                                    <div class="flex items-center justify-center gap-5 mt-8">
                                        <UiButton type="button" width="100%" fontSize="20px" lineHeight="72px"
                                            @click="submitForm">
                                            Login
                                        </UiButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
label {
    font-size: 1rem;
}

input,
textarea {
    background: #EFEFEF;
    border-radius: 5px;
    font-size: 1rem;
    line-height: 2.5rem;
}

.pink-text {
    color: #EE325C;
    font-weight: 900;
    font-size: 1.25rem;
    display: inline-block;
    vertical-align: middle;
}

.close-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 1rem;
    position: absolute;
    right: 0px;
    padding-bottom: 4px;
    font-weight: 700;
    top: -35px;
    background: #EE325C;
}
</style>