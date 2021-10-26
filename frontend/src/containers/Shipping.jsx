// import React from 'react';
// import { useDispatch, useSelector} from "react-redux";


// const Shipping = () =>{
//   const selector = useSelector((state) => state);
//   const dispatch = useDispatch();
//     return (
//       <>
//         <div class="box">
//           <p>- Order your items -</p>
//         </div>

//         <section class="details">
//           <h3>Shipment Details</h3>
//           <h4>Please check your items and confirm it</h4>
//           <div class="box2">
//             <table>
//               {carts &&
//                 carts.map((cart) => (
//                   <tr>
//                     <td>{cart.item.name}</td>
//                     <td>{cart.quantity}</td>
//                     <td>{cart.item.Price}</td>
//                   </tr>
//                 ))}
//               <tr>
//                 <td>Casio CT - S200 Keyboard</td>
//                 <td>1</td>
//                 <td>$1200</td>
//               </tr>
//               <tr class="border">
//                 <td>Total Price</td>
//                 <td>{totalitem}</td>
//                 <td>${Subtotal}</td>
//               </tr>
//             </table>
//           </div>

//           <div class="form">
//             <label for="name">Full name</label> <br />
//             <input
//               type="text"
//               id="name"
//               name="name"
//               required
//               placeholder="Enter Recipient's name"
//               onChange={inputFullname}
//             />
//             <br />
//             <label for="number">Phone Number</label> <br />
//             <input
//               type="text"
//               id="number"
//               name="number"
//               required
//               placeholder="Enter Phone Number"
//               onChange={inputPhoneNumber}
//             />
//             <br />
//             <label for="address">Street address or P.O. Box</label> <br />
//             <input
//               type="text"
//               id="address"
//               name="address"
//               required
//               placeholder="Enter Street address or P.O. Box"
//               onChange={inputAddress}
//             />
//             <br />
//             <label for="zip">PIN code</label> <br />
//             <input
//               type="text"
//               id="zip"
//               name="zip"
//               required
//               placeholder="Enter PIN code"
//               onChange={inputPin}
//             />
//             <br />
//             <label for="house">Apt, suite, unit, building, floor, etc.</label>
//             <br />
//             <input
//               type="text"
//               id="house"
//               name="house"
//               required
//               placeholder="Enter Apt, suite, unit, building, floor, etc."
//               onChange={inputHouse}
//             />
//             <br />
//             <label for="city">City</label> <br />
//             <input
//               type="text"
//               id="city"
//               name="city"
//               required
//               placeholder="Enter City"
//               onChange={inputCity}
//             />
//             <br />
//             <label for="state">State</label> <br />
//             <input
//               type="text"
//               id="State"
//               name="state"
//               required
//               placeholder="Enter State"
//               onChange={InputState}
//             />
//           </div>

//           <input type="submit" name="submit" value="SUBMIT" class="submit" onClick={orderButton} ></input>
//         </section>
//       </>
//     );
// }

// export default Shipping
