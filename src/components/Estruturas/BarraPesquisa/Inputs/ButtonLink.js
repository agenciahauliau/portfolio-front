import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Pesquisa } from '../../../../assets/SVG';

export class ButtonLink extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <Link
                to={{
                    search: `&pagina=1`
                }}
            >
                {Pesquisa}
            </Link>
        )
    }
}

export default ButtonLink
