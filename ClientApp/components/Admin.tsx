import * as React from 'react';
import { observer } from 'mobx-react';
import Store from '../stores/editorstore';

const Admin = observer(class A extends React.Component<any, void> {
    componentWillMount() {
        Store.getContentDesciptors();
    }

    public render() {
        const cds = Store.state.contentDescriptors;

        return <div>
            <h1>Admin</h1>
            <ul>
                {cds.map((item, index) => (
                    <li key={`cds_${index}`} >{item.name}
                        <table className='table table-striped table-condensed'>
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Editor</td>
                                </tr>
                            </thead>
                            <tbody>
                                {item.properties.map((pro, index) => (
                                    <tr key={`cds_key_${index}`}>
                                        <td style={{ fontWeight: 'bold', paddingRight: '10px' }}>{pro.name}</td>
                                        <td>{pro.editor}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </li>
                ))}
            </ul>
        </div>;
    }
});

export { Admin };
