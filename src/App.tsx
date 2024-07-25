import { Admin, Resource } from 'react-admin';
import patrimoineProvider from './admin/dataProvider';
import "./App.scss";
import  patrimoineCreate  from './admin/patrimoine/CreatePatrimoine';
import  patrimoineEdit from './admin/patrimoine/EditPatrimoine';
import  patrimoineList  from './admin/patrimoine/ListPatrimoine';
import  patrimoineShowDetails  from './admin/patrimoine/ShowPatrimoine';

const App = () => (
    <Admin dataProvider={patrimoineProvider}>
        <Resource list={patrimoineList} edit={patrimoineEdit} name='patrimoines' create={patrimoineCreate} show={patrimoineShowDetails} ></Resource>
    </Admin>
)

export default App;
