<template>
  <div class="hello">
    <h1>Solveleet {{ problem }}</h1>
      <input 
        ref="inputField"
        type="number"
        id="fname"
        v-bind="value"
        v-on:keyup="updateValue($event.target.value)"
        placeholder="Ditt svar..."
        :disabled="inputDisabled"
      >
  </div>
</template>

<script>
import { nextTick } from 'vue'

export default {
  name: 'Input',
  props: ['value', 'problem'],
  data: function () {
    return {
      inputDisabled: true
    }
  },
  methods: {
    updateValue: function (value) {
      this.$emit('answerUpdated', value);
    },
    resetInput: function () {
      this.$refs.inputField.value="";
    },
    setInputFieldDisabled: function() {
      this.inputDisabled=true;
    },
    setInputFieldActive: function() {
      this.inputDisabled=false;
      nextTick(() => {
        this.$refs.inputField.focus();
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
