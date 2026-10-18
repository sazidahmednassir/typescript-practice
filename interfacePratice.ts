interface Cards {
  card: string[];
}

interface MegaCards {
  name: string;
  id: number;
  card: Cards;
}

const cards1 = {
  name: "Nassir Like",
  id: 1233,
  card: ["child1", "child2"],
};

cards1.card.push("child3");
console.log(cards1.card);
