import possessionList from "../admin/possession/ListPossession";
import { mount } from "cypress/react";
import { Admin, Resource } from "react-admin";
import dataProvider from "../admin/dataProvider";
import PossessionCreate from "../admin/possession/CreatePossession";
import PossessionShowDetails from "../admin/possession/ShowPossession";
import PossessionEdit from "../admin/possession/EditPossession";

describe("<possessionShow />", () => {
    beforeEach(() => {
      mount(
        <Admin dataProvider={dataProvider}>
          <Resource
            name="possessions"
            list={possessionList}
            edit={PossessionEdit}
            create={PossessionCreate}
            show={PossessionShowDetails}
          />
        </Admin>
      );
    });
    it('should render the "Nom possession" textField', () => {
        cy.get("th").contains("Nom possession").should("exist");
      });
    
      it('should render the "Devise" textField', () => {
        cy.get("th").contains("Devise").should("exist");
      });
    
      it('should render the "Date" textField', () => {
        cy.get("th").contains("Date").should("exist");
      });
    
      it('should render the "Valeur Comptable" textField', () => {
        cy.get("th").contains("Valeur Comptable").should("exist");
      });
})