/* Please ❤ this */
new Vue({
  el: "#app",
  data: {
    show: false,
    items: [
      { text: 'Vue', value: 'Vue' },
      { text: 'React', value: 'React' },
      { text: 'Angular', value: 'Angular' },
      { text: 'JavaScript', value: 'JavaScript' },
      { text: 'Sass', value: 'Sass' },
      { text: 'Scss', value: 'Scss' },
      { text: 'TypeScript', value: 'TypeScript' },
      { text: 'Html', value: 'Html' },
      { text: 'Node js', value: 'Node js' },
    ],
    selected: {},
  },
  methods: {
    toggleSelect() {
      this.show = !this.show;
    },
    clickItem(value) {
      if (this.selected.value === value.value) {
        return this.selected = {};
      }
      this.selected = value; 
    }
  } 
});