import { Create, Datagrid, List, required, SimpleForm, TextField, UrlField, TextInput, BooleanInput, SelectInput } from "react-admin";
import JavascriptIcon from '@mui/icons-material/Javascript';

const ScriptIcon = JavascriptIcon;

// interface IScript {
//     src: string;
//     id?: string;
//     name?: string;
//     description?: string;
//     location?: 'head' | 'footer';
//     loadMethod?: 'defer' | 'async';
//     scope?: 'storefront' | 'checkout' | 'all';
//     cache?: boolean;
// }

const ScriptList = () => (
    <List>
        <Datagrid bulkActionButtons={false} >
            <TextField source="id" />
            <TextField source="name" />
            <UrlField source="src" />
            <TextField source="description" />
            <TextField source="location" />
            <TextField source="loadMethod" />
            <TextField source="scope" />
            <TextField source="cache" />
        </Datagrid>
    </List>
);


const ScriptCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="src" validate={required()} />
            <TextInput source="name" />
            <TextInput source="description" multiline={true} />
            <SelectInput source="location" choices={[
                { id: 'head', name: 'head' },
                { id: 'footer', name: 'footer' },
            ]} />
            <SelectInput source="loadMethod" choices={[
                { id: 'defer', name: 'defer' },
                { id: 'async', name: 'async' },
            ]} />
            <SelectInput source="scope" choices={[
                { id: 'storefront', name: 'storefront' },
                { id: 'checkout', name: 'checkout' },
                { id: 'all', name: 'all' },
            ]} />
            <BooleanInput source="cache" />
        </SimpleForm>
    </Create>
);

export {
    ScriptList as List,
    ScriptCreate as Create,
    ScriptIcon as Icon,
}
