
// Completed code
https://codepen.io/sgrider/pres/oQjBvG

// People dropping off a form (action creators)
const createPolicy = (name, amount) => {
  return { // Action (a form in analogy)
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  }
}

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  }
}

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  }
}

// Reducers (Departments)
const claimHistory = (oldListOfClaims = [], action) => {
  if(action.type === 'CREATE_CLAIM') {
    // we care about this action (FORM!)
    return [...oldListOfClaims, action.payload];
  }

  // we don't care the action
  return oldListOfClaims;
}

const accounting = (bagOfMoney = 100, action) => {
  if(action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if(action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amountOfMoneyToCollect;
  }

  return bagOfMoney;
}

const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name)
  }

  return listOfPolicies;
}

///
const { createStore, combineReducers } = Redux;
const ourDepartments = combineReducers({
  accounting: accounting,
  claimHistory: claimHistory,
  policies: policies
})

const store = createStore(ourDepartments);

const action = createPolicy('Alex', 20);

store.dispatch(action);
store.dispatch(createPolicy('Jon', 30));
store.dispatch(createPolicy('Smith', 40));

store.dispatch(createClaim('Alex', 120));

console.log(store.getState())
