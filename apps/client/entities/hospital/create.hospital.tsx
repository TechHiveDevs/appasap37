
import { 
  Create,
  SimpleForm,
  
required,
TextInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateHospital(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="city" variant="outlined" validate={required()}  />
<TextInput source="country" variant="outlined" validate={required()}  />
<TextInput source="adress" variant="outlined"   />
<TextInput source="phone" variant="outlined"   />
<TextInput source="location" variant="outlined"   />
<TextInput source="name" variant="outlined"   />

        </SimpleForm>
      </Create>
    );
  }
