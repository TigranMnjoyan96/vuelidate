<template>
    <div>
       <form>
      <div class="form-group">
            <label for="name">First Name</label>
            <input type="text" placeholder="First Name" class="form-control" id="first">
        </div>
        <button
            type="button"
            id="newbtn"
            class="custom__btn btn-primary"
            @click="toNextStep"
        >Next Step</button>
  </form>
    </div>
</template>


<script>
import {bus} from "@/main";

export default {
  props: ['step'],
  name: 'Example',
  data() {
    return {
      formControl: [
        {id: 0, type: 'text', label: 'First Name', placeholder: 'First Name', errMsg: 'please enter a valid first name'},
        {id: 1, type: 'text', label: 'Last Name', placeholder: 'Last Name', errMsg: 'please enter a valid last name'},
        {id: 2, type: 'email', label: 'Email', placeholder: 'Email', errMsg: 'please enter a valid email'},
        {id: 3, type: 'password', label: 'Password', placeholder: 'Password', errMsg: 'please enter a valid password'}
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
  .custom__btn  {
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