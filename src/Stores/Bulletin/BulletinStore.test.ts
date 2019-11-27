import IBulletinStore from './IBulletinStore';
import { BulletinStore } from './BulletinStore';
import IBulletinData from '../../Services/IBulletinData';

describe("Bulletin Store", () => {
    let store: IBulletinStore;

    beforeEach(() => {
        store = new BulletinStore();
    })

    it("should add bulletins", () => {
        const items: IBulletinData[] = [{id: "TEST-ID", description: "TEST-DESC", title: "TEST-TITLE", votes: 1}];

        expect(store.bulletins.length).toBe(0);

        store.addBulletins(items);

        expect(store.bulletins.length).toBe(items.length);
    });

    it("should remove a bulletin", () => {
        const items: IBulletinData[] = [{id: "TEST-ID", description: "TEST-DESC", title: "TEST-TITLE", votes: 1}];
        store.addBulletins(items);

        expect(store.bulletins.length).toBe(1);

        store.removeBulletin(items[0].id);

        expect(store.bulletins.length).toBe(0);
    });

    it("should update a bulletin", () => {
        const items: IBulletinData[] = [{id: "TEST-ID", description: "TEST-DESC", title: "TEST-TITLE", votes: 1}];
        store.addBulletins(items);
        const expectedVotes = items[0].votes;

        expect(store.bulletins.length).toBe(1);

        const itemToUpdate = items[0];
        itemToUpdate.votes += 1;

        store.updateBulletin(itemToUpdate.id, itemToUpdate);

        expect(store.bulletins[0].votes).not.toEqual(expectedVotes);
        expect(store.bulletins[0].votes).toEqual(expectedVotes + 1);
    })
})