
import show from "./show.hospital";
import create from "./create.hospital";
import edit from "./edit.hospital";
import list from "./list.hospital";

export default { 
  name: "hospital",
  label: "hospital",
  hide: false,
  create,
  edit,
  list,
  show,
}