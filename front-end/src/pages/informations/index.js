import React, { useEffect, useState } from 'react';
import Card from "../../components/card"
import dataToShow from "../../data/formations.json"
import { Container } from './styles';
import FormationImg from '../../assets/images/formação.svg';
function Information(props) {

    // const images = require.context('../../assets/images', true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(false);

    useEffect(() => {
    setData(
        dataToShow.pages.find(item => item.name == props.pageName))
        setLoading(true);
    }, [props.pageName])
console.log(data.image);
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
            <img className='formation-image' src={FormationImg}/>

        </>)
        }
            {/* <img className='formation-image' src={require(data.image).default}/> */}
        </Container>
    )
}

export default Information;