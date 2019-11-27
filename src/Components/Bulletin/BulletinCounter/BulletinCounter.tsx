import { observer } from "mobx-react";
import React from "react";
import IBulletinCounterProps from "./IBulletinCounterProps";

const BulletinCounter: React.FC<IBulletinCounterProps> = props => {
  const bulletinCount = props.bulletinStore.bulletinCount;
  return <div>Bulletin Count - {bulletinCount}</div>;
};

export default observer(BulletinCounter);
