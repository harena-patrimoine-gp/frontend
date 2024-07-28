import {CreateButton, Datagrid, DateField, EditButton, FunctionField, List, ShowButton, TextField, TopToolbar } from "react-admin";

const ListActions = () => (
    <TopToolbar>
        <div className='customTopToolBar'>
            <CreateButton label='Ajouter un nouveau possession'/>
        </div>
    </TopToolbar>
)

const PossessionType = () => (
    <FunctionField label='Type'  render={record => {
        if (record.argent) return 'Argent';
        if (record.materiel) return 'Matériel';
        if (record.flux_argent) return 'Flux d\'Argent';
        return 'Inconnu';
    }}/>
)

const PossessionList = () => (
    <List actions={<ListActions/>} resource="possessions">
        <Datagrid>
            <PossessionType/>
            <TextField source="Nom possession" label="Nom possession" />
            <TextField source="Devise.nom" label="Devise" />
            <DateField source="Date"/>
            <TextField source="Valeur comptable" label="Valeur comptable" />
            <EditButton label=''/>
            <ShowButton label='voir details'/>
        </Datagrid>
    </List>
);

export default PossessionList