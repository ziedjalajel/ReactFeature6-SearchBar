# Cookie Detail

## Discussion

**Topics to discuss:**

- `onChange`

## Step 0: Previous Challenge

1. Let's start with adding a `p` tag above our cookie name:

```jsx
<DetailWrapper>
  <p>Back to Cookies</p>
  <h1>{cookie.name}</h1>
```

2. To render the list of cookies, we need to set `cookie` to `null` or any value that gives us `false`. So we can easily pass `props.selectCookie` without passing anything to it, this will set `cookie` to `undefined` which is `false`.

```jsx
<DetailWrapper>
  <p onClick={props.selectCookie}>Back to Cookies</p>
  <h1>{cookie.name}</h1>
```

3. And that's it!

Today, we'll be adding a search bar that `filters` our list of cookies with every letter we write in the search bar.

## Step 1: Adding a Search Bar

1. Let's start with creating a `SearchBar` component, and adding an `input` tag:

```javascript
import React from "react";

const SearchBar = () => {
  return <input />;
};

export default SearchBar;
```

2. We will render it right above our cookies list in `CookieList`:

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

1. What we'll do now is create a query state and method. Every time the user writes **anything** in the search bar the value will be saved in `query`.

```javascript
const [query, setQuery] = useState("");
```

2. Now we will pass `setQuery` as a prop to `SearchBar`.

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
const filteredCookies = props.cookies.filter((cookie) =>
  cookie.name.includes(query)
);

console.log("filteredCookies", filteredCookies);
```

4. It's working!!! Now let's map over our `filteredCookies`:

```javascript
const cookieList = filteredCookies.map((cookie) => (
  <CookieItem
    cookie={cookie}
    key={cookie.id}
    deleteCookie={props.deleteCookie}
    selectCookie={props.selectCookie}
  />
));
```

5. Now that's magic!!!

6. But let's do this in one line:

```javascript
const cookieList = props.cookies
  .filter((cookie) => cookie.name.includes(query))
  .map((cookie) => (
    <CookieItem
      cookie={cookie}
      key={cookie.id}
      deleteCookie={props.deleteCookie}
      selectCookie={props.selectCookie}
    />
  ));
```

7. Voila! We're done!
