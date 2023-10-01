<template>
  <main class="min-h-screen w-screen bg-primary text-secondary">
    <div>
      <NavigationBar />
      <CitySearch />
      <router-view />
    </div>
  </main>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue';
import CitySearch from '@/components/CitySearch.vue';

export default {
  components: {
    NavigationBar,
    CitySearch
  }
}

</script>

