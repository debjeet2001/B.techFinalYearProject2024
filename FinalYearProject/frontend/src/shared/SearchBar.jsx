import React, {useRef} from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";

const SearchBar = () =>{

    const fromRef = useRef("")
    const toRef = useRef("")
    const dateRef = useRef("")
    const busRef = useRef("")

    const searchHandler = () =>{

        const from = fromRef.current.value
        const to = toRef.current.value
        const date = dateRef.current.value
        const bus = busRef.current.value

        if(from==="" || to === "" || date === "" || bus === ""){
            return alert( "All fields are required!")
        }
    }


    return (
        // <div className="entire__search__bar">
        <Col lg="12"> 
            <div className="search__bar">
                 <Form className="d-flex align-items-center gap-4 cust-form ">
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                         <span>
                         <i class="ri-map-pin-line"></i>
                         </span>
                         <div>
                            <h6>From where?</h6>
                            <input type="text" placeholder="Departure Depot" ref={fromRef} />
                         </div>
                    </FormGroup>

                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                         <span>
                         <i class="ri-map-pin-line"></i>
                         </span>
                         <div>
                            <h6>Where to?</h6>
                            <input type="text" placeholder="Destination Depot" ref={toRef} />
                         </div>
                    </FormGroup>

                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                         <span>
                         <i class="ri-calendar-event-line"></i>
                         </span>
                         <div>
                            <h6>Date</h6>
                            <input type="date" ref={dateRef} /> 
                         </div>
                    </FormGroup>

                    <FormGroup className="d-flex gap-3 form__group form__group-last">
                         <span>
                         <i class="ri-bus-wifi-line"></i>
                         </span>
                         <div>
                            <h6>Bus Type</h6>
                            <input type="text" placeholder="Select Bus" ref={busRef}/>
                         </div>
                    </FormGroup>

                    <span className="search__icon" type ="submit" onClick={searchHandler} >
                        <i class="ri-search-line"></i>
                    </span>

                 </Form>
            </div>
        </Col>
        // </div>
    )
    
};

export default SearchBar;