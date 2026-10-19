let userId: number = 101;
let userName: string = " Nassir ";
let userLastName: string = "Ahmed ";

let isActived: boolean = true;
let id: number[] = [23, 34, 45];

const fullName = userName.concat(userLastName);

console.log(fullName);
console.log(fullName.split(" "));
console.log(fullName.trim());
console.log(fullName.trim().toUpperCase());

let user: {
  uid: number;
  uname: string;
  uisActived: boolean;
} = {
  uid: 101,
  uname: "Nassir",
  uisActived: false,
};

for (const key in user) {
  const userKey = key as keyof typeof user;
  console.log(`The value of ${key} is ${user[userKey]}`);
}
