import { Create, SaveButton, SimpleForm, TextInput, Toolbar, TopToolbar } from "react-admin";
import { validateDate, validateNumber, validateReq } from "../validators";

const EditActions = () => (
    <TopToolbar>
        <div className='customTopToolBar'>
            <h2>
                Ajout d'un nouveau possession
            </h2>
        </div>
    </TopToolbar>
)

const PossessionCreate = () => (
    <Create actions={<EditActions/>}>
        <SimpleForm toolbar={<Toolbar><SaveButton /></Toolbar>}>
            <TextInput source="nom_possession" validate={validateReq} />
            <TextInput source="t" label="Date" validate={validateDate} />
            <TextInput source="valeur_comptable" label="Valeur Comptable" validate={validateNumber} />
        </SimpleForm>
    </Create>
);

export default PossessionCreate