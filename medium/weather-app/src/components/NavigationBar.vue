<template>
  <header class="flex justify-between items-center h-12 shadow-xl">
    <div class="container w-full lg:w-[60rem] mx-auto px-1 flex justify-between items-center h-12">
      <h1 class="cursor-pointer">
        <RouterLink to='/'>
          <i class="fa-solid fa-sun"></i>
          The Local Weather App
        </RouterLink>
      </h1>
      <nav class="flex gap-3 text-sm font-semibold tracking-wide">
        <router-link to="/" class="hover:underline hover:text-gray-400">Home</router-link>
        <router-link to="/about" class="hover:underline hover:text-gray-400">About</router-link>
        <div class="tools">
          <i @click="toggleModal" class="fa-solid fa-circle-info cursor-pointer hover:text-green-500 duration-200"></i>
        </div>
        <!-- Conditionally render the BaseModal component -->
        <BaseModal v-if="modalActive" @closeModal="closeModal" >
          <h1>Modal haw haw</h1>
        </BaseModal>
      </nav>
    </div>
  </header>
</template>

<script setup>
import BaseModal from '@/components/BaseModal.vue';
import { ref } from 'vue';

const modalActive = ref(false);

const toggleModal = () => {
  modalActive.value = !modalActive.value;
}

const closeModal = () => {
  modalActive.value = false;
}
</script>
