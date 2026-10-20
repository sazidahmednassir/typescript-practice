type User = {
  id?: number;
  name: string;
  email: string;
};

const users: User[] = [];

let lastId: number = 0;

function adduser(user: User): User {
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
