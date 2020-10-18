import React, {Component} from 'react';
import './card-list.style.css';
import CardComponent from "../card/card.component";

export default class CardListComponent extends Component {

    render() {
        return (
            <div className="wrapper">
                {
                    this.props.monsters.map(
                        monster => <CardComponent monster={monster} key={monster.id}/>
                    )
                }
            </div>
        );
    }
}