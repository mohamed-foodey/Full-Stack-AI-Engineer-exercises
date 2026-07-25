import { useReducer } from "react";

const initialState = {
  step: 1,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  confirmed: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "NEXT":
      return {
        ...state,
        step: state.step + 1,
      };

    case "BACK":
      return {
        ...state,
        step: state.step - 1,
      };

    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "CONFIRM":
      return {
        ...state,
        confirmed: true,
      };

    default:
      return state;
  }
}

const MultiStepRegistration = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  if (state.confirmed) {
    return (
      <div>
        <h1>✅ Registration Successful</h1>
        <p>Thank you for registering.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Multi Step Registration Form</h1>

      {/* STEP 1 */}
      {state.step === 1 && (
        <>
          <input
            type="text"
            placeholder="First Name"
            value={state.firstName}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "firstName",
                value: e.target.value,
              })
            }
          />

          <br />
          <br />

          <input
            type="text"
            placeholder="Last Name"
            value={state.lastName}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "lastName",
                value: e.target.value,
              })
            }
          />

          <br />
          <br />

          <button onClick={() => dispatch({ type: "NEXT" })}>
            Next
          </button>
        </>
      )}

      {/* STEP 2 */}
      {state.step === 2 && (
        <>
          <input
            type="email"
            placeholder="Email"
            value={state.email}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "email",
                value: e.target.value,
              })
            }
          />

          <br />
          <br />

          <input
            type="text"
            placeholder="Phone Number"
            value={state.phone}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "phone",
                value: e.target.value,
              })
            }
          />

          <br />
          <br />

          <button onClick={() => dispatch({ type: "BACK" })}>
            Back
          </button>

          <button onClick={() => dispatch({ type: "NEXT" })}>
            Next
          </button>
        </>
      )}

      {/* STEP 3 */}
      {state.step === 3 && (
        <>
          <h2>Review</h2>

          <p>
            <strong>First Name:</strong> {state.firstName}
          </p>

          <p>
            <strong>Last Name:</strong> {state.lastName}
          </p>

          <p>
            <strong>Email:</strong> {state.email}
          </p>

          <p>
            <strong>Phone:</strong> {state.phone}
          </p>

          <button onClick={() => dispatch({ type: "BACK" })}>
            Back
          </button>

          <button onClick={() => dispatch({ type: "CONFIRM" })}>
            Confirm
          </button>
        </>
      )}
    </div>
  );
};

export default MultiStepRegistration;