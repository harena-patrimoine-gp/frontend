import { Admin, DataProvider, Resource } from "react-admin";
import { mount } from "cypress/react";
import patrimoineCreate from "../admin/patrimoine/CreatePatrimoine";
import patrimoineList from "../admin/patrimoine/ListPatrimoine";
import patrimoineProvider from "../admin/dataProvider";

describe("<patrimoineCreate />", () => {
  beforeEach(() => {
    mount(
      <Admin dataProvider={patrimoineProvider as unknown as DataProvider}>
        <Resource
          name="patrimoines"
          list={patrimoineList}
          create={patrimoineCreate}
        />
      </Admin>
    );
  });

  it("should render the create form", () => {
    cy.get("form").should("exist");
  });
  it("should contain required fields", () => {
    cy.get('input[name="nom"]').should("exist");
    cy.get('input[name="Personne.nom"]').should("exist");
    cy.get('input[name="t"]').should("exist");
    cy.get('input[name="valeurComptable"]').should("exist");
  });
  it("should save the form with valid inputs", () => {
    cy.get('input[name="nom"]').type("New Patrimoine");
    cy.get('input[name="Personne.nom"]').type("Owner Name");
    cy.get('input[name="t"]').type("2024-07-25");
    cy.get('input[name="valeurComptable"]').type("1000");
    cy.get('button[type="submit"]').click();
  });
});
