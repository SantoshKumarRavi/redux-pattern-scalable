
export default  function DemoapiCaller<T>(
	method: string,
	path: string,
	data?: any
): Promise<T[] | null> {
	// console.log("url -- >",process.env.REACT_APP_DEMO_APP + path);
	// console.log("method -- >",method);

	return fetch(process.env.REACT_APP_DEMO_APP + path, {
		method,
		headers: {
			 "Accept": "application/json",
			// "Content-Type": "application/json",
		// 	// "Access-Control-Allow-Origin":"http://localhost:3001/",
		// 	// "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
		// 	// 'Access-Control-Allow-Origin': 'http://localhost:3000'
		// 	// 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
		// 	// 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',

		// 	// 'Access-Control-Allow-Credentials':'true'
		// 	// "Access-Control-Allow-Headers": Content-Type,
		},
		// mode:"cors",
		// "credentials": 'same-origin',
		// mode: 'cors',
        // credentials: 'include',
		body: data ? JSON.stringify(data) :null,
	}).then(res => res.json())
    .then((x)=>{
		console.log("url fetched x-- >",x);
		return x
	});
}
