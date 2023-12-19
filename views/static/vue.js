const main = {
    data() {
      return {
        checked1 : false
      }
    },
    methods: {
        go_back () {
            this.checked1= true;
            window.location.href="/todos";
        },
        go () {
            this.checked1= true;
            const txt = document.querySelector('.txt');
            window.location.href="/todos/"+txt.value;
        }
      }
  }
Vue.createApp(main).mount('#main')