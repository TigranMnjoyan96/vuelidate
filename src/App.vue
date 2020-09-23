<template>
<div class="row">
  <div class="col-4 mx-auto mt-3">
    <form-validation></form-validation>
  </div>
</div>
</template>

<script>
  import {
    required,
    minLength,
    between
  } from 'vuelidate/lib/validators'
  import formValidation from './components/FormValidation'


  export default {
    name: 'App',
    data() {
      return {
        step: 1,
        name: '',
        age: 0
      }
    },
    componets: {
      formValidation
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
    }
  }
</script>
