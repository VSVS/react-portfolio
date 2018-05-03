import React, { Component } from 'react';
import { Responsive, Sidebar, Menu, Grid, Container, Icon, Button, Segment } from 'semantic-ui-react';
import { Link} from 'react-router-dom';

const Navigation = ({ children }) => (
    <div>
      <DesktopNavigation>{children}</DesktopNavigation>
      <MobileNavigation>{children}</MobileNavigation>
    </div>
  )
  

  class DesktopNavigation extends Component { 
    
    render() {
        const { children } = this.props
       
        return (
            <div>
                <Responsive {...Responsive.onlyComputer} minWidth={768}>
                    <header>
                        <Container>
                            <Grid.Row>
                                <Grid.Column>
                                    <Menu>
                                        <Menu.Item as={Link} to="/" position='left'>
                                            <h1>VSVS</h1>
                                        </Menu.Item>
                                        <Menu.Item position='right'>
                                            <Menu.Item as={Link} to='/' name='home'><Icon color='white' name='home'/>Home</Menu.Item>
                                            <Menu.Item as={Link} to='/bio' name='bio'><Icon color='white' name='user circle'/>Bio</Menu.Item>
                                            <Menu.Item as={Link} to='/projects' name='projects'><Icon color='white' name='grid layout'/>Projects</Menu.Item>
                                            <Menu.Item as={Link} to='/resume' name='resume'><Icon color='white' name='file text outline'/>Resume</Menu.Item>
                                            <Menu.Item as={Link} to='/hire' name='hire'><Icon color='white' name='thumbs outline up'/>Hire Me</Menu.Item>
                                        </Menu.Item>
                                    </Menu>
                                </Grid.Column>
                            </Grid.Row>
                        </Container>
                    </header>
                    {children}
                </Responsive>
            </div>
        );
    }
}





  class MobileNavigation extends Component {
    state = {
        visible: false,
        menuIcon: 'ellipsis vertical icon',
        hover: false,
        style: {
          background: ''
        }
    }
    
   
   
    toggleVisibility = () => {

        this.setState({
          visible: !this.state.visible
        });
    
        if (this.state.menuIcon === 'ellipsis vertical icon') {
          this.setState({menuIcon: 'remove'})
        } else {
          this.setState({menuIcon: 'ellipsis vertical icon'})
        }
    }
    
    render() {
        const {visible} = this.state
        const { children } = this.props
       
        return (
            <div>
                <Responsive {...Responsive.onlyMobile}>
                    <Sidebar.Pushable>
                        <Sidebar.Pusher>
                            <header>
                                <Container>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Menu.Item as={Link} to="/" position='left'>
                                                <h1>VSVS</h1>
                                            </Menu.Item>
                                            <Menu.Item position='right'>
                                                <Button style={{zIndex:'9999'}} className='main-menu' onClick={this.toggleVisibility}><Icon name={this.state.menuIcon}/></Button>
                                            </Menu.Item>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Container>
                            </header>

                            <Sidebar
                                as={Menu}
                                animation='push'
                                direction='right'
                                width='thin'
                                visible={visible}
                                icon='labeled'
                                vertical
                                inverted
                                dimmed={visible}
                                >

                                
                                <Menu.Item as={Link} to='/' name='home'><Icon name='home'/>Home</Menu.Item>
                                <Menu.Item as={Link} to='/bio' name='bio'><Icon name='user circle'/>Bio</Menu.Item>
                                <Menu.Item as={Link} to='/projects' name='projects'><Icon name='grid layout'/>Projects</Menu.Item>
                                <Menu.Item as={Link} to='/resume' name='resume'><Icon name='file text outline'/>Resume</Menu.Item>
                                <Menu.Item as={Link} to='/hire' name='hire'><Icon name='thumbs outline up'/>Hire Me</Menu.Item>
                                

                            </Sidebar>
                            {children}
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </Responsive>
                
            </div>
        );
    }
}

export default Navigation;