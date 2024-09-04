
// importing
import {useDispatch,useSelector} from 'react-redux'
import { decrement, incByVal, increment } from './redux/CounterSlice';

function App() {
                  "⬇️-for reding only",  "⬇️-store/state",    "⬇️-name of state"
  const counter = useSelector(          (store)        =>store.counterx .value)
                    "⬇️-dispatch the actions into store/etc"
  const dispatch = useDispatch();
  return (
    <div>
{counter}
<input type='text' value={(e)=>incByVal(e.target.value)}/>
<button>submit</button>
                  {/* "⬇️-dispatch the action name here to reducer"          "⬇️-name of action" */}
<button onClick={()=>dispatch                                               (increment())}>inc</button>
<button onClick={()=>dispatch                                               (decrement())}>dec</button>
<button onClick={()=>dispatch                                               (incByVal(32))}>incbyval</button>
    </div>
  )
}

export default App