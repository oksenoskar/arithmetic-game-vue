<template>
  <div style="padding: 20px">
      <input
        class="input shadow shadow-box shadow-focus"
        ref="inputPassword"
        type="text"
        id="password"
        v-model="password"
        placeholder="password" 
      >
  </div>
  
  <div >
    <input 
        class="shadow shadow-box shadow-focus"
        ref="inputToDecrypt"
        type="text"
        id="inputToDecrypt"
        v-model="input"
        placeholder="Text to Encrypt"
        style="width:35%; margin:100px;"
        
      >
  
    <input
        class="shadow shadow-box shadow-focus" 
        ref="inputToDecrypt"
        type="text"
        id="inputToDecrypt"
        v-model="inputDekrypter"
        placeholder="Text to be Decrypted"
        style="width:35%; margin:100px;"
      >
  </div>
  
  
  <div>
    <button 
      class="button neumorphic-shadows neumorphic-shadows-hover beumorphoc-shadow-active" v-on:click="encrypt()"
      style="margin-top: 1px;
                    margin-bottom: 1px;
                    margin-right: 380px;
                    margin-left: 100px;" 
    >
      <span>Encrypt</span>
    </button>

    <button 
      class="button neumorphic-shadows neumorphic-shadows-hover beumorphoc-shadow-active" v-on:click="decrypt()"
      style="margin-top: 1px;
                    margin-bottom: 1px;
                    margin-right: 100px;
                    margin-left: 380px;"
    >
      <span>Decrypt</span>
    </button>
  </div>


  <div style="margin-top: 50px;
                    margin-bottom: 1px;
                    margin-right: 950px;
                    margin-left: 50px;"
  >
    {{ result }} 


  </div>

  <div style="margin-top: -30px;
                    margin-bottom: 1px;
                    margin-right: 50px;
                    margin-left: 950px;"
  >
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
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 20px;
  color: 1px 1px 0 #fff;
  margin-top: 60px;
  letter-spacing: -0.2px;
}



bbody, html {
  background-color:#EBECF0;
}

.button {
  background-color: #E6E7EE;
  border: 1px solid #d1d9e6;
  padding: 60px 35px;
  border-radius: 200px;
  font-size: 20px;
  
  outline:none;
} 

.neumorphic-shadows {
  color:#FF6600;
  font-weight: bold;
  box-shadow: -5px -5px 20px #FFF,  5px 5px 20px #BABECC;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 600;
}

.neumorphic-shadows-hover:hover {
  cursor: pointer;
  box-shadow: -2px -2px 5px #FFF, 2px 2px 5px #BABECC;
}

.beumorphoc-shadow-active:active {
  box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;
}



body, p, input, select, textarea, button {
    font-family: 'Montserrat', sans-serif;
    letter-spacing: -0.2px;
    font-size: 16px;
    
}

.shadow{
  border: 0;
  outline: 0;
  font-size: 16px;
  border-radius: 320px;
  padding: 16px;
  background-color:#EBECF0;
  text-shadow: 1px 1px 0 #fff;
  text-align: center;
}
.shadow-box {
  margin-right: $ruler/2;
  box-shadow:  inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  appearance: none;
  -webkit-appearance: none;
}
.shadow-focus:focus {
  box-shadow:  inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;
}



.input {
  width: 300px;
}


html::after{
  content:'';
	background: linear-gradient(21deg, #1beabd, #010b63);
	height:4px;
	width:100%;
	position:absolute;
	left:0;
	top:0;
}

</style>
