import IBulletinData from "../IBulletinData";
import IApiService from "./IApiService";
import IBulletinStore from "../../Stores/Bulletin/IBulletinStore";
import {bulletinStore} from "../../Stores/Bulletin/BulletinStore";

class ApiService implements IApiService {
  constructor(private readonly bulletinStore: IBulletinStore) {}

  async getBulletins(): Promise<void> {
    const bulletins = await fetch(
      "https://react-app-bulletins1.azurewebsites.net/api/bulletins"
    );

    const json = await bulletins.json();

    this.bulletinStore.addBulletins(json);
  }

  async patchUpvotes(
    bulletinId: string,
    patchBody: IBulletinData
  ): Promise<void> {
    fetch(
      "https://react-app-bulletins1.azurewebsites.net/api/bulletins/" +
        bulletinId,
      {
        method: "PATCH",
        body: JSON.stringify(patchBody),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    this.bulletinStore.updateBulletin(bulletinId, patchBody);
  }

  rollbackBulletins(rollback: IBulletinData[]) {
    this.bulletinStore.rollback(rollback);
  }

  removeBulletin(bulletinId: string) {
    this.bulletinStore.removeBulletin(bulletinId);
  }
}

export default new ApiService(bulletinStore);
