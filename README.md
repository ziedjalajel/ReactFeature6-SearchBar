# Cookie Detail

## Discussion

**Topics to discuss:**

- `onChange`

## Step 0: Previous Challenge

1. Let's start with adding a `p` tag above our cookie name:

```jsx
<DetailWrapper>
  <p onClick={props.deleteCookie}>Back to Cookies</p>
  <h1>{cookie.name}</h1>
```

2. To render the list of cookies, we need to set `cookie` to `null`. So we can easily pass `props.deleteCookie` without passing anything to it:

```jsx
<DetailWrapper>
  <p onClick={props.deleteCookie}>Back to Cookies</p>
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
const Search = styled.input`
  padding: 0.5rem;
  margin-top: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
`;
```

4. Render it in `SearchBar` and add a placeholder:

```javascript
import React from "react";

// Styling
import { Search } from "../styles";

const SearchBar = () => {
  return <Search placeholder="Search for a cookie name" />;
};

export default SearchBar;
```

5. Now, how can we extract the user's input? We will use a new event called `onChange`. This event gives us `event` as an argument, we will find the user's input inside this `event.target.value`:

```javascript
onChange={event => console.log(event.target.value)}
```

6. Let's check our console, we'll find our value there!

## Step 2: Search Cookies Method

1. What we'll do now is create a method that's triggered every time the user writes in **anything** in the search bar. This method will take the value the user entered as an argument and compare it to the names in our `cookies` list. So since we're dealing with `cookies`, this method must be placed in `App`.

2. In `App.js`, create a `search` method that for now just logs the query, which is the value the user entered

```javascript
const search = query => {
  console.log(query);
};
```

3. Now we will pass this method as a prop down two levels, `App` -> `CookieList` -> `SearchBar`. In `App`:

```jsx
<CookieList
  cookies={_cookies}
  deleteCookie={deleteCookie}
  searchCookies={searchCookies}
  selectCookie={selectCookie}
/>
```

4. In `CookieList`:

```jsx
<SearchBar searchCookies={props.searchCookies} />
```

5. In `SearchBar`, pass the method to `onChange`:

```jsx
<Search
  placeholder="Search for a cookie name"
  onChange={event => props.searchCookies(event.target.value)}
/>
```

6. Check your console. It's working!

## Step 3: Search!

The way we want our method to work is that the user can enter any part of the cookie's name and the list of rendered cookies will change according to that.

1. So we will `filter` over our `cookies`, but what will our condition be?

```javascript
const search = query => {
  const filteredCookies = _cookies.filter(cookie => )
};
```

2. We will use a method called `include` which is a JavaScript method. Let's take a look at the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes).

3. As you can see, `includes` returns either `true` or `false`. So we will check if `cookie.name` `includes` the `query`:

```javascript
const searchCookies = query => {
  const filteredCookies = _cookies.filter(cookie =>
    cookie.name.includes(query)
  );
  console.log("App -> filteredCookies", filteredCookies);
};
```

4. It's working! But it's case sensitive! How can we fix that? By using `toLowerCase` or `toUpperCase` on both `cookie.name` and `query`. This guarantees that there is no issue with the case:

```javascript
const searchCookies = query => {
  const filteredCookies = _cookies.filter(cookie =>
    cookie.name.toLowerCase().includes(query.toLowerCase())
  );
  console.log("App -> filteredCookies", filteredCookies);
};
```

5. It's working!!! Now to see those changes, we will use `setCookies` and pass it `filteredCookies`:

```javascript
const searchCookies = query => {
  const filteredCookies = _cookies.filter(cookie =>
    cookie.name.toLowerCase().includes(query.toLowerCase())
  );
  console.log("App -> filteredCookies", filteredCookies);
};
```

6. Now that's magic!!!

7. But we have an issue.. if you delete the letters in the search bar, we're not getting our list back. Who can tell me why?

8. That's because we're comparing to the already filtered list of cookies which is `_cookies`. We must **always** search through `cookies` which is the original list that we can't change:

```javascript
const searchCookies = query => {
  const filteredCookies = cookies.filter(cookie =>
    cookie.name.toLowerCase().includes(query.toLowerCase())
  );
  console.log("App -> filteredCookies", filteredCookies);
};
```

9. Voila! We're done!
