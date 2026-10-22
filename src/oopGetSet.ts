class Circle {
  constructor(public readonly radius: number) {}

  get area(): number {
    return Math.PI * this.radius ** 2;
  }

  get circumference(): number {
    return 2 * Math.PI * this.radius;
  }
}

const c = new Circle(5);
console.log(c.area); // 78.5398... — accessed like a property, not a method call
console.log(c.circumference); // 31.4159...

class User {
  private _email: string = "";

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    if (!value.includes("@")) {
      throw new Error("Invalid email");
    }
    this._email = value.trim().toLowerCase();
  }
}

const u = new User();
u.email = "  HM@Example.com  "; // setter normalises and validates
console.log(u.email); // "hm@example.com"

// u.email = "not-an-email";     // throws

class Person {
  private _firstName: string = "";
  private _lastName: string = "";
  private _birthYear: number = 0;

  constructor(firstName: string, lastName: string, birthYear: number) {
    this.firstName = firstName; // Behind the scenes -> triggers `set firstName(firstName)`
    this.lastName = lastName; // Behind the scenes -> triggers `set lastName(lastName)`
    this.birthYear = birthYear; // Behind the scenes -> triggers `set birthYear(birthYear)`
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    if (!value.trim()) throw new Error("First name required");
    this._firstName = value.trim();
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    if (!value.trim()) throw new Error("Last name required");
    this._lastName = value.trim();
  }

  get birthYear(): number {
    return this._birthYear;
  }

  set birthYear(value: number) {
    const currentYear = new Date().getFullYear();
    if (value < 1900 || value > currentYear) {
      throw new Error(`Birth year must be between 1900 and ${currentYear}`);
    }
    this._birthYear = value;
  }

  // Read-only computed property
  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  // Read-only computed property
  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }
}

const p = new Person("HM", "Nayem", 1990);
console.log(p.fullName); // "HM Nayem"
console.log(p.age); // computed at read time

p.firstName = "Hasibul";
console.log(p.fullName); // "Hasibul Nayem"

// p.fullName = "X";     // no setter, can't assign
// p.birthYear = 1800;   // setter validation fails
