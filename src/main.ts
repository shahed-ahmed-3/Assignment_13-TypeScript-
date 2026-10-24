class User {
    protected id: number;
    public name: string;
    public email: string;
    private password: string; 
    public phone: string;
    private _age: number;

    constructor(id: number, name: string, email: string, password: string, phone: string, age: number) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;

        if (age >= 18 && age <= 60) {
            this._age = age;
        } else {
            throw new Error("Age must be between 18 and 60.");
        }
    }

    public displayInfo(): void {
        console.log(`User ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Age: ${this._age}`);
    }
}

class Admin extends User {
    constructor(id: number, name: string, email: string, password: string, phone: string, age: number) {
        super(id, name, email, password, phone, age); // استدعاء الـ Constructor الأب
    }

    public manageNotes(): void {
        console.log(`Admin ${this.name} is managing the system notes.`);
    }
}

class Note {
    public id: number;
    public title: string;
    public content: string;
    public userId: number;

    constructor(id: number, title: string, content: string, userId: number) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }

    public preview(): string {
        return this.content.length > 20 ? this.content.substring(0, 20) + "..." : this.content;
    }
}

class NoteBook {
    private notes: Note[] = [];

    constructor() {
    }

    public addNote(note: Note): void {
        this.notes.push(note);
    }

    public removeNote(noteId: number): void {
        this.notes = this.notes.filter(note => note.id !== noteId);
    }

    public getNotes(): Note[] {
        return this.notes;
    }
}

class UserWithNotebooks extends User {
    public notebooks: NoteBook[] = [];

    constructor(id: number, name: string, email: string, password: string, phone: string, age: number) {
        super(id, name, email, password, phone, age);
    }

    public addNotebook(notebook: NoteBook): void {
        this.notebooks.push(notebook);
    }
}

class AssociatedNote extends Note {
    public author: User;

    constructor(id: number, title: string, content: string, author: User) {
        super(id, title, content, author['id']);
        this.author = author;
    }
}

class StorageData<T> {
    private items: T[] = [];

    public addItem(item: T): void {
        this.items.push(item);
    }

    public removeItem(item: T): void {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

    public getAllItems(): T[] {
        return this.items;
    }
}