<template>
  <div style="padding: 20px">
    <input 
      ref="inputPassword"
      type="text"
      id="password"
      v-model="password"
      placeholder="Input password..."
    >
  </div>
  <div style="padding: 20px">
    <input 
        ref="inputToDecrypt"
        type="text"
        id="inputToDecrypt"
        v-model="input"
        placeholder="Input string to be decrypted ..."
      >
  </div>
    <button class="button" v-on:click="encrypt()">
      <span>Start</span>
    </button>
    <div style="padding: 20px">
    {{ result }}
    </div>
  <div style="padding: 20px">
    <input 
        ref="inputToDecrypt"
        type="text"
        id="inputToDecrypt"
        v-model="inputDekrypter"
        placeholder="Input string to be decrypted ..."
      >
  </div>
    <button class="button" v-on:click="decrypt()">
      <span>Start</span>
    </button>
    <div style="padding: 20px">
    {{ resultDekryptert }}
    </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: function() {
    return {
      password: null,
      input: null,
      result: "Jeg er ikke kryptert enda.",
      inputDekrypter: null,
      resultDekryptert: "Jeg er ikke dekryptert enda."
    }
  },
  methods: {
    encrypt: async function () {
      console.log(`Decrypting...`);
      const res = await fetch(
        process.env.VUE_APP_API_PATH+`kryptering?pw=${this.password}&s=${this.input}`);
      let json = await res.json();
      console.log(json);
      this.result = json['output'];
    },
    decrypt: async function () {
      console.log(`Decrypting...`);
      const res = await fetch(
        process.env.VUE_APP_API_PATH+`dekryptering?pw=${this.password}&s=${this.inputDekrypter}`);
      let json = await res.json();
      console.log(json);
      this.resultDekryptert = json['output'];
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.button {
  display: inline-block;
  border-radius: 4px;
  background-color: #00e16e;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: calc(2vw + 2vh + 1vmin);
  padding: 2px;
  width: 25%;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
