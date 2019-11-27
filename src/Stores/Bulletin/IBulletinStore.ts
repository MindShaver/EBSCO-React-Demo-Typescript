import IBulletinData from "../../Services/IBulletinData";

export default interface IBulletinStore {
  bulletins: IBulletinData[];
  bulletinCount: number;
  addBulletins: (bulletinsToAdd: IBulletinData[]) => void;
  removeBulletin: (bulletinId: string) => void;
  updateBulletin: (bulletinId: string, patchData: IBulletinData) => void;
  rollback: (bulletins: IBulletinData[]) => void;
}
