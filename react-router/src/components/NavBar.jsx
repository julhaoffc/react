import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <div>
            <span style={{padding: '8px'}}><NavBar to={'/'} className={({isActive}) => (isActive ? 'active' : "")}>Home</NavBar></span>
            <span style={{padding: '8px'}}><NavBar to={'/products'} className={({isActive}) => (isActive ? 'active' : "")}>Produtos</NavBar></span>
        </div>
    )
}