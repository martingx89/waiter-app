import { API_URL } from '../config';

//selectors
export const getAllTables = (state) => state.tables;
export const getTableById = ({ tables }, tableId) => tables.find((table) => table.id === tableId);
export const getAllTableIds = (state) => state.tables.map((table) => table.id);

// actions
const createActionName = (actionName) => `app/tables/${actionName}`;
export const SHOW_TABLES = createActionName('SHOW_TABLES');
export const UPDATE_TABLE = createActionName('UPDATE_TABLE');
export const ADD_TABLE = createActionName('ADD_TABLE');
export const DELETE_TABLE = createActionName('DELETE_TABLE');

// action creators
export const showTables = (payload) => ({ type: SHOW_TABLES, payload });
export const updateTable = (payload) => ({ type: UPDATE_TABLE, payload });
export const addTable = (payload) => ({ type: ADD_TABLE, payload });
export const deleteTable = (payload) => ({ type: DELETE_TABLE, payload });

export const fetchTables = () => {
  return (dispatch) => {
    fetch(`${API_URL}/tables`)
      .then((res) => res.json())
      .then((tables) => dispatch(showTables(tables)));
  };
};

export const sendData = (data) => {
  return (dispatch) => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    fetch(`${API_URL}/tables/${data.id}`, options)
      .then((res) => res.json())
      .then((data) => dispatch(updateTable(data)));
  };
};

export const removeRequest = (id) => {
  return (dispatch) => {
    const removedId = { id };

    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(removedId),
    };
    fetch(`${API_URL}/tables/${id}`, options)
      .then((res) => res.json())
      .then((data) => dispatch(deleteTable(data.id)));
  };
};

export const addRequest = (id) => {
  return (dispatch) => {
    const newTable = {
      id,
      peopleAmount: 0,
      bill: 0,
      maxPeople: 0,
      status: 'Free',
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTable),
    };
    fetch(`${API_URL}/tables`, options)
      .then((res) => res.json())
      .then((data) => dispatch(addTable(data.id)));
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case SHOW_TABLES:
      return [...action.payload];
    case UPDATE_TABLE:
      return statePart.map((table) => (table.id === action.payload.id ? { ...table, ...action.payload } : table));
    case ADD_TABLE:
      return [...statePart, { ...action.payload }];
    case DELETE_TABLE:
      return statePart.filter((table) => table.id !== action.payload);
    default:
      return statePart;
  }
};
export default tablesReducer;
