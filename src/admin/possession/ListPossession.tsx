import {
    CreateButton,
    Datagrid,
    DateField,
    EditButton,
    FunctionField,
    List,
    ShowButton,
    TextField,
    TopToolbar,
    Filter,
    TextInput
} from "react-admin";

const ListActions = () => (
    <TopToolbar>
        <div className='customTopToolBar'>
            <CreateButton label='Ajouter une nouvelle possession' />
        </div>
    </TopToolbar>
);

const PossessionType = () => (
    <FunctionField label='Type' render={record => {
        if (record.argent) return 'Argent';
        if (record.materiel) return 'Matériel';
        if (record.flux_argent) return 'Flux d\'Argent';
        return 'Inconnu';
    }} />
);

const PossessionFilter = ({ patrimoineId }: { patrimoineId: string }) => (
    <Filter>
        <TextInput source="patrimoineId" defaultValue={patrimoineId} />
    </Filter>
);

const PossessionList = ({ patrimoineId }: { patrimoineId: string }) => {
    if (!patrimoineId) {
        return <div>Erreur : ID du patrimoine manquant</div>;
    }

    return (
        <List filters={<PossessionFilter patrimoineId={patrimoineId} />} resource="possessions">
            <Datagrid>
                <PossessionType />
                <TextField source="Nom possession" label="Nom possession" />
                <TextField source="Devise.nom" label="Devise" />
                <DateField source="Date" />
                <TextField source="Valeur comptable" label="Valeur comptable" />
                <EditButton label='' />
                <ShowButton label='Voir détails' />
            </Datagrid>
        </List>
    );
};

export default PossessionList;
