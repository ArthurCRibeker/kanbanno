import { combineReducers } from 'redux';

import sessionReducer from './session/session_reducer';
import errorsReducer from './errors/errors_reducer';
import usersReducer from './users/users_reducer';
import entitiesReducer from './entities/entities_reducer';
import uiReducer from './ui/ui_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  users: usersReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer
});

export default rootReducer;