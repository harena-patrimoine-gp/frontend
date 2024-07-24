import {
    List,
    Datagrid,
    TextField,
    Edit,
    SimpleForm,
    TextInput,
    Create,
    CreateButton,
    EditButton,
    ShowButton,
    Toolbar,
    SaveButton,
    Show,
    SimpleShowLayout,
    DateField,
    ShowProps,
    TopToolbar,
    FunctionField,
} from 'react-admin';
import {
    validateReq,
    validateDate,
    validateNumber
} from './validators'
import './admin.scss'

const ListActions = () => (
    <TopToolbar>
        <div className='customTopToolBar'>
            <h2>
                Liste des patrimoines
            </h2>
            <CreateButton label='Ajouter nouveau patrimoine' />
        </div>
    </TopToolbar>
)

const EditActions = () => (
    <TopToolbar>
        <div className='customTopToolBar'>
            <h2>
                Modifier une patrimoine
            </h2>
        </div>
    </TopToolbar>
)

const ShowDetailsButton = (props: any) => (
    <ShowButton {...props} label='voir details' />
)

const DetailsActions = () => (
    <TopToolbar>
        <div className='customTopToolBar'>
            <h2>
                Details
            </h2>
        </div>
    </TopToolbar>
)

export const patrimoineList = () => (
    <div>
        <List actions={<ListActions />}>
            <Datagrid>
                <TextField source="nom" />
                <DateField source="t" label="Date" />
                <TextField source="possesseur.nom" label="Possesseur" />
                <TextField source="valeur_comptable" label="Valeur Comptable" />
                <EditButton label='' />
                <FunctionField
                    render={(record: any) => <ShowDetailsButton record={record} />}
                />
            </Datagrid>
        </List>
    </div>
);

export const patrimoineShowDetails = (props: ShowProps) => (
    <Show {...props} actions={<DetailsActions />}>
        <SimpleShowLayout>
            <TextField source="nom_patrimoine" label="Nom Patrimoine" />
            <TextField source="possesseur.nom" label="Possesseur" />
            <DateField source="t" label="Date" />
            <TextField source="valeur_comptable" label="Valeur Comptable" />
        </SimpleShowLayout>
    </Show>
)

export const patrimoineEdit = (props: any) => (
    <Edit {...props} actions={<EditActions />}>
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
