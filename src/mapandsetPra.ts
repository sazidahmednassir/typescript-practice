const score = new Set<string>();

score.add("10");
score.add("20");

score.forEach((a) => console.log(a));

const footballScore = new Map<string, number>();

footballScore.set("Brazil", 7);
footballScore.set("Germany", 4);
footballScore.set("Argentina", 3);

console.log(footballScore.get("Germany"));

footballScore.forEach((value, key) => console.log(key, value));

const juice = new Map<string, number>();

function addJuice(juiceName: string) {
  const qualtity = (juice.get(juiceName) ?? 0) + 1;
  juice.set(juiceName, qualtity);
}

addJuice("Apple");
addJuice("Orange");
addJuice("Pineapple");

console.log(juice);
