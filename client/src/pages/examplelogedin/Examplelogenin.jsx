import { useEffect, useState } from "react";
import axios from "../../../api/axios";

export default function Examplelogenin() {
	const [users, setUsers] = useState();

	useEffect(() => {
		let isMounted = true;
		let controller = new AbortController();

		const getUser = async () => {
			try {
				const response = await axios.get("/users", {
					signal: controller.signal,
				});
				console.log(response.data);
				isMounted && setUsers(response.data);
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
			<h2>User List</h2>
			{users?.length ? (
				<ul>
					{users.map((user, i) => (
						<li key={i}>user?.username</li>
					))}
				</ul>
			) : (
				<p>No users to display</p>
			)}
		</article>
	);
}
