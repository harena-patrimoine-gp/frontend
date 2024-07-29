import {
    Datagrid,
    EditButton,
    List,
    ShowButton,
    TextField,
    Filter,
    TextInput,
    TopToolbar,
    CreateButton
} from "react-admin";


const ListActions = () => (
    <TopToolbar>
        <div className='customTopToolBar'>
            <h2>
                Liste des possessions
            </h2>   
            <CreateButton label='Ajouter un nouveau possession'/>
        </div>
    </TopToolbar>
)
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
        <List actions={<ListActions/>} filters={<PossessionFilter patrimoineId={patrimoineId} />} resource="possessions">
            <Datagrid>
                <TextField source="nom" label='Nom' />
                <TextField source="devise.nom" label="Devise" />
                <TextField source="t" label="Date" />
                <TextField source="valeurComptable" label="Valeur comptable" />
                <EditButton label='Modifier' />
                <ShowButton label='Voir détails' />
            </Datagrid>
        </List>
    );
};

export default PossessionList;
