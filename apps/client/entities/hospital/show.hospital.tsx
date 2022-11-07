
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
} from "react-admin";

// ------------------------------------------------

export default function ShowHospital(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
<TextField source="city" />
<TextField source="country" />
<TextField source="adress" />
<TextField source="phone" />
<TextField source="location" />
<TextField source="name" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}