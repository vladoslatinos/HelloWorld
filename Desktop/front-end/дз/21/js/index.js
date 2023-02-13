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
      this.saveData(); 
    } 
  }, 
 
  remove(title) { 
    this.list = this.list.filter(note => note.title !== title); 
    this.saveData(); 
  }, 
 
  toggle(title) { 
    this.list.map(note => { 
      if (note.title === title) { 
        note.completed = !note.completed; 
      } 
      return note; 
    }); 
    this.saveData(); 
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
    }, {}); 
  },  
 
  checkUniq(title) { 
    return !this.list.find(note => note.title === title); 
  }, 
 
  saveData() { 
    localStorage.setItem("toDoList", JSON.stringify(this.list)); 
  }, 
 
  loadData() { 
    const data = localStorage.getItem("toDoList"); 
    if (data) { 
      this.list = JSON.parse(data); 
    } 
  } 
}; 
 
toDo.loadData();