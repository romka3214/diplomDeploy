<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import {Head, router, Link} from '@inertiajs/vue3';
defineProps({
    reviews: {
        required: true,
    },
});


function deleteReview(id){
    router.delete(route('admin.review.delete', id), {
        preserveState: true,
        preserveScroll: true,
    });
}
</script>

<template>
    <Head title="Модерация отзывов" />

    <AdminLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-neutral-800 dark:text-neutral-200 leading-tight">Модерация отзывов</h2>
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
                                    Заведение
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Пользователь
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Оценка
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Текст
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Дата
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Действия
                                </th>
                            </tr>
                            </thead>
                            <tbody v-if="reviews.length !== 0">

                            <tr v-for="review in reviews" class="bg-white border-b dark:bg-neutral-800 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-600">

                                <td class="px-6 py-4">
                                    {{ review.id }}
                                </td>
                                <td class="px-6 py-4">
                                    <Link :href="route('admin.establishment.index',review.establishment.id)" class="underline text-neutral-400 hover:no-underline">{{ review.establishment.name }}</Link>
                                </td>
                                <td class="px-6 py-4">
                                    {{ review.user.name }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ review.score }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ review.text}}
                                </td>
                                <td class="px-6 py-4">
                                    {{ review.updated_at }}
                                </td>
                                <td class="flex items-center px-6 py-4 space-x-3">
                                    <Link :href="route('admin.review.confirm', review.id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Восстановить</Link>
                                    <a @click.prevent="deleteReview(review.id)" class="cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline">Удалить</a>
                                </td>
                            </tr>
                            </tbody>
                            <div class="w-full" v-else>
                                <h2 class="block text-xl text-center m-5">Отзывов на модерацию нет</h2>
                            </div>

                        </table>
                    </div>

                </div>
            </div>
        </div>
    </AdminLayout>
</template>
