import './ArticlesList.css';
import LBar from '../../components/ArticlesList/ArticleListBar';
import ListBox from '../../components/ArticlesList/listbox/ListBox';
import Footer from '../../components/Footer';
import { useParams,useLocation } from 'react-router-dom';


function ArticlesList() {
    let { type } = useParams();

    const location = useLocation()
    const category = location.state?.category;
    const color = location.state?.color;
    console.log("in article list"+category);
    return (
        <div className="display-container">
            <div className='aMainWrap'>
                <LBar type={type} category={category} color={color}/>
                    <main>
                        <ListBox category={category}/>
                    </main>
            </div>
            <Footer/>
        </div>
    );
  }
  
  export default ArticlesList;