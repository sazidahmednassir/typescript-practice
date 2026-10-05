let num: any = 123;

num = "sazid";

let lang: any[] = ["sazid", "ahmed", "NASSIR"];
lang.push("bs23");

function info(a: any, b: any): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return "Please provide a valid number";
}

console.log(info(12, 34));
console.log(info("sazid", "ahmed"));

function getInfo(msg: string): void {
  console.log(`Hello from void function ${msg}`);
}

getInfo("BS23");

function getNeverType(): never {
  throw new Error("There is no value in this function");
}
