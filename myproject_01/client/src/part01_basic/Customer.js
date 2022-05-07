import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

function Customer(props) {
  return (
    <TableRow>
      {/* <CustomerProfile id={props.id} image={props.image} name={props.name} />
      <CustomerInfo
        birthday={props.birthday}
        gender={props.gender}
        email={props.email}
      /> */}
      <TableCell>{props.id}</TableCell>
      <TableCell>
        <img src={props.image} alt="profile"></img>
      </TableCell>
      <TableCell>{props.name}</TableCell>
      <TableCell>{props.birthday}</TableCell>
      <TableCell>{props.gender}</TableCell>
      <TableCell>{props.email}</TableCell>
    </TableRow>
  );
}

function CustomerProfile(props) {
  return (
    <div>
      <p>{props.id}</p>
      <img src={props.image} alt="profile" />
      <p>{props.name}</p>
    </div>
  );
}

function CustomerInfo(props) {
  return (
    <div>
      <p>{props.birthday}</p>
      <p>{props.gender}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Customer;
