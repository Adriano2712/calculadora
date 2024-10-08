new Vue({
  el: '#app',
  data: {
    current: '',
  },
  methods: {
    append(value) {
      this.current += value.toString();
    },
    clear() {
      this.current = '';
    },
    deleteLast() {
      this.current = this.current.slice(0, -1);
    },
    calculate() {
      try {
        this.current = eval(this.current).toString();
      } catch (e) {
        this.current = 'Erro';
      }
    }
  }
});
