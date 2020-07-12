# Cookie Detail

## Discussion

**Topics to discuss:**

- `onChange`
- Passing state as a prop

## Step 0: Previous Challenge

1. The word `Dark` in our button is not changing, it's weird to have it always saying `Dark Mode`. Let's give it a condition! If `theme` is equal to `light`, the return value of the conditional operator is `Dark`, else it will be `Light`.

```jsx
<ThemeButton onClick={toggleTheme}>
  {theme === "light" ? "Dark" : "Light"} Mode
</ThemeButton>
```

## Step 1: Adding a Search Bar

1. Let's start with creating a `SearchBar` component, and adding an `input` tag:

```javascript
import React from "react";

const SearchBar = () => {
  return <input />;
};

export default SearchBar;
```

2. We will render it right above our `ListWrapper` in `CookieList`:

```javascript
import SearchBar from "./SearchBar";
```

```jsx
<>
  <SearchBar />
  <ListWrapper>{cookieList}</ListWrapper>
</>
```

3. Let's create a styled component for it in `styles`:

```javascript
const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
```

4. Render it in `SearchBar` and add a placeholder:

```javascript
import React from "react";

// Styling
import { SearchBarStyled } from "../styles";

const SearchBar = () => {
  return <SearchBarStyled placeholder="Search for a cookie name" />;
};

export default SearchBar;
```

5. Now, how can we extract the user's input? We will use a new event called `onChange`. This event gives us `event` as an argument, we will find the user's input inside this `event.target.value`:

```javascript
onChange={event => console.log(event.target.value)}
```

6. Let's check our console, we'll find our value there!

## Step 2: Query State

1. What we'll do now is create a query state and method in `CookieList`. Every time the user writes **anything** in the search bar the value will be saved in `query`.

```javascript
const [query, setQuery] = useState("");
```

2. So the `SearchBar` needs `setQuery` to change the value of `setQuery`. So we will pass `setQuery` as a prop to `SearchBar`.

```jsx
<SearchBar setQuery={setQuery} />
```

3. In `SearchBar`, pass the method to `onChange`. Now every time the user types in anything, the value will be saved in `query`.

```jsx
<SearchBarStyled
  placeholder="Search for a cookie name"
  onChange={(event) => props.setQuery(event.target.value)}
/>
```

4. Check your React Dev Tools. `query` is changing!

## Step 3: Search!

The way we want our method to work is that the user can enter any part of the cookie's name and the list of rendered cookies will change according to that.

1. So we will `filter` over our `cookies`, but what will our condition be?

```javascript
const filteredCookies = props.cookies
    .filter((cookie) => )
```

2. We will use a method called `include` which is a JavaScript method. Let's take a look at the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes).

3. As you can see, `includes` returns either `true` or `false`. So we will check if `cookie.name` `includes` the `query`:

```javascript
const filteredCookies = cookies.filter((cookie) => cookie.name.includes(query));

console.log("filteredCookies", filteredCookies);
```

4. It's working!!! Now let's map over our `filteredCookies`:

```javascript
const cookieList = filteredCookies.map((cookie) => (
  <CookieItem cookie={cookie} key={cookie.id} />
));
console.log("cookieList", cookieList);
```

5. Let's test it out. Nothing happened... But if we check the console, our array is changing! We agreed that if we want to see our elements change dynamically we need to use state. So `cookies` must be a `state` to be interactive!

6. Our state will represent the cookies on the screen so we will call it cookies, but we already have a variable called cookies which is our data. We'll call our state `_cookies`, and we'll set the initial value to `cookies` which has all our cookies.

```javascript
const [_cookies, setCookies] = useState(cookies);
```

7. Let's fix our `filter` method to use our state:

```javascript
const filteredCookies = _cookies.filter((cookie) =>
  cookie.name.includes(query)
);

console.log("filteredCookies", filteredCookies);
```

8. Now that's magic!!!

9. But let's do this in one line:

```javascript
const cookieList = _cookies
  .filter((cookie) => cookie.name.includes(query))
  .map((cookie) => <CookieItem cookie={cookie} key={cookie.id} />);
```

8. Voila! We're done!
