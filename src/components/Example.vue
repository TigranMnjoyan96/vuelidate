<template>
  <div>
    <form @submit.prevent="sendForm">
          <div class="form-group" v-for="item in formData[step]" :key="item.id">
            <label :for="item.for"> {{ item.label }} </label>
            <input :type="item.type" class="form-control" :id="item.for" :placeholder="item.placeholder">
          </div>
          <button class="custom__btn btn-outline-warning mr-3" v-if="step !== 0" @click="previousStep">Previous</button>
          <button class="custom__btn btn-primary" type="button" @click="toNextStep" v-show="step !== 2">Next</button>
          <button class="custom__btn btn-primary" type="submit" v-if="step === 2">Finish</button>
    </form>
  </div>
</template>


<script>

export default {
  props: ['step'],
  name: 'Example',
  data() {
    return {
      formData: [
          [
            {
              id: 0,
              type: 'text',
              label: 'First Name',
              placeholder: 'First Name',
              errMsg: 'please enter a valid first name',
              for: 'first'
            },
            {
              id: 1,
              type: 'text',
              label: 'Last Name',
              placeholder: 'Last Name',
              errMsg: 'please enter a valid last name',
              for: 'last'
            },
            {
              id: 2,
              type: 'email',
              label: 'Email',
              placeholder: 'Email',
              errMsg: 'please enter a valid email',
              for: 'email'
            },
          ],
          [
            {
              id: 3,
              type: 'password',
              label: 'Password',
              placeholder: 'Password',
              errMsg: 'please enter a valid password',
              for: 'password'
            },
            {
              id: 4,
              type: 'password',
              label: 'Confirm Password',
              placeholder: 'Confirm Password',
              errMsg: 'please enter a valid password',
              for: 'confirm'
            },
          ],
          [
            {
              id: 5,
              type: 'text',
              label: 'Country',
              placeholder: 'Country',
              errMsg: 'please enter a valid country',
              for: 'country'
            },
            {
              id: 6,
              type: 'text',
              label: 'City',
              placeholder: 'City',
              errMsg: 'please enter a valid city',
              for: 'city'
            },
          ]

      ]
    }
  },
  methods: {
    toNextStep() {
      this.$emit('nextStep')
    },
    previousStep() {
      this.$emit('previousStep')
    },
    sendForm() {
      console.log('hello')
    }
  }
}
</script>

<style>
@import url('../../node_modules/bootstrap/dist/css/bootstrap.min.css');

.custom__btn {
  border: none;
  padding: 5px 12px;
  outline: none !important;

}

.form-group input {
  box-shadow: none !important;
  border-radius: 0 !important;

}

button {
  box-shadow: none !important;
}

label {
  color: lightslategray
}
</style>