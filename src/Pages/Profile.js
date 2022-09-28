import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './Profile.css';
export default function Profile() {
  return (
    <section className="vh-100" >
      <MDBContainer className="py-10 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
              <MDBCol md="15" className="gradient-custom text-center text-white"
                  style={{ borderRadius: '.5rem', marginRight:"50%" }}>
                  <MDBCardImage src="https://th.bing.com/th/id/R.56c5e471fffcd558b9d508830af78a3a?rik=EeFZyf0xjpoEZg&riu=http%3a%2f%2fgetdrawings.com%2fvectors%2fhuman-symbol-vector-1.png&ehk=WZD17UI9cYgNw7DXsvHZKozfJe7YR%2bWzs2RuO0oCHCM%3d&risl=&pid=ImgRaw&r=0"
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6"><h3>My Proile</h3></MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                    <MDBCol size="7" className="mb-3">
                        <MDBTypography tag="h6"><h5>Name</h5></MDBTypography>
                        <MDBCardText className="text-muted">Rashmi K R</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="pt-1">
                      <MDBCol size="7" className="mb-3">
                        <MDBTypography tag="h6"><h5>Email</h5></MDBTypography>
                        <MDBCardText className="text-muted">info@example.com</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="pt-1">
                    <MDBCol size="7" className="mb-3">
                        <MDBTypography tag="h6"><h5>Phone</h5></MDBTypography>
                        <MDBCardText className="text-muted">9964578956</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}


// import React from 'react';
// import { Container,Row,Col,Form ,Button} from 'react-bootstrap';


// class Profile extends React.Component {
//     constructor(props){
//         super(props);
//         this.state={
//             user_id:this.props.user_id,
//             username:this.props.username,
//             email:this.props.email,
//             profileImage:this.props.profileImage,
//             msg:this.props.msg,
//             uploadedFile:null
//         }
//     }

//     UpdateProfileHandler=(e)=>{
//         e.preventDefault();
//         //create object of form data
//         const formData=new FormData();
//         formData.append("profileImage",this.state.uploadedFile);
//         formData.append("user_id",this.state.user_id);
        
//     }
// render(){

    
//     return (
//         <Container>
//         <Row>
//        <Col>
//        <img src="logo.png" alt="profils pic" />
//        </Col>
//         <Col>
//             <h1>User Profile</h1>
//             <Form className="form">     
//     <p>{this.state.msg}</p>
//   <Form.Group controlId="formCategory1">
//     <Form.Label>Username</Form.Label>
//     <Form.Control type="text" defaultValue={this.state.username}/>
  
//   </Form.Group>
//   <Form.Group controlId="formCategory2">
//     <Form.Label>Email</Form.Label>
//     <Form.Control type="email" defaultValue={this.state.email} />
  
//   </Form.Group>
 
//   <Form.Group controlId="formCategory4">
//     <Form.Label>Profile Image</Form.Label>
//     <Form.Control type="file" name="profileImage" onChange={this.changeProfileImage}/>
//     </Form.Group>
//   <Button variant="primary" onClick={this.UpdateProfileHandler}>Update Profile</Button>
//   </Form>
//    </Col>

//        </Row>
//         </Container>
//     )
// }
// }

   
   

//    export default Profile;