import { useEffect, useState } from "react";

export var Parent =()=>{
     let [states,setStates] = useState(["tn", "ap", "up", "ka"]);
     let [state, setState] = useState('');
     let [city, setCity] = useState('');
     let showCity= (c)=>{
             setCity(c);
     }
      return(
        <article>
            <h2>States</h2>
            <hr/>
            <div className="alert alert-primary">Your seleceted city {city}</div>
            <div>
                State <select onChange={e=>setState(e.target.value)}>
                    <option value=''>--select state---</option>
                    {states.map(s=><option value={s}>{s}</option>)}
                </select>
            </div>
            <hr/>
            <Child selectedState={state} onSelectedCity={showCity}/>
        </article>
      );

}

export var Child = (props)=>{
    let citiesMap = new Map();
    citiesMap.set("tn", ["Chennai", "Trichy", "Coimabatore", "Madurai"]);
    citiesMap.set("ap", ["Hyderabad", "Vijayawada", "Vizag", "Kurnool","Guntur"]);
    citiesMap.set("up", ["Mathura", "Noida", "Lucknow", "Ayodhya"]);
    citiesMap.set("ka", ["Bangalore", "Mysore", "Shimoga", "Raichur"]);

    let [cities, setCities] = useState([]);
   
    useEffect(()=>{
         if(props.selectedState && props.selectedState.length > 0){
            setCities(citiesMap.get(props.selectedState));
         }
    }, [props.selectedState]);
    return(
        <section>
            <h2>Cities</h2>
            {props.selectedState && props.selectedState.length > 0
                   ?<div class="alert alert-success">
                       Your Selected State: {props.selectedState.toUpperCase()}
                     </div>
                     
                   :''}
            {props && props.selectedState.length > 0 
            ?<><div>City</div>
               <div><select size="5" onChange={e=>props.onSelectedCity(e.target.value)}>
                   <option value=''>--select city---</option>
                   {cities.map(c=><option value={c}>{c}</option>)}
                   </select>
                </div>
             </>:''}
        </section>
    );
}