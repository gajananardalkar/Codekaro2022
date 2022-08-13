import './App.css';
import Foodcard from './Component/foodcard';
import Backdrop from './Component/Backdrop';
import Popup from './Component/Popup';
import Cart from './Component/cart';
function App() {
  return (
    <div className="App">
      <Foodcard img = "https://source.unsplash.com/1600x800/?Biryani" Price = "150" offer = "50% Off" foodname = "Biryani" fooddesc = "Seat Home,Order Here, Avoid Covid"/>
      <Foodcard img = "https://source.unsplash.com/1600x800/?Samosa" Price = "20"  offer = "20% Off" foodname = "Samosa" fooddesc = "Seat Home,Order Here, Avoid Covid"/>
      <Foodcard img = "https://source.unsplash.com/1600x800/?Dosa" Price = "40"  offer = "30% Off" foodname = "Dosa" fooddesc = "Seat Home,Order Here, Avoid Covid"/>
      <Foodcard img = "https://source.unsplash.com/1600x800/?Pizza" Price = "250"  offer = "40% Off" foodname = "Pizza" fooddesc = "Seat Home,Order Here, Avoid Covid"/>
      <Foodcard img = "https://source.unsplash.com/1600x800/?Burger" Price = "150"  offer = "30% Off" foodname = "Burger" fooddesc = "Seat Home,Order Here, Avoid Covid"/>
      <Foodcard img = "https://source.unsplash.com/1600x800/?Sandwitch" Price = "45"  offer = "10% Off" foodname = "Sandwitch" fooddesc = "Seat Home,Order Here, Avoid Covid"/>
      <Foodcard img = "https://source.unsplash.com/1600x800/?mcdonald's"  Price = "250" offer = "50% Off" foodname = "Mcd-meal(veg/Non-Veg)" fooddesc = "Seat Home,Order Here, Avoid Covid"/>
      <Foodcard img = "https://source.unsplash.com/1600x800/?Cake"  Price = "525" offer = "25% Off" foodname = "Cake" fooddesc = "Seat Home,Order Here, Avoid Covid"/>
      <Foodcard img = "https://source.unsplash.com/1600x800/?Non-veg" Price = "459"  offer = "30% Off" foodname = "Non-veg" fooddesc = "Seat Home,Order Here, Avoid Covid"/>
      <Foodcard img = "https://source.unsplash.com/1600x800/?veg"  Price = "359" offer = "45% Off" foodname = "veg" fooddesc = "Seat Home,Order Here, Avoid Covid"/>
      {/* <Backdrop/> */}
      {/* <Popup/> */}
      {/* <Cart/> */}
    </div>
  );
}

export default App;
