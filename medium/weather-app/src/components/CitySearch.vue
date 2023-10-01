<template>
  <div class="container w-full lg:w-[60rem] mx-auto px-1 mt-2">
    <input class="input w-full block mx-auto p-2 bg-transparent outline-none shadow-xl font-semibold tracking-wider" placeholder="search for a city" v-model="city" @input="getSearchResults" />
    <ul class="mt-4 p-1 bg-slate-900 rounded-md flex flex-col" v-if="searchResult" >
      <li
        class="p-2 hover:bg-slate-700 cursor-pointer rounded-md"
        v-for="result in searchResult" :key="result.id">
        {{result.place_name}}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const mapboxAPIKey =
  "pk.eyJ1Ijoiam9obmtvbWFybmlja2kiLCJhIjoiY2t5NjFzODZvMHJkaDJ1bWx6OGVieGxreSJ9.IpojdT3U3NENknF6_WhR2Q";
const city = ref('');
const queryTimeout = ref(null);
const searchResult = ref(null)
const error = ref('');

const getSearchResults = () => {
  clearTimeout(queryTimeout.value);
  queryTimeout.value = setTimeout(async () => {
    if (city.value !== "") {
      try {
        const res = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${city.value}.json?access_token=${mapboxAPIKey}&types=place&limit=5`
        );
        searchResult.value = res.data.features;
      }
      catch (err) {
        error.value = "Error fetching data from the API";
        console.error(err);
      }
    } else {
      searchResult.value = null;
    }
  }, 100);
}

</script>

<style scoped>
  .input {
    border-bottom: 1px solid #ccc;
    color: #ccc;
    transition: .2s ease-in-out;
    font-size: .8rem;
  }
  .input:focus {
    border-color: rgb(7, 131, 159);
  }
</style>

