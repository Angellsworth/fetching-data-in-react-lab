// src/components/StarshipList/StarshipList.jsx
import StarshipCard from "../StarshipCard/StarshipCard";

const StarshipList = ({ starships }) => {
    return (
        <section>
            <ul>
                {starships.map((ship, index) => (
                    <StarshipCard 
                        key={index}
                        starship={ship}
                    />
                ))}
            </ul>
        </section>
    )
}

export default StarshipList;