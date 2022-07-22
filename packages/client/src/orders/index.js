import { Create, Datagrid, DateField, Edit, SimpleForm, TextField, List, ArrayField, NumberField } from "react-admin";
import AddCardIcon from '@mui/icons-material/AddCard';

const OrderIcon = AddCardIcon;

// interface IOrder {
//     id?: string;
//     orderNumber?: string;
//     totalPrice?: string;
//     totalDiscount?: string;
//     totalTax?: string;
//     shippingTax?: string;
//     note?: string;
//     totalShipping?: string;
//     status?: 'cancelled' | 'completed' | 'failed' | 'refunded' | 'pending' | 'processing' | 'on-hold' | 'partial';
//     createdAt?: string;
//     updatedAt?: string;
//     billingAddress?: IAddress;
//     shippingAddress?: IAddress;
//     customer?: ICustomer;
//     lineItems?: ILineItem[];
// }

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
//   }
  
//   interface IAddress {
//     zip?: string;
//     country?: string;
//     countryCode?: string;
//     state?: string;
//     city?: string;
//     address1?: string;
//     address2?: string;
//   }

// verify order and types fields

// TODO: copy this from console
const OrderList = () => (
    <List>
        <Datagrid bulkActionButtons={false}>
            <TextField source="id" />
            <TextField source="orderNumber" />
            <TextField source="totalPrice" />
            <TextField source="status" />
            <TextField source="totalShipping" />
            <TextField source="totalTax" />
            <TextField source="shippingTax" />
            <TextField source="note" />
            <TextField source="customer.id" />
            <TextField source="customer.email" />
            <TextField source="customer.acceptMarketing" />
            <TextField source="totalDiscount" />
            <TextField source="billingAddress.zip" />
            <TextField source="shippingAddress.zip" />
            <ArrayField source="lineItems">
                <Datagrid bulkActionButtons={false}>
                    <TextField source="title" />
                    <TextField source="price" />
                    <NumberField source="quantity" />
                </Datagrid>
            </ArrayField>
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);

const OrderCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
        </SimpleForm>
    </Create>
);

const OrderEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
        </SimpleForm>
    </Edit>
);

export {
    OrderList as List,
    OrderCreate as Create,
    OrderEdit as Edit,
    OrderIcon as Icon,
}
