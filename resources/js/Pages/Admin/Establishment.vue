<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import {Head, router, useForm, Link} from '@inertiajs/vue3';
import {onMounted, ref} from 'vue'
import {initFlowbite} from 'flowbite'


import InputError from '@/Components/InputError.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import Modal from '@/Components/Modal.vue';

const modalState= ref(false);

const createTagModalForm = useForm({
    name: '',
})

const createNewTagSubmit = () =>{
    createTagModalForm.post(route('admin.createTag'),{
        preserveState: true,
        preserveScroll: true,
    })
}
const modalOpen = () => {
    modalState.value = true;
};
const modalClose = () => {
    modalState.value = false;
};
const props = defineProps({
    establishment: {
        required: true,
    },
    tags: {
        required: true,
    }
});

onMounted(() => {
    initFlowbite();
})

const newPhotoForm = useForm({
    newPhoto: null,
    id: props.establishment.id
})

function uploadPhoto(e){
    newPhotoForm.newPhoto = e.target.files[0];

    newPhotoForm.post(route('admin.establishment.addPhoto'), {
        preserveState: true,
        preserveScroll: true,
    });
}

function deletePhoto(id){
    router.delete(route('admin.establishment.deletePhoto', id), {
        preserveState: true,
        preserveScroll: true,
    });
}



const tagSearchForm = useForm({
    searchTags: '',
});

const checkedTags = ref([]);

const deleteTag = (id) => {
    router.delete(route('admin.establishment.deleteTag', {
            'estId': props.establishment.id, 'tagId': id
}), {
        preserveState: true,
        preserveScroll: true,
    });
}
const tagsAdd = () => {
    router.post(route('admin.establishment.addTags'), {
        'ids': checkedTags.value,
        'estId': props.establishment.id
    }, {
        preserveState: true,
        preserveScroll: true,
        onSuccess: () =>{
            checkedTags.value = [];
        }
    });
};

const tagsSearch = () => {
    tagSearchForm.get(route('admin.establishment.index', props.establishment.id), {
        preserveState: true,
        preserveScroll: true,
    });
};

</script>

<template>
    <Head title="Управление заведением"/>

    <AdminLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-neutral-800 dark:text-neutral-200 leading-tight">Управление
                заведением</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-neutral-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                    <Link :href="route('admin')" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-neutral-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Назад</Link>
                    <Link :href="route('admin.establishment.editIndex', props.establishment.id)"
                            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        Изменить информацию о заведении
                    </Link>
                    <div class="text-neutral-900 dark:text-neutral-100 mt-9 mb-1">
                        Название: {{ establishment.name }}
                    </div>
                    <div class="text-neutral-900 dark:text-neutral-100 mb-1">
                        Описание: {{ establishment.description }}
                    </div>
                    <div class="text-neutral-900 dark:text-neutral-100 mb-1">
                        Адресс: {{ establishment.address }}
                    </div>
                    <div class="text-neutral-900 dark:text-neutral-100 mb-1">
                        Владелец: {{ establishment.user.name }}
                    </div>



                    <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">Добавление тегов</h2>

                    <button id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch" class="mt-2 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-blue-300 dark:bg-neutral-600 dark:hover:bg-neutral-700" type="button">Добавить<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                    <button @click="modalOpen" type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 ml-2 dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-700 dark:border-gray-700">Создать новый тег</button>

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

                    <div class="text-2xl text-neutral-900 dark:text-neutral-100 mt-3 mb-3">
                        Теги заведения:
                    </div>
                    <div v-if="establishment.tags.length !== 0">
                        <div class="flex flex-wrap gap-2">
                        <span v-for="n in establishment.tags"
                              class="inline-flex items-center rounded-md gap-2 px-2 py-1 text-lg font-medium text-white bg-neutral-700 ring-1 ring-inset ring-neutral-100/10">
                            {{n.name }}
                            <button @click="deleteTag(n.id)" type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-1 py-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">                              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                                                                                                                                                                                                                                                                                                         xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                </svg></button></span>
                        </div>
                    </div>
                    <div v-else>
                        <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">тегов нет</h2>
                    </div>

                    <div class="text-2xl text-neutral-900 dark:text-neutral-100 mt-3 mb-3">
                        Фото заведения
                    </div>


                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div v-for="photo in establishment.photos" class="relative">
                            <img class="object-cover h-64 w-full rounded-lg" :src="'../../storage/' + photo.url" alt="">
                            <button @click="deletePhoto(photo.id)" type="button"
                                    class="absolute top-1 end-1 text-white bg-red-600 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-transparent dark:hover:text-red-800"
                                    data-modal-hide="defaultModal">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="relative">
                            <label for="file_input" class="cursor-pointer h-full w-full text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center flex justify-center items-center mr-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:focus:ring-green-800 dark:hover:bg-green-500">
                                <svg aria-hidden="true" class="w-10 h-10" fill="currentColor" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4.5v15m7.5-7.5h-15" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <span class="sr-only">Icon description</span>
                            </label>

                            <input ref="newPhotoFile" @change="uploadPhoto" hidden id="file_input" type="file">

                        </div>
                        <div v-if="newPhotoForm.errors.newPhoto" class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Info</span>
                            <div>
                                {{newPhotoForm.errors.newPhoto}}
                            </div>
                        </div>

                            <div v-if="newPhotoForm.progress" role="status">
                                <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>

                    </div>

                    <div class="text-2xl text-neutral-900 dark:text-neutral-100 mt-5 mb-3">
                        События
                    </div>
                    <Link :href="route('admin.event.create.index', establishment.id)" class="inline-flex focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Создать событие</Link>
                    <div class="bg-white dark:bg-neutral-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-neutral-700 dark:text-neutral-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        ID
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Название
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Описание
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Цена
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Дата начала
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Дата окончания
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Действия
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="event in establishment.events" class="bg-white border-b dark:bg-neutral-800 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-600">

                                    <td class="px-6 py-4">
                                        {{ event.id }}
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{ event.name }}
                                    </th>
                                    <td class="px-6 py-4">
                                        {{ event.description.substring(0, 30) }}...
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ event.price }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ event.date_start }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ event.date_end }}
                                    </td>
                                    <td class="flex items-center px-6 py-4 space-x-3">
                                        <Link :href="route('admin.event.show', {
                                            ids: [event.id, establishment.id]
                                        })" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Изменить</Link>
                                        <Link preserve-scroll method="delete" :href="route('admin.event.delete', event.id)" class="font-medium text-red-600 dark:text-red-500 hover:underline">Удалить</Link>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>


                </div>


            </div>
        </div>
        <Modal :show="modalState" @close="modalClose">
            <div class="p-6">
                <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Создание нового тега
                </h2>

                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Название тега должно быть уникальным
                </p>

                <form @submit.prevent="createNewTagSubmit">
                    <div class="mt-6">
                        <TextInput
                            v-model="createTagModalForm.name"
                            type="text"
                            class="mt-1 block w-3/4"
                            placeholder="Название"
                        />

                        <InputError :message="createTagModalForm.errors.name" class="mt-2" />
                    </div>
                    <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" class="transition ease-in-out">
                        <p v-if="createTagModalForm.recentlySuccessful" class="text-sm text-green-600 dark:text-green-400">Успешно создано</p>
                    </Transition>
                    <div class="mt-6 flex justify-end">
                        <SecondaryButton @click="modalClose"> Отмена </SecondaryButton>

                        <button
                            class="ml-3 inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-800 transition ease-in-out duration-150"
                            :class="{ 'opacity-25': createTagModalForm.processing }"
                            :disabled="createTagModalForm.processing"
                            type="submit"
                        >
                            Создать
                        </button>
                    </div>
                </form>

            </div>
        </Modal>
    </AdminLayout>
</template>
