import {
    DateField,
    Show,
    ShowProps,
    SimpleShowLayout,
    TextField,
    TopToolbar
} from "react-admin";
import PossessionList from "../possession/ListPossession";
import '../admin.scss'

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
                <TextField source="nom_patrimoine" label="Nom Patrimoine" />
                <TextField source="possesseur.nom" label="Possesseur" />
                <DateField source="t" label="Date" />
                <TextField source="valeur_comptable" label="Valeur Comptable" />
            </SimpleShowLayout>
        </Show>
        <div className="possession">
            <h2>
                Liste des possessions du patrimoine
            </h2>
            <PossessionList />
        </div>
    </div>
)

export default PatrimoineShowDetails
