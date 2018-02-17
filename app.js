new Vue({
  el: '#app',
  data: {
    question: '',
    answer: 'Поки ви не задасьтете питання я не зможу відповісти!'
  },
  watch: {
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Очікую коли ви закінчите друкувати...';
      this.getAnswer();
    }
  },
  methods: {
    getAnswer: _.debounce(
        function () {
          if (this.question.indexOf('?') === -1) {
            this.answer = 'Питання зазвичай закінчуються знаком питання ;-)';
            return;
          }
          this.answer = 'Думаю...';
          var vm = this;
          axios.get('https://yesno.wtf/api')
              .then(function (response) {
                vm.answer = _.capitalize(response.data.answer);
              })
              .catch(function (error) {
                vm.answer = 'Помилка! Не можу звязатися з API ' + error
              })
        },
        500
    )
  }
});