import { AppStore } from '../redux/configure-store';

export class EventHelper {
  static BUSINESS_ENTITY: number = 100;
  static ACCOUNT: number = 101;
  static PRODUCT: number = 102;
  static USER: number = 103;
  static TEAM: number = 104;
  static PROFILE: number = 105;
  static TIER_TYPE: number = 106;
  static TIER: number = 107;

  constructor(private appStore: AppStore
              //,private associateAction: AssociateAction
  ) {
  }


}
