import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";
function Counter() {
  const [incrementAmount, setincrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const restAll = () => {
    setincrementAmount(0);
    dispatch(reset());
  };
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <section>
      <p>{count}</p>
      <input type="text" value={incrementAmount} onChange={(e) => setincrementAmount(e.target.value)} />
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add value
        </button>
        <button onClick={restAll}>Reset</button>
      </div>
    </section>
  );
}

export default Counter;
