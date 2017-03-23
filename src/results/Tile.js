import React, { PropTypes } from 'react'
import './Tile.css';

class Tile extends React.Component {

  static propType = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string,
      title: PropTypes.string,
      desc: PropTypes.string,
    }),
    onSelect: PropTypes.func.isRequired,
  }

  render () {
    const { item, onSelect } = this.props;

    return (
      <div className="tile is-parent">
        <div className="tile is-child">
        <figure className="figure">
          <img
            className="is-3by4 pointer" 
            onClick={() => onSelect(item.id)}
            src={item.img}
            alt={item.title}
          />
        </figure>
        <p className="title">{item.title}</p>
        <p className="subtitle">{item.desc}</p>
        </div>
      </div>
    );
  }
}

export default Tile;
