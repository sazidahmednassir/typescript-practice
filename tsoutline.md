# TypeScript Course Outline for This Project

## Goal

Learn TypeScript in the context of this repository: WebdriverIO, Appium, Mocha, Axios, page objects, API clients, services, and UI test specs.

This outline is designed to match the actual code in the project and the repo-level TypeScript conventions.

---

## 1. TypeScript Fundamentals for This Repo

### Topic
TypeScript basics, strict mode, and project setup.

### Why this matters here
This project uses strict TypeScript in `tsconfig.json` and runs linting/format checks via npm scripts.

### Example
```ts
export function getApiServiceUrl(): string {
  const env = process.env.TEST_ENV ?? "prod";
  return (ENV_URLS[env] ?? ENV_URLS.prod) + "/mygpapi";
}
```

### Learn
- `string` return types
- `??` fallback values
- why strict mode catches mistakes earlier
- how TypeScript is different from plain JavaScript

### Practice
- Read `tsconfig.json` and list 3 things it enforces.
- Explain what happens when `process.env.TEST_ENV` is undefined.

---

## 2. Primitive Types, Type Inference, and Variables

### Topic
`string`, `number`, `boolean`, `undefined`, `null`, and inferred values.

### Why this matters here
Configs and API values rely on environment variables, strings, and boolean-like flags.

### Example
```ts
const platform = "android";
let retryCount: number = 2;
const hasToken = Boolean(process.env.ACCESS_TOKEN);
```

### Learn
- inferred types
- explicit annotation vs inference
- boolean conversion and truthiness

### Practice
- Identify which values in `config/env.conf.ts` are strings and which are calculated.
- Explain why `Boolean(process.env.ACCESS_TOKEN)` may be `false`.

---

## 3. Functions, Parameters, and Return Types

### Topic
Writing typed functions and understanding contracts.

### Why this matters here
Functions in config, service, and client layers return typed data used across the project.

### Example
```ts
export function getCurrentPlatform(): string {
  if (process.env.TEST_PLATFORM) return process.env.TEST_PLATFORM.toLowerCase();
  if (typeof driver === "undefined") return "android";
  return (driver.requestedCapabilities as Record<string, string>)["platformName"].toLowerCase();
}
```

### Learn
- parameter and return typing
- `typeof` checks
- fallback logic using `if` and `return`
- lowercase normalization for platform names

### Practice
- Write a version of this function with a `Platform` union type.
- Explain the difference between `if (process.env.TEST_PLATFORM)` and `process.env.TEST_PLATFORM ?? "android"`.

---

## 4. Objects, Interfaces, and Type Aliases

### Topic
Modeling API response shapes with interfaces.

### Why this matters here
The project has many API response types, especially under `http-clients/**`.

### Example
```ts
export interface CardById {
  id: string;
  title: string;
  type: string;
  priority: number;
  theme_name: string;
  universal_data?: UniversalData[];
}
```

### Learn
- interface design
- optional fields
- nested object modeling
- type aliases for shared data contracts

### Practice
- Open `http-clients/card/card-by-id/card-by-id.type.ts` and identify 3 fields that are required and 2 that are optional.

---

## 5. Arrays, Records, and Index Access

### Topic
Working with collections and lookup tables.

### Why this matters here
The project frequently uses `Record<string, ...>` and arrays of cards.

### Example
```ts
export interface CardByIdApiResponse {
  cards: Record<string, CardById>;
  settings: CardByIdSettings;
}
```

### Learn
- `Record<string, T>`
- array iteration with `for...of`
- indexed access, for example `response.cards[cardId]`

### Practice
- Read `card-by-id.service.ts` and explain what `CardByIdApiResponse["cards"][string]` means.

---

## 6. Optional Values, Nulls, and Guard Clauses

### Topic
Using runtime checks before reading properties.

### Why this matters here
API fields may be absent, and the project validates before dereferencing values.

### Example
```ts
const childCard = (await businessDrawerService.getChildCardById(childCardId)) as ChildCard;
const universalData = childCard.universal_data?.[0];

if (!universalData) {
  throw new Error(`universal_data not found for card ${childCardId}`);
}
```

### Learn
- optional chaining `?.`
- guard clauses
- throwing meaningful errors

### Practice
- Find a similar guard in `pageObjects/actions/businessDrawer.action.ts`.
- Explain why the guard exists before using `business_drawer.chip`.

---

## 7. Union Types, Literal Types, and Narrowing

### Topic
Creating safer, more precise TypeScript contracts.

### Why this matters here
Project data often has a known set of platform or response types.

### Example
```ts
type Platform = "android" | "ios";

function formatPlatform(p: Platform): string {
  return p.toLowerCase();
}
```

### Learn
- union types
- literal types
- narrowing with conditionals

### Practice
- Write a `type UserType = "parent" | "child"` and use it in `getAuthToken()` logic.

---

## 8. Type Assertions and Safe Type Casting

### Topic
When TypeScript is not enough, and you need to tell it a value shape.

### Why this matters here
The project uses a type assertion for WebdriverIO capabilities.

### Example
```ts
return (driver.requestedCapabilities as Record<string, string>)["platformName"].toLowerCase();
```

### Learn
- `as Record<string, string>` is a compile-time hint
- type assertions are not runtime validation
- avoid unsafe assertions when runtime checks are possible

### Practice
- Explain what this assertion does, and why it is not the same as validating the value exists.

---

## 9. Generics and Reusable Data Contracts

### Topic
Generic types for reusable, typed code.

### Why this matters here
Axios and data access code use generics to type the API response.

### Example
```ts
const response = await axios.get<CardByIdApiResponse>(endPoint);
```

### Learn
- generics in function and method calls
- typed API responses
- how TypeScript improves correctness for API clients

### Practice
- Explain why `CardByIdClient.getCardById()` is easier to use when it is typed as `axios.get<CardByIdApiResponse>`.

---

## 10. Async/Await and Promises

### Topic
Handling asynchronous operations correctly.

### Why this matters here
WebdriverIO, Appium, Mocha, and Axios all depend heavily on async behavior.

### Example
```ts
async init(cardId: string): Promise<void> {
  this.cachedResponse = await this.client.getCardById(cardId);
}
```

### Learn
- `async` functions return `Promise<T>`
- `await` waits for the value
- never leave promises unhandled

### Practice
- Trace the flow from `businessDrawerService.init()` to `businessDrawer.getBusinessDrawerChildIds()`.

---

## 11. Classes, Encapsulation, and Services

### Topic
Structuring logic with classes and private state.

### Why this matters here
The project uses service classes and page object classes to hide behavior and keep tests clean.

### Example
```ts
export default class CardByIdService {
  private client = new CardByIdClient();
  private cachedResponse: CardByIdApiResponse | null = null;
}
```

### Learn
- `private` members
- service-oriented design
- separation of API transport from business logic

### Practice
- Compare `CardByIdClient` and `CardByIdService` and explain which one handles HTTP and which one handles orchestration.

---

## 12. TypeScript in Test Specs and Assertions

### Topic
Using TypeScript in Mocha and Chai tests.

### Why this matters here
The repo uses Mocha + Chai and expects test files to stay focused on assertions.

### Example
```ts
it("C809461: Validate parent card type is business_drawer", async () => {
  const cardIds = businessDrawerService.getBusinessDrawerParentCardId();
  expect(cardIds.length).to.be.greaterThan(0);
});
```

### Learn
- test structure with `describe`/`it`
- `expect` style in this repo
- type-safe setup with async tests

### Practice
- Open `test/specs/integration/card/business-drawer.spec.ts` and explain what the test is checking.

---

## 13. TypeScript in Page Objects and UI Actions

### Topic
Page objects as reusable typed UI logic.

### Why this matters here
Tests do not directly interact with selectors; the actions are centralized.

### Example
```ts
async getBusinessDrawerChildData(arg: { childCardId: string }): Promise<ChildCardData> {
  const { childCardId } = arg;
  const childCard = (await businessDrawerService.getChildCardById(childCardId)) as ChildCard;
  return { childCard, businessDrawer, chip };
}
```

### Learn
- typed arguments
- `Promise<T>` return values
- centralizing UI and API logic

### Practice
- Trace one method from `pageObjects/actions/businessDrawer.action.ts` to the UI test in `test/specs/UI/card/businessDrawerUI.spec.ts`.

---

## 14. Runtime Validation for External Data

### Topic
Why external API data should be treated as untrusted.

### Why this matters here
The application receives JSON from APIs; the TypeScript type is only a guide until runtime validation.

### Example
```ts
if (!childCard.universal_data?.[0]) {
  throw new Error("Missing universal_data");
}
```

### Learn
- validation before use
- defensive programming
- better error messages for debugging

### Practice
- Pick one API property and explain how you would validate it before using it.

---

## 15. Project Architecture and TypeScript Organization

### Topic
Matching TypeScript structure to project folders and responsibilities.

### Why this matters here
The repo is already organized by concern: API clients, page objects, services, configs, and tests.

### Example file map
- `config/` → runtime configuration and env logic
- `http-clients/` → HTTP transport and typed responses
- `pageObjects/actions/` → reusable UI behavior
- `pageObjects/locators/` → selectors
- `test/specs/` → Mocha/Chai tests

### Learn
- separation of concerns
- project conventions from `.github/skills/typescript-conventions/SKILL.md`
- keeping code in the correct layer

### Practice
- Name the folder where you would add a new API response type for a feature and explain why.

---

## Capstone Project Exercise

### Task
Trace one real feature through the repository.

### Example path
`business drawer` flow:
1. API type in `http-clients/card/card-by-id/card-by-id.type.ts`
2. API client call in `http-clients/card/card-by-id/card-by-id.client.ts`
3. Service logic in `http-clients/card/card-by-id/card-by-id.service.ts`
4. UI action in `pageObjects/actions/businessDrawer.action.ts`
5. Integration/UI checks in `test/specs/...`

### Deliverable
Write a short note explaining:
- which types are used,
- which async calls happen,
- where optional values are checked,
- what the final assertion proves.

---

## Suggested Learning Order

1. Fundamentals and variables
2. Functions and return types
3. Objects and interfaces
4. Arrays and records
5. Unions and narrowing
6. Async/Await
7. Classes and services
8. API + UI test integration

## Recommended Weekly Practice

- Day 1: read and rewrite 5 small TypeScript snippets from the repo
- Day 2: type one config file and one API response file
- Day 3: write a small service method with a typed return value
- Day 4: trace a UI test to a page object and API client
- Day 5: run `npm run lint` and review one error at a time

---

## Final Checklist

Before considering yourself comfortable with TypeScript in this project, you should be able to:
- read a config function and explain its types
- model an API response with interfaces
- use optional chaining and guards correctly
- handle async flows with `await`
- make a page-object method or service typed and safe
- run lint and fix issues by understanding the error, not guessing
