 //UPDAING STATE BY CREATING ANOTHER FUNCTION ON THAT STATE YOU WANT TO UPDATE
 
 import { useState }  from 'react';


export default function Player({name, symbol}){
    const [ isEditing, setIsEditing ]  = useState(false);

    function handleEditClick() {
       // setIsEditing(isEditing ? false : true);  
       setIsEditing((editing) => !editing);  // updating state
   //    setIsEditing(editing => !editing); 

    }

    let playerName = <span className="player-name">{name}</span>;
    // let btnCaption = 'Edit';

    if (isEditing)  {
      //  playerName = <input  type="text" required defaultValue={name}/>;  // this helps you to be able to edit
      playerName = <input  type="text" required value={name} />; 
       // btnCaption = 'Save'; 
    }

    return(
        <li>
        <span className="player">
      {/*    <span className="player-name">{name}</span>          */}


         {playerName}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
       </li>

    );
}