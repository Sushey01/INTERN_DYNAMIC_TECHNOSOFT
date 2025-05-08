// CREATED TWO CUSTOM COMPONENTS FOR BUTTON TO ENHANCE THE BUTTON FUNCTIONALITY CUZ THE BUTTONS SHARE THE SAME LOGIC
import { useReducer } from "react"
import OperationButton from "./OperationButton"
import DigitButton from "./DigitButton";



// ACTIONS CONSTANTS OR OBJECTS TO DEFINE POSSIBLE DISPATCH IN THE LOGIC & KEEPS action-types ORGANIZED
export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION:'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT:'delete-digit',
  EVALUATE:'evaluate'
}


// CONTROLS THE APP STATE UPDATES ON USER ACTIONS: TYPING, DELETING & EVALUATING
function reducer(state, {type, payload}) {
  switch(type) {
    case ACTIONS.ADD_DIGIT:
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state
      }
      if(payload.digit === "." && 
        (state.currentOperand?.includes("."))){
        return state
    }
      return {
        ...state, 
        currentOperand: `${state.currentOperand || ""}${payload.digit}`
      };
      case ACTIONS.CHOOSE_OPERATION:
        if (state.currentOperand == null && state.previousOperand == null) {
          return state
        }


        if(state.previousOperand == null ) {
          return{
            ...state,
            operation: payload.operation,
            previousOperand:state.currentOperand,
            currentOperand:null,
          }
        }

        return{
          ...state,
          previousOperand: evaluate(state),
          operation:payload.operation,
          currentOperand:null
        }
      case ACTIONS.CLEAR:
        return{}

      case ACTIONS.DELETE_DIGIT:
        if (state.overwrite) {
          return {
            ...state,
            overwrite: false,
            currentOperand: null,
          }
        }

        if(state.currentOperand == null) return state 
        if (state.currentOperand.length === 1) {
          return {...state, currentOperand: null}
        }

        return {
          ...state,
          currentOperand: state.currentOperand.slice(0, -1),
        }


        case ACTIONS.EVALUATE:
          if (
            state.operation == null ||
            state.currentOperand == null ||
            state.previousOperand == null
          ) {
            return state
          }


          return {
            ...state, overwrite:true,
            previousOperand:null,
            operation:null,
            currentOperand:evaluate(state),
          }
  }

}

// HANDLING THE ACTUAL MATH CALCULATIONS & OPERATIONS LIKE '+' '-' AND SHOWING THE DISPLAY
function evaluate({ currentOperand, previousOperand, operation}) {
  
  const prev = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  if (isNaN(prev) || isNaN(current)) return ""
  let computation = ""
  switch (operation) {
    case "+":
    computation = prev +current;
    break
    case "-":
      computation = prev-current;
      break
      case "*":
        computation = prev*current;
        break
        case "÷":
          computation = prev/current;
          break
          default:
            return "";
  }
  return computation.toString();
}

// FORMATTING INTO US-ENG USING NUMBERFORMAT AND WITHOUT DECIMAL NUMBERS.
const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});




function formatOperand(operand){
  if (operand == null) return 
  const [integer, decimal] = operand.split(".")
  if (decimal == null) return INTEGER_FORMATTER.format(integer)
    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}


// useReducer track the state of the calculator and dispatch() tells reducer to take actions
function App() {
  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {
  });




  return (

    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand} {operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>

      <button className="span-two" onClick={() => dispatch({type: ACTIONS.CLEAR})}>AC</button>
      <button onClick={()=>dispatch({type: ACTIONS.DELETE_DIGIT})}>DEL</button>
      <OperationButton operation="÷" dispatch={dispatch}/>
      <DigitButton digit="1" dispatch={dispatch}/>
      <DigitButton digit="2" dispatch={dispatch}/>
      <DigitButton digit="3" dispatch={dispatch}/>
      <OperationButton operation="*" dispatch={dispatch}/>
      <DigitButton digit="4" dispatch={dispatch}/>
      <DigitButton digit="5" dispatch={dispatch}/>
      <DigitButton digit="6" dispatch={dispatch}/>
      <OperationButton operation="+" dispatch={dispatch}/>
      <DigitButton digit="7" dispatch={dispatch}/>
      <DigitButton digit="8" dispatch={dispatch}/>
      <DigitButton digit="9" dispatch={dispatch}/>
      <OperationButton operation="-" dispatch={dispatch}/>
      <DigitButton digit="." dispatch={dispatch}/>
      <DigitButton digit="0" dispatch={dispatch}/>
      <button className="span-two"
      onClick={()=>dispatch({type:ACTIONS.EVALUATE})}>=</button>
    </div>
  );
}

export default App;