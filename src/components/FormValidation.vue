<template>
    <div class="step" >
       <form>
      <div class="form-group">
            <label for="name">First Name</label>
            <input type="text" placeholder="First Name" class="form-control" id="first">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Last Name</label>
          <input type="text" class="form-control" placeholder="Last Name" id="last">
        </div>

        <div class="form-group">
          <label for="email">Email</label>
            <input type="text" class="form-control" placeholder="Email">
        </div>
        
        <button type="button" id="newbtn" class="custom__btn btn-primary">Next Step</button>
  </form>
    </div>
</template>


<script>
export default {
  props: ['step'],
  mounted() {
    console.log(this.step)
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