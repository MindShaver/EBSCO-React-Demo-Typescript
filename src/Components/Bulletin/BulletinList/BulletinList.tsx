import React, { useState, useEffect } from "react";
import BulletinItem from "../BulletinItem/BulletinItem";
import IBulletinListState from "./IBulletinListState";
import ApiService from "../../../Services/Api/ApiService";
import { observer } from "mobx-react";
import IBulletinListProps from "./IBulletinListProps";

const BulletinList: React.FC<IBulletinListProps> = props => {
  const bulletinStore = props.bulletinStore;
  const [listState, setListState] = useState<IBulletinListState>({
    error: null,
    isLoaded: false
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      await ApiService.getBulletins();

      setListState({
        error: null,
        isLoaded: true
      });
    } catch (err) {
      setListState({
        error: err,
        isLoaded: false
      });
    }
  };

  const removeBulletin = (bulletinId: string) => {
    ApiService.removeBulletin(bulletinId);
  };

  const handleUpVote = (bulletinId: string) => {
    const previousBulletins = bulletinStore.bulletins;
    const patchBody = bulletinStore.bulletins.find(x => x.id === bulletinId);
    patchBody!.votes += 1;

    try {
      ApiService.patchUpvotes(bulletinId, patchBody!);
    } catch (err) {
      ApiService.rollbackBulletins(previousBulletins);
      setListState({
        error: err,
        isLoaded: true
      });
    }
  };

  const itemRender = () => {
    return (
      <div className="main ui text container">
        <div id="content">
          <div className="ui unstackable items">
            {bulletinStore.bulletins
              .sort((a, b) => b.votes - a.votes)
              .map(item => {
                return (
                  <BulletinItem
                    key={"product-" + item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    votes={item.votes}
                    upvote={handleUpVote}
                    remove={removeBulletin}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  };

  return <div>{listState.isLoaded ? itemRender() : <div>Loading...</div>}</div>;
};

export default observer(BulletinList);
