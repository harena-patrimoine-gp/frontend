import { Admin, Resource} from 'react-admin';
import patrimoineList from './admin/patrimoinesList';
import dataProvider from './admin/dataProvider';
import "./App.scss";

const App = () => (
    <Admin dataProvider={dataProvider}>
       <Resource list={patrimoineList} name='patrimoines'></Resource>
    </Admin>
)

export default App;
