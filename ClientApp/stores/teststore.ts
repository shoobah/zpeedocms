import {extendObservable, observable} from "mobx";

class TheStore {
    public state = extendObservable({}, {
        currentCount: 0
    });
}

const store = new TheStore();

export default store;
