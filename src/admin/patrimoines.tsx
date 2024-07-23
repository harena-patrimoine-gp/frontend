import { List, Datagrid, TextField, Edit, SimpleForm, TextInput, Create, DateInput, CreateButton,EditButton } from 'react-admin';

export const patrimoineList = () => (
    <List>
        <Datagrid>
            <TextField source="nom" />
            <TextField source="t" label="Date" />
            <TextField source="possesseur.nom" label="Possesseur" />
            <TextField source="valeur_comptable" label="Valeur Comptable" />
            <EditButton/>
        </Datagrid>
    </List>
);

export const patrimoineEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nom_patrimoine" />
            <TextInput source="possesseur.nom" label="Possesseur" />
            <TextInput source="t" label="Date" />
            <TextInput source="valeur_comptable" label="Valeur Comptable" />
        </SimpleForm>
    </Edit>
);

export const patrimoineCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="nom" />
            <TextInput source="possesseur.nom" label="Possesseur" />
            <TextInput source="t" label="Date" />
            <TextInput source="valeur_comptable" label="Valeur Comptable" />
        </SimpleForm>
    </Create>
);
