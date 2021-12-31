import '../Spinner/Spinner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faSpinner);

function Spinner() {
    return (
        <div className='spinner'>
            <FontAwesomeIcon icon='spinner' size='4x' spin />
         </div>
    )
}

export default Spinner
