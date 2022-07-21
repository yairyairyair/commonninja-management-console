import { Create, Datagrid, DateField, List, DateInput, Edit, required, SimpleForm, TextField, UrlField, TextInput, CloneButton, ImageField, ImageInput, NumberField, NumberInput } from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { uuid } from '../util';

const ProductIcon = ProductionQuantityLimitsIcon;

const ProductList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="description" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <UrlField source="url" />
            <NumberField source="price.value" />
            <TextField source="images" />
            <TextField source="status" />
            <TextField source="vendor" />
            <CloneButton />
        </Datagrid>
    </List>
);

const ProductCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" defaultValue={uuid()} disabled />
            <TextInput source="title" />
            <NumberInput source="price" />
            <TextInput source="description" multiline={true} />
            <ImageInput source="images" label="Images" accept="image/*" multiple placeholder={<p>Drop your product images here</p>} >
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="sku" defaultValue={''} />
            <TextInput source="vendor" defaultValue={''} />
            <DateInput label="Created At" source="createdAt" defaultValue={new Date()} disabled />
            <DateInput label="Updated At" source="updatedAt" defaultValue={new Date()} disabled />
        </SimpleForm>
    </Create>
);

const ProductEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="title" validate={required()} />
            <NumberInput source="price" validate={required()} />
            <TextInput source="description" multiline={true} validate={required()} />
            <ImageInput source="images" label="Images" accept="image/*" multiple placeholder={<p>Drop your product images here</p>} >
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="sku" validate={required()} />
            <TextInput source="vendor" validate={required()} />
            <DateInput label="Created At" source="createdAt" disabled />
            <DateInput label="Updated At" source="updatedAt" disabled />
        </SimpleForm>
    </Edit>
);

export {
    ProductList as List,
    ProductCreate as Create,
    ProductEdit as Edit,
    ProductIcon as Icon,
}
