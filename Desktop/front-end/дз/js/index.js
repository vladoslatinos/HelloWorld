const toDo = {
  list: [],
  
      add(title, text) {
        const note = {
          title,
          text,
          completed: false
        };

        if (this.checkUniq(title)) {
          this.list.push(note);
        }
        
      },

      remove(title) {
         this.list = this.list.filter(note => note.title !== title);
      },

      toggl(title) {
        this.list.map(note => {
          if (note.title === title) {
            note.completed = !note.completed
          }
          return note;
        })
      },




      info() {
          return this.list.reduce((info, note) => {
            if (!info.total) {
              info.total = this.list.length;
            }

            if (!info[note.completed]) {
              info[note.completed] = 1;
            } else {
              info[note.completed]++;
            }

            return info;
          }, {})
      }, 





      checkUniq(title) {
        return !this.list.find(note => note.title === title);
      }



};
