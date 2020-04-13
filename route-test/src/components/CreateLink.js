import React from "react";
import {Link, Route} from "react-router-dom";
import Card from "./Card";

const CreateLink = ({match: {url}, data}) => {
    return(
        <div>
            <ul>
                {data.map(({id, name}) => 
                    <li key = {id}> 
                        <Link to = {`${url}/${id}`}>{name}</Link>
                    </li>
                )}
            </ul>
            <Route exact path = {url} render = {() => <p> Select</p>}/>

            <Route path = {`${url}/:id`} render = {
                ({match}) => 
                <Card 
                {...data.find(data => 
                data.id === match.params.id)}/>}/>
        </div>
    )
}

export default CreateLink;