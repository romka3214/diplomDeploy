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
            <p class="text-3xl font-bold dark:text-white flex items-center gap-3 mt-2 flex-wrap">Для указания списка увлечений перейдите в ваш

                <Link :href="route('profileLK.show')" class="underline inline-flex items-center font-medium text-white-600 dark:text-white-500 hover:no-underline">
                    Профиль
                    <svg aria-hidden="true" class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Link>
            </p>
        </div>

    </MainLayout>
</template>
