function CharCard({name,image}){
    return (
        <div className="charCard">
            <h3>{name}</h3>
            <img src={image} alt={name} />
        </div>
    )
}


export default CharCard