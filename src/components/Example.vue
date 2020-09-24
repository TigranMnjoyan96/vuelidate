<template>
  <div>
    <form novalidate>
<!--      <div class="form-group"-->
<!--           v-for="(item, index) in all[step]" :key="index">-->
<!--        <label :for="item.for">{{ item.label }}</label>-->
<!--        <input :type="item.type" :placeholder="item.placeholder" class="form-control" :id="item.for">-->
<!--      </div>-->
      <div class="sldvkmsdvl">
        <div v-for="(i, index) in 10" :key="index">{{ i }}</div>
      </div>
      <button
          type="button"
          id="newbtn"
          class="custom__btn btn-primary"
          @click="toNextStep"
      >Next Step
      </button>
      <div v-for="(i, index) in n" :key="index">{{i}}</div>

    </form>
  </div>
</template>


<script>
import {bus} from "@/main";

export default {
  props: ['step'],
  name: 'Example',
  computed: {
    a(e) {
      console.log(e)
      return e
    }
  },
  data() {
    return {
      n: [556, 2, 6368, 868543, 6354345, 535],
      all: [
         [
      {
        id: 0,
        type: 'text',
        label: 'First Name',
        placeholder: 'First Name',
        errMsg: 'please enter a valid first name'
      },
      {
        id: 1,
        type: 'text',
        label: 'Last Name',
        placeholder: 'Last Name',
        errMsg: 'please enter a valid last name',
        for: 'lastname'
      },
           {
             id: 2,
             type: 'email',
             label: 'Email',
             placeholder: 'Email',
             errMsg: 'please enter a valid email',
             for: 'lastname'
           },
    ],
         [

      {
        id: 3,
        type: 'password',
        label: 'Password',
        placeholder: 'Password',
        errMsg: 'please enter a valid password',
        for: 'lastname'
      },
           {
             id: 4,
             type: 'password',
             label: 'Confirm Password',
             placeholder: 'Confirm Password',
             errMsg: 'please enter a valid password',
             for: 'lastname'
           }
    ],
      ]

    }
  },
  methods: {
    toNextStep() {
      bus.$emit('nextStep')
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