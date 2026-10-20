//Define custom key and value

enum Colors {
  Red = "red",
  Blue = "blue",
  Green = "green",
}

type CarInfo = {
  name: string;
  brand: string;
  color: Colors;
};

const car1: CarInfo = {
  name: "carolla",
  brand: "toyata",
  color: Colors.Red,
};

const car2: CarInfo = {
  name: "M4",
  brand: "bmw",
  color: Colors.Green,
};

const car3: CarInfo = {
  name: "hilux",
  brand: "toyata",
  color: Colors.Blue,
};

console.log(car1);
console.log(car2.name);

for (const car in car1) {
  const carkey = car as keyof CarInfo;
  console.log(`The ${carkey} : ${car1[carkey]}`);
}

console.log("-----------------------------");

for (const hiluxcar in car3) {
  const hiluxkey = hiluxcar as keyof CarInfo;
  console.log(`the ${hiluxkey} : ${car3[hiluxkey]}`);
}

enum Status {
  Pending = 1,
  Process,
  Reject,
  Confirm,
}

type PersonInfo = {
  name: string;
  status: Status;
};

const person1: PersonInfo = {
  name: "Jasim",
  status: Status.Confirm,
};

console.log(person1.name, person1.status);

console.log("-----------------------------");

type Rectangle = {
  height: number;
  width: number;
};

type Cicle = {
  radius: number;
};

type Shape = Rectangle | Cicle;

function calculateArea(shape: Shape): number {
  if ("height" in shape) {
    return shape.height * shape.width;
  } else {
    return Math.PI * shape.radius * shape.radius;
  }
}

console.log(calculateArea({ height: 10, width: 20 }));
console.log(calculateArea({ radius: 4 }));

type Title = "mr" | "mrs" | "miss";

function getTitle(title: Title): string {
  if (title === "mr") {
    return "Mister";
  } else if (title === "mrs") {
    return "Missus";
  } else {
    return "Miss";
  }
}

console.log("-----------------------------");
console.log(getTitle("mr"));
console.log(getTitle("mrs"));
console.log(getTitle("miss"));

type User = {
  id: number;
  name: string;
  email: string;
};

const users: User[] = [];

let lastId: number = 0;

function adduser(user: Omit<User, "id">): User {
  const newUser: User = {
    id: ++lastId,
    ...user,
  };
  users.push(newUser);
  return newUser;
}

adduser({ name: "Jasim", email: "jasim23@yopmail.com" });
adduser({ name: "Nassir", email: "nassir23@yopmail.com" });
console.log(users);

//store data but constant data willl be store

enum Theme {
  Light = "light",
  Dark = "dark",
}

const currentTheme: Theme = Theme.Dark;

console.log(currentTheme);
