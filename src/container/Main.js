import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types' // change this to apply to react new version
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class Main extends Component {
    constructor(props) {
        super(props)
    }
}


Main.propTypes = {
    champions: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    const {
        championList,
        isFetchingChampions
    } = state

    const {
        champions: champions
    } = championList['list'] || {
        isFetchingChampions: false,
        champions: null
    }

    return {
        championList, champions,
        isFetchingChampions
    }
}

export default withRouter(connect(mapStateToProps)(Main))