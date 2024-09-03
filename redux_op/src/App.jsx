
// importing
import {useDispatch,useSelector} from 'react-redux'
import { decrement, incByVal, increment } from './redux/CounterSlice';

function App() {
                  "⬇️-for reding only",      "⬇️-name of state"
  const counter = useSelector((state)=>state.counterx .value)
                    "⬇️-dispatch the actions into store/etc"
  const dispatch = useDispatch();
  return (
    <div>
{counter}
                  {/* "⬇️-dispatch the action name here to reducer"          "⬇️-name of action" */}
<button onClick={()=>dispatch                                               (increment())}>inc</button>
<button onClick={()=>dispatch                                               (decrement())}>dec</button>
<button onClick={()=>dispatch                                               (incByVal(32))}>incbyval</button>
    </div>
  )
}

export default App