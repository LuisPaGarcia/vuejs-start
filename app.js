var app = new Vue({
    el: '#app',
    data: {
        mensaje:'hello vue!'
    }
})

let app2 = new Vue({
    el: '#app2',
    data:{
        claseIn: 'black'
    }

})

let app3 = new Vue({
    el: '#app3',
    data:{
        seen: true
    }
})

let app4 = new Vue({
    el: '#app4',
    data:{
        todos:[
            {text:'Este es el mensaje 1'},
            {text:'Este es el mensaje 2'},
            {text:'Este es el mensaje 3'}
            
        ]
    }
})

let app5 = new Vue({
    el:'#app5',
    data:{
        mensaje: 'Hola Vue!'
    },
    methods:{
        reverseMessage: function(){
            this.mensaje = this.mensaje.split('').reverse().join('')
        }
    }
})


let app6 = new Vue({
    el:'#app6',
    data:{
        mensaje:'Hola Vue'
    },

})

// register
Vue.component('my-component', {
  template: '<li>A custom component!</li>'
})
/*
var jsonDataTabla = $.ajax({
    url: "http://calendar.geekdeguatemala.com/calendarproto/php/getData.php",
    dataType: "json",
    async: false
}).responseText;
*/

// create a root instance
new Vue({
  el: '#example',
  data:{
      hola:'hey'
  }
})

