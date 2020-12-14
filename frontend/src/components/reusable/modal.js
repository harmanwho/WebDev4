import React from 'react';
import {Modal} from 'react-bootstrap';
import CustomCarousel from "./carousel";
import * as Icon from 'react-bootstrap-icons';
import COLORS from "../../utils/colors";
import "../../css/modal.css";

export default function ModalPop({closePop, showModal, item, heading}) {
    return (
        <>
            <Modal 
                show={showModal}
                onHide={closePop}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >  
                <Modal.Header className="header-std" closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" ><span className="card-about mr-2">Area:</span>{heading}</Modal.Title>
                </Modal.Header> 
                <Modal.Body className="p-0">
                <div className="card shadow">
                    <div className="card-body">
                        <CustomCarousel images={item.images} modal={true}/>
                        <div className="p-2">
                            <div className="title-icons pt-2">
                                <Icon.HouseFill className="card-icon" color={COLORS.lochinvar} size={22}/>
                                <h5 className="card-title d-inline mr-2" dangerouslySetInnerHTML={{__html: item.attrgroup}}></h5>
                                {/* <h5 className="card-title d-inline mr-2" dangerouslySetInnerHTML={{__html: item.attrgroup}}></h5> */}
                                <h5 className="card-title d-inline mr-2 float-right" dangerouslySetInnerHTML={{__html: item["result-price"]}}></h5>
                                <Icon.TagFill className="float-right" color={COLORS.lochinvar} size={22}/>
                            </div>
                            <hr />
                            <p>
                                <span className="card-about mr-2">About:</span>{item.titletextonly}
                            </p>
                            <hr />
                            
                            <Icon.Calendar2CheckFill className="card-icon mr-2" color={COLORS.lochinvar} size={20}/>
                            <div className="card-date d-inline" dangerouslySetInnerHTML={{__html: item.postinginfo}}></div>
                            {/* <div className="dimensions" dangerouslySetInnerHTML={{__html: item.attrgroup}}></div> */}
                            <div>
                                {(item.mapaddress) ? <Icon.GeoFill className="mr-2" color={COLORS.lochinvar} size={20}/> : null}
                                <div className="d-inline" dangerouslySetInnerHTML={{__html: item.mapaddress}}></div>
                            </div>
                            <hr />

                            {/* Put this in modal pop-up */}
                            <div className="pb-3">
                                <span className="card-about mr-2">Details:</span>
                                <div className="card-details" dangerouslySetInnerHTML={{__html: item.postingbody}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                </Modal.Body>
            </Modal>
        </>
    );
}