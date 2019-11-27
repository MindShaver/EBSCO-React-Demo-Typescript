import IBulletinData from "../IBulletinData";

export default interface IApiService {
  getBulletins: () => Promise<void>;
  patchUpvotes: (bulletinId: string, patchBody: IBulletinData) => Promise<void>;
  removeBulletin: (bulletinId: string) => void;
}
