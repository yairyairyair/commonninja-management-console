import { Create, Datagrid, DateField, List, DateInput, Edit, required, SimpleForm, TextField, UrlField, TextInput, CloneButton, ImageField, ImageInput, NumberField, NumberInput, SingleFieldList, ArrayInput, SimpleFormIterator, ArrayField } from "react-admin";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const ProductIcon = ProductionQuantityLimitsIcon;

const ProductList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="description" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <UrlField source="url" />
            <NumberField source="price.value" />
            <TextField source="price.currencyCode" />
            <TextField source="images" />
            <TextField source="status" />
            <TextField source="vendor" />
        </Datagrid>
    </List>
);

const ProductCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()} />
            <NumberInput source="price.value" validate={required()} />
            <TextInput source="price.currencyCode" defaultValue={'ILS'} />
            <TextInput source="description" multiline={true} validate={required()} />
            <ArrayInput source="images" label="Images" placeholder={<p>Drop your product images here</p>}>
                <SimpleFormIterator>
                    <TextInput source="src" />
                </SimpleFormIterator>
            </ArrayInput>
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
            <TextInput source="title" validate={required()} />
            <NumberInput source="price.value" validate={required()} />
            <TextInput source="price.currencyCode" validate={required()} />
            <TextInput source="description" multiline={true} validate={required()} />
            <ImageInput source="images" label="Images" accept="image/*" multiple placeholder={<p>Drop your product images here</p>} >
                <ImageField source="src" title="title" />
            </ImageInput>
            <TextInput source="sku" />
            <TextInput source="vendor" />
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
