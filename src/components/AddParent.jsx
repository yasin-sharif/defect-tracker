import store from '../store/store';
import AddDefect from './AddDefect';
import '../stylesheets/common.css';

const AddParent=()=>{
    const state=store.getState();
    const obj=state.rootReducer.logAction[0];

    if(obj!=null && obj.role == "tester") {
        return <AddDefect />
    }
    else if(obj!=null && obj.role=="developer"){
        return <> 
            <h1> <i class="fa-solid fa-triangle-exclamation fa-2xl margin-right queue"></i>Unauthorised access for a developer.</h1>
        </>
    }
    else{
        return <>
            <h1 className='queue'>
                Login as a tester to view this page. <br/> <br/>
                <a className='link' href="/"><i class="fa-solid fa-arrow-right-to-bracket fa-2xl"></i></a>
            </h1>
        </>
    }
}

export default AddParent;