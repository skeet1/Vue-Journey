<script>
  export default {
    data() {
      return {
        header: "Skills List",
        newSkill: "",
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "Vue",
          "PHP",
          "Laravel",
          "MySQL",
        ]
      }
    },
    methods: {
      addNewSkill() {
        this.skills.push(this.newSkill);
        this.newSkill = "";
      }
    }
  }
</script>

<template>
  <main>
    <h1 class="text-center text-2xl font-semibold tracking-wider ">{{header}}</h1>
    <div>
      <h2 class="text-xl text-center font-semibold text-blue-500 capitalize " v-if="skills.length % 2 === 0">my skills : (even number btw)</h2>
      <h2 class="text-xl text-center font-semibold text-blue-500 capitalize " v-else>My skills : (odd number btw)</h2>
      <ul class=" bg-slate-800 my-4 text-slate-100 rounded-md">
        <li v-for="(skill, index) in skills" class="p-2 text-sm font-bold tracking-wider 
          hover:text-blue-500 transition ease-in-out" :key="index">
          {{skill}}
        </li>
      </ul>
    </div>
    <div class="add-skill">
      <input type="text" placeholder="Add a skill" v-model="newSkill"
        class="block w-full p-2 bg-transparent border-2 border-slate-800  rounded-md
        focus:outline-none focus:border-blue-500 transition ease-in-out"
      />
      <button @click="addNewSkill" 
        class="block w-full p-2 mt-2 bg-blue-500 text-slate-100 font-semibold rounded-md"
      >Add</button>
    </div>
    <hr />
    <p style="font-size: .7rem; font-style: italic;" class="text-xs font-semibold text-orange-500 text-center capitalize hover:italic" v-if="newSkill.length"> hey you want add this new skill : {{newSkill}}</p>
    <p style="font-size: .7rem; font-style: italic;" class="text-xs font-semibold text-orange-500 text-center capitalize hover:italic" v-else >there is no new skill to add</p>
  </main>
</template>
