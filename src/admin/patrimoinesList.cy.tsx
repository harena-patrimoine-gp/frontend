import patrimoineList from './patrimoine/ListPatrimoine';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import patrimoineCreate from './patrimoine/CreatePatrimoine';
import patrimoineShowDetails from './patrimoine/ShowPatrimoine';
import patrimoineEdit from './patrimoine/EditPatrimoine';

describe('<patrimoineList />', () => {
  it('should render the list of patrimoines', () => {
  cy.mount(<Admin dataProvider={dataProvider}>
       <Resource list={patrimoineList} edit={patrimoineEdit} name='patrimoines' create={patrimoineCreate} show={patrimoineShowDetails} ></Resource>
      </Admin>)
  })
})