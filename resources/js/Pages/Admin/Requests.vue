<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import {Head, router, Link} from '@inertiajs/vue3';
defineProps({
    requests: {
        required: true,
    },
});


function deleteReview(id){
    router.delete(route('dashboard.review.delete', id), {
        preserveState: true,
        preserveScroll: true,
    });
}
</script>

<template>
    <Head title="Заявки на добавление" />

    <AdminLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-neutral-800 dark:text-neutral-200 leading-tight">Заявки на добавление</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-neutral-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-neutral-700 dark:text-neutral-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Пользователь
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Название заведения
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Текст заявки
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Дата
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Действия
                                </th>
                            </tr>
                            </thead>
                            <tbody v-if="requests.length !== 0">

                            <tr v-for="request in requests" class="bg-white border-b dark:bg-neutral-800 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-600">

                                <td class="px-6 py-4">
                                    {{ request.id }}
                                </td>

                                <td class="px-6 py-4">
                                    {{ request.user.name }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ request.name}}
                                </td>
                                <td class="px-6 py-4">
                                    {{ request.text}}
                                </td>
                                <td class="px-6 py-4">
                                    {{ request.created_at }}
                                </td>
                                <td class="flex items-center px-6 py-4 space-x-3">
                                    <Link method="delete" :href="route('admin.deleteRequest', request.id)" class="cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline">Отклонить</Link>
                                </td>
                            </tr>
                            </tbody>
                            <div class="w-full" v-else>
                                <h2 class="block text-xl text-center m-5">Заявок на добавление заведения нет</h2>
                            </div>

                        </table>
                    </div>

                </div>
            </div>
        </div>
    </AdminLayout>
</template>
