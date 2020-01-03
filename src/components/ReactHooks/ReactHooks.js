import React, { useState, useEffect } from 'react';

const ReactHooks = () => {
    console.log("chakka", useState('react'))
    //state
    const [news, setNews] = useState([])
    const [searchQuery, setSearchQuery] = useState('react')
    const [url, setUrl] = useState('https://hn.algolia.com/api/v1/search?query=react')
    const [loading, setLoading] = useState(false);
    //fetch news
    const fetchNews = () => {
        //set loading true
        setLoading(true)
        fetch(url)
            .then(result => result.json())
            .then(data => (setNews(data.hits), setLoading(false)))
            .catch(error => console.log(error));
    };
    useEffect(() => {
        fetchNews();
    }, [url]);
   const handleChange = (e) => { 
       setSearchQuery(e.target.value)
   }
   const handleSubmit = (e) => { 
       e.preventDefault()
       setUrl(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`)

   }
   const showLoading = () => loading ? <h2>Loading...</h2> : ""
    return (
        <div>
            <h2>News</h2>
            {showLoading()}
            <form onSubmit={handleSubmit}>
                <input type='text' value={searchQuery} onChange={handleChange} />
                <button>Search</button>
            </form>
            {news.map((n, i) => (<p key={i}>{n.title}</p>))}
        </div>
    )
}




//counter app using reacthooks - using fnctl comp 
// const ReactHooks = () => {
//     const [count, setCount] = useState(0);

//     //in this eg useeffect takes another function as argument
//     // useeffect runs every time when there is change in state
//     //whenever there is a change usefect wil run automatically
//     //useefefct is used in functional components to reduce the use of life cycle methods used in class components, 
//     //in below class component componentdidmount and did update are the lifecyle methods
//     useEffect(() => {
//         document.title = `Clicked ${count} times `
//     })
//     const increment = () => {
//         setCount(count + 1); //is this declaration?
//     }
//     return (
//         <div>
//             <h2>Counter App</h2>
//             <button onClick={increment}>Clicked {count} times</button>
//         </div>
//     )
// }


//counter application without using hooks - using class

// class ReactHooks extends React.Component {
//     state = {
//         count: 0
//     };

//     increment = () => {
//         this.setState({
//             count: this.state.count + 1
//         });
//     };
//     componentDidMount() { 
//         document.title = `Clicked ${this.state.count} times `
//     }
//     componentDidUpdate() { 
//         document.title = `Clicked ${this.state.count} times `
//     }
//     render() {
//         return (
//             <div>
//                 <h2>Counter App</h2>
//         <button onClick = {this.increment}>Clicked {this.state.count} times</button>
//             </div>
//         )
//     }
// }
export default ReactHooks;
