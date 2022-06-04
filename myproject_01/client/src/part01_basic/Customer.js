import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import CustomerDelete from "./CustomerDelete";
function Customer(props) {
  return (
    //   <div><p>1</p>
    //   <img src="https://placeimg.com/64/64/1" alt="profile" />
    //   <p>고수</p>
    //   <p>780604</p>
    //   <p>남자</p>
    //   <p>su@gmail.com</p></div>

    //   <div><CustomerProfile id={props.id} image={props.image} name={props.name} />
    //   <CustomerInfo
    //     birthday={props.birthday}
    //     gender={props.gender}
    //     email={props.email} />
    //  </div>

    <TableRow>
      <TableCell>{props.id}</TableCell>
      <TableCell>
        <img src={props.image} alt="profile" />
      </TableCell>
      <TableCell>{props.name}</TableCell>
      <TableCell>{props.birthday}</TableCell>
      <TableCell>{props.gender}</TableCell>
      <TableCell>{props.email}</TableCell>
      <TableCell>
        <CustomerDelete id={props.id} />
      </TableCell>
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
