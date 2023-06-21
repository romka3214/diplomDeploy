<script setup>
import { Link } from '@inertiajs/vue3';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import 'flowbite';
import {onMounted, ref} from "vue";
import {initFlowbite} from "flowbite";

import InputError from '@/Components/InputError.vue';
import Modal from '@/Components/Modal.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm } from '@inertiajs/vue3';


const confirmingUserDeletion = ref(false);


const form = useForm({
    name: '',
    text: '',
});

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;
};

const addRequest = () => {
    form.post(route('profile.createRequest'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    confirmingUserDeletion.value = false;
    form.reset();
};

onMounted(() => {
    initFlowbite();
})
</script>


<template>

    <nav class="sticky top-0 z-30 bg-neutral-900 bg-opacity-50 backdrop-blur backdrop-filter firefox:bg-opacity-90">
        <div class="container flex flex-wrap items-center justify-between mx-auto p-4 md:p-2">
            <Link :href="route('home')" class="flex items-center">
                <ApplicationLogo class="fill-current h-10 md:h-14 mr-3 text-black-500 dark:fill-white" />
            </Link>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-medium flex flex-col p-2 md:p-0 mt-4 border border-gray-100 rounded-lg bg-neutral-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-neutral-800 md:dark:bg-transparent dark:border-neutral-700">
                    <li>
                        <Link :href="route('establishments')" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-red-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Заведения</Link>
                    </li>
                    <li>
                        <Link :href="route('recommendations')" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-red-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Рекомендации</Link>
                    </li>
                    <li v-if="$page.props.auth.user.role === 2">
                        <Link :href="route('admin')" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-red-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Админ панель</Link>
                    </li>
                    <li v-if="$page.props.auth.user.role === 0">
                        <Link :href="route('profileLK.show')" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-red-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Профиль</Link>
                    </li>
                    <li v-if="$page.props.auth.user.role === 1">
                        <Link :href="route('dashboard')" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-red-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Управление заведением</Link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>

    <div
        class="relative sm:flex sm:justify-center min-h-screen bg-white dark:bg-neutral-800 bg-center selection:bg-red-500 selection:text-white">
        <div class="container p-4">
            <slot />
        </div>
    </div>

    <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-neutral-900">
        <div class="mx-auto max-w-screen-xl text-center">
                <Link :href="route('home')" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                    <ApplicationLogo class="fill-current h-10 md:h-14 mr-3 text-black-500 dark:fill-white" />
                </Link>

            <p class="my-6 text-gray-500 dark:text-gray-400">Все события и заведения Уфы как на ладони</p>

            <button @click="confirmUserDeletion" type="button" class="mb-3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-neutral-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Добавить заведение</button>

            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">2023 <Link :href="route('home')" href="#" class="hover:underline">Enter.Ufa</Link></span>
        </div>
    </footer>

    <Modal :show="confirmingUserDeletion" @close="closeModal">
        <div class="p-6">
            <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
                Для добавления своего заведения на сайт заполните форму
            </h2>

            <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Ваша заявка будет рассмотрена администрацией сайта
            </p>

            <form @submit.prevent="addRequest">
                <div class="mt-6">
                    <TextInput
                        v-model="form.name"
                        type="text"
                        class="mt-1 block w-3/4"
                        placeholder="Название заведения"
                    />

                    <InputError :message="form.errors.name" class="mt-2" />
                </div>
                <div class="mt-6">
                    <TextInput
                        v-model="form.text"
                        type="text"
                        class="mt-1 block w-3/4"
                        placeholder="Текст заявки"
                    />

                    <InputError :message="form.errors.text" class="mt-2" />
                </div>

                <div class="mt-6 flex justify-end">
                    <SecondaryButton @click="closeModal"> Отмена </SecondaryButton>

                    <button
                        class="ml-3 inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-800 transition ease-in-out duration-150"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        type="submit"
                    >
                        Отправить
                    </button>
                </div>
            </form>

        </div>
    </Modal>
</template>
