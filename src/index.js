import "./style";
import { Provider, connect } from "unistore/preact";
import createStore from "unistore";

let store = createStore({ count: 0 });

// If actions is a function, it gets passed the store:
let actions = store => ({
  // Actions can just return a state update:
  increment(state) {
    return { count: state.count + 1 };
  },

  // The above example as an Arrow Function:
  increment2: ({ count }) => ({ count: count + 1 }),

  // Async actions are actions that call store.setState():
  incrementAsync(state) {
    setTimeout(() => {
      store.setState({ count: state.count + 1 });
    }, 100);
  }
});

const Counter = connect("count", actions)(({ count, increment }) => (
  <div>
	<h1>Press the button</h1>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
));

export default function App() {
	return (
		<div>
			<h1>Hello, World!</h1>
 			<Provider store={store}>
 				<Counter />
	 	  	</Provider>
		</div>
	);
}
