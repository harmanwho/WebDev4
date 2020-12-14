import React, {useState} from "react";
import "../../css/card.css";
import CustomCarousel from "./carousel";
import * as Icon from 'react-bootstrap-icons';
import COLORS from "../../utils/colors";
import ModalPop from "../reusable/modal";
import Button from "../reusable/button";

function Card({element}) {
    const [show, setShow] = useState(false);

    const titleText = element["result-hood"].replace(/[()]/g,"");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
	return (	
        <div className="card shadow">
            <div className="card-header">
                <h4 className="m-0 d-inline"><span className="card-about mr-2">Area:</span>{titleText}</h4>
                <div className="float-right" >
                    <Button type="success" action={handleShow} text="Expand"/> 
                </div>
            </div>
            <div className="card-body">
                <CustomCarousel images={element.images}/>
                <div className="title-icons pt-2">
                    <Icon.HouseFill className="card-icon" color={COLORS.lochinvar} size={22}/>
                    <h5 className="card-title d-inline mr-2" dangerouslySetInnerHTML={{__html: element.attrgroup}}></h5>
                    {/* <h5 className="card-title d-inline mr-2" dangerouslySetInnerHTML={{__html: element.attrgroup}}></h5> */}
                    <h5 className="card-title d-inline mr-2 float-right" dangerouslySetInnerHTML={{__html: element["result-price"]}}></h5>
                    <Icon.TagFill className="float-right" color={COLORS.lochinvar} size={22}/>
                </div>
                
                <p className="card-text">
                    <span className="card-about mr-2">About:</span>{element.titletextonly}
                </p>
                
                <Icon.Calendar2CheckFill className="card-icon mr-2" color={COLORS.lochinvar} size={20}/>
                <div className="card-date d-inline" dangerouslySetInnerHTML={{__html: element.postinginfo}}></div>
                {/* <div className="dimensions" dangerouslySetInnerHTML={{__html: element.attrgroup}}></div> */}
                <div>
                    <Icon.GeoFill className="mr-2" color={COLORS.lochinvar} size={20}/>
                    {(element.mapaddress) 
                        ? <div className="map d-inline" dangerouslySetInnerHTML={{__html: element.mapaddress}}></div>
                        : <div className="map d-inline">N/A</div>
                    }
                </div>
                {/* Put this in modal pop-up */}
                {/* <div className="card-details" dangerouslySetInnerHTML={{__html: element.postingbody}}></div> */}
            </div>
            <ModalPop 
                item={element}
                closePop={handleClose}
                showModal={show}
                heading={titleText}
            />
        </div>
	);
}
export default Card;
