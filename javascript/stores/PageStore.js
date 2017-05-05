import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';
//import axios from 'axios';
//import querystring from 'querystring';

class PageStore extends EventEmitter {
	constructor() {
		super()
		this.todos = [
	        {
	          id: 113464613,
	          text: "Go Shopping",
	          complete: false
	        },
	        { 
	          id: 235684679,
	          text: "Pay Utility Bills",
	          complete: false
	        },
	    ];
    }

    

    handleActions( action ) {
    	//console.log("PageStore receive an action", action);
    	switch( action.type ) {
    		case 'CHANGE_VIEW': {
    			this.createTodo( action.msg );
                break;
    		}
    	}
    }
}

const pageStore = new PageStore;
dispatcher.register(pageStore.handleActions.bind( pageStore ));

window.dispatcher = dispatcher;

export default pageStore;