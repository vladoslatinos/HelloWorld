const toDoList = {
                _listTask: [
                    { title: 'Homework', text: 'finish', status: false }
                ],

                get listTask() {
                    return this._listTask;
                },

                set listTask(value) {
                    throw 'To change the listTask use methods!';
                },

                add(title, text) {
                    const note = {
                        title,
                        text,
                        status: false,
                    }

                    if (this.checkUniq(title)) {
                        this.listTask.push(note);
                    }
                },

                checkUniq(title) {
                    return !this.listTask.find(note => note.title === title);
                },

                remove(title) {
                    this.listTask.forEach(item => {
                        if (item.title == title) {
                            item.status = !item.status;
                        }
                    })
                },

                delete(title) {
                    const index = this.listTask.findIndex(note => note.title == title);

                    this.listTask.splice(index, 1);
                },

                countTask() {
                    return this.listTask.reduce((info, note) => {
                        if (!info.total) {
                            info.total = this.listTask.length;
                        }

                        if (!info[note.status]) {
                            info[note.status] = 0;
                        }

                        info[note.status]++;

                        return info;
                    }, {});
                },
            }

            Object.defineProperties(toDoList, {
                add: { enumerable: false },
                checkUniq: { enumerable: false },
                remove: { enumerable: false },
                delete: { enumerable: false },
                countTask: { enumerable: false },
            });

            Object.freeze(toDoList);