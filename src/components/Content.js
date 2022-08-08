import { useEffect, useState } from 'react';
import {Card, Button} from 'react-bootstrap';
import axios from 'axios';

const Content = ({searchedFood}) => {

    const [allData, setAllData] = useState([]);

    useEffect(() => {        
        const getRecipes = async () => {
            const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchedFood}&app_id=25650536&app_key=071fdf3f6f72db6340372a974c84e5bc`;
            const result = await axios.get(url);
            setAllData(result.data.hits);
        }

        getRecipes();
    }, [searchedFood])

  return (
    <>

      <div className='wrapper'>

        {allData.map((food) => {
            return(
                <>
                    <Card key={food.recipe.label} className="foodCard">
                        <Card.Img variant="top" src={food.recipe.images.SMALL.url} height="300px" />
                        <Card.Body>
                        <Card.Title>{food.recipe.label}</Card.Title>
                        <Button variant="warning" target='_blank' href={food.recipe.url}>See More</Button>
                        </Card.Body>
                    </Card>
                </>
            )            
        })}        

      </div>

    </>
  );
}

export default Content;