import HeaderComponent from './components/HeaderComponent.jsx';
import FormComponent from './components/FormComponent.jsx';

export default function App(){
    return (
        <>
            <HeaderComponent />
            
            <div className='main-data'>
                <FormComponent />
            </div>
        </>
    );
}