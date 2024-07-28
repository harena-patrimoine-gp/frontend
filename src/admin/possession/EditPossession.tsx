import {  Edit, FunctionField, SaveButton, SimpleForm, TextInput, Toolbar, TopToolbar } from "react-admin";
import { validateDate, validateNumber, validateReq } from "../validators";


const EditActions = () => (
    <TopToolbar>
        <div className='customTopToolBar'>
            <h2>
                Modifier une possession
            </h2>
        </div>
    </TopToolbar>
)

const PossessionType = () => (
    <FunctionField label='Type' render={record => {
        if (record.argent) return 'Argent';
        if (record.materiel) return 'Matériel';
        if (record.flux_argent) return 'Flux d\'Argent';
        return 'Inconnu';
    }} />
)

const PossessionEdit = (props: any) => (
    <Edit {...props} actions={<EditActions />}>
        <SimpleForm toolbar={<Toolbar><SaveButton /></Toolbar>}>
            <PossessionType />
            <TextInput source="Nom possession" label="Nom possession" validate={validateReq} />
            <TextInput source="Devise.nom" label="Devise" validate={validateReq} />
            <TextInput source="Date" validate={validateDate} />
            <TextInput source="Valeur comptable" label="Valeur comptable" validate={validateNumber} />
        </SimpleForm>
    </Edit>
);

export default PossessionEdit