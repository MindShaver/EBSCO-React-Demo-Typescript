import IBulletinData from "../../Services/IBulletinData";
import { observable, action, computed, configure } from "mobx";

// configure({ enforceActions: "always" });

export class BulletinStore {
  @observable bulletins: IBulletinData[] = [];

  @computed
  public get bulletinCount(): number {
    return this.bulletins.length;
  }

  @action
  public addBulletins(bulletinsToAdd: IBulletinData[]): void {
    this.bulletins = bulletinsToAdd;
  }
  
  @action
  public removeBulletin(bulletinId: string): void {
    this.bulletins = this.bulletins.filter(b => {
      return b.id !== bulletinId;
    });
  }

  @action
  public updateBulletin(bulletinId: string, patchData: IBulletinData): void {
    this.bulletins = this.bulletins.filter(b => {
      return b.id !== bulletinId;
    });

    this.bulletins.push(patchData);
  }

  @action
  public rollback(bulletins: IBulletinData[]): void {
    this.bulletins = bulletins;
  }
}

export const bulletinStore = new BulletinStore();
