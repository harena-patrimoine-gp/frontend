import { Admin, Resource} from 'react-admin';
import {patrimoineList,patrimoineEdit,patrimoineCreate,patrimoineShow} from './admin/patrimoines'
import patrimoineProvider from './admin/dataProvider';
import "./App.scss";

const App = () => (
    <Admin dataProvider={patrimoineProvider}>
       <Resource list={patrimoineList} edit={patrimoineEdit} name='patrimoines' create={patrimoineCreate} show={patrimoineShow}></Resource>
    </Admin>
)

export default App;
