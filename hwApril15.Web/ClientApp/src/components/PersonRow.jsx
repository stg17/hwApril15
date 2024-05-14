
import { Link } from "react-router-dom";


function PersonRow({ person, carCount}) {
    const { firstName, lastName, age, id } = person;
    return <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{age}</td>
        <td>{carCount}</td>
        <td>
            <Link to={`/addcar/${id}`}>
                <button className="btn btn-primary">Add Car</button>
            </Link>
        </td>
        <td>
            <Link to={`/deletecars/${id}`}>
            <button className="btn btn-danger">Delete Cars</button>
            </Link>
        </td>
    </tr>
}

export default PersonRow;