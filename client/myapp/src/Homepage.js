import {Link} from 'react-router-dom' ;

const Homepage = () => 
{ 
   //img = ""
    return (
      <div className = "Homepage">
         <header className = "homepageHeader">
          <p className = "headerMain">Welcome to our Agroweb</p>
            <ul className = "navItems">
                <li className = "itemList">
                <Link to = "/" className = "linking">   
                 Home 
                 </Link>
                </li>
                <li className = "itemList">
                <Link to = "/Products" className = "linking">   
                 Explore Products
                 </Link>
                </li>
              {/*  
                <li className = "itemList">
                <Link to = "/Login" className = "linking">   
                 Add Products  
                 </Link> 
                </li>
               */}
                <li className = "itemList">
                <Link to = "/BuyerLogin" className = "linking">   
                 Product Complaints 
                 </Link>
                </li>
                <li className = "itemList">
                <Link to = "/HomepageFarmer" className = "linking">   
                 Farmer Mode 
                 </Link>
                </li>
            </ul>
         </header>
         <main className = "homepageMain">
         <h3 className = "mainHeading">For farmers</h3>
         <ul className = "mainList">
         <li>Sell your products at a reasonable price</li>
         <li>Add your new products by just creating an account</li>
         <li>Contact buyers</li>
         </ul> 
         <h3 className = "mainHeading">For buyers</h3>
         <ul className = "mainList">
         <li>Buy goods by just creating an account</li>
         <li>Can contact with respective farmers</li>
         <li>Can give complaint for faulty products</li>
         </ul> 
         </main>
      </div>  
    )
}

export default Homepage ;