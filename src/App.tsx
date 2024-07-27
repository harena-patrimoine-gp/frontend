import { Admin, Resource } from 'react-admin';
import patrimoineProvider from './admin/dataProvider';
import "./App.scss";
import PatrimoineCreate from './admin/patrimoine/CreatePatrimoine';
import PatrimoineEdit from './admin/patrimoine/EditPatrimoine';
import PatrimoineList from './admin/patrimoine/ListPatrimoine';
import PatrimoineShowDetails from './admin/patrimoine/ShowPatrimoine';


const App = () => (
    <Admin dataProvider={patrimoineProvider}>
        <Resource list={PatrimoineList} edit={PatrimoineEdit} name='patrimoines' create={PatrimoineCreate} show={PatrimoineShowDetails}></Resource>
    </Admin>
)

export default App;
