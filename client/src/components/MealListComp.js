import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";

function sleep(delay = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

export default function Asynchronous() {
  const [open, setOpen] = React.useState(false);
  const [filter, setFilter] = React.useState('');
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  
  React.useEffect(() => {
    let active = true;

    console.log("test");

    const response = fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${filter}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "f58be7efcemshbdf5abd74dc6c2ep1411d0jsn6ff2904e9d7f"
        }
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log("response", responseJson);
        if (active) {
            setOptions(responseJson.results.map(x => x.title));
        }
      });

    return () => {
      active = false;
    };
  });



  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <div>
        <TextField onChange={e => setFilter(e.target.value)} value={filter} />
        {options && options.length > 0 && 
        <ul>
        {
        options.map((x, i) => <li key={i}>{x}</li>)
}
        </ul>
        }
</div>
  );
}
