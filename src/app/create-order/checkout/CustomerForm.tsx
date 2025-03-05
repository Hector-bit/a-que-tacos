

// const CustomerForm = () => {
//   return (
//       <div className="flex flex-col justify-between mb-4 mt-8 gap-3">
//         <div className="flex flex-row justify-between">
//           <h2 className="text-3xl font-extrabold">Customer Information</h2>
//           {/* <button className={`bg-flagGreen py-2 px-3 ${btnCheckout}`} onClick={() => saveCustomerInfo(customerState)}>Save Info</button> */}
//         </div>
//         <form className="flex flex-col ">
//           <div className="max-w-[450px] flex flex-col">
//             <label>First Name:</label>
//             <input 
//               // id="firstname"
//               // name="formFirstname"
//               className="peer"
//               aria-describedby="customer-error"
//               type="text"
//               onChange={(e) => setCustomerState({...customerState, firstName: e.target.value })}
//               value={customerState.firstName}
//               placeholder=" first name"
//             />
//             <div id="customer-error" aria-live="polite" aria-atomic="true">
//               {errorMessages?.firstname &&
//                 errorMessages.firstname.map((error: string) => (
//                   <p className="mt-2 text-sm text-red-500" key={error}>
//                     {error}
//                   </p>
//               ))}
//             </div>
//             <label htmlFor="lastname">Last Name:</label>
//             <input 
//               // id="lastname"
//               // name="formLastname" 
//               className="peer"
//               aria-describedby="customer-error"
//               type="text"
//               onChange={(e) => setCustomerState({...customerState, lastName: e.target.value })}
//               value={customerState.lastName}
//               placeholder=" last name"
//             />
//             <div id="customer-error" aria-live="polite" aria-atomic="true">
//               {errorMessages?.lastname &&
//                 errorMessages.lastname.map((error: string) => (
//                   <p className="mt-2 text-sm text-red-500" key={error}>
//                     {error}
//                   </p>
//               ))}
//             </div>
//             <label>Email:</label>
//             <input 
//               // id="email"
//               // name="formEmail" 
//               className="peer"
//               aria-describedby="customer-error"
//               type="text"
//               onChange={(e) => setCustomerState({...customerState, email: e.target.value })}
//               value={customerState.email}
//               placeholder=" email"
//             />
//             <div id="customer-error" aria-live="polite" aria-atomic="true">
//               {errorMessages?.email &&
//                 errorMessages.email.map((error: string) => (
//                   <p className="mt-2 text-sm text-red-500" key={error}>
//                     {error}
//                   </p>
//               ))}
//             </div>
//             <label htmlFor="phone number">Phone Number:</label>
//             <input 
//               // id='phone_number'
//               // name="formPhone" 
//               className="peer"
//               type="tel"
//               aria-describedby="customer-error"
//               onChange={(e) => setCustomerState({...customerState, phoneNumber: e.target.value })}
//               value={customerState.phoneNumber}
//               placeholder=" phone number"
//             />
//             <div id="customer-error" aria-live="polite" aria-atomic="true">
//               {errorMessages?.phoneNumber &&
//                 errorMessages.phoneNumber.map((error: string) => (
//                   <p className="mt-2 text-sm text-red-500" key={error}>
//                     {error}
//                   </p>
//                 ))}
//             </div>

//           </div>
//           {/* TOTAL & BUTTONS  */}
//         </form>
//         <div className="flex flex-row justify-between items-center mt-4">
//           <div className="font-bold text-lg">Total: ${orderTotal.toFixed(2)}</div>
//           <button 
//             className={`text-lg bg-flagGreen py-2 px-5  ${btnCheckout}`} 
//             onClick={async() => {
//               let testing = await fetchCloverLink(cart, customerState);
//               console.log('testing thingy: ', typeof(testing), testing)
//               if(testing){
//                 setErrorMessages(testing)
//               }
//             }}
//           >
//               Checkout
//           </button>
//         </div>
//       </div>
//   )
// }