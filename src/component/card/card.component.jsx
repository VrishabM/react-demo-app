import React, {Component} from 'react';
import './card.style.css';

export default class CardComponent extends Component{

    render() {
        return (
            <div className="card">
                <img className="profile" src={this.props.monster.img} alt={this.props.monster.name}/>
                <div className="card-title">{this.props.monster.name}</div>
                <div className="card-title sub">{this.props.monster.occupation}</div>
            </div>
        );
    }
}