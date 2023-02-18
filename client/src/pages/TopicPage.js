
import Topic from '../components/Topic';


export default function TopicPage () {
    let title = "Test"
    let room = 1
    
    return(
        <div className='TopicPage'>
            <Topic title={title} room={room}/>
        </div>
    )
}