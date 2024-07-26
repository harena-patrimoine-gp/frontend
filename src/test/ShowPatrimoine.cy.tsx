import patrimoineList from "../admin/patrimoine/ListPatrimoine";
import { mount } from "cypress/react";
import { Admin, Resource } from "react-admin";
import dataProvider from "../admin/dataProvider";
import patrimoineCreate from "../admin/patrimoine/CreatePatrimoine";
import patrimoineShowDetails from "../admin/patrimoine/ShowPatrimoine";
import patrimoineEdit from "../admin/patrimoine/EditPatrimoine";

describe("<patrimoineCreate />", () => {
  beforeEach(() => {
    mount(
      <Admin dataProvider={dataProvider}>
        <Resource
          name="patrimoines"
          list={patrimoineList}
          edit={patrimoineEdit}
          create={patrimoineCreate}
          show={patrimoineShowDetails}
        />
      </Admin>
    );
  });

  it('should render the "Nom" textField', () => {
    cy.get("th").contains("Nom").should("exist");
  });

  it('should render the "Possesseur" textField', () => {
    cy.get("th").contains("Possesseur").should("exist");
  });

  it('should render the "Date" textField', () => {
    cy.get("th").contains("Date").should("exist");
  });

  it('should render the "Valeur Comptable" textField', () => {
    cy.get("th").contains("Valeur Comptable").should("exist");
  });
});
