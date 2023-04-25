import { event } from "jquery";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './MobileSwitchWidget.scss';

function MobileSwitchWidget(props) {
    console.log('switchwidgetdata----', props)
    const [leftMenuItems, setLeftmenuItems] = useState(props.menuData);
    const [currIndex, setCurrIndex] = useState();
    let count;

    const navigate = useNavigate();

    function routingData(index, url) {
        count = index;
        setCurrIndex(index);
        navigate(url);
    }

    useEffect(() => {
        if (count > 0) {
            setCurrIndex(count);
        }
        setLeftmenuItems(leftMenuItems);
    }, [currIndex]);
    return (
        <section className="mobileSwitchWidgetContainer">
            <ul className="" style={{ marginLeft: "20px" }}>
                {
                    leftMenuItems.map((data, index) => {
                        return (
                            <li className={currIndex == index ? "active" : "non-active"} key={data.id} onClick={() => routingData(index, data.url)}>
                                {data.title}
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}



export default MobileSwitchWidget;