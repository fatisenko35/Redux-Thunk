
import axios from "axios";
import { setLoading, clearLoading} from "../redux/actions/appActions";
import { setNewsList } from "../redux/actions/newsActions";


  const url = "https://newsapi.org/v2/everything?"
  + "q=Apple&"
  + "from=2022-04-18&"
  + "sortBy=popularity&"
  + "apiKey=2100b4fe8b284e35a16bca2c11b861f1";


//! getNews fonksiyonu başka bir fonksiyonu döndürüyor. Bu durumda çağırırken dispatch(getNews()) şeklinde kullanmak gerekir.
export const getNews = () => {
    return async (dispatch) => {
      try {
        dispatch(setLoading());
        const { data } = await axios.get(url);
        dispatch(setNewsList(data.articles));
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(clearLoading());
      }
    };
  };
  
  //! bu kullanımda getNew bir değişken gibi düşünülebilir. Dolayısıyla, View tarafında dispatch(getNews) şeklinde çağrılır.
  // export const getNews = async (dispatch) => {
  //   try {
  //     dispatch(setLoading());
  //     const { data } = await axios.get(url);
  //     dispatch(setNewsList(data.articles));
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     dispatch(clearLoading());
  //   }
  // };