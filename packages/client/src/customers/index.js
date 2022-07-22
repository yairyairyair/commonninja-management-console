import { Create, Edit, SimpleForm, List, Datagrid, TextField, DateField, EmailField } from "react-admin";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const CustomerIcon = SupportAgentIcon;

// interface ICustomer {
//     id?: string;
//     createdAt?: string;
//     updatedAt?: string;
//     firstName?: string;
//     lastName?: string;
//     email?: string;
//     phoneNumber?: string;
//     acceptMarketing?: boolean;
//     address?: IAddress;
//     tags?: string[];
// }

// interface IAddress {
//     zip?: string;
//     country?: string;
//     countryCode?: string;
//     state?: string;
//     city?: string;
//     address1?: string;
//     address2?: string;
// }

const CustomerList = () => (
    <List>
        <Datagrid bulkActionButtons={false} >
            <TextField source="id" />
            <DateField source="firstName" />
            <TextField source="lastName" />
            <EmailField source="email" />
            <TextField source="address.zip" />
            <TextField source="acceptMarketing" />
            <TextField source="phoneNumber" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);;

const CustomerCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
        </SimpleForm>
    </Create>
);

const CustomerEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
        </SimpleForm>
    </Edit>
);

export {
    CustomerList as List,
    CustomerCreate as Create,
    CustomerEdit as Edit,
    CustomerIcon as Icon,
}
