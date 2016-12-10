import * as React from "react";
import {observer} from "mobx-react";
import store from "../stores/teststore";

let Counter = observer(class C extends React.Component<{}, {}> {
    constructor() {
        super();
    }

    public render() {
        return <div>
            <h1>Räknarjävel!</h1>
            <p>This is a simple example of a React component.</p>
            <p>Current count: <strong>{ store.state.currentCount }</strong></p>
            <button onClick={ () => { this.incrementCounter(); } }>Öka</button>
        </div>;
    }

    incrementCounter() {
            store.state.currentCount = store.state.currentCount + 1;
    }
});

export {Counter};
