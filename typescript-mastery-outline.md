# TypeScript Mastery for This Project

## Goal

Learn TypeScript by applying it to this project's WebdriverIO/Appium automation, API clients, services, page objects, and tests.

The project uses TypeScript 5.x with strict checking. Follow its existing conventions and `tsconfig.json`.

## Learning Path

### 1. TypeScript Setup and Strict Mode

**Learn:** TypeScript checks your code before it runs. Its types do not validate data at runtime.

**Project example:** `tsconfig.json` enables `"strict": true`; `package.json` provides `npm run lint` and `npm run format:check`.

**Practice:** Find the TypeScript-related settings in `tsconfig.json`. Explain what `strict` and `target` configure.

### 2. Primitive Types and Type Inference

**Learn:** Common types include `string`, `number`, and `boolean`. TypeScript can infer a type from an assigned value.

**Example:**

```ts
const platform = "android"; // inferred as the string literal "android"
let retryCount: number = 2; // explicitly typed as number
```

**Practice:** In `config/env.conf.ts`, identify values whose types are explicitly declared and values whose types TypeScript infers.

### 3. Function Parameters and Return Types

**Learn:** Function types document what a function accepts and returns.

**Project example:** `getCurrentPlatform(): string` declares a string return type.

**Example:**

```ts
function normalizePlatform(platform: string): string {
  return platform.toLowerCase();
}
```

**Practice:** Explain why `getApiServiceUrl(): string` returns a string, even when it chooses a URL from a configuration object.

### 4. Object Types, Interfaces, and Type Aliases

**Learn:** Interfaces and type aliases describe the properties an object can have.

**Project example:** `http-clients/card/card-by-id/card-by-id.type.ts` defines `CardByIdApiResponse` and `CardById`.

**Example:**

```ts
interface CardSummary {
  id: string;
  title: string;
  priority: number;
}
```

**Practice:** Find a field in `CardById` that is a string, a number, and an optional property.

### 5. Union and Literal Types

**Learn:** A union (`A | B`) allows a value to be one of several types. Literal types restrict a value to specific strings or numbers.

**Example:**

```ts
type Platform = "android" | "ios";

function getUserAgent(platform: Platform): string | undefined {
  return platform === "android"
    ? process.env.API_USER_AGENT_ANDROID
    : process.env.API_USER_AGENT_IOS;
}
```

**Practice:** Compare this `Platform` type with the current `string` return type of `getCurrentPlatform()`. What extra guarantee does the union provide?

### 6. Arrays, Records, and Maps

**Learn:** Arrays represent ordered lists. `Record` describes an object indexed by keys. `Map` stores typed key/value pairs.

**Project examples:**

```ts
cards: Record<string, CardById>;
```

```ts
private childCardCache = new Map<string, ChildCardData>();
```

**Practice:** For each example, identify the key type and value type.

### 7. Optional Properties, Null, and Narrowing

**Learn:** `?` means a property may be absent. `| null` means it may explicitly be null. Checks can narrow a type before use.

**Project example:**

```ts
const universalData = childCard.universal_data?.[0];

if (!universalData) {
  throw new Error("universal_data not found");
}
```

**Practice:** In `pageObjects/actions/businessDrawer.action.ts`, trace how the code checks for `universal_data`, `business_drawer`, and `chip` before returning them.

### 8. Environment Variables and Type Assertions

**Learn:** Environment variables may be missing. `??` supplies a fallback only for `null` or `undefined`. Type assertions affect TypeScript's assumptions but do not validate runtime data.

**Project example:**

```ts
const env = process.env.TEST_ENV ?? "prod";
```

**Practice:** In `config/env.conf.ts`, examine the `as Record<string, string>` assertion. What does it tell TypeScript, and what does it not check at runtime?

### 9. Generics and Utility Types

**Learn:** Generics let reusable code preserve information about the values it handles. Utility types derive new types from existing ones.

**Project example:**

```ts
const response = await axios.get<CardByIdApiResponse>(endPoint);
```

The generic argument tells TypeScript the expected shape of `response.data`; it does not verify the server's JSON.

**Example using indexed access:**

```ts
type Card = CardByIdApiResponse["cards"][string];
```

**Practice:** Explain how `Card` relates to `CardByIdApiResponse`.

### 10. Async Functions and Promises

**Learn:** An `async` function returns a promise. `await` waits for a promise to settle and gives access to its resolved value.

**Project example:**

```ts
async init(cardId: string): Promise<void> {
  this.cachedResponse = await this.client.getCardById(cardId);
}
```

**Practice:** Trace the response from `CardByIdClient.getCardById()` into `CardByIdService.init()`.

### 11. Classes and Access Modifiers

**Learn:** Classes group data and behavior. `private` limits access to a class; `public` exposes a member to callers.

**Project example:** `CardByIdService` keeps its client and cached response private, then exposes methods to retrieve data.

**Practice:** Explain why `getResponse()` throws when the service has not been initialized.

### 12. TypeScript in API Tests

**Learn:** Tests use typed values, asynchronous setup, and assertions to check observable behavior.

**Project example:**

```ts
before(async () => {
  await businessDrawerService.init();
});

it("returns business drawer cards", async () => {
  const cardIds = businessDrawerService.getBusinessDrawerParentCardId();
  expect(cardIds.length).to.be.greaterThan(0);
});
```

**Practice:** In `test/specs/integration/card/business-drawer.spec.ts`, find a test that awaits a service call and then checks a result.

### 13. TypeScript in UI Page Objects

**Learn:** Page objects organize reusable UI behavior and can expose typed methods to tests.

**Project example:** `pageObjects/actions/businessDrawer.action.ts` uses typed method arguments, a cache, and WebdriverIO elements.

**Example:**

```ts
async getElementText(arg: { element: WebdriverIO.Element }): Promise<string> {
  await this.waitForElementIsDisplayed(arg.element);
  return arg.element.getText();
}
```

**Practice:** Follow one UI test in `test/specs/UI/card/businessDrawerUI.spec.ts` into the page-object method it calls.

### 14. Runtime Validation and Safer API Data

**Learn:** A TypeScript type describes what code expects; external JSON still needs runtime checks when correctness matters.

**Project example:** `axios.get<CardByIdApiResponse>(...)` provides a compile-time type for the response, but Axios does not validate every response field against that interface.

**Practice:** Pick an optional API field and describe how the code should respond if the server omits it.

### 15. Modules, Imports, and Project Structure

**Learn:** Imports connect modules. Keep responsibilities in the project's existing folders.

**Project examples:**

- HTTP requests: `http-clients/`
- API response types: beside their client or service
- UI selectors: `pageObjects/locators/`
- UI behavior: `pageObjects/actions/`
- Tests: `test/specs/`

**Practice:** Trace one import from a test to a page object or service, then identify where the HTTP request itself is implemented.

## Capstone

Trace one business drawer card through the code:

1. Find its response type in `card-by-id.type.ts`.
2. Follow the request in `card-by-id.client.ts`.
3. Follow caching or lookup in the service.
4. Follow the data into `businessDrawer.action.ts`.
5. Find a test that verifies its API or UI behavior.

At each step, record the input type, output type, asynchronous operations, and checks for missing data.

## Suggested Order

Study topics 1–8 first, then 9–15. Use the practice prompts with the relevant project files open. After a code exercise, run `npm run lint` and `npm run format:check` when practical.
