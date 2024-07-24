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
    ShowButton,
    required,
    minLength,
    Toolbar,
    SaveButton,
    Show,
    SimpleShowLayout,
    DateField,
    ShowProps,
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
            <DateField source="t" label="Date" />
            <TextField source="possesseur.nom" label="Possesseur" />
            <TextField source="valeur_comptable" label="Valeur Comptable" />
            <EditButton />
            <ShowButton />
        </Datagrid>
    </List>
);

export const patrimoineShow = (props: ShowProps) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="nom_patrimoine" label="Nom Patrimoine" />
            <TextField source="possesseur.nom" label="Possesseur" />
            <DateField source="t" label="Date" />
            <TextField source="valeur_comptable" label="Valeur Comptable" />
        </SimpleShowLayout>
    </Show>
)

export const patrimoineEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm toolbar={<Toolbar><SaveButton /></Toolbar>}>
            <TextInput source="nom_patrimoine" validate={validateReq} />
            <TextInput source="possesseur.nom" label="Possesseur" validate={validateReq} />
            <TextInput source="t" label="Date" validate={validateDate} />
            <TextInput source="valeur_comptable" label="Valeur Comptable" validate={validateNumber} />
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
