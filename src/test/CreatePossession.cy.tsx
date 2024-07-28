import { Admin, Resource } from "react-admin";
import { mount } from "cypress/react";
import PossessionCreate from "../admin/possession/CreatePossession";
import PossessionList from "../admin/possession/ListPossession";
import dataProvider from "../admin/dataProvider";

describe("<PossessionCreate/>", () => {
  beforeEach(() => {
    mount(
      <Admin dataProvider={dataProvider}>
        <Resource name="possesions" list={PossessionList} />
        create={PossessionCreate}
      </Admin>
    );
  });
  it("should render the create form", () => {
    cy.get("form").should("exist");
  });
  it("should contain required fields", () => {
    cy.get('input[name="nom_possession"]').should("exist");
    cy.get('input[name="Devise.nom"]').should("exist");
    cy.get('input[name="t"]').should("exist");
    cy.get('input[name="valeur_comptable"]').should("exist");
  });
  it("should save the form with valid inputs", () => {
    cy.get('input[name="nom_passession"]').type("New Possession");
    cy.get('input[name="Devise.nom"]').type("Owner Name");
    cy.get('input[name="t"]').type("2024-07-25");
    cy.get('input[name="valeur_comptable"]').type("1000");
    cy.get('button[type="submit"]').click();
  });
});
