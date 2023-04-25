import React from 'react'
import './productDetail.css'

function ProductDetails() {
  return (
    <div>
        <section className="bestproduct"  id="bestproduct">
  <div id="breadcrumb-bestproduct" className="container-fluid breadcrumb">
     <app-breadcrumb ></app-breadcrumb>
   </div>
 <div className="bestproduct-web">
     <div className="row" id="individual-product" >
       <div className="product-image-container" >
         <div className="row">
           <div className="thumb-container">
               <img className="preview hide-me"  src="/assets/images/png/header.png" alt="" 
            //    className={{imgf == currentimage ? '' :'border'}} 
               style={{height: "auto", width: 100}}/>
           </div>
           <div className="image-container">
             <div>
               <img src="/assets/images/png/header.png" alt="" style={{maxHeight: "450px"}}/>
             </div>
             <div className="hide-me-1">
               <div >
                   <img  id="hide-me-1" src="/assets/images/png/header.png" alt="" className="{{imgf === currentimage ? '' :'border'}}" style={{borderRadius: "none !important"}}/>
               </div>
             </div> 
           </div>
         </div>
       </div>
       <div className="product-detail-container">
         <div className="container">
           <div className="row product-name-price">
             <div className="col-7 col-md-12 p-0">
               <h3>"productname"</h3>
             </div>
             <div className="col-4 col-md-12 p-0">
               <p>&#8377;89<span>/inc.tax</span></p>
             </div>
           </div>
             <div className="row size-information">
               <div className="col-sm-6 col-12">
                 <p className="available-size">Available Size:</p>
                 <b style={{paddingRight: "20px"}} >s</b>
               </div>
               <div className="col-sm-6">
                 <p id="size-chart-btn" className="size-chart" >Size chart</p>
               </div> 
             </div>
           <div className="row">
             <div id="d_size" className="d_size">
               <form>
                 <div className="d_size-1">
                   <div className="select btn-block" style={{height: "40px"}} tabindex="1">
                     <select   className="custom-select" >
                       <option value=''> Select Size</option>
                       <option   >sname</option>
                   </select>
                   </div>
                 </div>
               </form>
             </div>
           </div>
           <div className="row">
             <button  className="add-to-cart" >Add to Cart</button>
           </div>
           <div className="row">
             <b className="description-text">Description</b>
             <div className="description-details col-12 pl-2">
               <div >
                 <div className="row">
                   <div className="col-sm-3 col-md-6 col-lg-6">
                     <p>stitle:</p>
                   </div>
                   <div className="col-sm-6 col-md-6 col-lg-6 description-value">
                     <p className="text-muted ">sdesc</p>
                   </div>
                 </div>
               </div>
               <div className="moreinfo p-0">
                 <a href="/" style={{padding: 0}}>More information</a>
               </div>
             </div>
           </div>
           <div className="row ml-0 ">
             <div className="col-6 p-2">
               <img src="/assets/images/svg/deliver.svg" style={{width: "24px", height: "auto", margin: "5px"}} alt="" />
               <br />
               <b style={{fontSize: "15px", fontWeight: "bold"}}>Order Today, Delivers:</b><br />
               <p className="text-muted" style={{fontSize: "13px"}}>deliverytime Business Days - deliveryfee</p>
             </div>
             <div className="col-6 p-2">
               <img src="/assets/images/svg/lock.svg" style={{width: "24px", height: "24px", margin: "5px"}} alt=""/>
               <br />
               <b style={{"fontSize": "15px"}}>Only in India</b><br />
               <p className="text-muted" style={{fontSize: "13px"}}>Return and exchanges with returntime days</p>
             </div>
           </div>
           <div className="row ml-2">
             <p className=" policy"><b>Delivery / Return  <span style={{fontWeight: "bold", fontSize: "22px"}}>+</span></b></p>
           </div>
         </div>
       </div>
     </div>
 </div>
 <div className="container-custom product-list-container" style={{padding: "0 15px"}}>
  <h3 className="related-products">You may also like</h3>
  <div className="row">
        <div className="col-md-6 col-lg-3" style={{padding: "0px"}} id="product"  >
          <app-productitem 
          ></app-productitem>
        </div>
      </div>
 </div>
</section>

<div id="scroll-up-div">
<section className="bestproduct" id="bestproduct">
 <div className="bestproduct-mobile">
 <div className="product-detail-container">
   <div className="container-custom">
     <div className="row product-name-price">
       <div className="col-4 offset-4">
         <div className="d-flex w-100 justify-content-center">
           <div className="top-line"></div>
         </div>
       </div>
       <div className="col-6">
         <h3>"productname"</h3>
       </div>
       <div className="col-3 offset-3">
         <h3><span style={{fontWeight: 500}}>&#8377;</span>89</h3>
         <p style={{fontSize: "10px"}}>Inclusive of all taxes</p>
       </div>
     </div>
       <div className="row size-information">
         <div className="col-12">
           <p className="available-size mobile-text-template" style={{textTransform: "uppercase"}}>Select on available size</p>
         </div>
         <div className="col-12 d-flex justify-content-center w-100">
           <div className="size-available-mobile" >
             <b className="size-selected-b">s</b>
           </div>
         </div>
       </div>
     <div className="row">
       <div className="col-10 offset-1">
         <button id="add-to-bag-mobile-btn">Add to bag</button>
       </div>
     </div>
     <div className="row">
       <div className="col-10 offset-1">
         <button id="add-to-wishlist-mobile-btn"><i className="bx bx-bookmark" style={{fontSize: "20px"}}></i><span style={{verticalAlign: "top",
           padding: "8px"}}>Add to wishlist</span></button>
       </div>
     </div>
     <div className="description-row px-0">
       <div className="col-12 p-0 d-flex justify-content-between description">
         <b className="description-text">Description</b>
         <p>More <span><b>+</b></span></p>
       </div>
       <div className="description-details px-0 mx-0">
         <div> 
           <div className="row">
             <div className="col-3">
               <p>skey:</p>
             </div>
             <div className="col-9 description-value">
               <p className="text-muted">svalue</p>
             </div>
           </div>
         </div>
       </div>
       <div className="moreinfo col-12 px-0">
         <p><b>Information</b></p>
       </div>
       <div className="col-12 px-0">
         <p id="size-chart-btn" className="down-arrow text-muted" >Size chart</p>
       </div>
       <div className="col-12 px-0">
         <p className="down-arrow text-muted">Return exchange</p>
       </div>
     </div>
     <div className="row">
       <div className="col-6">
         <img src="../../assets/images/svg/deliver.svg" style={{width: "24px", height: "auto", margin: "5px"}} alt="" />
         <br />
         <b style={{fontSize: "15px", fontWeight: "bold"}}>Order Today, Delivers:</b><br />
         <p className="text-muted" style={{fontSize: "13px"}}>deliverytime Business Days - deliveryfee</p>
       </div>
       <div className="col-6">
         <img src="../../assets/images/svg/lock.svg" style={{width: "24px", height: "24px", margin: "5px"}} alt=""/>
         <br />
         <b style={{fontSize: "15px"}}>Only in India</b><br />
         <p className="text-muted" style={{fontSize: "13px"}}>Return and exchanges with returntime days</p>
       </div>
     </div>
     <div className="row">
       <div className="col-12 ">
         <p style={{fontWeight: "bold", textDecoration: "underline"}} className="my-1">Share this item</p>
       </div>
     </div>
   </div>
 </div>
 <div className="scroll-wrapper p-0">
   <div className="d-flex justify-content-between width-alignment">
     <p style={{fontWeight: "bold"}}>You might also like</p>
     <p style={{textDecoration: "underline",textDecorationColor: "#000"}}>Show all</p>
   </div>
   <ul className="horizontal-scroll full no-scrollbar">
     <li className="scroll-item" id="product"  >
       <app-productitem 
         ></app-productitem>
     </li>
   </ul>
 </div>
 </div>
</section>
</div>

<div id="fixed-carousel" className="container-fluid no-space mx-0">
 <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
   <div className="carousel-inner">
     <div className="carousel-item active">
       <img className="d-block w-100" src="/assets/images/png/header.png" alt="First slide" />
     </div>
     <div className="carousel-item">
       <img className="d-block w-100" src="/assets/images/png/header.png" alt="Second slide" />
     </div>
     <div className="carousel-item">
       <img className="d-block w-100" src="/assets/images/png/header.png" alt="Third slide" />
     </div>
   </div>
   <ol className="carousel-indicators">
     <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
   </ol>
   <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
     <span className="sr-only">Previous</span>
   </a>
   <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
     <span className="carousel-control-next-icon" aria-hidden="true"></span>
     <span className="sr-only">Next</span>
   </a>
 </div>
</div> 

<div id="size-chart">
  <div className="size-chart-popup">
    <div className="close-btn-popup">
      <span className="iconify" data-icon="ant-design:close-circle-filled" data-inline="false"></span>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 ">
          <h2>Size Chart</h2>
        </div>
        <div className="col-12">
          <ul>
            <li>
              You have 7 days from the date of delivery to return your purchased item in Order to claim a refund.
            </li>
            <li className="my-3">
              Usually the refund would initiate after 5 - 10 days as the packages reach us.
            </li>
            <li className="my-3">
              While returning the item for a refund, the shipping charges will not be refunded with it. Because we do not cover shipping in zero Armario.
            </li>
          </ul>
        </div>
        <div className="col-12">
          <img src="../../assets/images/png/Size Chart.png" alt="" srcset="" />
        </div>
      </div>
    </div>
  </div>
</div>



    </div>
  )
}

export default ProductDetails