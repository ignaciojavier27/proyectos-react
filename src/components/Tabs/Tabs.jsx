import { useState } from "react"
import Titulo from "../Titulo"
import "./Tabs.css"

const Tabs = ({ tabsContent, onChange }) => {

    const [ currentTabIndex, setCurrentTabIndex ] = useState(0);

    const handleOnClick = (getCurrentIndex) => {
        setCurrentTabIndex(getCurrentIndex);
        onChange(getCurrentIndex);
    }

    return (
    <article>
        <Titulo titulo="Tabs" />
        <div className="tabs-wrapper">
            <div className="tabs-wrapper-heading">
            {
                tabsContent.map((tab, index) => {
                    return(
                    <div 
                        key={tab.label}
                        onClick={() => handleOnClick(index)}
                        className={`${currentTabIndex === index ? 'active' : ''}`}
                    >
                        <span className="label">{tab.label}</span>
                    </div>
                    )
                })
            }
            </div>
            <div className="tabs-wrapper-content">
            {
                tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
            }
            </div>
        </div>
    </article>
    )
}

export default Tabs
