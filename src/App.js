import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/useState-Hook/ClassCounter';
import HookCounter from './components/useState-Hook/HookCounter';
import HookCounterTwo from './components/useState-Hook/HookCounterTwo';
import HookCounterThree from './components/useState-Hook/HookCounterThree';
import HookCounterFour from './components/useState-Hook/HookCounterFour';
import EffectHookCounter from './components/useEffect-Hook/EffectHookCounter';
import HookMouse from './components/useEffect-Hook/HookMouse';
import MouseContainer from './components/useEffect-Hook/MouseContainer';
import IntervalHookCounter from './components/useEffect-Hook/IntervalHookCounter';
import DataFetching from './components/useEffect-Hook/DataFetching';
import ComponentC from './components/useContext-Hook/ComponentC';
import CounterOne from './components/useReducer-Hook/CounterOne';
import CounterTwo from './components/useReducer-Hook/CounterTwo';
import CounterThree from './components/useReducer-Hook/CounterThree';
import ComponentA from './components/useReducer_with_useContext/ComponentA';
import ComponentB from './components/useReducer_with_useContext/ComponentB';
import ComponentC1 from './components/useReducer_with_useContext/ComponentC1';
import DataFetching1 from './components/useReducer-Hook/DataFetching1';
import DataFetching2 from './components/useReducer-Hook/DataFetching2';
import ParentComponent from './components/useCallBack-Hook/ParentComponent';
import CounterMemo from './components/useMemo-Hook/CounterMemo';
import FocusInput from './components/useRef-Hook/FocusInput';
import ClassTimer from './components/useRef-Hook/ClassTimer';
import HookTimer from './components/useRef-Hook/HookTimer';
import DocTitleOne from './components/Custom-Hooks/DocTitleOne';
import DocTitleTwo from './components/Custom-Hooks/DocTitleTwo';
import CustomCounterOne from './components/Custom-Hooks/CustomCounterOne';
import CustomCounterTwo from './components/Custom-Hooks/CustomCounterTwo';
import UserForm from './components/Custom-Hooks/UserForm ';

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();
//export const CountContext = React.createContext();

// const initialState = 0;
// const reducer = (currentState, action) => {
//     switch(action){
//         case 'increment' :
//             return currentState + 1    
//         case 'decrement' :
//             return currentState - 1
//         case 'reset' :
//             return initialState
//         default : 
//             return currentState
//     }
// }

function App() {
  //const [count, dispatch] = useReducer(reducer, initialState); 

  return (
    <div className="App">

      <UserForm />
      {/* <CustomCounterOne />
      <CustomCounterTwo />*/}
      {/* <DocTitleOne />
      <DocTitleTwo />*/}
      {/* <HookTimer />
      <ClassTimer />*/}
      {/* <FocusInput />*/}
      {/* <CounterMemo />*/}
      {/* <ParentComponent />*/}
      {/* <DataFetching2 />*/}
      {/* <DataFetching1 />*/}
    </div>
    );
  }

    {/* <CountContext.Provider 
      value={{countState : count, countDispatch : dispatch}}>
      <div className="App">
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC1 />
      */}
      {/* <CounterThree />*/}

      {/* <CounterTwo />*/}

      {/* <CounterOne />*/}

      {/* <UserContext.Provider value={'MD'}>
        <ChannelContext.Provider value={'HP'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>*/}

      {/* <DataFetching />*/}

      {/* <IntervalHookCounter />*/}

      {/* <MouseContainer />*/}

      {/* <HookMouse />*/}

      {/* <EffectHookCounter />*/}

      {/* <HookCounterFour />*/}

      {/* <HookCounterThree />*/}

      {/* <HookCounterTwo />*/}

      {/* <ClassCounter />
      <HookCounter />*/}
      {/* </div>
    </CountContext.Provider>*/}


export default App;
