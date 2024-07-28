import {  Edit, SaveButton, SimpleForm, TextInput, Toolbar, TopToolbar } from "react-admin";
import { validateDate, validateNumber, validateReq } from "../validators";

const EditActions = () => (
    <TopToolbar>
        <div className='customTopToolBar'>
            <h2>
                Modifier une patrimoine
            </h2>
        </div>
    </TopToolbar>
)

const PatrimoineEdit = (props: any) => (
    <Edit {...props} actions={<EditActions />}>
        <SimpleForm toolbar={<Toolbar><SaveButton /></Toolbar>}>
            <TextInput source="nom" label="Nom du Patrimoine" validate={validateReq} />
            <TextInput source="Personne.nom" label="Possesseur" validate={validateReq} />
            <TextInput source="t" label="Date" validate={validateDate} />
            <TextInput source="valeurComptable" label="Valeur Comptable" validate={validateNumber} />
        </SimpleForm>
    </Edit>
);

export default PatrimoineEdit