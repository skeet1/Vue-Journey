<template>
  <div @click="PageClick" class="modal fixed w-screen h-screen bg-black bg-opacity-20 backdrop-blur-sm inset-0 flex justify-center items-center">
    <div class="p-4 rounded-md mt-24 bg-slate-900 flex flex-col gap-4">
      <slot />
      <button @click="closeModal" class="text-white px-4 py-2 w-fit bg-slate-700 rounded-md text-sm font-semibold capitalize tracking-wide">Close</button>
    </div>
  </div>
</template>

<script setup>

const emits = defineEmits(['closeModal']);
const closeModal = () => {
  emits('closeModal')
}

const PageClick = (e) => {
  if (e.target.classList.contains('modal')) {
    closeModal();
  }
}

</script>
