import './Intervalo.css'
import React from 'react'
import Card from './Card'
import {connect} from 'react-redux'

function Soma(props) {
    const {min,max} = props
    return (
        <Card title="Soma dos numeros" blue>
            <div>
            <span>
                <span>Resultado:</span>
                <strong>{min+max}</strong>
            </span>
            </div>
        </Card>
    )
}

function mapStateToProp(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

export default connect(mapStateToProp)(Soma)