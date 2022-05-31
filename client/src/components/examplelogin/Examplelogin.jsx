import { useEffect, useState } from "react";
import axios from "../../api/axios";
import "./examplelogin.css";

export default function Examplelogin() {
	const [posts, setPosts] = useState();

	useEffect(() => {
		let isMounted = true;
		let controller = new AbortController();

		const getUser = async () => {
			try {
				const response = await axios.get("/posts", {
					signal: controller.signal,
				});
				console.log(response.data);
				isMounted && setPosts(response.data);
			} catch (e) {
				console.log("hello");
				console.log(e);
			}
		};

		getUser();

		return () => {
			isMounted = false;
			controller.abort();
		};
	}, []);

	return (
		<article className="postlist">
			<h2>Post List</h2>
			{posts?.length ? (
				<ul>
					{posts.map((post) => (
						<li key={post._id}>{post?.title}</li>
					))}
				</ul>
			) : (
				<p>No posts to display</p>
			)}
		</article>
	);
}
