import "./App.css";
import Cards from "./containers/Cards";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import CustomizedSnackbars from "./сomponents/CustomizedSnackbars";

import { useSelector } from "react-redux";
import quantity from "./helpers/quantity";
import sum from "./helpers/sum";
import { useDispatch } from "react-redux";
import { updateDepositedSum, updateMashineSum, updateSelectedSum, showDepositedPanel, showUserPanel } from "./store/actions";
import { useEffect } from "react";


function App() {

  const state = useSelector(state => state);
  const { userCoins, depositedCoins, mashineCoins, items } = state;
  const dispatch = useDispatch();
  const selectedItems = items.filter(item => item.isSelected);

  const userSum = sum(userCoins);
  const depositedSum = sum(depositedCoins);
  const mashineSum = sum(mashineCoins);
  const selectedSum = sum(selectedItems);

  const userQuantity = quantity(userCoins);
  const depositedQuantity = quantity(depositedCoins);
  const mashineQuantity = quantity(mashineCoins);
  const selectedQuantity = quantity(selectedItems);


  useEffect(()=>{
    dispatch(updateDepositedSum(depositedSum));
    dispatch(updateMashineSum(mashineSum));
    if (depositedSum) {
      dispatch(showDepositedPanel(true));
    }
    if (selectedSum) {
      dispatch(showUserPanel(true));
      dispatch(updateSelectedSum(selectedSum));
    }
  }, [dispatch, userSum, depositedSum, mashineSum, selectedSum])


  return (
    <>
      <Header
        props={{selectedSum, selectedQuantity, selectedItems, items}}
      />
      <Cards />
      <Footer
        state={state}
        props={{userSum, userQuantity, depositedSum, depositedQuantity, mashineSum, mashineQuantity}}
       />
      <CustomizedSnackbars />
    </>
  );
}

export default App;
