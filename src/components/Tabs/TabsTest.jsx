import Tabs from "./Tabs.jsx"

const RandomComponent = () => {
    return <h3>Some random content</h3>
}


const TabsTest = () => {
    
    const tabs = [
        {
            label: 'Tab 1',
            content: <div>This is content for Tab 1</div>
        },
        {
            label: 'Tab 2',
            content: <div>This is content for Tab 2</div>
        },
        {
            label: 'Tab 3',
            content: <RandomComponent />
        }
    ]
    
    const handleChange = (currentTabIndex) => {
        console.log(currentTabIndex)
    }

    return <Tabs tabsContent={tabs} onChange={handleChange} />
}

export default TabsTest
