1. What problem does the context API help solve?

it helps with avoiding prop drilling

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

the store is one place/object to contain the whole application state, hence 'single source of truth', though components can have their own state.

reducers are pure functions that deterimine how app state is manipulated, it takes in the initial state and the dispatched action which determines how the state is changed

actions send the type of event that happened in the app to the store

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is the global state held in the store that conains the entire app, therefore it can be accessed anywhere in the application.

component state is state that is created and set inside of a particular component and can only be used by the component of its origin or passed as props down the tree

application state is useful when you need to access a state throughout various branches of an app component tree and component state is useful for using state on fewer components that are part of the same branch

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

thunk is a type of middleware that intercepts actions and allows them to return a function.
instead of them just being objects now they can perform more complex funtions like conditionally making an api call

1. What is your favorite state management system you've learned and this sprint? Please explain why!

we only worked with 'context' for one day, but it seems a little less complex though it does not appear to have the same range of state accessibility as redux does. So i guess i would say Redux is my favorite because it can be used on a larger scale.

