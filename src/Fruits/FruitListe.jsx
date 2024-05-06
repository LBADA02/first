import { useState } from "react"

export default function FruitListe()
{
    const [fruit,setFruit] = useState('');
    const [fruitListe , setFruitListe] = useState([])

    const displayFruits = () => fruitListe.map((fruit,key) =>   <li key={key}>{fruit}</li> )



    const handelInputFruit  = () => {
        setFruit(document.querySelector('#fruit').value)
    }

        


    const handelSubmitForm = (e)=>{
        e.preventDefault();
        setFruitListe([...fruitListe,fruit])
       /* const newListeFruits =  fruitListe
        newListeFruits.push(fruit)
        setFruitListe(newListeFruits)
        console.log(fruitListe)*/

    }




    return (
        <>
        <h1>Fruits</h1>

        <h3>Ajouter Fruits : </h3>
            <form >
                <input type="text" onChange={handelInputFruit} id="fruit" />
                <input type="submit" onClick={handelSubmitForm} value="Submit" />
            </form>
        <ul>
            {displayFruits()}
        </ul>
        </>
        
    )
}