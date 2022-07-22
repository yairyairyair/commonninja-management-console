import { Datagrid, ImageField, List, NumberField, TextField, UrlField } from "react-admin";
import CategoryIcon from '@mui/icons-material/Category';

// interface ICategory {
//     id?: string;
//     name?: string;
//     description?: string;
//     image?: string;
//     url?: string;
//     order?: number;
//     productsCount?: number;
// }

const CategoryList = () => (
    <List>
        <Datagrid bulkActionButtons={false} >
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <ImageField source="image" />
            <UrlField source="url" />
            <NumberField source="order" />
            <NumberField source="productsCount" />
        </Datagrid>
    </List>
);


export {
    CategoryList as List,
    CategoryIcon as Icon,
}
