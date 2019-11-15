const initialState = {
  data: [],
  newItem: {},
  sort: {
    categories: [
      {name: 'Name', value: 'name'},
      {name: 'Email', value: 'email'},
      {name: 'Status', value: 'status'}
    ],
    sortSelected: '',
    sortDirection: -1,
  },
  modalIsOpen: false,
  modalType: ''
};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_DATA_SUCCESS':
      return { 
        ...state,
        data: [ ...action.data ]
      }

    case 'APPLY_FILTER_SUCCESS':
      return { 
        ...state,
        data: [ ...action.data.data ],
        sort: { ...state.sort, sortSelected: action.data.sortSelected, sortDirection: -state.sort.sortDirection }
      }

    case 'ADD_ITEM':
      return { 
        ...state,
        data: [action.data].concat(state.data)
      }

    case 'EDIT_ITEM':
      return { 
        ...state,
        data: state.data.map(item => item._id === action.data._id ? action.data : item)
      }

    case 'MODAL_TOGGLE':
      return { 
        ...state,
        modalIsOpen: !state.modalIsOpen,
        modalType: action.data
      }

    case 'SET_INPUT_VALUE':
      return { 
        ...state,
        newItem: { ...state.newItem, ...action.data }
      }

    default:
      return state;
  }
}
