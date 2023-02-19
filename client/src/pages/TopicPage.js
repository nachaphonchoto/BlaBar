import Search from '../components/Search';
import initialDetails from '../initialDetails';


export default function TopicPage () {
    
    return(
        <div className='TopicPage'>
             <Search topics={initialDetails}/>
        </div>
    )
}