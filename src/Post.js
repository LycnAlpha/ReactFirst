import{ useState} from 'react';
import { SiGithubsponsors } from "react-icons/si";
const Post = () =>
{
    const [likes, setLikes] = useState(0);
    const like = ()=>{
        setLikes(likes+1);
    }
    return (

        <div className="postCard">
            <h2>The pic of the week</h2>
            <div className="pic">
                <img src="images/hinata.jpg" alt="Hinata"></img>
            </div>
            <div className="like">
                <p>{likes} People liked</p>
                <button onClick={like}><SiGithubsponsors /></button>
            </div>
        </div>
    )

        
    
}

export default Post;