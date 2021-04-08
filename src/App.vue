<template>

  

 <figure id="night-day">
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop stop-color="rgb(0,0,12)" offset="0%" id="zenith">
                <animate attributeName="stop-color" dur="60s" values="rgba(0,0,12,0);rgba(2,1,17,0);rgba(2,1,17,0);rgba(2,1,17,0);rgba(32,32,44,0.5);rgba(64,64,92,.8);rgb(74,73,105);rgb(117,122,191);rgb(130,173,219);rgb(148,197,248);rgb(183,234,255);rgb(144,223,254);rgb(87,193,235);rgb(45,145,194);rgb(36,115,171);rgb(30,82,142);rgb(30,82,142);rgb(21,66,119);rgba(22,60,82,0.8);rgba(7,27,38,.5);rgba(1,10,16,.3);rgba(9,4,1,0);rgba(0,0,12,0);rgba(0,0,12,0)" repeatCount="indefinite" />
                <animate attributeName="offset" dur="24s" values="0;.85;.6;.1;0;0;0;0;0;.01;0;0;0;0;0;0;0;0;0;0;.3,.5,.8,0" repeatCount="indefinite" />
            </stop>
            <stop stop-color="rgb(0,0,12)" offset="100%" id="horizon">
                <animate attributeName="stop-color" dur="60s" values="rgba(0,0,12,0);rgba(25,22,33,.3);rgba(32,32,44,.8);rgb(58,58,82);rgb(81,81,117);rgb(138,118,171);rgb(205,130,160);rgb(234,176,209);rgb(235,178,177);rgb(177,181,234);rgb(148,223,255);rgb(103,209,251);rgb(56,163,209);rgb(36,111,168);rgb(30,82,142);rgb(91,121,131);rgb(157,166,113);rgb(233,206,93);rgb(178,99,57);rgb(47,17,7);rgb(36,14,3);rgb(47,17,7);rgba(75,29,6,.4);rgba(21,8,0,0);rgba(0,0,12,0)" repeatCount="indefinite" />
            </stop>
        </linearGradient>
        <rect id="sky" x="0" y="0" width="100%" height="100%" style="fill:url(#skyGradient)" />
    </svg>
    <div class="sun"></div>
    <div class="moon"></div>
</figure>









  <div style="padding: 1px">
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

  <div style="margin-top: -23px;
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
      result: "I'm not Encrypted yet.",
      inputDekrypter: null,
      resultDekryptert: "I'm not Decrypted yet."
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
  margin-bottom: 200px;
  letter-spacing: -0.2px;
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
    font-size: 15px;
    
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
  margin-right: 8px;
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
  margin-top: 50px;
  
}

body{
  background-image: url("desert.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  
}


#night-day{
    background-color:#000;
    background-image:url("big_dipper.jpg");
    background-size:cover;
    font-size:0;
    height:400px;
    margin: -10px;
    margin-top: -60px;
    overflow:hidden;
    position:relative;
    width:100vw;
    box-shadow: 5px 10px 20px #888888;
    


}
.sun{
    animation:suntrack 60s infinite forwards linear,sunpulse 2s alternate infinite;
    background:radial-gradient(ellipse at center, #f90 0%, #fc0 60%, #ff0 100%);
    border-radius:100%;
    bottom:-7vw;
    height:15vw;
    position:absolute;
    right:7vw;
    transform-origin:-28vw 7vw;
    width:15vw;
}
.moon{
    animation:moontrack 60s infinite backwards linear;
    animation-delay:30s;
    background-image:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/moon8.png);
    background-position:center;
    background-repeat:no-repeat;
    background-size:90% 90%;
    border-radius:100%;
    bottom:-7vw;
    height:15vw;
    opacity:.8;
    position:absolute;
    right:7vw;
    transform-origin:-28vw 7vw;
    width:15vw;
}
.paused{
    -webkit-animation-play-state:paused;
    animation-play-state:paused;
}
@keyframes suntrack{
    from{
        transform:rotate(.15turn);
    }
    to{
        transform:rotate(-.85turn);
    }
}
@keyframes moontrack{
    from{
        transform:rotate(.15turn);
    }
    to{
        transform:rotate(-.85turn);
    }
}
@keyframes sunpulse{
    from{
        box-shadow:0 0 100px rgba(255,255,0,.4),0 0 100px rgba(255,255,0,.4);
    }
    to{
        box-shadow:0 0 50px rgba(255,255,0,.8),0 0 75px rgba(255,255,0,.8);
    }
}





</style>
