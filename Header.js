
// eslint-disable-next-line
import PropTypes  from "prop-types"
import Button from "./Button"

const Header = ({title,onadd}) => {
    return (
        <div>
            <h1 className='header'>Task {title}</h1> 
            <Button color='green' onadd = {onadd}/>
        </div>
    )
}
// const h1style = {
//     color:'pink'
// }
export default Header
