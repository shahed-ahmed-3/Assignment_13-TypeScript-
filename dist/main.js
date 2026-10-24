"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    id;
    name;
    email;
    password;
    phone;
    _age;
    constructor(id, name, email, password, phone, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        if (age >= 18 && age <= 60) {
            this._age = age;
        }
        else {
            throw new Error("Age must be between 18 and 60.");
        }
    }
    displayInfo() {
        console.log(`User ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Age: ${this._age}`);
    }
}
class Admin extends User {
    constructor(id, name, email, password, phone, age) {
        super(id, name, email, password, phone, age);
    }
    manageNotes() {
        console.log(`Admin ${this.name} is managing the system notes.`);
    }
}
class Note {
    id;
    title;
    content;
    userId;
    constructor(id, title, content, userId) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }
    preview() {
        return this.content.length > 20 ? this.content.substring(0, 20) + "..." : this.content;
    }
}
class NoteBook {
    notes = [];
    constructor() {
    }
    addNote(note) {
        this.notes.push(note);
    }
    removeNote(noteId) {
        this.notes = this.notes.filter(note => note.id !== noteId);
    }
    getNotes() {
        return this.notes;
    }
}
class UserWithNotebooks extends User {
    notebooks = [];
    constructor(id, name, email, password, phone, age) {
        super(id, name, email, password, phone, age);
    }
    addNotebook(notebook) {
        this.notebooks.push(notebook);
    }
}
class AssociatedNote extends Note {
    author;
    constructor(id, title, content, author) {
        super(id, title, content, author['id']);
        this.author = author;
    }
}
class StorageData {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
    getAllItems() {
        return this.items;
    }
}
