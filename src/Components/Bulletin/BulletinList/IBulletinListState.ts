import IBulletinData from "../../../Services/IBulletinData";

export default interface IBulletinListState {
  error: Error | null;
  isLoaded: boolean;
}
