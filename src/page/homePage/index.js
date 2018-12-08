import React from 'react'
import Body from '../../Component/Body/body'
import Header from '../../Component/Header/header'
import Menu from '../../Component/Menu/menu'

class HomePage extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Menu/>
                <Body/>
            </div>            

        )
    }
}
export default HomePage;