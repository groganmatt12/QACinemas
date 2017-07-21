
function fetchMovies(){
	return window.fetch('http://localhost:8081/test')
		
		.then(console.log("fetching"))
		//.then(cb);
		
}

function parseJSON(response) {
	console.log(response + "test");
	return (JSON.parse(response));
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error);
  throw error;
}

const loader = { fetchMovies };
export default loader;