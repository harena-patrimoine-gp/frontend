import { Create, SaveButton, SimpleForm, TextInput, Toolbar, TopToolbar } from "react-admin";
import { validateDate, validateNumber, validateReq } from "../validators";

const EditActions = () => (
    <TopToolbar>
        <div className='customTopToolBar'>
            <h2>
                Ajout d'un nouveau patrimoine
            </h2>
        </div>
    </TopToolbar>
)

const PatrimoineCreate = () => (
    <Create actions={<EditActions />}>
        <SimpleForm toolbar={<Toolbar><SaveButton /></Toolbar>}>
            <TextInput source="nom" validate={validateReq} />
            <TextInput source="possessuer.nom" label="possesseur" validate={validateReq} />
            <TextInput source="t" label="Date" validate={validateDate} />
            <TextInput source="valeurComptable" label="Valeur Comptable" validate={validateNumber} />
        </SimpleForm>
    </Create>
);

export default PatrimoineCreate