// import React, { useEffect } from "react";
// import "./Sidebar";
// import "./Dashboard.css";
// import { Link } from "react-router-dom";
// import { Typography } from "@mui/material";
// import { Doughnut, Line } from "react-chartjs-2";
// import { useSelector, useDispatch } from "react-redux";
// import { getAdminProduct } from "../../actions/productAction";
// import Sidebar from "./Sidebar";
// import MetaData from "../layout/MetaData";
// import { getAllOrders } from "../../actions/orderAction";

// const Dashboard = () => {
//   const dispatch = useDispatch();

//   const { products } = useSelector((state) => state.products);
//   const { orders } = useSelector((state) => state.allOrders);

//   let outOfStock = 0;
//   let length = 0;

//   products &&
//     products.forEach((item) => {
//       if (item.stock === 0) {
//         outOfStock += 1;
//       }
//     });

//   products &&
//     products.forEach((item) => {
//       length += 1;
//     });

//   useEffect(() => {
//     dispatch(getAdminProduct());
//     dispatch(getAllOrders());
//   }, [dispatch]);

//   let totalAmount = 0;
//   orders &&
//     orders.forEach((item) => {
//       totalAmount += item.totalPrice;
//     });

//   const lineState = {
//     labels: ["Initial Amount", "Amount Earned"],
//     datasets: [
//       {
//         label: "TOTAL AMOUNT",
//         backgroundColor: ["tomato"],
//         hoverBackgroundColor: ["rgb(197, 72, 49)"],
//         data: [0, 4000],
//       },
//     ],
//   };

//   const doughnutState = {
//     labels: ["Out of Stock", "InStock"],
//     datasets: [
//       {
//         backgroundColor: ["#00A6B4", "#6800B4"],
//         hoverBackgroundColor: ["#4B5000", "#35014F"],
//         data: [outOfStock, length - outOfStock],
//       },
//     ],
//   };

//   return (
//     <div className="dashboard">
//       <MetaData title="Dashboard - Admin Panel" />
//       <Sidebar />

//       <div className="dashboardContainer">
//         <Typography component="h1">Dashboard</Typography>

//         <div className="dashboardSummary">
//           <div>
//             <p>
//               Total Amount <br /> ₹{totalAmount}
//             </p>
//           </div>
//           <div className="dashboardSummaryBox2">
//             <Link to="/admin/products">
//               <p>Product</p>
//               <p>{products && products.length}</p>
//             </Link>
//             <Link to="/admin/orders">
//               <p>Orders</p>
//               {/* <p>50</p> */}
//               <p>{orders && orders.length}</p>
//             </Link>
//             {/* <Link to="/admin/users">
//               <p>Users</p>
//               <p>100</p>
//             </Link> */}
//           </div>
//         </div>

//         {/* <div className="lineChart">
//           <Line data={lineState} />
//         </div>

//         <div className="doughnutChart">
//           <Doughnut data={doughnutState} />
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;





// // ye toh kaam kar rha hai 
// // const Dashboard = () => {
// //   return <div>hello world</div>;
// // }
// // export default Dashboard;



import React, { useEffect } from "react";
import "./Sidebar";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
import Sidebar from "./Sidebar";
import MetaData from "../layout/MetaData";
import { getAllOrders } from "../../actions/orderAction";
import { Line,Doughnut } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, ArcElement } from "chart.js"; // Import Chart and CategoryScale

Chart.register(CategoryScale,LinearScale,PointElement,LineElement,ArcElement); // Register CategoryScale with Chart

// Now you can use Line and CategoryScale in your chart configuration



const Dashboard = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  const { orders } = useSelector((state) => state.allOrders);
   //   let outOfStock = 0;
//   let length = 0;
  var outOfStock = 0;
  var length = 0;
  console.log(outOfStock);
  console.log(length);

  products &&
    products.forEach((item) => {
      if (item.stock === 0) {
        outOfStock += 1;
      }
    });

  products &&
    products.forEach((item) => {
      
      length += 1;
  
    });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });




  const lineData = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: "tomato",
        hoverBackgroundColor: "rgb(197, 72, 49)",
        data: [0, totalAmount], // Use the actual total amount here
      },
    ],
  };

  const lineOptions = {
    responsive: true,
  };

  
  const doughnutData = {
    labels: ["Out of Stock", "In Stock"],
    datasets: [
      {
        data: [outOfStock, length - outOfStock],
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
  };

  

  return (
    <div className="dashboard">
      <MetaData title="Dashboard - Admin Panel" />
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> ₹{totalAmount}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              <p>{products && products.length}</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>{orders && orders.length}</p>
            </Link>
          </div>
        </div>

        <div className="lineChart">
          <Line data={lineData} options={lineOptions} />
        </div>

        <div className="doughnutChart">
          <Doughnut data={doughnutData} options={doughnutOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


// import React from "react";
// // import "./styles.css";
// import { CategoryScale, Chart,LinearScale,PointElement} from "chart.js";
// import { Line } from "react-chartjs-2";
// Chart.register(CategoryScale,LinearScale,PointElement,Line);

// const datad = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//   datasets: [
//     {
//       label: "First dataset",
//       data: [33, 53, 85, 41, 44, 65],
//       fill: true,
//       backgroundColor: "rgba(75,192,192,0.2)",
//       borderColor: "rgba(75,192,192,1)"
//     },
//     {
//       label: "Second dataset",
//       data: [33, 25, 35, 51, 54, 76],
//       fill: false,
//       borderColor: "#742774"
//     }
//   ]
// };

// export default function App() {
//   return (
//     <div className="App">
      
//       <Line data={datad} />
//     </div>
//   );
// }
