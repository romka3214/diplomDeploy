<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import {Head, router, useForm, Link} from '@inertiajs/vue3';
import {onMounted} from 'vue'
import {initFlowbite} from 'flowbite'

import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

const props = defineProps({
    establishment: {
        required: true,
    },
    users: {
        required: true,
    },
});


onMounted(() => {
    initFlowbite();
})

const form = useForm({
    name: props.establishment.name,
    description: props.establishment.description,
    address: props.establishment.address,
    id: props.establishment.id,
    user: props.establishment.user.id
})

const submit = () =>{
    form.post(route('admin.establishment.edit'),{
        preserveState: true,
        preserveScroll: true,
    })
}

</script>

<template>
    <Head title="Изменение"/>

    <AdminLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-neutral-800 dark:text-neutral-200 leading-tight">Изменение информации заведения</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-neutral-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                    <Link :href="route('admin')" class="inline-flex focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-neutral-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Назад</Link>

                    <form @submit.prevent="submit" class="space-y-6">
                        <div>
                            <InputLabel for="name" value="Название" />

                            <TextInput
                                id="name"
                                type="text"
                                class="mt-1 block w-full"
                                v-model="form.name"
                            />

                            <InputError class="mt-2" :message="form.errors.name" />
                        </div>

                        <div>
                            <InputLabel for="description" value="Описание" />

                            <TextInput
                                id="description"
                                type="text"
                                class="mt-1 block w-full"
                                v-model="form.description"
                            />

                            <InputError class="mt-2" :message="form.errors.description" />
                        </div>
                        <div>
                            <InputLabel for="address" value="Адрес" />

                            <TextInput
                                id="address"
                                type="text"
                                class="mt-1 block w-full"
                                v-model="form.address"
                            />

                            <InputError class="mt-2" :message="form.errors.address" />
                        </div>
                        <div>
                        <InputLabel value="Владелец" />
                        <select v-model="form.user" class="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-900 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-neutral-500 dark:focus:border-neutral-500">
                                <option v-for="user in users" :value="user.id">{{ user.name }}</option>

                        </select>
                            <InputError class="mt-2" :message="form.errors.user" />
                        </div>

                        <div class="flex items-center gap-4">
                            <PrimaryButton :disabled="form.processing">Сохранить</PrimaryButton>

                            <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" class="transition ease-in-out">
                                <p v-if="form.recentlySuccessful" class="text-sm text-gray-600 dark:text-gray-400">Успешно.</p>
                            </Transition>
                        </div>
                    </form>

                </div>


            </div>
        </div>
    </AdminLayout>
</template>
