import Post from '../post/Post'
import './posts.css'
const postData = [
	{imgURL : "https://i.imgur.com/I3bpA1E.jpeg", imgTitle: "GAADI"},
	{imgURL : "https://i.imgur.com/NLfRa3e.jpeg", imgTitle: "Pixel"},
	{imgURL : "https://i.imgur.com/eaA1ifd.jpeg", imgTitle: "Naanaa"},
	{imgURL : "https://i.imgur.com/d8oek68.jpeg", imgTitle: "Icecream truck"},
	{imgURL : "https://i.imgur.com/GGRBge3.jpeg", imgTitle: "wowpinku"},
	{imgURL : "https://i.imgur.com/q2czgUR.jpeg", imgTitle: "xoxoxoxo"}
]

export default function Posts() {
	return (
		<div className="posts">
			{postData.map(post => <Post imgURL={post.imgURL} imgTitle={post.imgTitle} Tareekh={Math.floor(Math.random() * 10) + 1} />)}
		</div>
	)
}
