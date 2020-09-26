<template>
  <div>
    <example :step="step" />
  </div>
</template>


<script>

  import {bus} from "@/main";

  export default {
    name: "App",
    components: {
      Example: () => import('./components/Example')
    },
    data() {
      return {
        step: 0
      }
    },
    mounted() {
      bus.$on('nextStep', () => {
        console.log(this.step)
        this.step++
      })
    }
  }
</script>