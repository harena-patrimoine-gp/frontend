import possessionList from "../admin/possession/ListPossession";
import { mount } from "cypress/react";
import { Admin, Resource } from "react-admin";
import dataProvider from "../admin/dataProvider";
import patrimoineCreate from "../admin/patrimoine/CreatePatrimoine";
import patrimoineShowDetails from "../admin/patrimoine/ShowPatrimoine";
import patrimoineEdit from "../admin/patrimoine/EditPatrimoine";
import PatrimoineList from "../admin/patrimoine/ListPatrimoine";
import PatrimoineEdit from "../admin/patrimoine/EditPatrimoine";
import PatrimoineCreate from "../admin/patrimoine/CreatePatrimoine";
import PatrimoineShowDetails from "../admin/patrimoine/ShowPatrimoine";

describe("<ListPossession/>", () => {
  beforeEach(() => {
    mount(
      <Admin dataProvider={dataProvider}>
        <Resource
        name="patrimoines"
          list={PatrimoineList}
          edit={PatrimoineEdit}
          
          create={PatrimoineCreate}
          show={PatrimoineShowDetails}
        ></Resource>
      </Admin>
    );
  });
  it("should render the list of possessions", () => {
    cy.get("table").should("exist");
  });
  it('should render the "Nom possession" column', () => {
    cy.get("th").contains("Nom possession").should("exist");
  });

  it('should render the "Devise" column', () => {
    cy.get("th").contains("Devise").should("exist");
  });

  it('should render the "Date" column', () => {
    cy.get("th").contains("Date").should("exist");
  });
  it('should render the "Valeur comptable" column', () => {
    cy.get("th").contains("Valeur comptable").should("exist");
  });
});
