import {
    DateField,
    Show,
    ShowProps,
    SimpleShowLayout,
    TextField,
    TopToolbar
} from "react-admin";
import PossessionList from "../possession/ListPossession";
import '../admin.scss';
import { useParams } from 'react-router-dom';

const DetailsActions = () => (
    <TopToolbar>
        <div className='customTopToolBar'>
            <h2>Details</h2>
        </div>
    </TopToolbar>
);

const PatrimoineShowDetails = (props: ShowProps) => {
    const { id } = useParams<string>(); 

    console.log('ID du patrimoine:', id); 

    if (!id) {
        return <div>Erreur : ID du patrimoine manquant</div>;
    }

    return (
        <div>
            <Show {...props} actions={<DetailsActions />}>
                <SimpleShowLayout>
                    <TextField source="nom" label="Nom Patrimoine" />
                    <TextField source="possesseur.nom" label="Possesseur" />
                    <DateField source="t" label="Date" />
                    <TextField source="valeurComptable" label="Valeur Comptable" />
                </SimpleShowLayout>
            </Show>
            <div className="possession">
                <h2>Liste des possessions du patrimoine</h2>
                <PossessionList patrimoineId={id} />
            </div>
        </div>
    );
};

export default PatrimoineShowDetails;
