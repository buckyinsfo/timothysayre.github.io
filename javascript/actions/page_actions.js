import dispatcher from '../dispatcher';

export function changeView( msg ) {
	dispatcher.dispatch({
		type: 'CHANGE_VIEW',
		msg,
	})
}