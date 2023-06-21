<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import { Head } from '@inertiajs/vue3';
import { Link } from '@inertiajs/vue3';

defineProps({
    establishments: {
        required: true,
    },
});
</script>

<template>
    <Head title="Все заведения" />

    <AdminLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-neutral-800 dark:text-neutral-200 leading-tight">Заведения</h2>
        </template>


        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Link :href="route('admin.establishment.createIndex')" class="inline-flex focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Создать заведение</Link>
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
                                    Адрес
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Владелец
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Действия
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="establishment in establishments" class="bg-white border-b dark:bg-neutral-800 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-600">

                                <td class="px-6 py-4">
                                    {{ establishment.id }}
                                </td>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {{ establishment.name }}
                                </th>
                                <td class="px-6 py-4">
                                    {{ establishment.description.substring(0, 30) }}...
                                </td>
                                <td class="px-6 py-4">
                                    {{ establishment.address }}
                                </td>
                                <td class="px-6 py-4">
                                    <div v-if="establishment.user">
                                        {{ establishment.user.name }}
                                    </div>
                                </td>

                                <td class="flex items-center px-6 py-4 space-x-3">
                                    <Link :href="route('admin.establishment.index', establishment.id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Изменить</Link>
                                    <Link preserve-scroll method="delete" :href="route('admin.establishment.delete', establishment.id)" class="font-medium text-red-600 dark:text-red-500 hover:underline">Удалить</Link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    </AdminLayout>
</template>
