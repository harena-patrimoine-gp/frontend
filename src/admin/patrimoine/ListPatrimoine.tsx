import {
    CreateButton,
    Datagrid,
    DateField,
    EditButton,
    FunctionField,
    List,
    ShowButton,
    TextField,
    TopToolbar
}
    from "react-admin";
import '../admin.scss'

const ShowDetailsButton = (props: any) => (
    <ShowButton {...props} label='voir details'/>
)

const ListActions = () => (
    <TopToolbar>
        <div className='customTopToolBar'>
            <h2>
                Liste des patrimoines
            </h2>   
            <CreateButton label='Ajouter un nouveau patrimoine'/>
        </div>
    </TopToolbar>
)

const PatrimoineList = () => {
    return (
        <div>
            <List actions={<ListActions />}>
                <Datagrid bulkActionButtons={false}>
                    <TextField source="nom" />
                    <DateField source="t" label="Date" />
                    <TextField source="possesseur.nom" label="Possesseur" />
                    <TextField source="valeur_comptable" label="Valeur Comptable" />
                    <EditButton label='' />
                    <FunctionField
                        render={(record: any) => <ShowDetailsButton record={record}/>}
                    />
                </Datagrid>
            </List>
        </div>
    )
};

export default PatrimoineList
