 import React from "react";
 import * as Components from './Components';

 function App() {
     const [signIn, toggle] = React.useState(true);
      return(
          <Components.Container>
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>REGISTER HERE..</Components.Title>
                      <Components.Input type='text' placeholder='Name' />
                      <Components.Input type='text' placeholder='Age' />
                      <Components.Input type='text' placeholder='Gender' />
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Password' />
                      <Components.Button>Register</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form>
                       <Components.Title>Login</Components.Title>
                       <Components.Input type='email' placeholder='email' />
                       <Components.Input type='password' placeholder='Password' />
                       <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                       <Components.Button>Login</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Welcome Back!</Components.Title>
                      <Components.Paragraph>
                          ALREADY HAVE AN ACCOUNT ?
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                         Login
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Crime Hut!</Components.Title>
                        <Components.Paragraph>

                           DON'T HAVE AN ACCOUNT ?
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                            Register
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
      )
 }

 export default App;