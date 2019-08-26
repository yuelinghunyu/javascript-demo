import { connect } from 'react-redux'
import { setVisibilityFilter } from '../redux/actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  debugger
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    debugger
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)