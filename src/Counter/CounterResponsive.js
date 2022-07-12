import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  multiplyByAmount,
  divideByAmount,
  reset,
  multiply,
  incrementAsync} from '../redux-store/slices/counterSlice';
import Grid from '@mui/material/Grid';
import './CounterResponsive.css';
import redux from '../media/redux.svg';


export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const count2 = useSelector( (state) => state.counter.value2);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState('1');

  const reset = () => {
    setIncrementAmount('1');
    dispatch(reset());
  }

  return (
      <Grid className="gridContainer" container columns={4}>
        <Grid className="gridItem" item xs={4} md={4} lg={2}>
          <div className="section1">
            <div class="title">
              <img class="redux-logo" src={redux} width='45px' height='45px'/>
              <h1 id="title">Redux Counter</h1>
            </div>
            <div id="desc">
              A counter built to implement Redux fundamentals such as creating a <span id="desc_highlight">Redux Store</span> and <span id="desc_highlight">State Slice</span>, adding <span id="desc_highlight">Slice Reducers</span>, and implementing <span id="desc_highlight">useSelector</span> and <span id="desc_highlight">useDispatch</span> hooks
            </div>
          </div>
        </Grid>
        <Grid className="gridItem" item xs={4} md={4} lg={2}>
          <div className="section2">
            <div className="container values">
              <h1 id="count">{count}</h1>
              </div>

            <div className="container actions">
              <div className="container actions1">
                <div class="action row">
                  <button class="button-29" aria-label="Increment" onClick={ () => dispatch( incrementByAmount(Number(incrementAmount)))}>
                  +
                  </button>
                  <button class="button-29" aria-label="Decrement" onClick={ () => dispatch( decrementByAmount(Number(incrementAmount)))}>
                  -
                  </button>
                </div>
                <div class="action row">
                  <button class="button-29" aria-label="Multiply" onClick={() => dispatch( multiplyByAmount(Number(incrementAmount)))}>
                  x
                  </button>
                  <button class="button-29" aria-label="Divide" onClick={() => dispatch( divideByAmount(Number(incrementAmount)))}>
                  /
                  </button>
                </div>
            </div>

            <h1 id="by">by</h1>

            <div class="input row">
              <input onChange={e => setIncrementAmount(e.target.value)} value={incrementAmount}/>
            </div>
        </div>
        <button class='button-29' id="reset" aria-label="Reset" onClick={() => reset()}>RESET</button>
          </div>
        </Grid>
      </Grid>

  )
}
