export default function Fruits({fruits})
{
    //const displayFruits = function(){return fruits.map( function(fruit){return <li>{fruit}</li>})}
    const displayFruits = () => fruits.map (fruit => <li>{fruit}</li>)
    return (
        <>
        <h1>Fruits</h1>
        <ul>
            {displayFruits()}
        </ul>
        </>
        
    )
}