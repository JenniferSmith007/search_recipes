export const recipe = ({label,cuisineType,image,mealType,totalTime,yield,ingredients }) => {
    
    return (
        <div>
        <h1>{label}</h1>
        <h2>{cuisineType}</h2>
        <img>{image}</img>
        <h3>{mealType}</h3>
        <p>{totalTime}</p>
        <p>{yield}</p>
        <p>{ingredients}</p>
        </div>
    )
}

