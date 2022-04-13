import React, { useEffect, useState } from 'react';
import Card from "../../components/card"
import dataToShow from "../../data/formations.json"
import { Container } from './styles';
function Information(props) {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(false);

    useEffect(() => {
    setData(
        dataToShow.pages.find(item => item.name === props.pageName))
        setLoading(true);
    }, [props.pageName])

    return (
        <Container>
        { loading && (<>
            <div className='card-container'>
            {
                data.cards.map((card, index) => (
                     <Card key={index} card={card} />
                ))
            }
            </div>
            <img className='formation-image' src={data.image} alt="Formações"/>

        </>)
        }
        </Container>
    )
}

export default Information;