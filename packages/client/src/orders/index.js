import { Create, Datagrid, DateField, DateInput, Edit, EditButton, ReferenceManyField, required, SimpleForm, TextField, TextInput, ListGuesser } from "react-admin";
import AddCardIcon from '@mui/icons-material/AddCard';

const OrderIcon = AddCardIcon;

// TODO: copy this from console
const OrderList = (props) => ListGuesser;

const OrderCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="teaser" options={{ multiLine: true }} />
            <DateInput label="Publication date" source="published_at" defaultValue={new Date()} />
        </SimpleForm>
    </Create>
);

const OrderEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="title" validate={required()} />
            <TextInput multiline source="teaser" validate={required()} />
            <DateInput label="Publication date" source="published_at" />
            <ReferenceManyField label="Comments" reference="comments" target="post_id">
                <Datagrid>
                    <TextField source="body" />
                    <DateField source="created_at" />
                    <EditButton />
                </Datagrid>
            </ReferenceManyField>
        </SimpleForm>
    </Edit>
);

export {
    OrderList as List,
    OrderCreate as Create,
    OrderEdit as Edit,
    OrderIcon as Icon,
}
