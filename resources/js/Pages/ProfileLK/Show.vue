<script setup>
import {Head, Link,router, useForm} from '@inertiajs/vue3';
import DeleteUserForm from '@/Pages/Profile/Partials/DeleteUserForm.vue';
import SectionBorder from '@/Components/SectionBorder.vue';
import UpdatePasswordForm from '@/Pages/Profile/Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from '@/Pages/Profile/Partials/UpdateProfileInformationForm.vue';
import MainLayout from '@/Layouts/MainLayout.vue';
import {onMounted, ref} from 'vue'
import { initFlowbite } from 'flowbite'

defineProps({
    status: {
        required: true,
    },
    tags: {
        required: true,
    },
    userTags: {
    }
});
onMounted(() => {
    initFlowbite();
})

const tagSearchForm = useForm({
    searchTags: '',
});

const checkedTags = ref([]);

const deleteTag = (id) => {
    router.delete(route('profileLK.deleteTag', id), {
        preserveState: true,
        preserveScroll: true,
    });
}
const tagsSearch = () => {
    tagSearchForm.get(route('profileLK.show'), {
        preserveState: true,
        preserveScroll: true,
    });
};
const tagsAdd = () => {
    router.post(route('profileLK.addTags'), {
        'ids': checkedTags.value
    }, {
        preserveState: true,
        preserveScroll: true,
        onSuccess: () =>{
            checkedTags.value = [];
        }
    });
};

</script>

<template>
    <Head :title="Профиль"/>

    <MainLayout>
        <h1 class="flex gap-2 flex-wrap items-center mt-5 mb-14 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Ваш профиль
            <span
                class="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-white">{{ $page.props.auth.user.name }}</span>
            <Link class="inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-800 transition ease-in-out duration-150" :href="route('logout')"  method="post" as="button">
                Выйти
            </Link>
        </h1>


        <div>
            <div class="max-w-3xl">
                <div>

                        <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">Управление любимыми тегами</h2>

                    <button id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch" class="mt-2 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-blue-300 dark:bg-neutral-600 dark:hover:bg-neutral-700" type="button">Добавить<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                    <!-- Dropdown menu -->
                    <div id="dropdownSearch" class="hidden z-10 bg-white rounded-lg shadow w-60 dark:bg-neutral-700">
                        <div class="p-3">
                            <label for="input-group-search" class="sr-only">Поиск</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                </div>
                                <input @input="tagsSearch" v-model="tagSearchForm.searchTags" type="text" id="input-group-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-neutral-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Поиск тегов">
                            </div>
                        </div>
                        <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
                            <li v-for="tag in tags">
                                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input :id="'checkbox-item-' + tag.id" type="checkbox" :value=tag.id v-model="checkedTags"  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label :for="'checkbox-item-' + tag.id" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">{{ tag.name }}</label>
                                </div>
                            </li>
                        </ul>
                        <a @click="tagsAdd" class="flex items-center p-3 text-sm font-medium text-red-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-neutral-700 dark:hover:bg-gray-600 dark:text-red-100 hover:underline">
                            Добавить
                        </a>
                    </div>

                    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">Ваши любимые теги:</p>
                    <div v-if="userTags.length !== 0">
                        <div class="flex flex-wrap gap-2">
                        <span v-for="n in userTags"
                              class="inline-flex items-center rounded-md gap-2 px-2 py-1 text-lg font-medium text-white bg-neutral-700 ring-1 ring-inset ring-neutral-100/10">{{
                                n.name
                            }}<button @click="deleteTag(n.id)" type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-1 py-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">                              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                                                                                                                                                                                                                                                                                                         xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                </svg></button></span>
                        </div>
                    </div>
                    <div v-else>
                        <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">Вы не выбрали ни одного тега!</h2>
                    </div>
                    <SectionBorder/>
                </div>
                <div>
                    <UpdateProfileInformationForm :user="$page.props.auth.user"/>

                    <SectionBorder/>
                </div>

                <div>
                    <UpdatePasswordForm class="mt-10 sm:mt-0"/>

                    <SectionBorder/>
                </div>


                <DeleteUserForm class="mt-10 sm:mt-0"/>

            </div>
        </div>
    </MainLayout>
</template>
