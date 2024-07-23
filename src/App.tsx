import { Admin, Resource} from 'react-admin';
import {patrimoineList,patrimoineEdit,patrimoineCreate} from './admin/patrimoines'
import patrimoineProvider from './admin/dataProvider';
import "./App.scss";

const App = () => (
    <Admin dataProvider={patrimoineProvider}>
       <Resource list={patrimoineList} edit={patrimoineEdit} name='patrimoines' create={patrimoineCreate}></Resource>
    </Admin>
)

export default App;
