import './post.css'

export default function Post(props) {
	return (
		<div className="post">
			<img src={props.imgURL} alt="" className="postImg" />
			<div className="postInfo">
				<div className="postCats">
					<span className="postCat">About</span>
					<span className="postCat">Blank</span>
				</div>
				<span className="postTitle">{props.imgTitle}</span>
				<hr />
				<span className="postDate">1 hour ago</span>
			</div>
			<p className="postDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nam minus atque quaerat expedita rerum illo, qui nesciunt, facere blanditiis quas ullam ratione labore libero culpa totam saepe voluptates accusamus!
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat accusamus omnis voluptatem vel, sint inventore saepe quibusdam ad beatae distinctio sunt soluta? Assumenda iusto, corporis error alias minima molestiae natus!
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum dolorum corporis id illo officiis accusantium quia quas placeat facilis harum molestiae alias voluptatem saepe quam veritatis, commodi aspernatur architecto iusto!</p>
		</div>
	)
}

