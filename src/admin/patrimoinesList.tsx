import {List,Datagrid,TextField} from 'react-admin';
const patrimoineList = (props:any) =>(
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="nom" />
            <TextField source="possesseur.nom" label="Possesseur" />
            <TextField source="t" label="Date" />
            <TextField source="valeur_comptable" label="Valeur Comptable" />
        </Datagrid>
    </List>
)

export default patrimoineList;