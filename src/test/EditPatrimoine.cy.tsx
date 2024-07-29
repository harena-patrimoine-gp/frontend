import { Admin, DataProvider, Resource } from 'react-admin';
import { mount } from 'cypress/react';
import patrimoineEdit from '../admin/patrimoine/EditPatrimoine';
import patrimoineList from '../admin/patrimoine/ListPatrimoine';
import patrimoineProvider from "../admin/dataProvider";

describe('<patrimoineEdit />', () => {
  beforeEach(() => {
    mount(
      <Admin dataProvider={patrimoineProvider as unknown as DataProvider}>
        <Resource 
          name='patrimoines' 
          list={patrimoineList} 
          edit={patrimoineEdit} 
        />
      </Admin>
    );
  });

  it('should render the edit form', () => {
    cy.get('form').should('exist');
  });

  it('should contain required fields', () => {
    cy.get('input[name="nom"]').should('exist');
    cy.get('input[name="Personne.nom"]').should('exist');
    cy.get('input[name="t"]').should('exist');
    cy.get('input[name="valeurComptable"]').should('exist');
  });


  it('should save the form with valid inputs', () => {
    cy.get('input[name="nom_patrimoine"]').type('Updated Patrimoine');
    cy.get('input[name="possesseur.nom"]').type('Updated Owner Name');
    cy.get('input[name="t"]').type('2024-07-25');
    cy.get('input[name="valeur_comptable"]').type('2000');
    cy.get('button[type="submit"]').click();
    
  });
});
