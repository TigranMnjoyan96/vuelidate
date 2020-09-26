<template>
  <div>
      <div class="form-group" v-for="(v, index) in $v.formControl[step].$each.$iter" :key="index">
        <label :for="v.for">{{v.label}}</label>
        <input :type="v.$model.type">
      </div>
    <button @click="nextStep">next</button>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { bus } from '@/main'


  export default {
    props: ['step'],
    validations: {
      formControl: {
        0: {
          $each: {
            value: {
              required
            }
          }
        },
        1: {
          $each: {
            value: {
              required
            }
          }
        },
        2: {
          $each: {
            value: {
              required
            }
          }
        },
      }
    },
    data() {
      return {
        formControl: [
           [
            {id: 0, value: '', type: 'text', placeholder: 'First Name', label: 'First Name', for: 'firstName'},
            {id: 1, value: '', type: 'text', placeholder: 'Last Name', label: 'Last Name', for: 'lastName'},
            {id: 2, value: '', type: 'number', placeholder: 'Age', label: 'Age', for: 'age'},
          ],
           [
            {id: 3, value: '', type: 'email', placeholder: 'Email', label: 'Email', for: 'email'},
            {id: 4, value: '', type: 'text', placeholder: 'Country', label: 'Country', for: 'country'},
            {id: 5, value: '', type: 'text', placeholder: 'City', label: 'City', for: 'city'},
          ],
           [
            {id: 6, value: '', type: 'password', placeholder: 'Password', label: 'Password', for: 'password'},
            {id: 7, value: '', type: 'password', placeholder: 'Confirm Password', label: 'Confirm Password', for: 'confirm'},
          ]
        ]
      }
    },
    methods: {
      nextStep() {
        bus.$emit('nextStep')
      }
    }
  }
</script>