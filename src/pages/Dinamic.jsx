
import { useParams } from "react-router-dom"

const Dinamic = () => {
    const dinamic = useParams()
    

    const data = [
        {id:1,name:'nika',age:20},
        {id:2,name:'luka',age:21},
        {id:3,name:'oto',age:22}
    ]

    const user = data.find(user => user.id == dinamic.id)


    if(!user) {
        return <div>
            <h1>there is no user</h1>
        </div>
    }
    return(
        <div>
            <h1>{user.id}</h1>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
        </div>
    )
}

export default Dinamic