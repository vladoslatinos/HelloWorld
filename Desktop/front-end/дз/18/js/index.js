class Note {
    status = false;

    constructor(title, text) {
        this.title = title;
        this.text = text;
    }

    editTitle(title, agreement) {
        if (agreement) this.title = title;
    }

    editText(text, agreement) {
        if (agreement) this.text = text;
    }

    markAsComplete() {
        this.status = true;
    }
}


class List {
    notesList = [];

    addNote(title, text) {
        if (List.checkUniq(title, this.notesList)) this.notesList.push(new Note(title, text));
    }

    editNoteTitle(index, title, agreement) {
        this.notesList.at(index).editTitle(title, agreement);
    }

    editNoteText(index, text, agreement) {
        this.notesList.at(index).editText(text, agreement);
    }

    setCompleteNote(index) {
        this.notesList.at(index).markAsComplete();
    }

    getCountNotes() {
        return this.notesList.reduce((info, note) => {
            if (!info.total) info.total = this.notesList.length;

            if (!info[note.status]) info[note.status] = 0;

            info[note.status]++;

            return info;
        }, {});
    }

    static checkUniq(title, array) {
        return !array.find(item => item.title === title);
    }
} 

