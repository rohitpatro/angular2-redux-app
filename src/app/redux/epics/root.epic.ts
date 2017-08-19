import { combineEpics, createEpicMiddleware, EpicMiddleware } from 'redux-observable';
import { IPayloadAction } from '../action/index.action';


export class RootEpic {
  private middleware: EpicMiddleware<IPayloadAction, any>;

  constructor() {
    this.registerEpicMiddleware();
  }

  private registerEpicMiddleware() {
    let epics = combineEpics();
    this.middleware = createEpicMiddleware(epics);
  }

  public getAllEpics(): EpicMiddleware<any, any> {
    return this.middleware;
  }

}
