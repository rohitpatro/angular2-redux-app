import { applyMiddleware, createStore, Store } from 'redux';
import { IAppState, rootReducer } from './reducers/app-reducer';
import { RootEpic } from './epics/root.epic';

export class AppStore {
  private store: Store<IAppState>;

  constructor(private rootEpic: RootEpic) {
    this.configureStore();
  }

  private configureStore() {
    this.store = createStore(rootReducer, {}, applyMiddleware(this.rootEpic.getAllEpics()));
  }

  public getInstance(): Store<IAppState> {
    return this.store;
  }
  
}
