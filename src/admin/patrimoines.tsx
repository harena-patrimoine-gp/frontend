import {
    List,
    Datagrid,
    TextField,
    Edit,
    SimpleForm,
    TextInput,
    Create,
    DateInput,
    CreateButton,
    EditButton,
    required,
    minLength,
    Toolbar,
    SaveButton
} from 'react-admin';
import {
    validateReq,
    validateDate,
    validateNumber
} from './validators'

export const patrimoineList = () => (
    <List>
        <Datagrid>
            <TextField source="nom" />
            <TextField source="t" label="Date" />
            <TextField source="possesseur.nom" label="Possesseur" />
            <TextField source="valeur_comptable" label="Valeur Comptable" />
            <EditButton />
        </Datagrid>
    </List>
);


export const patrimoineEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm toolbar={<Toolbar><SaveButton /></Toolbar>}>
            <TextInput source="nom_patrimoine" validate={validateReq} />
            <TextInput source="possesseur.nom" label="Possesseur" validate={validateReq} />
            <TextInput source="t" label="Date" validate={validateReq} />
            <TextInput source="valeur_comptable" label="Valeur Comptable" validate={validateReq} />
        </SimpleForm>
    </Edit>
);

export const patrimoineCreate = () => (
    <Create>
        <SimpleForm toolbar={<Toolbar><SaveButton /></Toolbar>}>
            <TextInput source="nom_patrimoine" validate={validateReq} />
            <TextInput source="possesseur.nom" label="Possesseur" validate={validateReq} />
            <TextInput source="t" label="Date" validate={validateDate} />
            <TextInput source="valeur_comptable" label="Valeur Comptable" validate={validateNumber} />
        </SimpleForm>
    </Create>
);
