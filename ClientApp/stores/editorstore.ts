import { extendObservable, observable } from 'mobx';
import 'whatwg-fetch';

class TheEditorStore {

    state = extendObservable({}, {
        currentCount: 0,
        contentDescriptors: []
    });

    public getContentDesciptors() {
        fetch('/api/ContentDescriptor/GetDescriptors')
            .then((response) => {
                return response.json();
            }).then((json: any) => {
                this.state.contentDescriptors = json;
                console.log('parsed json',json);
            })
            .catch(function (ex) {
                console.log('parsing failed', ex);
            });
    }
}

const editorStore = new TheEditorStore();

export default editorStore;
