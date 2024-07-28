import {
    DateField,
    Resource,
    Show,
    ShowProps,
    SimpleShowLayout,
    TextField,
    TopToolbar
} from "react-admin";
import PossessionList from "../possession/ListPossession";
import '../admin.scss'
import PossessionEdit from "../possession/EditPossession";
import PossessionCreate from "../possession/CreatePossession";
import PossessionShowDetails from "../possession/ShowPossession";

const DetailsActions = () => (
    <TopToolbar>
        <div className='customTopToolBar'>
            <h2>
                Details
            </h2>
        </div>
    </TopToolbar>
)

const PatrimoineShowDetails = (props: ShowProps) => (
    <div>
        <Show {...props} actions={<DetailsActions />}>
            <SimpleShowLayout>
                <TextField source="nom" label="Nom Patrimoine" />
                <TextField source="possesseur.nom" label="possesseur" />
                <DateField source="t" label="Date" />
                <TextField source="valeurComptable" label="Valeur Comptable" />
            </SimpleShowLayout>
        </Show>
        <div className="possession">
            <h2>
                Liste des possessions du patrimoine
            </h2>
            <Resource list={PossessionList} edit={PossessionEdit} name='possessions' create={PossessionCreate} show={PossessionShowDetails}></Resource>
        </div>
    </div>
)


export default PatrimoineShowDetails
