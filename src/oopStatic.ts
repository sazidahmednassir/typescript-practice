class Temperature {
  // What this constructor does when called:
  // Ex: when internal code runs `new Temperature(25)`:
  //   1. JavaScript creates a blank object in memory: {}
  //   2. `private celsius: number` attaches the value: { celsius: 25 }
  //   3. Returns that completed object: { celsius: 25 }
  //
  // Why is it "private"?
  // It blocks outside code from writing `new Temperature(100)`.
  // This prevents mistakes because nobody knows if 100 means °C or °F!
  private constructor(private celsius: number) {}

  // Ex: Temperature.fromCelsius(25)
  // -> calls new Temperature(25) -> returns { celsius: 25 }
  static fromCelsius(c: number): Temperature {
    return new Temperature(c);
  }

  // Ex: Temperature.fromFahrenheit(100)
  // -> calculates (100 - 32) * 5 / 9 = 37.77
  // -> calls new Temperature(37.77) -> returns { celsius: 37.77 }
  static fromFahrenheit(f: number): Temperature {
    return new Temperature(((f - 32) * 5) / 9);
  }

  // Ex: Temperature.fromKelvin(300)
  // -> calculates 300 - 273.15 = 26.85
  // -> calls new Temperature(26.85) -> returns { celsius: 26.85 }
  static fromKelvin(k: number): Temperature {
    return new Temperature(k - 273.15);
  }

  // Ex: on { celsius: 37.77 }, toCelsius() returns 37.77
  toCelsius(): number {
    return this.celsius;
  }

  // Ex: on { celsius: 37.77 }, converts back to Fahrenheit -> returns 100
  toFahrenheit(): number {
    return (this.celsius * 9) / 5 + 32;
  }

  // Ex: on { celsius: 26.85 }, converts back to Kelvin -> returns 300
  toKelvin(): number {
    return this.celsius + 273.15;
  }
}

// -------------------------------------------------------------
// Real Usage & Initialization Flow:
// -------------------------------------------------------------

// How constructor initializes and returns into t1:
// 1. Temperature.fromFahrenheit(100) is called
// 2. It calculates: (100 - 32) * 5 / 9 = 37.77
// 3. It calls: new Temperature(37.77)
// 4. Constructor initializes: creates object and sets this.celsius = 37.77
// 5. Constructor returns { celsius: 37.77 } to fromFahrenheit()
// 6. fromFahrenheit() returns it to caller -> stored in t1
const t1 = Temperature.fromFahrenheit(100);

// Same initialization flow:
// 300K -> converts to 26.85°C -> constructor initializes { celsius: 26.85 } -> stored in t2
const t2 = Temperature.fromKelvin(300);

// Reads the stored Celsius value:
console.log(t1.toCelsius()); // 37.77...
console.log(t2.toCelsius()); // 26.85

// Note: Calling constructor directly from outside is blocked:
// const t3 = new Temperature(25); // ❌ Error: Constructor is private
