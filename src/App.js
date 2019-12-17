import React,{useEffect,useState} from 'react';
import Recipe from './Recipe'
import './App.css';



const App=()=>{

  const APP_ID='f19b891c';
  const APP_KEY='56af1f871bc4d5194496cea557f6eb18	';

  const [recipes,setRecipes]=useState([]); 
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('chicken')

  useEffect(()=>{
    getRecipes();
  },[query])
  
  const getRecipes= async ()=>{
    const responce=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data= await  responce.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch=e=>{
    setSearch(e.target.value);
  }

  const getSearch=e=>{
    e.preventDefault();
    setQuery(search);
    setSearch('');

  }

  return(
    <div className="App">
     <form onSubmit={getSearch} className="search-form">
       <input type="text" className="search-bar" value={search} onChange={updateSearch} />
       <button type="submit" className="search-button">Search</button>
     </form>
     <div className="recipes">
     {recipes.map(recipe=>(
       <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}  
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
           />
     ))}
     </div>
    </div>
  );
};

export default App;
