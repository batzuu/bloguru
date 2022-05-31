import { useEffect, useState } from "react";
import axios from "../../api/axios";

export default function Examplelogenin() {
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
		<article>
			<h2>Post List</h2>
			{posts?.length ? (
				<ul>
					{posts.map((user, i) => (
						<li key={i}>posts?.title</li>
					))}
				</ul>
			) : (
				<p>No posts to display</p>
			)}
		</article>
	);
}
