import { useEffect, useRef, useState } from "react";

export var Project = ()=>{
  let arr = [{"pname":"Project1", "employee":[{"eid":1, "ename":"rama"}]},
             {"pname":"project2", "employee":[{"eid":2, "ename":"sam"}]}];
  let [projects, setProjects] = useState([...arr]);
  //let [pdisable, setPdisable] = useState(true);
  let projectRef = useRef();
  let [pname, setPname] = useState('');
  
  useEffect(()=>{
    //setPdisable(true);
    projectRef.current.disabled = true;
    if(pname.trim().length > 0){
        if(projects.filter(p=>p.pname.toLowerCase() == pname.toLowerCase()).length ==0)
            //setPdisable(false);
             projectRef.current.disabled = false;
            
    }
  }, [pname])

  let addProject = ()=>{
    let arr = [...projects];
    arr.push({"pname":pname, "employee":[]});
    setProjects(arr);
    //setPdisable(true);
    projectRef.current.disabled = true;
    setPname('');
  }
let addEmployee = (pidx, ename)=>{
    let arr = [...projects];
    let maxEmp = arr[pidx].employee.reduce((a,b)=>a.eid > b.eid?a:b, {"eid":0})
    arr[pidx].employee.push({"eid":maxEmp.eid +1, "ename":ename});
    setProjects(arr);

}
let removeEmployee = (pidx, eidx)=>{
   let arr = [...projects];
   let empArr = arr[pidx].employee;
   empArr.splice(eidx,1);
   setProjects(arr);
}
let removeProject = (pidx)=>{
    let arr = [...projects];
    arr.splice(pidx,1);
    setProjects(arr);
}
  return(<article className="bg-warning p-2 m-2">
          <h1>Project And Employee</h1>
          <hr/>
          {projects.map((p,index)=><Employee proj={p} idx={index} onAddEmployee={addEmployee} onRemoveEmp={removeEmployee} onRemoveProject={removeProject}/>)}
          <div><input type="text" value={pname} onChange={e=>setPname(e.target.value)}/>
               <input type="button" value="Add Project" onClick={addProject} ref={projectRef}/>
          </div>
  </article>);
}

export var Employee = (props)=>{
    //let [edisable, setEdisable] = useState(true);
    let [ename, setEname] = useState('');
    let employeeRef= useRef();

    useEffect(()=>{
       //setEdisable(true);
       employeeRef.current.disabled = true;
       if(ename.trim().length > 0){
            if(props.proj.employee.filter(e=>e.ename == ename).length == 0)
                //setEdisable(false);
                employeeRef.current.disabled = false;
        }
    }, [ename]);
    let invokeAddEmpFromParent = ()=>{
        props.onAddEmployee(props.idx, ename);
        //setEdisable(true);
        employeeRef.current.disabled = true;
        setEname('');
    }

    return(<section>
            <h3>{props.proj.pname} <button onClick={()=>props.onRemoveProject(props.idx)}>X</button></h3>
            <div>Ename <input type="text" value={ename} onChange={e=>setEname(e.target.value)}/>
                 <input type="button" value="Add Employee" onClick={invokeAddEmpFromParent} ref={employeeRef}/>
            </div>
            {props.proj.employee.map((e,index)=><div className="d-flex gap-3 justify-content-center">
                  <div>{e.eid}</div>
                  <div>{e.ename}</div>
                  <div><input type="button" onClick={()=>props.onRemoveEmp(props.idx, index)} className="btn btn-danger" value="X"/></div>
            </div>)}
    </section>);
}