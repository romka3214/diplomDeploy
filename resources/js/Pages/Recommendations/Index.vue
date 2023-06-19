<script setup>
import {Head, Link} from '@inertiajs/vue3';
import MainLayout from '@/Layouts/MainLayout.vue';
import CardEstablishment from '@/Pages/Establishment/Card.vue';

defineProps({
    recommendation: {
        required: true,
    },
});
</script>

<template>
    <Head title="Рекомендации"/>

    <MainLayout>
        <h1 class="mt-5 mb-14 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Ваш список <span class="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-white">рекомендаций</span></h1>

        <div v-if="recommendation.length !== 0" class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 dark:text-neutral-400 gap-3">
            <CardEstablishment v-for="cell in recommendation" :establishment=cell />
        </div>
        <div v-else>
            <h2 class="text-4xl font-bold dark:text-white">Для генерации рекомендаций нужны данные о ваших увлечениях</h2>
            <h3 class="text-3xl font-bold dark:text-white flex items-center gap-3 mt-2 flex-wrap">Для указания списка увлечений перейдите в ваш<Link :href="route('profileLK.show')" class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Профиль
  </span>
            </Link></h3>
        </div>

    </MainLayout>
</template>
