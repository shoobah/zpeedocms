import {extendObservable, observable} from 'mobx';

class TheEditorStore {
    public state = extendObservable({}, {
        currentCount: 0
    });
}

const editorStore = new TheEditorStore();

export default editorStore;
