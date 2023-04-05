import "./App.css";
import { Component,useState,useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/serach-box.component";

const App = () =>{
  const [searchString,setSearchString] = useState("")
  const [monsters,setMonsters] = useState([])
  const [filteredMonsters,setFilteredMonsters] = useState(monsters)
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((res) =>
        setMonsters(res)
      )
      .catch((error) => console.log(error));
  },[])
  useEffect(()=>{
    const filteredArray = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchString)
    })
    setFilteredMonsters(filteredArray)
  },[searchString,monsters])
  const onSearchChange = (event) =>{
    setSearchString(event.target.value.toLowerCase())
  }
  return(
    <div>
      <h1>Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder={"search monsters"} className={"monster-search-box"} />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

// class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     searchString: "",
  //     monsters: [],
  //   };
  //   console.log("costructor");
  // }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((data) => data.json())
//       .then((res) =>
//         this.setState(() => {
//           return { monsters: res };
//         })
//       )
//       .catch((error) => console.log(error));
//     console.log("componentDidMount");
//   }

//   onSearchChange = (event) => {
//     this.setState(()=>{
//       return {
//         searchString: event.target.value.toLowerCase()
//       }
//     })
//   }

//   render() {
//     console.log("render");
//     const {searchString,monsters} = this.state
//     const {onSearchChange} = this
//     const filteredArray = monsters.filter((el)=>{
//       return el.name.toLowerCase().includes(searchString)
//     })
//     //console.log(filteredArray)
//     return (
//       <div className="App">
//         <h1>Monsters Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder={"search monsters"} className={"monster-search-box"} />
//         <CardList monsters={filteredArray} />        
//       </div>
//     );
//   }
// }

export default App;
