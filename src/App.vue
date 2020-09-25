<template>
<div class="row">
  <div class="col-4 mx-auto mt-3">
      <example :step="step" @previousStep="previousStep" @nextStep="nextStep" />
  </div>
</div>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators'


  export default {
    name: 'App',
    data() {
      return {
        step: 0,
        name: '',
        age: 0
      }
    },

    components: {
      example: () => import('./components/Example.vue'),
    },

    validations: {
      name: {
        required,
        minLength: minLength(4)
      },
      age: {
        required,
        between: between(18, Infinity)
      }
    },
    methods: {
      nextStep() {
        this.step++
      },
      previousStep() {
        this.step--
      }
    },
  }
</script>
