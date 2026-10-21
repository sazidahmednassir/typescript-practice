class User {
  user: string;
  email: string;
  course: string = "OOP Typescript";
  age: number;

  constructor(user: string, email: string, age: number) {
    if (age < 18) {
      throw new Error("Age is less than 18");
    } else {
      this.age = age;
    }
    this.user = user;
    this.email = email;
  }

  greetUser() {
    console.log(`Hello ${this.user} Welcome to ${this.course}`);
  }
}

const user1 = new User("Fahim", "nassier23@yopmail.com", 23);
user1.greetUser();

class Counter {
  private count: number = 0;

  getCount() {
    console.log("Count : ", this.count);
  }

  increment() {
    this.count++;
    this.getCount();
  }
  decrement() {
    this.count--;
    this.getCount();
  }
}

const counter = new Counter();
counter.getCount();
counter.increment();
counter.increment();
counter.decrement();

// ==============================================================================
// STOPWATCH CLASS
// ==============================================================================
class Stopwatch {
  private startTime: number | null = null; // millis since epoch, initially null
  private elapsed: number = 0;             // accumulated millis from previous runs

  // Records the current time as startTime. No-op if already running.
  start(): void {
    if (this.startTime !== null) {
      return; // Already running, do nothing
    }
    this.startTime = Date.now();
  }

  // Adds the time since startTime to elapsed, sets startTime back to null.
  stop(): void {
    if (this.startTime === null) {
      return; // Not running, do nothing
    }
    this.elapsed += Date.now() - this.startTime;
    this.startTime = null;
  }

  // Sets both back to zero/null.
  reset(): void {
    this.startTime = null;
    this.elapsed = 0;
  }

  // Returns total elapsed millis (including the in-progress run, if any).
  read(): number {
    if (this.startTime !== null) {
      return this.elapsed + (Date.now() - this.startTime);
    }
    return this.elapsed;
  }
}

// Demo / Testing the Stopwatch
const sw = new Stopwatch();

console.log("\n--- Stopwatch Demo ---");
sw.start();

// Check read() while running (should be > 0 ms after a small delay)
setTimeout(() => {
  console.log("Reading while running:", sw.read(), "ms");

  sw.stop();
  console.log("Reading after stop:", sw.read(), "ms");

  // Resume again
  sw.start();
  setTimeout(() => {
    console.log("Reading after resume:", sw.read(), "ms");
    sw.stop();
    console.log("Final elapsed time:", sw.read(), "ms");

    sw.reset();
    console.log("After reset:", sw.read(), "ms");
  }, 100);
}, 100);

