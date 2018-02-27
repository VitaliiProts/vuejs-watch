<template>
  <section id="block">
    <div @click="clickInputBlock" v-if="inActive === false" :class="{ inactive: inActive }" class="input-block">14 000 USD</div>
    <form v-else action="#" :class="{ active: isActive }">
      <div class="inline-edit-fields">
        <div class="field-group">
          <the-mask v-focus type="text" value="27628" class="input-block test" :mask="['###.#####']"/>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
  import {TheMask} from 'vue-the-mask';

  export default {
    data() {
      return {
        inActive: false,
        isActive: true
      }
    },
    methods: {
      clickInputBlock: function () {
        // let a = document.querySelector('.test');
        // console.log(a);
        if (this.inActive === false) {
          this.inActive = true;
        }
      }
    },
    directives: {
      focus: {
        inserted: function (el) {
          el.focus();
        }
      }
    },
    components: {TheMask}
  }
</script>


<style>
  body {
    background-color: #888;
  }

  .input-block {
    width: 163px;
    height: 19px;
    background-color: #fff;
    color: #62ab62;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
  }

  .input {
    width: 163px;
    color: #62ab62;
    text-align: center;
    margin-top: 10px;
    font-weight: bold;
    font-size: 16px;
  }

  .save-options {
    display: flex;
  }
</style>