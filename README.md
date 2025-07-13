## Weather App
Weather app allows users to search for cities and view realtime weather information.

## Technologies
TODO: Doplnit

React
TypeScript
Redux Toolkit
Vite

## Instalation
1.
2.
3.

## Components
### Whisperer
IMG
Whisperer is made out of two other components (SearchBar, SearchBarTable).
User input is stored in Whisperer component and is spred out to other components.
By default 10 items are selected from JSON file based on user input and then are shown in table.
User can click on item, what happens depends on desired function declared above Whisperer component.

When user inputs text, first thing that happens is that program is trying to select cities that beggin with that query, then
program tries to find other cities that include that query.
Finally these data are combined and sliced based on limit, ready to be displayed.

Searches are stores via useMemo() for better performace.
For input i choosed useDeferredValue(), to optimize performace when handling fast input changes.

In our example:
User is searching cities, on display we can se name of the city and country where city lays. It is because
a lot cities share the same name, so it is more readable for user.

When user clicks on city, search bar is cleared out and city is save in store.

Whole component is designed to be reusable for other JSON files.
