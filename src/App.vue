<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body { font-family:"Microsoft Yahei"; margin:0 auto; padding:0; font-size:12px; color:#333;  }  
div, form, ul, ol, li, span, p, dl, dt, dd { margin:0; padding:0; border:0; }  
img, a img { border:0; margin:0; padding:0; }  
h1, h2, h3, h4, h5, h6 { margin:0; padding:0; font-size:12px; }  
ul, ol, li { list-style:none }  
table, td, input { font-size:12px; padding:0; font-family:inherit; }  
img{ vertical-align: top;}  
.clear{clear:both;}  
.nomagin{margin:0;}  
a { outline-style:none; color:#333; text-decoration:none }  
a:hover { color:#c00; text-decoration:underline; }  
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
