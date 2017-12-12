import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ArtistTag from './js/ArtistTag';

var styles = {
    'page-style': {
        position: 'absolute',
        left: 0, right: 0, top: 0, bottom: 0,
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        backgroundColor: '#fff',
        fontFamily: '"Century Gothic", Monaco, sans-serif',
        fontSize: "14pt"
    }
}

class Page extends Component {
    render() {
        return <div style={styles['page-style']}>
            <ArtistTag />
        </div>
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('app')
);