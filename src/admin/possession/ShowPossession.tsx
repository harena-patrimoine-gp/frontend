import {
    DateField,
    Show,
    SimpleShowLayout,
    TextField,
    TopToolbar
} from "react-admin";
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

const PossessionShowDetails = (props: any)=> (
    <div>
        <Show {...props} actions={<DetailsActions />}>
            <SimpleShowLayout>
                <TextField source="nom_patrimoine" label="Nom Patrimoine" />
                <TextField source="possesseur.nom" label="Possesseur" />
                <DateField source="t" label="Date" />
                <TextField source="valeur_comptable" label="Valeur Comptable" />
            </SimpleShowLayout>
        </Show>
    </div>
)

export default PossessionShowDetails
