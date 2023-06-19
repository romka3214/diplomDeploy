<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';

import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { useForm } from '@inertiajs/vue3';

import { ref } from 'vue';



const form = useForm({
    name: '',
    description: '',
    price: '',
    date_start: '',
    date_end: ''
});

// const submit = () => {
//     form.post(route('password.update'), {
//         preserveScroll: true,
//         onSuccess: () => form.reset(),
//         onError: () => {
//             if (form.errors.password) {
//                 form.reset('password', 'password_confirmation');
//                 passwordInput.value.focus();
//             }
//             if (form.errors.current_password) {
//                 form.reset('current_password');
//                 currentPasswordInput.value.focus();
//             }
//         },
//     });
// };
</script>

<template>
    <Head title="События" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-neutral-800 dark:text-neutral-200 leading-tight">Создание события</h2>
        </template>


        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">

                <form @submit.prevent="updatePassword" class="mt-6 space-y-6">
                    <div>
                        <InputLabel for="name" value="Название" />

                        <TextInput
                            id="name"
                            ref="currentPasswordInput"
                            v-model="form.name"
                            type="password"
                            class="mt-1 block w-full"
                        />

                        <InputError :message="form.errors.name" class="mt-2" />
                    </div>
                    <div>
                        <InputLabel for="description" value="Описание" />

                        <TextInput
                            id="description"
                            ref="currentPasswordInput"
                            v-model="form.description"
                            type="password"
                            class="mt-1 block w-full"
                        />

                        <InputError :message="form.errors.description" class="mt-2" />
                    </div>



                    <div class="flex items-center gap-4">
                        <PrimaryButton :disabled="form.processing">Создать</PrimaryButton>
                    </div>
                </form>

            </div>
        </div>
    </AuthenticatedLayout>
</template>
