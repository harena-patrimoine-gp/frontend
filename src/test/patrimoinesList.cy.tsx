import patrimoineList from '../admin/patrimoine/ListPatrimoine';
import { mount } from 'cypress/react';
import { Admin, Resource } from 'react-admin';
import dataProvider from '../admin/dataProvider';
import patrimoineCreate from '../admin/patrimoine/CreatePatrimoine';
import patrimoineShowDetails from '../admin/patrimoine/ShowPatrimoine';
import patrimoineEdit from '../admin/patrimoine/EditPatrimoine';

describe('<patrimoineList />', () => {
  beforeEach(() => {
    mount(
      <Admin dataProvider={dataProvider}>
        <Resource 
          name='patrimoines' 
          list={patrimoineList} 
          edit={patrimoineEdit} 
          create={patrimoineCreate} 
          show={patrimoineShowDetails} 
        />
      </Admin>
    );
  });

  it('should render the list of patrimoines', () => {
    cy.get('table').should('exist');
  });

  it('should render the "Nom" column', () => {
    cy.get('th').contains('Nom').should('exist');
  });

  it('should render the "Possesseur" column', () => {
    cy.get('th').contains('Possesseur').should('exist');
  });

  it('should render the "Date" column', () => {
    cy.get('th').contains('Date').should('exist');
  });

  it('should render the "Valeur Comptable" column', () => {
    cy.get('th').contains('Valeur Comptable').should('exist');
  });
});
