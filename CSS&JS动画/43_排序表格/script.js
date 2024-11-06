const app = new Vue({
  data: () => ({
    users: [
			{ id: 0,  name: 'marlo',     surname: 'ashe'    },
      { id: 1,  name: 'aimee',     surname: 'soares'  },
      { id: 2,  name: 'claud',     surname: 'otis'    },
      { id: 3,  name: 'bok',       surname: 'trudeau' },
      { id: 4,  name: 'nannie',    surname: 'hamblin' },
      { id: 5,  name: 'cassidy',   surname: 'zimmer'  },
      { id: 6,  name: 'shonna',    surname: 'granger' },
      { id: 7,  name: 'carmon',    surname: 'cope'    },
      { id: 8,  name: 'gwenda',    surname: 'rohr'    },
      { id: 9,  name: 'zachariah', surname: 'falcon'  },
      { id: 10, name: 'cecelia',   surname: 'nichols' },
      { id: 11, name: 'merle',     surname: 'whitten' },
    ],
    newUser: { name: '', surname: '' },
    sort: 'id',
    sortDir:'asc',
    page: 0,
    pageSize: 25
  }),
  methods: {
    addUser: function() {
      let name    = this.newUser.name.trim().toLowerCase();
      let surname = this.newUser.surname.trim().toLowerCase();
      if (name && surname) {  
        this.users.push({
          id:      this.users.length,
          name:    name,
          surname: surname
        });
        this.sortDir = 'desc'; this.sortBy('id'); // Default sorting
      }
      this.newUser.name = this.newUser.surname = '';
    },
    sortBy: function(s) {
      if (s === this.sort) {
        this.sortDir = (this.sortDir === 'asc') ? 'desc' : 'asc';
      } else {
        this.sortDir = 'asc';
      }
      this.sort = s;
    },
    isActiveSort: function(s) { 
      return this.sort === s; 
    },
    hasPage: function(dir) {
      if (dir === -1 && (this.page > 0)) return true;
      if (dir ===  1 && (((this.page+1)*this.pageSize) < this.users.length)) return true;
      return false;
    },
    prevPage: function() {
      if (this.hasPage(-1)) this.page--;
    },
    nextPage: function() {
      if (this.hasPage(1)) this.page++;
    }
  },
  computed: {
    sortedUsers: function() {
      return this.users.sort((a, b) => {
        let dir = (this.sortDir === 'asc') ? 1 : -1;
        if (a[this.sort] < b[this.sort]) {
          return -1 * dir;
        } else if (a[this.sort] > b[this.sort]) {
          return  1 * dir;
        } else {
          return 0;
        }
      }).filter((row, idx) => {
        let s = this.page*this.pageSize;
        let e = (this.page+1)*this.pageSize;
        return (idx >= s && idx < e);
	    });
    },
    pageSizeModel: {
      get() {
        return this.pageSize;
      },
      set(v) {
        this.pageSize = v;
        this.page = 0;
      }
    }
  },
  filters: {
    capitalize: function (v) {
      if (!v) return ''
      v = v.toString()
      return v.charAt(0).toUpperCase() + v.slice(1)
    }
  }
}).$mount('#app');