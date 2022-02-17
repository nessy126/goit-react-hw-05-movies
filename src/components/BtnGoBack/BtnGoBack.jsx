import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const BtnGoBack = () => {
  const history = useHistory()
  const location = useLocation()
  
  const goBack = () => {
    const locationFrom = location.state?.from || "/"
    history.push(locationFrom)
  } 

  return <button onClick={goBack}>&#8592; Go back</button>
}
 
export default BtnGoBack;