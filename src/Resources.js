const Resources = () => {
	// Component to display all the mental health resources
	return (
		<div className="Resources">
			<table>
				<thead>
					<tr>
						<th>Resource</th>
						<th>Information</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Samaritans of Singapore</td>
						<td>1-767 (24-hour hotline)</td>
					</tr>
					<tr>
						<td>Institute of Mental Health’s Mental Health Helpline</td>
						<td>6389-2222</td>
					</tr>
					<tr>
						<td>Health Hub MindSG</td>
						<td><a href="https://www.healthhub.sg/programmes/186/MindSG/Discover">https://www.healthhub.sg/programmes/186/MindSG/Discover</a></td>
					</tr>
					<tr>
						<td>More resources to be added....</td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Resources