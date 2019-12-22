import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
} from '../types';

export default (state, action) => {
	switch (action.type) {
		case ADD_CONTACT:
			return {
				...state,
				// add to existing contacts in state the contact parsed in as payload
				contacts: [...state.contacts, action.payload],
			};

		default:
			return state;
	}
};
