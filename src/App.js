import { useState } from "react";
import "./index.css";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


export  default function App(){
  const [show,setShow]=useState(false);
  const [friend,setFriend]=useState(initialFriends);
  const [selected,setSelected]=useState(null)
  function handleShow(){
    setShow(!show);
  }


  function updateBalace(id,balance){
    
    setFriend(prev=>prev.map(f=>f.id===id?{...f,balance:balance}:f))
  }

  function AddFreind(newItem){
    newItem={...newItem,id:crypto.randomUUID()}
    setFriend([...friend,newItem]);
  }
  function removeFreind(element){
    setFriend(prev=>prev.filter(i=>i.id!==element))
  }
  function handleSelect(id){
    let element= friend.find((i)=>i.id===id);
    setSelected((cur)=>cur?.id===element.id?null:element);
  }
  return (
    <div className="app">
      <div className="sidebar">
         <List memebers={friend} onremove={removeFreind} onSelection={handleSelect} selectedFreind={selected}/>
         {show && <FormAddFriend onenter={AddFreind} selectedFreind={selected}/>}
         <Button onclick={handleShow}>{show ? "close": "add freind"}</Button>
      </div>
      {selected && <FormSplitBill selected={selected} updateBalace={updateBalace} />}
    </div>


  )
}

function List({memebers,onremove,onSelection,selectedFreind}){

  return(
    <ul>{memebers.map(items=><Ind I={items} key={items.id} onremove={onremove} onselect={onSelection} selectedFreind={selectedFreind}/>)}</ul>
  )

}


function Ind({I,onremove,onselect,selectedFreind}){
  const isSelected=selectedFreind?.id===I.id;
  function handleClick(id){
    onselect(id)

  }
  
  return (
   
    <li className={isSelected? "selected":""}>
      <img src={I.image} alt={I.name}/>
      <h4>{I.name}</h4>
      {I.balance<0 && (<p className="red">you owe {I.name} {Math.abs(I.balance)}</p>)}
      {I.balance>0 && (<p className="green">  {I.name} owes you {Math.abs(I.balance)}</p>)}
      {I.balance===0 && <p className="green">No action needed</p>}
      <Button onclick={()=>handleClick(I.id)}>select</Button>
      <Button onclick={()=>onremove(I.id)} >Remove</Button>
      
    </li>
    
  )
}

function Button({children,onclick}){
  return (
    <button className="button" onClick={onclick}>{children}</button>
  )
}


function FormAddFriend({onenter}){
  const [name,setName]=useState("");
  const [image,setImage]=useState("https://i.pravatar.cc/48");


  function handleEnter(e){
    e.preventDefault();
    console.log(name,image)

    if(!name ||!image)return null;

    let newItem={
      id:crypto.randomUUID,
      name,
      image,
      balance:0
    }

    onenter(newItem);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleEnter}>
      <label>👥Friends Name</label>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

      <label>📸Image</label>
      <input type="text" value={image} onChange={(e)=>setImage(e.target.value)}/>
      <Button >Confirm</Button>

    </form>

  )
}

function FormSplitBill({selected,updateBalace}){

  const [bill,setBill]=useState("");
  const [paidByUser,setPaidByUser]=useState("");
  const [whospaying,setWhosPaying]=useState("user");

  
  

  let freindsPay=Number(bill)-Number(paidByUser);
  function handleBalance(e){
    e.preventDefault();
    if(!bill ||!paidByUser)return;

    let change;

    if(whospaying==="user"){
      change=freindsPay;
    }else{
      change=-paidByUser;
    }

    
      

      updateBalace(selected.id,selected.balance+change)

    
  }
  return(
    <form className="form-split-bill" onSubmit={handleBalance}>
      <h2>split the bill with {selected.name}</h2>

      <label>🤑Bill value</label>
      <input value={bill} onChange={(e)=>setBill(e.target.value)} type="text"/>

      <label>🙋 your expense</label>
      <input value={paidByUser} onChange={(e)=>setPaidByUser(Number(e.target.value)>bill?paidByUser:Number(e.target.value))} type="text"/>

      <label >{selected.name}'s expense</label>
      <input type="text" value={freindsPay?freindsPay: null} disabled/>

      <label>💵who is paying the bill</label>
      <select value={whospaying} onChange={(e)=>setWhosPaying(e.target.value)}>
        <option value='user'>you</option>
        <option value='freind'>{selected.name}</option>
      </select>

      <Button >split bill</Button>
    </form>
  )
}