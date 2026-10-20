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

// ==============================================================================
// CLASS IMPLEMENTING AN INTERFACE (WITH CONSTRUCTOR & METHOD ARGUMENTS)
// ==============================================================================

// 1. Interface defining properties and methods with arguments
interface CardCollection {
  name: string;
  id: number;
  cards: string[];

  // Methods with arguments
  addCard(cardName: string): void;
  hasCard(cardName: string): boolean;
  printDetails(): void;
}

// 2. Class implementing the interface
class MegaCardDeck implements CardCollection {
  name: string;
  id: number;
  cards: string[];

  // Constructor accepting arguments
  constructor(name: string, id: number, initialCards: string[] = []) {
    this.name = name;
    this.id = id;
    this.cards = initialCards;
  }

  // Method taking an argument
  addCard(cardName: string): void {
    this.cards.push(cardName);
    console.log(`Added "${cardName}" to ${this.name}'s deck.`);
  }

  // Method taking an argument and returning a boolean
  hasCard(cardName: string): boolean {
    return this.cards.includes(cardName);
  }

  printDetails(): void {
    console.log(`ID: ${this.id} | Deck: ${this.name} | Total Cards: ${this.cards.length}`);
    console.log("Cards:", this.cards);
  }
}

// 3. Creating an instance by passing arguments to the constructor
const myDeck = new MegaCardDeck("Nassir Deck", 501, ["Ace", "King"]);

// Calling methods with arguments
myDeck.addCard("Queen");
myDeck.addCard("Joker");
myDeck.printDetails();

console.log("Has Ace?:", myDeck.hasCard("Ace"));
console.log("Has 10?:", myDeck.hasCard("10"));

