import { useAxios } from "../useAxios/useAxios";

function App() {
  const {loading, data,error,refetch} = useAxios({
    url : 'https://yts-proxy.now.sh/list_movies.json?sort_by=rating',
  })
  console.log(`loading : ${loading} ,data :  ${JSON.stringify(data)} ,error :  ${error}`)

  return (
    <div className="App" >
      <div onClick={refetch}>
        ReFetch
      </div>
      <h2>{loading? "loading":"end"}</h2>
    </div>
  );
}

export default App;
