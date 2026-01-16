import { useRef } from "react";

export var UnControl = ()=>{
    let nameRef = useRef();
    let validateName= (e)=>{
       e.preventDefault();
       console.log(nameRef.current.value);
       let strName = nameRef.current.value;
       let patt = /^[a-zA-Z]{3,15}$/;
       if(!patt.test(strName)) alert("invalid Name")
       else alert("succesful validation");
    }
    return(
        <article className="bg-warning p-2 m-2">
            <h2>Un Controlled Component</h2>
            <hr/>
            <form>
                <div>
                    Name <input type="text" ref={nameRef} />
                          <input type="submit" onClick={validateName}/>
                </div>
            </form>
        </article>
    );
}