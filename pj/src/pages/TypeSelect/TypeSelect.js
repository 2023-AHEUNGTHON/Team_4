import { useParams } from 'react-router-dom';
import './TypeSelect.css';
import Footer from '../../components/Footer';
import TypeBox from '../../components/TypeSelect/typebox/typebox';
import TBar from '../../components/TypeSelect/TypeSelectBar';
function TypeSelect() {
    let { category } = useParams();
    let color;
    if (category === 'news')
        color = '#FFD392';
    else if(category === 'food')
        color = '#FFAC92';
    else if(category==='culture')
        color = '#FFCFE8';
    else if(category==='economy')
        color = '#92CAFF';
    else if(category==='it')
        color = '#FF929F';
    else if(category==='health')
        color = '#A192FF';
    else if(category==='business')
        color = '#DC92FF';
    else if(category==='etc')
        color = '#E1E3E3';

    
    return (
        <>
            <div className='display-container'>
                <div className='tMainWrap'>
                    <TBar color={color} category={category}/>
                    <main>
                        <TypeBox color={color} category={category}/>
                    </main>
                </div>
                <Footer/>
            </div>
        </>
        
        
    );
  }
  
  export default TypeSelect;