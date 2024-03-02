import Head from 'next/head';
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "@/redux/features/counterSlice";


// export default function Home() {
//   return (<p>boogers</p>)
// }

export default function Home() {
  const count = useSelector((state) => state.counter.value); 
  const dispatch = useDispatch();

  return (
    <div className="">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="border border-red-950">Counter: {count}</h1> 
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <form
        className="border border-red-950"
        onSubmit={(e)=> {
          e.preventDefault();
          dispatch(incrementByAmount(parseInt(e.target.amount.value)))}
        }>
        <label>boogers
          <input
            name="amount"
            type="number"
            ></input>
          <button
            type="submit">
            submit
          </button>
        </label>
      </form>
    </div>
  );
};