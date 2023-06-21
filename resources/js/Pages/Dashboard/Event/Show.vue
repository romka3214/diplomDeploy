<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {Head, router, useForm, Link} from '@inertiajs/vue3';
import {onMounted, ref} from 'vue'
import {initFlowbite} from 'flowbite'




const props = defineProps({
    event: {
        required: true,
    },
});


const newPhotoForm = useForm({
    newPhoto: null,
    id: props.event.id,
})

function uploadPhoto(e){
    newPhotoForm.newPhoto = e.target.files[0];

    newPhotoForm.post(route('dashboard.event.addPhoto'), {
        preserveState: true,
        preserveScroll: true,
    });
}

function deletePhoto(id){
    router.delete(route('dashboard.event.deletePhoto', id), {
        preserveState: true,
        preserveScroll: true,
    });
}


onMounted(() => {
    initFlowbite();
})

const form = useForm({
    name: props.event.name,
    description: props.event.description,
    price: props.event.price,
    date_start:props.event.date_start,
    date_end:props.event.date_end,
})

const submit = () =>{
    form.post(route('dashboard.event.edit'),{
        preserveState: true,
        preserveScroll: true,
    })
}
const back = () => {
    window.history.back();
}
</script>

<template>
    <Head title="Событие"/>

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-neutral-800 dark:text-neutral-200 leading-tight">Событие</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-neutral-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                    <button @click="back" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-neutral-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Назад</button>
                    <Link :href="route('dashboard.event.edit.index', event.id)"
                          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        Изменить информацию о событии
                    </Link>
                    <div class="text-neutral-900 dark:text-neutral-100 mt-3 mb-1">
                        <span class="text-neutral-500">Название: </span>{{ event.name }}
                    </div>
                    <div class="text-neutral-900 dark:text-neutral-100 mb-1">
                        <span class="text-neutral-500">Описание: </span>{{ event.description }}
                    </div>
                    <div class="text-neutral-900 dark:text-neutral-100 mb-1">
                        <span class="text-neutral-500">Цена: </span> {{ event.price }}
                    </div>
                    <div class="text-neutral-900 dark:text-neutral-100 mb-1">
                        <span class="text-neutral-500">Дата начала: </span>{{ event.date_start }}
                    </div>
                    <div class="text-neutral-900 dark:text-neutral-100 mb-1">
                        <span class="text-neutral-500">Дата окончания: </span>{{ event.date_end }}
                    </div>
                    <div class="text-xl text-neutral-900 dark:text-neutral-100 mt-3 mb-3">
                        Фото события
                    </div>


                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div v-for="photo in event.photos" class="relative">
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

                        <div v-if="newPhotoForm.errors.newPhoto" class="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
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
                </div>


            </div>
        </div>
    </AuthenticatedLayout>
</template>
