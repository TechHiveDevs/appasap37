
import { 
  Edit,
  SimpleForm,
  
required,
TextInput,
AutocompleteInput,
NumberInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditUser(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="name" variant="outlined" validate={required()}  />
<TextInput source="email" variant="outlined" validate={required()}  />
<AutocompleteInput variant="outlined" source="gender" choices={[
{ id: "Male", name: "Male" },
{ id: "Female", name: "Female" },
]}  />
<NumberInput source="age" variant="outlined"  />
<AutocompleteInput variant="outlined" source="type" choices={[
{ id: "moderator", name: "moderator" },
{ id: "donor", name: "donor" },
{ id: "needy", name: "needy" },
]}  />
<TextInput source="bloodtype" variant="outlined"   />

      </SimpleForm>
    </Edit>
  );
}